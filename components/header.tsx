"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/catalog", key: "nav.catalog" },
  { href: "/about", key: "nav.about" },
  { href: "/news", key: "nav.news" },
  { href: "/contacts", key: "nav.contacts" },
]

export function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="border-b border-border bg-muted/50 py-1.5 px-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <a href="tel:111111" className="hover:text-foreground italic">111111</a>
            <a href="mailto:test@test.com" className="hover:text-foreground">test@test.com</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Linkedin</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground tracking-tight">HE</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Heat Energy Capital
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Language + Inquiry + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />

          <Link
            href="/contacts?type=inquiry"
            className="hidden items-center justify-center rounded-md bg-accent px-4 py-2 text-xs font-bold text-accent-foreground transition-all hover:bg-accent/90 sm:flex"
          >
            {t("nav.inquiry")}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-foreground"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2.25 4.5H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.25 9H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.25 13.5H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 xl:hidden",
          mobileOpen ? "max-h-[500px] border-t border-border" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4 pb-2">
            <LanguageSwitcher />
            <Link
              href="/contacts?type=inquiry"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-md bg-accent py-3 text-sm font-bold text-accent-foreground"
            >
              {t("nav.inquiry")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
