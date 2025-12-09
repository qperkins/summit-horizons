"use client"

import { useEffect, useRef, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"

export default function ShopPage() {
  const { addToCart } = useCart()
  const [visibleProducts, setVisibleProducts] = useState<Set<string>>(new Set())
  const productsRef = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-product-id")
            if (id) {
              setVisibleProducts((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "-50px 0px" },
    )

    Object.values(productsRef.current).forEach((product) => {
      if (product) observer.observe(product)
    })

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      id: "accelerated-workshop",
      name: "Accelerated Daycare Ownership Workshop",
      price: 1495.0,
      description: "Comprehensive workshop covering all aspects of daycare ownership and operations",
      category: "Workshop",
    },
    {
      id: "start-daycare-course",
      name: "How to Start a Daycare Video Course",
      price: 149.0,
      description: "Step-by-step video course for starting your own daycare business",
      category: "Course",
    },
    {
      id: "virtual-workshop",
      name: "Virtual Accelerated Daycare Ownership Workshop",
      price: 250.0,
      description: "Online version of our comprehensive daycare ownership workshop",
      category: "Workshop",
    },
    {
      id: "employee-onboarding",
      name: "Childcare Employee Onboarding Program – Director & Teacher 90 Day Path to Success",
      price: 29.99,
      description: "Editable document program for onboarding new directors and teachers",
      category: "Program",
    },
    {
      id: "social-media-toolkit",
      name: "Social Media Toolkit",
      price: 24.95,
      description: "Complete toolkit for managing your childcare center's social media presence",
      category: "Toolkit",
    },
    {
      id: "video-creation",
      name: "Video Creation",
      price: 400.0,
      description: "Professional video creation services for your childcare center",
      category: "Service",
    },
    {
      id: "philosophy-booklet",
      name: "Philosophy/Program Booklet",
      price: 425.0,
      description: "Custom philosophy and program booklet for your childcare center",
      category: "Document",
    },
    {
      id: "custom-email",
      name: "Fully Customized Childcare Email",
      price: 150.0,
      description: "Professional, customized email templates for your childcare center",
      category: "Service",
    },
    {
      id: "logo-design",
      name: "Daycare Logo Design – Custom",
      price: 1000.0,
      description: "Custom logo design service for your daycare center",
      category: "Service",
    },
    {
      id: "marketing-plan",
      name: "Custom 6-month Childcare Marketing Plan",
      price: 150.0,
      description: "Comprehensive 6-month marketing strategy tailored to your center",
      category: "Plan",
    },
    {
      id: "marketing-strategies",
      name: "1,001 Childcare Marketing Strategies",
      price: 19.95,
      description: "Book containing over 1,000 marketing strategies for childcare centers",
      category: "Book",
    },
    {
      id: "profits-formula",
      name: "P.R.O.F.I.T.S Childcare Success Formula",
      price: 14.95,
      description: "Proven formula for achieving success in your childcare business",
      category: "Book",
    },
    {
      id: "teacher-workbook",
      name: "P.R.O.F.I.T.S Childcare Success Formula – Teacher Workbook",
      price: 24.95,
      description: "Companion workbook for teachers using the P.R.O.F.I.T.S formula",
      category: "Book",
    },
    {
      id: "leadership-journal",
      name: "Prioritizing Leadership 90-Day Journal",
      price: 18.75,
      description: "90-day journal for developing leadership skills in childcare management",
      category: "Journal",
    },
    {
      id: "teacher-journal",
      name: "Prioritizing Teacher 90-Day Journal",
      price: 12.75,
      description: "90-day journal for teacher development and growth",
      category: "Journal",
    },
  ]

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
    })
    toast.success("Added to cart", {
      description: product.name,
    })
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Header */}
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
                Shop
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Resources, courses, and tools to help your childcare center thrive
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, index) => {
                const isVisible = visibleProducts.has(product.id)
                return (
                  <div
                    key={product.id}
                    data-product-id={product.id}
                    ref={(el) => {
                      productsRef.current[product.id] = el
                    }}
                    className={`group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-6">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent">
                          {product.category}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-foreground">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gradient-to-r from-accent to-primary text-accent-foreground py-3 rounded-lg font-bold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Need Help Choosing?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Our team is here to help you find the right resources for your childcare center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
