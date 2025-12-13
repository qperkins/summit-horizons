"use client"

import type React from "react"
import { useState } from "react"

interface LoginFormProps {
  mode: "login" | "signup"
}

export default function LoginForm({ mode }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Redirect to WorkOS authentication
      const endpoint = mode === "login" ? "/api/auth/sign-in" : "/api/auth/sign-up"
      const returnPathname = encodeURIComponent("/resources")
      window.location.href = `${endpoint}?return_pathname=${returnPathname}`
    } catch (err) {
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>

      {error && <div className="p-3 bg-destructive/10 text-destructive rounded-md text-sm">{error}</div>}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {isLoading
          ? mode === "login"
            ? "Signing in..."
            : "Signing up..."
          : mode === "login"
            ? "Sign In"
            : "Sign Up"}
      </button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        {mode === "login"
          ? "You'll be redirected to sign in with WorkOS"
          : "You'll be redirected to create your account with WorkOS"}
      </p>
    </form>
  )
}
