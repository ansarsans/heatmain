"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero() {
  const { t } = useTranslation()

  const stats = [
    { value: "2024", label: t("stats.founded") },
    { value: "5+", label: t("stats.countries") },
  ]

  return (
    <section className="relative overflow-hidden bg-transparent pb-10 pt-20 sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.62)_0%,rgba(238,247,255,0.22)_68%,rgba(248,251,255,0)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,86,184,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,184,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 82%)",
        }}
      />
      <div className="pointer-events-none absolute -left-56 top-12 h-[28rem] w-[28rem] rounded-full border border-blue-100/60" />
      <div className="pointer-events-none absolute -right-44 -top-36 h-[32rem] w-[32rem] rounded-full bg-blue-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-[2.1rem] font-black leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[2.7rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            {t("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-[15px] font-medium leading-7 text-slate-600 sm:text-base lg:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-7 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <Link
              href="/catalog"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0756b8] px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-17px_rgba(7,86,184,0.75)] transition-colors hover:bg-[#064a9d]"
            >
              {t("hero.cta")}
              <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/75 px-6 py-3 text-xs font-bold text-slate-800 backdrop-blur-sm transition-colors hover:border-blue-300 hover:bg-white hover:text-[#0756b8]"
            >
              {t("hero.contact")}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-white/65" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-200/45 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/90 bg-white/68 p-5 shadow-[0_24px_70px_-48px_rgba(7,86,184,0.65)] backdrop-blur-xl sm:p-7">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-blue-200/55" />
            <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-blue-100" />

            <div className="relative grid grid-cols-2 divide-x divide-blue-100">
              {stats.map((stat) => (
                <div key={stat.label} className="first:pr-5 last:pl-5 sm:first:pr-6 sm:last:pl-6">
                  <div className="text-4xl font-black leading-none tracking-[-0.05em] text-[#0756b8] sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 max-w-[8rem] text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
