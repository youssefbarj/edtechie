import { Check, X } from "lucide-react"

export function ServiceComparison() {
  const comparisons = [
    {
      feature: "Global Student Access",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Interactive Content",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Progress Tracking",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Unlimited Scale",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "24/7 Availability",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Analytics & Insights",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Mobile Access",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Geographic Limitations",
      traditional: true,
      edtechie: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1F5C] to-[#1A1F5C]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FDFBD4] mb-4">
            Traditional Training vs
            <br />
            <span className="text-[#00CED1]">Digital Transformation</span>
          </h2>
          <p className="text-[#FDFBD4]/60 text-lg">
            See why digital beats analog every time.
          </p>
        </div>

        <div className="bg-[#3D2C8D]/10 rounded-2xl border border-[#3D2C8D]/30 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#3D2C8D]/30 bg-[#3D2C8D]/20">
            <div></div>
            <div className="text-center">
              <span className="text-[#FDFBD4]/50 text-sm font-semibold">Traditional</span>
            </div>
            <div className="text-center">
              <span className="text-[#00CED1] text-sm font-semibold">EdTechie</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#3D2C8D]/20">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center p-4 hover:bg-[#3D2C8D]/10 transition-colors"
              >
                <div className="text-[#FDFBD4]/80 text-[14px] font-medium">{item.feature}</div>
                <div className="text-center">
                  {item.traditional ? (
                    <Check className="w-5 h-5 text-[#FDFBD4]/30 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-[#FDFBD4]/20 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.edtechie ? (
                    <Check className="w-5 h-5 text-[#00CED1] mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-[#FDFBD4]/20 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
