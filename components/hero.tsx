"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Death by PowerPoint?", "PDFs putting people to sleep?", "Compliance training failing?"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1e293b]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#180A73] to-[#1e293b]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-[#4981F2] transition-all duration-500">{texts[currentText]}</span>
              <br />
              <span className="text-4xl md:text-5xl text-[#FEFFFB]">73% zone out during compliance training.</span>
            </h1>
            <p className="text-xs text-slate-500 mb-4">(Source: Kineo blog post)</p>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#4981F2] font-bold">EdTechie Corp</span> transforms your boring PDFs and
              presentations into engaging interactive e-learning that actually works.
              <span className="text-[#03A6A6] font-semibold"> Transform your content, engage your learners.</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#03A6A6]" />
              <span>89% Higher Completion Rates</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-[#4981F2]" />
              <span>73% Better Engagement</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-[#05F2C7]" />
              <span>Works Across All Compliance Areas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#4981F2] hover:bg-[#180A73] text-[#FEFFFB] font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Transform Your Content Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-[#FEFFFB] px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Link href="/resources">Download Content Transformation Guide</Link>
            </Button>
          </div>

          <div className="pt-8 text-slate-400 text-sm">
            <p>Trusted by 1000+ organizations • 89% completion rates • Free consultation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
