"use client"

import { useTranslation } from "@/lib/i18n"
import { Phone, Mail, MapPin, Clock, ExternalLink, Send } from "lucide-react"

export default function ContactsPage() {
  const { t } = useTranslation()

  const contactItems = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: t("contacts.phone"),
      value: "+7 (705) 123-45-12",
      href: "tel:+77051234512",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: t("contacts.email"),
      value: "info@heatenergy.kz",
      href: "mailto:info@heatenergy.kz",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t("contacts.address"),
      value: "Kazakhstan, Almaty",
      href: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: t("contacts.hours"),
      value: t("contacts.hours.value"),
      href: undefined,
    },
  ]

  return (
    <main className="min-h-screen bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 border-b border-zinc-200 pb-10">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl text-balance">
            {t("contacts.title")}
          </h1>
          <p className="text-lg text-zinc-600 text-pretty">
            {t("contacts.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Section 1: Contact Form */}
          <div className="flex h-full flex-col rounded-xl border border-border/50 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">
                {t("contacts.form_title")}
              </h2>
              <div className="mt-4 border-b-2 border-zinc-200 w-full" />
            </div>

            <form className="flex flex-1 flex-col space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10"
                  placeholder={t("contacts.name_label")}
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10"
                  placeholder={t("contacts.email_label")}
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10"
                  placeholder={t("contacts.phone_label")}
                />
              </div>

              <div className="flex flex-1 flex-col">
                <textarea
                  id="message"
                  className="w-full flex-1 resize-none rounded-md border border-border/60 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a1c21] focus:ring-1 focus:ring-[#1a1c21]/10 min-h-[120px]"
                  placeholder={t("contacts.message_label")}
                />
              </div>

              <button
                type="submit"
                className="group mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-[#1a1c21] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a2d33] active:scale-[0.98]"
              >
                <span>{t("contacts.send_button")}</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          {/* Section 2: Contact Information */}
          <div className="border-l border-r border-zinc-200 bg-transparent px-8 lg:px-12 pt-8 pb-2">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1c21]">
                {t("contacts.info_title")}
              </h2>
              <div className="mt-4 border-b-2 border-zinc-200 w-full" />
            </div>

            <div className="space-y-8">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#1a1c21] shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-sm font-medium text-[#1a1c21] transition-colors hover:text-[#0241c0]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-[#1a1c21]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 rounded-lg border border-dashed border-border/60 p-5 bg-white/50">
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                "{t("contacts.note")}"
              </p>
            </div>
          </div>

          {/* Section 3: Location */}
          <div className="flex flex-col pt-8">
            <div className="mb-8">
               <h2 className="text-xl font-bold text-[#1a1c21]">
                {t("contacts.location_title")}
              </h2>
              <div className="mt-4 border-b-2 border-zinc-200 w-full" />
            </div>
            
            <div className="relative flex-1 overflow-hidden rounded-xl border border-border/40 bg-white shadow-sm">
              <div className="absolute inset-0 bg-[#eee] flex items-center justify-center">
                {/* Mock Map Background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative flex flex-col items-center">
                  <div className="mb-2 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-[#1a1c21]/10">
                    <MapPin className="h-8 w-8 text-[#1a1c21]" />
                  </div>
                  <span className="text-xs font-medium tracking-tighter text-[#1a1c21] uppercase">Heat Energy Capital</span>
                </div>
              </div>
              
              {/* Actual Map Link / Preview Image overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-4 py-3 text-sm font-bold text-[#1a1c21] shadow-lg transition-all hover:bg-white hover:shadow-xl"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("contacts.view_map")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
