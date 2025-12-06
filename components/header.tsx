"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Summit Horizons
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button asChild className="hidden md:flex">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}
