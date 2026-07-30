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
}

const categoryIcons = {
  chemistry: FlaskConical,
  metals: Layers3,
  equipment: Cog,
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
          "max-h-[min(92vh,760px)] w-[min(100vw-1.5rem,calc(100vw-2rem))] max-w-[min(100vw-1.5rem,920px)] sm:my-6 sm:mx-auto sm:w-[min(100vw-2.5rem,920px)] lg:max-w-[960px]",
          "translate-x-[-50%] translate-y-[-50%]",
        )}
      >
        {product && (
          <div className="flex max-h-[min(92vh,760px)] flex-col md:flex-row md:items-stretch">
            {/* Left: photo only */}
            <div className="relative aspect-[4/3] w-full shrink-0 bg-stone-200 md:aspect-auto md:min-h-[min(420px,55vh)] md:w-[min(42%,360px)] lg:w-[400px]">
              {product.image ? (
                <Image
                  src={getAssetPath(product.image)}
                  alt={product.name[lang]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
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
