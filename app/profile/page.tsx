"use client"

import { useState } from "react"
import { CreditCard, Heart, LogOut, Package, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "EcoFlow Portable Power Station",
    category: "Power Solutions",
    price: 129900,
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Solar Panel Kit 200W",
    category: "Solar",
    price: 89900,
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Smart Home Energy Monitor",
    category: "Smart Home",
    price: 49900,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/4">
          <div className="sticky top-20 space-y-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-medium">John Doe</h2>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              <Button
                variant={activeTab === "account" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("account")}
              >
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button
                variant={activeTab === "orders" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("orders")}
              >
                <Package className="mr-2 h-4 w-4" />
                Orders
              </Button>
              <Button
                variant={activeTab === "wishlist" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </Button>
              <Button
                variant={activeTab === "payments" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("payments")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payment Methods
              </Button>
              <Button
                variant={activeTab === "settings" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Separator className="my-2" />
              <Button variant="ghost" className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </nav>
          </div>
        </div>

        <div className="flex-1">
          {activeTab === "account" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Account</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Address</CardTitle>
                  <CardDescription>Manage your shipping and billing addresses.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address-line1">Address line 1</Label>
                    <Input id="address-line1" defaultValue="123 Energy Street" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-line2">Address line 2</Label>
                    <Input id="address-line2" defaultValue="Apartment 4B" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="New Delhi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="Delhi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP / Postal code</Label>
                      <Input id="zip" defaultValue="110001" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Address</Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
                <p className="text-muted-foreground">View and track your orders.</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="rounded-lg border p-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Order #{10000 + order}</span>
                              <Badge variant="outline" className="rounded-sm">
                                {order === 1 ? "Delivered" : order === 2 ? "Shipped" : "Processing"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Placed on {new Date().toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Track Order
                            </Button>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex flex-col gap-4 sm:flex-row">
                          <div className="flex gap-4">
                            <div className="h-16 w-16 rounded-md border bg-muted">
                              <img
                                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3"
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                {order === 1
                                  ? "Premium Solar Panel 500W"
                                  : order === 2
                                    ? "Energy Efficient Cooler Pro"
                                    : "High Capacity Battery 10kWh"}
                              </h4>
                              <p className="text-sm text-muted-foreground">Quantity: {order === 1 ? 2 : 1}</p>
                            </div>
                          </div>
                          <div className="ml-auto text-right">
                            <div className="font-medium">
                              ₹{(order === 1 ? 25000 * 2 : order === 2 ? 12000 : 85000).toLocaleString()}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {order === 1 ? "Paid with Credit Card" : "Paid with UPI"}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Orders
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Wishlist</h1>
                <p className="text-muted-foreground">Products you've saved for later.</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.slice(0, 3).map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                      <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full">
                        <Heart className="h-4 w-4 fill-current" />
                        <span className="sr-only">Remove from wishlist</span>
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground">{product.category}</div>
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="font-medium">₹{product.price.toLocaleString()}</div>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Payment Methods</h1>
                <p className="text-muted-foreground">Manage your payment methods.</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Saved Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-16 rounded bg-muted flex items-center justify-center">
                          <CreditCard className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium">Credit Card</h4>
                          <p className="text-sm text-muted-foreground">Ending in 4242</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-16 rounded bg-muted flex items-center justify-center">
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
                            className="h-6 w-6"
                          >
                            <path d="M7 10v4h10v-4" />
                            <line x1="12" y1="6" x2="12" y2="14" />
                            <path d="M12 14v4" />
                            <path d="M8 18h8" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">UPI</h4>
                          <p className="text-sm text-muted-foreground">john.doe@upi</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Add Payment Method</Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage how you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="email-notifications" className="sr-only">
                        Email Notifications
                      </Label>
                      <input
                        type="checkbox"
                        id="email-notifications"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">SMS Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive text messages for order updates.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="sms-notifications" className="sr-only">
                        SMS Notifications
                      </Label>
                      <input
                        type="checkbox"
                        id="sms-notifications"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Emails</h4>
                      <p className="text-sm text-muted-foreground">Receive emails about new products and offers.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="marketing-emails" className="sr-only">
                        Marketing Emails
                      </Label>
                      <input
                        type="checkbox"
                        id="marketing-emails"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delete Account</CardTitle>
                  <CardDescription>Permanently delete your account and all of your data.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive">Delete Account</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

