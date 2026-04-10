"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-900">
      {/* Background image & overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getAssetPath("/main.jpg")} 
          alt="" 
          className="h-full w-full object-cover opacity-60 mix-blend-overlay grayscale"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-transparent xl:via-zinc-900/20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 py-20 lg:flex-row lg:items-start lg:px-8 lg:py-32">
        {/* Left: Content */}
        <div className="w-full lg:w-[58%]">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
              ISO 9001:2015 Certified
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary-foreground lg:text-5xl xl:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="mb-8 text-lg font-medium leading-relaxed text-white/70 lg:text-xl xl:max-w-xl">
            {t("hero.subtitle")}
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-2 rounded-md bg-[#0241c0] px-8 py-3 text-sm font-bold text-white transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-900/40"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              {t("hero.contact")}
            </Link>
          </div>

        </div>

        {/* Right: Featured Products Detail (Foreve Rich Style) */}
        <div className="w-full lg:w-1/2 lg:pt-[30px]">
          <div className="grid gap-6">
            {/* Product 1: Sodium Metabisulfite */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t("hero.prod1.name")}
                  </h3>
                  <span className="text-sm font-mono text-white/60">
                    {t("hero.prod1.formula")}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{t("hero.prod1.tags")}</span>
                </div>
                <p className="text-xs leading-relaxed text-white/50 line-clamp-2 italic">
                  {t("hero.description")}
                </p>
              </div>
              
              <Link href="/catalog?q=metabisulfite" className="mt-6 inline-flex items-center text-xs font-bold text-white hover:underline">
                {t("products.highlights.view_all")} &rarr;
              </Link>
            </div>

            {/* Product 2: Sodium Bisulfate */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors">
                    {t("hero.prod2.name")}
                  </h3>
                  <span className="text-sm font-mono text-white/60">
                    {t("hero.prod2.formula")}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{t("hero.prod2.tags")}</span>
                </div>
              </div>

              <Link href="/catalog?q=bisulfate" className="mt-6 inline-flex items-center text-xs font-bold text-white hover:underline">
                {t("products.highlights.view_all")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
