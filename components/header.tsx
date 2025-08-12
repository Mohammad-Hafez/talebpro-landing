"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"

interface HeaderProps {
  dict: any
  lang: "en" | "ar"
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isRTL = lang === "ar"

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${lang}`} className="text-2xl font-bold text-blue-900">
              P.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href={`/${lang}`} className="text-gray-700 hover:text-blue-900 transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}#about`} className="text-gray-700 hover:text-blue-900 transition-colors">
              {dict.nav.about}
            </Link>
            <Link href={`/${lang}#services`} className="text-gray-700 hover:text-blue-900 transition-colors">
              {dict.nav.services}
            </Link>
            <Link href={`/${lang}#contact`} className="text-gray-700 hover:text-blue-900 transition-colors">
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher lang={lang} />
            <Button className="bg-blue-900 hover:bg-blue-800">{dict.nav.readyToStart}</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href={`/${lang}`}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.home}
              </Link>
              <Link
                href={`/${lang}#about`}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.about}
              </Link>
              <Link
                href={`/${lang}#services`}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.services}
              </Link>
              <Link
                href={`/${lang}#contact`}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.contact}
              </Link>
              <div className="px-3 py-2 space-y-2">
                <LanguageSwitcher lang={lang} />
                <Button className="w-full bg-blue-900 hover:bg-blue-800">{dict.nav.readyToStart}</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
