"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1A1F5C] relative overflow-hidden">
      {/* Background with tech pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D2C8D]/20 via-transparent to-[#00CED1]/10" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,206,209,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,206,209,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF8559]/10 border border-[#FF8559]/30 mb-8">
            <Zap className="w-3.5 h-3.5 text-[#FF8559]" strokeWidth={2.5} />
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#FF8559]">Ready to Transform?</span>
          </div>

          {/* Headline - Transformation focused */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBD4] mb-6 leading-tight">
            Your training deserves to be
            <br />
            <span className="text-[#00CED1]">more than PDFs.</span>
          </h2>
          
          <p className="text-lg text-[#FDFBD4]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re a beauty academy, professional institute, or vocational school—
            we engineer the <span className="text-[#FDFBD4]">complete digital transformation</span> that 
            takes you from analog limitations to global reach.
          </p>

          {/* Transformation promise */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00CED1]/15 flex items-center justify-center">
                <span className="text-[#00CED1] text-lg">📄</span>
              </div>
              <div className="text-left">
                <div className="text-[#FDFBD4]/40 text-[12px] line-through">PDFs</div>
                <div className="text-[#00CED1] text-[14px] font-semibold">→ Interactive</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FF8559]/15 flex items-center justify-center">
                <span className="text-[#FF8559] text-lg">📍</span>
              </div>
              <div className="text-left">
                <div className="text-[#FDFBD4]/40 text-[12px] line-through">Local</div>
                <div className="text-[#FF8559] text-[14px] font-semibold">→ Global</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                <span className="text-[#D4AF37] text-lg">⏱️</span>
              </div>
              <div className="text-left">
                <div className="text-[#FDFBD4]/40 text-[12px]">Timeline</div>
                <div className="text-[#D4AF37] text-[14px] font-semibold">4 Months</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-[#FF8559] hover:bg-[#FF6B3D] text-white font-semibold text-[15px] px-8 py-6 rounded-xl transition-all duration-300 shadow-[0_4px_24px_rgba(255,133,89,0.3)] hover:shadow-[0_8px_32px_rgba(255,133,89,0.4)] hover:-translate-y-0.5"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Start Your Transformation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#00CED1]/40 text-[#00CED1] hover:text-[#00CED1] hover:bg-[#00CED1]/10 hover:border-[#00CED1]/60 text-[15px] px-8 py-6 rounded-xl transition-all duration-300"
            >
              <Link href="/case-studies">
                <span>See Transformation in Action</span>
              </Link>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-[13px] text-[#FDFBD4]/40 mt-8">
            Free consultation • Custom transformation roadmap • No upfront commitment
          </p>
        </div>
      </div>
    </section>
  )
}
