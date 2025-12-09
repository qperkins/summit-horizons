import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export const metadata = {
  title: "Contact Us - Summit Horizons",
  description:
    "Get in touch with Summit Horizons. Reach out via email, phone, or our contact form. We're here to help your childcare center thrive.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
