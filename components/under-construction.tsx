"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, Shield, Wrench, CheckCircle } from "lucide-react"
import Image from "next/image"

export function UnderConstruction() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#180A73] to-[#1e293b]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#03A6A6] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#4981F2] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#05F2C7] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#4981F2] rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/edtechie-logo-official.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={400}
              height={120}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Construction Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#180A73] to-[#4981F2] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Wrench className="w-12 h-12 text-white animate-bounce" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#03A6A6] rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#180A73] to-[#4981F2] bg-clip-text text-transparent">
                Under Construction
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're building something amazing! <span className="text-[#4981F2] font-bold">EdTechie Corp</span> is
              upgrading our cybersecurity training platform to serve you better.
            </p>
          </div>

          {/* Countdown Timer */}
          <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Expected Launch</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#180A73] mb-2">{timeLeft.days}</div>
                  <div className="text-sm text-slate-400">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4981F2] mb-2">{timeLeft.hours}</div>
                  <div className="text-sm text-slate-400">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#03A6A6] mb-2">{timeLeft.minutes}</div>
                  <div className="text-sm text-slate-400">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#05F2C7] mb-2">{timeLeft.seconds}</div>
                  <div className="text-sm text-slate-400">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What We're Building */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-[#180A73] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Enhanced Security Training</h3>
                <p className="text-slate-400 text-sm">More interactive simulations and real-world scenarios</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-[#4981F2] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Better User Experience</h3>
                <p className="text-slate-400 text-sm">Streamlined interface and improved performance</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-[#03A6A6] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
                <p className="text-slate-400 text-sm">Detailed reporting and compliance tracking</p>
              </CardContent>
            </Card>
          </div>

          {/* Email Signup */}
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-[#4981F2] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Get Notified When We Launch</h3>
                <p className="text-slate-300">
                  Be the first to experience our enhanced cybersecurity training platform.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                    <Button type="submit" className="bg-[#180A73] hover:bg-[#4981F2] px-8">
                      Notify Me
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
                  <p className="text-slate-400">We'll notify you as soon as we launch.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center space-y-4">
            <p className="text-slate-400">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:hello@edtechiecorp.com" className="text-[#03A6A6] hover:text-[#05F2C7] transition-colors">
                📧 hello@edtechiecorp.com
              </a>
              <a href="tel:1-800-EDTECHIE" className="text-[#03A6A6] hover:text-[#05F2C7] transition-colors">
                📞 1-800-EDTECHIE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
