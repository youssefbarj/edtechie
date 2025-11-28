import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/edtechie-logo-official.png"
              alt="EdTechie Corp"
              width={180}
              height={54}
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-500 text-sm leading-relaxed">
              Interactive training that people actually complete. Built for teams who take learning seriously.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Cybersecurity Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Custom E-Learning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Team Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:barjyoussef5@gmail.com" 
                  className="flex items-center gap-2 text-slate-400 hover:text-[#03A6A6] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>barjyoussef5@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:0644562660" 
                  className="flex items-center gap-2 text-slate-400 hover:text-[#03A6A6] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>0644562660</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} EdTechie Corp. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
