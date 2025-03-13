import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample blog posts data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Energy in India",
    excerpt: "Exploring the growth and potential of solar energy in India's renewable energy landscape.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "May 15, 2023",
    author: "Rajesh Kumar",
    authorImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    readTime: "8 min read",
    category: "Solar Energy",
    featured: true,
    content: `
      <p>India's solar energy sector has witnessed remarkable growth over the past decade, emerging as a cornerstone of the country's renewable energy strategy. With abundant sunshine throughout the year, India has a vast potential for solar power generation, estimated at over 750 GW.</p>
      
      <h2>Current Landscape</h2>
      
      <p>As of 2023, India has installed over 60 GW of solar capacity, making significant strides towards its ambitious target of 280 GW by 2030. The government's initiatives like the National Solar Mission, solar parks, and subsidies for rooftop installations have been instrumental in this growth.</p>
      
      <p>The cost of solar power has also decreased dramatically, from approximately ₹7-8 per kWh in 2014 to as low as ₹2 per kWh in recent auctions. This price reduction has made solar energy economically competitive with conventional power sources, driving its adoption across residential, commercial, and industrial sectors.</p>
      
      <h2>Technological Advancements</h2>
      
      <p>Several technological innovations are shaping the future of solar energy in India:</p>
      
      <ul>
        <li><strong>Bifacial Solar Panels:</strong> These panels generate power from both sides, increasing energy yield by 10-30% compared to traditional panels.</li>
        <li><strong>Floating Solar:</strong> With land constraints in many regions, floating solar installations on reservoirs and lakes offer an alternative approach, with the added benefit of reduced water evaporation.</li>
        <li><strong>Solar-Wind Hybrids:</strong> Combining solar and wind power at the same location optimizes land use and provides more consistent power generation throughout the day.</li>
        <li><strong>Energy Storage Solutions:</strong> Battery technologies are evolving rapidly, addressing the intermittency challenge of solar power.</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>Despite the promising outlook, several challenges need to be addressed:</p>
      
      <p><strong>Grid Integration:</strong> As solar capacity increases, integrating this variable power source into the existing grid infrastructure becomes more complex.</p>
      
      <p><strong>Manufacturing Capacity:</strong> India still relies heavily on imported solar equipment, particularly from China. Developing domestic manufacturing capabilities is crucial for energy security and economic growth.</p>
      
      <p><strong>Financial Constraints:</strong> While costs have decreased, initial investment remains a barrier for many potential adopters, particularly in the residential sector.</p>
      
      <p><strong>Land Acquisition:</strong> Large-scale solar projects require significant land area, which can be challenging to acquire in densely populated regions.</p>
      
      <h2>The Road Ahead</h2>
      
      <p>The future of solar energy in India looks promising, with several developments on the horizon:</p>
      
      <p><strong>Decentralized Generation:</strong> Community solar projects and microgrids will empower rural communities, providing clean energy access to millions.</p>
      
      <p><strong>Green Hydrogen:</strong> Solar power will play a crucial role in producing green hydrogen, which can revolutionize industries like steel, cement, and transportation.</p>
      
      <p><strong>Agrivoltaics:</strong> Combining agricultural activities with solar installations can optimize land use while providing farmers with additional income.</p>
      
      <p><strong>Smart Grids:</strong> Advanced monitoring and control systems will enable better management of variable renewable energy sources.</p>
      
      <h2>Conclusion</h2>
      
      <p>India's solar journey represents not just an energy transition but a socio-economic transformation. With continued policy support, technological innovation, and public-private partnerships, solar energy will be a key driver in India's sustainable development and climate action efforts.</p>
      
      <p>As costs continue to decline and efficiency improves, solar power will increasingly become the default choice for new electricity generation, powering India's growth while reducing its carbon footprint.</p>
    `,
  },
  {
    id: 2,
    title: "How to Choose the Right Battery Storage System for Your Home",
    excerpt: "A comprehensive guide to selecting the perfect battery storage solution based on your energy needs.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "April 28, 2023",
    author: "Priya Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3",
    readTime: "6 min read",
    category: "Batteries",
    featured: true,
    content: "Full article content here...",
  },
  {
    id: 3,
    title: "Energy-Efficient Cooling Solutions for Summer",
    excerpt: "Stay cool and save energy with these innovative cooling technologies and tips.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "March 12, 2023",
    author: "Amit Patel",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    readTime: "5 min read",
    category: "Coolers",
    content: "Full article content here...",
  },
  {
    id: 4,
    title: "Understanding AARO Technology: The Future of Energy Management",
    excerpt:
      "Dive deep into how Advanced Automated Renewable Optimization (AARO) is revolutionizing home energy management.",
    image:
      "https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "February 20, 2023",
    author: "Neha Singh",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3",
    readTime: "10 min read",
    category: "RO",
    content: "Full article content here...",
  },
  {
    id: 5,
    title: "Government Incentives for Renewable Energy Adoption in 2023",
    excerpt: "Learn about the latest subsidies, tax benefits, and incentives for installing renewable energy systems.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "January 5, 2023",
    author: "Vikram Mehta",
    authorImage:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    readTime: "7 min read",
    category: "Policy",
    content: "Full article content here...",
  },
  {
    id: 6,
    title: "DIY Solar Panel Maintenance: Tips and Tricks",
    excerpt: "Keep your solar panels operating at peak efficiency with these simple maintenance practices.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "December 10, 2022",
    author: "Ananya Gupta",
    authorImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    readTime: "6 min read",
    category: "Solar Energy",
    content: "Full article content here...",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Find the post by ID
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  // If post not found, show error
  if (!post) {
    return (
      <div className="container px-4 py-12 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild className="w-fit p-0">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article className="space-y-6">
            <Badge className="mb-2">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src={
                    post.authorImage ||
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3"
                  }
                  alt={post.author}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t">
              <div className="text-sm">Share this article:</div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="border rounded-lg overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{relatedPost.excerpt}</p>
                      <div className="text-xs text-muted-foreground">
                        {relatedPost.date} • {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-8">
            {/* Author Info */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">About the Author</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={
                      post.authorImage ||
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3"
                    }
                    alt={post.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{post.author}</h4>
                  <p className="text-sm text-muted-foreground">Energy Expert</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                An experienced professional in the renewable energy sector with expertise in sustainable energy
                solutions and environmental conservation.
              </p>
            </div>

            {/* Popular Posts */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((popularPost) => (
                  <div key={popularPost.id} className="flex gap-3">
                    <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={popularPost.image || "/placeholder.svg"}
                        alt={popularPost.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${popularPost.id}`}>{popularPost.title}</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">{popularPost.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                  <Link href="/blog/category/solar-energy">Solar Energy</Link>
                </Badge>
                <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                  <Link href="/blog/category/batteries">Batteries</Link>
                </Badge>
                <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                  <Link href="/blog/category/coolers">Coolers</Link>
                </Badge>
                <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                  <Link href="/blog/category/aaro">AARO</Link>
                </Badge>
                <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                  <Link href="/blog/category/policy">Policy</Link>
                </Badge>
                <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                  <Link href="/blog/category/tips-guides">Tips & Guides</Link>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

