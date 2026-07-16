"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Stats Section */}
      <section className="border-b border-blue-100 bg-[#eef6ff] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8">
            {[
              { label: t("stats.founded"), value: "2024" },
              { label: t("stats.countries"), value: "5+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
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
              <div key={group.key} className="flex flex-col min-h-[280px] rounded-xl border border-zinc-100 bg-white p-6 shadow-[-10px_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[-15px_15px_40px_-10px_rgba(0,0,0,0.2)]">
                <h3 className="mb-4 text-lg font-bold text-foreground">
                  {group.title}
                </h3>
                <ul className="mb-6 flex-grow space-y-3 text-sm text-muted-foreground">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-black text-lg font-bold leading-none">•</span>
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
      <section className="bg-[#eef6ff] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0756b8] to-[#3b82d0] px-8 py-12 shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 lg:px-16 lg:py-20">
            {/* Noise/Grain layer */}
            <div 
              className="absolute inset-0 opacity-[0.1] pointer-events-none z-0"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>

            {/* Focused Blurry Spots */}
            <div className="absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-zinc-600/10 blur-3xl z-0" />
            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-[#0241c0]/15 blur-3xl z-0" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                {t("custom.title")}
              </h2>
              <p className="mb-8 text-lg text-white/80">
                {t("custom.text")}
              </p>
              <>
                <style>{`
                  @keyframes softPulse {
                    0% { box-shadow: 0 0 10px rgba(2, 65, 192, 0.4); opacity: 1; }
                    50% { box-shadow: 0 0 25px rgba(2, 65, 192, 0.7); opacity: 0.95; }
                    100% { box-shadow: 0 0 10px rgba(2, 65, 192, 0.4); opacity: 1; }
                  }
                `}</style>
                <Link
                  href="/contacts"
                  className="z-10 inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-base font-bold text-[#0756b8] transition-all hover:shadow-xl active:scale-95"
                  style={{ animation: 'softPulse 3s ease-in-out infinite' }}
                >
                  {t("hero.contact")}
                </Link>
              </>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-16 lg:py-24">
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
            <div className="grid grid-cols-2 gap-4 lg:w-1/2">
              {[
                { icon: "01", title: t("about.mission.title") },
                { icon: "02", title: t("about.industries.title") },
                { icon: "03", title: t("about.capabilities.title") },
                { icon: "04", title: t("about.geography.title") },
              ].map((item) => (
                <Link
                  key={item.icon}
                  href="/about"
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl active:scale-95"
                >
                  <span className="mb-3 block text-3xl font-black text-blue-300/40 transition-colors group-hover:text-blue-400/80">{item.icon}</span>
                  <span className="font-bold text-card-foreground">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
