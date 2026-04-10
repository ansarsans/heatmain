"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { CategoryCard } from "@/components/category-card"
import { FeaturedProducts } from "@/components/featured-products"
import { cn } from "@/lib/utils"

function FlaskIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 3v7.4a2 2 0 0 1-.4 1.2L4 19.2a1.5 1.5 0 0 0 1.2 2.3h13.6a1.5 1.5 0 0 0 1.2-2.3l-5.6-7.6A2 2 0 0 1 14 10.4V3" />
      <path d="M8.5 14h7" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4 7.5 4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  )
}

function LabIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
      <section className="border-b-0 bg-[#f4f2ee] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-8">
            {[
              { label: t("stats.founded"), value: "1999" },
              { label: t("stats.area"), value: "20000" },
              { label: t("stats.countries"), value: "40+" },
              { label: t("stats.clients"), value: "300+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={cn(
                  "mb-2 text-4xl font-black lg:text-5xl",
                  stat.value === "40+" ? "text-[#0241c0]" : "text-zinc-900"
                )}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 lg:py-32">
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
              { key: "exp", icon: <TrophyIcon /> },
              { key: "portfolio", icon: <PackageIcon /> },
              { key: "rd", icon: <LabIcon /> },
              { key: "global", icon: <GlobeIcon /> },
            ].map((item) => (
              <div 
                key={item.key} 
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 p-8 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
              >
                {/* Noise/Grain layer */}
                <div 
                  className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>

                {/* Focused Blurry Spot 1 (Gray w/ subtle grain effect overlay) */}
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-zinc-600/20 blur-xl z-0" />
                
                {/* Focused Blurry Spot 2 (Blue w/ subtle grain) */}
                <div className="absolute -left-2 -top-2 h-20 w-20 rounded-full bg-[#0241c0]/25 blur-xl z-0" />

                {/* Localized Noise layer (clipped to spots roughly) */}
                <div 
                  className="absolute inset-0 opacity-[0.2] pointer-events-none z-0"
                  style={{ maskImage: 'radial-gradient(circle at top left, black, transparent 40%), radial-gradient(circle at bottom right, black, transparent 40%)', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="mb-4 text-xl font-medium text-white transition-colors">
                    {t(`whyus.${item.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 font-light">
                    {t(`whyus.${item.key}.desc`)}
                  </p>
                </div>
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
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              {t("catalog.title")}
            </h2>
            <p className="w-full text-lg text-muted-foreground">
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
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 px-8 py-12 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 lg:px-16 lg:py-20">
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
              <p className="mb-8 text-lg text-white/60">
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
                  className="inline-flex items-center gap-2 rounded-md bg-[#0241c0] px-8 py-3 text-base font-bold text-white transition-all hover:shadow-[0_0_25px_rgba(2, 65, 192, 0.8)] active:scale-95 z-10"
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
