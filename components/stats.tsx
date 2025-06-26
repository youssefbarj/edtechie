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
    { label: "Development Speed", value: "10x", color: "text-[#4981F2]", detail: "faster than scratch builds" },
    {
      label: "Cost Efficiency",
      value: "60%",
      color: "text-[#4981F2]",
      detail: "agency quality at competitive rates",
    },
    { label: "Completion Rate Improvement", value: "+89%", color: "text-[#4981F2]", detail: "vs traditional methods" },
    {
      label: "Knowledge Retention Increase",
      value: "+73%",
      color: "text-[#4981F2]",
      detail: "interactive vs static",
    },
  ]

  return (
    <section id="stats-section" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FEFFFB] mb-4">Content Transformation Results Across Industries</h2>
          <p className="text-xl text-slate-300">
            The numbers don't lie. Interactive content delivers results everywhere - from healthcare to manufacturing to
            financial services.
          </p>
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
              <div className="text-slate-400 text-sm mt-2">{stat.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-[#4981F2]/20 border border-[#4981F2]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#4981F2] mb-4">Before EdTechie</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• 34% average completion rates</li>
              <li>• 40% knowledge retention</li>
              <li>• Weeks to create new content</li>
              <li>• Static PDFs and PowerPoints</li>
              <li>• Expensive agencies or risky freelancers</li>
            </ul>
          </div>
          <div className="bg-[#03A6A6]/20 border border-[#03A6A6]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#03A6A6] mb-4">After EdTechie</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• 89% completion rates</li>
              <li>• 85% knowledge retention</li>
              <li>• Days to transform content</li>
              <li>• Interactive engaging experiences</li>
              <li>• Professional results, competitive rates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
