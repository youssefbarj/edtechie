import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react"

export function CaseStudyGrid() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS Platform",
      challenge: "Failed SOC 2 audit due to inadequate security training",
      solution: "Custom phishing simulations and incident response training",
      results: [
        "Passed SOC 2 audit in 3 months",
        "95% reduction in successful phishing attempts",
        "Saved $2.3M in potential breach costs",
      ],
      icon: Shield,
      color: "text-green-400",
    },
    {
      company: "DataSecure Inc",
      industry: "Financial Services",
      challenge: "High employee turnover in security team, knowledge gaps",
      solution: "Comprehensive ready-made training program with certification",
      results: ["89% training completion rate", "Reduced security incidents by 67%", "Improved team retention by 45%"],
      icon: Users,
      color: "text-blue-400",
    },
    {
      company: "CloudTech Corp",
      industry: "Cloud Infrastructure",
      challenge: "Multiple compliance frameworks, complex requirements",
      solution: "Multi-framework training covering SOC 2, ISO 27001, and NIST",
      results: [
        "Achieved triple compliance certification",
        "Reduced audit preparation time by 60%",
        "Increased client trust and contracts by 40%",
      ],
      icon: TrendingUp,
      color: "text-cyan-400",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <study.icon className={`w-8 h-8 ${study.color}`} />
                  <div>
                    <CardTitle className="text-xl text-white">{study.company}</CardTitle>
                    <p className="text-sm text-slate-400">{study.industry}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Challenge</h4>
                  <p className="text-slate-300 text-sm">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-slate-300 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-slate-300 text-sm flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
