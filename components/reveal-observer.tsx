"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    root.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )

    requestAnimationFrame(() => {
      items.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.94) {
          item.classList.add("is-visible")
        } else {
          observer.observe(item)
        }
      })
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
