import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "consulting",
      title: "Childcare Program Consulting",
      description:
        "Comprehensive operational guidance for childcare centers and entrepreneurs. Whether you're launching a new program or optimizing existing operations, we help you achieve excellence.",
      features: [
        "Operational strategy and planning",
        "Staff training and development",
        "Quality improvement programs",
        "Technology integration",
        "Family engagement strategies",
        "Financial planning",
      ],
    },
    {
      id: "insurance",
      title: "Insurance Information & Guidance",
      description:
        "Navigate childcare insurance complexity with confidence. We provide clear guidance on coverage options, risk management, and compliance requirements.",
      features: [
        "Liability coverage options",
        "Workers compensation insights",
        "Property insurance guidance",
        "Risk assessment and mitigation",
        "Claims support",
        "Policy comparison",
      ],
    },
    {
      id: "parental",
      title: "Parental Care & Family Support",
      description:
        "Comprehensive resources for parents navigating childcare decisions. We bridge the gap between providers and families with education and support.",
      features: [
        "Child development information",
        "Choosing quality childcare",
        "Developmental milestones",
        "Family communication",
        "Parent resources library",
        "Support network building",
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-b from-muted to-background pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive consulting solutions tailored to your childcare needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 mb-16">
              {services.map((service) => (
                <div key={service.id} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="#contact"
                        className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Get Started
                      </a>
                      <Link
                        href="/login"
                        className="border border-primary text-primary px-6 py-2 rounded-md font-semibold hover:bg-primary/5 transition-colors"
                      >
                        View Resources
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's chat about your specific needs and find the perfect solution.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
