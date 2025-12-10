"use client"

import { motion } from "framer-motion"
import { Building2, Wrench, HeartPulse, Clock } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const comingSoonCases = [
  {
    id: "corporate",
    title: "Corporate Compliance Platform",
    industry: "Fortune 500 Manufacturing",
    icon: Building2,
    teaser: "How we automated ISO compliance training for 10,000+ employees",
    metrics: ["90% cost reduction", "100% audit compliance", "Global deployment"],
    color: "primary",
    status: "Coming Q2 2025"
  },
  {
    id: "technical",
    title: "Technical Skills Academy",
    industry: "Vocational Training Institute",
    icon: Wrench,
    teaser: "Modernizing HVAC & electrical training with hybrid learning",
    metrics: ["200% enrollment increase", "95% completion rate", "Mobile-first platform"],
    color: "secondary",
    status: "Coming Q3 2025"
  },
  {
    id: "healthcare",
    title: "Healthcare Certification Hub",
    industry: "Medical Training Provider",
    icon: HeartPulse,
    teaser: "FDA-compliant e-learning for nursing professionals",
    metrics: ["5,000+ certifications", "Real-time tracking", "Multi-state licensing"],
    color: "action",
    status: "Coming Q4 2025"
  }
]

export function ComingSoonCases() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-secondary/5 to-bg-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          <motion.h2 
            className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            More Success Stories Coming Soon
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            We&apos;re documenting transformations across industries
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {comingSoonCases.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            
            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...springConfig, delay: index * 0.1 }}
              >
                <motion.div
                  className={`relative h-full bg-gradient-to-br ${
                    caseStudy.color === 'primary' ? 'from-primary/10 to-primary/5' :
                    caseStudy.color === 'secondary' ? 'from-secondary/10 to-secondary/5' :
                    'from-action/10 to-action/5'
                  } border ${
                    caseStudy.color === 'primary' ? 'border-primary/20' :
                    caseStudy.color === 'secondary' ? 'border-secondary/20' :
                    'border-action/20'
                  } rounded-2xl p-8 overflow-hidden`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  transition={springConfig}
                >
                  {/* Coming soon badge */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                      <Clock className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-semibold">Coming Soon</span>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${
                      caseStudy.color === 'primary' ? 'from-primary to-primary/80' :
                      caseStudy.color === 'secondary' ? 'from-secondary to-secondary/80' :
                      'from-action to-action/80'
                    } mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={springConfig}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{caseStudy.industry}</p>
                      <h3 className="font-heading text-2xl font-bold text-white mb-3">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {caseStudy.teaser}
                      </p>
                    </div>

                    {/* Preview metrics */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {caseStudy.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ ...springConfig, delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            caseStudy.color === 'primary' ? 'bg-primary' :
                            caseStudy.color === 'secondary' ? 'bg-secondary' :
                            'bg-action'
                          }`} />
                          <span className="text-sm text-gray-400">{metric}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="pt-4">
                      <p className={`text-sm font-semibold ${
                        caseStudy.color === 'primary' ? 'text-primary' :
                        caseStudy.color === 'secondary' ? 'text-secondary' :
                        'text-action'
                      }`}>
                        {caseStudy.status}
                      </p>
                    </div>
                  </div>

                  {/* Background blur decoration */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${
                    caseStudy.color === 'primary' ? 'bg-primary' :
                    caseStudy.color === 'secondary' ? 'bg-secondary' :
                    'bg-action'
                  }/10 rounded-full blur-3xl`} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
