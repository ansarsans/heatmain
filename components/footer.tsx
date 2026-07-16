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
    <footer id="footer" className="border-t border-[#193b5e] bg-[linear-gradient(135deg,#071421_0%,#0a2035_58%,#0a2b48_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[1.15fr_.65fr_1fr_1.15fr] lg:gap-8 lg:pb-10">
          {/* Brand & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <BrandLogo size={34} className="bg-white ring-1 ring-white/15" />
              <span className="text-sm font-semibold tracking-tight text-white">Heat Energy Capital</span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-300">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
              {t("nav.home")}
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {[
                { href: "/catalog", label: t("nav.catalog") },
                { href: "/about", label: t("nav.about") },
                { href: "/contacts", label: t("nav.contacts") }
              ].map(link => (
                <Link key={link.href} href={link.href} className="w-fit text-xs text-slate-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
              {t("contacts.title")}
            </h4>
            <div className="space-y-5 text-xs text-slate-300">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t("contacts.email")}
                </span>
                <a
                  href="mailto:heatenergy@inbox.ru"
                  className="w-fit font-semibold text-white transition-colors hover:text-blue-200"
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
                  className="leading-relaxed text-slate-200 transition-colors hover:text-white"
                >
                  {t("contacts.address_full")}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Inquiry */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
              {t("nav.inquiry")}
            </h4>
            <p className="mb-3 text-[11px] leading-5 text-slate-300">{t("contacts.form_hint")}</p>
            <form className="space-y-2.5" onSubmit={onInquirySubmit}>
              <input
                id="footer-phone"
                type="tel"
                name="phone"
                aria-label={t("contacts.phone_label")}
                autoComplete="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder={t("contacts.phone_label")}
                className="w-full rounded-md border border-white/15 bg-white/[0.08] px-3 py-2.5 text-xs text-white outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:bg-white/[0.11] focus:ring-0"
              />
              <input
                id="footer-email"
                type="email"
                name="email"
                aria-label={t("contacts.email_label")}
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t("contacts.email_label")}
                className="w-full rounded-md border border-white/15 bg-white/[0.08] px-3 py-2.5 text-xs text-white outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:bg-white/[0.11] focus:ring-0"
              />
              <textarea
                id="footer-message"
                name="message"
                aria-label={t("contacts.message_label")}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={t("contacts.message_label")}
                rows={2}
                className="w-full resize-none rounded-md border border-white/15 bg-white/[0.08] px-3 py-2.5 text-xs text-white outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:bg-white/[0.11] focus:ring-0"
              />
              {hint ? <p className="text-[11px] text-red-300">{hint}</p> : null}
              {status === "ok" ? (
                <p className="text-[11px] font-medium text-emerald-300">{t("feedback.sent_ok")}</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-white px-4 py-2.5 text-xs font-bold text-[#081625] transition-colors hover:bg-blue-50 active:scale-[0.98] disabled:opacity-60"
              >
                {status === "sending" ? t("feedback.sending") : t("contacts.send_button")}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-medium text-slate-400">
            © {year} Heat Energy Capital. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
