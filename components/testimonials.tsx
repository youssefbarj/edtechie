import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "HR Director, TechFlow Inc",
      content:
        "Converting our HIPAA compliance PDFs took 3 weeks. Worth every penny - our completion rates doubled and people actually retain the info now. ROI was clear within 2 months.",
      rating: 5,
      industry: "Healthcare Compliance",
    },
    {
      name: "David Chen",
      role: "Safety Manager, Manufacturing Corp",
      content:
        "Our OSHA training was just endless PowerPoints. EdTechie made it interactive and our incident reports dropped 40%. Managers love the analytics. Saved us $50K in potential fines.",
      rating: 5,
      industry: "Manufacturing Safety",
    },
    {
      name: "Sarah Rodriguez",
      role: "L&D Director, Financial Services",
      content:
        "Had 200+ compliance PDFs gathering dust. EdTechie transformed the critical ones first - saved us 6 months of internal development time. SOX audit prep became actually manageable.",
      rating: 5,
      industry: "Financial Services",
    },
    {
      name: "Michael Thompson",
      role: "Compliance Officer, Corporate HR",
      content:
        "Harassment prevention training went from 23% completion to 94% after EdTechie transformation. The interactive scenarios made all the difference. No more compliance headaches.",
      rating: 5,
      industry: "Corporate HR",
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FEFFFB] mb-4">What Learning Leaders Are Saying</h2>
          <p className="text-xl text-slate-300">
            Real results across healthcare, manufacturing, financial services, and corporate HR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="mb-4">
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
                <p className="text-slate-300 mb-6 italic text-sm">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-[#FEFFFB] text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
