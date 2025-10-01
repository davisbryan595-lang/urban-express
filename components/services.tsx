"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Home, Star, Shield, Paintbrush, Lightbulb, X } from "lucide-react"

const services = [
  {
    id: "exterior",
    icon: Sparkles,
    title: "Exterior Cleaning",
    summary: "Complete exterior wash, wax, and shine",
    description:
      "Our exterior detailing service includes hand wash, clay bar treatment, paint decontamination, and premium wax application for a showroom finish.",
    timeline: "2-3 hours",
    pricing: {
      basic: "$89",
      pro: "$149",
      premium: "$229",
    },
    image: "/car-exterior-being-washed-and-detailed.jpg",
  },
  {
    id: "interior",
    icon: Home,
    title: "Interior Cleaning",
    summary: "Deep clean every surface inside your vehicle",
    description:
      "Comprehensive interior detailing with vacuum, steam cleaning, leather conditioning, and odor elimination. Every surface is meticulously cleaned and protected.",
    timeline: "2-4 hours",
    pricing: {
      basic: "$99",
      pro: "$169",
      premium: "$249",
    },
    image: "/luxury-car-interior-being-detailed-and-cleaned.jpg",
  },
  {
    id: "full",
    icon: Star,
    title: "Full Detailing",
    summary: "Complete interior and exterior transformation",
    description:
      "The ultimate detailing package combining our best exterior and interior services for a complete vehicle transformation.",
    timeline: "4-6 hours",
    pricing: {
      basic: "$179",
      pro: "$299",
      premium: "$449",
    },
    image: "/complete-car-detailing-before-and-after.jpg",
  },
  {
    id: "ceramic",
    icon: Shield,
    title: "Ceramic Coating",
    summary: "Long-lasting protection and brilliant shine",
    description:
      "Professional-grade ceramic coating application providing years of protection against UV rays, chemicals, and environmental contaminants.",
    timeline: "6-8 hours",
    pricing: {
      basic: "$599",
      pro: "$899",
      premium: "$1,299",
    },
    image: "/ceramic-coating-being-applied-to-black-car-paint.jpg",
  },
  {
    id: "paint",
    icon: Paintbrush,
    title: "Paint Correction",
    summary: "Remove swirls, scratches, and imperfections",
    description:
      "Multi-stage paint correction process to remove swirl marks, light scratches, and oxidation, restoring your paint to like-new condition.",
    timeline: "4-8 hours",
    pricing: {
      basic: "$399",
      pro: "$699",
      premium: "$999",
    },
    image: "/car-paint-correction-removing-swirls-and-scratches.jpg",
  },
  {
    id: "headlight",
    icon: Lightbulb,
    title: "Headlight Restoration",
    summary: "Crystal clear headlights for safety and style",
    description:
      "Professional headlight restoration removes oxidation and yellowing, improving visibility and appearance with UV protection.",
    timeline: "1-2 hours",
    pricing: {
      basic: "$79",
      pro: "$129",
      premium: "$179",
    },
    image: "/car-headlight-restoration-before-and-after.jpg",
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const selected = services.find((s) => s.id === selectedService)

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Premium Detailing Services</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Professional mobile car care tailored to your vehicle's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{service.summary}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-semibold"
                  >
                    Learn More →
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Service Detail Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selected.image || "/placeholder.svg"}
                  alt={selected.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <selected.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selected.title}</h3>
                    <p className="text-white/70 text-lg leading-relaxed">{selected.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-white/60">
                  <div>
                    <span className="text-xs uppercase tracking-wider">Timeline</span>
                    <p className="text-white font-semibold">{selected.timeline}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Pricing Tiers</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Basic</p>
                      <p className="text-3xl font-bold text-white">{selected.pricing.basic}</p>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-6 border-2 border-primary">
                      <p className="text-primary text-sm uppercase tracking-wider mb-2">Pro</p>
                      <p className="text-3xl font-bold text-white">{selected.pricing.pro}</p>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Premium</p>
                      <p className="text-3xl font-bold text-white">{selected.pricing.premium}</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                  <a href="#contact">Book This Service</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
