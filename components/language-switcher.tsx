"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSwitcher({ lang }: { lang: "en" | "ar" }) {
  const switchLocale = (newLang: "en" | "ar") => {
    if (typeof window === "undefined" || newLang === lang) return
    const { pathname, search, hash } = window.location
    const parts = pathname.split("/").filter(Boolean)

    // Ensure first segment is the locale
    if (!parts[0] || (parts[0] !== "en" && parts[0] !== "ar")) {
      parts.unshift(newLang)
    } else {
      parts[0] = newLang
    }

    const newPath = "/" + parts.join("/")
    window.location.assign(newPath + search + hash)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2" aria-label="Switch language">
          <Globe className="h-4 w-4" />
          <span className={lang === "ar" ? "font-cairo" : "font-inter"}>{lang === "ar" ? "العربية" : "English"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("en")}>
          <span className="font-inter">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("ar")}>
          <span className="font-cairo">{"العربية"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
