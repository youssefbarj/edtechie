"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, Zap } from "lucide-react"

export function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-[#1A1F5C]">
      {/* Dramatic top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00CED1] via-[#3D2C8D] to-[#FF8559]" />
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3D2C8D]/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/25 mb-5">
            <Zap className="w-3.5 h-3.5 text-[#00CED1]" strokeWidth={2.5} />
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#00CED1]">Transformation Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBD4] leading-tight">
            The numbers speak for
            <br />
            <span className="text-[#00CED1]">themselves.</span>
          </h2>
        </div>

        {/* Transformation metrics - Before/After format */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {/* Metric 1 */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-[#3D2C8D]/20 to-transparent border border-[#3D2C8D]/20 h-full">
              <div className="text-center">
                <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FDFBD4]/40 mb-3">Content Format</div>
                <div className="space-y-2">
                  <div className="text-[#FDFBD4]/40 text-lg line-through">Static PDFs</div>
                  <div className="text-2xl text-[#00CED1]">↓</div>
                  <div className="text-3xl font-bold text-[#00CED1]">Interactive LMS</div>
                </div>
                <p className="text-[13px] text-[#FDFBD4]/50 mt-4">30 years of curriculum transformed</p>
              </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-[#3D2C8D]/20 to-transparent border border-[#3D2C8D]/20 h-full">
              <div className="text-center">
                <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FDFBD4]/40 mb-3">Student Reach</div>
                <div className="space-y-2">
                  <div className="text-[#FDFBD4]/40 text-lg line-through">Morocco Only</div>
                  <div className="text-2xl text-[#FF8559]">↓</div>
                  <div className="text-3xl font-bold text-[#FF8559]">3+ Countries</div>
                </div>
                <p className="text-[13px] text-[#FDFBD4]/50 mt-4">Geographic barriers eliminated</p>
              </div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-[#3D2C8D]/20 to-transparent border border-[#3D2C8D]/20 h-full">
              <div className="text-center">
                <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FDFBD4]/40 mb-3">Platform Scale</div>
                <div className="space-y-2">
                  <div className="text-[#FDFBD4]/40 text-lg line-through">~50 per class</div>
                  <div className="text-2xl text-[#D4AF37]">↓</div>
                  <div className="text-3xl font-bold text-[#D4AF37]">2,000+ Active</div>
                </div>
                <p className="text-[13px] text-[#FDFBD4]/50 mt-4">Unlimited concurrent capacity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-[#3D2C8D]/30 to-[#1A1F5C]/50 rounded-2xl p-8 lg:p-12 border border-[#8B7FB8]/15 relative overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
              <Quote className="w-10 h-10 lg:w-16 lg:h-16 text-[#00CED1]/15" strokeWidth={1} />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <blockquote className="text-xl sm:text-2xl text-[#FDFBD4] leading-relaxed font-medium mb-8">
                &ldquo;EdTechie didn&apos;t just digitize our courses—they <span className="text-[#00CED1]">transformed</span> how we 
                deliver education. Students in Europe can now access the same quality training that made us 
                <span className="text-[#D4AF37]"> Morocco&apos;s leading beauty academy</span>. 
                That was <span className="text-[#FF8559]">impossible</span> before.&rdquo;
              </blockquote>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00CED1] to-[#3D2C8D] flex items-center justify-center text-xl font-bold text-white">
                  IF
                </div>
                <div>
                  <div className="text-[#FDFBD4] font-semibold">Institut Fandi</div>
                  <div className="text-[13px] text-[#D4AF37]">🏆 1st Prize Winner, 21st National Competition</div>
                  <div className="text-[13px] text-[#FDFBD4]/50">30+ Years of Excellence in Beauty Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
