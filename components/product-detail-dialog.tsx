"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation, type Locale } from "@/lib/i18n"
import { localizeOrigin, type Product } from "@/lib/products"
import { getAssetPath, cn } from "@/lib/utils"
import { Cog, FlaskConical, Layers3 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const categoryLabels: Record<string, Record<string, string>> = {
  chemistry: { ru: "Хим. реагенты", kz: "Химиялық реагенттер", en: "Chemical Reagents" },
  metals: { ru: "Металлы, сплавы", kz: "Металдар, қорытпалар", en: "Metals & Alloys" },
  equipment: { ru: "Оборудование, комплектующие", kz: "Жабдықтар, құрамдас бөлшектер", en: "Equipment & Components" },
  rubber: { ru: "Резинотехника", kz: "Резеңке-техникалық бұйымдар", en: "Rubber Products" },
}

const categoryIcons = {
  chemistry: FlaskConical,
  metals: Layers3,
  equipment: Cog,
  rubber: Layers3,
}

const closeBtnClass =
  "top-4 right-4 z-[110] flex size-10 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-100/80 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-0 [&_svg]:size-5"

interface ProductDetailDialogProps {
  product: Product | null
  onOpenChange: (open: boolean) => void
}

export function ProductDetailDialog({ product, onOpenChange }: ProductDetailDialogProps) {
  const { locale, t } = useTranslation()
  const lang = locale as Locale
  const open = product !== null
  const PlaceholderIcon = product ? categoryIcons[product.category] : FlaskConical

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        closeButtonClassName={closeBtnClass}
        className={cn(
          "gap-0 overflow-hidden rounded-xl border-zinc-200 p-0 shadow-xl",
          product?.category === "rubber"
            ? "max-h-[min(92vh,760px)] w-[min(100vw-1.5rem,calc(100vw-2rem))] max-w-[min(100vw-1.5rem,1040px)] sm:my-6 sm:mx-auto sm:w-[min(100vw-2.5rem,1040px)] lg:max-w-[1040px]"
            : "max-h-[min(92vh,760px)] w-[min(100vw-1.5rem,calc(100vw-2rem))] max-w-[min(100vw-1.5rem,920px)] sm:my-6 sm:mx-auto sm:w-[min(100vw-2.5rem,920px)] lg:max-w-[960px]",
          "translate-x-[-50%] translate-y-[-50%]",
        )}
      >
        {product && (
          <div className="flex max-h-[min(92vh,760px)] flex-col md:flex-row md:items-stretch">
            {/* Left: photo only */}
            <div
              className={cn(
                "relative aspect-[4/3] w-full shrink-0 bg-stone-200 md:aspect-auto md:min-h-[min(420px,55vh)]",
                product.category === "rubber"
                  ? "overflow-hidden bg-stone-100 md:w-[min(42%,420px)] lg:w-[420px]"
                  : "md:w-[min(42%,360px)] lg:w-[400px]",
              )}
            >
              {product.image ? (
                product.category === "rubber" ? (
                  <>
                    <Image
                      src={getAssetPath(product.image)}
                      alt=""
                      fill
                      className="scale-110 object-cover opacity-70 blur-2xl saturate-75"
                      sizes="(max-width: 768px) 100vw, 420px"
                      aria-hidden="true"
                    />
                    <Image
                      src={getAssetPath(product.image)}
                      alt={product.name[lang]}
                      fill
                      className="relative scale-[1.16] object-contain"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </>
                ) : (
                  <Image
                    src={getAssetPath(product.image)}
                    alt={product.name[lang]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                )
              ) : (
                <div className="relative flex h-full min-h-[200px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.45),transparent_38%),linear-gradient(145deg,#f8fbff_0%,#e8f3ff_100%)] text-[#0756b8] md:min-h-full">
                  <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-blue-200/70" />
                  <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full border border-white" />
                  <PlaceholderIcon className="relative h-20 w-20 opacity-50" strokeWidth={1.2} aria-hidden="true" />
                </div>
              )}
            </div>

            {/* Right: badge, title, description, order */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-6 overflow-y-auto p-6 pb-6 pt-14 sm:p-8 sm:pt-16 md:pt-14">
              <DialogHeader className="space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-900">
                    {categoryLabels[product.category]?.[lang] ?? product.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <DialogTitle className="pr-2 text-xl font-semibold leading-snug text-zinc-900 sm:text-2xl">
                    {product.name[lang]}
                  </DialogTitle>
                  {product.category === "chemistry" && product.formula ? (
                    <p className="font-mono text-sm font-semibold tracking-wide text-[#0756b8] sm:text-base">
                      {product.formula}
                    </p>
                  ) : null}
                </div>
                <DialogDescription className="text-left text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                  {product.description[lang]}
                </DialogDescription>
                {product.detailTables?.length ? (
                  <div className="space-y-5 border-t border-zinc-100 pt-4">
                    {product.detailTables.map((table, tableIndex) => {
                      const columns = table.columns.length
                      const desktopColumns = columns === 2
                        ? "minmax(0,1.7fr) minmax(120px,.8fr)"
                        : `repeat(${columns}, minmax(0, 1fr))`

                      return (
                        <section key={`${product.id}-table-${tableIndex}`} className="space-y-3">
                          {table.title ? (
                            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                              {table.title[lang]}
                            </h3>
                          ) : null}
                          <div className="overflow-hidden rounded-xl border border-zinc-200">
                            <div
                              className="hidden gap-3 bg-zinc-50 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-500 sm:grid"
                              style={{ gridTemplateColumns: desktopColumns }}
                            >
                              {table.columns.map((column, columnIndex) => (
                                <span key={`${product.id}-table-${tableIndex}-column-${columnIndex}`}>
                                  {column[lang]}
                                </span>
                              ))}
                            </div>
                            <div className="divide-y divide-zinc-200">
                              {table.rows.map((row, rowIndex) => (
                                <div
                                  key={`${product.id}-table-${tableIndex}-row-${rowIndex}`}
                                  className="grid gap-3 px-4 py-3 text-xs leading-relaxed text-zinc-700 sm:grid"
                                  style={{ gridTemplateColumns: desktopColumns }}
                                >
                                  {row.map((cell, cellIndex) => (
                                    <div key={`${product.id}-table-${tableIndex}-row-${rowIndex}-cell-${cellIndex}`}>
                                      <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-400 sm:hidden">
                                        {table.columns[cellIndex]?.[lang]}
                                      </span>
                                      <span className={cellIndex === 0 ? "font-semibold text-zinc-900" : undefined}>
                                        {cell[lang]}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </section>
                      )
                    })}
                  </div>
                ) : product.specifications?.length ? (
                  <div className="space-y-3 border-t border-zinc-100 pt-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                      {t("products.specifications")}
                    </h3>
                    <div className="overflow-hidden rounded-xl border border-zinc-200">
                      <div className="hidden grid-cols-[1.15fr_1.7fr_.7fr_1fr] gap-3 bg-zinc-50 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-500 sm:grid">
                        <span>{t("products.specification.name")}</span>
                        <span>{t("products.specification.grades")}</span>
                        <span>{t("products.specification.width")}</span>
                        <span>{t("products.specification.supplier")}</span>
                      </div>
                      <div className="divide-y divide-zinc-200">
                        {product.specifications.map((specification, index) => (
                          <div
                            key={`${product.id}-specification-${index}`}
                            className="grid gap-3 px-4 py-3 text-xs leading-relaxed text-zinc-700 sm:grid-cols-[1.15fr_1.7fr_.7fr_1fr]"
                          >
                            <div>
                              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-400 sm:hidden">
                                {t("products.specification.name")}
                              </span>
                              <span className="font-semibold text-zinc-900">{specification.name[lang]}</span>
                            </div>
                            <div>
                              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-400 sm:hidden">
                                {t("products.specification.grades")}
                              </span>
                              {specification.grades[lang]}
                            </div>
                            <div>
                              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-400 sm:hidden">
                                {t("products.specification.width")}
                              </span>
                              {specification.width[lang]}
                            </div>
                            <div>
                              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-400 sm:hidden">
                                {t("products.specification.supplier")}
                              </span>
                              {specification.supplier}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3 border-t border-zinc-100 pt-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                        {t("products.origin")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-800">
                        {product.origin ? localizeOrigin(product.origin, lang) : t("products.on_request")}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                        {t("products.buyer")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-800">
                        {product.buyer || t("products.on_request")}
                      </p>
                    </div>
                  </div>
                )}
              </DialogHeader>
              <div className="flex shrink-0 flex-col gap-2 border-t border-zinc-100 pt-4 sm:flex-row sm:justify-end">
                <Link
                  href={`/contacts?product=${encodeURIComponent(product.id)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0241c0] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#023190] active:scale-[0.98]"
                  onClick={() => onOpenChange(false)}
                >
                  {t("products.order")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
