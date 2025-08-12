import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, TrendingUp, BarChart, Database } from "lucide-react"

interface ServicesProps {
  dict: any
  lang: "en" | "ar"
}

export default function Services({ dict, lang }: ServicesProps) {
  const icons = [Target, Users, TrendingUp, BarChart, Database]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.services.title}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">{dict.services.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.services.items.map((item: any, index: number) => {
            const Icon = icons[index % icons.length]

            return (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
