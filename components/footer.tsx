import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/urbanlogo-YONvclwHhYZfPYiVAcKk1oQLnlrGBY.jpeg"
                alt="Urban Express Mobile Detailing"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-bold">Urban Express</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium mobile car detailing services in Milwaukee and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">Exterior Cleaning</li>
              <li className="text-white/60 text-sm">Interior Cleaning</li>
              <li className="text-white/60 text-sm">Full Detailing</li>
              <li className="text-white/60 text-sm">Ceramic Coating</li>
              <li className="text-white/60 text-sm">Paint Correction</li>
              <li className="text-white/60 text-sm">Headlight Restoration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:414-460-6453"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  414-460-6453
                </a>
              </li>
              <li>
                <a
                  href="mailto:Urbanexpressdetailing@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  Urbanexpressdetailing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Milwaukee & Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Urban Express Mobile Detailing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
