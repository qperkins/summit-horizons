"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle2, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const { clearCart } = useCart()
  const [hasClearedCart, setHasClearedCart] = useState(false)

  useEffect(() => {
    // Clear cart on successful payment
    if (sessionId && !hasClearedCart) {
      clearCart()
      setHasClearedCart(true)
    }
  }, [sessionId, clearCart, hasClearedCart])

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Thank you for your purchase. Your order has been processed successfully. You will receive a confirmation email shortly.
          </p>

          {sessionId && (
            <div className="mb-8 p-4 bg-background/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Session ID:</p>
              <p className="text-xs font-mono text-foreground break-all">{sessionId}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={
          <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
              <p className="mt-4 text-muted-foreground">Loading...</p>
            </div>
          </section>
        }>
          <CheckoutSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
