"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent via-primary to-secondary rounded-xl flex items-center justify-center animate-glow">
              <span className="text-primary font-bold text-lg">SH</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Summit Horizons
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="#services"
              className="text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#resources"
              className="text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/login"
              className="bg-gradient-to-r from-accent to-primary text-accent-foreground px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fadeInUp">
            <Link href="#services" className="block text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#resources" className="block text-foreground hover:text-accent transition-colors">
              Resources
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link
              href="/login"
              className="block bg-gradient-to-r from-accent to-primary text-accent-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all text-center"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
