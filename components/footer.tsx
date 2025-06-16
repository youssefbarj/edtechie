import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e293b] border-t border-slate-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/edtechie-logo-vertical.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={220}
              height={280}
              className="h-24 sm:h-32 lg:h-36 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xs">
              Interactive e-learning transformation across all compliance areas. We transform boring PDFs into engaging
              experiences that actually work.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Content Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Custom Course Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Learning Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  LMS Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Industries</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Healthcare & HIPAA
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Manufacturing & Safety
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#03A6A6] transition-colors">
                  Corporate HR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">hello@edtechiecorp.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>1-800-EDTECHIE</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-400">
          <p>&copy; 2024 EdTechie Corp. All rights reserved. We transform boring content into engaging experiences.</p>
        </div>
      </div>
    </footer>
  )
}
