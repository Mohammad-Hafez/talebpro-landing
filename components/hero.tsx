import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface HeroProps {
  dict: any
  lang: "en" | "ar"
}

export default function Hero({ dict, lang }: HeroProps) {
  const isRTL = lang === "ar"

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {dict.hero.title}
            <br />
            <span className="text-green-600">{dict.hero.subtitle}</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{dict.hero.description}</p>

          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full mb-12">
            {dict.hero.cta}
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            {dict.hero.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
