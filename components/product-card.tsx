"use client"

import { useTranslation } from "@/lib/i18n"
import type { Product } from "@/lib/products"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

import Image from "next/image"

const categoryColors: Record<string, string> = {
  chemistry: "bg-amber-100/80 text-amber-900 border-amber-200",
  metals: "bg-slate-100/80 text-slate-900 border-slate-200",
  equipment: "bg-orange-100/80 text-orange-900 border-orange-200",
}

const categoryLabels: Record<string, Record<string, string>> = {
  chemistry: { ru: "Химия", kz: "Химия", en: "Chemistry" },
  metals: { ru: "Металлы", kz: "Металдар", en: "Metals" },
  equipment: { ru: "Оборудование", kz: "Жабдықтар", en: "Equipment" },
}

export function ProductCard({ product }: { product: Product }) {
  const { locale, t } = useTranslation()
  const lang = locale as Locale

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name[lang]}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted/50">
            <svg
              className="text-muted-foreground/20"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
              categoryColors[product.category]
            )}
          >
            {categoryLabels[product.category]?.[lang] ?? product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-card-foreground leading-tight group-hover:text-accent transition-colors">
          {product.name[lang]}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {product.description[lang]}
        </p>
        <div className="mt-auto pt-4 border-t border-border/50">
        <a
          href="/contacts"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          {t("catalog.inquire")}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        </div>
      </div>
    </div>
  )
}
