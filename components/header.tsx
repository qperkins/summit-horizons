"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/95">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <Image
              src="/SHLogo.png"
              alt="Summit Horizons Logo"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-primary-foreground">
            Summit Horizons
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-sm font-medium text-primary-foreground transition-colors hover:text-accent">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium text-primary-foreground transition-colors hover:text-accent">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-primary-foreground transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
        <Button asChild variant="outline" className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground border-accent">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}
