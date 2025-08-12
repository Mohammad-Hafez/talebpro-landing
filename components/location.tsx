import { MapPin, Mail, Phone, Clock } from "lucide-react"

interface LocationProps {
  dict: any
  lang: "en" | "ar"
}

export default function Location({ dict, lang }: LocationProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.location.title}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">{dict.location.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
              </div>
            </div>
            {/* Map markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-600 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-600 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">{dict.location.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">{dict.location.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">{dict.location.phone}</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="text-2xl font-bold text-green-600">24/7</h3>
                  <p className="text-gray-700">{dict.location.support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
