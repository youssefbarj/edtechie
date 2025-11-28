"use client"

import { useState } from "react"
import { BookOpen, Shield, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Training",
    description: "Interactive simulations that prepare your team for real-world threats. Not another boring compliance video.",
    color: "#03A6A6",
    href: "/services"
  },
  {
    icon: BookOpen,
    title: "Custom E-Learning",
    description: "Tailored courses built around your specific needs. Your content, our expertise in making it engaging.",
    color: "#4981F2",
    href: "/services"
  },
  {
    icon: Users,
    title: "Team Workshops",
    description: "Hands-on sessions that get your team working together. Real scenarios, real solutions.",
    color: "#05F2C7",
    href: "/services"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Need it fast? We build and deploy training solutions in days, not months.",
    color: "#180A73",
    href: "/services"
  }
]

export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#180A73]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[#03A6A6] font-medium text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Training that works,<br />
            <span className="text-slate-400">delivered your way.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            We specialize in creating learning experiences that people actually want to complete. 
            Here's how we help teams level up.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                    isHovered 
                      ? 'bg-slate-800/80 border-slate-600' 
                      : 'bg-slate-900/50 border-slate-800'
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: `radial-gradient(600px circle at ${isHovered ? '50%' : '0%'} 50%, ${service.color}10, transparent 40%)`
                    }}
                  />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                      style={{ 
                        backgroundColor: `${service.color}15`,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 transition-colors duration-300" 
                        style={{ color: service.color }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#03A6A6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-[#03A6A6] transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
