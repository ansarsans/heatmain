import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ClientProviders } from '@/components/client-providers'
import './globals.css'

const _inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://heatenergycapital.kz'),
  title: 'Heat Energy Capital | Industrial Supply',
  description: 'Reliable supplier of chemical reagents, metals, alloys, and equipment for mining, metallurgical, and processing industries.',
  keywords: ['industrial supply', 'mining chemicals', 'ferroalloys', 'mining equipment', 'Kazakhstan', 'B2B'],
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.jpg",
  },
  openGraph: {
    images: [{ url: "/logo.jpg", alt: "Heat Energy Capital" }],
  },
}

export const viewport: Viewport = {
  themeColor: '#3a3528',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
