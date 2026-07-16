"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
        !isHome 
          ? "left-2 right-2 md:left-3 md:right-3 lg:left-4 lg:right-4 mx-auto max-w-[1500px] bg-white/95 backdrop-blur-md shadow-lg border-x border-b border-blue-100 rounded-b-3xl" 
          : (scrolled ? "border-b border-blue-100 bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/70 backdrop-blur-sm")
      )}
    >
      {/* Top Bar */}
      <div 
        className={cn(
          "border-b border-blue-100 transition-all duration-300",
          (scrolled || !isHome) ? "h-0 opacity-0 overflow-hidden py-0" : "bg-blue-50/80 py-1.5 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 text-[11px] font-medium uppercase tracking-wider text-slate-600 lg:px-8">
          <a href="mailto:heatenergy.website@mail.ru" className="transition-colors hover:text-[#0756b8]">
            heatenergy.website@mail.ru
          </a>
        </div>
      </div>

      <div className={cn(
        "mx-auto flex max-w-[1500px] items-center justify-between py-3",
        isHome ? "px-4 lg:px-8" : "px-6 lg:px-10"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <BrandLogo size={36} priority={isHome} className="bg-white ring-1 ring-blue-100" />
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
                    "text-[13px] font-semibold transition-colors",
                    isActive ? "text-[#0756b8]" : "text-slate-600 hover:text-[#0756b8]"
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
              className="hidden items-center justify-center rounded-md bg-[#0241c0] px-4 py-2 text-xs font-bold text-white transition-all hover:opacity-90 sm:flex"
            >
              {t("nav.inquiry")}
            </Link>
          </div>
        </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-blue-100 bg-white xl:hidden"
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
