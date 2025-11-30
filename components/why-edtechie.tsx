"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const transformationJourney = [
  {
    phase: "Day 1",
    old: "Static PDF courses",
    new: "Content audit complete",
    description: "We analyze every piece of your training material"
  },
  {
    phase: "Week 2",
    old: "Scattered documents",
    new: "Structured curriculum",
    description: "Your content organized for digital delivery"
  },
  {
    phase: "Month 2",
    old: "No platform",
    new: "LMS architecture built",
    description: "Custom platform engineered for your needs"
  },
  {
    phase: "Month 4",
    old: "Local only",
    new: "Global launch 🚀",
    description: "Students accessing courses worldwide"
  }
]

export function WhyEdTechie() {
  const [visiblePhases, setVisiblePhases] = useState<number[]>([])
  const [progressWidth, setProgressWidth] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate progress bar
            setTimeout(() => setProgressWidth(100), 200)
            
            // Stagger reveal phases
            transformationJourney.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePhases(prev => [...new Set([...prev, index])])
              }, 400 + index * 300)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-[#1A1F5C] to-[#1A1F5C] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00CED1]/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#3D2C8D]/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#FF8559]" />
            <span className="text-[#FF8559] text-[12px] font-semibold tracking-[0.15em] uppercase">Transformation Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBD4] leading-[1.15] mb-5">
            Institut Fandi&apos;s journey
            <br />
            <span className="text-[#FDFBD4]/50">from analog to</span>{" "}
            <span className="text-[#00CED1]">digital.</span>
          </h2>
          <p className="text-[1.1rem] text-[#FDFBD4]/55 leading-relaxed">
            This is exactly what we built. Not a hypothetical—a real transformation 
            for Morocco&apos;s #1 beauty academy. And we can do the same for you.
          </p>
        </div>

        {/* Transformation timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-[#3D2C8D]/30 rounded-full hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-[#00CED1] via-[#3D2C8D] to-[#FF8559] rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* Timeline phases */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {transformationJourney.map((phase, index) => {
              const isVisible = visiblePhases.includes(index)
              const isLast = index === transformationJourney.length - 1
              
              return (
                <div 
                  key={phase.phase}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center mb-8">
                    <div className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                      isVisible 
                        ? isLast ? 'bg-[#FF8559] shadow-[0_0_20px_rgba(255,133,89,0.5)]' : 'bg-[#00CED1]' 
                        : 'bg-[#3D2C8D]/50'
                    }`}>
                      {isLast && isVisible && (
                        <div className="absolute inset-0 rounded-full bg-[#FF8559] animate-ping opacity-50" />
                      )}
                    </div>
                  </div>

                  {/* Phase card */}
                  <div className={`p-6 rounded-xl border transition-all duration-500 ${
                    isLast 
                      ? 'bg-gradient-to-br from-[#FF8559]/10 to-transparent border-[#FF8559]/30' 
                      : 'bg-[#3D2C8D]/10 border-[#3D2C8D]/20'
                  }`}>
                    {/* Phase label */}
                    <div className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-4 ${
                      isLast ? 'text-[#FF8559]' : 'text-[#00CED1]'
                    }`}>
                      {phase.phase}
                    </div>

                    {/* Before/After */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-[#FDFBD4]/30 text-xs mt-0.5">✕</span>
                        <span className="text-[13px] text-[#FDFBD4]/40 line-through">{phase.old}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className={`text-xs mt-0.5 ${isLast ? 'text-[#FF8559]' : 'text-[#00CED1]'}`}>✓</span>
                        <span className={`text-[14px] font-medium ${isLast ? 'text-[#FF8559]' : 'text-[#FDFBD4]'}`}>{phase.new}</span>
                      </div>
                    </div>

                    <p className="text-[13px] text-[#FDFBD4]/50 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#3D2C8D]/20 to-[#00CED1]/10 border border-[#3D2C8D]/20">
          <div>
            <p className="text-[#FDFBD4] font-semibold text-lg mb-1">
              Your transformation could start today.
            </p>
            <p className="text-[#FDFBD4]/50 text-[14px]">
              Same process. Same results. Your training, made global.
            </p>
          </div>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00CED1] hover:bg-[#00CED1]/90 text-[#1A1F5C] font-semibold text-[14px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,206,209,0.25)] hover:shadow-[0_6px_28px_rgba(0,206,209,0.35)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Start Your Timeline</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
