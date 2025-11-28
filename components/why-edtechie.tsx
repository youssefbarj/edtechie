"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const features = [
  {
    number: "01",
    title: "We listen first",
    description: "Every team is different. We start by understanding your specific challenges before proposing solutions."
  },
  {
    number: "02", 
    title: "Built for engagement",
    description: "Interactive scenarios, not slide decks. People learn by doing, so that's how we build."
  },
  {
    number: "03",
    title: "Measurable outcomes",
    description: "Clear metrics showing skill improvement. You'll know exactly what's working."
  },
  {
    number: "04",
    title: "Fast turnaround",
    description: "From kickoff to deployment in weeks, not months. Your time matters."
  }
]

export function WhyEdTechie() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the reveal of items
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#180A73] rounded-full blur-[200px] opacity-20 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Logo area */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-slate-800" />
                <div className="absolute w-3/4 h-3/4 rounded-full border border-slate-800" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-slate-700" />
              </div>
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#03A6A6] to-[#4981F2] blur-3xl opacity-30 scale-150" />
                  <Image
                    src="/images/edtechie-owl-icon.png"
                    alt="EdTechie"
                    width={160}
                    height={160}
                    className="relative drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-[#03A6A6] rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-5 w-2 h-2 bg-[#4981F2] rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/3 left-10 w-2 h-2 bg-[#05F2C7] rounded-full animate-pulse delay-1000" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-[#03A6A6] font-medium text-sm tracking-wider uppercase">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-12">
              Training done<br />
              <span className="bg-gradient-to-r from-[#03A6A6] to-[#4981F2] bg-clip-text text-transparent">differently.</span>
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.number}
                  className={`flex gap-6 transition-all duration-700 ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <span className="text-[#03A6A6] font-mono text-sm">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
