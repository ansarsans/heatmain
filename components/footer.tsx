"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t, locale } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#131415] text-white">
      {/* Decorative Blur */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0241c0]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0241c0]">
                <span className="text-sm font-bold text-white tracking-tight">HE</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Heat Energy Capital</span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              {t("footer.description")}
            </p>
            <div className="mt-8 flex gap-5">
              {["FB", "LI", "TW", "IN"].map(social => (
                <a key={social} href="#" className="text-xs font-bold text-white/30 hover:text-[#0241c0] transition-colors">{social}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              {t("nav.home")}
            </h4>
            <nav className="flex flex-col gap-4" aria-label="Footer navigation">
              {[
                { href: "/catalog", label: t("nav.catalog") },
                { href: "/about", label: t("nav.about") },
                { href: "/news", label: t("nav.news") },
                { href: "/contacts", label: t("nav.contacts") }
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              {t("contacts.title")}
            </h4>
            <div className="space-y-6 text-sm text-white/50">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Phone</span>
                <a href="tel:111111" className="text-white hover:text-[#0241c0] transition-colors font-medium">111 111 111</a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Email</span>
                <a href="mailto:office@he-capital.kz" className="text-white hover:text-[#0241c0] transition-colors font-medium">office@he-capital.kz</a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Address</span>
                <span className="leading-relaxed text-white">Industrial Zone, Almaty, Kazakhstan</span>
              </div>
            </div>
          </div>

          {/* Quick Inquiry */}
          <div className="lg:pt-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              {t("nav.inquiry")}
            </h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#0241c0] transition-all"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#0241c0] resize-none transition-all"
              />
              <button className="w-full rounded-md bg-[#0241c0] px-4 py-3 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]">
                {t("nav.inquiry")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-medium text-white/30">
            © {year} Heat Energy Capital. {t("footer.rights")}
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            <span className="hover:text-white/40 transition-colors cursor-default tracking-tighter sm:tracking-[0.3em]">ISO Certified</span>
            <span className="hover:text-white/40 transition-colors cursor-default tracking-tighter sm:tracking-[0.3em]">REACH</span>
            <span className="hover:text-white/40 transition-colors cursor-default tracking-tighter sm:tracking-[0.3em]">HALAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
