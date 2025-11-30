"use client"

import { useState } from "react"
import { FileText, Server, Rocket, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

const transformationStages = [
  {
    stage: "01",
    icon: FileText,
    title: "Content Transformation",
    subtitle: "Analog → Digital",
    before: "PDFs, documents, slide decks gathering dust",
    after: "Interactive modules students actually complete",
    description: "We take your proven training content—every PDF, every manual, every video—and engineer it into engaging, interactive digital experiences. Same expertise, new delivery.",
    techHighlight: "Interactive LMS modules • Video integration • Quiz systems • Progress tracking",
    color: "#00CED1",
    metric: "30 years of content transformed for Institut Fandi"
  },
  {
    stage: "02",
    icon: Server,
    title: "Platform Engineering",
    subtitle: "Local → Scalable",
    before: "Limited by classroom walls and geography",
    after: "Custom LMS that scales to thousands",
    description: "We architect and build your learning platform from the ground up. Student portals, admin dashboards, analytics—all engineered to handle unlimited growth.",
    techHighlight: "Custom LMS • Student dashboards • Real-time analytics • Mobile-ready",
    color: "#3D2C8D",
    metric: "2K+ concurrent users on Institut Fandi's platform"
  },
  {
    stage: "03",
    icon: Rocket,
    title: "Digital Launch",
    subtitle: "Static → Live",
    before: "Uncertain how to make the transition",
    after: "Fully operational, globally accessible",
    description: "The tech is only half the battle. We train your team, migrate your students, and ensure a smooth launch. You focus on teaching—we handle the technology transition.",
    techHighlight: "Staff training • Student migration • Launch support • Ongoing optimization",
    color: "#FF8559",
    metric: "4 months from kickoff to global reach"
  }
]

export function ServicesPreview() {
  const [activeStage, setActiveStage] = useState<number>(0)

  return (
    <section className="py-24 lg:py-32 bg-[#1A1F5C] relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00CED1]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3D2C8D]/30 to-transparent" />
        {/* Circuit pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,206,209,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#00CED1]" />
            <span className="text-[#00CED1] text-[12px] font-semibold tracking-[0.15em] uppercase">The Transformation Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBD4] leading-[1.15] mb-5">
            Three stages from
            <br />
            <span className="text-[#FDFBD4]/50">analog</span> to{" "}
            <span className="text-[#00CED1]">digital.</span>
          </h2>
          <p className="text-[1.1rem] text-[#FDFBD4]/55 leading-relaxed max-w-2xl">
            We don&apos;t just &quot;build websites.&quot; We engineer complete digital transformations—
            taking training organizations from static content and local limitations to 
            interactive platforms with global reach.
          </p>
        </div>

        {/* Transformation stages - Interactive timeline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Stage selector - left side */}
          <div className="lg:col-span-4 space-y-4">
            {transformationStages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = activeStage === index
              
              return (
                <button
                  key={stage.stage}
                  onClick={() => setActiveStage(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#3D2C8D]/40 to-transparent border-[#3D2C8D]/60' 
                      : 'bg-transparent border-[#3D2C8D]/20 hover:border-[#3D2C8D]/40 hover:bg-[#3D2C8D]/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                      style={{ backgroundColor: `${stage.color}${isActive ? '30' : '15'}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: stage.color }} strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: stage.color }}>
                          Stage {stage.stage}
                        </span>
                        <ChevronRight 
                          className={`w-3 h-3 transition-transform duration-300 ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0'}`} 
                          style={{ color: stage.color }} 
                        />
                      </div>
                      <div className="text-[15px] font-semibold text-[#FDFBD4] mb-1">{stage.title}</div>
                      <div className="text-[13px] text-[#FDFBD4]/50">{stage.subtitle}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Stage detail - right side */}
          <div className="lg:col-span-8">
            {transformationStages.map((stage, index) => {
              const isActive = activeStage === index
              if (!isActive) return null
              
              return (
                <div 
                  key={stage.stage}
                  className="bg-gradient-to-br from-[#3D2C8D]/30 to-[#1A1F5C]/50 rounded-2xl border border-[#8B7FB8]/15 overflow-hidden"
                >
                  {/* Before/After comparison */}
                  <div className="grid sm:grid-cols-2 border-b border-[#8B7FB8]/10">
                    {/* Before - muted */}
                    <div className="p-6 bg-[#1A1F5C]/40">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FDFBD4]/30" />
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FDFBD4]/40">Before</span>
                      </div>
                      <p className="text-[#FDFBD4]/50 text-[15px] line-through decoration-[#FF8559]/30">{stage.before}</p>
                    </div>
                    {/* After - vibrant */}
                    <div className="p-6 bg-gradient-to-r from-transparent to-[#00CED1]/5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1] animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#00CED1]">After</span>
                      </div>
                      <p className="text-[#FDFBD4] text-[15px] font-medium">{stage.after}</p>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="p-6 lg:p-8">
                    <p className="text-[#FDFBD4]/70 text-[16px] leading-relaxed mb-6">
                      {stage.description}
                    </p>

                    {/* Tech highlight */}
                    <div className="mb-6 p-4 rounded-xl bg-[#1A1F5C]/50 border border-[#3D2C8D]/30">
                      <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#3D2C8D] mb-2">Technology Stack</div>
                      <div className="text-[13px] text-[#FDFBD4]/60">{stage.techHighlight}</div>
                    </div>

                    {/* Proof metric */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stage.color}20` }}>
                          <span className="text-sm">✓</span>
                        </div>
                        <span className="text-[13px] text-[#FDFBD4]/60">{stage.metric}</span>
                      </div>
                      <Link 
                        href="/services"
                        className="group inline-flex items-center gap-2 text-[13px] font-medium transition-colors"
                        style={{ color: stage.color }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-[#FDFBD4]/50 text-[15px] mb-5">Ready to start your transformation?</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#FF8559] hover:bg-[#FF6B3D] text-white font-semibold text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,133,89,0.25)] hover:shadow-[0_6px_28px_rgba(255,133,89,0.35)] hover:-translate-y-0.5"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
