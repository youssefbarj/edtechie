import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText, Video, BookOpen, Calculator } from "lucide-react"

export function ResourceGrid() {
  const resources = [
    {
      title: "Free Before/After PDF Transformation Showcase",
      description:
        "See real examples of boring PDFs transformed into engaging interactive experiences across industries.",
      type: "Transformation Gallery",
      icon: FileText,
      color: "text-blue-400",
      cta: "View Showcase",
    },
    {
      title: "Compliance Training Failure Assessment",
      description: "Identify why your current training isn't working and get specific recommendations for improvement.",
      type: "Assessment Tool",
      icon: ExternalLink,
      color: "text-red-400",
      cta: "Take Assessment",
    },
    {
      title: "Content Transformation ROI Calculator",
      description: "Calculate the cost savings and ROI of transforming your existing training materials.",
      type: "ROI Calculator",
      icon: Calculator,
      color: "text-green-400",
      cta: "Calculate ROI",
    },
    {
      title: "Industry-Specific Transformation Templates",
      description: "Ready-to-use templates for HR, safety, financial, and healthcare compliance training.",
      type: "Template Library",
      icon: FileText,
      color: "text-yellow-400",
      cta: "Browse Templates",
    },
    {
      title: "Get 1 PDF Transformed Free (10 slides max)",
      description: "See our transformation process in action with your own content - no commitment required.",
      type: "Free Transformation",
      icon: Download,
      color: "text-pink-400",
      cta: "Get Free Transformation",
    },
    {
      title: "Engagement vs Completion Rate Study",
      description:
        "Research comparing interactive vs static training across different industries and compliance areas.",
      type: "Research Report",
      icon: BookOpen,
      color: "text-purple-400",
      cta: "Read Study",
    },
    {
      title: "LMS Integration Guide",
      description: "Technical guide for integrating transformed content with popular learning management systems.",
      type: "Technical Guide",
      icon: Video,
      color: "text-cyan-400",
      cta: "Download Guide",
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Free Content Transformation Resources</h2>
          <p className="text-xl text-slate-300">
            Tools, templates, and insights to help you transform boring content into engaging experiences across all
            compliance areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <resource.icon className={`w-6 h-6 ${resource.color}`} />
                  <span className={`text-sm font-medium ${resource.color}`}>{resource.type}</span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm">{resource.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {resource.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Specific?</h3>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? Our content transformation experts can create custom resources for
              your specific industry and compliance needs.
            </p>
            <Button className="bg-gradient-to-r from-[#14B8A6] to-[#3B82F6] hover:from-[#0F766E] hover:to-[#2563EB]">
              Request Custom Resource
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
