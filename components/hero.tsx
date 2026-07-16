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

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f5faff_42%,#e9f4ff_100%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,86,184,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,184,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div className="pointer-events-none absolute -left-48 top-12 h-[30rem] w-[30rem] rounded-full border border-blue-100/80" />
      <div className="pointer-events-none absolute -left-28 top-32 h-[18rem] w-[18rem] rounded-full border border-blue-200/50" />
      <div className="pointer-events-none absolute -right-44 -top-28 h-[34rem] w-[34rem] rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-[26rem] w-[44rem] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#eef7ff]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center lg:px-8">
        <div className="mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-[#0756b8] to-cyan-400" />

        <h1 className="max-w-5xl text-[2.55rem] font-black leading-[1.06] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.65rem] xl:text-[4.15rem]">
          {t("hero.title")}
        </h1>

        <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg lg:text-xl">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
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
    </section>
  )
}
