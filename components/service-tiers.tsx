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
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export function ServiceTiers() {
  const [showQuickTransformDetails, setShowQuickTransformDetails] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const quickTransformTiers = [
    {
      name: "Basic",
      subtitle: "Up to 8 Documents",
      price: "$4,295",
      priceSubtitle: "Professional service + modern tools",
      description: "Perfect for compliance docs and simple training materials",
      icon: <Play className="w-8 h-8" />,
      features: [
        "8 documents (50 pages total)",
        "Basic interactions & quizzes",
        "Standard templates",
        "2-week delivery",
      ],
      examples: "Accordions, hotspots, flip cards, multiple choice",
      perfectFor: "Compliance training, policy documents, quick wins",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Enhanced",
      subtitle: "Up to 5 Documents",
      price: "$6,995",
      priceSubtitle: "Full-service transformation",
      description: "Advanced interactions with video and custom elements",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "5 documents (50 pages total)",
        "Interactive videos & animations",
        "Drag-and-drop activities",
        "Custom graphics included",
      ],
      examples: "Clickable videos, branching scenarios, custom animations",
      perfectFor: "Engaging training materials, video-based content",
      popular: true,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      name: "Premium",
      subtitle: "Up to 3 Documents",
      price: "$11,995",
      priceSubtitle: "Advanced custom development",
      description: "Serious games and immersive simulations",
      icon: <Gamepad2 className="w-8 h-8" />,
      features: [
        "3 documents (50 pages total)",
        "Serious games & simulations",
        "Virtual environments",
        "Advanced multimedia",
      ],
      examples: "Game-based learning, complex simulations, virtual scenarios",
      perfectFor: "High-engagement training, skill-based learning",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ]

  if (showQuickTransformDetails) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => setShowQuickTransformDetails(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Service Options
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              Choose Your Complexity Level
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              All packages include 2-week delivery, 1 revision round, and SCORM output
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-amber-400 text-sm font-medium animate-pulse">
                Rush delivery (under 2 weeks): +25% fee
              </p>
              <p className="text-green-400 text-sm font-medium flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 animate-pulse" />
                <span>Quality Guarantee: If you're not satisfied, we'll revise until you are</span>
              </p>
            </div>
          </div>

          {/* Complexity Levels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {quickTransformTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br ${tier.gradient} border-slate-700 hover:border-green-500/50 transition-all duration-500 h-full transform hover:scale-105 hover:rotate-1 ${
                  tier.popular ? "ring-2 ring-green-500/50 scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 animate-bounce">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 bg-green-900/30 rounded-full text-green-400 transition-all duration-300 ${hoveredCard === index ? "animate-spin" : ""}`}
                    >
                      {tier.icon}
                    </div>
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
                        <li key={featureIndex} className="flex items-center space-x-3 group">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:animate-pulse" />
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
                    className="w-full mt-auto bg-green-600 hover:bg-green-700 transition-all duration-300 py-3 group hover:scale-105"
                  >
                    <Link href="/contact" className="flex items-center justify-center space-x-2">
                      <span>Get Content Audit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Comparison */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-8 hover:border-blue-400/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <span className="text-2xl animate-bounce">💡</span>
              <span>Why not DIY tools?</span>
            </h3>
            <p className="text-slate-300 text-lg">
              While tools like Articulate cost $1,400/year + your time, we deliver professional results in 2 weeks with
              zero learning curve.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 text-slate-300">Feature</th>
                    <th className="text-center py-3 text-green-400">Basic</th>
                    <th className="text-center py-3 text-green-400">Enhanced</th>
                    <th className="text-center py-3 text-green-400">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                    <td className="py-3">Max Documents</td>
                    <td className="text-center py-3">8</td>
                    <td className="text-center py-3">5</td>
                    <td className="text-center py-3">3</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                    <td className="py-3">Interactive Videos</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                    <td className="py-3">Custom Graphics</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-700/20 transition-colors">
                    <td className="py-3">Serious Games</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
          <Card className="relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 hover:border-green-400/50 transition-all duration-500 cursor-pointer group h-full hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-900/40 rounded-full group-hover:animate-pulse">
                  <Zap className="w-12 h-12 text-green-400 group-hover:animate-bounce" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Transform Existing Content
              </CardTitle>
              <p className="text-green-400 font-semibold text-lg mb-4">2-week delivery, multiple complexity levels</p>
              <div className="text-3xl font-bold text-green-400 mb-4 group-hover:animate-pulse">$4,295 - $11,995</div>
            </CardHeader>

            <CardContent className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {[
                  { number: "8", label: "Documents Max", icon: <TrendingUp className="w-6 h-6" /> },
                  { number: "2", label: "Week Delivery", icon: <Zap className="w-6 h-6" /> },
                  { number: "3", label: "Complexity Levels", icon: <Star className="w-6 h-6" /> },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/stat"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="text-green-400 group-hover/stat:animate-spin">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{stat.number}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 flex-1">
                {[
                  "We handle everything - you focus on your business",
                  "No learning curve - we do the work for you",
                  "Professional quality assurance & testing",
                  "SCORM compliant output",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 group/item">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 group-hover/item:animate-pulse" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setShowQuickTransformDetails(true)}
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 py-4 text-lg group-hover:scale-105 group"
              >
                <span>Choose Complexity Level</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Custom Development Services */}
          <Card className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-900/40 rounded-full group-hover:animate-pulse">
                  <Users className="w-12 h-12 text-purple-400 group-hover:animate-bounce" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-3">Build From Scratch</CardTitle>
              <p className="text-purple-400 font-semibold text-lg mb-4">Complete courses & infrastructure</p>
              <div className="text-3xl font-bold text-purple-400 mb-4 group-hover:animate-pulse">$15,000+</div>
            </CardHeader>

            <CardContent className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                {[
                  { icon: <Users className="w-8 h-8" />, label: "SME Collaboration" },
                  { icon: <Cog className="w-8 h-8" />, label: "Custom Design" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/item"
                  >
                    <div className="text-purple-400 mx-auto mb-2 group-hover/item:animate-spin">{item.icon}</div>
                    <div className="text-sm text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 flex-1">
                {[
                  "Complete instructional design",
                  "Advanced simulations & games",
                  "LMS setup & integrations",
                  "Ongoing support & updates",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 group/item">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover/item:animate-pulse" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 py-4 text-lg group-hover:scale-105 group"
              >
                <Link href="/contact" className="flex items-center justify-center space-x-2">
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Not sure which option fits your needs?</p>
          <Button
            asChild
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
