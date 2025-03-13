"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Landmark, Truck, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-context"

type CheckoutStep = "shipping" | "payment" | "review"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const { isLoggedIn } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping")
  const [isProcessing, setIsProcessing] = useState(false)

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("card")

  const shipping = subtotal > 5000 ? 0 : 500
  const tax = Math.round(subtotal * 0.18) // 18% GST
  const total = subtotal + shipping + tax

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    return (
      <div className="container px-4 py-12 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Please Login to Continue</h1>
        <p className="text-muted-foreground mb-6">You need to be logged in to proceed with checkout.</p>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    )
  }

  // Redirect to cart if cart is empty
  if (items.length === 0) {
    return (
      <div className="container px-4 py-12 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Add some products to your cart before proceeding to checkout.</p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate shipping info
    const { firstName, lastName, address, city, state, pincode, phone } = shippingInfo
    if (!firstName || !lastName || !address || !city || !state || !pincode || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all the required fields",
        variant: "destructive",
      })
      return
    }

    setCurrentStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("review")
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      clearCart()
      router.push("/checkout/success")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/cart" className="hover:text-foreground transition-colors">
            Cart
          </Link>
          <span>/</span>
          <span>Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-medium">Checkout Steps</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/cart">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Cart
                  </Link>
                </Button>
              </div>
            </div>

            <Tabs value={currentStep} className="w-full">
              <TabsList className="w-full grid grid-cols-3 h-auto p-0 bg-muted/50">
                <TabsTrigger
                  value="shipping"
                  className="rounded-none border-b-2 data-[state=active]:border-primary py-3"
                  onClick={() => setCurrentStep("shipping")}
                >
                  1. Shipping
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="rounded-none border-b-2 data-[state=active]:border-primary py-3"
                  onClick={() => currentStep !== "shipping" && setCurrentStep("payment")}
                  disabled={currentStep === "shipping"}
                >
                  2. Payment
                </TabsTrigger>
                <TabsTrigger
                  value="review"
                  className="rounded-none border-b-2 data-[state=active]:border-primary py-3"
                  onClick={() => currentStep === "review" && setCurrentStep("review")}
                  disabled={currentStep !== "review"}
                >
                  3. Review
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shipping" className="p-6">
                <form onSubmit={handleShippingSubmit}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Shipping Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input
                          id="first-name"
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input
                          id="last-name"
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN code</Label>
                        <Input
                          id="pincode"
                          value={shippingInfo.pincode}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="pt-4">
                      <Button type="submit" className="w-full">
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="payment" className="p-6">
                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Method</h3>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-5 w-5" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                          <Wallet className="h-5 w-5" />
                          UPI
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer">
                          <Landmark className="h-5 w-5" />
                          Net Banking
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name-on-card">Name on Card</Label>
                          <Input id="name-on-card" placeholder="John Doe" />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="upi-id">UPI ID</Label>
                          <Input id="upi-id" placeholder="name@upi" />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "netbanking" && (
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="bank">Select Bank</Label>
                          <select
                            id="bank"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          >
                            <option value="">Select your bank</option>
                            <option value="sbi">State Bank of India</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div className="pt-4">
                      <Button type="submit" className="w-full">
                        Continue to Review
                      </Button>
                    </div>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="review" className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Order Review</h3>

                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium flex items-center gap-2 mb-2">
                        <Truck className="h-4 w-4" />
                        Shipping Information
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {shippingInfo.firstName} {shippingInfo.lastName}
                        <br />
                        {shippingInfo.address}
                        <br />
                        {shippingInfo.city}, {shippingInfo.state} {shippingInfo.pincode}
                        <br />
                        Phone: {shippingInfo.phone}
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium flex items-center gap-2 mb-2">
                        {paymentMethod === "card" && <CreditCard className="h-4 w-4" />}
                        {paymentMethod === "upi" && <Wallet className="h-4 w-4" />}
                        {paymentMethod === "netbanking" && <Landmark className="h-4 w-4" />}
                        Payment Method
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {paymentMethod === "card" && "Credit/Debit Card"}
                        {paymentMethod === "upi" && "UPI"}
                        {paymentMethod === "netbanking" && "Net Banking"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Order Items</h4>
                    <div className="border rounded-md divide-y">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4">
                          <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium">{item.name}</h5>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">₹{item.price.toLocaleString()}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button onClick={handlePlaceOrder} className="w-full" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 bg-background sticky top-20">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (18% GST)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between font-medium text-lg mb-6">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                By placing your order, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

