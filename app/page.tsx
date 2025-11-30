import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { WhyEdTechie } from "@/components/why-edtechie"
import { ResultsSection } from "@/components/results-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <WhyEdTechie />
      <ResultsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
