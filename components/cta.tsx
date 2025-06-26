"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-[#180A73] to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="relative">
            <Sparkles className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#FEFFFB] leading-tight">
              <span className="text-[#4981F2]">EdTechie</span> transforms your content,{" "}
              <span className="text-[#03A6A6]">your learners actually learn.</span>
            </h2>
          </div>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop losing learners to boring content across all your compliance areas. Start building engaging experiences
            that actually work with <span className="text-[#4981F2] font-semibold">EdTechie Corp</span>. Your next
            compliance deadline is coming whether you're ready or not.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#4981F2] hover:bg-[#180A73] text-[#FEFFFB] font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Calendar className={`w-5 h-5 transition-all duration-300 ${isHovered ? "animate-bounce" : ""}`} />
                <span>See Your PDFs Come to Life - Free Demo</span>
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? "translate-x-2" : ""}`} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-[#FEFFFB] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <Link href="/services">Transform Your First PDF Free</Link>
            </Button>
          </div>

          <div className="pt-8 text-slate-400 text-sm">
            <p className="animate-pulse">Free consultation • No commitment • Works across ALL compliance areas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
