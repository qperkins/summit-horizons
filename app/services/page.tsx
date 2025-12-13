"use client"

import { useEffect, useRef, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) {
              setVisibleSections((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "-100px 0px" },
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: "consulting",
      title: "Childcare Consulting",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=90&auto=format&fit=crop",
      description:
        "Comprehensive operational guidance for childcare centers and entrepreneurs. Whether you're launching a new program or optimizing existing operations, we help you achieve excellence.",
      longDescription:
        "Our childcare consulting services provide end-to-end support for centers at every stage of development. From initial planning to ongoing optimization, we work closely with you to build sustainable, high-quality programs that serve children and families effectively.",
      features: [
        "Operational strategy and planning",
        "Staff training and development programs",
        "Quality improvement initiatives",
        "Technology integration and optimization",
        "Family engagement strategies",
        "Financial planning and budgeting",
        "Curriculum development and implementation",
        "Facility design and space optimization",
      ],
      benefits: [
        "Increased enrollment and retention",
        "Improved staff satisfaction and retention",
        "Enhanced program quality ratings",
        "Better family engagement and satisfaction",
      ],
    },
    {
      id: "insurance",
      title: "Insurance Guidance",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=90&auto=format&fit=crop",
      description:
        "Navigate childcare insurance complexity with confidence. We provide clear guidance on coverage options, risk management, and compliance requirements.",
      longDescription:
        "Understanding and managing insurance for childcare operations can be overwhelming. Our expert guidance helps you navigate the complexities of liability, property, and workers' compensation insurance to ensure comprehensive protection for your program, staff, and families.",
      features: [
        "Liability coverage options and recommendations",
        "Workers compensation insights and compliance",
        "Property insurance guidance",
        "Risk assessment and mitigation strategies",
        "Claims support and documentation",
        "Policy comparison and selection",
        "Cost optimization strategies",
        "Regulatory compliance assistance",
      ],
      benefits: [
        "Comprehensive protection coverage",
        "Reduced insurance costs through optimization",
        "Peace of mind with proper risk management",
        "Faster claims processing and resolution",
      ],
    },
    {
      id: "parental",
      title: "Parental Care Information",
      icon: "👨‍👩‍👧‍👦",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=90&auto=format&fit=crop",
      description:
        "Comprehensive resources for parents navigating childcare decisions. We bridge the gap between providers and families with education and support.",
      longDescription:
        "We empower parents with the knowledge and resources they need to make informed childcare decisions. Our family support services provide guidance on child development, quality indicators, and building strong partnerships with childcare providers.",
      features: [
        "Child development information and milestones",
        "Choosing quality childcare guidance",
        "Understanding developmental stages",
        "Effective family-provider communication",
        "Parent resources library and materials",
        "Support network building",
        "Transition planning and support",
        "Advocacy and rights information",
      ],
      benefits: [
        "Confidence in childcare decisions",
        "Stronger parent-provider relationships",
        "Better child development outcomes",
        "Access to comprehensive resources",
      ],
    },
    {
      id: "compliance",
      title: "Compliance & Regulations",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=90&auto=format&fit=crop",
      description:
        "Stay current with licensing requirements, safety standards, and regulatory compliance specific to childcare operations.",
      longDescription:
        "Regulatory compliance is critical for childcare operations. We help you stay ahead of changing regulations, maintain proper documentation, and implement best practices that exceed minimum requirements while protecting your program and the children you serve.",
      features: [
        "Licensing requirements and renewal support",
        "Safety standards and protocols",
        "Health and sanitation compliance",
        "Staff qualification and training requirements",
        "Documentation and record-keeping systems",
        "Inspection preparation and support",
        "Regulatory change monitoring",
        "Policy development and implementation",
      ],
      benefits: [
        "Reduced compliance risks",
        "Smoother licensing processes",
        "Enhanced safety and quality",
        "Peace of mind with proper documentation",
      ],
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
                Our Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Comprehensive consulting solutions tailored to your childcare needs. Explore our detailed services below.
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((service, index) => {
              const isVisible = visibleSections.has(service.id)
              return (
                <div
                  key={service.id}
                  id={service.id}
                  ref={(el) => {
                    sectionsRef.current[service.id] = el
                  }}
                  className={`mb-24 last:mb-0 scroll-mt-24 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } transition-all duration-1000`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Image Placeholder */}
                    <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        quality={95}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
                    </div>

                    <div className="relative p-8 sm:p-12 lg:p-16">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h2>
                          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Long Description */}
                      <div className="mb-10">
                        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-4xl">
                          {service.longDescription}
                        </p>
                      </div>

                      {/* Features Grid */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                          <span className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></span>
                          What's Included
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative p-4 rounded-xl bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
                              style={{ animationDelay: `${featureIndex * 0.05}s` }}
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mt-0.5">
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={3}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                                <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                                  {feature}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <span className="text-2xl">✨</span>
                          Key Benefits
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-accent"></div>
                              <span className="text-foreground/90">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                        <a
                          href="/#contact"
                          className="flex-1 sm:flex-none bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
                        >
                          Get Started
                        </a>
                        <Link
                          href="/resources"
                          className="flex-1 sm:flex-none border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
                        >
                          View Resources
                        </Link>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
                  </div>
                </div>
              )
            })}
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
                Not sure which service is right for you?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's chat about your specific needs and find the perfect solution for your childcare program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Schedule a Consultation
                </a>
                <Link
                  href="/#services"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
