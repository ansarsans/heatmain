<?php

declare(strict_types=1);

ini_set('display_errors', '0');
set_time_limit(10);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('X-Content-Type-Options: nosniff');

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

$phone = one_line((string) ($data['phone'] ?? ''));
$email = strtolower(one_line((string) ($data['email'] ?? '')));
$message = trim((string) ($data['message'] ?? ''));
$message = str_replace(["\r\n", "\r"], "\n", $message);
$message = str_replace("\0", '', $message);
$privacyAccepted = ($data['privacyAccepted'] ?? false) === true;
$marketingAccepted = ($data['marketingAccepted'] ?? false) === true;
$policyVersion = one_line((string) ($data['privacyPolicyVersion'] ?? ''));
$submittedAt = one_line((string) ($data['submittedAt'] ?? ''));

if (!$privacyAccepted || $message === '' || ($phone === '' && $email === '')) {
    respond(422, ['ok' => false]);
}

if (
    text_length($phone) > 50
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

$body = implode("\n", [
    'Новая заявка с сайта heatenergycapital.kz',
    '',
    'Номер заявки: ' . $requestId,
    'Телефон: ' . ($phone !== '' ? $phone : 'не указан'),
    'Email: ' . ($email !== '' ? $email : 'не указан'),
    '',
    'Сообщение:',
    $message,
    '',
    'Согласие на обработку персональных данных: да',
    'Согласие на информационные и рекламные сообщения: ' . ($marketingAccepted ? 'да' : 'нет'),
    'Версия политики: ' . ($policyVersion !== '' ? $policyVersion : 'не указана'),
    'Время отправки клиентом (UTC): ' . ($submittedAt !== '' ? $submittedAt : 'не указано'),
    'Время приёма сервером (UTC): ' . gmdate('c'),
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

