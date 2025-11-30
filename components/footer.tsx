import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Content Transformation", href: "/services" },
    { label: "LMS Development", href: "/services" },
    { label: "Digital Strategy", href: "/services" },
  ],
  company: [
    { label: "Our Story", href: "/case-studies" },
    { label: "Institut Fandi Case Study", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "E-Learning Guide", href: "/resources" },
    { label: "Transformation Checklist", href: "/resources" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-[#0F1235] border-t border-[#3D2C8D]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand column - larger */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/edtechie-logo-official.png"
                alt="EdTechie Corp"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#FDFBD4]/60 leading-relaxed mb-6 max-w-sm">
              Aide et conseil en transformation digitale des processus de formation et d&apos;apprentissage.
            </p>
            <p className="text-[#FDFBD4]/40 text-sm leading-relaxed max-w-sm">
              We help vocational academies and training institutes transform their proven courses 
              into interactive e-learning experiences that reach students worldwide.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D2C8D]/30 flex items-center justify-center text-[#FDFBD4]/60 hover:bg-[#00CED1]/20 hover:text-[#00CED1] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FDFBD4] font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-[#FDFBD4]/50 hover:text-[#00CED1] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[#FDFBD4] font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-[#FDFBD4]/50 hover:text-[#00CED1] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h3 className="text-[#FDFBD4] font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:barjyoussef5@gmail.com" 
                  className="flex items-start gap-3 text-[#FDFBD4]/50 hover:text-[#00CED1] transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">barjyoussef5@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+212644562660" 
                  className="flex items-start gap-3 text-[#FDFBD4]/50 hover:text-[#00CED1] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+212 644 562 660</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#FDFBD4]/50">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Morocco • Remote Worldwide</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3D2C8D]/30 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FDFBD4]/40 text-sm">
            © {new Date().getFullYear()} EdTechie Corp. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#FDFBD4]/40 hover:text-[#FDFBD4]/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#FDFBD4]/40 hover:text-[#FDFBD4]/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
