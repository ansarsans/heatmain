/** DigitalOcean Serverless — отправка заявок на email */
export const FEEDBACK_WEBHOOK_URL =
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-a58468d6-3418-4e73-9aff-b9949a1efe5d/openai/ansar_send_mail_ansar"

export type FeedbackPayload = {
  message: string
  phone?: string
  email?: string
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

  const res = await fetch(FEEDBACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_phone: phone,
      email,
      additional_info: message,
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
