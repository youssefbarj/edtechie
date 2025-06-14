import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, BarChart3, Users, Clock, CheckCircle, Zap, Lock } from "lucide-react"

export function ServiceFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Real Attack Simulations",
      description:
        "Practice with actual malware, phishing attempts, and social engineering tactics in a safe environment.",
    },
    {
      icon: Target,
      title: "Industry-Specific Scenarios",
      description: "Training tailored to your sector's unique threats - fintech, healthcare, SaaS, and more.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Track progress, identify weak spots, and generate audit-ready compliance reports.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user scenarios that test communication and incident response procedures.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Self-paced learning that fits into busy schedules without disrupting productivity.",
    },
    {
      icon: CheckCircle,
      title: "Certification Ready",
      description: "Prepare for SOC 2, ISO 27001, NIST, and other compliance frameworks.",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Get started in minutes, not months. No complex setup or IT overhead required.",
    },
    {
      icon: Lock,
      title: "Secure Platform",
      description: "Enterprise-grade security with SOC 2 Type II compliance and end-to-end encryption.",
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why EdTechie Training Works</h2>
          <p className="text-xl text-slate-300">Interactive, measurable, and designed for real-world threats.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-[#f59e0b] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
