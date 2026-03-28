"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t, locale } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
                <span className="text-xs font-bold text-accent-foreground tracking-tight">HE</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Heat Energy Capital</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors">FB</a>
              <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors">LI</a>
              <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors">TW</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">
              {t("nav.home")}
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/catalog" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                {t("nav.catalog")}
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                {t("nav.about")}
              </Link>
              <Link href="/news" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                {t("nav.news")}
              </Link>
              <Link href="/contacts" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                {t("nav.contacts")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">
              {t("contacts.title")}
            </h4>
            <div className="space-y-4 text-sm text-primary-foreground/60">
              <div className="group flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/30">Phone</span>
                <a href="tel:111111" className="hover:text-accent transition-colors">1111111</a>
              </div>
              <div className="group flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/30">Email</span>
                <a href="mailto:test@test.com" className="hover:text-accent transition-colors">test@test.com</a>
              </div>
              <div className="group flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/30">Address</span>
                <span className="leading-relaxed">Industrial Zone, Kazakhstan</span>
              </div>
            </div>
          </div>

          {/* Quick Inquiry */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">
              {t("nav.inquiry")}
            </h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-2 text-xs text-primary-foreground outline-none focus:border-accent"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full rounded-md border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-2 text-xs text-primary-foreground outline-none focus:border-accent resize-none"
              />
              <button className="w-full rounded-md bg-accent px-4 py-2 text-xs font-bold text-accent-foreground transition-all hover:bg-accent/90">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-medium text-primary-foreground/30">
            © {year} Heat Energy Capital. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/20">
            <span>ISO Certified</span>
            <span>REACH</span>
            <span>KOSHER</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
