"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface PrivacyConsentProps {
  privacyAccepted: boolean
  onPrivacyAcceptedChange: (checked: boolean) => void
  marketingAccepted: boolean
  onMarketingAcceptedChange: (checked: boolean) => void
  variant?: "light" | "dark"
}

export function PrivacyConsent({
  privacyAccepted,
  onPrivacyAcceptedChange,
  marketingAccepted,
  onMarketingAcceptedChange,
  variant = "light",
}: PrivacyConsentProps) {
  const { t } = useTranslation()
  const dark = variant === "dark"

  return (
    <div className="space-y-3">
      <label className="flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          required
          checked={privacyAccepted}
          onChange={(event) => onPrivacyAcceptedChange(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#0756b8]"
        />
        <span className={cn("text-[11px] leading-5", dark ? "text-slate-300" : "text-zinc-600")}> 
          {t("privacy.form.required")} {" "}
          <Link
            href="/privacy"
            target="_blank"
            className={cn("font-semibold underline underline-offset-2", dark ? "text-blue-200 hover:text-white" : "text-[#0756b8] hover:text-[#064a9d]")}
          >
            {t("privacy.link")}
          </Link>
          .
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          checked={marketingAccepted}
          onChange={(event) => onMarketingAcceptedChange(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#0756b8]"
        />
        <span className={cn("text-[11px] leading-5", dark ? "text-slate-400" : "text-zinc-500")}> 
          {t("privacy.form.marketing")}
        </span>
      </label>
    </div>
  )
}
