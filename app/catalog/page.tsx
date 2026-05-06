"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useTranslation, type Locale } from "@/lib/i18n"
import { products, type Category } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"

const categories: { key: string; value: Category | "all" }[] = [
  { key: "catalog.all", value: "all" },
  { key: "catalog.chemistry", value: "chemistry" },
  { key: "catalog.metals", value: "metals" },
  { key: "catalog.equipment", value: "equipment" },
]

export default function CatalogPage() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <CatalogContent />
    </Suspense>
  )
}

function CatalogSkeleton() {
  return (
    <main className="py-12 lg:py-20 min-h-screen bg-[#f4f2ee]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 max-w-xl">
          <div className="mb-3 h-9 w-48 animate-pulse rounded bg-zinc-200" />
          <div className="h-5 w-72 animate-pulse rounded bg-zinc-200" />
        </div>
        <div className="mb-8 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-24 animate-pulse rounded-md bg-zinc-200" />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-52 animate-pulse rounded-lg bg-zinc-200" />
          ))}
        </div>
      </div>
    </main>
  )
}

function CatalogContent() {
  const { t, locale } = useTranslation()
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get("category") as Category | null) ?? "all"

  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    initialCategory === "chemistry" || initialCategory === "metals" || initialCategory === "equipment"
      ? initialCategory
      : "all"
  )
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const lang = locale as Locale
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory
      if (!matchesCategory) return false
      if (!search.trim()) return true
      const q = search.toLowerCase()
      return (
        p.name[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q)
      )
    })
  }, [activeCategory, search, locale])

  return (
    <main className="relative min-h-screen pt-[84px] pb-24 lg:pt-[100px] lg:pb-32 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 lg:px-8">
        {/* Page header with Search aligned */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl text-balance">
              {t("catalog.title")}
            </h1>
            <p className="text-lg text-zinc-600 text-pretty">
              {t("catalog.subtitle")}
            </p>
          </div>

          {/* Search Bar aligned with Title */}
          <div className="relative w-full sm:w-80">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                fill="currentColor"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("catalog.search")}
              className="w-full rounded-full border border-zinc-300 bg-transparent py-3 pl-11 pr-4 text-[13px] font-bold text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Sidebar - Categories */}
          <aside className="w-full lg:w-64 lg:shrink-0">
            <div className="sticky top-[120px]">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400 px-2">
                {locale === 'ru' ? 'Категории' : (locale === 'kz' ? 'Санаттар' : 'Categories')}
              </h2>
              <div className="relative flex flex-col gap-1 rounded-2xl bg-transparent p-1">
                {/* Vertical Sliding Pill */}
                <div 
                  className="absolute left-1 right-1 rounded-xl bg-stone-200 transition-all duration-300 ease-out z-0"
                  style={{
                    height: '40px',
                    top: `${(categories.findIndex(c => c.value === activeCategory) * 44) + 4}px`,
                  }}
                />
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={cn(
                      "relative z-10 flex h-10 w-full items-center px-4 text-[13px] font-bold transition-colors duration-300 rounded-xl",
                      activeCategory === cat.value
                        ? "text-zinc-900"
                        : "text-zinc-500 hover:text-zinc-800"
                    )}
                  >
                    {t(cat.key)}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Product grid */}
            <style>{`
              @keyframes cardSlideUp {
                0% { opacity: 0; transform: translateY(30px); filter: blur(4px); }
                100% { opacity: 1; transform: translateY(0); filter: blur(0); }
              }
              .animate-card {
                animation: cardSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                opacity: 0;
              }
            `}</style>
            {filtered.length > 0 ? (
              <div 
                key={activeCategory + search} 
                className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="animate-card h-full" 
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{t("catalog.no_results")}</h3>
                <p className="mt-1 text-zinc-500">{t("catalog.try_another")}</p>
                <button
                  onClick={() => {
                    setActiveCategory("all")
                    setSearch("")
                  }}
                  className="mt-6 font-bold text-[#0241c0] hover:underline"
                >
                  {t("catalog.clear_filters")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
