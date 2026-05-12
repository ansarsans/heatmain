/** DigitalOcean Serverless — отправка заявок в Telegram */
export const FEEDBACK_WEBHOOK_URL =
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-a58468d6-3418-4e73-9aff-b9949a1efe5d/openai/ansar_send_feedback_ansar"

export type FeedbackPayload = {
  message: string
  phone?: string
  email?: string
  /** например id товара из ?product= */
  source?: string
}

export type FeedbackResponse = {
  ok: boolean
  message?: string
  whatsapp_url?: string | null
  whatsapp_url_digits?: string | null
  error?: string
}

export async function submitFeedback(payload: FeedbackPayload): Promise<FeedbackResponse> {
  const phone = (payload.phone ?? "").trim()
  const email = (payload.email ?? "").trim()
  const message = (payload.message ?? "").trim()
  const source = (payload.source ?? "").trim()

  const res = await fetch(FEEDBACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_phone: phone,
      email,
      additional_info: message,
      source,
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
