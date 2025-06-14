export function SocialProof() {
  const companies = ["TechCorp", "DataFlow", "CloudSecure", "CyberGuard", "InfoTech", "SecureNet"]

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-300 mb-8">Trusted by 500+ tech companies worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <span className="text-slate-400 font-semibold text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f59e0b] mb-2">500+</div>
            <div className="text-slate-300">Companies Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f59e0b] mb-2">50K+</div>
            <div className="text-slate-300">Employees Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f59e0b] mb-2">$50M+</div>
            <div className="text-slate-300">Losses Prevented</div>
          </div>
        </div>
      </div>
    </section>
  )
}
