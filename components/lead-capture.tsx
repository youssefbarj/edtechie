"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, ArrowRight } from "lucide-react"

export function LeadCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-[#1A1F5C]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#3D2C8D]/30 to-[#00CED1]/10 rounded-2xl border border-[#3D2C8D]/30 p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#FF8559]/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-[#FF8559]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FDFBD4] mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg text-[#FDFBD4]/60">
              Get a free consultation and custom transformation roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-[#1A1F5C]/80 border-[#3D2C8D]/50 text-[#FDFBD4] placeholder-[#FDFBD4]/40 focus:border-[#00CED1]"
              />
              <Button 
                type="submit" 
                className="bg-[#FF8559] hover:bg-[#FF6B3D] text-white px-6" 
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  "Sent! ✓"
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="text-sm text-[#FDFBD4]/40 mt-4">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
