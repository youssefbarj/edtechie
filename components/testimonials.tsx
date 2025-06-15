import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "HR Director, TechFlow Inc",
      content:
        "EdTechie transformed our boring HR compliance PDFs into interactive experiences. Completion rates went from 34% to 91% in just one quarter.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Safety Manager, Manufacturing Corp",
      content:
        "Our OSHA training was death by PowerPoint. EdTechie's interactive modules increased engagement by 73% and reduced incidents significantly.",
      rating: 5,
    },
    {
      name: "Sarah Rodriguez",
      role: "L&D Director, Financial Services",
      content:
        "We had thousands of compliance PDFs gathering digital dust. EdTechie transformed them into engaging courses our employees actually complete.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FEFFFB] mb-4">What Learning Leaders Are Saying</h2>
          <p className="text-xl text-slate-300">Don't take our word for it. Listen to the transformation results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-[#03A6A6]/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#05F2C7] fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-[#FEFFFB]">{testimonial.name}</div>
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
