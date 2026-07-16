"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#eef6ff]">
      {/* Background image & overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getAssetPath("/main.jpg")} 
          alt="" 
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#eef6ff]/90 to-[#dbeeff]/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 py-20 lg:flex-row lg:items-start lg:px-8 lg:py-32">
        {/* Left: Content */}
        <div className="w-full lg:w-[58%]">
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl xl:text-5xl">
            {t("hero.title")}
          </h1>

          <p className="mb-8 text-lg font-medium leading-relaxed text-slate-600 lg:text-xl xl:max-w-xl">
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
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white/80 px-8 py-3 text-sm font-bold text-[#0756b8] backdrop-blur-sm transition-all hover:bg-white"
            >
              {t("hero.contact")}
            </Link>
          </div>

        </div>

        {/* Right: Featured Products Detail (Foreve Rich Style) */}
        <div className="w-full lg:w-1/2">
          <div className="grid gap-6">
            {/* Product 1: Sodium Metabisulfite */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/85 p-6 shadow-lg shadow-blue-900/5 backdrop-blur-md transition-all hover:bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("hero.prod1.name")}
                  </h3>
                  <span className="font-mono text-sm text-slate-500">
                    {t("hero.prod1.formula")}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0756b8]" />
                  <span>{t("hero.prod1.tags")}</span>
                </div>
                <p className="line-clamp-2 text-xs italic leading-relaxed text-slate-500">
                  {t("hero.description")}
                </p>
              </div>
              
              <Link href="/catalog?q=metabisulfite" className="mt-6 inline-flex items-center text-xs font-bold text-[#0756b8] hover:underline">
                {t("products.highlights.view_all")} &rarr;
              </Link>
            </div>

            {/* Product 2: Sodium Bisulfate */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/85 p-6 shadow-lg shadow-blue-900/5 backdrop-blur-md transition-all hover:bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 transition-colors">
                    {t("hero.prod2.name")}
                  </h3>
                  <span className="font-mono text-sm text-slate-500">
                    {t("hero.prod2.formula")}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0756b8]" />
                  <span>{t("hero.prod2.tags")}</span>
                </div>
              </div>

              <Link href="/catalog?q=bisulfate" className="mt-6 inline-flex items-center text-xs font-bold text-[#0756b8] hover:underline">
                {t("products.highlights.view_all")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
