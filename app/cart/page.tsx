"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCheckout = async () => {
    setIsProcessing(true)
    // TODO: Integrate with Stripe
    // For now, simulate checkout process
    setTimeout(() => {
      alert("Checkout functionality will be integrated with Stripe. Total: $" + getTotalPrice().toFixed(2))
      setIsProcessing(false)
    }, 1000)
  }

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  if (items.length === 0) {
    return (
      <>
        <Navigation />
        <main>
          <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
              <div
                className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-2xl">
                <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Your Cart is Empty
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Start adding products to your cart to get started.
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Browse Shop
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
            <div
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fadeInUp">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Shopping Cart
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Review your items and proceed to checkout
            </p>
          </div>
        </section>

        {/* Cart Items */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Item Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <span className="text-2xl font-bold text-foreground">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {formatPrice(item.price * item.quantity)} total
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3 border border-border rounded-lg p-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-accent/20 rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4 text-foreground" />
                          </button>
                          <span className="text-lg font-semibold text-foreground min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-accent/20 rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4 text-foreground" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal</span>
                      <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax</span>
                      <span className="font-semibold">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between text-2xl font-bold text-foreground">
                        <span>Total</span>
                        <span>{formatPrice(getTotalPrice())}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-accent to-primary text-accent-foreground py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-75 disabled:scale-100"
                    >
                      {isProcessing ? "Processing..." : "Proceed to Checkout"}
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full border-2 border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition-all duration-300"
                    >
                      Clear Cart
                    </button>
                    <Link
                      href="/shop"
                      className="block w-full text-center text-accent hover:text-accent/80 font-semibold transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
