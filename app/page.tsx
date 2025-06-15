"use client"

import { useEffect } from "react"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { SocialProof } from "@/components/social-proof"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950">
      <Hero />
      <ProblemSolution />
      <Stats />
      <SocialProof />
      <Testimonials />
      <CTA />
    </div>
  )
}
