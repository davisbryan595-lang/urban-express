import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Urban Express Mobile Detailing | Premium Car Care in Milwaukee",
  description:
    "Professional mobile car detailing services in Milwaukee and surrounding areas. Exterior cleaning, interior detailing, ceramic coating, paint correction, and more.",
  keywords: "car detailing, mobile detailing, Milwaukee, ceramic coating, paint correction, auto detailing",
  openGraph: {
    title: "Urban Express Mobile Detailing",
    description: "Premium mobile car detailing services in Milwaukee",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
