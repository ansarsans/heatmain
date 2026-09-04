import type { CSSProperties } from "react"
import type { Locale } from "@/lib/i18n"

/** Точка: ул. Әлихан Бөкейхан 27/1, Астана (ориентир — ЖК «Венский квартал Блок Ж» в 2ГИС) */
export const OFFICE_LAT = 51.08497
export const OFFICE_LON = 71.42848

export const TWO_GIS_GEO_PAGE =
  "https://2gis.kz/astana/geo/70030076171543666"

const mapLabels: Record<Locale, { city: string; address: string; note: string }> = {
  ru: {
    city: "Астана",
    address: "ул. Әлихан Бөкейхан, 27/1",
    note: "Карта откроется в 2ГИС только после нажатия кнопки ниже",
  },
  kz: {
    city: "Астана",
    address: "Әлихан Бөкейхан көшесі, 27/1",
    note: "Карта төмендегі түймені басқаннан кейін ғана 2ГИС-те ашылады",
  },
  en: {
    city: "Astana",
    address: "27/1 Alikhan Bokeikhan Street",
    note: "The map opens in 2GIS only after you select the button below",
  },
}

/** Локальная заглушка карты: сторонние сервисы не загружаются без действия пользователя. */
export function TwoGisEmbed({
  height = 400,
  locale = "ru",
}: {
  height?: number
  locale?: Locale
}) {
  const label = mapLabels[locale]

  return (
    <div
      role="img"
      aria-label={`${label.city}, ${label.address}`}
      className="relative flex w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#dbeafe_0,#eff6ff_38%,#f8fafc_72%)] px-6 text-center"
      style={
        {
          height,
          minHeight: height,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#94a3b8_1px,transparent_1px),linear-gradient(90deg,#94a3b8_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative max-w-sm rounded-2xl border border-blue-200 bg-white/95 px-6 py-7 shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0756b8] text-xl text-white shadow-md" aria-hidden="true">
          ●
        </div>
        <p className="mt-4 text-lg font-bold text-slate-950">{label.city}</p>
        <p className="mt-1 text-sm font-medium text-slate-700">{label.address}</p>
        <p className="mt-3 text-xs leading-5 text-slate-500">{label.note}</p>
      </div>
    </div>
  )
}
