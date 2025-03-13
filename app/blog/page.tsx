import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Energy in India",
    excerpt: "Exploring the growth and potential of solar energy in India's renewable energy landscape.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "May 15, 2023",
    author: "Rajesh Kumar",
    readTime: "8 min read",
    category: "Solar Energy",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose the Right Battery Storage System for Your Home",
    excerpt: "A comprehensive guide to selecting the perfect battery storage solution based on your energy needs.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "April 28, 2023",
    author: "Priya Sharma",
    readTime: "6 min read",
    category: "Batteries",
    featured: true,
  },
  {
    id: 3,
    title: "Energy-Efficient Cooling Solutions for Summer",
    excerpt: "Stay cool and save energy with these innovative cooling technologies and tips.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "March 12, 2023",
    author: "Amit Patel",
    readTime: "5 min read",
    category: "Coolers",
  },
  {
    id: 4,
    title: "Understanding RO Technology: The Future of Energy Management",
    excerpt:
      "Dive deep into how Advanced Automated Renewable Optimization (AARO) is revolutionizing home energy management.",
    image:
      "https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "February 20, 2023",
    author: "Neha Singh",
    readTime: "10 min read",
    category: "RO",
  },
  {
    id: 5,
    title: "Government Incentives for Renewable Energy Adoption in 2023",
    excerpt: "Learn about the latest subsidies, tax benefits, and incentives for installing renewable energy systems.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "January 5, 2023",
    author: "Vikram Mehta",
    readTime: "7 min read",
    category: "Policy",
  },
  {
    id: 6,
    title: "DIY Solar Panel Maintenance: Tips and Tricks",
    excerpt: "Keep your solar panels operating at peak efficiency with these simple maintenance practices.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "December 10, 2022",
    author: "Ananya Gupta",
    readTime: "6 min read",
    category: "Solar Energy",
  },
]

// Categories for the sidebar
const categories = [
  { name: "Solar Energy", count: 12 },
  { name: "Batteries", count: 8 },
  { name: "Coolers", count: 6 },
  { name: "RO", count: 5 },
  { name: "Policy", count: 4 },
  { name: "Tips & Guides", count: 10 },
]

export default function BlogPage() {
  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)
  // Get regular posts (non-featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Our Blog</h1>
        <p className="text-muted-foreground max-w-3xl">
          Stay updated with the latest news, insights, and guides on renewable energy solutions and sustainable living.
        </p>
      </div>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="space-y-8">
            {regularPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6 border-b pb-8">
                <div className="md:w-1/3 aspect-video rounded-lg overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="md:w-2/3">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="flex items-center" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-8">
            {/* Search */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Search</h3>
              <div className="relative">
                <Input type="search" placeholder="Search articles..." className="w-full" />
                <Button className="absolute right-0 top-0 h-full rounded-l-none">Search</Button>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <Link
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {category.name}
                    </Link>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Popular Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="border rounded-lg p-6 bg-muted/30">
              <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated with our latest articles and energy tips.
              </p>
              <div className="space-y-2">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

