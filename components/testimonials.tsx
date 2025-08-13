import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CISO, TechFlow Inc",
      content:
        "EdTechie's simulations caught vulnerabilities our previous training missed. We passed our SOC 2 audit on the first try.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "IT Director, DataSecure",
      content:
        "Finally, training that doesn't put our team to sleep. The interactive scenarios are incredibly realistic.",
      rating: 5,
    },
    {
      name: "Jennifer Walsh",
      role: "Security Manager, CloudTech",
      content: "ROI was immediate. We prevented three major incidents in the first month after training.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What CISOs Are Saying</h2>
          <p className="text-xl text-slate-300">Don't take our word for it. Listen to the experts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
