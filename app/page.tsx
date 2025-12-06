import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Summit Horizons - Professional Childcare Consulting & Resources",
  description:
    "Expert childcare consulting for centers and entrepreneurs. We provide insurance guidance, operational support, and comprehensive parental care resources.",
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  )
}
