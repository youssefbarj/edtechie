"use client"

import { useEffect } from "react"
import { ResourceHero } from "@/components/resource-hero"
import { ResourceGrid } from "@/components/resource-grid"

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen">
      <ResourceHero />
      <ResourceGrid />
    </div>
  )
}
