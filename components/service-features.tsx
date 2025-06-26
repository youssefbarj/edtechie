import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Users, Play, Globe, CheckCircle, Clock, BarChart3 } from "lucide-react"

export function ServiceFeatures() {
  const features = [
    {
      icon: Zap,
      title: "60% Faster Development",
      description: "Modern authoring tools and templates vs custom coding from scratch.",
    },
    {
      icon: Target,
      title: "ALL Compliance Areas",
      description: "Healthcare, manufacturing, financial services, HR - we transform content across every industry.",
    },
    {
      icon: Users,
      title: "Agency-Quality Results",
      description: "Professional team delivering enterprise-grade content at competitive rates.",
    },
    {
      icon: Play,
      title: "Interactive Engagement",
      description: "Videos, simulations, scenarios, and gamification that actually engage learners.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "International team with US business standards and cultural understanding.",
    },
    {
      icon: CheckCircle,
      title: "Template Efficiency",
      description: "Leverage proven methodologies and reusable components for faster delivery.",
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Transform existing PDFs and PowerPoints into interactive content in weeks, not months.",
    },
    {
      icon: BarChart3,
      title: "Proven ROI",
      description: "89% higher completion rates and 73% better knowledge retention vs static content.",
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why EdTechie Content Transformation Works</h2>
          <p className="text-xl text-slate-300">
            Modern tools, proven processes, and global expertise delivering results across all compliance areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-[#6366F1] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operational Excellence Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Agency Quality Through Operational Excellence</h3>
            <p className="text-slate-300 text-lg">The smart choice between expensive agencies and risky freelancers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Modern Tool Mastery</h4>
              <p className="text-slate-400 text-sm">Advanced authoring platforms eliminate development bottlenecks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Process Innovation</h4>
              <p className="text-slate-400 text-sm">Proprietary methods reduce development time by 60%</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Specialized Focus</h4>
              <p className="text-slate-400 text-sm">Content transformation specialists, not generalist designers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Template Efficiency</h4>
              <p className="text-slate-400 text-sm">
                Proven frameworks accelerate delivery without sacrificing quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
