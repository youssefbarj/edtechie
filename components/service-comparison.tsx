import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ServiceComparison() {
  const comparisons = [
    {
      feature: "Interactive Simulations",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Real-World Scenarios",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Measurable Progress",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Audit-Ready Reports",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Team Engagement",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Custom Threat Modeling",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "24/7 Support",
      traditional: false,
      edtechie: true,
    },
    {
      feature: "Boring PowerPoints",
      traditional: true,
      edtechie: false,
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">EdTechie vs Traditional Training</h2>
          <p className="text-xl text-slate-300">See why interactive beats boring every time.</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div></div>
              <CardTitle className="text-red-400">Traditional Training</CardTitle>
              <CardTitle className="text-cyan-400">EdTechie Training</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 items-center py-3 border-b border-slate-700 last:border-b-0"
                >
                  <div className="text-white font-medium">{item.feature}</div>
                  <div className="text-center">
                    {item.traditional ? (
                      <Check className="w-6 h-6 text-red-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-slate-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {item.edtechie ? (
                      <Check className="w-6 h-6 text-cyan-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-slate-500 mx-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
