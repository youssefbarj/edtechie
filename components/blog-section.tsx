import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, TrendingUp, Award, Lightbulb } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Why 73% of Compliance Training Programs Fail (And How to Fix Them)",
      excerpt:
        "The hidden reasons employees skip training and what leading companies do differently to achieve 95%+ completion rates.",
      author: "Dr. Amina Bensalah",
      credentials: "PhD in Educational Psychology",
      date: "Dec 18, 2024",
      readTime: "6 min read",
      category: "Training Effectiveness",
      categoryColor: "text-green-400",
      categoryBg: "bg-green-400/20",
      valueIndicator: "🔥 Most Popular",
      socialProof: "✓ Based on 200+ transformations",
    },
    {
      title: "The Real ROI of Interactive vs Static Training Content",
      excerpt:
        "New data reveals interactive training delivers 4x better retention and 60% faster completion times across all industries.",
      author: "Rachid El-Mansouri",
      credentials: "10+ Years L&D Experience",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "ROI Analysis",
      categoryColor: "text-blue-400",
      categoryBg: "bg-blue-400/20",
      valueIndicator: "📊 Data-Driven",
      socialProof: "✓ Verified ROI data included",
    },
    {
      title: "From Morocco to Fortune 500: Geographic Arbitrage in E-Learning",
      excerpt:
        "How global companies save 60-80% on training development while improving quality through strategic outsourcing.",
      author: "Youssef Benali",
      credentials: "Former Deloitte Consultant",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      category: "Business Strategy",
      categoryColor: "text-yellow-400",
      categoryBg: "bg-yellow-400/20",
      valueIndicator: "💡 Strategic Insights",
      socialProof: "✓ Free templates inside",
    },
  ]

  const getValueIcon = (indicator: string) => {
    if (indicator.includes("Popular")) return TrendingUp
    if (indicator.includes("Data-Driven")) return Award
    if (indicator.includes("Strategic")) return Lightbulb
    return TrendingUp
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest E-Learning Transformation Insights</h2>
          <p className="text-xl text-slate-300">
            Expert analysis, real transformation results, and actionable advice for turning boring content into engaging
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`${post.categoryBg} ${post.categoryColor} px-2 py-1 rounded text-xs font-medium`}>
                      {post.category}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>
                </div>

                {/* Value Indicator Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  {React.createElement(getValueIcon(post.valueIndicator), {
                    className: "w-4 h-4 text-cyan-400",
                  })}
                  <span className="text-xs text-cyan-300 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-500/20">
                    {post.valueIndicator}
                  </span>
                </div>

                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>

                {/* Author Info with Credentials */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <User className="w-3 h-3" />
                    <span className="font-medium text-slate-300">{post.author}</span>
                  </div>
                  <div className="text-xs text-slate-400 ml-5">{post.credentials}</div>
                  <div className="flex items-center space-x-2 text-xs text-slate-500 ml-5">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-500/20">
                  {post.socialProof}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 p-0 group/btn"
                >
                  <span className="group-hover/btn:hidden">Get Insights</span>
                  <span className="hidden group-hover/btn:inline">Learn How</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-500 transition-all duration-300"
          >
            View All Insights
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Want Industry-Specific Insights?</h3>
          <p className="text-slate-300 text-sm mb-4">
            Get tailored transformation strategies for your specific compliance area - HIPAA, OSHA, SOX, or corporate
            training.
          </p>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
          >
            Request Custom Analysis
          </Button>
        </div>
      </div>
    </section>
  )
}
