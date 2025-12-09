import { HeroTransformation } from "@/components/hero-transformation"
import { ValuePillarsBento } from "@/components/value-pillars-bento"
import { AudienceTabs } from "@/components/audience-tabs"
import { ProofSection } from "@/components/proof-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroTransformation />
      <ValuePillarsBento />
      <AudienceTabs />
      <ProofSection />
    </main>
  )
}
