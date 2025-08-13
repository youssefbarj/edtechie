import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyGrid } from "@/components/case-study-grid"
import { CaseStudyStats } from "@/components/case-study-stats"
import { LeadCapture } from "@/components/lead-capture"
import { ConstructionWall } from "@/components/construction-wall"

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-950 pt-16">
      <CaseStudyHero />
      <CaseStudyGrid />
      <CaseStudyStats />
      <LeadCapture />
      <ConstructionWall />
    </div>
  )
}
