<?php

declare(strict_types=1);

ini_set('display_errors', '0');
set_time_limit(10);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('X-Content-Type-Options: nosniff');

const CONSENT_VERSION = '2026-09-04-kz-v2';
const UTC_PLUS_FIVE = '+05:00';

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function one_line(string $value): string
{
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', trim($value));
    return is_string($value) ? preg_replace('/\s+/u', ' ', $value) ?? '' : '';
}

function now_utc_plus_five(): string
{
    return (new DateTimeImmutable('now', new DateTimeZone(UTC_PLUS_FIVE)))
        ->format('Y-m-d\TH:i:sP');
}

function consent_storage_directory(): string
{
    $documentRoot = rtrim((string) ($_SERVER['DOCUMENT_ROOT'] ?? ''), DIRECTORY_SEPARATOR);
    $baseDirectory = $documentRoot !== '' ? dirname($documentRoot) : sys_get_temp_dir();
    return $baseDirectory . DIRECTORY_SEPARATOR . '.hec-private';
}

function load_or_create_consent_key(string $directory): ?string
{
    $keyPath = $directory . DIRECTORY_SEPARATOR . 'consent.key';
    $encodedKey = @file_get_contents($keyPath);
    if (is_string($encodedKey)) {
        $key = base64_decode(trim($encodedKey), true);
        if (is_string($key) && strlen($key) === 32) {
            return $key;
        }
    }

    try {
        $newKey = random_bytes(32);
    } catch (Throwable $error) {
        return null;
    }

    $handle = @fopen($keyPath, 'x');
    if ($handle === false) {
        $encodedKey = @file_get_contents($keyPath);
        $key = is_string($encodedKey) ? base64_decode(trim($encodedKey), true) : false;
        return is_string($key) && strlen($key) === 32 ? $key : null;
    }

    try {
        if (fwrite($handle, base64_encode($newKey) . "\n") === false) {
            return null;
        }
        fflush($handle);
    } finally {
        fclose($handle);
    }

    @chmod($keyPath, 0600);
    return $newKey;
}

function persist_consent_record(array $record): bool
{
    if (!function_exists('openssl_encrypt')) {
        return false;
    }

    $directory = consent_storage_directory();
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        return false;
    }
    @chmod($directory, 0700);
    @file_put_contents(
        $directory . DIRECTORY_SEPARATOR . '.htaccess',
        "Require all denied\nDeny from all\n",
        LOCK_EX
    );

    $key = load_or_create_consent_key($directory);
    $plainText = json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($key === null || !is_string($plainText)) {
        return false;
    }

    try {
        $nonce = random_bytes(12);
    } catch (Throwable $error) {
        return false;
    }

    $tag = '';
    $cipherText = openssl_encrypt(
        $plainText,
        'aes-256-gcm',
        $key,
        OPENSSL_RAW_DATA,
        $nonce,
        $tag
    );
    if (!is_string($cipherText)) {
        return false;
    }

    $envelope = json_encode([
        'v' => 1,
        'alg' => 'AES-256-GCM',
        'nonce' => base64_encode($nonce),
        'tag' => base64_encode($tag),
        'data' => base64_encode($cipherText),
    ], JSON_UNESCAPED_SLASHES);
    if (!is_string($envelope)) {
        return false;
    }

    $logPath = $directory . DIRECTORY_SEPARATOR . 'consents.ndjson';
    $handle = @fopen($logPath, 'ab');
    if ($handle === false) {
        return false;
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return false;
        }
        $written = fwrite($handle, $envelope . "\n");
        fflush($handle);
        flock($handle, LOCK_UN);
    } finally {
        fclose($handle);
    }

    @chmod($logPath, 0600);
    return $written === strlen($envelope) + 1;
}

function rate_limit_allows(string $clientIp): bool
{
    $windowSeconds = 600;
    $maximumRequests = 5;
    $path = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'hec-contact-'
        . hash('sha256', $clientIp)
        . '.json';

    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        return true;
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return true;
        }

        $raw = stream_get_contents($handle);
        $entries = is_string($raw) && $raw !== '' ? json_decode($raw, true) : [];
        if (!is_array($entries)) {
            $entries = [];
        }

        $now = time();
        $entries = array_values(array_filter(
            $entries,
            static fn ($timestamp): bool => is_int($timestamp) && $timestamp > $now - $windowSeconds
        ));

        if (count($entries) >= $maximumRequests) {
            flock($handle, LOCK_UN);
            return false;
        }

        $entries[] = $now;
        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode($entries));
        fflush($handle);
        flock($handle, LOCK_UN);
        return true;
    } finally {
        fclose($handle);
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false]);
}

$contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
if (strpos($contentType, 'application/json') !== 0) {
    respond(415, ['ok' => false]);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 16384) {
    respond(413, ['ok' => false]);
}

$allowedOrigins = [
    'https://heatenergycapital.kz',
    'https://www.heatenergycapital.kz',
];
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    respond(403, ['ok' => false]);
}

$rawBody = file_get_contents('php://input', false, null, 0, 16385);
if (!is_string($rawBody) || strlen($rawBody) > 16384 || !preg_match('//u', $rawBody)) {
    respond(400, ['ok' => false]);
}

$data = json_decode($rawBody, true);
if (!is_array($data)) {
    respond(400, ['ok' => false]);
}

// Honeypot: legitimate visitors never fill this hidden field.
if (trim((string) ($data['website'] ?? '')) !== '') {
    respond(200, ['ok' => true]);
}

$fullName = one_line((string) ($data['fullName'] ?? ''));
$phone = one_line((string) ($data['phone'] ?? ''));
$email = strtolower(one_line((string) ($data['email'] ?? '')));
$message = trim((string) ($data['message'] ?? ''));
$message = str_replace(["\r\n", "\r"], "\n", $message);
$message = str_replace("\0", '', $message);
$privacyAccepted = ($data['privacyAccepted'] ?? false) === true;
$marketingAccepted = ($data['marketingAccepted'] ?? false) === true;

if (!$privacyAccepted || $fullName === '' || $message === '' || ($phone === '' && $email === '')) {
    respond(422, ['ok' => false]);
}

if (
    text_length($fullName) < 2
    || text_length($fullName) > 200
    || text_length($phone) > 50
    || text_length($email) > 254
    || text_length($message) > 3000
    || ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false)
    || ($phone !== '' && preg_match('/^[0-9+()\-\s]{5,50}$/', $phone) !== 1)
) {
    respond(422, ['ok' => false]);
}

$clientIp = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (!rate_limit_allows($clientIp)) {
    header('Retry-After: 600');
    respond(429, ['ok' => false]);
}

try {
    $requestId = bin2hex(random_bytes(6));
} catch (Throwable $error) {
    $requestId = str_replace('.', '', uniqid('', true));
}

$recipient = 'info@heatenergycapital.kz';
$sender = 'website@heatenergycapital.kz';
$subjectText = 'Новая заявка с heatenergycapital.kz [' . $requestId . ']';
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';
$receivedAtUtcPlusFive = now_utc_plus_five();

$consentRecord = [
    'request_id' => $requestId,
    'received_at_utc_plus_5' => $receivedAtUtcPlusFive,
    'subject' => [
        'full_name' => $fullName,
        'phone' => $phone !== '' ? $phone : null,
        'email' => $email !== '' ? $email : null,
    ],
    'personal_data_consent' => [
        'accepted' => true,
        'version' => CONSENT_VERSION,
    ],
    'marketing_consent' => [
        'accepted' => $marketingAccepted,
        'version' => CONSENT_VERSION,
    ],
    'request_context' => [
        'origin' => $origin !== '' ? $origin : null,
        'client_ip' => $clientIp,
        'user_agent' => one_line(substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 500)),
    ],
];

if (!persist_consent_record($consentRecord)) {
    error_log('Consent record could not be stored; request_id=' . $requestId);
    respond(503, ['ok' => false]);
}

$body = implode("\n", [
    'Новая заявка с сайта heatenergycapital.kz',
    '',
    'Номер заявки: ' . $requestId,
    'ФИО: ' . $fullName,
    'Телефон: ' . ($phone !== '' ? $phone : 'не указан'),
    'Email: ' . ($email !== '' ? $email : 'не указан'),
    '',
    'Сообщение:',
    $message,
    '',
    'Основное согласие на обработку персональных данных: принято',
    'Отдельное согласие на информационные и рекламные сообщения: ' . ($marketingAccepted ? 'принято' : 'не принято'),
    'Версия согласия: ' . CONSENT_VERSION,
    'Время получения сервером (UTC+5): ' . $receivedAtUtcPlusFive,
]);

$headers = [
    'From: Heat Energy Capital Website <' . $sender . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Auto-Response-Suppress: All',
];

if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$sent = @mail($recipient, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    error_log('Contact form delivery failed; request_id=' . $requestId);
    respond(502, ['ok' => false]);
}

respond(200, ['ok' => true, 'message' => 'Sent', 'requestId' => $requestId]);
