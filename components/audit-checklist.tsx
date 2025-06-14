"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, CheckCircle, AlertTriangle, FileText } from "lucide-react"

export function AuditChecklist() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const checklistItems = [
    "Employee security awareness assessment",
    "Password policy compliance review",
    "Multi-factor authentication implementation",
    "Data encryption standards verification",
    "Incident response plan documentation",
    "Access control and permissions audit",
    "Third-party vendor security assessment",
    "Network security configuration review",
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Free Cybersecurity Audit Checklist</h2>
              <p className="text-xl text-slate-300 mb-6">
                The same checklist our experts use to evaluate enterprise security posture.
                <span className="text-red-400 font-semibold"> Don't fail your next audit.</span>
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 text-cyan-400 mr-2" />
                What's Included:
              </h3>
              <ul className="space-y-2">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-400 font-semibold mb-1">Audit Failure Alert</p>
                  <p className="text-slate-300 text-sm">
                    67% of companies fail their first cybersecurity audit. This checklist covers the most common failure
                    points.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Download Your Free Checklist</CardTitle>
              <p className="text-slate-400">Used by 500+ IT leaders worldwide</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Company name"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Your role (e.g., CISO, IT Director)"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#6366F1] hover:bg-[#5B21B6] font-semibold">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free Checklist
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Checklist Sent!</h3>
                  <p className="text-slate-400">Check your email for the download link and bonus security tips.</p>
                </div>
              )}

              <div className="text-center">
                <p className="text-xs text-slate-500">No spam. Unsubscribe anytime. We respect your privacy.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
