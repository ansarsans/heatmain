"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import {
  Factory,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react"

function AbstractHeroArtwork() {
  const dots = Array.from({ length: 48 })

  return (
    <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[500px]" aria-hidden="true">
      <div className="absolute left-[8%] top-[8%] h-[68%] w-[68%] rounded-full bg-blue-300/25 blur-[85px]" />
      <div className="absolute bottom-[2%] right-[-8%] h-[62%] w-[62%] rounded-full bg-cyan-200/35 blur-[95px]" />
      <div className="absolute right-[7%] top-[12%] h-[38%] w-[38%] rounded-full bg-blue-500/10 blur-[60px]" />

      <svg className="absolute inset-0 h-full w-full text-[#0756b8]" viewBox="0 0 500 480" fill="none">
        <circle cx="292" cy="235" r="172" stroke="currentColor" strokeOpacity="0.09" />
        <circle cx="292" cy="235" r="128" stroke="currentColor" strokeOpacity="0.12" />
        <circle cx="292" cy="235" r="82" stroke="currentColor" strokeOpacity="0.1" />
        <path d="M26 356C114 229 219 176 344 196C410 207 453 187 490 135" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1.2" />
        <path d="M48 404C139 313 226 293 314 329C384 358 437 349 487 300" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.2" />
        <path d="M102 92C182 123 232 119 285 73C330 34 385 26 462 57" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="344" cy="196" r="4" fill="currentColor" fillOpacity="0.22" />
        <circle cx="314" cy="329" r="3" fill="currentColor" fillOpacity="0.18" />
      </svg>

      <div className="absolute right-[4%] top-[22%] grid grid-cols-8 gap-2.5 opacity-25">
        {dots.map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#0756b8]" />
        ))}
      </div>
      <div className="absolute bottom-[12%] left-[10%] grid grid-cols-5 gap-3 opacity-15">
        {dots.slice(0, 20).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#0756b8]" />
        ))}
      </div>

      <div className="absolute left-[31%] top-[31%] h-32 w-32 rounded-full border border-white/80 bg-white/15 shadow-[0_28px_75px_-38px_rgba(7,86,184,0.7)] backdrop-blur-[2px]" />
      <div className="absolute left-[40%] top-[40%] h-16 w-16 rounded-full border border-blue-200/70 bg-white/25" />
    </div>
  )
}

/** Orthographic projection (degrees). Center chosen to show EU + Central Asia + China on one face. */
const GLOBE = { cx: 200, cy: 200, R: 148, lat0: 45, lon0: 72 }

function geoToSvg(lat: number, lon: number): { x: number; y: number } {
  const φ = (lat * Math.PI) / 180
  const λ = (lon * Math.PI) / 180
  const φ0 = (GLOBE.lat0 * Math.PI) / 180
  const λ0 = (GLOBE.lon0 * Math.PI) / 180
  const dλ = λ - λ0
  const cosφ = Math.cos(φ)
  const x = GLOBE.cx + GLOBE.R * cosφ * Math.sin(dλ)
  const y =
    GLOBE.cy -
    GLOBE.R * (Math.cos(φ0) * Math.sin(φ) - Math.sin(φ0) * cosφ * Math.cos(dλ))
  return { x, y }
}

/** True if point is on the visible hemisphere (facing viewer). */
function isOnNearSide(lat: number, lon: number): boolean {
  const φ = (lat * Math.PI) / 180
  const λ = (lon * Math.PI) / 180
  const φ0 = (GLOBE.lat0 * Math.PI) / 180
  const λ0 = (GLOBE.lon0 * Math.PI) / 180
  const z =
    Math.sin(φ0) * Math.sin(φ) +
    Math.cos(φ0) * Math.cos(φ) * Math.cos(λ - λ0)
  return z >= -0.02
}

const supplyRegionMarkers = [
  { key: "eu", lat: 50, lon: 10, labelKey: "about.page.region.europe", fill: "#ffffff", delay: "0ms" },
  { key: "kz", lat: 51.2, lon: 71.4, labelKey: "about.page.region.kazakhstan", fill: "#0241c0", delay: "200ms" },
  { key: "uz", lat: 41.3, lon: 69.2, labelKey: "about.page.region.uzbekistan", fill: "#ffffff", delay: "400ms" },
  { key: "cn", lat: 39.9, lon: 116.4, labelKey: "about.page.region.china", fill: "#ffffff", delay: "600ms" },
] as const

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-[#fcfcfc] overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#f4f9ff] pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 8% 18%, rgba(147,197,253,0.55), transparent 29%)",
              "radial-gradient(circle at 83% 20%, rgba(186,230,253,0.68), transparent 30%)",
              "radial-gradient(circle at 72% 82%, rgba(96,165,250,0.28), transparent 34%)",
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(232,243,255,0.72) 58%, rgba(244,249,255,0.15) 100%)",
            ].join(", "),
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        <div className="pointer-events-none absolute -left-52 top-24 h-[30rem] w-[30rem] rounded-full border border-blue-200/45" />
        <div className="pointer-events-none absolute -left-32 top-44 h-[20rem] w-[20rem] rounded-full border border-white/70" />
        <div className="pointer-events-none absolute left-[12%] top-[18%] h-px w-[42%] rotate-[13deg] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-200/80 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-md sm:mb-6">
              <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-[#0756b8]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0756b8]">{t("about.title")}</span>
            </div>

            <h1 className="max-w-3xl text-[clamp(1.8rem,8vw,2.3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-slate-950 text-balance sm:text-[2.6rem] lg:text-[3rem]">
              {t("about.page.hero.title")}
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] font-medium leading-6 text-slate-600 text-pretty sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
              {t("about.page.hero.description")}
            </p>

          </div>

          <div className="hidden lg:block">
            <AbstractHeroArtwork />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-white/55 to-[#fcfcfc]" />
        <svg className="pointer-events-none absolute -bottom-px left-0 h-16 w-full text-[#fcfcfc]" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 56C266 92 475 14 745 46C1000 76 1198 87 1440 37V90H0Z" fill="currentColor" />
        </svg>
      </section>

      {/* 2. Кто мы и чем полезны (Light Section with Glass Dark Cards) */}
      <section className="relative bg-[#fcfcfc] pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mb-8 max-w-2xl sm:mb-12 lg:mb-16">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0756b8]">{t("about.page.expertise.eyebrow")}</span>
            <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              {t("about.page.expertise.title")}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              { icon: Search, title: t("about.page.expertise.selection.title"), desc: t("about.page.expertise.selection.description") },
              { icon: Factory, title: t("about.page.expertise.supply.title"), desc: t("about.page.expertise.supply.description") },
              { icon: ShieldCheck, title: t("about.page.expertise.quality.title"), desc: t("about.page.expertise.quality.description") },
              { icon: Truck, title: t("about.page.expertise.logistics.title"), desc: t("about.page.expertise.logistics.description") },
            ].map((card) => (
              <article
                key={card.title}
                className="group relative min-h-[225px] overflow-hidden rounded-[20px] border border-slate-200/90 bg-white p-6 shadow-[0_18px_45px_-36px_rgba(15,67,120,0.65)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-blue-200 hover:shadow-[0_28px_65px_-38px_rgba(7,86,184,0.55)] sm:min-h-[280px] sm:rounded-[22px] sm:p-7 sm:hover:-translate-y-1.5 lg:min-h-[300px] lg:p-8"
              >
                <card.icon
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 text-[#0756b8] opacity-[0.08] transition-[opacity,transform] duration-300 group-hover:scale-[1.04] group-hover:opacity-[0.12]"
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/80 text-[#0756b8] transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 sm:mb-8">
                    <card.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold tracking-tight text-slate-950">{card.title}</h3>
                  <p className="max-w-[15rem] text-sm leading-6 text-slate-600">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* 5. География */}
      <section className="relative overflow-hidden bg-[#f7fbff] pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
        {/* Premium ambient background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 62% 78% at 82% 46%, rgba(186,230,253,0.42) 0%, rgba(219,234,254,0.22) 42%, transparent 74%)",
              "radial-gradient(circle at 8% 28%, rgba(191,219,254,0.32) 0%, transparent 32%)",
              "radial-gradient(circle at 48% 94%, rgba(147,197,253,0.18) 0%, transparent 28%)",
              "linear-gradient(180deg, #ffffff 0%, #f1f8ff 48%, #eaf5ff 100%)",
            ].join(", "),
          }}
        />
        <div className="pointer-events-none absolute -left-52 -top-48 h-[34rem] w-[34rem] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-44 left-[32%] h-[30rem] w-[30rem] rounded-full bg-cyan-200/15 blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 top-[8%] h-[42rem] w-[42rem] rounded-full bg-blue-300/15 blur-[145px]" />

        <div className="pointer-events-none absolute -left-48 top-[8%] h-[38rem] w-[38rem] rounded-full border border-blue-200/30" />
        <div className="pointer-events-none absolute -left-24 top-[24%] h-[24rem] w-[24rem] rounded-full border border-white/80" />
        <div className="pointer-events-none absolute -right-56 -top-36 h-[44rem] w-[44rem] rounded-full border border-blue-200/25" />
        <div className="pointer-events-none absolute -right-20 top-[8%] h-[30rem] w-[30rem] rounded-full border border-white/75" />

        <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#0756b8]" viewBox="0 0 1440 720" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M-80 530C186 286 389 235 624 333C854 429 1068 362 1518 63" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M-45 610C226 399 435 381 660 457C899 538 1131 453 1498 198" stroke="currentColor" strokeOpacity="0.055" strokeWidth="1" />
          <path d="M240 -35C461 113 675 136 872 69C1042 12 1215 35 1468 189" stroke="currentColor" strokeOpacity="0.055" strokeWidth="1" />
        </svg>

        <div
          className="pointer-events-none absolute left-[7%] top-[17%] h-24 w-36 opacity-[0.16]"
          style={{ backgroundImage: "radial-gradient(circle, #0756b8 1.2px, transparent 1.4px)", backgroundSize: "17px 17px" }}
        />
        <div
          className="pointer-events-none absolute bottom-[14%] left-[43%] h-20 w-28 opacity-[0.1]"
          style={{ backgroundImage: "radial-gradient(circle, #0756b8 1px, transparent 1.3px)", backgroundSize: "20px 20px" }}
        />
        <div
          className="pointer-events-none absolute right-[5%] top-[16%] h-28 w-40 opacity-[0.14]"
          style={{ backgroundImage: "radial-gradient(circle, #0756b8 1.2px, transparent 1.5px)", backgroundSize: "18px 18px" }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
           <div>
             <span className="text-[#0241c0] font-bold tracking-widest uppercase text-[10px] mb-4 block">{t("about.page.geography.eyebrow")}</span>
             <h2 className="mb-4 text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-950 text-balance sm:mb-6 sm:text-3xl lg:text-4xl">
                {t("about.page.geography.title")}
             </h2>
             <p className="mb-7 text-base leading-7 text-slate-600 text-pretty sm:mb-10 sm:text-lg sm:leading-relaxed">
               {t("about.page.geography.description")}
             </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-4">
                {[
                  { name: t("about.page.region.kazakhstan"), dot: "bg-[#6eb0ff]" },
                  { name: t("about.page.region.china"), dot: "bg-[#0241c0]" },
                  { name: t("about.page.region.europe"), dot: "bg-[#0241c0]" },
                  { name: t("about.page.region.uzbekistan"), dot: "bg-[#0241c0]" },
                ].map(({ name, dot }) => (
                  <span key={name} className="flex min-h-10 cursor-default items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300 hover:bg-white sm:px-6 sm:py-2.5 sm:text-sm">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                    {name}
                  </span>
                ))}
             </div>
           </div>
           
           {/* Globe: wireframe + markers from lat/lon (orthographic) */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[330px] items-center justify-center sm:max-w-[390px] lg:h-[400px] lg:max-w-none lg:aspect-auto">
             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[90px]" />
             <div className="pointer-events-none absolute left-[16%] top-[15%] h-32 w-32 rounded-full bg-cyan-100/35 blur-[50px]" />
             <div className="pointer-events-none absolute bottom-[8%] right-[10%] h-40 w-40 rounded-full bg-blue-200/25 blur-[65px]" />
             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/35" />
             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85" />
             <div className="pointer-events-none absolute left-[14%] top-[22%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.9)]" />
             <div className="pointer-events-none absolute right-[12%] top-[38%] h-1 w-1 rounded-full bg-[#6eb0ff]/70 shadow-[0_0_12px_3px_rgba(110,176,255,0.55)]" />
             <div className="pointer-events-none absolute bottom-[18%] left-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.85)]" />
             <svg
               className="relative z-10 w-full max-w-[min(100%,380px)] h-auto text-[#0756b8] drop-shadow-[0_0_24px_rgba(7,86,184,0.28)]"
               viewBox="0 0 400 400"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               aria-hidden
             >
               <defs>
                 <radialGradient id="globeFill" cx="32%" cy="28%" r="75%">
                   <stop offset="0%" stopColor="#6eb0ff" stopOpacity="0.3" />
                   <stop offset="45%" stopColor="#2f7fce" stopOpacity="0.2" />
                   <stop offset="100%" stopColor="#0756b8" stopOpacity="0.1" />
                 </radialGradient>
                 <filter id="globeGlow" x="-40%" y="-40%" width="180%" height="180%">
                   <feGaussianBlur stdDeviation="2" result="b" />
                   <feMerge>
                     <feMergeNode in="b" />
                     <feMergeNode in="SourceGraphic" />
                   </feMerge>
                 </filter>
               </defs>
               {/* Sphere outline + graticule (decorative, matches orthographic view) */}
               <circle
                 cx={GLOBE.cx}
                 cy={GLOBE.cy}
                 r={GLOBE.R}
                 fill="url(#globeFill)"
                 className="stroke-current opacity-95"
                 strokeWidth="1.85"
               />
               <ellipse
                 cx={GLOBE.cx}
                 cy={GLOBE.cy}
                 rx={GLOBE.R * 0.92}
                 ry={GLOBE.R * 0.36}
                 className="stroke-current opacity-70"
                 strokeWidth="1.15"
               />
               <ellipse
                 cx={GLOBE.cx}
                 cy={GLOBE.cy}
                 rx={GLOBE.R * 0.35}
                 ry={GLOBE.R}
                 className="stroke-current opacity-70"
                 strokeWidth="1.15"
               />
               <ellipse
                 cx={GLOBE.cx}
                 cy={GLOBE.cy}
                 rx={GLOBE.R * 0.72}
                 ry={GLOBE.R}
                 className="stroke-current opacity-55"
                 strokeWidth="1"
               />
               {supplyRegionMarkers.map(({ key, lat, lon, labelKey, fill, delay }) => {
                 if (!isOnNearSide(lat, lon)) return null
                 const { x, y } = geoToSvg(lat, lon)
                 const glow = fill === "#0241c0" ? "#0241c0" : "#ffffff"
                 return (
                   <g key={key} className="animate-pulse" style={{ animationDelay: delay }}>
                     <circle cx={x} cy={y} r="14" fill={glow} opacity="0.25" />
                     <circle
                       cx={x}
                       cy={y}
                       r="5"
                       fill={fill}
                       filter="url(#globeGlow)"
                       className="opacity-95"
                     />
                     <title>{t(labelKey)}</title>
                   </g>
                 )
               })}
             </svg>
           </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-white/45 to-[#fcfcfc]" />
        <svg className="pointer-events-none absolute -bottom-px left-0 h-12 w-full text-[#fcfcfc]" viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 37C253 69 462 17 720 36C994 56 1190 66 1440 25V72H0Z" fill="currentColor" />
        </svg>
      </section>



      {/* 7. Реквизиты (Light, Minimalist Block) */}
      <section className="border-y border-zinc-100 bg-[#fcfcfc] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-12">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-zinc-900 sm:mb-8 sm:text-2xl">{t("about.page.details.company")}</h2>
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-12">
               <div className="lg:col-span-2">
                  <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0241c0]">{t("about.page.details.requisites")}</h3>
                  <div className="space-y-3 text-sm text-zinc-800">
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.bin")}:</span> <span className="font-semibold">240240013512</span></p>
                    <p className="flex flex-col gap-1 border-b border-zinc-100 pb-2 sm:flex-row sm:justify-between"><span className="text-zinc-500">{t("about.page.details.iban")}:</span> <span className="break-all font-semibold">KZ33601A871023954571 <span className="font-medium text-zinc-400">KZT</span></span></p>
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.bic")}:</span> <span className="font-semibold">HSBKKZKX</span></p>
                    <p className="flex flex-col gap-1 border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.bank")}:</span> <span className="font-semibold">{t("about.page.details.bank_name")}</span></p>
                  </div>
               </div>
               
               <div className="lg:col-span-3">
                 <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0241c0]">{t("about.page.details.addresses_title")}</h3>
                  <div className="grid gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm text-zinc-800 sm:grid-cols-2 sm:gap-8 sm:p-6">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{t("about.page.details.legal_address")}</span>
                      <span className="font-medium">{t("about.page.details.legal_address_value")}</span>
                      <span className="block mt-1 text-xs text-zinc-500">{t("about.page.details.postal_code")}: 010000</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{t("about.page.details.actual_address")}</span>
                      <span className="font-medium">{t("about.page.details.actual_address_value")}</span>
                    </div>
                    <div className="sm:col-span-2 pt-4 border-t border-zinc-200/60">
                       <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">{t("about.page.details.activity_code")}</span>
                       <div className="space-y-2">
                          <p className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-2"><span className="whitespace-nowrap font-bold">46.90.9</span> <span className="text-zinc-600">— {t("about.page.details.activity_wholesale")}</span></p>
                          <p className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-2"><span className="whitespace-nowrap font-bold">33.12.2</span> <span className="text-zinc-600">— {t("about.page.details.activity_repair")}</span></p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-[#fcfcfc] py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div
              className="relative overflow-hidden rounded-2xl border border-slate-300/80 bg-[#f4f9ff] px-5 py-12 text-center shadow-[0_24px_70px_-46px_rgba(7,86,184,0.5)] sm:rounded-[2.5rem] sm:px-8 sm:py-16 lg:px-16 lg:py-28"
              style={{
                backgroundImage: [
                  "radial-gradient(circle at 10% 18%, rgba(110,176,255,0.52), transparent 28%)",
                  "radial-gradient(circle at 82% 16%, rgba(186,230,253,0.68), transparent 27%)",
                  "radial-gradient(circle at 68% 88%, rgba(147,197,253,0.48), transparent 31%)",
                  "radial-gradient(circle at 25% 76%, rgba(219,234,254,0.72), transparent 26%)",
                  "linear-gradient(180deg, #ffffff 0%, #edf6ff 52%, #e4f1ff 100%)",
                ].join(", "),
              }}
           >
              {/* Noise and Glow Layers */}
              <div 
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-multiply" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              ></div>
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="mb-4 max-w-3xl text-[1.55rem] font-bold leading-tight tracking-tight text-slate-950 text-balance sm:mb-6 sm:text-[1.7rem] lg:text-[2.65rem]">
                    {t("about.page.cta.title")}
                 </h2>
                 <p className="mb-8 max-w-xl text-base leading-7 text-slate-600 text-pretty sm:mb-12 sm:text-lg sm:leading-relaxed">
                    {t("about.page.cta.description")}
                 </p>
                 
                 <Link
                    href="/contacts"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0241c0] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#023190] sm:w-auto sm:px-12 sm:py-5 sm:text-sm sm:tracking-widest"
                 >
                    {t("about.page.cta.button")}
                 </Link>
              </div>
           </div>
        </div>
      </section>

    </main>
  )
}
