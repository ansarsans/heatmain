"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { getAssetPath } from "@/lib/utils"

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
    <div className="pointer-events-none absolute -right-[160px] top-24 z-[1] aspect-[3/2] w-[660px] sm:-right-[70px] sm:top-16 sm:w-[820px] lg:right-16 lg:top-4 lg:w-[1020px] xl:right-24 xl:top-0 xl:w-[1120px]">
      <img
        src={getAssetPath("/images/worldmap.svg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain opacity-[0.18] sm:opacity-[0.25] lg:opacity-[0.34]"
        style={{
          filter: "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(2850%) hue-rotate(211deg) brightness(66%) contrast(118%) blur(0.3px)",
          maskImage:
            "radial-gradient(ellipse 108% 118% at 100% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,.96) 30%, rgba(0,0,0,.7) 53%, rgba(0,0,0,.34) 76%, rgba(0,0,0,.1) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 108% 118% at 100% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,.96) 30%, rgba(0,0,0,.7) 53%, rgba(0,0,0,.34) 76%, rgba(0,0,0,.1) 100%)",
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

      </div>
    </section>
  )
}
