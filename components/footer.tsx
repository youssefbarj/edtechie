import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e293b] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Image
              src="/images/edtechie-logo-vertical.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={200}
              height={150}
              className="h-32 w-auto mb-2"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Interactive cybersecurity training that actually works. We fix what others break.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400">
                  Ready-Made Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400">
                  Custom Simulations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400">
                  Audit Preparation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400">
                  Compliance Tracking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-cyan-400">
                  Audit Checklist
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-cyan-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-cyan-400">
                  Security Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-cyan-400">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>hello@edtechiecorp.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>1-800-EDTECHIE</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 EdTechie Corp. All rights reserved. We fix what others break.</p>
        </div>
      </div>
    </footer>
  )
}
