"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Target, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const texts = ["Death by PowerPoint?", "PDFs putting people to sleep?", "Compliance training failing?"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1e293b]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#180A73] to-[#1e293b]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
        <div
          className={`space-y-6 sm:space-y-8 lg:space-y-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
              <span className="text-[#4981F2] transition-all duration-500 block sm:inline animate-pulse">
                {texts[currentText]}
              </span>
              <br className="hidden sm:block" />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#FEFFFB] block mt-2 sm:mt-0">
                73% zone out during compliance training.
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-4">
              (Source: Corporate Compliance Insights Survey)
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed px-2">
              <span className="text-[#4981F2] font-bold">EdTechie Corp</span> transforms your boring PDFs, PowerPoints,
              and Word docs into engaging interactive e-learning that actually works{" "}
              <span className="text-[#03A6A6] font-semibold">across ALL compliance areas.</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base lg:text-lg">
            {[
              { icon: Shield, text: "89% Higher Completion Rates", color: "text-[#03A6A6]" },
              { icon: Zap, text: "73% Better Knowledge Retention", color: "text-[#4981F2]" },
              { icon: Target, text: "10x Faster Than Building From Scratch", color: "text-[#05F2C7]" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 bg-slate-800/50 px-3 sm:px-4 py-2 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} group-hover:animate-spin`} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-4xl mx-auto px-2">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#4981F2] hover:bg-[#180A73] text-[#FEFFFB] font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
            >
              <Link href="/contact" className="flex items-center justify-center space-x-2">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span className="text-center">See Your PDFs Come to Life - Free Demo</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-[#FEFFFB] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400"
            >
              <Link href="/resources">Get Free PDF Transformation Sample</Link>
            </Button>
          </div>

          <div className="pt-6 sm:pt-8 text-slate-400 text-xs sm:text-sm px-2">
            <p className="max-w-4xl mx-auto">
              Trusted by 1000+ organizations across healthcare, manufacturing, financial services, and more • Free
              consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
