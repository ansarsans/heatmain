/** Обработчик размещается на том же домене в казахстанском дата-центре. */
export const FEEDBACK_ENDPOINT = "/api/contact.php"

export type FeedbackPayload = {
  fullName: string
  message: string
  phone?: string
  email?: string
  privacyAccepted: boolean
  marketingAccepted: boolean
  website?: string
}

export type FeedbackResponse = {
  ok: boolean
  message?: string
  error?: string
}

export async function submitFeedback(payload: FeedbackPayload): Promise<FeedbackResponse> {
  const fullName = payload.fullName.trim()
  const phone = (payload.phone ?? "").trim()
  const email = (payload.email ?? "").trim()
  const message = (payload.message ?? "").trim()
  if (!payload.privacyAccepted) {
    return { ok: false, error: "Privacy consent is required" }
  }

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 12_000)

  let res: Response
  try {
    res = await fetch(FEEDBACK_ENDPOINT, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fullName,
        phone,
        email,
        message,
        website: payload.website ?? "",
        privacyAccepted: true,
        marketingAccepted: payload.marketingAccepted,
      }),
      signal: controller.signal,
    })
  } finally {
    window.clearTimeout(timeout)
  }

  let data: FeedbackResponse
  try {
    data = (await res.json()) as FeedbackResponse
  } catch {
    return { ok: false }
  }

  if (!res.ok || !data.ok) {
    return { ok: false }
  }
  return data
}
