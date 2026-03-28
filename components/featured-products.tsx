"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const { t } = useTranslation()

  // Select a few representative products
  // 1. Sodium Metabisulfite (chem-11)
  // 2. Pipes, rounds, sheets (met-1)
  // 3. Pumps (equip-20)
  const featuredIds = ["chem-11", "met-1", "equip-20"]
  const featured = products.filter((p) => featuredIds.includes(p.id))

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
            {t("homepage.products.title")}
          </h2>
          <div className="h-1.5 w-24 bg-accent mb-6" />
          <p className="max-w-2xl text-lg text-muted-foreground">
            {t("homepage.products.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            {t("products.highlights.view_all")}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
