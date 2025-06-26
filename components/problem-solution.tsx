import { AlertTriangle, CheckCircle, TrendingUp, Globe } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#4981F2] mb-4">The Problem</h2>
              <p className="text-xl text-slate-300 mb-8">
                Your compliance training is putting people to sleep. What doesn't engage doesn't stick.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Death by PowerPoint Syndrome</h3>
                  <p className="text-slate-400">
                    PDFs and presentations don't engage learners, leading to poor retention and failed compliance across
                    all industries.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Static Content Doesn't Stick</h3>
                  <p className="text-slate-400">
                    Traditional training materials result in 40% retention rates and high failure rates across HR,
                    safety, and compliance areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Expensive Agencies vs Risky Freelancers</h3>
                  <p className="text-slate-400">
                    Premium agencies charge $50K+ while freelancers lack business expertise and reliability. You need
                    the smart choice in between.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#03A6A6] mb-4">The EdTechie Solution</h2>
              <p className="text-xl text-slate-300 mb-8">
                Transform static content into interactive experiences that learners actually want to complete.
                <span className="text-[#03A6A6] font-semibold">
                  {" "}
                  Agency credibility without agency premium pricing.
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#03A6A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">
                    Modern Tool Mastery + Strategic Expertise
                  </h3>
                  <p className="text-slate-400">
                    Template-based approach eliminates development bottlenecks. Professional results through efficient
                    global operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-[#05F2C7] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">10x Development Speed</h3>
                  <p className="text-slate-400">
                    60-80% faster than custom development with measurable engagement tracking and knowledge retention
                    analytics.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Global Team, Cultural Expertise</h3>
                  <p className="text-slate-400">
                    Better time zone alignment than Asian competitors. French/English fluency with Western business
                    understanding across all compliance areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
