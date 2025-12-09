"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Smartphone, Globe, Activity } from "lucide-react"
import Link from "next/link"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

export function HeroTransformation() {
  const [isAfter, setIsAfter] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-dark to-secondary/10" />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left column - Copy */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={springConfig}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.1 }}
            >
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Your Training Deserves Better Than{" "}
                <span className="text-gray-400 line-through decoration-action decoration-4">PDFs</span>
                <span className="text-primary">.</span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.2 }}
            >
              We engineer digital learning experiences that reach broader audiences and cut costs by{" "}
              <span className="text-action font-semibold">90%</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springConfig}
                className="group inline-flex items-center gap-3 bg-action hover:bg-action/90 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-action/30"
              >
                <Link href="#contact" className="flex items-center gap-3">
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Before/After Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-secondary/30 to-bg-dark border border-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
              
              {/* Toggle button */}
              <div className="flex justify-center mb-8">
                <motion.button
                  onClick={() => setIsAfter(!isAfter)}
                  className="relative bg-secondary/20 rounded-full p-1 w-64 border border-secondary/30"
                  whileHover={{ scale: 1.02 }}
                  transition={springConfig}
                >
                  <motion.div
                    className="absolute top-1 left-1 w-[calc(50%-0.25rem)] h-[calc(100%-0.5rem)] bg-primary rounded-full"
                    animate={{ x: isAfter ? "100%" : "0%" }}
                    transition={springConfig}
                  />
                  <div className="relative flex justify-between">
                    <span className={`w-1/2 py-2 text-sm font-semibold text-center transition-colors z-10 ${!isAfter ? 'text-white' : 'text-gray-400'}`}>
                      Before
                    </span>
                    <span className={`w-1/2 py-2 text-sm font-semibold text-center transition-colors z-10 ${isAfter ? 'text-white' : 'text-gray-400'}`}>
                      After
                    </span>
                  </div>
                </motion.button>
              </div>

              {/* Content area */}
              <div className="relative h-96 overflow-hidden rounded-xl">
                {/* Before state */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: isAfter ? 0 : 1,
                    scale: isAfter ? 0.8 : 1,
                    filter: isAfter ? "blur(10px)" : "blur(0px)"
                  }}
                  transition={springConfig}
                >
                  <div className="text-center space-y-6">
                    <motion.div
                      animate={{ 
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <FileText className="w-32 h-32 mx-auto text-gray-600" strokeWidth={1} />
                    </motion.div>
                    <div className="space-y-2 text-gray-500">
                      <p className="text-sm font-medium">Static PDFs</p>
                      <p className="text-sm">Physical Classrooms</p>
                      <p className="text-sm">Limited Reach</p>
                    </div>
                  </div>
                </motion.div>

                {/* After state */}
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: isAfter ? 1 : 0,
                    scale: isAfter ? 1 : 0.8,
                    filter: isAfter ? "blur(0px)" : "blur(10px)"
                  }}
                  transition={springConfig}
                >
                  <div className="h-full flex flex-col items-center justify-center space-y-8">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Smartphone, color: "text-primary", label: "Interactive" },
                        { icon: Globe, color: "text-action", label: "Global" },
                        { icon: Activity, color: "text-primary", label: "Scalable" }
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={false}
                          animate={isAfter ? {
                            opacity: 1,
                            scale: 1,
                            y: 0
                          } : {
                            opacity: 0,
                            scale: 0.5,
                            y: 20
                          }}
                          transition={{
                            ...springConfig,
                            delay: i * 0.1
                          }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className={`p-4 rounded-xl bg-gradient-to-br from-secondary/40 to-bg-dark border border-secondary/30`}>
                            <item.icon className={`w-12 h-12 ${item.color}`} strokeWidth={1.5} />
                          </div>
                          <span className="text-xs text-gray-300 font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {isAfter && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springConfig, delay: 0.4 }}
                        className="text-center space-y-2"
                      >
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">2,000+</div>
                            <div className="text-xs text-gray-400">Students</div>
                          </div>
                          <div className="w-px h-8 bg-secondary/30" />
                          <div className="text-center">
                            <div className="text-2xl font-bold text-action">3</div>
                            <div className="text-xs text-gray-400">Countries</div>
                          </div>
                          <div className="w-px h-8 bg-secondary/30" />
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">24/7</div>
                            <div className="text-xs text-gray-400">Access</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Transformation badge */}
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold">
                  ⚡ Digital Transformation in 4 Months
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
