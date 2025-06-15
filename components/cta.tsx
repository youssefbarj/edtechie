import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-[#180A73] to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FEFFFB]">
            <span className="text-[#4981F2]">EdTechie</span> transforms your content,{" "}
            <span className="text-[#03A6A6]">your learners actually learn.</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stop losing learners to boring content. Start building engaging experiences that actually work with{" "}
            <span className="text-[#4981F2] font-semibold">EdTechie Corp</span>. Your next compliance deadline is coming
            whether you're ready or not.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#4981F2] hover:bg-[#180A73] text-[#FEFFFB] font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Transform Your Content</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-[#FEFFFB] px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Link href="/services">View Transformation Examples</Link>
            </Button>
          </div>

          <div className="pt-8 text-slate-400 text-sm">
            <p>Free consultation • No commitment • Results guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
