import { Zap } from "lucide-react"

export function CaseStudyHero() {
  return (
    <section className="pt-32 pb-20 bg-[#1A1F5C] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-[#3D2C8D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#00CED1]/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 mb-8">
            <span className="text-[#D4AF37]">🏆</span>
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#D4AF37]">Transformation Success</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#FDFBD4]">Institut Fandi:</span>
            <br />
            <span className="text-[#00CED1]">A Transformation Story</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#FDFBD4]/60 max-w-2xl mx-auto leading-relaxed">
            Morocco&apos;s #1 beauty academy went from static PDFs and local limitations 
            to a global e-learning platform in just <span className="text-[#FF8559] font-semibold">4 months</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
