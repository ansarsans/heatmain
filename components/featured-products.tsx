"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const { t } = useTranslation()

  // Select a few representative products (химия / металлы / оборудование)
  // 3-й слот был equip-20 — такого id в каталоге нет, из-за этого показывались только 2 карточки
  const featuredIds = ["chem-11", "met-8", "equip-1"] as const
  const order = new Map<string, number>(featuredIds.map((id, i) => [id, i]))
  const featured = products
    .filter((p) => order.has(p.id))
    .sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0))

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#edf6ff] to-[#f8fbff] py-14 lg:py-20">

      {/* Blurry Spots for depth */}
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#0241c0]/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-zinc-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
            {t("homepage.products.title")}
          </h2>
          <p className="max-w-2xl text-lg text-slate-600">
            {t("homepage.products.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <div key={product.id} className="rounded-2xl border border-white bg-white/90 p-4 shadow-[0_24px_60px_-35px_rgba(2,65,192,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-30px_rgba(2,65,192,0.45)]">
              <ProductCard product={product} variant="light" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-md bg-[#0241c0] px-8 py-3 text-base font-bold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
          >
            {t("products.highlights.view_all")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
