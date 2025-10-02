"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Get Your Free Quote</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Ready to transform your vehicle? Contact us today!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="tel:414-460-6453"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold text-lg">414-460-6453</p>
                  </div>
                </a>

                <a
                  href="mailto:Urbanexpressdetailing@gmail.com"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold break-all">Urbanexpressdetailing@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Service Area</p>
                    <p className="text-white font-semibold">Milwaukee & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white font-semibold">By Appointment</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-primary"
                  placeholder="(414) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="exterior">Exterior Cleaning</option>
                  <option value="interior">Interior Cleaning</option>
                  <option value="full">Full Detailing</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="paint">Paint Correction</option>
                  <option value="headlight">Headlight Restoration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-primary min-h-32"
                  placeholder="Tell us about your vehicle and what you're looking for..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
