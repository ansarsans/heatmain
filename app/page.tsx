"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { CategoryCard } from "@/components/category-card"
import { FeaturedProducts } from "@/components/featured-products"

function FlaskIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 3v7.4a2 2 0 0 1-.4 1.2L4 19.2a1.5 1.5 0 0 0 1.2 2.3h13.6a1.5 1.5 0 0 0 1.2-2.3l-5.6-7.6A2 2 0 0 1 14 10.4V3" />
      <path d="M8.5 14h7" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function CogIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

export default function HomePage() {
  const { t, locale } = useTranslation()

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Stats Section */}
      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-8">
            {[
              { label: t("stats.founded"), value: "1999" },
              { label: t("stats.area"), value: "20000" },
              { label: t("stats.countries"), value: "40+" },
              { label: t("stats.clients"), value: "300+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-black text-accent lg:text-5xl">{stat.value}</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              {t("whyus.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("whyus.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "exp", icon: "🏆" },
              { key: "portfolio", icon: "📦" },
              { key: "rd", icon: "🧪" },
              { key: "global", icon: "🌍" },
            ].map((item) => (
              <div key={item.key} className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-xl">
                <div className="mb-6 text-4xl">{item.icon}</div>
                <h3 className="mb-4 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {t(`whyus.${item.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`whyus.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Product Highlights / Groups */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl uppercase tracking-[0.1em]">
              {t("catalog.title")}
            </h2>
            <div className="h-1 w-20 bg-accent" />
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              {t("whyus.portfolio.desc")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "sulfite", title: locale === 'ru' ? 'Серия сульфитов' : locale === 'en' ? 'Sulfite Series' : 'Сульфиттер сериясы', items: ["Безводный сульфит натрия", "Тиосульфат натрия", "Метабисульфит натрия"] },
              { key: "sulfate", title: locale === 'ru' ? 'Серия сульфатов' : locale === 'en' ? 'Sulfate Series' : 'Сульфаттар сериясы', items: ["Гидросульфат натрия", "Гидросульфат калия", "Гидросульфат аммония"] },
              { key: "organic", title: locale === 'ru' ? 'Органическая серия' : locale === 'en' ? 'Organic Series' : 'Органикалық серия', items: ["N-этилэтилендиамин", "N,N-диэтилэтилендиамин", "N,N'-диэтилэтилендиамин"] },
              { key: "others", title: locale === 'ru' ? 'Другие' : locale === 'en' ? 'Others' : 'Басқалар', items: ["Оксид бария", "Силикокальций", "Фурфуриловый спирт"] },
            ].map((group) => (
              <div key={group.key} className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:bg-muted/50">
                <h3 className="mb-4 text-lg font-bold text-foreground border-l-4 border-accent pl-3">
                  {group.title}
                </h3>
                <ul className="mb-6 flex-grow space-y-3 text-sm text-muted-foreground">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/catalog?type=${group.key}`} className="text-xs font-bold text-accent uppercase tracking-widest hover:underline">
                  {t("products.highlights.view_all")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-12 shadow-xl lg:px-16 lg:py-20">
            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground lg:text-4xl">
                {t("custom.title")}
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                {t("custom.text")}
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {t("hero.contact")}
              </Link>
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
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
                <div
                  key={item.icon}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="mb-3 block text-3xl font-bold text-accent/20">{item.icon}</span>
                  <span className="font-semibold text-card-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
