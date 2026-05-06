"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { getAssetPath } from "@/lib/utils"

export function FeaturedProducts() {
  const { t } = useTranslation()

  // Select a few representative products
  // 1. Sodium Metabisulfite (chem-11)
  // 2. Pipes, rounds, sheets (met-1)
  // 3. Pumps (equip-20)
  const featuredIds = ["chem-11", "met-1", "equip-20"]
  const featured = products.filter((p) => featuredIds.includes(p.id))

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-[#131415]">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getAssetPath("/main.jpg")} 
          alt="" 
          className="h-full w-full object-cover opacity-40 grayscale blur-[8px]"
        />
        <div className="absolute inset-0 bg-[#131415]/40" />
      </div>

      {/* Blurry Spots for depth */}
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#0241c0]/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-zinc-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            {t("homepage.products.title")}
          </h2>
          <p className="max-w-2xl text-lg text-white/50">
            {t("homepage.products.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} variant="dark" />
          ))}
        </div>

        <div className="mt-16 text-center">
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
