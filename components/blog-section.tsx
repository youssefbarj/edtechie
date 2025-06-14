import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Why 67% of Companies Fail Their First Security Audit",
      excerpt: "The most common mistakes that lead to audit failures and how to avoid them.",
      author: "Sarah Chen, CISO",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Compliance",
    },
    {
      title: "The Real Cost of a Security Breach in 2024",
      excerpt: "Beyond the headlines: hidden costs that can destroy your business.",
      author: "Marcus Rodriguez, Security Expert",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Risk Management",
    },
    {
      title: "Building a Security Culture That Actually Works",
      excerpt: "How to transform your team from your biggest liability to your strongest defense.",
      author: "Jennifer Walsh, Training Director",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Training",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Security Insights</h2>
          <p className="text-xl text-slate-300">
            Expert analysis, real-world case studies, and actionable security advice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-2">
                  <span className="bg-cyan-400/20 px-2 py-1 rounded text-xs">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 p-0"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-500"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
