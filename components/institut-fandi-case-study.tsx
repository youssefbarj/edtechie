"use client"

import { motion } from "framer-motion"
import { Award, Users, Globe2, Star, CheckCircle2, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

export function InstitutFandiCaseStudy() {
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-action/10 border border-primary/20 rounded-full mb-6"
          >
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Featured Case Study</span>
          </motion.div>
          
          <motion.h1 
            className="font-heading text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Institut Fandi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-action rounded-xl"
          >
            <span className="text-white font-bold text-lg">Morocco&apos;s #1 Beauty Academy</span>
            <div className="w-px h-6 bg-white/30" />
            <span className="text-white/90 font-medium">30 Years of Excellence</span>
          </motion.div>
        </motion.div>

        {/* Challenge section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Despite 30 years of proven excellence in beauty education, Institut Fandi was constrained by physical 
              classroom limitations. Their expertise was trapped within Morocco&apos;s borders, unable to reach the 
              growing global demand for professional beauty training.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Geographic Limitation", value: "Local only", color: "red" },
                { label: "Delivery Method", value: "Paper-based", color: "red" },
                { label: "Scalability", value: "Severely limited", color: "red" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springConfig, delay: 0.4 + i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                  <p className="text-lg font-bold text-red-600">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Solution section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-action/5 border-2 border-primary/20 rounded-3xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">The Transformation</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We took Morocco&apos;s premier beauty academy from paper to global platform in 4 months. 
              Our comprehensive digital transformation enabled Institut Fandi to reach students worldwide 
              while maintaining their signature quality and pedagogy.
            </p>
            
            {/* Key improvements */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe2,
                  title: "Global Reach Unlocked",
                  description: "From local Moroccan academy to serving students in 3 countries",
                  color: "primary"
                },
                {
                  icon: CheckCircle2,
                  title: "Interactive Learning",
                  description: "Transformed static PDFs into engaging multimedia modules",
                  color: "secondary"
                },
                {
                  icon: TrendingUp,
                  title: "Revenue Expansion",
                  description: "New revenue streams without physical infrastructure investment",
                  color: "action"
                },
                {
                  icon: Clock,
                  title: "24/7 Accessibility",
                  description: "Students learn on their schedule, not fixed classroom times",
                  color: "primary"
                }
              ].map((improvement, i) => (
                <motion.div
                  key={improvement.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springConfig, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${
                    improvement.color === 'primary' ? 'from-primary to-primary/80' :
                    improvement.color === 'secondary' ? 'from-secondary to-secondary/80' :
                    'from-action to-action/80'
                  }`}>
                    <improvement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{improvement.title}</h3>
                    <p className="text-gray-600">{improvement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12 text-center">The Results</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                value: "2,000+",
                label: "Students Enrolled",
                color: "from-primary to-primary/70"
              },
              {
                icon: Globe2,
                value: "3",
                label: "Countries Reached",
                color: "from-action to-action/70"
              },
              {
                icon: Star,
                value: "4.9/5",
                label: "Satisfaction Rating",
                color: "from-secondary to-secondary/70"
              },
              {
                icon: Clock,
                value: "4 Months",
                label: "To Launch",
                color: "from-primary to-action"
              }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-8 text-center shadow-lg h-full">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className={`bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    <div className="font-heading text-5xl font-bold">
                      {metric.value}
                    </div>
                  </div>
                  
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20 rounded-3xl p-8 lg:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-primary mb-6">"</div>
              <blockquote className="text-2xl lg:text-3xl font-heading text-gray-900 leading-relaxed mb-8">
                EdTechie didn&apos;t just digitize our courses—they transformed how we deliver education. 
                Students in Europe can now access the same quality training that made us Morocco&apos;s 
                leading beauty academy.
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="font-bold text-xl text-gray-900">Ikram Mourtaday</div>
                <div className="text-gray-600">Founder & Academic Director, Institut Fandi</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-action hover:from-primary/90 hover:to-action/90 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl shadow-primary/20"
          >
            <Link href="/contact">
              Start Your Transformation
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
