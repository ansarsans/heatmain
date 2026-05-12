"use client"

import Image from "next/image"
import { getAssetPath, cn } from "@/lib/utils"

const LOGO_SRC = "/logo.jpg"

type BrandLogoProps = {
  className?: string
  /** CSS size (Tailwind h-9 w-9 = 36px) */
  size?: number
  priority?: boolean
}

export function BrandLogo({ className, size = 36, priority }: BrandLogoProps) {
  return (
    <Image
      src={getAssetPath(LOGO_SRC)}
      alt="Heat Energy Capital"
      width={size}
      height={size}
      className={cn("shrink-0 rounded-md object-contain", className)}
      sizes={`${size}px`}
      priority={priority}
    />
  )
}
