import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function ServiceTiers() {
  const tiers = [
    {
      name: "Content Transformation Services",
      subtitle: "PDF to Interactive Magic",
      description:
        "Convert your existing PDFs, PowerPoints, and Word docs into engaging interactive e-learning experiences.",
      features: [
        "Transform existing content",
        "Add quizzes & assessments",
        "Interactive scenarios",
        "Gamification elements",
        "HTML5/SCORM output",
        "Mobile-responsive design",
        "LMS integration ready",
        "2-week turnaround",
      ],
      cta: "Stop Losing Learners - Book Content Audit",
      price: "Get Custom Quote",
      popular: false,
      perfectFor: "Companies with existing materials, quick wins, budget-conscious",
    },
    {
      name: "Custom Course Development",
      subtitle: "Built from Scratch with SME Collaboration",
      description: "Complete courses with advanced simulations, serious games, and complex scenarios.",
      features: [
        "Everything in Transformation",
        "SME collaboration sessions",
        "Advanced simulations",
        "Serious games integration",
        "Custom graphics & media",
        "Stakeholder meetings",
        "Complete instructional design",
        "Iterative development process",
      ],
      cta: "Stop Losing Learners - Book Content Audit",
      price: "Get Custom Quote",
      popular: true,
      perfectFor: "New programs, complex subject matter, higher engagement needs",
    },
    {
      name: "Learning Infrastructure Solutions",
      subtitle: "Complete LMS Ecosystem",
      description: "Full LMS setup, integrations, ongoing support, and dedicated success management.",
      features: [
        "Everything in Custom",
        "LMS selection & setup",
        "System integrations",
        "Analytics dashboards",
        "Ongoing course support",
        "Training for your team",
        "Monthly content updates",
        "Dedicated success manager",
      ],
      cta: "Stop Losing Learners - Book Content Audit",
      price: "Get Custom Quote",
      popular: false,
      perfectFor: "Starting from scratch, ongoing partnership, multi-department needs",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            Choose Your Content Transformation Approach
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto">
            Fast transformation or complete custom development. Both get your learners engaged across all compliance
            areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full ${
                tier.popular ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#6366F1] to-[#5B21B6] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{tier.name}</CardTitle>
                <p className="text-cyan-400 font-semibold text-sm sm:text-base lg:text-lg">{tier.subtitle}</p>
                <div className="mt-3 sm:mt-4">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">{tier.price}</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm">Pricing based on scope and complexity</p>
                <p className="text-slate-300 mt-2 text-sm sm:text-base">{tier.description}</p>
                <div className="mt-3 p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-xs sm:text-sm text-slate-400">
                    <span className="font-semibold text-cyan-400">Perfect for:</span> {tier.perfectFor}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
                <ul className="space-y-2 sm:space-y-3 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full mt-auto ${
                    tier.popular ? "bg-[#6366F1] hover:bg-[#5B21B6]" : "bg-slate-700 hover:bg-slate-600"
                  } transition-all duration-300 py-3 sm:py-4 text-sm sm:text-base`}
                >
                  <Link href="/contact" className="flex items-center justify-center space-x-2">
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className="text-slate-400 mb-4 text-sm sm:text-base">Not sure which option is right for you?</p>
          <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3">
            <Link href="/contact">Schedule Content Transformation Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
