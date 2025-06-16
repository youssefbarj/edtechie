"use client"

import { useEffect } from "react"
import { ResourceHero } from "@/components/resource-hero"
import { ResourceGrid } from "@/components/resource-grid"
import { BlogSection } from "@/components/blog-section"

export default function ResourcesPage() {
  useEffect(() => {
    // Ensure we start at the top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen">
      <ResourceHero />
      <ResourceGrid />
      <BlogSection />
    </div>
  )
}
