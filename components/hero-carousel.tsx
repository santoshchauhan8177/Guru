"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Solar panels on a modern home",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Energy efficient cooler",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Battery storage system",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const prev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const next = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="h-full w-full flex-shrink-0">
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/50 backdrop-blur-sm text-gray-800 hover:bg-white/70"
          onClick={prev}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/50 backdrop-blur-sm text-gray-800 hover:bg-white/70"
          onClick={next}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={cn("h-2 w-2 rounded-full bg-white/50 transition-all", current === i && "w-4 bg-white")}
            onClick={() => {
              if (isTransitioning) return
              setIsTransitioning(true)
              setCurrent(i)
              setTimeout(() => setIsTransitioning(false), 500)
            }}
          >
            <span className="sr-only">Go to slide {i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

