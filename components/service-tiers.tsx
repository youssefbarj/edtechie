import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Star, HelpCircle } from "lucide-react"
import Link from "next/link"

export function ServiceTiers() {
  const tiers = [
    {
      name: "Basic Quick Transformation",
      subtitle: "Up to 8 Documents → Interactive in 2 Weeks",
      description: "Transform up to 8 simple documents (50 pages total) with basic interactive elements.",
      features: [
        "Up to 8 documents (max 50 pages total)",
        "Basic interactions: accordions, hotspots, flip cards",
        "Simple multiple choice quizzes",
        "Click-through scenarios",
        "Standard templates only",
        "1 revision round included",
        "2-week delivery guarantee",
        "HTML5/SCORM output",
      ],
      cta: "Get Content Audit",
      price: "Starting at $2,495",
      popular: false,
      fastest: false,
      perfectFor: "Compliance docs, simple training materials, quick wins",
      badgeColor: "from-green-500 to-emerald-600",
      cardColor: "ring-green-500/50 border-green-500/30",
      tier: "1A",
    },
    {
      name: "Enhanced Quick Transformation",
      subtitle: "Up to 5 Documents → Interactive in 2 Weeks",
      description: "Transform up to 5 documents (50 pages total) with advanced interactive elements.",
      features: [
        "Everything in Basic",
        "Up to 5 documents (max 50 pages total)",
        "Interactive videos with clickable elements",
        "Drag-and-drop activities",
        "Advanced branching scenarios",
        "Custom graphics & animations",
        "Assessment scoring & feedback",
      ],
      cta: "Get Content Audit",
      price: "Starting at $3,995",
      popular: true,
      fastest: false,
      perfectFor: "Training materials needing engagement, video-based content",
      badgeColor: "from-green-500 to-emerald-600",
      cardColor: "ring-green-500/50 border-green-500/30",
      tier: "1B",
    },
    {
      name: "Premium Quick Transformation",
      subtitle: "Up to 3 Documents → Interactive in 2 Weeks",
      description: "Transform up to 3 documents (50 pages total) with serious games and simulations.",
      features: [
        "Everything in Enhanced",
        "Up to 3 documents (max 50 pages total)",
        "Serious games & gamification",
        "Complex simulations",
        "Virtual environments",
        "Advanced multimedia integration",
        "Custom interactivity design",
      ],
      cta: "Get Content Audit",
      price: "Starting at $5,995",
      popular: false,
      fastest: false,
      perfectFor: "High-engagement training, skill-based learning, premium content",
      badgeColor: "from-green-500 to-emerald-600",
      cardColor: "ring-green-500/50 border-green-500/30",
      tier: "1C",
    },
    {
      name: "Custom Course Development",
      subtitle: "Built from Scratch with SME Collaboration",
      description: "Complete courses with advanced simulations, serious games, and complex scenarios.",
      features: [
        "Everything in Premium Quick",
        "SME collaboration sessions",
        "Advanced simulations",
        "Serious games integration",
        "Custom graphics & media",
        "Stakeholder meetings",
        "Complete instructional design",
        "Iterative development process",
      ],
      cta: "Schedule Strategy Call",
      price: "Starting at $8,500",
      popular: false,
      fastest: false,
      perfectFor: "New programs, complex subject matter, higher engagement needs",
      badgeColor: "from-[#6366F1] to-[#5B21B6]",
      cardColor: "ring-purple-500/50 border-purple-500/30",
      tier: "2",
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
      cta: "Schedule Strategy Call",
      price: "Starting at $18,000",
      popular: false,
      fastest: false,
      perfectFor: "Starting from scratch, ongoing partnership, multi-department needs",
      badgeColor: "from-cyan-500 to-blue-600",
      cardColor: "ring-cyan-500/50 border-cyan-500/30",
      tier: "3",
    },
  ]

  const qualificationQuestions = [
    {
      question: "How many documents need transformation?",
      tier1: "1-8 documents",
      tier2Plus: "Multiple complex projects",
      recommendation: "Tier 1 vs Tier 2+",
    },
    {
      question: "What level of interactivity do you need?",
      tier1: "Basic to advanced interactions",
      tier2Plus: "Custom simulations & games",
      recommendation: "Tier 1 vs Tier 2+",
    },
    {
      question: "Timeline urgency?",
      tier1: "2-3 weeks",
      tier2Plus: "1+ months",
      recommendation: "Tier 1 vs Tier 2+",
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
            From basic transformations to complete custom development. Each tier has distinct complexity levels and
            pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 xl:gap-4">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 border-slate-700 hover:${tier.cardColor} transition-all duration-300 h-full ${
                tier.popular ? "ring-2 ring-green-500/50" : ""
              } ${tier.tier?.startsWith("1") ? "lg:col-span-1" : "lg:col-span-1 xl:col-span-1"}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`bg-gradient-to-r ${tier.badgeColor} text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1`}
                  >
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      tier.tier?.startsWith("1")
                        ? "bg-green-900/30 text-green-400"
                        : tier.tier === "2"
                          ? "bg-purple-900/30 text-purple-400"
                          : "bg-cyan-900/30 text-cyan-400"
                    }`}
                  >
                    Tier {tier.tier}
                  </span>
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                <p
                  className={`font-semibold text-xs sm:text-sm lg:text-base ${
                    tier.tier?.startsWith("1")
                      ? "text-green-400"
                      : tier.tier === "2"
                        ? "text-purple-400"
                        : "text-cyan-400"
                  }`}
                >
                  {tier.subtitle}
                </p>
                <div className="mt-3 sm:mt-4">
                  <span
                    className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                      tier.tier?.startsWith("1")
                        ? "text-green-400"
                        : tier.tier === "2"
                          ? "text-purple-400"
                          : "text-cyan-400"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="text-slate-400 text-xs">Final pricing based on scope review</p>
                <p className="text-amber-400 text-xs font-medium mt-1">Rush delivery (under 2 weeks): +25% fee</p>
                <p className="text-slate-300 mt-2 text-xs sm:text-sm">{tier.description}</p>
                <div className="mt-3 p-2 bg-slate-700/50 rounded-lg">
                  <p className="text-xs text-slate-400">
                    <span
                      className={`font-semibold ${
                        tier.tier?.startsWith("1")
                          ? "text-green-400"
                          : tier.tier === "2"
                            ? "text-purple-400"
                            : "text-cyan-400"
                      }`}
                    >
                      Perfect for:
                    </span>{" "}
                    {tier.perfectFor}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                <ul className="space-y-1 sm:space-y-2 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check
                        className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ${
                          tier.tier?.startsWith("1")
                            ? "text-green-400"
                            : tier.tier === "2"
                              ? "text-purple-400"
                              : "text-cyan-400"
                        }`}
                      />
                      <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full mt-auto transition-all duration-300 py-2 sm:py-3 text-xs sm:text-sm ${
                    tier.tier?.startsWith("1")
                      ? "bg-green-600 hover:bg-green-700"
                      : tier.tier === "2"
                        ? "bg-[#6366F1] hover:bg-[#5B21B6]"
                        : "bg-cyan-600 hover:bg-cyan-700"
                  }`}
                >
                  <Link href="/contact" className="flex items-center justify-center space-x-2">
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Qualification Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
              <HelpCircle className="w-8 h-8 text-cyan-400" />
              <span>Which Tier Is Right For You?</span>
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Answer these 3 simple questions to find your perfect fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {qualificationQuestions.map((q, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold text-white mb-4">{q.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-semibold text-sm">Tier 1:</p>
                    <p className="text-slate-300 text-sm">{q.tier1}</p>
                  </div>
                  <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                    <p className="text-purple-400 font-semibold text-sm">Tier 2+:</p>
                    <p className="text-slate-300 text-sm">{q.tier2Plus}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-slate-400 mb-4 text-sm sm:text-base">Still not sure? Let us help you decide.</p>
            <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3">
              <Link href="/contact">Get Free Tier Recommendation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
