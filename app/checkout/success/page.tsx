"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import confetti from "canvas-confetti"

export default function OrderSuccessPage() {
  // Generate a random order number
  const orderNumber = Math.floor(10000 + Math.random() * 90000)

  // Trigger confetti effect on page load
  useEffect(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 max-w-3xl mx-auto text-center">
      <div className="flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Thank you for your purchase. We've received your order and will process it right away.
        </p>

        <div className="w-full border rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Order #{orderNumber}</h2>
            <span className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </span>
          </div>

          <Separator className="mb-4" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Shipping Details</h3>
                <p className="text-sm text-muted-foreground">Your order will be delivered within 3-5 business days.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <div>
                <h3 className="font-medium">Payment Information</h3>
                <p className="text-sm text-muted-foreground">Your payment has been processed successfully.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/orders">View Order History</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

