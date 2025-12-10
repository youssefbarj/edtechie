import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { TransformationProcess } from "@/components/transformation-process"
import { ServiceFeatures } from "@/components/service-features"
import { LeadCapture } from "@/components/lead-capture"

export default function ServicesPage() {
  return (
    <div className="bg-[#1A1F5C] min-h-screen">
      <Navigation />
      <ServiceHero />
      <TransformationProcess />
      <ServiceFeatures />
      <LeadCapture />
      <Footer />
    </div>
  )
}
