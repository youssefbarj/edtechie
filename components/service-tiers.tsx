import { Button } from "@/components/ui/button"
import { FileText, Server, Rocket, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function ServiceTiers() {
  const stages = [
    {
      stage: "01",
      icon: FileText,
      name: "Content Transformation",
      subtitle: "Analog → Digital",
      description: "We take your proven training content and engineer it into engaging, interactive digital experiences.",
      features: [
        "PDF & document conversion",
        "Interactive lesson design",
        "Video integration & editing",
        "Quiz & assessment creation",
        "Mobile-responsive content",
        "SCORM/xAPI compliance",
      ],
      deliverable: "Complete interactive course modules",
      timeline: "4-6 weeks",
      color: "#00CED1",
    },
    {
      stage: "02",
      icon: Server,
      name: "Platform Engineering",
      subtitle: "Local → Scalable",
      description: "Custom LMS architecture built for your specific needs, designed to scale with unlimited students.",
      features: [
        "Custom LMS development",
        "Student portal & dashboards",
        "Progress tracking system",
        "Certificate generation",
        "Admin management tools",
        "Analytics & reporting",
      ],
      deliverable: "Fully functional learning platform",
      timeline: "6-8 weeks",
      color: "#3D2C8D",
    },
    {
      stage: "03",
      icon: Rocket,
      name: "Digital Launch",
      subtitle: "Static → Live",
      description: "We train your team, migrate your students, and ensure a successful global launch.",
      features: [
        "Staff training sessions",
        "Student migration support",
        "Launch strategy planning",
        "Marketing materials",
        "Technical support setup",
        "Ongoing optimization",
      ],
      deliverable: "Live platform with active students",
      timeline: "2-4 weeks",
      color: "#FF8559",
    },
  ]

  return (
    <section className="py-20 bg-[#1A1F5C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {stages.map((stage) => {
            const Icon = stage.icon
            return (
              <div
                key={stage.stage}
                className="relative bg-gradient-to-b from-[#3D2C8D]/20 to-transparent rounded-2xl border border-[#3D2C8D]/30 overflow-hidden group hover:border-[#3D2C8D]/50 transition-all duration-300"
              >
                {/* Top accent */}
                <div className="h-1 w-full" style={{ backgroundColor: stage.color }} />
                
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${stage.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: stage.color }} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: stage.color }}>
                        Stage {stage.stage}
                      </div>
                      <h3 className="text-xl font-bold text-[#FDFBD4]">{stage.name}</h3>
                      <p className="text-[13px] text-[#FDFBD4]/50">{stage.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#FDFBD4]/60 text-[15px] leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {stage.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: stage.color }} />
                        <span className="text-[14px] text-[#FDFBD4]/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Deliverable & Timeline */}
                  <div className="pt-6 border-t border-[#3D2C8D]/20 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] text-[#FDFBD4]/40 uppercase tracking-wider">Deliverable</span>
                      <span className="text-[13px] text-[#FDFBD4]/80">{stage.deliverable}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] text-[#FDFBD4]/40 uppercase tracking-wider">Timeline</span>
                      <span className="text-[13px] font-semibold" style={{ color: stage.color }}>{stage.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#FDFBD4]/50 text-[15px] mb-5">
            All three stages included in every transformation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#FF8559] hover:bg-[#FF6B3D] text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Get Your Transformation Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#3D2C8D]/50 text-[#FDFBD4]/70 hover:text-[#FDFBD4] hover:bg-[#3D2C8D]/20 px-8 py-6 rounded-xl"
            >
              <Link href="/case-studies">See Institut Fandi Case Study</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
