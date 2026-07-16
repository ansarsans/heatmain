"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import { useTranslation } from "@/lib/i18n"
import { TWO_GIS_GEO_PAGE } from "@/components/two-gis-embed"
import { submitFeedback } from "@/lib/feedback-api"
import { BrandLogo } from "@/components/brand-logo"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")
  const [hint, setHint] = useState("")

  async function onInquirySubmit(e: FormEvent) {
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
    <footer className="relative overflow-hidden border-t border-blue-100 bg-[#eaf4ff] text-slate-900">
      {/* Decorative Blur */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0241c0]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <BrandLogo size={36} className="bg-white ring-1 ring-blue-100" />
              <span className="text-lg font-bold tracking-tight">Heat Energy Capital</span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              {t("nav.home")}
            </h4>
            <nav className="flex flex-col gap-4" aria-label="Footer navigation">
              {[
                { href: "/catalog", label: t("nav.catalog") },
                { href: "/about", label: t("nav.about") },
                { href: "/contacts", label: t("nav.contacts") }
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-600 transition-colors hover:text-[#0756b8]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              {t("contacts.title")}
            </h4>
            <div className="space-y-6 text-sm text-slate-600">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t("contacts.email")}
                </span>
                <a
                  href="mailto:heatenergy@inbox.ru"
                  className="font-medium text-slate-900 transition-colors hover:text-[#0756b8]"
                >
                  heatenergy@inbox.ru
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t("contacts.address")}
                </span>
                <a
                  href={TWO_GIS_GEO_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-slate-900 transition-colors hover:text-[#0756b8]"
                >
                  {t("contacts.address_full")}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Inquiry */}
          <div className="lg:pt-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              {t("nav.inquiry")}
            </h4>
            <p className="mb-3 text-[11px] leading-relaxed text-slate-500">{t("contacts.form_hint")}</p>
            <form className="space-y-4" onSubmit={onInquirySubmit}>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder={t("contacts.phone_label")}
                className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0756b8]"
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t("contacts.email_label")}
                className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0756b8]"
              />
              <textarea
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={t("contacts.message_label")}
                rows={3}
                className="w-full resize-none rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0756b8]"
              />
              {hint ? <p className="text-[11px] text-red-300">{hint}</p> : null}
              {status === "ok" ? (
                <p className="text-[11px] font-medium text-emerald-400">{t("feedback.sent_ok")}</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-[#0241c0] px-4 py-3 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
              >
                {status === "sending" ? t("feedback.sending") : t("contacts.send_button")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-blue-100 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-medium text-slate-500">
            © {year} Heat Energy Capital. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
