"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    rating: 5,
    text: "Urban Express transformed my car! The attention to detail was incredible. They came to my office and my car looked brand new when they finished. Highly recommend!",
    service: "Full Detailing",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    text: "Best mobile detailing service in Milwaukee! The ceramic coating they applied has kept my car looking amazing for months. Professional, punctual, and worth every penny.",
    service: "Ceramic Coating",
  },
  {
    id: 3,
    name: "David Chen",
    rating: 5,
    text: "I was skeptical about mobile detailing, but Urban Express exceeded all expectations. The paint correction removed years of swirls and scratches. My black car finally shines like it should!",
    service: "Paint Correction",
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    rating: 5,
    text: "Convenient, professional, and thorough. They detailed my SUV while I worked from home. The interior smells fresh and looks pristine. Will definitely use them again!",
    service: "Interior Cleaning",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Real reviews from satisfied customers across Milwaukee
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-zinc-900 border-zinc-800 p-8 md:p-12">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white/90 text-center mb-8 leading-relaxed text-balance">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="text-center">
              <p className="text-lg font-bold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-primary text-sm">{testimonials[currentIndex].service}</p>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-zinc-700 hover:bg-zinc-800 text-white bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-zinc-700 hover:bg-zinc-800 text-white bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
