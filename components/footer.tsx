import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from "lucide-react"

interface FooterProps {
  dict: any
  lang: "en" | "ar"
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">{dict.footer.newsletter}</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">{dict.footer.newsletterDesc}</p>
          <div className="flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
            <Button className="ml-2 bg-blue-600 hover:bg-blue-700">{dict.footer.subscribe}</Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Link href={`/${lang}`} className="text-3xl font-bold">
                P.
              </Link>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center space-x-8 mb-4 md:mb-0">
              <Link href={`/${lang}`} className="text-gray-400 hover:text-white transition-colors">
                {dict.footer.links.home}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {dict.footer.links.terms}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {dict.footer.links.solutions}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {dict.footer.links.contact}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mt-8">{dict.footer.copyright}</div>
        </div>
      </div>
    </footer>
  )
}
