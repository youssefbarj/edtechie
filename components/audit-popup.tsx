"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { X, Download, AlertTriangle } from "lucide-react"

export function AuditPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 30000) // Show after 30 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-slate-900 border-red-500/50 max-w-md w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-bold text-white">Audit Failure Alert</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-slate-300 text-sm">
              <strong className="text-red-400">67% of companies fail their first cybersecurity audit.</strong>
              Don't be one of them. Get our free audit checklist now.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800 border-slate-600 text-white"
                />
                <Button type="submit" className="w-full bg-[#6366F1] hover:bg-[#5B21B6]">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free Checklist
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="text-green-400 font-semibold mb-2">✓ Checklist Sent!</div>
                <p className="text-sm text-slate-400">Check your email for the download link.</p>
              </div>
            )}

            <p className="text-xs text-slate-500 text-center">No spam. Used by 500+ IT leaders.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
