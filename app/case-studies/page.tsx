import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InstitutFandiCaseStudy } from "@/components/institut-fandi-case-study"
import { ComingSoonCases } from "@/components/coming-soon-cases"
import { LeadCapture } from "@/components/lead-capture"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <InstitutFandiCaseStudy />
      <ComingSoonCases />
      <LeadCapture />
      <Footer />
    </div>
  )
}
