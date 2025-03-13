"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar: string
}

type AuthContextType = {
  isLoggedIn: boolean
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsLoggedIn(true)
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a mock login function
    // In a real app, you would call your API here

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock successful login with any credentials for demo
        const mockUser = {
          id: "1",
          name: "John Doe",
          email: email,
          avatar:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
        }

        setUser(mockUser)
        setIsLoggedIn(true)
        localStorage.setItem("user", JSON.stringify(mockUser))
        resolve(true)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

