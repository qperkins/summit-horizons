"use client"

import { useEffect, useRef, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
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

  const experienceItems = [
    "Early childhood development and best practices",
    "Program design and curriculum implementation",
    "Licensing, compliance, and quality rating improvement",
    "Staff coaching, professional development, and leadership support",
    "Center operations, systems building, and organizational strategy",
  ]

  const philosophyItems = [
    "Every child deserves a nurturing, high-quality learning environment",
    "Every educator deserves support, guidance, and recognition",
    "Effective systems lead to calmer classrooms and stronger outcomes",
    "Small, intentional changes can create big, lasting growth",
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
                About Me
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Summit Horizons Childcare Consulting
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div
              id="intro"
              ref={(el) => {
                sectionsRef.current["intro"] = el
              }}
              className={`mb-16 scroll-mt-24 ${
                visibleSections.has("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-12 shadow-lg">
                <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                  At Summit Horizons, I'm dedicated to helping childcare centers reach their fullest potential — because quality care doesn't just support children today; it shapes the adults they'll become. My mission is to guide childcare owners, directors, and educators toward stronger programs, smoother operations, and environments where children and staff can truly thrive.
                </p>
              </div>
            </div>

            {/* Where My Journey Began */}
            <div
              id="journey"
              ref={(el) => {
                sectionsRef.current["journey"] = el
              }}
              className={`mb-16 scroll-mt-24 ${
                visibleSections.has("journey") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 sm:p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-accent to-primary rounded-full"></span>
                    Where My Journey Began
                  </h2>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p className="text-lg">
                      My passion for childcare started long before consulting — it began in my mother's home daycare. My first born grew up there, surrounded by the warmth, structure, and love my mother poured into every child. She treated each little one as if they were her own — from teaching with intention to cooking meals that felt like they came straight from the soul.
                    </p>
                    <p className="text-lg">
                      That home daycare wasn't just a place for care; it was a place where memories were made, where children felt safe, and where families became extended family. Watching my child grow in that environment showed me the true impact quality care has on development, confidence, and joy. It planted the seed for everything I do today.
                    </p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
              </div>
            </div>

            {/* Who I Am */}
            <div
              id="who-i-am"
              ref={(el) => {
                sectionsRef.current["who-i-am"] = el
              }}
              className={`mb-16 scroll-mt-24 ${
                visibleSections.has("who-i-am") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 sm:p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Who I Am
                  </h2>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    My name is Persia Jones, and I am a childcare professional, consultant, and passionate advocate for early childhood education. I've spent years working in early learning environments — from classroom teaching to program leadership — and I've seen the real challenges childcare providers face every day.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed mt-4">
                    I founded Summit Horizons to help childcare centers create the same kind of supportive, loving, and well-structured spaces that shaped my own family's journey.
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              </div>
            </div>

            {/* My Experience */}
            <div
              id="experience"
              ref={(el) => {
                sectionsRef.current["experience"] = el
              }}
              className={`mb-16 scroll-mt-24 ${
                visibleSections.has("experience") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 sm:p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-accent to-primary rounded-full"></span>
                    My Experience
                  </h2>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    I bring a background in:
                  </p>
                  <div className="space-y-4">
                    {experienceItems.map((item, index) => (
                      <div
                        key={index}
                        className="group/feature relative p-4 rounded-xl bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
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
                          <span className="text-foreground/90 group-hover/feature:text-foreground transition-colors text-lg">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed mt-6">
                    I've helped centers increase quality, strengthen staff culture, boost enrollment, and meet state requirements with confidence — all while keeping children's well-being at the center of every choice.
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
              </div>
            </div>

            {/* My Approach & Philosophy */}
            <div
              id="philosophy"
              ref={(el) => {
                sectionsRef.current["philosophy"] = el
              }}
              className={`mb-16 scroll-mt-24 ${
                visibleSections.has("philosophy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 sm:p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    My Approach & Philosophy
                  </h2>
                  <p className="text-xl text-foreground/80 mb-6 italic">
                    Childcare is more than a profession — it's a calling.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    I believe:
                  </p>
                  <div className="space-y-4 mb-6">
                    {philosophyItems.map((item, index) => (
                      <div
                        key={index}
                        className="group/feature relative p-4 rounded-xl bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5">
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
                          <span className="text-foreground/90 group-hover/feature:text-foreground transition-colors text-lg">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    My approach is compassionate, personalized, and rooted in real-world experience. I meet programs where they are and help them grow step by step.
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              </div>
            </div>

            {/* Why I Do This Work */}
            <div
              id="why"
              ref={(el) => {
                sectionsRef.current["why"] = el
              }}
              className={`mb-16 scroll-mt-24 ${
                visibleSections.has("why") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 sm:p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-accent to-primary rounded-full"></span>
                    Why I Do This Work
                  </h2>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    I started Summit Horizons because I know firsthand the power of excellent childcare. I've lived it, I've led it, and now I'm committed to helping others build it.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed mt-4">
                    Supporting childcare providers isn't just my career — it's my passion, deeply tied to my own family's story and the values passed down through generations.
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Grow Together
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're navigating compliance, improving quality, strengthening staff culture, or building systems from the ground up, I'm here to help.
              </p>
              <p className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                Together, we can create environments where children thrive, families feel confident, and educators feel empowered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-accent to-primary text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Get In Touch
                </a>
                <Link
                  href="/services"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Explore Services
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
