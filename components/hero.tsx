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
    <section className="relative overflow-hidden bg-transparent pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(238,247,255,0.62)_62%,rgba(248,251,255,0)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,86,184,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,184,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 82%)",
        }}
      />
      <div className="pointer-events-none absolute -left-56 top-12 h-[32rem] w-[32rem] rounded-full border border-blue-100/70" />
      <div className="pointer-events-none absolute -right-44 -top-36 h-[38rem] w-[38rem] rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.18fr_.82fr] lg:gap-16 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-[2.55rem] font-black leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
            {t("hero.title")}
          </h1>

          <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg lg:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/catalog"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0756b8] px-8 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_-15px_rgba(7,86,184,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#064a9d] hover:shadow-[0_18px_38px_-15px_rgba(7,86,184,0.65)]"
            >
              {t("hero.cta")}
              <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/85 px-8 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-[#0756b8]"
            >
              {t("hero.contact")}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-white/70" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-200/45 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/72 p-7 shadow-[0_32px_90px_-50px_rgba(7,86,184,0.62)] backdrop-blur-xl sm:p-9">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-blue-200/55" />
            <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-blue-100" />

            <div className="relative grid grid-cols-2 divide-x divide-blue-100">
              {stats.map((stat) => (
                <div key={stat.label} className="first:pr-6 last:pl-6 sm:first:pr-8 sm:last:pl-8">
                  <div className="text-5xl font-black leading-none tracking-[-0.05em] text-[#0756b8] sm:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mt-4 max-w-[9rem] text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-slate-500">
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
