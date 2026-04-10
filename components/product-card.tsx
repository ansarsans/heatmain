"use client"

import { useTranslation } from "@/lib/i18n"
import type { Product } from "@/lib/products"
import type { Locale } from "@/lib/i18n"
import { cn, getAssetPath } from "@/lib/utils"

import Image from "next/image"

const categoryColors: Record<string, string> = {
  chemistry: "bg-white text-zinc-900 border-zinc-300",
  metals: "bg-white text-zinc-900 border-zinc-300",
  equipment: "bg-white text-zinc-900 border-zinc-300",
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
    <div className="group flex h-full flex-col overflow-hidden transition-all">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-stone-200">
        {product.image ? (
          <Image
            src={getAssetPath(product.image)}
            alt={product.name[lang]}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-zinc-100">
            <svg
              className="text-zinc-300"
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
        <div className="absolute right-3 top-2 z-10">
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

      <div className="flex flex-1 flex-col py-6">
        <h3 className="mb-2 text-xl font-semibold text-zinc-900 leading-tight transition-colors">
          {product.name[lang]}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-zinc-500 line-clamp-3">
          {product.description[lang]}
        </p>
        <div className="mt-auto flex items-center justify-end gap-2">
          {/* Secondary Button: Learn More */}
          <a
            href="/contacts"
            className="inline-flex items-center rounded-full border border-zinc-300 bg-transparent px-4 py-2 text-[11px] font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
          >
            {locale === 'ru' ? 'Подробнее' : (locale === 'en' ? 'Learn More' : 'Толығырақ')}
          </a>

          {/* Primary Button: Order */}
          <a
            href="/contacts"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-[11px] font-bold text-white transition-all hover:bg-zinc-700"
          >
            {locale === 'ru' ? 'Заказать' : (locale === 'en' ? 'Order' : 'Тапсырыс беру')}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor">
              <path d="M3.33 8h9.34M8.67 4l4 4-4 4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
