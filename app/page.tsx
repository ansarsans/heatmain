"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { getAssetPath } from "@/lib/utils"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main className="bg-[#f8fbff]">
      {/* Hero */}
      <Hero />

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef7ff] via-[#f4f9ff] to-[#f8fbff] py-6 lg:py-8">
        <div className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto grid max-w-3xl grid-cols-2 overflow-hidden rounded-3xl border border-white/90 bg-white/60 shadow-[0_18px_55px_-40px_rgba(2,65,192,0.45)] backdrop-blur-md">
            {[
              { label: t("stats.founded"), value: "2024" },
              { label: t("stats.countries"), value: "5+" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-5 text-center even:border-l even:border-blue-100/80">
                <div className="mb-2 text-4xl font-black text-[#0756b8] lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Product Highlights / Groups */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#eef7ff] py-14 lg:py-20">
        <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              {t("catalog.title")}
            </h2>
            <p className="w-full text-lg text-muted-foreground">
              {t("whyus.portfolio.desc")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "sulfite", title: t("home.groups.sulfite.title"), items: [t("home.groups.sulfite.item1"), t("home.groups.sulfite.item2"), t("home.groups.sulfite.item3")] },
              { key: "sulfate", title: t("home.groups.sulfate.title"), items: [t("home.groups.sulfate.item1"), t("home.groups.sulfate.item2"), t("home.groups.sulfate.item3")] },
              { key: "organic", title: t("home.groups.organic.title"), items: [t("home.groups.organic.item1"), t("home.groups.organic.item2"), t("home.groups.organic.item3")] },
              { key: "others", title: t("home.groups.others.title"), items: [t("home.groups.others.item1"), t("home.groups.others.item2"), t("home.groups.others.item3")] },
            ].map((group) => (
              <div key={group.key} className="relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_22px_55px_-35px_rgba(2,65,192,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_-30px_rgba(2,65,192,0.4)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0756b8] via-blue-400 to-cyan-300" />
                <h3 className="mb-4 text-lg font-bold text-foreground">
                  {group.title}
                </h3>
                <ul className="mb-6 flex-grow space-y-3 text-sm text-muted-foreground">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-lg font-bold leading-none text-[#0756b8]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/catalog?type=${group.key}`} className="text-xs font-bold text-[#0241c0] uppercase tracking-widest hover:underline">
                  {t("products.highlights.view_all")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="bg-gradient-to-b from-[#eef7ff] to-[#f8fbff] py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white/80 px-8 py-10 shadow-[0_24px_70px_-45px_rgba(2,65,192,0.55)] backdrop-blur-md transition-all duration-300 hover:border-blue-200 lg:px-14 lg:py-14">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#0756b8] to-cyan-300" />
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-5 text-3xl font-bold text-slate-950 lg:text-4xl">
                {t("custom.title")}
              </h2>
              <p className="mb-7 text-lg text-slate-600">
                {t("custom.text")}
              </p>
              <Link
                href="/contacts"
                className="z-10 inline-flex items-center gap-2 rounded-full bg-[#0756b8] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-14px_rgba(7,86,184,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#064a9d] active:scale-95"
              >
                {t("hero.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#f3f9ff] to-[#eaf4ff] py-10 lg:py-16">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
                {t("about.preview.title")}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
                {t("about.preview.text")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0241c0] transition-colors hover:opacity-80"
              >
                {t("about.preview.link")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/80 shadow-[0_30px_80px_-40px_rgba(2,65,192,0.55)] lg:w-1/2">
              <img
                src={getAssetPath("/images/hero-bg.jpg")}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#dceeff]/90 via-white/75 to-[#b9ddff]/85" />
              <div className="relative grid grid-cols-2 gap-4 p-5 sm:p-7">
              {[
                { icon: "01", title: t("about.mission.title") },
                { icon: "02", title: t("about.industries.title") },
                { icon: "03", title: t("about.capabilities.title") },
                { icon: "04", title: t("about.geography.title") },
              ].map((item) => (
                <Link
                  key={item.icon}
                  href="/about"
                  className="group rounded-2xl border border-white/90 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
                >
                  <span className="mb-3 block text-3xl font-black text-blue-300/40 transition-colors group-hover:text-blue-400/80">{item.icon}</span>
                  <span className="font-bold text-card-foreground">{item.title}</span>
                </Link>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
