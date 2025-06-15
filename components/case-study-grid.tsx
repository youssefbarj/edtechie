import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react"

export function CaseStudyGrid() {
  const caseStudies = [
    {
      company: "Mid-Size Healthcare System (250 employees)",
      industry: "Safety & Compliance",
      challenge: "432 HIPAA compliance PDFs, 28% completion rate, failed state audit",
      solution: "Transformed top 50 critical policies into interactive modules with decision trees",
      results: [
        "Completion rate: 28% → 94% in 4 months",
        "Passed follow-up audit with zero violations",
        "Reduced training time from 12 hours to 6 hours per employee",
      ],
      icon: Shield,
      color: "text-green-400",
    },
    {
      company: "Regional Healthcare System",
      industry: "Healthcare Compliance",
      challenge: "HIPAA training was boring PowerPoints with poor engagement and failed audits",
      solution: "Interactive HIPAA scenarios with real-world decision trees and immediate feedback",
      results: [
        "89% completion rate vs previous 31%",
        "Passed compliance audit on first try",
        "Reduced training costs by 45%",
      ],
      icon: Users,
      color: "text-blue-400",
    },
    {
      company: "Financial Services Firm",
      industry: "Financial Compliance",
      challenge: "Regulatory training across multiple frameworks, low engagement, high turnover",
      solution: "Gamified compliance training with progress tracking and certification paths",
      results: [
        "Achieved 100% regulatory compliance",
        "Employee satisfaction scores up 60%",
        "Reduced onboarding time by 50%",
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
