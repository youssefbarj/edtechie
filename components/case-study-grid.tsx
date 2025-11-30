import { ArrowRight, Check, Globe, FileText, Users, Sparkles } from "lucide-react"

export function CaseStudyGrid() {
  return (
    <section className="py-20 bg-[#1A1F5C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* The Challenge */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#FF8559]" />
            <span className="text-[#FF8559] text-[12px] font-semibold tracking-[0.15em] uppercase">The Challenge</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#FDFBD4] mb-6">
                Award-winning expertise,
                <br />
                <span className="text-[#FDFBD4]/50">trapped in PDFs.</span>
              </h2>
              <p className="text-[#FDFBD4]/60 text-lg leading-relaxed mb-6">
                Institut Fandi—Morocco&apos;s leading beauty academy with 30+ years of excellence and 
                a 1st prize win at the 21st National Competition—had world-class training content. 
                But it was locked in static PDFs, accessible only to students who could physically 
                relocate to Morocco.
              </p>
              <ul className="space-y-3">
                {[
                  "Static PDF courses with zero interactivity",
                  "Students limited to those who could relocate",
                  "Capacity capped by physical classroom size",
                  "No way to track student progress or engagement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FF8559] mt-1">✕</span>
                    <span className="text-[#FDFBD4]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#3D2C8D]/20 rounded-2xl border border-[#3D2C8D]/30 p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF8559]/20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#FF8559]" />
                </div>
                <h3 className="text-xl font-bold text-[#FDFBD4] mb-2">Before Transformation</h3>
                <div className="space-y-4 mt-6 text-left">
                  <div className="flex justify-between items-center py-3 border-b border-[#3D2C8D]/20">
                    <span className="text-[#FDFBD4]/50">Content Format</span>
                    <span className="text-[#FF8559]">Static PDFs</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#3D2C8D]/20">
                    <span className="text-[#FDFBD4]/50">Student Reach</span>
                    <span className="text-[#FF8559]">Local Only</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#3D2C8D]/20">
                    <span className="text-[#FDFBD4]/50">Capacity</span>
                    <span className="text-[#FF8559]">~50/class</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#FDFBD4]/50">Progress Tracking</span>
                    <span className="text-[#FF8559]">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#3D2C8D]" />
            <span className="text-[#3D2C8D] text-[12px] font-semibold tracking-[0.15em] uppercase">The Solution</span>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                stage: "01",
                title: "Content Transformation",
                description: "We digitalized 30 years of Institut Fandi's proven beauty training curriculum into interactive e-learning modules with video integration, quizzes, and practical demonstrations.",
                duration: "4 weeks",
              },
              {
                stage: "02", 
                title: "Platform Engineering",
                description: "Built a custom LMS tailored for beauty industry education—student dashboards, progress tracking, certificate generation, and mobile-responsive design.",
                duration: "6 weeks",
              },
              {
                stage: "03",
                title: "Digital Launch",
                description: "Trained Institut Fandi's team to manage the platform, migrated initial students, and launched marketing to reach international learners.",
                duration: "3 weeks",
              },
            ].map((phase, i) => (
              <div key={i} className="bg-[#3D2C8D]/10 rounded-xl border border-[#3D2C8D]/20 p-6">
                <div className="text-[#00CED1] text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
                  Stage {phase.stage}
                </div>
                <h3 className="text-xl font-bold text-[#FDFBD4] mb-3">{phase.title}</h3>
                <p className="text-[#FDFBD4]/60 text-[14px] leading-relaxed mb-4">{phase.description}</p>
                <div className="pt-4 border-t border-[#3D2C8D]/20">
                  <span className="text-[12px] text-[#FDFBD4]/40 uppercase tracking-wider">Duration: </span>
                  <span className="text-[13px] text-[#00CED1] font-semibold">{phase.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Results */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#00CED1]" />
            <span className="text-[#00CED1] text-[12px] font-semibold tracking-[0.15em] uppercase">The Results</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-[#00CED1]/20 to-[#3D2C8D]/20 rounded-2xl border border-[#00CED1]/30 p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00CED1]/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#00CED1]" />
                </div>
                <h3 className="text-xl font-bold text-[#FDFBD4] mb-2">After Transformation</h3>
                <div className="space-y-4 mt-6 text-left">
                  <div className="flex justify-between items-center py-3 border-b border-[#00CED1]/20">
                    <span className="text-[#FDFBD4]/50">Content Format</span>
                    <span className="text-[#00CED1]">Interactive LMS</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#00CED1]/20">
                    <span className="text-[#FDFBD4]/50">Student Reach</span>
                    <span className="text-[#00CED1]">3+ Countries</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#00CED1]/20">
                    <span className="text-[#FDFBD4]/50">Active Students</span>
                    <span className="text-[#00CED1]">2,000+</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#FDFBD4]/50">Progress Tracking</span>
                    <span className="text-[#00CED1]">Real-time Analytics</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#FDFBD4] mb-6">
                From local academy to
                <br />
                <span className="text-[#00CED1]">global platform.</span>
              </h2>
              <p className="text-[#FDFBD4]/60 text-lg leading-relaxed mb-6">
                In just 4 months, Institut Fandi went from serving local students only to 
                reaching learners in 3+ countries. Their award-winning expertise is now 
                accessible to anyone, anywhere, on any device.
              </p>
              <ul className="space-y-3">
                {[
                  "Students from France, Belgium, and beyond",
                  "24/7 platform availability",
                  "Unlimited concurrent student capacity",
                  "Real-time progress tracking and certificates",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00CED1] mt-0.5 flex-shrink-0" />
                    <span className="text-[#FDFBD4]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <div className="bg-[#3D2C8D]/10 rounded-2xl border border-[#3D2C8D]/20 p-8 lg:p-12 max-w-4xl mx-auto">
            <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl text-[#FDFBD4] font-light leading-relaxed mb-8">
              &quot;EdTechie didn&apos;t just digitize our courses—they transformed how we deliver education. 
              Students in Europe can now access the same quality training that made us Morocco&apos;s 
              leading beauty academy. That was impossible before.&quot;
            </blockquote>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#D4AF37] font-bold text-xl">IF</span>
              </div>
              <div className="text-[#FDFBD4] font-semibold">Institut Fandi</div>
              <div className="text-[#D4AF37] text-sm">🏆 1st Prize Winner, 21st National Competition</div>
              <div className="text-[#FDFBD4]/50 text-sm">30+ Years of Excellence in Beauty Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
