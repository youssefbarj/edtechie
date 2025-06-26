"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ArrowRight,
  Star,
  ArrowLeft,
  Zap,
  Users,
  Cog,
  Play,
  Gamepad2,
  Sparkles,
  Shield,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

export function ServiceTiers() {
  const [showQuickTransformDetails, setShowQuickTransformDetails] = useState(false)
  const [showAssessment, setShowAssessment] = useState(false)

  const quickTransformTiers = [
    {
      name: "Basic",
      subtitle: "8 documents (50 pages)",
      price: "$3,495",
      priceSubtitle: "Basic interactions",
      description: "Perfect for compliance docs and simple training materials",
      icon: <Play className="w-8 h-8" />,
      features: [
        "8 documents (50 pages total)",
        "Basic interactions & quizzes",
        "Standard templates",
        "2-week delivery",
        "Dedicated Project Manager",
        "Quality Assurance Process",
        "SCORM compliant output",
      ],
      examples: "Accordions, hotspots, flip cards, multiple choice",
      perfectFor: "Compliance training, policy documents, quick wins",
      cta: "Get Content Audit",
      ctaLink: "/contact",
    },
    {
      name: "Enhanced",
      subtitle: "5 documents (50 pages)",
      price: "$4,995",
      priceSubtitle: "Interactive videos, animations",
      description: "Advanced interactions with video and custom elements",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "5 documents (50 pages total)",
        "Interactive videos & animations",
        "Drag-and-drop activities",
        "Custom graphics included",
        "Dedicated Project Manager",
        "Quality Assurance Process",
        "SCORM compliant output",
      ],
      examples: "Clickable videos, branching scenarios, custom animations",
      perfectFor: "Engaging training materials, video-based content",
      popular: true,
      cta: "Get Content Audit",
      ctaLink: "/contact",
    },
    {
      name: "Premium",
      subtitle: "3 documents (50 pages)",
      price: "$7,995",
      priceSubtitle: "Serious games, simulations",
      description: "Serious games and immersive simulations",
      icon: <Gamepad2 className="w-8 h-8" />,
      features: [
        "3 documents (50 pages total)",
        "Serious games & simulations",
        "Virtual environments",
        "Advanced multimedia",
        "Dedicated Project Manager",
        "Quality Assurance Process",
        "SCORM compliant output",
      ],
      examples: "Game-based learning, complex simulations, virtual scenarios",
      perfectFor: "High-engagement training, skill-based learning",
      cta: "Strategy Call",
      ctaLink: "/contact",
    },
  ]

  const AssessmentModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-slate-900 border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl text-white">2-Minute Content Assessment</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAssessment(false)}
              className="text-slate-400 hover:text-white"
            >
              ×
            </Button>
          </div>
          <p className="text-slate-300">Help us recommend the right service for your needs</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-3">1. How many documents do you need transformed?</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  1-3 documents → Premium Package
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  4-5 documents → Enhanced Package
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  6-8 documents → Basic Package
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  9+ documents → Custom Development
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">2. What level of interactivity do you need?</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Basic (clicks, quizzes) → Basic Package
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Advanced (videos, animations) → Enhanced Package
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Games & simulations → Premium Package
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Complete LMS solution → Custom Development
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-slate-300 text-sm mb-3">
              <strong>Quick Recommendation:</strong>
            </p>
            <p className="text-slate-400 text-sm">
              Most clients start with our <strong className="text-green-400">Enhanced Package</strong> - it offers the
              best balance of engagement and value for typical compliance training needs.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => {
                setShowAssessment(false)
                setShowQuickTransformDetails(true)
              }}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              View Packages
            </Button>
            <Button asChild variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800">
              <Link href="/contact">Get Personal Consultation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  if (showQuickTransformDetails) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => setShowQuickTransformDetails(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Service Options
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Quick Transformation Packages
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              All packages include 2-week delivery, 1 revision round, and SCORM output
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-amber-400 text-sm font-medium">Rush delivery (under 2 weeks): +25% fee</p>
              <p className="text-green-400 text-sm font-medium flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Quality Guarantee: If you're not satisfied, we'll revise until you are</span>
              </p>
            </div>
          </div>

          {/* Complexity Levels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {quickTransformTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 h-full ${
                  tier.popular ? "ring-2 ring-green-500/50 scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-900/30 rounded-full text-green-400">{tier.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                  <p className="text-green-400 font-semibold text-lg">{tier.subtitle}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-green-400">Starting at {tier.price}</span>
                    <p className="text-slate-400 text-sm mt-1">{tier.priceSubtitle}</p>
                  </div>
                  <p className="text-slate-300 mt-3">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Examples:</h4>
                    <p className="text-slate-400 text-sm">{tier.examples}</p>
                  </div>

                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-green-400">Perfect for:</span> {tier.perfectFor}
                    </p>
                  </div>

                  <Button
                    asChild
                    className="w-full mt-auto bg-green-600 hover:bg-green-700 transition-all duration-300 py-3"
                  >
                    <Link href={tier.ctaLink} className="flex items-center justify-center space-x-2">
                      <span>{tier.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose EdTechie Corp */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose EdTechie Corp?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Established Content Transformation Processes</h4>
                    <p className="text-slate-300 text-sm">1000+ successful projects with proven methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Multicultural Team with Global Perspective</h4>
                    <p className="text-slate-300 text-sm">French/English fluency with Western business understanding</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">US Business Hours Support</h4>
                    <p className="text-slate-300 text-sm">International efficiency with US business standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Modern Tool Mastery + Strategic Expertise</h4>
                    <p className="text-slate-300 text-sm">Template-based approach eliminates development bottlenecks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showAssessment && <AssessmentModal />}
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Choose Your Service Type</h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Transform existing content quickly or build custom solutions from scratch
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Transformation Package */}
          <Card className="relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer group h-full">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-900/40 rounded-full">
                  <Zap className="w-12 h-12 text-green-400" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Quick Transformation Packages
              </CardTitle>
              <p className="text-green-400 font-semibold text-lg mb-4">2-week delivery, multiple complexity levels</p>
              <div className="text-3xl font-bold text-green-400 mb-4">$3,495 - $7,995</div>
            </CardHeader>

            <CardContent className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">8</div>
                  <div className="text-sm text-slate-300">Documents Max</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">2</div>
                  <div className="text-sm text-slate-300">Week Delivery</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">3</div>
                  <div className="text-sm text-slate-300">Complexity Levels</div>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">We handle everything - you focus on your business</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">No learning curve - professional results guaranteed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Modern tool mastery eliminates bottlenecks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">SCORM compliant output</span>
                </li>
              </ul>

              <Button
                onClick={() => setShowQuickTransformDetails(true)}
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 py-4 text-lg group-hover:scale-105"
              >
                <span>Choose Complexity Level</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Custom Development Services */}
          <Card className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group h-full">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-900/40 rounded-full">
                  <Users className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Custom Development Services
              </CardTitle>
              <p className="text-purple-400 font-semibold text-lg mb-4">Complete LMS ecosystem solutions</p>
              <div className="text-3xl font-bold text-purple-400 mb-4">Starting at enterprise level</div>
            </CardHeader>

            <CardContent className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-300">SME Collaboration</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <Cog className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-300">Custom Design</div>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">Complete instructional design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">Advanced simulations & games</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">LMS setup & integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">Ongoing support & updates</span>
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 py-4 text-lg group-hover:scale-105"
              >
                <Link href="/contact" className="flex items-center justify-center space-x-2">
                  <span>Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Not sure which option fits your needs?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowAssessment(true)}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Take 2-Minute Assessment
            </Button>
            <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      {showAssessment && <AssessmentModal />}
    </section>
  )
}
