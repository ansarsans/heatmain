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
            "flex min-h-10 min-w-11 touch-manipulation items-center justify-center rounded-lg px-2 py-1 text-xs font-bold uppercase tracking-widest transition-colors",
            locale === l.code
              ? "bg-blue-50 text-[#0756b8]"
              : "text-slate-400 hover:text-[#0756b8]"
          )}
          aria-label={`Switch language to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
