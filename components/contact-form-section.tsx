"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, FileCheck, Rocket } from "lucide-react"

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
}

const timeline = [
  {
    icon: Mail,
    title: "Step 1: Initial Consultation",
    duration: "15-30 minutes",
    description: "We learn about your training content, audience, and goals. No sales pitch—just strategic discussion.",
    color: "primary"
  },
  {
    icon: FileCheck,
    title: "Step 2: Content Audit & Proposal",
    duration: "3-5 days",
    description: "We review your materials and provide a detailed transformation roadmap with timeline and investment.",
    color: "secondary"
  },
  {
    icon: Rocket,
    title: "Step 3: Launch Your Transformation",
    duration: "18-22 weeks",
    description: "We execute the three-stage process: Content Engineering → Platform Development → Launch & Support.",
    color: "action"
  }
]

export function ContactFormSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
          >
            <motion.h2 
              className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.1 }}
            >
              Let&apos;s Talk About Your Training
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.2 }}
            >
              No BS. No hard sell. Just honest conversation about your transformation potential.
            </motion.p>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white text-gray-900"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white text-gray-900"
                  placeholder="john@company.com"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white text-gray-900"
                  placeholder="Your Institute/Company"
                />
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white text-gray-900"
                >
                  <option value="">Select your industry</option>
                  <option value="beauty">Beauty & Cosmetology</option>
                  <option value="culinary">Culinary Arts</option>
                  <option value="technical">Technical/Vocational</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Challenge */}
              <div>
                <label htmlFor="challenge" className="block text-sm font-semibold text-gray-700 mb-2">
                  What&apos;s your biggest training challenge? *
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white text-gray-900 resize-none"
                  placeholder="Tell us about your current situation and what you'd like to achieve..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springConfig}
                className="w-full bg-action hover:bg-action/90 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-action/30"
              >
                Send Message
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours
              </p>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200 space-y-4"
            >
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">Or reach out directly:</h3>
              
              <a 
                href="mailto:barjyoussef5@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>barjyoussef5@gmail.com</span>
              </a>

              <a 
                href="tel:+212644562660"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span>+212 644 562 660</span>
              </a>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Morocco • Remote Worldwide</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - What Happens Next Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-gray-200 rounded-3xl p-8 lg:p-10">
              <h3 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                What Happens Next
              </h3>

              <div className="space-y-8">
                {timeline.map((step, index) => {
                  const Icon = step.icon
                  
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...springConfig, delay: 0.3 + index * 0.1 }}
                      className="relative"
                    >
                      {/* Connecting line */}
                      {index < timeline.length - 1 && (
                        <div className="absolute left-6 top-14 w-0.5 h-16 bg-gray-200" />
                      )}

                      <div className="flex gap-4">
                        {/* Icon */}
                        <motion.div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                            step.color === 'primary' ? 'from-primary to-primary/80' :
                            step.color === 'secondary' ? 'from-secondary to-secondary/80' :
                            'from-action to-action/80'
                          } flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={springConfig}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-heading text-lg font-bold text-gray-900">
                              {step.title}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500 font-medium">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Bottom note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">No commitment required.</span> The initial consultation 
                  is free, and we&apos;ll only proceed if we&apos;re confident we can deliver exceptional results for your organization.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
