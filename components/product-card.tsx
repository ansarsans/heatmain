"use client"

import Link from "next/link"
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

interface ProductCardProps {
  product: Product
  variant?: "light" | "dark"
  /** Если задано, кнопка «Подробнее» открывает модалку (каталог), иначе ведёт на контакты */
  onDetailsClick?: (product: Product) => void
  /** Скрыть описание (например, в каталоге — текст только в модалке «Подробнее») */
  hideDescription?: boolean
}

export function ProductCard({
  product,
  variant = "light",
  onDetailsClick,
  hideDescription = false,
}: ProductCardProps) {
  const { locale, t } = useTranslation()
  const lang = locale as Locale

  return (
    <div className="group flex h-full flex-col overflow-hidden transition-all">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-[1.15rem] bg-stone-200">
        {product.image ? (
          <Image
            src={getAssetPath(product.image)}
            alt={product.name[lang]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
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
              variant === 'light' 
                ? "border-blue-100 bg-white/90 text-[#0756b8] backdrop-blur-sm" 
                : "bg-zinc-900/80 border-white/20 text-white backdrop-blur-sm"
            )}
          >
            {categoryLabels[product.category]?.[lang] ?? product.category}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          hideDescription ? "pt-3 pb-6 sm:pt-4" : "py-6",
        )}
      >
        <h3
          className={cn(
            "font-semibold leading-tight transition-colors",
            hideDescription ? "mb-4 text-base sm:text-[17px]" : "mb-2 text-xl",
            variant === "light" ? "text-zinc-900" : "text-white",
          )}
        >
          {product.name[lang]}
        </h3>
        {!hideDescription && (
          <p
            className={cn(
              "mb-6 text-sm leading-relaxed line-clamp-3",
              variant === "light" ? "text-zinc-500" : "text-white/60",
            )}
          >
            {product.description[lang]}
          </p>
        )}
        <div className="mt-auto flex items-center justify-end gap-2">
          {onDetailsClick ? (
            <button
              type="button"
              onClick={() => onDetailsClick(product)}
              className={cn(
                "inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-[11px] font-bold transition-all active:scale-95",
                variant === "light"
                  ? "border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/10",
              )}
            >
              {t("products.learn_more")}
            </button>
          ) : null}

          <Link
            href={`/contacts?product=${encodeURIComponent(product.id)}`}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold text-white transition-all active:scale-95",
              variant === "light"
                ? "bg-[#0756b8] hover:bg-[#064a9d]"
                : "bg-[#0241c0] hover:bg-[#0241c0]/80",
            )}
          >
            {t("products.order")}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor">
              <path d="M3.33 8h9.34M8.67 4l4 4-4 4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
