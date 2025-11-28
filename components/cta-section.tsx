"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#180A73] rounded-full blur-[150px] opacity-30" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#03A6A6] rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center">
          {/* Main CTA Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to build something<br />
            <span className="bg-gradient-to-r from-[#03A6A6] via-[#4981F2] to-[#05F2C7] bg-clip-text text-transparent">
              that actually works?
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Let's talk about your training needs. No sales pitch, just a conversation 
            about what you're trying to accomplish.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-[#03A6A6] to-[#4981F2] hover:from-[#4981F2] hover:to-[#03A6A6] text-white font-semibold px-10 py-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#03A6A6]/25 hover:shadow-[#4981F2]/40"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 px-10 py-6 rounded-xl transition-all duration-300"
            >
              <a href="mailto:barjyoussef5@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email Us Directly</span>
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-slate-600 mt-8">
            Usually respond within 24 hours • No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}
