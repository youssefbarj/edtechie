"use client"

import { motion } from "framer-motion"
import { FileSearch, Wrench, Rocket, ArrowRight } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const stages = [
  {
    id: "stage1",
    number: "01",
    title: "Content Engineering",
    duration: "6-8 weeks",
    icon: FileSearch,
    color: "primary",
    description: "We audit your existing training materials and architect the digital transformation strategy.",
    activities: [
      "Comprehensive content audit & gap analysis",
      "Learning objectives mapping",
      "Interactive module design",
      "Multimedia asset planning",
      "Assessment strategy development"
    ],
    before: "Scattered PDFs, inconsistent quality",
    after: "Structured, engaging digital curriculum"
  },
  {
    id: "stage2",
    number: "02",
    title: "Platform Development",
    duration: "8-10 weeks",
    icon: Wrench,
    color: "secondary",
    description: "We build your custom learning management system tailored to your specific needs.",
    activities: [
      "Custom LMS development",
      "User experience design",
      "Mobile-responsive interface",
      "Integration with existing systems",
      "Admin dashboard creation",
      "Analytics & reporting setup"
    ],
    before: "No digital infrastructure",
    after: "Robust, scalable e-learning platform"
  },
  {
    id: "stage3",
    number: "03",
    title: "Launch & Support",
    duration: "4 weeks",
    icon: Rocket,
    color: "action",
    description: "We ensure a smooth rollout and provide ongoing support for continuous improvement.",
    activities: [
      "Content migration & QA testing",
      "Instructor training & onboarding",
      "Phased rollout strategy",
      "Performance monitoring",
      "Ongoing technical support",
      "Monthly optimization reviews"
    ],
    before: "Uncertain launch readiness",
    after: "Confident global deployment"
  }
]

export function TransformationProcess() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-bg-light" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          <motion.h2 
            className="font-heading text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Our Three-Stage Transformation Process
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            From content audit to global launch in 18-22 weeks
          </motion.p>
        </motion.div>

        {/* Stages */}
        <div className="space-y-24">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...springConfig, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content side */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    {/* Stage number badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...springConfig, delay: index * 0.2 + 0.1 }}
                      className="inline-flex items-center gap-3"
                    >
                      <div className={`text-6xl font-heading font-bold ${
                        stage.color === 'primary' ? 'text-primary' :
                        stage.color === 'secondary' ? 'text-secondary' :
                        'text-action'
                      }/20`}>
                        {stage.number}
                      </div>
                      <div className="inline-flex px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
                        <span className="text-sm font-semibold text-gray-600">
                          {stage.duration}
                        </span>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...springConfig, delay: index * 0.2 + 0.2 }}
                    >
                      <h3 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                        {stage.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {stage.description}
                      </p>
                    </motion.div>

                    {/* Activities list */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...springConfig, delay: index * 0.2 + 0.3 }}
                      className="space-y-3"
                    >
                      {stage.activities.map((activity, actIndex) => (
                        <motion.div
                          key={activity}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ ...springConfig, delay: index * 0.2 + 0.4 + actIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            stage.color === 'primary' ? 'bg-primary/20 text-primary' :
                            stage.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                            'bg-action/20 text-action'
                          }`}>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{activity}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Visual side - Before/After */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: index * 0.2 + 0.2 }}
                    className={`${!isEven ? 'lg:order-1' : ''}`}
                  >
                    <div className={`relative bg-gradient-to-br ${
                      stage.color === 'primary' ? 'from-primary/10 to-primary/5' :
                      stage.color === 'secondary' ? 'from-secondary/10 to-secondary/5' :
                      'from-action/10 to-action/5'
                    } border ${
                      stage.color === 'primary' ? 'border-primary/20' :
                      stage.color === 'secondary' ? 'border-secondary/20' :
                      'border-action/20'
                    } rounded-2xl p-8 lg:p-12`}>
                      {/* Icon */}
                      <motion.div
                        className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${
                          stage.color === 'primary' ? 'from-primary to-primary/80' :
                          stage.color === 'secondary' ? 'from-secondary to-secondary/80' :
                          'from-action to-action/80'
                        } shadow-xl mb-8`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={springConfig}
                      >
                        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Before/After comparison */}
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Before</span>
                            <div className="flex-1 h-px bg-gray-200" />
                          </div>
                          <p className="text-gray-500 text-sm italic">{stage.before}</p>
                        </div>

                        <motion.div
                          className="flex justify-center"
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className={`w-8 h-8 ${
                            stage.color === 'primary' ? 'text-primary' :
                            stage.color === 'secondary' ? 'text-secondary' :
                            'text-action'
                          } transform rotate-90`} />
                        </motion.div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-green-600 uppercase tracking-wider">After</span>
                            <div className="flex-1 h-px bg-gray-200" />
                          </div>
                          <p className={`font-semibold ${
                            stage.color === 'primary' ? 'text-primary' :
                            stage.color === 'secondary' ? 'text-secondary' :
                            'text-action'
                          }`}>{stage.after}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Connecting line to next stage */}
                {index < stages.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-1/2 -bottom-12 transform -translate-x-1/2"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: index * 0.2 + 0.8 }}
                  >
                    <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Total timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-action/10 border-2 border-gray-200 rounded-full">
            <span className="text-gray-700 font-medium">Total Timeline:</span>
            <span className="text-3xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-action bg-clip-text text-transparent">
              18-22 Weeks
            </span>
          </div>
          <p className="mt-4 text-gray-600">From first consultation to global launch</p>
        </motion.div>
      </div>
    </section>
  )
}
