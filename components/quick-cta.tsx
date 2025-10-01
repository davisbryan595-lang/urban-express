import { Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickCTA() {
  return (
    <section className="bg-black border-y border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <a
            href="tel:414-460-6453"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Call Now</p>
              <p className="font-semibold text-lg">414-460-6453</p>
            </div>
          </a>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          <a
            href="mailto:Urbanexpressdetailing@gmail.com"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Email Us</p>
              <p className="font-semibold text-sm md:text-base">Urbanexpressdetailing@gmail.com</p>
            </div>
          </a>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Request Mobile Visit
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
