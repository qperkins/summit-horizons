import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="min-h-screen bg-gradient-to-b from-muted to-background flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">SH</span>
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Summit Horizons</h1>
                <p className="text-muted-foreground">Access your digital resources</p>
              </div>

              <LoginForm />

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button className="text-primary hover:underline font-semibold">Contact us for access</button>
                </p>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-md">
                <p className="text-xs text-muted-foreground text-center">
                  Demo credentials - Email: demo@summithorizons.com | Password: demo123
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Back to home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
