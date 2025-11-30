"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A1F5C]">
      {/* Tech-inspired background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F5C] via-[#1A1F5C] to-[#2D2573]" />
        
        {/* Accent gradients */}
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-[#3D2C8D]/30 via-[#3D2C8D]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#00CED1]/8 to-transparent" />
        
        {/* Tech glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00CED1]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#3D2C8D]/15 rounded-full blur-[100px]" />
        
        {/* Circuit/grid pattern - tech DNA */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,206,209,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,206,209,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Data flow lines - subtle */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="data-flow" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#00CED1"/>
              <line x1="50" y1="50" x2="100" y2="50" stroke="#00CED1" strokeWidth="0.5" strokeDasharray="2,4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#data-flow)"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 min-h-screen items-center pt-28 lg:pt-32 pb-20">
          
          {/* Left column - Transformation message (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tech badge */}
            <div 
              className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/25">
                <Zap className="w-3.5 h-3.5 text-[#00CED1]" strokeWidth={2.5} />
                <span className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#00CED1]">Digital Transformation Engineers</span>
              </div>
            </div>

            {/* TRANSFORMATION headline */}
            <div 
              className={`space-y-2 transition-all duration-700 delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-[-0.03em]">
                <span className="text-[#FDFBD4]/60">From</span>{" "}
                <span className="text-[#FDFBD4] line-through decoration-[#FF8559]/50 decoration-2">PDFs</span>
                <br />
                <span className="text-[#FDFBD4]/60">to</span>{" "}
                <span className="text-[#00CED1]">Global Platform</span>
                <br />
                <span className="text-[#FDFBD4]/60">in</span>{" "}
                <span className="text-[#FF8559]">4 Months.</span>
              </h1>
            </div>

            {/* Transformation statement */}
            <p 
              className={`text-[1.1rem] sm:text-[1.2rem] text-[#FDFBD4]/65 max-w-[520px] leading-[1.75] transition-all duration-700 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              We engineer complete digital transformations for training organizations 
              trapped in the analog era. <span className="text-[#FDFBD4]/90 font-medium">Static content → Interactive experiences. 
              Local classrooms → Unlimited global scale.</span>
            </p>

            {/* The proof - transformation accomplished */}
            <div 
              className={`flex items-center gap-3 transition-all duration-700 delay-250 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                <span className="text-[#D4AF37] text-lg">🏆</span>
              </div>
              <div className="text-[14px]">
                <span className="text-[#FDFBD4]/50">Transformation delivered for </span>
                <span className="text-[#D4AF37] font-semibold">Institut Fandi</span>
                <span className="text-[#FDFBD4]/50"> — Morocco&apos;s #1 Beauty Academy</span>
              </div>
            </div>

            {/* Transformation CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Button
                asChild
                size="lg"
                className="group relative bg-[#FF8559] hover:bg-[#FF6B3D] text-white font-semibold text-[15px] px-7 py-6 rounded-xl transition-all duration-300 shadow-[0_4px_24px_rgba(255,133,89,0.25)] hover:shadow-[0_8px_32px_rgba(255,133,89,0.35)] hover:-translate-y-0.5"
              >
                <Link href="/case-studies" className="flex items-center gap-3">
                  <span>See Transformation in Action</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-[#FDFBD4]/75 hover:text-[#FDFBD4] hover:bg-[#00CED1]/10 text-[15px] px-7 py-6 rounded-xl transition-all duration-300 border border-[#00CED1]/30 hover:border-[#00CED1]/60"
              >
                <Link href="/contact">
                  <span>Start Your Transformation</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - BEFORE/AFTER Transformation visual (5 cols) */}
          <div className="lg:col-span-5">
            <div 
              className={`relative transition-all duration-1000 delay-400 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              {/* Transformation comparison card */}
              <div className="relative bg-gradient-to-br from-[#3D2C8D]/50 to-[#1A1F5C]/80 backdrop-blur-md rounded-2xl border border-[#8B7FB8]/15 shadow-2xl overflow-hidden">
                
                {/* Before section - muted, old */}
                <div className="p-6 border-b border-[#8B7FB8]/15 bg-[#1A1F5C]/50">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#FDFBD4]/30" />
                    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#FDFBD4]/40">Before Transformation</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#FDFBD4]/40">
                      <span className="text-lg">📄</span>
                      <span className="text-[14px] line-through">Static PDF courses</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#FDFBD4]/40">
                      <span className="text-lg">📍</span>
                      <span className="text-[14px] line-through">Students must relocate to Morocco</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#FDFBD4]/40">
                      <span className="text-lg">👥</span>
                      <span className="text-[14px] line-through">Limited to classroom capacity</span>
                    </div>
                  </div>
                </div>

                {/* Transformation arrow */}
                <div className="relative py-3 bg-gradient-to-r from-[#3D2C8D]/30 via-[#00CED1]/20 to-[#3D2C8D]/30">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00CED1]/50" />
                    <div className="w-8 h-8 rounded-full bg-[#00CED1]/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#00CED1]" />
                    </div>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00CED1]/50" />
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00CED1]">4 Months</span>
                  </div>
                </div>

                {/* After section - vibrant, new */}
                <div className="p-6 bg-gradient-to-b from-[#00CED1]/5 to-transparent">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#00CED1] animate-pulse" />
                    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#00CED1]">After Transformation</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#FDFBD4]">
                      <span className="text-lg">🖥️</span>
                      <span className="text-[14px] font-medium">Interactive LMS platform</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#FDFBD4]">
                      <span className="text-lg">🌍</span>
                      <span className="text-[14px] font-medium">Students learning from 3+ countries</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#FDFBD4]">
                      <span className="text-lg">📈</span>
                      <span className="text-[14px] font-medium">2,000+ students, unlimited scale</span>
                    </div>
                  </div>
                </div>

                {/* Bottom stats bar */}
                <div className="px-6 py-4 bg-[#1A1F5C]/60 border-t border-[#8B7FB8]/10">
                  <div className="flex items-center justify-between text-center">
                    <div>
                      <div className="text-[1.5rem] font-bold text-[#00CED1]">30</div>
                      <div className="text-[10px] text-[#FDFBD4]/40 uppercase tracking-wider">Years Digitalized</div>
                    </div>
                    <div className="w-px h-8 bg-[#8B7FB8]/20" />
                    <div>
                      <div className="text-[1.5rem] font-bold text-[#FF8559]">4</div>
                      <div className="text-[10px] text-[#FDFBD4]/40 uppercase tracking-wider">Months to Launch</div>
                    </div>
                    <div className="w-px h-8 bg-[#8B7FB8]/20" />
                    <div>
                      <div className="text-[1.5rem] font-bold text-[#D4AF37]">∞</div>
                      <div className="text-[10px] text-[#FDFBD4]/40 uppercase tracking-wider">Scale Potential</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech badge */}
              <div 
                className={`absolute -bottom-3 -left-3 bg-[#00CED1] text-[#1A1F5C] rounded-lg px-4 py-2 shadow-lg shadow-[#00CED1]/25 transform -rotate-2 hidden lg:flex items-center gap-2 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="text-sm">⚡</span>
                <span className="font-bold text-[13px]">Transformation Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1F5C] to-transparent pointer-events-none" />
    </section>
  )
}
