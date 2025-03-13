import Link from "next/link"
import { ArrowRight, Check, Shield, Sun, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[50vh] md:h-[60vh] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Sustainable energy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Powering a Sustainable Future</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                At EnergyHub, we're committed to providing innovative energy solutions that help reduce carbon
                footprints and create a cleaner world for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2010, EnergyHub has been at the forefront of the renewable energy revolution in India. Our
                  mission is to make sustainable energy solutions accessible, affordable, and efficient for every
                  household and business.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that the transition to clean energy is not just an environmental necessity but also an
                  economic opportunity. By harnessing innovative technologies and providing exceptional service, we aim
                  to accelerate this transition and create a positive impact on our planet.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Quality Products</h3>
                      <p className="text-sm text-muted-foreground">
                        We source and develop only the highest quality energy products that meet rigorous standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Guidance</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team of energy specialists provides personalized solutions for your specific needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ongoing Support</h3>
                      <p className="text-sm text-muted-foreground">
                        We're committed to providing excellent after-sales service and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Our mission"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Our Products</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Discover our range of high-quality energy solutions designed to meet your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Solar Panels</h3>
                <p className="text-muted-foreground mb-4">
                  High-efficiency solar panels that convert sunlight into clean, renewable electricity for your home or
                  business.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/products/solar-panels">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Batteries</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced energy storage solutions that help you store excess energy and use it when you need it most.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/products/batteries">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">AARO Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent energy management systems that optimize your energy usage and reduce waste.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/products/aaro">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-cyan-600"
                  >
                    <path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Coolers</h3>
                <p className="text-muted-foreground mb-4">
                  Energy-efficient cooling solutions that keep you comfortable while minimizing electricity consumption.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/products/coolers">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Meet the passionate experts behind EnergyHub
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  position: "Founder & CEO",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  name: "Priya Sharma",
                  position: "Chief Technology Officer",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  name: "Amit Patel",
                  position: "Head of Operations",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  name: "Neha Singh",
                  position: "Customer Success Manager",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg border overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="aspect-square">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary text-primary-foreground dark:bg-primary/90">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Switch to Sustainable Energy?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have reduced their energy bills and carbon footprint with
              EnergyHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

