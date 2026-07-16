"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useTranslation } from "@/lib/i18n"
import { TwoGisEmbed, TWO_GIS_GEO_PAGE } from "@/components/two-gis-embed"
import { Mail, MapPin, Clock, ExternalLink, Send } from "lucide-react"
import { submitFeedback } from "@/lib/feedback-api"

export default function ContactsPage() {
  const { t, locale } = useTranslation()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
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
      value: "heatenergy.website@mail.ru",
      href: "mailto:heatenergy.website@mail.ru",
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
    const m = message.trim()
    const p = phone.trim()
    const em = email.trim()
    if (!m || (!p && !em)) {
      setHint(t("contacts.form_hint"))
      return
    }
    setStatus("sending")
    try {
      const res = await submitFeedback({
        message: m,
        phone: p || undefined,
        email: em || undefined,
      })
      if (res.ok) {
        setStatus("ok")
        setMessage("")
        setPhone("")
        setEmail("")
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
    <main className="min-h-screen bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 border-b border-zinc-200 pb-10">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl text-balance">
            {t("contacts.title")}
          </h1>
          <p className="text-lg text-zinc-600 text-pretty">{t("contacts.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex h-full flex-col rounded-xl border border-border/50 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">{t("contacts.form_title")}</h2>
              <p className="mt-2 text-xs text-zinc-500">{t("contacts.form_hint")}</p>
              <div className="mt-4 w-full border-b-2 border-zinc-200" />
            </div>

            <form className="flex flex-1 flex-col space-y-5" onSubmit={onSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10"
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
                  className="w-full rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10"
                  placeholder={t("contacts.phone_label")}
                />
              </div>

              <div className="flex flex-1 flex-col">
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="min-h-[120px] w-full flex-1 resize-none rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10"
                  placeholder={t("contacts.message_label")}
                />
              </div>

              {hint ? <p className="text-xs text-red-600">{hint}</p> : null}
              {status === "ok" ? (
                <p className="text-xs font-medium text-emerald-700">{t("feedback.sent_ok")}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-[#1a1c21] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a2d33] active:scale-[0.98] disabled:opacity-60"
              >
                <span>{status === "sending" ? t("feedback.sending") : t("contacts.send_button")}</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          <div className="border-l border-r border-zinc-200 bg-transparent px-8 pb-2 pt-8 lg:px-12">
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
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm font-medium text-[#1a1c21] transition-colors hover:text-[#0241c0]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-[#1a1c21]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-dashed border-border/60 bg-white/50 p-5">
              <p className="text-sm italic leading-relaxed text-muted-foreground">"{t("contacts.note")}"</p>
            </div>
          </div>

          <div className="flex flex-col pt-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">{t("contacts.location_title")}</h2>
              <div className="mt-4 w-full border-b-2 border-zinc-200" />
            </div>

            <div className="relative flex min-h-[400px] flex-1 flex-col overflow-hidden rounded-xl border border-border/40 bg-zinc-100 shadow-sm">
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
