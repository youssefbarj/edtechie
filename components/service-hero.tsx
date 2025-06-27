import { Shield, Zap, Target } from "lucide-react"

export function ServiceHero() {
  return (
    <section className="pt-32 sm:pt-36 lg:pt-40 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-[#6366F1]">Professional</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              E-Learning Content Transformation Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Specialized content transformation team - delivering agency-quality results at competitive rates.
            <span className="text-[#6366F1] font-semibold">
              {" "}
              EdTechie Corp gets your learners engaged and compliant fast.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#6366F1]" />
              <span>PDF to Interactive</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-[#6366F1]" />
              <span>Deploy in Days</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-[#6366F1]" />
              <span>Measurable Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
