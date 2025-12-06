"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ResourcesPage() {
  const router = useRouter()
  const [isAuthed, setIsAuthed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
    if (!token) {
      router.push("/login")
    } else {
      setIsAuthed(true)
      setIsLoading(false)
    }
  }, [router])

  const resources = [
    {
      id: 1,
      title: "Childcare Operations Manual",
      category: "Consulting",
      format: "PDF",
      price: "Free",
      description: "Comprehensive guide to running an effective childcare program",
    },
    {
      id: 2,
      title: "Insurance Compliance Checklist",
      category: "Insurance",
      format: "PDF",
      price: "$29.99",
      description: "Essential checklist for maintaining insurance compliance",
    },
    {
      id: 3,
      title: "Parent Communication Templates",
      category: "Parental Care",
      format: "Templates",
      price: "$19.99",
      description: "Ready-to-use templates for better parent-provider communication",
    },
    {
      id: 4,
      title: "Staff Training Program",
      category: "Consulting",
      format: "Video Course",
      price: "$49.99",
      description: "6-hour video course on staff development and training",
    },
    {
      id: 5,
      title: "Family Resource Guide",
      category: "Parental Care",
      format: "Digital Book",
      price: "Free",
      description: "Guide to selecting and evaluating childcare programs",
    },
    {
      id: 6,
      title: "Risk Management Handbook",
      category: "Insurance",
      format: "PDF",
      price: "$39.99",
      description: "Detailed risk assessment and management strategies",
    },
  ]

  if (isLoading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
            <p className="mt-4 text-muted-foreground">Loading resources...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!isAuthed) {
    return null
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-b from-muted to-background pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Digital Resources</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Access our comprehensive library of childcare resources
                </p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("auth_token")
                  router.push("/login")
                }}
                className="text-sm text-primary hover:underline font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {resource.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{resource.format}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{resource.price}</span>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
                      {resource.price === "Free" ? "Download" : "Purchase"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              Need a custom resource or personalized consultation?{" "}
              <Link href="/#contact" className="text-primary hover:underline font-semibold">
                Contact us
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
