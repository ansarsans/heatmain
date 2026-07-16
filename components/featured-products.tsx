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
    <section className="py-12 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
              {t("homepage.products.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
              {t("homepage.products.subtitle")}
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-xs font-bold text-[#0756b8] transition-all hover:border-blue-300 hover:bg-blue-50"
          >
            {t("products.highlights.view_all")}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <div key={product.id} className="rounded-3xl border border-blue-100/80 bg-white p-3 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_24px_55px_-34px_rgba(7,86,184,0.42)]">
              <ProductCard product={product} variant="light" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
