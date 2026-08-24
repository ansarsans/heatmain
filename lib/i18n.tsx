"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"
import { en } from "@/lib/translations/en"

export type Locale = "ru" | "kz" | "en"

const translations: Record<Locale, Record<string, string>> = { ru, kz, en }

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru")

  useEffect(() => {
    const saved = localStorage.getItem("hec-locale") as Locale | null
    if (saved && translations[saved]) setLocaleState(saved)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("hec-locale", newLocale)
    }
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[locale]?.[key] ?? translations.ru[key] ?? key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider")
  return ctx
}
