import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Quick Contact */}
      <div className="bg-[#3D2C8D]/10 rounded-2xl border border-[#3D2C8D]/20 p-6 lg:p-8">
        <h2 className="text-xl font-bold text-[#FDFBD4] mb-6">Quick Contact</h2>
        
        <div className="space-y-5">
          <a 
            href="mailto:barjyoussef5@gmail.com" 
            className="flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00CED1]/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#00CED1]" />
            </div>
            <div>
              <div className="text-[13px] text-[#FDFBD4]/40 uppercase tracking-wider mb-1">Email</div>
              <div className="text-[#FDFBD4] group-hover:text-[#00CED1] transition-colors">barjyoussef5@gmail.com</div>
            </div>
          </a>

          <a 
            href="tel:+212644562660" 
            className="flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3D2C8D]/30 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#3D2C8D]" />
            </div>
            <div>
              <div className="text-[13px] text-[#FDFBD4]/40 uppercase tracking-wider mb-1">Phone</div>
              <div className="text-[#FDFBD4] group-hover:text-[#00CED1] transition-colors">+212 644 562 660</div>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF8559]/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#FF8559]" />
            </div>
            <div>
              <div className="text-[13px] text-[#FDFBD4]/40 uppercase tracking-wider mb-1">Location</div>
              <div className="text-[#FDFBD4]">Morocco • Remote Worldwide</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-[13px] text-[#FDFBD4]/40 uppercase tracking-wider mb-1">Languages</div>
              <div className="text-[#FDFBD4]">French • English • Arabic</div>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-gradient-to-br from-[#00CED1]/10 to-[#3D2C8D]/10 rounded-2xl border border-[#00CED1]/20 p-6 lg:p-8">
        <h2 className="text-xl font-bold text-[#FDFBD4] mb-6">What to Expect</h2>
        
        <div className="space-y-4">
          {[
            { step: "01", title: "Free Consultation", desc: "30-minute call to understand your needs" },
            { step: "02", title: "Custom Roadmap", desc: "Tailored transformation plan for your content" },
            { step: "03", title: "Transparent Pricing", desc: "Clear quote with no hidden fees" },
            { step: "04", title: "Fast Start", desc: "Begin your transformation within 1 week" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-[#00CED1] text-[12px] font-bold tracking-wider mt-1">{item.step}</div>
              <div>
                <div className="text-[#FDFBD4] font-semibold">{item.title}</div>
                <div className="text-[13px] text-[#FDFBD4]/50">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
