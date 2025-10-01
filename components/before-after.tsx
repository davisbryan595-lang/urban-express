"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const comparisons = [
  {
    id: 1,
    before: "/dirty-car-exterior-before-detailing.jpg",
    after: "/images/car-after.png",
    title: "Exterior Transformation",
  },
  {
    id: 2,
    before: "/dirty-car-interior.png",
    after: "/pristine-car-interior-after-detailing.jpg",
    title: "Interior Deep Clean",
  },
  {
    id: 3,
    before: "/oxidized-car-paint-before-correction.jpg",
    after: "/glossy-car-paint-after-correction.jpg",
    title: "Paint Correction",
  },
  {
    id: 4,
    before: "/foggy-yellow-headlights-before-restoration.jpg",
    after: "/crystal-clear-headlights-after-restoration.jpg",
    title: "Headlight Restoration",
  },
]

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX : e.clientX
    const position = ((x - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group">
      <div
        className="relative aspect-[4/3] cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image */}
        <img
          src={after || "/placeholder.svg"}
          alt={`${title} - After`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image with Clip */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img
            src={before || "/placeholder.svg"}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-white" />
              <div className="w-0.5 h-6 bg-white" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-semibold">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-semibold">
          After
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </Card>
  )
}

export function BeforeAfter() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">See The Difference</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Real results from our mobile detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((comparison) => (
            <BeforeAfterSlider key={comparison.id} {...comparison} />
          ))}
        </div>
      </div>
    </section>
  )
}
