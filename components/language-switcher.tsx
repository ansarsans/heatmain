"use client"

import { useTranslation, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const locales: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation()

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={cn(
            "px-2 py-1 text-xs font-bold transition-colors rounded uppercase tracking-widest",
            locale === l.code
              ? "text-white"
              : "text-white/40 hover:text-white/70"
          )}
          aria-label={`Switch language to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
