"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 95, suffix: "%", label: "Audit pass rate", description: "First-time passes for our clients" },
  { value: 89, suffix: "%", label: "Completion rate", description: "People finish what they start" },
  { value: 73, suffix: "%", label: "Fewer incidents", description: "Reduction in security events" },
  { value: 14, suffix: " days", label: "Average delivery", description: "From start to deployment" }
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  return <span>{count}{suffix}</span>
}

export function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#180A73]/20 to-[#0f172a]" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#03A6A6] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#03A6A6] font-medium text-sm tracking-wider uppercase">Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Numbers that matter.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We track what counts. Here's how our training impacts the teams we work with.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#03A6A6]/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Social Proof Quote */}
        <div className={`mt-20 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-xl md:text-2xl text-slate-300 italic max-w-3xl mx-auto">
            "EdTechie's approach is refreshingly practical. Our team actually looks forward to training now."
          </blockquote>
          <div className="mt-6">
            <div className="text-white font-medium">Sarah Chen</div>
            <div className="text-slate-500 text-sm">Security Lead, TechFlow Inc</div>
          </div>
        </div>
      </div>
    </section>
  )
}
