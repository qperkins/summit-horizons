"use client"

import { useEffect, useRef, useState } from "react"

export default function Services() {
  const services = [
    {
      title: "Childcare Consulting",
      description:
        "Operational guidance, best practices, and strategic planning for childcare centers and entrepreneurs looking to launch or scale their programs.",
      icon: "🎯",
    },
    {
      title: "Insurance Guidance",
      description:
        "Navigate the complex world of childcare insurance. We provide clear, actionable insights to protect your program and families.",
      icon: "🛡️",
    },
    {
      title: "Parental Care Information",
      description:
        "Comprehensive resources and support for parents seeking quality childcare solutions and understanding child development.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Compliance & Regulations",
      description:
        "Stay current with licensing requirements, safety standards, and regulatory compliance specific to childcare operations.",
      icon: "📋",
    },
  ]

  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored solutions designed for childcare excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden ${
                visibleCards.includes(index) ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 -z-10"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-primary w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
