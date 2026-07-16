"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_18%,#f8fbff_38%,#e9f4ff_60%,#f8fbff_80%,#eaf4ff_100%)]">
      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Product Highlights / Groups */}
      <section className="py-12 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
              {t("catalog.title")}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 lg:text-lg">
              {t("whyus.portfolio.desc")}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-blue-100 bg-blue-100/70 shadow-[0_18px_55px_-45px_rgba(7,86,184,0.45)] md:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "sulfite", title: t("home.groups.sulfite.title"), items: [t("home.groups.sulfite.item1"), t("home.groups.sulfite.item2"), t("home.groups.sulfite.item3")] },
              { key: "sulfate", title: t("home.groups.sulfate.title"), items: [t("home.groups.sulfate.item1"), t("home.groups.sulfate.item2"), t("home.groups.sulfate.item3")] },
              { key: "organic", title: t("home.groups.organic.title"), items: [t("home.groups.organic.item1"), t("home.groups.organic.item2"), t("home.groups.organic.item3")] },
              { key: "others", title: t("home.groups.others.title"), items: [t("home.groups.others.item1"), t("home.groups.others.item2"), t("home.groups.others.item3")] },
            ].map((group, index) => (
              <div key={group.key} className="flex min-h-[270px] flex-col bg-white p-7 transition-colors hover:bg-[#fbfdff]">
                <span className="mb-8 text-xs font-black tracking-[0.18em] text-blue-300">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-4 text-lg font-bold text-slate-950">
                  {group.title}
                </h3>
                <ul className="mb-6 flex-grow space-y-3 text-sm leading-6 text-slate-500">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0756b8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/catalog" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0756b8] transition-opacity hover:opacity-65">
                  {t("products.highlights.view_all")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-[#f6faff] px-7 py-9 shadow-[0_18px_55px_-44px_rgba(7,86,184,0.5)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-11">
            <div className="absolute inset-y-0 left-0 w-1 bg-[#0756b8]" />
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 lg:text-3xl">
                {t("custom.title")}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {t("custom.text")}
              </p>
            </div>
            <div className="mt-7 shrink-0 lg:mt-0">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-full bg-[#0756b8] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-16px_rgba(7,86,184,0.75)] transition-all hover:-translate-y-0.5 hover:bg-[#064a9d] active:scale-95"
              >
                {t("hero.contact")}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl text-balance">
                {t("about.preview.title")}
              </h2>
              <p className="mb-7 mt-4 text-base leading-7 text-slate-600 text-pretty lg:text-lg">
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
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-blue-100 bg-blue-100">
              {[
                { icon: "01", title: t("about.mission.title") },
                { icon: "02", title: t("about.industries.title") },
                { icon: "03", title: t("about.capabilities.title") },
                { icon: "04", title: t("about.geography.title") },
              ].map((item) => (
                <Link
                  key={item.icon}
                  href="/about"
                  className="group min-h-[150px] bg-white p-6 transition-colors hover:bg-[#f8fbff] active:scale-[0.99] sm:p-7"
                >
                  <span className="mb-8 block text-xs font-black tracking-[0.16em] text-blue-300 transition-colors group-hover:text-[#0756b8]">{item.icon}</span>
                  <span className="font-bold leading-snug text-slate-900">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
