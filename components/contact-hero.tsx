import { Zap } from "lucide-react"

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-[#1A1F5C] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-[#3D2C8D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#00CED1]/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF8559]/10 border border-[#FF8559]/25 mb-8">
            <Zap className="w-3.5 h-3.5 text-[#FF8559]" strokeWidth={2.5} />
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#FF8559]">Start Your Transformation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#FDFBD4]">Let&apos;s talk about</span>
            <br />
            <span className="text-[#00CED1]">your transformation.</span>
          </h1>
          
          <p className="text-lg text-[#FDFBD4]/60 leading-relaxed">
            Whether you&apos;re a beauty academy, professional institute, or vocational school—
            tell us about your training content, and we&apos;ll show you how to transform it.
          </p>
        </div>
      </div>
    </section>
  )
}
