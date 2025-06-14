import { AlertTriangle, CheckCircle, TrendingUp, Users } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-red-400 mb-4">The Problem</h2>
              <p className="text-xl text-slate-300 mb-8">
                Your team failed the cybersecurity audit. Again. Generic training isn't cutting it.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Failed Audits Cost Millions</h3>
                  <p className="text-slate-400">
                    Compliance failures lead to fines, lost contracts, and damaged reputation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Generic Training Doesn't Work</h3>
                  <p className="text-slate-400">One-size-fits-all solutions ignore your specific vulnerabilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Teams Aren't Engaged</h3>
                  <p className="text-slate-400">Boring presentations create checkbox compliance, not real security.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#f59e0b] mb-4">The EdTechie Solution</h2>
              <p className="text-xl text-slate-300 mb-8">
                Interactive simulations that mirror real attacks. Your team learns by doing, not watching.
                <span className="text-[#f59e0b] font-semibold">
                  {" "}
                  This is how EdTechie Corp fixes what others break.
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#f59e0b] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-World Scenarios</h3>
                  <p className="text-slate-400">Practice with actual attack vectors targeting your industry.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-[#f59e0b] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Measurable Progress</h3>
                  <p className="text-slate-400">Track improvement with detailed analytics and audit-ready reports.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-[#f59e0b] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Team Engagement</h3>
                  <p className="text-slate-400">Gamified learning that keeps your team coming back for more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
