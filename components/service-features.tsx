import { FileText, Server, Globe, BarChart3, Users, Smartphone, Zap, Lock } from "lucide-react"

export function ServiceFeatures() {
  const features = [
    {
      icon: FileText,
      title: "Content Engineering",
      description: "Transform PDFs, documents, and videos into interactive, engaging digital modules.",
    },
    {
      icon: Server,
      title: "Custom LMS Development",
      description: "Platform architecture designed for your specific workflow and scaling needs.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Reach students anywhere in the world, 24/7, without geographic limitations.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into student progress, completion rates, and engagement.",
    },
    {
      icon: Users,
      title: "Team Training",
      description: "We train your staff to manage the platform and support students effectively.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive platforms that work seamlessly on any device, anywhere.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "From kickoff to launch in 4 months—not years. We move fast.",
    },
    {
      icon: Lock,
      title: "Ongoing Support",
      description: "Technical support and platform optimization long after launch.",
    },
  ]

  return (
    <section className="py-20 bg-[#1A1F5C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#00CED1]" />
            <span className="text-[#00CED1] text-[12px] font-semibold tracking-[0.15em] uppercase">What&apos;s Included</span>
            <div className="w-10 h-px bg-[#00CED1]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FDFBD4] mb-4">
            Everything you need for a
            <br />
            <span className="text-[#00CED1]">complete transformation.</span>
          </h2>
          <p className="text-[#FDFBD4]/60 text-lg max-w-2xl mx-auto">
            Every transformation project includes these core capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#3D2C8D]/10 border border-[#3D2C8D]/20 hover:border-[#3D2C8D]/40 transition-all duration-300 group"
            >
              <feature.icon className="w-10 h-10 text-[#00CED1] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-[#FDFBD4] mb-2">{feature.title}</h3>
              <p className="text-[#FDFBD4]/50 text-[14px] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
