export function CaseStudyStats() {
  const stats = [
    { 
      label: "Content Digitalized", 
      value: "30 years", 
      description: "of proven curriculum transformed",
      color: "#00CED1"
    },
    { 
      label: "Time to Launch", 
      value: "4 months", 
      description: "from kickoff to live platform",
      color: "#3D2C8D"
    },
    { 
      label: "Global Reach", 
      value: "3+ countries", 
      description: "and counting",
      color: "#FF8559"
    },
    { 
      label: "Active Students", 
      value: "2,000+", 
      description: "on the platform",
      color: "#D4AF37"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1F5C] to-[#1A1F5C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FDFBD4] mb-4">
            Transformation by the Numbers
          </h2>
          <p className="text-[#FDFBD4]/60 text-lg">
            Real results from a real transformation project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#3D2C8D]/10 rounded-xl border border-[#3D2C8D]/20 p-6 text-center"
            >
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-[#FDFBD4] font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-[#FDFBD4]/50">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
