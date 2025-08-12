import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "TalebPro - Career Guidance Platform",
  description:
    "Discover comprehensive career guidance for students, powered by AI-driven insights and expert mentorship.",
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: "en" | "ar" }>
}) {
  const { lang } = await params
  const isRTL = lang === "ar"

  return (
    <html lang={lang} dir={isRTL ? "rtl" : "ltr"}>
      <body className={`${isRTL ? cairo.className : inter.className} ${inter.variable} ${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
