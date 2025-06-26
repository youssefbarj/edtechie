"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "HR Director, TechFlow Inc",
      content:
        "Converting our compliance PDFs took 3 weeks. Worth every penny - our completion rates doubled and people actually retain the info now.",
      rating: 5,
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      name: "David Chen",
      role: "Safety Manager, Manufacturing Corp",
      content:
        "Our OSHA training was just endless PowerPoints. EdTechie made it interactive and our incident reports dropped 40%. Managers love the analytics.",
      rating: 5,
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      name: "Sarah Rodriguez",
      role: "L&D Director, Financial Services",
      content:
        "Had 200+ compliance PDFs gathering dust. EdTechie transformed the critical ones first - saved us 6 months of internal development time.",
      rating: 5,
      gradient: "from-purple-500/10 to-pink-500/10",
    },
  ]

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FEFFFB] mb-4">What Learning Leaders Are Saying</h2>
          <p className="text-xl text-slate-300">Don't take our word for it. Listen to the transformation results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${testimonial.gradient} border-slate-700 hover:border-[#03A6A6]/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-4 right-4">
                  <Quote
                    className={`w-8 h-8 text-[#03A6A6]/20 transition-all duration-300 ${hoveredCard === index ? "animate-pulse" : ""}`}
                  />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 text-[#05F2C7] fill-current transition-all duration-300 ${hoveredCard === index ? "animate-pulse" : ""}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 italic text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-slate-700/50 pt-4">
                  <div className="font-semibold text-[#FEFFFB] text-lg">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
