import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e293b] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/edtechie-logo-vertical.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={220}
              height={280}
              className="h-36 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Interactive e-learning transformation across all compliance areas. We transform boring PDFs into engaging
              experiences that actually work.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6]">
                  Content Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6]">
                  Custom Course Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6]">
                  Learning Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6]">
                  LMS Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6]">
                  Healthcare & HIPAA
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6]">
                  Manufacturing & Safety
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6]">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6]">
                  Corporate HR
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
          <p>&copy; 2024 EdTechie Corp. All rights reserved. We transform boring content into engaging experiences.</p>
        </div>
      </div>
    </footer>
  )
}
