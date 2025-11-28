"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
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
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#180A73]/10 via-transparent to-[#03A6A6]/5" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/images/edtechie-logo-official.png"
            alt="EdTechie Corp"
            width={280}
            height={84}
            className="h-16 w-auto mx-auto"
            priority
          />
        </div>

        {/* Simple Message */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We're working on something new.
          </h1>
          <p className="text-slate-400 text-lg">
            Our website is currently being updated. Drop your email below and we'll let you know when we're live.
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-md mx-auto mb-16">
          {!isSubmitted ? (
            <form action={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  disabled={isLoading}
                  className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 h-12 px-4"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#03A6A6] hover:bg-[#03A6A6]/90 text-white font-medium h-12 px-6"
                >
                  {isLoading ? "..." : "Notify Me"}
                </Button>
              </div>

              {error && (
                <div className="flex items-center justify-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-[#03A6A6]">
              <CheckCircle className="w-5 h-5" />
              <span>Got it! We'll be in touch.</span>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="text-sm text-slate-500">
          <p className="mb-2">Questions? Reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:barjyoussef5@gmail.com" 
              className="text-slate-400 hover:text-[#03A6A6] transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              barjyoussef5@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
