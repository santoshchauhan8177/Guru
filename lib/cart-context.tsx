"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { featuredProducts } from "@/lib/data"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (id: string, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize with 3 items in the cart
  const initialItems: CartItem[] = [
    {
      id: "1",
      name: "Premium Solar Panel 500W",
      category: "Solar Panels",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3",
      quantity: 1,
    },
    
    {
      id: "4",
      name: "RO Smart Energy Manager",
      category: "RO",
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      quantity: 1,
    },
  ]

  const [items, setItems] = useState<CartItem[]>(initialItems)

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (id: string, quantity = 1) => {
    const product = featuredProducts.find((p) => p.id === id)
    if (!product) return

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id)

      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + quantity } : item))
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            category: product.category,
          },
        ]
      }
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

