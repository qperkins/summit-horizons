import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Summit Horizons
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your trusted partner in childcare excellence
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Summit Horizons, we're dedicated to helping childcare centers reach their highest potential. 
                With years of industry experience, we provide expert guidance that transforms challenges into 
                opportunities for growth and excellence.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Deep understanding of regulations and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Personalized approach tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Ongoing support and partnership</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
