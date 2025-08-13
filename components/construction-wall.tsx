"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Wrench, AlertCircle } from "lucide-react"
import Image from "next/image"
import { notifySignup } from "@/app/actions"

export function ConstructionWall() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError("")

    try {
      const result = await notifySignup(formData)

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError(result.error || "Failed to sign up. Please try again.")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#180A73] to-[#1e293b]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#03A6A6] via-[#4981F2] to-[#180A73] rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <Image
                  src="/images/edtechie-logo-official.png"
                  alt="EdTechie Corp - E-Learning & Digital Training"
                  width={600}
                  height={180}
                  className="h-24 md:h-32 w-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Simple Construction Message */}
          <div className="space-y-8">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Wrench className="w-8 h-8 text-orange-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-orange-400">Under Construction</h1>
              <Wrench className="w-8 h-8 text-orange-400" />
            </div>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              <span className="text-[#4981F2] font-bold">EdTechie Corp</span> is building something amazing.
              <br />
              <span className="text-[#03A6A6]">We'll be back soon!</span>
            </p>
          </div>

          {/* Email Signup */}
          <Card className="bg-slate-800/50 border-slate-700 max-w-xl mx-auto">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-[#4981F2] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Get Notified</h3>
                    <p className="text-slate-400">We'll let you know when we're ready!</p>
                  </div>

                  <form action={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 disabled:opacity-50"
                    />

                    {error && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#180A73] hover:bg-[#4981F2] disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Notify Me"}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
                  <p className="text-slate-400">We'll notify you when we launch.</p>
                  <p className="text-xs text-slate-500 mt-2">✅ Signup recorded successfully</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center space-y-4">
            <p className="text-slate-400">Need to reach us?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:barjyoussef5@gmail.com" className="text-[#03A6A6] hover:text-[#05F2C7] transition-colors">
                📧 barjyoussef5@gmail.com
              </a>
              <a href="tel:0644562660" className="text-[#03A6A6] hover:text-[#05F2C7] transition-colors">
                📞 0644562660
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
