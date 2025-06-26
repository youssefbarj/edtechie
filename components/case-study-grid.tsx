import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Play, Target, Zap, AlertTriangle, CheckCircle2 } from "lucide-react"

export function CaseStudyGrid() {
  const transformationExamples = [
    {
      title: "HIPAA Compliance: From Boring PDFs to Interactive Scenarios",
      industry: "Healthcare",
      beforeScenario: {
        format: "432-page HIPAA compliance manual (PDF)",
        problems: [
          "Employees skip through without reading",
          "28% completion rate after 6 months",
          "No way to test real understanding",
          "Failed state audit due to knowledge gaps",
        ],
        icon: FileText,
        iconColor: "text-red-400",
      },
      afterScenario: {
        format: "50 interactive decision-tree modules",
        solutions: [
          "Real hospital scenarios with choices & consequences",
          "94% completion rate within 3 months",
          "Built-in assessments prove comprehension",
          "Zero violations in follow-up audit",
        ],
        icon: Play,
        iconColor: "text-green-400",
      },
      keyInsight:
        "Employees don't avoid training because they're lazy - they avoid it because static content is ineffective. Interactive scenarios make compliance training actually useful.",
      academicEvidence:
        "Dell Medical School study: Interactive learners retained 70.1% vs 55.8% for traditional methods",
      transformationType: "PDF → Interactive Scenarios",
      clientRealization:
        '"I had no idea our PDFs could become decision-making simulations. This actually prepares staff for real situations."',
      serviceLevel: "Enhanced Package",
      cta: "See Your Content Transformed",
    },
    {
      title: "Safety Training: From Death by PowerPoint to VR-Style Learning",
      industry: "Manufacturing",
      beforeScenario: {
        format: "OSHA safety PowerPoints (180 slides)",
        problems: [
          "8% of workers complete the training",
          "Rising workplace incident rates",
          "No practical skills development",
          "30-day onboarding for basic safety",
        ],
        icon: FileText,
        iconColor: "text-red-400",
      },
      afterScenario: {
        format: "Interactive safety simulations",
        solutions: [
          "Virtual equipment operation practice",
          "82% completion rate in first quarter",
          "65% reduction in workplace incidents",
          "10-day onboarding with better outcomes",
        ],
        icon: Target,
        iconColor: "text-green-400",
      },
      keyInsight:
        "Safety training should prepare workers for dangerous situations, not just inform them about policies. Interactive simulations let them practice without risk.",
      academicEvidence:
        "MDPI study: Interactive OSH training showed significantly better safety outcomes vs traditional methods",
      transformationType: "PowerPoint → Safety Simulations",
      clientRealization:
        '"Our PowerPoints were just information dumps. Now workers actually practice what to do in emergencies."',
      serviceLevel: "Premium Package",
      cta: "Transform Safety Training",
    },
    {
      title: "Financial Compliance: From Regulatory Burden to Engaging Learning",
      industry: "Financial Services",
      beforeScenario: {
        format: "Multiple compliance manuals (SOX, FINRA, etc.)",
        problems: [
          "Overwhelming regulatory complexity",
          "Employees confused by abstract rules",
          "Expensive audit preparation process",
          "High stress during compliance reviews",
        ],
        icon: FileText,
        iconColor: "text-red-400",
      },
      afterScenario: {
        format: "Gamified compliance learning paths",
        solutions: [
          "Real-world scenarios with regulatory context",
          "Progressive skill building across frameworks",
          "Self-paced learning with immediate feedback",
          "Confident, audit-ready employees",
        ],
        icon: Zap,
        iconColor: "text-green-400",
      },
      keyInsight:
        "Compliance isn't about memorizing rules - it's about making good decisions under pressure. Interactive training builds judgment, not just knowledge.",
      academicEvidence: "Corporate e-learning research: 353% ROI improvement with scenario-based compliance training",
      transformationType: "Manuals → Gamified Learning Paths",
      clientRealization:
        '"I never thought compliance training could be engaging. Now employees actually understand why rules exist."',
      serviceLevel: "Custom Development",
      cta: "Build Custom Solution",
    },
    {
      title: "What You Didn't Know Was Possible: The Hidden Potential",
      industry: "Any Industry",
      beforeScenario: {
        format: "Your current training materials",
        problems: [
          '"This is just how training works"',
          '"Our employees don\'t like training"',
          '"We can\'t measure real understanding"',
          '"Training feels like a compliance burden"',
        ],
        icon: AlertTriangle,
        iconColor: "text-yellow-400",
      },
      afterScenario: {
        format: "Interactive learning experiences",
        solutions: [
          "Employees request more training modules",
          "Real skill development, not just information",
          "Built-in analytics show actual competency",
          "Training becomes competitive advantage",
        ],
        icon: CheckCircle2,
        iconColor: "text-green-400",
      },
      keyInsight:
        "Most organizations accept poor training results because they don't know what's possible. Modern authoring tools can transform any content into engaging experiences.",
      academicEvidence: "Meta-analysis: Interactive content generates 52.6% more engagement than static materials",
      transformationType: "Any Content → Interactive Experience",
      clientRealization: '"I had no idea this level of transformation was possible. This changes everything."',
      serviceLevel: "Free Assessment",
      cta: "Discover Your Potential",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Educational Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            What Your Training Could Actually Become
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
            Most organizations accept poor training results because they don't know what's possible. Here's what content
            transformation can do for you.
          </p>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-blue-300 text-sm leading-relaxed">
              <strong>Academic Reality Check:</strong> Interactive content shows 25-80% better retention, 50-70% higher
              completion rates, and ROI improvements up to 353%. These aren't marketing claims - they're peer-reviewed
              research results.
            </p>
          </div>
        </div>

        {/* Transformation Examples */}
        <div className="space-y-8 lg:space-y-12">
          {transformationExamples.map((example, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
                <CardTitle className="text-xl sm:text-2xl text-white">{example.title}</CardTitle>
                <p className="text-slate-300">{example.industry}</p>
              </CardHeader>

              <CardContent className="p-6 sm:p-8">
                {/* Before vs After */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Before */}
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <example.beforeScenario.icon className={`w-6 h-6 ${example.beforeScenario.iconColor}`} />
                      <h3 className="text-lg font-semibold text-red-300">Before: Traditional Approach</h3>
                    </div>
                    <p className="text-slate-300 font-medium mb-4">{example.beforeScenario.format}</p>
                    <ul className="space-y-2">
                      {example.beforeScenario.problems.map((problem, idx) => (
                        <li key={idx} className="text-red-200 text-sm flex items-start">
                          <span className="text-red-400 mr-2 flex-shrink-0">•</span>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <example.afterScenario.icon className={`w-6 h-6 ${example.afterScenario.iconColor}`} />
                      <h3 className="text-lg font-semibold text-green-300">After: Interactive Transformation</h3>
                    </div>
                    <p className="text-slate-300 font-medium mb-4">{example.afterScenario.format}</p>
                    <ul className="space-y-2">
                      {example.afterScenario.solutions.map((solution, idx) => (
                        <li key={idx} className="text-green-200 text-sm flex items-start">
                          <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
                  <h4 className="text-blue-300 font-semibold mb-3">Why This Transformation Works</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{example.keyInsight}</p>
                  <div className="text-xs text-blue-400 bg-blue-900/30 p-3 rounded border border-blue-500/20">
                    <strong>Academic Evidence:</strong> {example.academicEvidence}
                  </div>
                </div>

                {/* Client Realization */}
                <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 mb-6">
                  <p className="text-slate-300 text-sm italic">{example.clientRealization}</p>
                  <p className="text-slate-500 text-xs mt-2">— Typical client reaction after seeing transformation</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div className="text-sm text-slate-400">
                    <span className="text-cyan-400 font-medium">{example.transformationType}</span>
                    <span className="mx-2">•</span>
                    <span>{example.serviceLevel}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    {example.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to See What Your Content Could Become?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Most organizations are shocked by what's possible. We'll analyze your current training materials and show
            you the specific transformations that could revolutionize your results.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4"
          >
            Get Free Content Transformation Analysis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
