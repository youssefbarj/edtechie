import { FileText, BookOpen, ArrowRight, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export function ResourceGrid() {
  const resources = [
    {
      title: "PDF to LMS: A Complete Guide",
      description: "How to transform your static training documents into interactive digital experiences that engage learners.",
      type: "Guide",
      icon: FileText,
      color: "#00CED1",
      comingSoon: false,
    },
    {
      title: "Choosing the Right LMS Platform",
      description: "Key considerations when selecting a learning management system for your training organization.",
      type: "Article",
      icon: BookOpen,
      color: "#3D2C8D",
      comingSoon: false,
    },
    {
      title: "The ROI of Digital Transformation",
      description: "Calculate the financial impact of transitioning from traditional to digital training delivery.",
      type: "Calculator",
      icon: Lightbulb,
      color: "#FF8559",
      comingSoon: true,
    },
    {
      title: "Institut Fandi Case Study",
      description: "Deep dive into how Morocco's leading beauty academy went from local PDFs to global e-learning.",
      type: "Case Study",
      icon: Users,
      color: "#D4AF37",
      comingSoon: false,
    },
  ]

  return (
    <section className="py-20 bg-[#1A1F5C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-[#3D2C8D]/10 rounded-xl border border-[#3D2C8D]/20 p-6 hover:border-[#3D2C8D]/40 transition-all duration-300 group relative"
            >
              {resource.comingSoon && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-[#FF8559]/20 text-[#FF8559] text-[10px] font-semibold uppercase tracking-wider">
                  Coming Soon
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${resource.color}20` }}
                >
                  <resource.icon className="w-6 h-6" style={{ color: resource.color }} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: resource.color }}>
                    {resource.type}
                  </div>
                  <h3 className="text-lg font-bold text-[#FDFBD4] group-hover:text-[#00CED1] transition-colors">
                    {resource.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-[#FDFBD4]/60 text-[14px] leading-relaxed mb-4">
                {resource.description}
              </p>
              
              {!resource.comingSoon && (
                <Link 
                  href={resource.type === "Case Study" ? "/case-studies" : "#"}
                  className="inline-flex items-center gap-2 text-[#00CED1] text-[14px] font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* More Resources Coming */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#00CED1]/10 to-[#3D2C8D]/10 rounded-xl border border-[#00CED1]/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#FDFBD4] mb-4">More Resources Coming</h3>
            <p className="text-[#FDFBD4]/60 mb-6">
              We&apos;re building a comprehensive resource library for training organizations navigating 
              digital transformation. Subscribe to be notified when new guides drop.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF8559] hover:bg-[#FF6B3D] text-white font-semibold transition-all"
            >
              Get Notified
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
