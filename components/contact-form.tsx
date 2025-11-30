"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ArrowRight, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="bg-[#3D2C8D]/10 rounded-2xl border border-[#3D2C8D]/20 p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#00CED1]/20 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-[#00CED1]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#FDFBD4]">Start a Conversation</h2>
          <p className="text-[13px] text-[#FDFBD4]/50">Tell us about your training content</p>
        </div>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your Name"
              required
              className="bg-[#1A1F5C]/80 border-[#3D2C8D]/50 text-[#FDFBD4] placeholder-[#FDFBD4]/40 focus:border-[#00CED1]"
            />
            <Input
              placeholder="Organization"
              required
              className="bg-[#1A1F5C]/80 border-[#3D2C8D]/50 text-[#FDFBD4] placeholder-[#FDFBD4]/40 focus:border-[#00CED1]"
            />
          </div>
          <Input
            type="email"
            placeholder="Email Address"
            required
            className="bg-[#1A1F5C]/80 border-[#3D2C8D]/50 text-[#FDFBD4] placeholder-[#FDFBD4]/40 focus:border-[#00CED1]"
          />
          <div>
            <label className="block text-sm font-medium text-[#FDFBD4]/70 mb-2">What type of training do you offer?</label>
            <select
              required
              className="w-full bg-[#1A1F5C]/80 border border-[#3D2C8D]/50 text-[#FDFBD4] rounded-md px-3 py-2.5 focus:border-[#00CED1] focus:outline-none"
            >
              <option value="" className="bg-[#1A1F5C]">Select your industry</option>
              <option value="beauty" className="bg-[#1A1F5C]">Beauty & Aesthetics</option>
              <option value="vocational" className="bg-[#1A1F5C]">Vocational Training</option>
              <option value="professional" className="bg-[#1A1F5C]">Professional Certification</option>
              <option value="corporate" className="bg-[#1A1F5C]">Corporate Training</option>
              <option value="other" className="bg-[#1A1F5C]">Other</option>
            </select>
          </div>
          <Textarea
            placeholder="Tell us about your current training content and what you'd like to transform..."
            required
            className="bg-[#1A1F5C]/80 border-[#3D2C8D]/50 text-[#FDFBD4] placeholder-[#FDFBD4]/40 focus:border-[#00CED1] min-h-[120px]"
          />
          <Button 
            type="submit" 
            className="w-full bg-[#FF8559] hover:bg-[#FF6B3D] text-white font-semibold py-6 rounded-xl"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-[12px] text-[#FDFBD4]/40 text-center">
            Free consultation • Response within 24 hours
          </p>
        </form>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-[#00CED1]/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#00CED1]" />
          </div>
          <h3 className="text-xl font-semibold text-[#FDFBD4] mb-2">Message Sent!</h3>
          <p className="text-[#FDFBD4]/60 mb-4">
            Thank you for reaching out. We&apos;ll be in touch within 24 hours to discuss your transformation.
          </p>
        </div>
      )}
    </div>
  )
}
