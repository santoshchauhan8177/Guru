import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { featuredProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Badge } from "@/components/ui/badge"

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Convert URL parameter to display format (e.g., "solar-panels" to "Solar Panels")
  const categoryTitle = params.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Filter products by category
  const categoryProducts = featuredProducts.filter((product) => {
    const normalizedCategory = product.category.toLowerCase().replace(/\s+/g, "-")
    return (
      normalizedCategory === params.category ||
      // Handle special case for AARO which might not match exactly
      (params.category === "aaro" && product.category.toLowerCase().includes("aaro"))
    )
  })

  // Get a background image based on category
  const getCategoryImage = () => {
    switch (params.category) {
      case "coolers":
        return "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      case "solar-panels":
        return "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3"
      case "batteries":
        return "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
      case "aaro":
        return "https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      default:
        return "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="p-0">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all products
            </Link>
          </Button>
        </div>

        <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden mb-8 mt-4">
          <img
            src={getCategoryImage() || "/placeholder.svg"}
            alt={categoryTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{categoryTitle}</h1>
              <p className="mt-2 max-w-md mx-auto text-white/80">
                Explore our range of high-quality {categoryTitle.toLowerCase()} for your home and business
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <Badge variant="outline" className="rounded-sm px-2 py-1 text-sm">
            {categoryProducts.length} products
          </Badge>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium">No products found</h2>
            <p className="text-muted-foreground mt-2">
              We couldn't find any products in this category. Please check back later.
            </p>
            <Button asChild className="mt-4">
              <Link href="/products">View all products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

