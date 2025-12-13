"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                Expert
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}
                  Childcare{" "}
                </span>
                Consulting
              </h1>
            </div>

            <p
              className="text-lg sm:text-xl text-muted-foreground max-w-xl text-balance leading-relaxed animate-slideInRight"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive guidance for childcare centers and entrepreneurs. From operational excellence to compliance
              and family support—we help you build thriving childcare programs.
            </p>

            <div className="flex gap-4 pt-8 flex-wrap animate-slideInRight" style={{ animationDelay: "0.4s" }}>
              <a
                href="#contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative h-96 lg:h-full min-h-96 grid grid-cols-2 gap-4 animate-slideInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <Image
                src="/pexels-shvetsa-11369305.jpg"
                alt="Professional consultant taking notes"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 mt-8">
              <Image
                src="/pexels-pavel-danilyuk-8422172.jpg"
                alt="Warm moment between caregiver and baby"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <Image
                src="/pexels-ron-lach-8541877.jpg"
                alt="Children engaged in creative activities"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 mt-8">
              <Image
                src="/pexels-pavel-danilyuk-8423065.jpg"
                alt="Children playing with modeling clay"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  )
}
