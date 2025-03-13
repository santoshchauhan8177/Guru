"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface ProductCardProps {
  product: {
    id: string
    name: string
    category: string
    price: number
    originalPrice?: number
    rating: number
    image: string
    isNew?: boolean
    isSale?: boolean
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlist, setIsWishlist] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const addToCart = (id: string) => {
    addItem(id)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md">
      <Link
        href={`/products/${product.category.toLowerCase().replace(/\s+/g, "-")}/${product.id}`}
        className="relative aspect-square overflow-hidden block"
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          className={cn(
            "absolute top-2 right-2 h-8 w-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm transition-colors",
            isWishlist ? "text-red-500" : "text-gray-600 hover:text-red-500",
          )}
          onClick={(e) => {
            e.preventDefault()
            setIsWishlist(!isWishlist)
          }}
        >
          <Heart className={cn("h-4 w-4", isWishlist && "fill-current")} />
        </button>
        {product.isNew && <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">New</Badge>}
        {product.isSale && <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>}
        {discount > 0 && (
          <Badge className="absolute bottom-2 left-2 bg-green-500 hover:bg-green-600">-{discount}%</Badge>
        )}
      </Link>
      <div className="p-4">
        <div className="mb-1 text-sm text-muted-foreground">{product.category}</div>
        <Link href={`/products/${product.category.toLowerCase().replace(/\s+/g, "-")}/${product.id}`}>
          <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({Math.floor(Math.random() * 100) + 10})</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-medium">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addToCart(product.id)
            }}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

