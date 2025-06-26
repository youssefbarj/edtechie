export function SocialProof() {
  const companies = [
    "Healthcare Systems",
    "Manufacturing Corp",
    "Financial Services",
    "HR Solutions Inc",
    "Safety Training Co",
    "Compliance Partners",
  ]

  const industries = ["Healthcare", "Manufacturing", "Financial Services", "Corporate HR", "Education", "Government"]

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-300 mb-8">
            Trusted by organizations across every industry and compliance area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-[#03A6A6]/50 transition-all duration-300"
              >
                <span className="text-slate-400 font-semibold text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-slate-300 mb-6">Industries We Transform Content For:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800/50 rounded-full text-slate-300 text-sm border border-slate-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4981F2] mb-2">1000+</div>
            <div className="text-slate-300">Organizations Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4981F2] mb-2">100K+</div>
            <div className="text-slate-300">Learners Engaged</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4981F2] mb-2">$25M+</div>
            <div className="text-slate-300">Training Costs Saved Through Efficiency</div>
          </div>
        </div>
      </div>
    </section>
  )
}
