"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { getAssetPath } from "@/lib/utils"
import { CalendarDays, Globe2 } from "lucide-react"

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WorldMapBackdrop() {
  const routes = [
    "M310 425 C430 245 585 250 720 390",
    "M410 500 C555 350 710 330 860 440",
    "M555 285 C690 155 850 185 970 350",
    "M650 505 C790 380 940 390 1080 500",
    "M360 360 C565 520 805 525 1010 315",
  ]

  const points = [
    [310, 425], [410, 500], [555, 285], [720, 390],
    [860, 440], [970, 350], [1080, 500],
  ]

  return (
    <div className="pointer-events-none absolute -right-[280px] top-24 z-[1] aspect-[3/2] w-[660px] sm:-right-[210px] sm:top-16 sm:w-[820px] lg:-right-[100px] lg:top-4 lg:w-[1020px] xl:-right-[40px] xl:top-0 xl:w-[1120px]">
      <img
        src={getAssetPath("/images/worldmap.svg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain opacity-[0.11] sm:opacity-[0.14] lg:opacity-[0.19]"
        style={{
          filter: "brightness(0) saturate(100%) invert(34%) sepia(91%) saturate(1474%) hue-rotate(204deg) brightness(88%) contrast(97%) blur(0.3px)",
        }}
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1200 800"
        className="absolute inset-0 h-full w-full opacity-[0.24] sm:opacity-[0.34] lg:opacity-[0.46]"
        fill="none"
      >
        <defs>
          <filter id="hero-route-point-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="white" strokeWidth="2" strokeLinecap="round">
          {routes.map((route) => <path key={route} d={route} />)}
        </g>

        <g fill="white" filter="url(#hero-route-point-glow)">
          {points.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />)}
        </g>
      </svg>
    </div>
  )
}

export function Hero() {
  const { t } = useTranslation()

  const stats = [
    { value: "2024", label: t("stats.founded"), icon: CalendarDays },
    { value: "5+", label: t("stats.countries"), icon: Globe2 },
  ]

  return (
    <section className="relative overflow-hidden bg-transparent pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
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
      <WorldMapBackdrop />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[2.7rem] lg:text-[3.1rem] xl:text-[3.35rem]">
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

        <div className="relative mx-auto w-full max-w-sm lg:translate-x-16 lg:translate-y-12 xl:translate-x-24 xl:translate-y-16">
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-white/95" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-200/45 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/90 bg-white/68 py-5 pl-3 pr-5 shadow-[0_-10px_24px_-18px_rgba(7,62,132,0.28),0_30px_75px_-34px_rgba(7,62,132,0.62)] backdrop-blur-xl sm:py-7 sm:pl-4 sm:pr-7">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-blue-200/55" />
            <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-blue-100" />

            <div className="relative grid grid-cols-2 divide-x divide-blue-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex min-w-0 items-center gap-3 first:pr-3 last:pl-3 sm:gap-4 sm:first:pr-4 sm:last:pl-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#0756b8] sm:h-12 sm:w-12">
                    <stat.icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-3xl font-black leading-none tracking-[-0.05em] text-[#0756b8] sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 max-w-[8rem] text-[8px] font-bold uppercase leading-3 tracking-[0.12em] text-slate-500 sm:text-[9px] sm:leading-4 sm:tracking-[0.15em]">
                      {stat.label}
                    </div>
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
