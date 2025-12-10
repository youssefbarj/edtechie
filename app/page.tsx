import { HeroTransformation } from "@/components/hero-transformation"
import { ValuePillarsBento } from "@/components/value-pillars-bento"
import { AudienceTabs } from "@/components/audience-tabs"
import { ProofSection } from "@/components/proof-section"
import { ComparisonTable } from "@/components/comparison-table"
import { FinalCTA } from "@/components/final-cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroTransformation />
        <ValuePillarsBento />
        <AudienceTabs />
        <ProofSection />
        <ComparisonTable />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
