import { BookOpen } from "lucide-react"

export function ResourceHero() {
  return (
    <section className="pt-32 pb-20 bg-[#1A1F5C] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-[#3D2C8D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#00CED1]/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/25 mb-8">
            <BookOpen className="w-3.5 h-3.5 text-[#00CED1]" strokeWidth={2.5} />
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#00CED1]">Learning Resources</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#FDFBD4]">Insights on</span>
            <br />
            <span className="text-[#00CED1]">digital transformation.</span>
          </h1>
          
          <p className="text-lg text-[#FDFBD4]/60 leading-relaxed">
            Guides, articles, and resources to help training organizations 
            navigate the journey from traditional to digital learning.
          </p>
        </div>
      </div>
    </section>
  )
}
