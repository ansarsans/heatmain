"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useTranslation } from "@/lib/i18n"
import { TwoGisEmbed, TWO_GIS_GEO_PAGE } from "@/components/two-gis-embed"
import { Mail, MapPin, Clock, ExternalLink, Phone, Send } from "lucide-react"
import { submitFeedback } from "@/lib/feedback-api"
import { PrivacyConsent } from "@/components/privacy-consent"

export default function ContactsPage() {
  const { t, locale } = useTranslation()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [marketingAccepted, setMarketingAccepted] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")
  const [hint, setHint] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return
    const q = new URLSearchParams(window.location.search).get("product")
    if (!q) return
    const line = `${t("contacts.prefill_product")}: ${q}`
    setMessage(prev => (prev.trim() ? prev : line))
  }, [t])

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t("contacts.email"),
      value: "info@heatenergycapital.kz",
      href: "mailto:info@heatenergycapital.kz",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t("contacts.phone"),
      value: t("contacts.phone_placeholder"),
      href: "tel:+77017734444",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t("contacts.address"),
      value: t("contacts.address_full"),
      href: TWO_GIS_GEO_PAGE,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: t("contacts.hours"),
      value: t("contacts.hours.value"),
      href: undefined,
    },
  ]

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setHint("")
    const form = e.currentTarget as HTMLFormElement
    const m = message.trim()
    const p = phone.trim()
    const em = email.trim()
    const website = String(new FormData(form).get("website") ?? "")
    if (!m || (!p && !em)) {
      setHint(t("contacts.form_hint"))
      return
    }
    if (!privacyAccepted) {
      setHint(t("privacy.form.required_error"))
      return
    }
    setStatus("sending")
    try {
      const res = await submitFeedback({
        message: m,
        phone: p || undefined,
        email: em || undefined,
        privacyAccepted,
        marketingAccepted,
        website,
      })
      if (res.ok) {
        setStatus("ok")
        setMessage("")
        setPhone("")
        setEmail("")
        setPrivacyAccepted(false)
        setMarketingAccepted(false)
      } else {
        setStatus("err")
        setHint(res.error ?? t("feedback.fail"))
      }
    } catch {
      setStatus("err")
      setHint(t("feedback.fail"))
    }
  }

  return (
    <main className="min-h-screen bg-[#fcfcfc] pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 border-b border-zinc-200 pb-7 sm:mb-12 sm:pb-10">
          <h1 className="mb-3 text-[1.75rem] font-bold tracking-tight text-zinc-900 sm:mb-4 sm:text-3xl lg:text-4xl text-balance">
            {t("contacts.title")}
          </h1>
          <p className="text-base leading-6 text-zinc-600 sm:text-lg text-pretty">{t("contacts.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="flex h-full flex-col rounded-xl border border-border/50 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">{t("contacts.form_title")}</h2>
              <p className="mt-2 text-xs text-zinc-500">{t("contacts.form_hint")}</p>
              <div className="mt-4 w-full border-b-2 border-zinc-200" />
            </div>

            <form className="flex flex-1 flex-col space-y-5" onSubmit={onSubmit}>
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  maxLength={254}
                  className="min-h-12 w-full rounded-lg border border-border/60 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10 sm:text-sm"
                  placeholder={t("contacts.email_label")}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  maxLength={50}
                  className="min-h-12 w-full rounded-lg border border-border/60 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10 sm:text-sm"
                  placeholder={t("contacts.phone_label")}
                />
              </div>

              <div className="flex flex-1 flex-col">
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  maxLength={3000}
                  className="min-h-[140px] w-full flex-1 resize-y rounded-lg border border-border/60 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10 sm:min-h-[120px] sm:resize-none sm:text-sm"
                  placeholder={t("contacts.message_label")}
                />
              </div>

              <PrivacyConsent
                privacyAccepted={privacyAccepted}
                onPrivacyAcceptedChange={setPrivacyAccepted}
                marketingAccepted={marketingAccepted}
                onMarketingAcceptedChange={setMarketingAccepted}
              />

              {hint ? <p className="text-xs text-red-600">{hint}</p> : null}
              {status === "ok" ? (
                <p className="text-xs font-medium text-emerald-700">{t("feedback.sent_ok")}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-auto flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#1a1c21] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a2d33] active:scale-[0.98] disabled:opacity-60"
              >
                <span>{status === "sending" ? t("feedback.sending") : t("contacts.send_button")}</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          <div className="bg-transparent py-2 lg:border-l lg:border-r lg:border-zinc-200 lg:px-12 lg:pb-2 lg:pt-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">{t("contacts.info_title")}</h2>
              <div className="mt-4 w-full border-b-2 border-zinc-200" />
            </div>

            <div className="space-y-8">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#1a1c21] shadow-sm">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block break-words text-sm font-medium leading-6 text-[#1a1c21] transition-colors hover:text-[#0241c0]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-sm font-medium leading-6 text-[#1a1c21]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-dashed border-border/60 bg-white/50 p-5">
              <p className="text-sm italic leading-relaxed text-muted-foreground">"{t("contacts.note")}"</p>
            </div>
          </div>

          <div className="flex flex-col pt-2 lg:pt-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">{t("contacts.location_title")}</h2>
              <div className="mt-4 w-full border-b-2 border-zinc-200" />
            </div>

            <div className="relative flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-xl border border-border/40 bg-zinc-100 shadow-sm sm:min-h-[400px]">
              <TwoGisEmbed height={400} locale={locale} />
              <p className="border-t border-zinc-200 bg-zinc-50 px-4 py-2 text-center text-xs text-zinc-500">
                {t("contacts.map_embed_note")}
              </p>
              <div className="border-t border-zinc-200 bg-white px-4 py-3">
                <a
                  href={TWO_GIS_GEO_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#1a1c21] px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#2a2d33]"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("contacts.view_map")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
