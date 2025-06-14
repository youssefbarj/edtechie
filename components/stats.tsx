"use client"

import { useEffect, useState } from "react"

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: "Audit Pass Rate", value: "95%", color: "text-[#180A73]" },
    { label: "Training Completion", value: "89%", color: "text-[#180A73]" },
    { label: "Incident Reduction", value: "73%", color: "text-[#180A73]" },
    { label: "Client Satisfaction", value: "4.9/5", color: "text-[#180A73]" },
  ]

  return (
    <section id="stats-section" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Before vs After Training</h2>
          <p className="text-xl text-slate-300">The numbers don't lie. Our training delivers results.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-[#03A6A6]/50 transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} ${isVisible ? "animate-pulse" : ""}`}>
                {stat.value}
              </div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">Before EdTechie</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• 67% of teams fail initial audits</li>
              <li>• Average 12 security incidents per year</li>
              <li>• 34% training completion rate</li>
              <li>• $2.4M average breach cost</li>
            </ul>
          </div>
          <div className="bg-[#180A73]/20 border border-[#180A73]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#180A73] mb-4">After EdTechie</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• 95% audit pass rate</li>
              <li>• 73% reduction in incidents</li>
              <li>• 89% training completion</li>
              <li>• ROI within 6 months</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
