/** DigitalOcean Serverless — отправка заявок на email */
export const FEEDBACK_WEBHOOK_URL =
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-a58468d6-3418-4e73-9aff-b9949a1efe5d/openai/ansar_send_mail_ansar"

export type FeedbackPayload = {
  message: string
  phone?: string
  email?: string
  privacyAccepted: boolean
  marketingAccepted: boolean
}

export type FeedbackResponse = {
  ok: boolean
  message?: string
  error?: string
}

export async function submitFeedback(payload: FeedbackPayload): Promise<FeedbackResponse> {
  const phone = (payload.phone ?? "").trim()
  const email = (payload.email ?? "").trim()
  const message = (payload.message ?? "").trim()
  const submittedAt = new Date().toISOString()

  if (!payload.privacyAccepted) {
    return { ok: false, error: "Privacy consent is required" }
  }

  const consentRecord = [
    "---",
    "Согласие на обработку и трансграничную передачу: да",
    "Версия политики: 04.09.2026",
    `Согласие на информационные и рекламные сообщения: ${payload.marketingAccepted ? "да" : "нет"}`,
    `Дата и время отправки (UTC): ${submittedAt}`,
  ].join("\n")

  const res = await fetch(FEEDBACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_phone: phone,
      email,
      additional_info: `${message}\n\n${consentRecord}`,
      privacy_accepted: true,
      marketing_accepted: payload.marketingAccepted,
      privacy_policy_version: "2026-09-04",
      submitted_at: submittedAt,
    }),
  })

  let data: FeedbackResponse
  try {
    data = (await res.json()) as FeedbackResponse
  } catch {
    return { ok: false, error: "Invalid response" }
  }

  if (!res.ok) {
    return { ok: false, error: data.error ?? res.statusText }
  }
  return data
}
