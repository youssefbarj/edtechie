"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="bg-slate-950 p-8 lg:p-12">
      <Card className="bg-slate-800/50 border-slate-700 h-full">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
          </div>
          <p className="text-slate-400">Have questions? Need a custom quote? We're here to help.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isSubmitted ? (
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
                placeholder="Phone Number (Optional)"
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">What can we help you with?</label>
                <select
                  required
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                >
                  <option value="">Select an option</option>
                  <option value="demo">Schedule a demo</option>
                  <option value="pricing">Get pricing information</option>
                  <option value="custom">Custom training solution</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Textarea
                placeholder="Tell us more about your needs..."
                required
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 min-h-[120px]"
              />
              <Button type="submit" className="w-full bg-[#f59e0b] hover:bg-[#d97706] font-semibold py-3">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-4">
                Thanks for reaching out. We'll get back to you within 2 hours during business hours.
              </p>
              <p className="text-sm text-slate-500">For urgent matters, call us at 1-800-EDTECHIE</p>
            </div>
          )}

          <div className="border-t border-slate-700 pt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Prefer to talk?</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>📞 1-800-EDTECHIE (1-800-338-3244)</p>
              <p>📧 hello@edtechie.com</p>
              <p>🕒 Mon-Fri, 9 AM - 6 PM PST</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
