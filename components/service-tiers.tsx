import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function ServiceTiers() {
  const tiers = [
    {
      name: "Ready-Made Training",
      subtitle: "Deploy Tonight",
      price: "$2,500",
      period: "/month",
      description:
        "Pre-built simulations covering the most common attack vectors. Perfect for getting audit-ready fast.",
      features: [
        "20+ Interactive Simulations",
        "Phishing & Social Engineering",
        "Password Security Training",
        "Data Breach Response",
        "Compliance Reporting",
        "24/7 Support",
        "Mobile Access",
        "Progress Tracking",
      ],
      cta: "Start Training",
      popular: false,
    },
    {
      name: "Custom Simulations",
      subtitle: "Built for Your Threats",
      price: "$7,500",
      period: "/month",
      description: "Tailored training that mirrors your actual environment and specific threat landscape.",
      features: [
        "Everything in Ready-Made",
        "Custom Threat Scenarios",
        "Your Tech Stack Integration",
        "Industry-Specific Attacks",
        "Advanced Analytics",
        "Dedicated Success Manager",
        "White-Label Options",
        "API Integration",
      ],
      cta: "Get Custom Quote",
      popular: true,
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Training Approach</h2>
          <p className="text-xl text-slate-300">Fast deployment or custom-built. Both get you audit-ready.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 ${
                tier.popular ? "ring-2 ring-cyan-500/50" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                <p className="text-cyan-400 font-semibold">{tier.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
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
                    tier.popular ? "bg-[#f59e0b] hover:bg-[#d97706]" : "bg-slate-700 hover:bg-slate-600"
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
