import { Zap, FileText, Server, Rocket } from "lucide-react"

export function ServiceHero() {
  return (
    <section className="pt-32 pb-20 bg-[#1A1F5C] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-[#3D2C8D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#00CED1]/10 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,206,209,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/25 mb-8">
            <Zap className="w-3.5 h-3.5 text-[#00CED1]" strokeWidth={2.5} />
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#00CED1]">Transformation Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#FDFBD4]">Three stages to</span>
            <br />
            <span className="text-[#00CED1]">digital transformation.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#FDFBD4]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We engineer complete transformations for training organizations—from content 
            digitalization to platform development to successful launch.
          </p>

          {/* Stage indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#3D2C8D]/20 border border-[#3D2C8D]/30">
              <FileText className="w-5 h-5 text-[#00CED1]" />
              <span className="text-[#FDFBD4]/80 text-sm font-medium">Stage 1: Content</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#3D2C8D]/20 border border-[#3D2C8D]/30">
              <Server className="w-5 h-5 text-[#3D2C8D]" />
              <span className="text-[#FDFBD4]/80 text-sm font-medium">Stage 2: Platform</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#3D2C8D]/20 border border-[#3D2C8D]/30">
              <Rocket className="w-5 h-5 text-[#FF8559]" />
              <span className="text-[#FDFBD4]/80 text-sm font-medium">Stage 3: Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
