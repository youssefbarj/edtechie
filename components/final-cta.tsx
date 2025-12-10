"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const benefits = [
  "Reach learners anywhere",
  "Deeper, more engaging content",
  "24/7 flexible access",
  "Reduce costs by 10x",
  "Track everything for compliance"
]

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary" />
      
      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-action/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Decorative shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          <motion.h2 
            className="font-heading text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Ready to Transform Your Training?
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            Join leading training organizations who&apos;ve already made the leap to digital
          </motion.p>
        </motion.div>

        {/* Benefits checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-12"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springConfig, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 bg-action rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={springConfig}
                  >
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </motion.div>
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className="group inline-flex items-center gap-3 bg-action hover:bg-action/90 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl shadow-action/40"
          >
            <Link href="/contact" className="flex items-center gap-3">
              <span>Start Your Transformation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg px-10 py-5 rounded-xl"
          >
            <Link href="/services">
              Schedule a Demo
            </Link>
          </motion.button>
        </motion.div>

        {/* Tertiary link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.9 }}
          className="mt-8"
        >
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors group"
          >
            <span>See More Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Social proof tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 1.0 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-sm">
            Trusted by leading training institutions across 3 countries
          </p>
        </motion.div>
      </div>
    </section>
  )
}
