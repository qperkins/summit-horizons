"use client"

import type React from "react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10 animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to enhance your childcare program? Reach out to us using any method below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-accent/20 animate-fadeInUp">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 -z-10"></div>
            <div className="inline-block p-4 bg-accent/20 rounded-xl mb-4 group-hover:bg-accent/30 transition-colors duration-300">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              Email
            </h3>
            <p className="text-muted-foreground mb-4">Send us a detailed message at your convenience</p>
            <a
              href="mailto:info@summithorizons.org"
              className="text-accent hover:text-accent/80 font-bold transition-colors duration-300 break-all inline-block group-hover:underline"
            >
              info@summithorizons.org
            </a>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-secondary w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Phone Card */}
          <div
            className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-accent/20 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 -z-10"></div>
            <div className="inline-block p-4 bg-accent/20 rounded-xl mb-4 group-hover:bg-accent/30 transition-colors duration-300">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              Phone
            </h3>
            <p className="text-muted-foreground mb-4">Speak directly with our team</p>
            <a
              href="tel:+1-800-SUMMIT-1"
              className="text-accent hover:text-accent/80 font-bold text-lg transition-colors duration-300 group-hover:underline"
            >
              +1 (800) SUMMIT-1
            </a>
            <p className="text-sm text-muted-foreground mt-2">Monday-Friday, 9am-5pm EST</p>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-secondary w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Hours Card */}
          <div
            className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-accent/20 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 -z-10"></div>
            <div className="inline-block p-4 bg-accent/20 rounded-xl mb-4 group-hover:bg-accent/30 transition-colors duration-300">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              Business Hours
            </h3>
            <div className="text-muted-foreground space-y-1">
              <p>Monday - Friday</p>
              <p className="font-semibold text-foreground">9:00 AM - 5:00 PM EST</p>
              <p className="text-sm mt-3">Average response time: 24 hours</p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-secondary w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div
          className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none placeholder:text-muted-foreground"
                placeholder="Tell us about your needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-gradient-to-r from-accent to-primary text-accent-foreground py-3 rounded-lg font-bold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-75 disabled:scale-100"
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
