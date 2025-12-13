"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login")

  return (
    <>
      <Navigation />
      <main>
        <section className="min-h-screen bg-gradient-to-b from-muted to-background flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">SH</span>
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Summit Horizons</h1>
                <p className="text-muted-foreground">
                  {mode === "login" ? "Sign in to your account" : "Create a new account"}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex mb-6 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setMode("login")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
                    mode === "login"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setMode("signup")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
                    mode === "signup"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <LoginForm mode={mode} />

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  {mode === "login" ? (
                    <>
                      Don't have an account?{" "}
                      <button
                        onClick={() => setMode("signup")}
                        className="text-primary hover:underline font-semibold"
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        onClick={() => setMode("login")}
                        className="text-primary hover:underline font-semibold"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Back to home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
