import { MapPin, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const areas = [
  "Milwaukee",
  "Wauwatosa",
  "West Allis",
  "Greenfield",
  "Brookfield",
  "Menomonee Falls",
  "New Berlin",
  "Franklin",
  "Oak Creek",
  "Cudahy",
  "South Milwaukee",
  "Shorewood",
]

export function ServiceArea() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Service Area</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Proudly serving Milwaukee and surrounding communities
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-zinc-900 border-zinc-800 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Milwaukee & Surrounding Areas</h3>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  We bring professional mobile detailing services directly to your home, office, or preferred location
                  throughout the greater Milwaukee area.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {areas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-white/80">{area}</span>
                    </div>
                  ))}
                </div>

                <p className="text-white/60 text-sm mt-6">Don't see your area? Contact us to check availability!</p>
              </div>

              <div className="flex-1 w-full">
                <div className="aspect-square rounded-lg overflow-hidden border border-zinc-800">
                  <img src="/milwaukee-wisconsin-map-with-service-radius.jpg" alt="Service Area Map" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
