import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactFormSection } from "@/components/contact-form-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}
