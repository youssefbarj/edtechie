"use client"

import { useEffect } from "react"
import { ResourceHero } from "@/components/resource-hero"
import { ResourceGrid } from "@/components/resource-grid"
import { BlogSection } from "@/components/blog-section"

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 pt-16">
      <ResourceHero />
      <ResourceGrid />
      <BlogSection />
    </div>
  )
}
