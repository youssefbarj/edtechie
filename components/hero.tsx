"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Failed your audit?", "Breached again?", "Team unprepared?"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1e293b]">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-blue-950 to-[#1e293b]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Dynamic headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-red-400 transition-all duration-500">{texts[currentText]}</span>
              <br />
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                We fix what others break.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#f59e0b] font-bold">EdTechie Corp</span> transforms boring cybersecurity training
              into interactive simulations that prepare your team for real threats.
              <span className="text-[#f59e0b] font-semibold"> Build it tonight, conquer tomorrow.</span>
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#f59e0b]" />
              <span>Audit-Ready Training</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-[#f59e0b]" />
              <span>Real-World Simulations</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-[#f59e0b]" />
              <span>Measurable Results</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Audit-Ready Training</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Link href="/resources">Download Failure Report</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 text-slate-400 text-sm">
            <p>Trusted by 500+ tech companies • 95% audit pass rate • 24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
