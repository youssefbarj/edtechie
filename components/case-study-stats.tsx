export function CaseStudyStats() {
  const stats = [
    { label: "Average Audit Pass Rate", value: "95%", description: "vs 33% industry average" },
    { label: "Incident Reduction", value: "73%", description: "within 6 months" },
    { label: "Training Completion", value: "89%", description: "vs 34% traditional training" },
    { label: "ROI Timeline", value: "6 months", description: "average payback period" },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Consistent Results Across Industries</h2>
          <p className="text-xl text-slate-300">
            These aren't cherry-picked success stories. This is what happens when training actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#6366F1] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
