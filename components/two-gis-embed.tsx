"use client"

import type { CSSProperties } from "react"
import type { Locale } from "@/lib/i18n"

/** Точка: ул. Әлихан Бөкейхан 27/1, Астана (ориентир — ЖК «Венский квартал Блок Ж» в 2ГИС) */
export const OFFICE_LAT = 51.08497
export const OFFICE_LON = 71.42848

export const TWO_GIS_GEO_PAGE =
  "https://2gis.kz/astana/geo/70030076171543666"

function mapsHl(locale: Locale): string {
  if (locale === "en") return "en"
  if (locale === "kz") return "kk"
  return "ru"
}

/** Интерактивная карта с меткой по координатам (без API-ключа). */
function buildGoogleMapsEmbedSrc(lat: number, lon: number, locale: Locale): string {
  const params = new URLSearchParams({
    q: `${lat},${lon}`,
    z: "17",
    output: "embed",
    hl: mapsHl(locale),
  })
  return `https://www.google.com/maps?${params.toString()}`
}

/**
 * Карта с пином. 2ГИС-виджет на сайте нестабилен; карточка здания — TWO_GIS_GEO_PAGE.
 */
export function TwoGisEmbed({
  height = 400,
  locale = "ru",
}: {
  height?: number
  locale?: Locale
}) {
  return (
    <iframe
      title="Карта: Астана, ул. Әлихан Бөкейхан 27/1"
      src={buildGoogleMapsEmbedSrc(OFFICE_LAT, OFFICE_LON, locale)}
      className="block w-full border-0"
      style={
        {
          height,
          minHeight: height,
        } as CSSProperties
      }
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
