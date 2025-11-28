import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { WhyEdTechie } from "@/components/why-edtechie"
import { ResultsSection } from "@/components/results-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { SiteGate } from "@/components/site-gate"
import { ConstructionWall } from "@/components/construction-wall"

function ActualSite() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <WhyEdTechie />
      <ResultsSection />
      <CTASection />
      <Footer />
      <AIChatbot />
    </main>
  )
}

export default function HomePage() {
  return (
    <SiteGate
      constructionPage={<ConstructionWall />}
      actualSite={<ActualSite />}
    />
  )
}
