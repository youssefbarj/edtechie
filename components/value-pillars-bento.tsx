"use client"

import { motion } from "framer-motion"
import { Globe, Clock, Gamepad2, CheckCircle2, DollarSign } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const pillars = [
  {
    id: "reach",
    title: "🌍 Broader Reach",
    problem: "Physical classrooms trap expertise in one location",
    solution: "Global accessibility. Paris to Casablaba, same content",
    icon: Globe,
    gradient: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    size: "large" as const,
    stat: "Global, not local"
  },
  {
    id: "learning",
    title: "📚 Deeper Learning",
    problem: "PDFs are passive, students skim and forget",
    solution: "Interactive modules, quizzes, multimedia",
    icon: Gamepad2,
    gradient: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    size: "large" as const,
    stat: "Interactive, not static"
  },
  {
    id: "engagement",
    title: "🎯 Higher Engagement",
    problem: "Static content = learners zone out",
    solution: "Serious games, simulations, scenarios",
    icon: CheckCircle2,
    gradient: "from-action/20 to-action/5",
    iconColor: "text-action",
    size: "medium" as const,
    stat: "70% better retention"
  },
  {
    id: "async",
    title: "⏰ Asynchronous Flexibility",
    problem: "Fixed schedules exclude busy professionals",
    solution: "24/7 access, learn anytime",
    icon: Clock,
    gradient: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    size: "medium" as const,
    stat: "10x larger market"
  },
  {
    id: "cost",
    title: "💰 Cost Reduction",
    problem: "Traditional training costs $1,200/employee",
    solution: "Digital = $120/employee (10x cheaper)",
    icon: DollarSign,
    gradient: "from-action/20 to-action/5",
    iconColor: "text-action",
    size: "medium" as const,
    stat: "Perfect compliance tracking"
  }
]

export function ValuePillarsBento() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-light to-white/50" />
      
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
            className="font-heading text-4xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Five Reasons Digital Training Wins
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            Five transformative advantages that make digital the only choice
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {pillars.map((pillar, index) => {
            const isLarge = pillar.size === "large"
            
            return (
              <motion.div
                key={pillar.id}
                className={`group ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...springConfig, delay: index * 0.1 }}
              >
                <motion.div
                  className={`h-full relative bg-gradient-to-br ${pillar.gradient} border border-gray-200 rounded-2xl p-8 overflow-hidden cursor-pointer`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={springConfig}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white/50 to-transparent blur-2xl" />
                  
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={springConfig}
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm`}>
                      <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="font-heading text-2xl font-bold text-gray-900">
                      {pillar.title}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 font-medium">
                        <span className="text-red-600">Problem:</span> {pillar.problem}
                      </p>
                      <p className="text-sm text-gray-700 font-medium">
                        <span className="text-green-600">Solution:</span> {pillar.solution}
                      </p>
                      {pillar.stat && (
                        <p className={`text-xs font-bold ${pillar.iconColor} uppercase tracking-wider mt-3`}>
                          → {pillar.stat}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Hover reveal effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-action to-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={springConfig}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Animated particles for large cards */}
                  {isLarge && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary/30 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to unlock these advantages for your organization?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-secondary/20"
          >
            Explore Our Approach
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
