"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowRight } from "lucide-react"

export function LeadCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-8">
              <Mail className="w-16 h-16 text-[#6366F1] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Stop Failing Audits?</h2>
              <p className="text-xl text-slate-300">
                Get our free Cybersecurity Audit Checklist and see where your team stands.
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
                  className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Button type="submit" className="bg-[#6366F1] hover:bg-[#5B21B6] px-6" disabled={isSubmitted}>
                  {isSubmitted ? (
                    "Sent!"
                  ) : (
                    <>
                      Get Checklist
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <p className="text-sm text-slate-400 mt-4">No spam. Unsubscribe anytime. Used by 500+ IT leaders.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
