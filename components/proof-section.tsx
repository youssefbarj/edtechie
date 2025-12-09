"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Globe2, Star } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return (
    <div ref={ref} className="font-heading text-5xl lg:text-6xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function ProofSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-bg-light to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
        <motion.div 
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
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
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-action/10 border border-primary/20 rounded-full mb-6"
          >
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">PROVEN RESULTS</span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Institut Fandi Transformation
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            We took Morocco&apos;s #1 Beauty Academy from paper to global platform in{" "}
            <span className="font-semibold text-action">4 months</span>
          </motion.p>
        </motion.div>

        {/* Main case study card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="bg-gradient-to-br from-secondary/5 via-primary/5 to-action/5 border-2 border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          {/* Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-action rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  30-Year Legacy, Digitalized
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A prestigious beauty academy recognized across Morocco, now reaching students globally through interactive digital learning experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metrics grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                label: "Students Reached",
                value: 2000,
                suffix: "+",
                color: "from-primary to-primary/70",
                delay: 0.5
              },
              {
                icon: Globe2,
                label: "Countries",
                value: 3,
                suffix: "",
                color: "from-action to-action/70",
                delay: 0.6
              },
              {
                icon: Star,
                label: "Satisfaction",
                value: 4.9,
                suffix: "/5",
                color: "from-secondary to-secondary/70",
                delay: 0.7
              }
            ].map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: metric.delay }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={springConfig}
                >
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <metric.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className={`bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Timeline/Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.8 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"
          >
            <h4 className="font-heading text-xl font-bold text-gray-900 mb-6 text-center">
              The Transformation Journey
            </h4>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Month 1", activity: "Content audit & digital strategy" },
                { phase: "Month 2", activity: "Platform development & UX design" },
                { phase: "Month 3", activity: "Content migration & interactive modules" },
                { phase: "Month 4", activity: "Launch & global expansion" }
              ].map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springConfig, delay: 0.9 + index * 0.1 }}
                  className="relative"
                >
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-action rounded-full flex items-center justify-center text-white font-bold mb-3 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{step.phase}</div>
                    <div className="text-sm text-gray-600">{step.activity}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom quote/testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 1.0 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              This transformation validated our methodology and proved that comprehensive digital transformation is achievable in months, not years.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 1.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-action hover:from-primary/90 hover:to-action/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/20"
          >
            See Full Case Study
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
