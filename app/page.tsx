"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Boxes, ChartNoAxesCombined, Factory, FlaskConical, Globe, Microscope, Target, TestTubes } from "lucide-react"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main className="landing-surface">
      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Product Highlights / Groups */}
      <section className="border-y border-white/70 bg-white/40 py-10 backdrop-blur-[2px] lg:py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 lg:text-3xl">
              {t("products.highlights.title")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 lg:text-base">
              {t("whyus.portfolio.desc")}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "sulfite", icon: FlaskConical, title: t("home.groups.sulfite.title"), description: t("home.groups.sulfite.description"), items: [t("home.groups.sulfite.item1"), t("home.groups.sulfite.item2"), t("home.groups.sulfite.item3")] },
              { key: "sulfate", icon: TestTubes, title: t("home.groups.sulfate.title"), description: t("home.groups.sulfate.description"), items: [t("home.groups.sulfate.item1"), t("home.groups.sulfate.item2"), t("home.groups.sulfate.item3")] },
              { key: "organic", icon: Microscope, title: t("home.groups.organic.title"), description: t("home.groups.organic.description"), items: [t("home.groups.organic.item1"), t("home.groups.organic.item2"), t("home.groups.organic.item3")] },
              { key: "others", icon: Boxes, title: t("home.groups.others.title"), description: t("home.groups.others.description"), items: [t("home.groups.others.item1"), t("home.groups.others.item2"), t("home.groups.others.item3")] },
            ].map((group, index) => (
              <article
                key={group.key}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white p-6 shadow-[0_12px_28px_-22px_rgba(15,23,42,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_44px_-24px_rgba(15,23,42,0.34)] lg:p-7"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#0756b8] transition-colors duration-300 group-hover:bg-[#0241c0]" />

                <div className="mb-5 flex items-start justify-between gap-4">
                  <group.icon aria-hidden="true" strokeWidth={1.35} className="h-7 w-7 text-[#0756b8]" />
                  <span className="select-none text-4xl font-light leading-none tracking-[-0.06em] text-[#c8dcf5]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-950">
                  {group.title}
                </h3>
                <p className="mt-2.5 line-clamp-3 min-h-[3.75rem] text-[13px] leading-5 text-slate-500">
                  {group.description}
                </p>

                <div className="my-4 h-px bg-slate-200" />

                <ul className="mb-4 flex-grow space-y-2.5 text-[13px] leading-5 text-slate-600">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0756b8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-end border-t border-slate-100 pt-4">
                  <Link
                    href="/catalog"
                    className="inline-flex min-h-10 items-center gap-2 px-2 text-xs font-extrabold text-[#0756b8] transition-colors hover:text-[#064a9d]"
                  >
                    {t("home.groups.details")}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-8 lg:py-10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-xl border border-blue-100/90 bg-white/95 px-6 py-7 shadow-[0_14px_36px_-28px_rgba(15,67,120,0.6)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-9 lg:py-8">
            <div className="absolute inset-y-0 left-0 w-1 bg-[#0756b8]" />
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold tracking-tight text-slate-950 lg:text-2xl">
                {t("custom.title")}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("custom.text")}
              </p>
            </div>
            <div className="mt-5 shrink-0 lg:mt-0">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-full bg-[#0756b8] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#064a9d] active:scale-95"
              >
                {t("hero.contact")}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about-preview" className="border-t border-white/80 bg-white/50 py-12 backdrop-blur-[2px] lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 lg:text-3xl">
                {t("about.preview.title")}
              </h2>
              <p className="mb-5 mt-3 text-sm leading-6 text-slate-600 text-pretty lg:text-base">
                {t("about.preview.text")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0241c0] transition-colors hover:opacity-80"
              >
                {t("about.preview.link")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-blue-100 bg-blue-100 shadow-[0_12px_30px_-26px_rgba(15,67,120,0.5)]">
              {[
                { icon: "01", title: t("about.mission.title"), decoration: Target },
                { icon: "02", title: t("about.industries.title"), decoration: Factory },
                { icon: "03", title: t("about.capabilities.title"), decoration: ChartNoAxesCombined },
                { icon: "04", title: t("about.geography.title"), decoration: Globe },
              ].map((item) => (
                <Link
                  key={item.icon}
                  href="/about"
                  className="group relative min-h-[120px] overflow-hidden bg-white/95 p-5 transition-colors hover:bg-white active:scale-[0.99]"
                >
                  <item.decoration
                    aria-hidden="true"
                    strokeWidth={2}
                    className="pointer-events-none absolute -right-14 top-1/2 h-28 w-28 -translate-y-1/2 text-[#1E5FD8] opacity-[0.06] transition-[opacity,transform] duration-300 ease-out group-hover:scale-[1.04] group-hover:opacity-[0.11] sm:-right-3"
                  />
                  <span className="relative z-10 mb-5 block text-xs font-black tracking-[0.16em] text-slate-400 transition-colors group-hover:text-[#0756b8]">{item.icon}</span>
                  <span className="relative z-10 text-[15px] font-bold leading-snug text-slate-900">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
