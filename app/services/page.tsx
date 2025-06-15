"use client"

import { useEffect } from "react"
import { ServiceHero } from "@/components/service-hero"
import { ServiceTiers } from "@/components/service-tiers"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceComparison } from "@/components/service-comparison"

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 pt-16">
      <ServiceHero />
      <ServiceTiers />
      <ServiceFeatures />
      <ServiceComparison />
    </div>
  )
}
