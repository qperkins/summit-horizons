"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Expert Childcare
            </span>
            <br />
            <span className="text-foreground">Consulting</span>
          </h1>

          <p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed animate-slideInRight"
            style={{ animationDelay: "0.2s" }}
          >
            Comprehensive guidance for childcare centers and entrepreneurs. From operational excellence to compliance
            and family support—we help you build thriving childcare programs.
          </p>

          <div
            className="flex gap-4 justify-center pt-8 flex-wrap animate-slideInRight"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  )
}
