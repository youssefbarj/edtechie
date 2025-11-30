import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="bg-[#1A1F5C] min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </div>
  )
}
