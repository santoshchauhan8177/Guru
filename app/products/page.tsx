import { ArrowRight, Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { featuredProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Products</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Reset
              </Button>
            </div>

            <div className="mt-4 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Categories</h3>
                <div className="space-y-1">
                  {["Coolers", "Solar Panels", "Batteries", "AARO", "Accessories"].map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox id={`category-${category}`} />
                      <label htmlFor={`category-${category}`} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Price Range</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[5000, 50000]} min={0} max={100000} step={1000} />
                  <div className="flex items-center gap-2">
                    <Input type="number" placeholder="Min" className="h-8" />
                    <span>-</span>
                    <Input type="number" placeholder="Max" className="h-8" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Rating</h3>
                <div className="space-y-1">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label htmlFor={`rating-${rating}`} className="text-sm flex items-center gap-1">
                        {rating} {rating === 1 ? "Star" : "Stars"} & Above
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Availability</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Checkbox id="in-stock" />
                    <label htmlFor="in-stock" className="text-sm">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="out-of-stock" />
                    <label htmlFor="out-of-stock" className="text-sm">
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Offers</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Checkbox id="on-sale" />
                    <label htmlFor="on-sale" className="text-sm">
                      On Sale
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="new-arrivals" />
                    <label htmlFor="new-arrivals" className="text-sm">
                      New Arrivals
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-sm px-1 font-normal">
                  {featuredProducts.length} products
                </Badge>
                <Button variant="outline" size="sm" className="h-8 lg:hidden">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
              <div className="flex w-full sm:w-auto items-center gap-2">
                <Select defaultValue="featured">
                  <SelectTrigger className="h-8 w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="24">
                  <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder="Show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="36">36</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...featuredProducts, ...featuredProducts.slice(0, 4)].map((product) => (
                <ProductCard key={`${product.id}-list`} product={product} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" disabled>
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  3
                </Button>
                <span>...</span>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  8
                </Button>
                <Button variant="outline" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

