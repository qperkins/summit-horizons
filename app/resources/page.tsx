"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Download, FileText, ShoppingBag } from "lucide-react"

export default function ResourcesPage() {

  const resources = [
    {
      id: 1,
      title: "Parent's Guide to Choosing Child Care",
      category: "Parental Care",
      format: "PDF",
      price: "Free",
      description: "Comprehensive guide to help parents make informed childcare decisions",
      downloadUrl: "https://www.cdss.ca.gov/Portals/9/Parent's%20Guide%20to%20Choosing%20Child%20Care-FINAL.pdf?ver=2017-08-18-121220-347",
    },
    {
      id: 2,
      title: "Opening a Child Care Center",
      category: "Consulting",
      format: "PDF",
      price: "Free",
      description: "Complete business guide for starting and operating a childcare center",
      downloadUrl: "https://info.childcareaware.org/hubfs/English_OpeningAChildCareCenter.pdf",
    },
    {
      id: 3,
      title: "How to Develop and Renovate Early Care Facilities",
      category: "Consulting",
      format: "PDF",
      price: "Free",
      description: "Comprehensive toolkit for developing and renovating childcare facilities in Los Angeles County",
      downloadUrl: "https://childcare.lacounty.gov/wp-content/uploads/2022/11/FinalGuideWithLinks_Nov10_2022-English.pdf",
    },
    {
      id: 4,
      title: "Opening a Family Child Care Home",
      category: "Consulting",
      format: "PDF",
      price: "Free",
      description: "Business guide for starting and operating a family childcare home",
      downloadUrl: "https://www.childcareaware.org/wp-content/uploads/2022/06/Opening-a-Family-Child-Care-Home-Business-Guide-English-final.pdf",
    },
    {
      id: 5,
      title: "Child Care Center Startup Guide",
      category: "Consulting",
      format: "PDF",
      price: "Free",
      description: "Startup guide for early care and education businesses - child care centers",
      downloadUrl: "https://advantagevalley.com/wp-content/uploads/2021/12/WVWomenForward_StartupGuide-ChildCareCenter.pdf",
    },
    {
      id: 6,
      title: "Family Child Care Home Rule Guidance",
      category: "Compliance",
      format: "PDF",
      price: "Free",
      description: "Regulatory guidance for family childcare home operations",
      downloadUrl: "https://www.decal.ga.gov/documents/attachments/FCCLH_Rule_Guidance.pdf",
    },
    {
      id: 7,
      title: "Regulatory Compliance Guide - Chapter 3800",
      category: "Compliance",
      format: "PDF",
      price: "Free",
      description: "Comprehensive regulatory compliance guide for child residential and day treatment facilities",
      downloadUrl: "https://paproviders.org/wp-content/uploads/2015/06/3800-Regulatory-Compliance-Guide-PRIDE-04-01-2015-Draft.pdf",
    },
  ]

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
                Digital Resources
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Access our comprehensive library of free childcare resources and guides.
            </p>
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
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {resource.format === "PDF" && <FileText className="w-3 h-3" />}
                      <span>{resource.format}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{resource.price}</span>
                    {resource.price === "Free" && resource.downloadUrl ? (
                      <a
                        href={resource.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    ) : resource.price === "Free" ? (
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    ) : (
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
                        Purchase
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Shop Card */}
              <Link
                href="/shop"
                className="bg-card border-2 border-dashed border-primary/30 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all flex flex-col items-center justify-center text-center min-h-[280px] group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">More Resources</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our shop for additional premium resources and tools
                </p>
                <span className="text-primary font-semibold group-hover:underline">
                  Visit Shop →
                </span>
              </Link>
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
