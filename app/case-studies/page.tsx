import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyGrid } from "@/components/case-study-grid"
import { CaseStudyStats } from "@/components/case-study-stats"
import { LeadCapture } from "@/components/lead-capture"

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#1A1F5C] min-h-screen">
      <Navigation />
      <CaseStudyHero />
      <CaseStudyGrid />
      <CaseStudyStats />
      <LeadCapture />
      <Footer />
    </div>
  )
}
