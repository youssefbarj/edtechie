import { AlertTriangle, CheckCircle, TrendingUp, Users } from "lucide-react"

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
                    PDFs and presentations don't engage learners, leading to poor retention and failed compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Static Content Doesn't Stick</h3>
                  <p className="text-slate-400">
                    Traditional training materials result in 40% retention rates and high failure rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Audit Failures Are Just Symptoms</h3>
                  <p className="text-slate-400">
                    The real problem is boring content that learners ignore or forget immediately.
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
                  This is how EdTechie Corp transforms boring into brilliant.
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#03A6A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Content Transformation Magic</h3>
                  <p className="text-slate-400">
                    Convert your existing PDFs, PowerPoints, and Word docs into engaging interactive e-learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-[#05F2C7] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Measurable Engagement Tracking</h3>
                  <p className="text-slate-400">
                    Track completion rates, engagement metrics, and knowledge retention with detailed analytics.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-[#4981F2] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FEFFFB] mb-2">Cross-Industry Expertise</h3>
                  <p className="text-slate-400">
                    From HR compliance to safety training to cybersecurity - we transform content across all areas.
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
