import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, TrendingUp, Users } from "lucide-react"

export function CaseStudyGrid() {
  const caseStudies = [
    {
      company: "Mid-Size Healthcare System (250 employees)",
      industry: "Healthcare HIPAA Compliance",
      challenge: "432 HIPAA compliance PDFs, 28% completion rate, failed state audit",
      solution: "Transformed top 50 critical policies into interactive modules with decision trees",
      results: [
        "Completion rate: 28% → 94% in 4 months",
        "Passed follow-up audit with zero violations",
        "Reduced training time from 12 hours to 6 hours per employee",
      ],
      icon: Heart,
      color: "text-green-400",
    },
    {
      company: "Regional Manufacturing Plant (180 employees)",
      industry: "Manufacturing Safety Training",
      challenge: "OSHA safety manuals in static PDF, high incident rates, poor engagement",
      solution: "Interactive safety scenarios with VR-style simulations and real workplace situations",
      results: ["Incidents reduced 60% within 6 months", "Safety scores: 65% → 91%", "Engagement increased 300%"],
      icon: Shield,
      color: "text-blue-400",
    },
    {
      company: "Financial Services Firm (120 employees)",
      industry: "Financial Compliance",
      challenge: "Multiple regulatory frameworks in boring PowerPoints, low engagement",
      solution: "Gamified compliance learning paths with real-world scenarios and progress tracking",
      results: ["Achieved 100% regulatory compliance", "Employee satisfaction up 85%", "Audit prep time reduced 70%"],
      icon: TrendingUp,
      color: "text-cyan-400",
    },
    {
      company: "Corporate HR Department (300 employees)",
      industry: "HR Harassment Prevention",
      challenge: "Annual harassment training was click-through PowerPoint with poor retention",
      solution: "Interactive scenario-based training with multiple perspectives and outcomes",
      results: ["Completion: 45% → 96%", "HR incidents down 40%", "Feedback: 2.1/5 → 4.7/5"],
      icon: Users,
      color: "text-purple-400",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            Success Stories Across All Industries
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto">
            From healthcare to manufacturing to financial services - see how content transformation works everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full"
            >
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                  <study.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${study.color} flex-shrink-0 mt-1`} />
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl text-white leading-tight mb-1 sm:mb-2">
                      {study.company}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-slate-400">{study.industry}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2 text-sm sm:text-base">Challenge</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">Solution</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-2 text-sm sm:text-base">Results</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="text-slate-300 text-xs sm:text-sm flex items-start leading-relaxed"
                      >
                        <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 mt-4 sm:mt-6 py-2 sm:py-3 text-sm sm:text-base"
                >
                  Read Full Case Study
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
