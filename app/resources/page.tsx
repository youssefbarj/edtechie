import { ResourceHero } from "@/components/resource-hero"
import { ResourceGrid } from "@/components/resource-grid"
import { AuditChecklist } from "@/components/audit-checklist"
import { BlogSection } from "@/components/blog-section"
import { ConstructionWall } from "@/components/construction-wall"

export default function ResourcesPage() {
  return (
    <div className="bg-slate-950 pt-16">
      <ResourceHero />
      <AuditChecklist />
      <ConstructionWall />
      <ResourceGrid />
      <BlogSection />
    </div>
  )
}
