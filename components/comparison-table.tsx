"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const comparisons = [
  { metric: "Reach", traditional: "Local only", digital: "Global" },
  { metric: "Capacity", traditional: "20-50/class", digital: "Unlimited" },
  { metric: "Cost/learner", traditional: "$1,200", digital: "$120" },
  { metric: "Flexibility", traditional: "Fixed schedule", digital: "24/7" },
  { metric: "Completion", traditional: "40-60%", digital: "70-85%" },
  { metric: "Updates", traditional: "Months", digital: "Hours" },
  { metric: "Tracking", traditional: "Manual", digital: "Automated" }
]

export function ComparisonTable() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-dark to-secondary/5" />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
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
          <motion.h2 
            className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            The Numbers Don&apos;t Lie
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            Side-by-side comparison of traditional vs. digital training
          </motion.p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="bg-gradient-to-br from-secondary/10 to-bg-dark border border-secondary/20 rounded-2xl overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 bg-secondary/20 border-b border-secondary/20">
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-gray-400">Metric</h3>
            </div>
            <div className="p-6 border-l border-secondary/20">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-gray-500" />
                <h3 className="font-heading text-lg font-bold text-gray-500">Traditional</h3>
              </div>
            </div>
            <div className="p-6 border-l border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-lg font-bold text-primary">Digital</h3>
              </div>
            </div>
          </div>

          {/* Data rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.4 + index * 0.05 }}
              className="grid grid-cols-3 border-b border-secondary/10 last:border-b-0 hover:bg-secondary/5 transition-colors"
            >
              <div className="p-6">
                <p className="font-semibold text-white">{row.metric}</p>
              </div>
              <div className="p-6 border-l border-secondary/20">
                <p className="text-gray-500">{row.traditional}</p>
              </div>
              <div className="p-6 border-l border-primary/30 bg-primary/5">
                <p className="text-primary font-semibold">{row.digital}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-action/10 border border-primary/30 rounded-full">
            <span className="text-sm font-semibold text-gray-300">
              Average cost reduction: <span className="text-primary">90%</span> | 
              Completion rate improvement: <span className="text-action">+40%</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
