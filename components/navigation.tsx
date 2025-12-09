"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  return (
    <nav className="bg-transparent backdrop-blur-lg border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-20 py-2">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <Image
                src="/shortlogo.png"
                alt="Summit Horizons Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg hidden sm:inline text-primary">Summit Horizons</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/about"
              className="text-primary hover:text-accent transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-primary hover:text-accent transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#resources"
              className="text-primary hover:text-accent transition-colors duration-300 relative group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-accent transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/shop"
              className="text-primary hover:text-accent transition-colors duration-300 relative group"
            >
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/cart"
              className="relative text-primary hover:text-accent transition-colors duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              )}
            </Link>
            <Link
              href="/login"
              className="bg-accent text-primary px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fadeInUp">
            <Link href="/about" className="block text-primary hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/services" className="block text-primary hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#resources" className="block text-primary hover:text-accent transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="block text-primary hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/shop" className="block text-primary hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/cart" className="block text-primary hover:text-accent transition-colors flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart
              {cartItemCount > 0 && (
                <span className="bg-accent text-primary text-xs font-bold rounded-full px-2 py-0.5">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              )}
            </Link>
            <Link
              href="/login"
              className="block bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
