"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center animate-glow shadow-lg relative">
                <span className="text-primary-foreground font-bold relative z-10">SH</span>
                <div className="absolute inset-0 bg-accent/30 rounded-xl blur-md -z-0"></div>
              </div>
              <span className="font-bold text-lg">
                <span className="text-accent">Summit</span>{" "}
                <span className="text-foreground">Horizons</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              Expert childcare consulting for centers, entrepreneurs, and families.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#consulting"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Program Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#insurance"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Insurance Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#parental"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Family Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Digital Resources
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Email</p>
            <a
              href="mailto:info@summithorizons.org"
              className="text-foreground hover:text-accent transition-colors duration-300 text-sm block mb-4 font-medium"
            >
              info@summithorizons.org
            </a>
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Phone</p>
            <a
              href="tel:+1-800-SUMMIT-1"
              className="text-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              +1 (800) SUMMIT-1
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 Summit Horizons. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
