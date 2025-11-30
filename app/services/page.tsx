import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceTiers } from "@/components/service-tiers"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceComparison } from "@/components/service-comparison"
import { LeadCapture } from "@/components/lead-capture"

export default function ServicesPage() {
  return (
    <div className="bg-[#1A1F5C] min-h-screen">
      <Navigation />
      <ServiceHero />
      <ServiceTiers />
      <ServiceFeatures />
      <ServiceComparison />
      <LeadCapture />
      <Footer />
    </div>
  )
}
