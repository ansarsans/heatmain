"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { Search, Factory, ShieldCheck, Truck } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

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
      <section className="relative overflow-hidden bg-[#e7f2ff] pb-24 pt-32 text-center lg:pb-32 lg:pt-40">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={getAssetPath("/images/hero-bg.jpg")}
            alt={t("about.page.image_alt")}
            fill 
            className="object-cover opacity-[0.24] grayscale" 
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(239,247,255,0.7)_0%,rgba(219,237,255,0.84)_55%,rgba(231,242,255,0.98)_100%)]" />
        </div>
        
        {/* Noise Texture */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200/80 bg-white/70 px-5 py-2 shadow-sm backdrop-blur-md">
             <span className="mr-3 flex h-2 w-2 animate-pulse rounded-full bg-[#0756b8]"></span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0756b8]">{t("about.title")}</span>
          </div>
          
          <h1 className="mb-5 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl text-balance">
            {t("about.page.hero.title")}
          </h1>
          
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 text-pretty lg:text-lg">
            {t("about.page.hero.description")}
          </p>
        </div>
      </section>

      {/* 2. Кто мы и чем полезны (Light Section with Glass Dark Cards) */}
      <section className="relative bg-[#fcfcfc] pb-24 pt-[42px] sm:pt-[50px] lg:pb-32 lg:pt-[58px]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div className="mb-16 text-center">
             <span className="text-[#0241c0] font-bold tracking-widest uppercase text-[10px] mb-4 block">{t("about.page.expertise.eyebrow")}</span>
             <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
               {t("about.page.expertise.title")}
             </h2>
           </div>
            
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               {[
                 { icon: <Search className="w-8 h-8 text-[#0241c0]" />, title: t("about.page.expertise.selection.title"), desc: t("about.page.expertise.selection.description") },
                 { icon: <Factory className="w-8 h-8 text-[#0241c0]" />, title: t("about.page.expertise.supply.title"), desc: t("about.page.expertise.supply.description") },
                 { icon: <ShieldCheck className="w-8 h-8 text-[#0241c0]" />, title: t("about.page.expertise.quality.title"), desc: t("about.page.expertise.quality.description") },
                 { icon: <Truck className="w-8 h-8 text-[#0241c0]" />, title: t("about.page.expertise.logistics.title"), desc: t("about.page.expertise.logistics.description") }
               ].map((card, idx) => (
                 <div key={idx} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#0241c0]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                   <div className="relative z-10">
                     <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 transition-colors group-hover:bg-white group-hover:border-[#0241c0]/20">
                       {card.icon}
                     </div>
                     <h3 className="mb-3 text-lg font-bold text-zinc-900">{card.title}</h3>
                     <p className="text-sm leading-relaxed text-zinc-600">{card.desc}</p>
                   </div>
                 </div>
               ))}
           </div>
        </div>
      </section>


      {/* 5. География */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e4f1ff_0%,#f4f9ff_52%,#e8f3ff_100%)] py-24 lg:py-32">
        {/* Glows and Map Pattern */}
        <div className="absolute inset-0 opacity-[0.16]">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #4b8fd4 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#6eb0ff]/25 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-[#0241c0] font-bold tracking-widest uppercase text-[10px] mb-4 block">{t("about.page.geography.eyebrow")}</span>
             <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-950 text-balance lg:text-4xl">
                {t("about.page.geography.title")}
             </h2>
             <p className="mb-10 text-lg leading-relaxed text-slate-600 text-pretty">
               {t("about.page.geography.description")}
             </p>
             <div className="flex flex-wrap gap-4">
                {[
                  { name: t("about.page.region.kazakhstan"), dot: "bg-[#0241c0]" },
                  { name: t("about.page.region.china"), dot: "bg-[#0241c0]" },
                  { name: t("about.page.region.europe"), dot: "bg-[#0241c0]" },
                  { name: t("about.page.region.uzbekistan"), dot: "bg-[#6eb0ff]" },
                ].map(({ name, dot }) => (
                  <span key={name} className="flex cursor-default items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300 hover:bg-white">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                    {name}
                  </span>
                ))}
             </div>
           </div>
           
           {/* Globe: wireframe + markers from lat/lon (orthographic) */}
           <div className="relative aspect-square lg:aspect-auto lg:h-[400px] w-full flex items-center justify-center">
             <svg
               className="w-full max-w-[min(100%,380px)] h-auto text-[#0756b8] drop-shadow-[0_0_24px_rgba(7,86,184,0.28)]"
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
      </section>



      {/* 7. Реквизиты (Light, Minimalist Block) */}
      <section className="py-12 bg-[#fcfcfc] border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 lg:p-12 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900">{t("about.page.details.company")}</h2>
            <div className="grid lg:grid-cols-5 gap-12">
               <div className="lg:col-span-2">
                  <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0241c0]">{t("about.page.details.requisites")}</h3>
                  <div className="space-y-3 text-sm text-zinc-800">
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.bin")}:</span> <span className="font-semibold">240240013512</span></p>
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.iban")}:</span> <span className="font-semibold">KZ33601A871023954571 <span className="text-zinc-400 font-medium">KZT</span></span></p>
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.bic")}:</span> <span className="font-semibold">HSBKKZKX</span></p>
                    <p className="flex flex-col gap-1 border-b border-zinc-100 pb-2"><span className="text-zinc-500">{t("about.page.details.bank")}:</span> <span className="font-semibold">{t("about.page.details.bank_name")}</span></p>
                  </div>
               </div>
               
               <div className="lg:col-span-3">
                 <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0241c0]">{t("about.page.details.addresses_title")}</h3>
                 <div className="grid sm:grid-cols-2 gap-8 text-sm text-zinc-800 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
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
                         <p className="flex gap-2 items-start"><span className="font-bold whitespace-nowrap">46.90.9</span> <span className="text-zinc-600">— {t("about.page.details.activity_wholesale")}</span></p>
                         <p className="flex gap-2 items-start"><span className="font-bold whitespace-nowrap">33.12.2</span> <span className="text-zinc-600">— {t("about.page.details.activity_repair")}</span></p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div
              className="relative overflow-hidden rounded-[2.5rem] border border-slate-300/80 bg-[#f4f9ff] px-8 py-20 text-center shadow-[0_24px_70px_-46px_rgba(7,86,184,0.5)] lg:px-16 lg:py-28"
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
                 <h2 className="mb-6 max-w-3xl text-[1.7rem] font-bold tracking-tight text-slate-950 text-balance lg:text-[2.65rem]">
                    {t("about.page.cta.title")}
                 </h2>
                 <p className="mb-12 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty">
                    {t("about.page.cta.description")}
                 </p>
                 
                 <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center rounded-full bg-[#0241c0] px-12 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#023190]"
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
