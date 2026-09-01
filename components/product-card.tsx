"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import type { Product } from "@/lib/products"
import type { Locale } from "@/lib/i18n"
import { cn, getAssetPath } from "@/lib/utils"
import { Cog, FlaskConical, Layers3 } from "lucide-react"

import Image from "next/image"

const categoryColors: Record<string, string> = {
  chemistry: "bg-white text-zinc-900 border-zinc-300",
  metals: "bg-white text-zinc-900 border-zinc-300",
  equipment: "bg-white text-zinc-900 border-zinc-300",
  rubber: "bg-white text-zinc-900 border-zinc-300",
}

const categoryLabels: Record<string, Record<string, string>> = {
  chemistry: { ru: "Хим. реагенты", kz: "Химиялық реагенттер", en: "Chemical Reagents" },
  metals: { ru: "Металлы, сплавы", kz: "Металдар, қорытпалар", en: "Metals & Alloys" },
  equipment: { ru: "Оборудование, комплектующие и расход. материалы", kz: "Жабдықтар, құрамдас бөлшектер және шығыс материалдары", en: "Equipment, Components & Consumables" },
  rubber: { ru: "Резинотехника", kz: "Резеңке-техникалық бұйымдар", en: "Rubber Products" },
}

const categoryIcons = {
  chemistry: FlaskConical,
  metals: Layers3,
  equipment: Cog,
  rubber: Layers3,
}

interface ProductCardProps {
  product: Product
  variant?: "light" | "dark"
  compact?: boolean
  /** Если задано, кнопка «Подробнее» открывает модалку (каталог), иначе ведёт на контакты */
  onDetailsClick?: (product: Product) => void
  /** Скрыть описание (например, в каталоге — текст только в модалке «Подробнее») */
  hideDescription?: boolean
}

export function ProductCard({
  product,
  variant = "light",
  compact = false,
  onDetailsClick,
  hideDescription = false,
}: ProductCardProps) {
  const { locale, t } = useTranslation()
  const lang = locale as Locale
  const PlaceholderIcon = categoryIcons[product.category]
  const imageContainerClassName = cn(
    "relative aspect-video w-full overflow-hidden bg-stone-200 text-left",
    compact ? "rounded-xl" : "rounded-[1.15rem]",
    onDetailsClick && "cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0756b8] focus-visible:ring-offset-2",
  )

  const imageContent = (
    <>
      {product.image ? (
        <Image
          src={getAssetPath(product.image)}
          alt={product.name[lang]}
          fill
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_28%_20%,rgba(147,197,253,0.42),transparent_36%),linear-gradient(145deg,#f8fbff_0%,#e8f3ff_100%)] text-[#0756b8]">
          <div className="absolute -bottom-16 -right-12 h-44 w-44 rounded-full border border-blue-200/65" />
          <div className="absolute -left-12 -top-16 h-36 w-36 rounded-full border border-white/90" />
          <PlaceholderIcon className="relative h-12 w-12 opacity-55" strokeWidth={1.35} aria-hidden="true" />
        </div>
      )}
      <div className="pointer-events-none absolute right-2 top-2 z-10 max-w-[calc(100%-1rem)] sm:right-3">
        <span
          className={cn(
            "block max-w-full truncate rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:text-[10px]",
            variant === "light"
              ? "border-blue-100 bg-white/90 text-[#0756b8] backdrop-blur-sm"
              : "border-white/20 bg-zinc-900/80 text-white backdrop-blur-sm",
          )}
        >
          {categoryLabels[product.category]?.[lang] ?? product.category}
        </span>
      </div>
    </>
  )

  return (
    <div className="group flex h-full flex-col overflow-hidden transition-all">
      {/* Image Container */}
      {onDetailsClick ? (
        <button
          type="button"
          onClick={() => onDetailsClick(product)}
          className={imageContainerClassName}
          aria-label={`${t("products.learn_more")}: ${product.name[lang]}`}
        >
          {imageContent}
        </button>
      ) : (
        <div className={imageContainerClassName}>{imageContent}</div>
      )}

      <div
        className={cn(
          "flex flex-1 flex-col",
          hideDescription ? "pt-3 pb-6 sm:pt-4" : compact ? "px-1 py-4" : "py-6",
        )}
      >
        <h3
          className={cn(
            "break-words font-semibold leading-tight transition-colors",
            hideDescription ? "mb-4 text-base sm:text-[17px]" : compact ? "mb-1.5 text-base" : "mb-2 text-xl",
            variant === "light" ? "text-zinc-900" : "text-white",
          )}
        >
          {product.name[lang]}
        </h3>
        {!hideDescription && (
          <p
            className={cn(
              compact ? "mb-4 text-xs leading-5 line-clamp-2" : "mb-6 text-sm leading-relaxed line-clamp-3",
              variant === "light" ? "text-zinc-500" : "text-white/60",
            )}
          >
            {product.description[lang]}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-end gap-2">
          {onDetailsClick ? (
            <button
              type="button"
              onClick={() => onDetailsClick(product)}
              className={cn(
                "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-[11px] font-bold transition-all active:scale-95 sm:min-h-0",
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
              "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full font-bold text-white transition-all active:scale-95 sm:min-h-0",
              compact ? "px-4 py-2 text-[10px]" : "px-4 py-2 text-[11px]",
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
