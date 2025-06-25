"use client"

import { useEffect } from "react"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyGrid } from "@/components/case-study-grid"
import { CaseStudyStats } from "@/components/case-study-stats"

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen">
      <CaseStudyHero />
      <CaseStudyGrid />
      <CaseStudyStats />
    </div>
  )
}
