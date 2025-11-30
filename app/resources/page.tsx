import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourceHero } from "@/components/resource-hero"
import { ResourceGrid } from "@/components/resource-grid"
import { LeadCapture } from "@/components/lead-capture"

export default function ResourcesPage() {
  return (
    <div className="bg-[#1A1F5C] min-h-screen">
      <Navigation />
      <ResourceHero />
      <ResourceGrid />
      <LeadCapture />
      <Footer />
    </div>
  )
}
