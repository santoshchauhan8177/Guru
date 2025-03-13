import Link from "next/link"
import { ArrowRight, Contact, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProductCard from "@/components/product-card"
import { featuredProducts } from "@/lib/data"
import HeroCarousel from "@/components/hero-carousel"
import ContactPage from "./contact/page"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative">
          <HeroCarousel />
          <div className="absolute inset-0 flex items-center justify-center flex-col p-4 bg-black/40 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Sustainable Energy Solutions for Your Home
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Discover our range of high-quality coolers, solar panels, batteries, and more to power your home
                efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 h-14 px-10 text-base font-semibold rounded-md shadow-lg"
                  asChild
                >
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/20 h-14 px-10 text-base font-semibold rounded-md shadow-lg"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
                <p className="text-muted-foreground mt-1">Explore our most popular energy solutions</p>
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8 w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Our Categories</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Browse through our wide range of energy-efficient products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <CategoryCard
                title="Coolers"
                description="Energy-efficient cooling solutions"
                image="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                link="/products/coolers"
              />
              <CategoryCard
                title="Solar Panels"
                description="Harness the power of the sun"
                image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3"
                link="/products/solar-panels"
              />
              <CategoryCard
                title="Batteries"
                description="Store energy for when you need it"
                image="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                link="/products/batteries"
              />
              <CategoryCard
                title="RO"
                description="Advanced energy management systems"
                image="https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                link="/products/aaro"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us?</h2>
                <div className="space-y-4">
                  <FeatureItem
                    title="Premium Quality"
                    description="All our products are made with high-quality materials and undergo rigorous testing"
                  />
                  <FeatureItem
                    title="Energy Efficient"
                    description="Our products are designed to maximize energy efficiency and reduce your bills"
                  />
                  <FeatureItem
                    title="Expert Support"
                    description="Our team of experts is always ready to help you with installation and maintenance"
                  />
                  <FeatureItem
                    title="Warranty"
                    description="All products come with extended warranty for your peace of mind"
                  />
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Solar installation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Customer Reviews</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                See what our customers have to say about our products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReviewCard
                name="Rahul Sharma"
                location="Delhi"
                rating={5}
                review="The solar panels I purchased have significantly reduced my electricity bills. Great quality and excellent service!"
              />
              <ReviewCard
                name="Santosh chauhan"
                location="Mumbai"
                rating={4}
                review="Very satisfied with the cooler. It's energy-efficient and keeps my home comfortable even during the hottest days."
              />
              <ReviewCard
                name="Amit Singh"
                location="Jaipur"
                rating={5}
                review="The battery backup system has been a lifesaver during power outages. Highly recommend their products!"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted">
          <ContactPage/>
          
        </section>
      </main>
    </div>
  )
}

function CategoryCard({ title, description, image, link }) {
  return (
    <Link href={link} className="group relative overflow-hidden rounded-lg">
      <div className="relative h-[240px] w-full overflow-hidden rounded-lg">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white/80 mt-1">{description}</p>
          <span className="mt-2 inline-flex items-center text-sm font-medium text-white">
            Browse Products <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function FeatureItem({ title, description }) {
  return (
    <div className="flex gap-3">
      <div className="h-10 w-10 shrink-0 rounded-full bg-primary-foreground/20 flex items-center justify-center">
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
          className="h-5 w-5"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-primary-foreground/80 text-sm">{description}</p>
      </div>
    </div>
  )
}

function ReviewCard({ name, location, rating, review }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-4">"{review}"</p>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  )
}

