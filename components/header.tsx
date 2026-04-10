"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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
          ? "left-2 right-2 md:left-3 md:right-3 lg:left-4 lg:right-4 mx-auto max-w-[1500px] bg-zinc-900/90 backdrop-blur-md shadow-2xl border-x border-b border-white/10 rounded-b-3xl" 
          : (scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-lg" : "bg-transparent")
      )}
    >
      {/* Top Bar */}
      <div 
        className={cn(
          "transition-all duration-300 border-b border-white/5",
          (scrolled || !isHome) ? "h-0 opacity-0 overflow-hidden py-0" : "bg-black/10 py-1.5 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between text-[11px] font-medium text-white/70 uppercase tracking-wider px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <a href="tel:111111" className="hover:text-white italic transition-colors">111111</a>
            <a href="mailto:test@test.com" className="hover:text-white transition-colors">test@test.com</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div className={cn(
        "mx-auto flex max-w-[1500px] items-center justify-between py-3",
        isHome ? "px-4 lg:px-8" : "px-6 lg:px-10"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0241c0]">
            <span className="text-sm font-bold text-white tracking-tight">HE</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-semibold tracking-tight text-white">
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
                    isActive ? "text-white" : "text-white/70 hover:text-white"
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
              className="text-white"
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
          mobileOpen ? "max-h-[500px] border-t border-white/10 bg-zinc-900" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4 pb-2">
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
