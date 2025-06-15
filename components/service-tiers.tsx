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
      cta: "Stop Losing Learners - Book Free Audit",
      price: "Get Custom Quote",
      popular: false,
    },
    {
      name: "Custom Course Development",
      subtitle: "Built from Scratch",
      description: "Build comprehensive courses from scratch with SME collaboration and advanced simulations.",
      features: [
        "Everything in Transformation",
        "Custom course development",
        "SME collaboration sessions",
        "Advanced simulations",
        "Serious games integration",
        "Stakeholder meetings",
        "Complete instructional design",
        "Ongoing iterations",
      ],
      cta: "Stop Losing Learners - Book Free Audit",
      price: "Get Custom Quote",
      popular: true,
    },
    {
      name: "Learning Infrastructure",
      subtitle: "Complete LMS Solution",
      description: "Full learning management system setup with ongoing course development support.",
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
      cta: "Stop Losing Learners - Book Free Audit",
      price: "Get Custom Quote",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Content Transformation Approach</h2>
          <p className="text-xl text-slate-300">
            Fast transformation or complete custom development. Both get your learners engaged.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 ${
                tier.popular ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#6366F1] to-[#5B21B6] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                <p className="text-cyan-400 font-semibold">{tier.subtitle}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-cyan-400">{tier.price}</span>
                </div>
                <p className="text-slate-400 text-sm">Pricing based on scope and complexity</p>
                <p className="text-slate-300 mt-2">{tier.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    tier.popular ? "bg-[#6366F1] hover:bg-[#5B21B6]" : "bg-slate-700 hover:bg-slate-600"
                  } transition-all duration-300`}
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

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Not sure which option is right for you?</p>
          <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
