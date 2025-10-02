import { Calendar, MapPin, Sparkles, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Choose your service and schedule a convenient time",
  },
  {
    icon: MapPin,
    title: "We Come To You",
    description: "Our mobile unit arrives at your location fully equipped",
  },
  {
    icon: Sparkles,
    title: "Expert Detailing",
    description: "Professional service using premium products and techniques",
  },
  {
    icon: CheckCircle,
    title: "Enjoy The Results",
    description: "Drive away in a vehicle that looks and feels brand new",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Professional detailing made simple and convenient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
