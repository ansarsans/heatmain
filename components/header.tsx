"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/catalog", key: "nav.catalog" },
  { href: "/about", key: "nav.about" },
  { href: "/contacts", key: "nav.contacts" },
]

export function Header() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const isHome = pathname === "/"
  
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-blue-100/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <BrandLogo size={44} priority={isHome} className="bg-white" />
          <div className="hidden sm:block">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Heat Energy Capital
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          {/* Desktop Nav moved here */}
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-[13px] font-semibold transition-colors",
                    isActive ? "bg-blue-50 text-[#0756b8]" : "text-slate-600 hover:bg-slate-50 hover:text-[#0756b8]"
                  )}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:flex" />

            <Link
              href="/contacts?type=inquiry"
              className="hidden items-center justify-center rounded-full bg-[#0756b8] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#064a9d] sm:flex"
            >
              {t("nav.inquiry")}
            </Link>
          </div>
        </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-slate-800"
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

      {/* Mobile Nav */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 xl:hidden",
          mobileOpen ? "max-h-[500px] border-t border-blue-100 bg-white" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0756b8]"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-3 border-t border-blue-100 pt-4 pb-2">
            <LanguageSwitcher />
            <Link
              href="/contacts?type=inquiry"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-md bg-[#0241c0] py-3 text-sm font-bold text-white"
            >
              {t("nav.inquiry")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
