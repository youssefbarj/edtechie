"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#0f172a]">
        {/* Animated gradient orbs */}
        <div 
          className={`absolute top-1/4 -left-32 w-96 h-96 bg-[#180A73] rounded-full blur-[128px] opacity-60 transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-60' : '-translate-x-full opacity-0'}`}
        />
        <div 
          className={`absolute bottom-1/4 -right-32 w-96 h-96 bg-[#03A6A6] rounded-full blur-[128px] opacity-40 transition-all duration-1000 delay-300 ${mounted ? 'translate-x-0 opacity-40' : 'translate-x-full opacity-0'}`}
        />
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4981F2] rounded-full blur-[180px] opacity-20 transition-all duration-1000 delay-500 ${mounted ? 'scale-100 opacity-20' : 'scale-0 opacity-0'}`}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#03A6A6]/30 bg-[#03A6A6]/10 backdrop-blur-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <span className="w-2 h-2 bg-[#05F2C7] rounded-full animate-pulse" />
            <span className="text-sm text-[#03A6A6] font-medium">E-Learning & Digital Training Solutions</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="text-white">Build skills that</span>
              <br />
              <span className="bg-gradient-to-r from-[#03A6A6] via-[#4981F2] to-[#05F2C7] bg-clip-text text-transparent">
                actually stick.
              </span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              We create interactive cybersecurity training and e-learning experiences 
              that engage your team and deliver measurable results. No fluff, no boring slides.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-[#180A73] to-[#4981F2] hover:from-[#4981F2] hover:to-[#180A73] text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#180A73]/25 hover:shadow-[#4981F2]/40"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="group text-slate-300 hover:text-white hover:bg-white/5 px-8 py-6 rounded-xl transition-all duration-300"
            >
              <Link href="/case-studies" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#03A6A6]/20 flex items-center justify-center group-hover:bg-[#03A6A6]/30 transition-colors">
                  <Play className="w-4 h-4 text-[#03A6A6] ml-0.5" />
                </div>
                <span>See Our Work</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`pt-16 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm text-slate-500 mb-6">Trusted by teams who take security seriously</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['TechFlow', 'DataSecure', 'CloudTech', 'InfoGuard'].map((company, i) => (
                <div 
                  key={company}
                  className="text-slate-600 font-semibold text-lg hover:text-slate-400 transition-colors cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Logo Element */}
        <div 
          className={`absolute -bottom-20 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#03A6A6]/20 to-transparent blur-3xl scale-150" />
            <Image
              src="/images/edtechie-owl-icon.png"
              alt="EdTechie"
              width={80}
              height={80}
              className="relative opacity-30 hover:opacity-50 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </section>
  )
}
