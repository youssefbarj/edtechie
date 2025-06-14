import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-[#f59e0b]">EdTechie</span> builds it tonight,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              you conquer tomorrow.
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stop failing audits. Start building a security culture that actually works with{" "}
            <span className="text-[#f59e0b] font-semibold">EdTechie Corp</span>. Your next audit is coming whether
            you're ready or not.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Link href="/services">View Training Options</Link>
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
