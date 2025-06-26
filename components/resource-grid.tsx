"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, FileText, ArrowRight, Play, Download, Eye } from "lucide-react"

export function ResourceGrid() {
  // Live ROI Calculator state (embedded, no modal)
  const [employees, setEmployees] = useState(500)
  const [currentCost, setCurrentCost] = useState(100000)

  // Real-time calculations
  const moroccanSavings = currentCost * 0.65
  const productivityGains = employees * 65000 * 0.15 * 0.4 // 40% completion improvement
  const totalSavings = moroccanSavings + productivityGains

  // Transformation examples for instant viewing
  const transformationExamples = [
    {
      title: "HIPAA Compliance Training",
      industry: "Healthcare",
      before: {
        type: "432-page PDF manual",
        completion: "34%",
        time: "45 minutes",
        engagement: "2/10",
      },
      after: {
        type: "Interactive scenarios",
        completion: "87%",
        time: "12 minutes",
        engagement: "9/10",
      },
      preview: "/placeholder.svg?height=200&width=300&text=Interactive+HIPAA+Training",
    },
    {
      title: "Safety Protocol Training",
      industry: "Manufacturing",
      before: {
        type: "180-slide PowerPoint",
        completion: "23%",
        time: "60 minutes",
        engagement: "1/10",
      },
      after: {
        type: "VR-style simulations",
        completion: "84%",
        time: "18 minutes",
        engagement: "9/10",
      },
      preview: "/placeholder.svg?height=200&width=300&text=Interactive+Safety+Training",
    },
    {
      title: "Financial Compliance",
      industry: "Finance",
      before: {
        type: "Multiple regulation manuals",
        completion: "41%",
        time: "90 minutes",
        engagement: "3/10",
      },
      after: {
        type: "Gamified learning paths",
        completion: "91%",
        time: "25 minutes",
        engagement: "8/10",
      },
      preview: "/placeholder.svg?height=200&width=300&text=Interactive+Finance+Training",
    },
  ]

  const costComparison = [
    { provider: "US Agency", cost: 150000, quality: "High", speed: "Slow" },
    { provider: "Freelancer", cost: 45000, quality: "Variable", speed: "Variable" },
    { provider: "EdTechie", cost: 35000, quality: "High", speed: "Fast" },
    { provider: "DIY Tools", cost: 12000, quality: "Low", speed: "Very Slow" },
  ]

  const instantResources = [
    {
      title: "Transformation Examples Gallery",
      description: "See real before/after examples across industries",
      icon: Eye,
      color: "text-purple-400",
      cta: "View Examples",
      action: () => window.open("/downloads/transformation-gallery.pdf", "_blank"),
    },
    {
      title: "Industry Benchmarks Report",
      description: "Interactive vs static training performance data",
      icon: BarChart3,
      color: "text-blue-400",
      cta: "Download Report",
      action: () => window.open("/downloads/industry-benchmarks.pdf", "_blank"),
    },
    {
      title: "Template Library Access",
      description: "Ready-to-use templates for common compliance areas",
      icon: FileText,
      color: "text-cyan-400",
      cta: "Browse Templates",
      action: () => window.open("/templates", "_blank"),
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">See What Your Training Could Become</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Instant examples, live calculators, and real transformation results. No forms, no friction - just immediate
            value.
          </p>
        </div>

        {/* Before/After Transformation Gallery - INSTANT ACCESS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Real Transformation Examples</h3>
            <p className="text-lg text-slate-300">See exactly how boring content becomes engaging</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {transformationExamples.map((example, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white">{example.title}</CardTitle>
                  <p className="text-slate-400 text-sm">{example.industry}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Preview Image */}
                  <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
                    <img
                      src={example.preview || "/placeholder.svg"}
                      alt={`${example.title} transformation`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Before vs After Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold text-sm mb-2">Before</h4>
                      <div className="space-y-1 text-xs">
                        <p className="text-slate-400">{example.before.type}</p>
                        <p className="text-red-300">Completion: {example.before.completion}</p>
                        <p className="text-slate-400">Time: {example.before.time}</p>
                        <p className="text-slate-400">Engagement: {example.before.engagement}</p>
                      </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold text-sm mb-2">After</h4>
                      <div className="space-y-1 text-xs">
                        <p className="text-slate-400">{example.after.type}</p>
                        <p className="text-green-300">Completion: {example.after.completion}</p>
                        <p className="text-slate-400">Time: {example.after.time}</p>
                        <p className="text-slate-400">Engagement: {example.after.engagement}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Play className="w-4 h-4 mr-2" />
                    Try Interactive Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Live ROI Calculator - EMBEDDED, NO MODAL */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-500/30 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white mb-2">Live ROI Calculator</CardTitle>
              <p className="text-slate-300">See your savings in real-time as you type</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees</label>
                    <Input
                      type="number"
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value) || 0)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Current Annual Training Cost
                    </label>
                    <Input
                      type="number"
                      value={currentCost}
                      onChange={(e) => setCurrentCost(Number(e.target.value) || 0)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Your Instant Savings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Morocco Cost Advantage:</span>
                      <span className="text-green-400 font-bold">${moroccanSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Productivity Gains:</span>
                      <span className="text-blue-400 font-bold">${Math.round(productivityGains).toLocaleString()}</span>
                    </div>
                    <hr className="border-slate-600" />
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Total Annual Savings:</span>
                      <span className="text-2xl font-bold text-green-400">
                        ${Math.round(totalSavings).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Comparison Chart - INSTANT VISUAL */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Instant Cost Comparison</h3>
            <p className="text-lg text-slate-300">
              See why EdTechie is the smart choice between expensive agencies and risky freelancers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {costComparison.map((option, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 text-center ${option.provider === "EdTechie" ? "ring-2 ring-green-500/50 scale-105" : ""}`}
              >
                <CardHeader>
                  <CardTitle className={`text-lg ${option.provider === "EdTechie" ? "text-green-400" : "text-white"}`}>
                    {option.provider}
                  </CardTitle>
                  {option.provider === "EdTechie" && (
                    <div className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">Best Value</div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-2">${option.cost.toLocaleString()}</div>
                  <div className="space-y-1 text-sm">
                    <p className="text-slate-400">Quality: {option.quality}</p>
                    <p className="text-slate-400">Speed: {option.speed}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instant Download Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Instant Access Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {instantResources.map((resource, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <resource.icon className={`w-6 h-6 ${resource.color}`} />
                    <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">{resource.description}</p>
                  <Button
                    onClick={resource.action}
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 border border-slate-600 hover:border-cyan-500 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {resource.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Optional Email Capture - ONLY for enhanced access */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Want Industry-Specific Examples?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get transformation examples tailored to your specific compliance area - HIPAA, OSHA, SOX, or corporate
            training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input placeholder="Your work email" className="bg-slate-700 border-slate-600 text-white" />
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 whitespace-nowrap">
              Get Examples
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Optional - you already got the main resources above • No spam, unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  )
}
