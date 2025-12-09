"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Building2, Wrench } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const audiences = [
  {
    id: "institutes",
    label: "Professional Institutes",
    icon: GraduationCap,
    title: "Expand Beyond Your City",
    description: "Reach students across borders without opening new locations.",
    benefits: [
      "Scale globally without physical infrastructure",
      "Maintain your reputation and quality standards",
      "Reach students who can't relocate",
      "Diversify revenue streams"
    ],
    color: "primary"
  },
  {
    id: "corporate",
    label: "Corporate Departments",
    icon: Building2,
    title: "Automate Compliance & Slash Costs",
    description: "Automate compliance (ISO/FDA) & slash onboarding costs by 90%. Track everything.",
    benefits: [
      "90% reduction in training costs",
      "Automated compliance tracking (ISO/FDA)",
      "Real-time audit trails",
      "Consistent onboarding at scale"
    ],
    color: "action"
  },
  {
    id: "vocational",
    label: "Vocational Schools",
    icon: Wrench,
    title: "Modernize Theory for Hands-On Workers",
    description: "Interactive simulations they can access anywhere.",
    benefits: [
      "Theory modules they actually engage with",
      "Accessible from job sites",
      "Practical simulations and scenarios",
      "Flexible scheduling for working students"
    ],
    color: "secondary"
  }
]

export function AudienceTabs() {
  const [activeTab, setActiveTab] = useState(audiences[0].id)
  const activeAudience = audiences.find(a => a.id === activeTab) || audiences[0]

  return (
    <section className="relative py-24 lg:py-32 bg-bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-secondary/5 to-bg-dark" />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
            Who We Transform
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored solutions for different training organizations
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.2 }}
        >
          {audiences.map((audience) => {
            const isActive = activeTab === audience.id
            const Icon = audience.icon
            
            return (
              <motion.button
                key={audience.id}
                onClick={() => setActiveTab(audience.id)}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-colors ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springConfig}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl"
                    transition={springConfig}
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-primary' : ''}`} />
                <span className="relative z-10">{audience.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={springConfig}
            className="bg-gradient-to-br from-secondary/10 to-bg-dark border border-secondary/20 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Icon and title */}
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={springConfig}
                  className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${
                    activeAudience.color === 'primary' ? 'from-primary/20 to-primary/5' :
                    activeAudience.color === 'action' ? 'from-action/20 to-action/5' :
                    'from-secondary/20 to-secondary/5'
                  } border ${
                    activeAudience.color === 'primary' ? 'border-primary/30' :
                    activeAudience.color === 'action' ? 'border-action/30' :
                    'border-secondary/30'
                  }`}
                >
                  <activeAudience.icon className={`w-16 h-16 ${
                    activeAudience.color === 'primary' ? 'text-primary' :
                    activeAudience.color === 'action' ? 'text-action' :
                    'text-secondary'
                  }`} strokeWidth={1.5} />
                </motion.div>

                <div>
                  <motion.h3 
                    className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springConfig, delay: 0.1 }}
                  >
                    {activeAudience.title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springConfig, delay: 0.2 }}
                  >
                    {activeAudience.description}
                  </motion.p>
                </div>
              </div>

              {/* Right - Benefits list */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...springConfig, delay: 0.2 }}
              >
                {activeAudience.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springConfig, delay: 0.1 * (index + 3) }}
                    className="flex items-start gap-4 p-4 bg-bg-dark/50 rounded-xl border border-gray-700/50"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      activeAudience.color === 'primary' ? 'bg-primary/20 text-primary' :
                      activeAudience.color === 'action' ? 'bg-action/20 text-action' :
                      'bg-secondary/20 text-secondary'
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className="inline-flex items-center gap-2 bg-action hover:bg-action/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-action/20"
          >
            Discuss Your Use Case
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
