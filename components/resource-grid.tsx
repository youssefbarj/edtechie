import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Calculator,
  AlertTriangle,
  Zap,
  BarChart3,
  FileText,
  Settings,
  Star,
  Clock,
  Shield,
} from "lucide-react"

export function ResourceGrid() {
  const primaryLeadMagnets = [
    {
      title: "Is Your Compliance Training Stuck in 2015?",
      description: "5-minute assessment reveals why your training isn't working + get personalized improvement roadmap",
      type: "Assessment Tool",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-400/70",
      cta: "Take Free Assessment",
      ctaStyle: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
      badge: "45% Conversion Rate",
      badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    {
      title: "Training Transformation ROI Calculator",
      description:
        "Calculate exact savings with Morocco-based delivery vs traditional agencies. See why companies save 60-80% with EdTechie.",
      type: "ROI Calculator",
      icon: Calculator,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/70",
      cta: "Calculate Your Savings",
      ctaStyle: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
      badge: "Most Popular",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      popular: true,
    },
    {
      title: "Hidden Cost of Boring Training Calculator",
      description:
        "Organizations lose $1.6M annually from compliance failures. Discover your hidden costs + risk exposure.",
      type: "Risk Assessment",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-400/70",
      cta: "Reveal Hidden Costs",
      ctaStyle: "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700",
      urgency: "Limited Time Analysis",
    },
    {
      title: "Transform Your Worst PDF Free (48-Hour Results)",
      description:
        "Upload your most boring training PDF. We'll transform it into interactive content - completely free, no commitment.",
      type: "Free Sample",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-400/70",
      cta: "Get Free Transformation",
      ctaStyle: "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700",
      subText: "No Credit Card Required",
      urgency: "48-Hour Delivery",
    },
  ]

  const secondaryResources = [
    {
      title: "2025 Training Effectiveness Report",
      description: "Exclusive data: Interactive vs static training performance across industries",
      type: "Research Report",
      icon: BarChart3,
      color: "text-purple-400",
      cta: "Download Report",
    },
    {
      title: "Industry-Specific Transformation Templates",
      description: "Ready-to-use templates for HR, safety, financial, and healthcare compliance",
      type: "Template Library",
      icon: FileText,
      color: "text-cyan-400",
      cta: "Browse Templates",
    },
    {
      title: "LMS Integration Playbook",
      description: "Technical guide for deploying transformed content across popular learning platforms",
      type: "Technical Guide",
      icon: Settings,
      color: "text-slate-400",
      cta: "Get Integration Guide",
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Free Content Transformation Resources</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tools, assessments, and transformation samples to help you build engaging content that actually works across
            all compliance areas.
          </p>
        </div>

        {/* Primary Lead Magnets - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {primaryLeadMagnets.map((resource, index) => (
            <Card
              key={index}
              className={`relative ${resource.bgColor} ${resource.borderColor} ${resource.hoverBorder} transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl cursor-pointer h-full`}
            >
              {/* Popular Badge */}
              {resource.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>{resource.badge}</span>
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full ${resource.bgColor} border ${resource.borderColor}`}>
                      <resource.icon className={`w-8 h-8 ${resource.color}`} />
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${resource.color} bg-slate-800/50 px-2 py-1 rounded-full`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  {resource.urgency && (
                    <div className="flex items-center space-x-1 bg-slate-800/50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-orange-300">{resource.urgency}</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {resource.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                <p className="text-slate-300 text-sm leading-relaxed flex-1">{resource.description}</p>

                {/* Badge for non-popular items */}
                {resource.badge && !resource.popular && (
                  <div
                    className={`inline-flex items-center space-x-1 ${resource.badgeColor} px-3 py-1 rounded-full text-sm font-medium border w-fit`}
                  >
                    <Shield className="w-4 h-4" />
                    <span>{resource.badge}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <Button
                    className={`w-full ${resource.ctaStyle} text-white font-semibold py-3 text-base transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    {resource.cta}
                  </Button>
                  {resource.subText && <p className="text-center text-xs text-slate-400">{resource.subText}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Resources - 3 Column Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryResources.map((resource, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <resource.icon className={`w-6 h-6 ${resource.color}`} />
                    <span className={`text-sm font-medium ${resource.color}`}>{resource.type}</span>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300"
                  >
                    {resource.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-transparent bg-clip-padding rounded-lg p-8 relative overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-lg opacity-20"></div>
          <div className="absolute inset-[2px] bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom for Your Industry?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Can't find exactly what you're looking for? Our content transformation experts can create custom
              assessments, ROI models, and transformation samples for your specific compliance requirements and industry
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Custom Resource
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:border-cyan-500 px-8 py-4 transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Custom resources typically delivered within 5-7 business days • No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
