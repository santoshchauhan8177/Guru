"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuredProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [isWishlist, setIsWishlist] = useState(false)

  const { addItem } = useCart()
  const { toast } = useToast()
  const router = useRouter()

  const handleAddToCart = () => {
    addItem(params.id, quantity)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleBuyNow = () => {
    addItem(params.id, quantity)
    router.push("/checkout")
  }

  // Find the product by ID
  const product = featuredProducts.find((p) => p.id === params.id)

  // If product not found, show error
  if (!product) {
    return (
      <div className="container px-4 py-12 md:px-6 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="mt-2 text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-4">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  // Calculate discount percentage if there's an original price
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  // Get related products (same category, excluding current product)
  const relatedProducts = featuredProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild className="w-fit p-0">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-md border bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} view ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded-sm">
                {product.category}
              </Badge>
              {product.isNew && <Badge className="rounded-sm bg-blue-500 hover:bg-blue-600">New</Badge>}
              {product.isSale && <Badge className="rounded-sm bg-red-500 hover:bg-red-600">Sale</Badge>}
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <Badge className="rounded-sm bg-green-500 hover:bg-green-600">{discount}% OFF</Badge>
              </>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Description</h3>
            <p className="text-muted-foreground">
              The {product.name} is designed to provide efficient and reliable performance for your home or business.
              With advanced technology and premium materials, this product offers exceptional value and durability.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="font-medium">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-3 w-3" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="flex h-8 w-12 items-center justify-center border-y">{quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="sm:flex-1" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="secondary" size="lg" className="sm:flex-1" onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Button variant="outline" size="lg" className="sm:flex-1" onClick={() => setIsWishlist(!isWishlist)}>
                <Heart className={`mr-2 h-4 w-4 ${isWishlist ? "fill-red-500 text-red-500" : ""}`} />
                {isWishlist ? "Added to Wishlist" : "Add to Wishlist"}
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2 rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Free shipping</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Free standard shipping on orders over ₹5,000. Delivery within 3-5 business days.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-500">In stock and ready to ship</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="description"
              className={`rounded-none border-b-2 px-4 py-2 -mb-px data-[state=active]:border-primary ${
                activeTab === "description" ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className={`rounded-none border-b-2 px-4 py-2 -mb-px data-[state=active]:border-primary ${
                activeTab === "specifications" ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className={`rounded-none border-b-2 px-4 py-2 -mb-px data-[state=active]:border-primary ${
                activeTab === "reviews" ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product Description</h3>
              <p>
                The {product.name} is a high-quality product designed to meet your energy needs efficiently and
                reliably. Built with premium materials and advanced technology, it offers exceptional performance and
                durability.
              </p>
              <p>
                This product is perfect for both residential and commercial applications, providing consistent
                performance in various conditions. Its sleek design and compact form factor make it an excellent
                addition to any space.
              </p>
              <h4 className="text-base font-medium mt-4">Key Features</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>High efficiency and performance</li>
                <li>Durable construction for long-term reliability</li>
                <li>Energy-saving technology to reduce electricity costs</li>
                <li>Easy installation and maintenance</li>
                <li>Environmentally friendly design</li>
              </ul>
              <h4 className="text-base font-medium mt-4">Applications</h4>
              <p>
                Ideal for homes, offices, and commercial spaces looking to optimize their energy usage and reduce their
                carbon footprint.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Model</span>
                    <span>{product.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Category</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Dimensions</span>
                    <span>60 x 40 x 15 cm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Weight</span>
                    <span>5.2 kg</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Power Rating</span>
                    <span>500W</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Voltage</span>
                    <span>220-240V</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Warranty</span>
                    <span>2 Years</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="font-medium">Certification</span>
                    <span>BIS, ISO 9001</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium">Package Contents</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>1 x {product.name}</li>
                  <li>1 x User Manual</li>
                  <li>1 x Warranty Card</li>
                  <li>1 x Installation Kit</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div className="space-y-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {Math.floor(Math.random() * 100) + 50} reviews
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">
                          {i === 0 ? "Rahul Sharma" : i === 1 ? "Priya Patel" : "Amit Singh"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 5 - i ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2">
                      {i === 0
                        ? "Excellent product! It has significantly reduced my electricity bills. The quality is outstanding and installation was straightforward."
                        : i === 1
                          ? "Good product overall. Works as advertised and the customer service was helpful when I had questions."
                          : "Decent product for the price. Delivery was quick and the product was well-packaged."}
                    </p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

