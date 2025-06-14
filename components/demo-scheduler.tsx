"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Video, CheckCircle } from "lucide-react"

export function DemoScheduler() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const demoFeatures = [
    "Live phishing simulation walkthrough",
    "Custom threat scenario demonstration",
    "Real-time analytics dashboard tour",
    "Compliance reporting examples",
    "ROI calculator and pricing discussion",
  ]

  return (
    <section className="bg-slate-900 p-8 lg:p-12">
      <Card className="bg-slate-800/50 border-slate-700 h-full">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Video className="w-8 h-8 text-cyan-400" />
            <CardTitle className="text-2xl text-white">Schedule Live Demo</CardTitle>
          </div>
          <p className="text-slate-400">See EdTechie in action with a personalized demonstration</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isSubmitted ? (
            <>
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">What You'll See:</h3>
                <ul className="space-y-2">
                  {demoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                  <Input
                    placeholder="Last Name"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Work Email"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Input
                  placeholder="Company Name"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Input
                  placeholder="Your Role (e.g., CISO, IT Director)"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Input
                  placeholder="Company Size (# of employees)"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Textarea
                  placeholder="Tell us about your current security challenges..."
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 min-h-[100px]"
                />
                <Button type="submit" className="w-full bg-[#f59e0b] hover:bg-[#d97706] font-semibold py-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule My Demo
                </Button>
              </form>

              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Clock className="w-4 h-4" />
                <span>30-minute session • No commitment required • Available within 24 hours</span>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Demo Scheduled!</h3>
              <p className="text-slate-400 mb-4">
                We'll contact you within 2 hours to confirm your preferred time slot.
              </p>
              <p className="text-sm text-slate-500">Check your email for confirmation details and calendar invite.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
