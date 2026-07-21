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
    <section className="bg-[linear-gradient(180deg,rgba(204,228,253,0.72)_0%,rgba(226,240,255,0.58)_48%,rgba(241,247,253,0.32)_100%)] py-9 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 lg:text-3xl">
              {t("homepage.products.title")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 lg:text-base">
              {t("homepage.products.subtitle")}
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-[11px] font-bold text-[#0756b8] transition-colors hover:border-blue-300 hover:bg-white"
          >
            {t("products.highlights.view_all")}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <div key={product.id} className="rounded-2xl border border-white/80 bg-white/70 p-2.5 shadow-[0_16px_42px_-36px_rgba(15,23,42,0.42)] backdrop-blur-sm transition-colors hover:border-blue-200 hover:bg-white/90">
              <ProductCard product={product} variant="light" compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
