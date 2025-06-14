"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1e293b]/95 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
      style={{ minHeight: "6rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/edtechie-logo-official.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={600}
              height={200}
              className="h-16 w-auto max-w-none"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/resources" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Button
              asChild
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1e293b] border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-slate-300 hover:text-cyan-400">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-slate-300 hover:text-cyan-400">
                Services
              </Link>
              <Link href="/case-studies" className="block px-3 py-2 text-slate-300 hover:text-cyan-400">
                Case Studies
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-slate-300 hover:text-cyan-400">
                Resources
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-slate-300 hover:text-cyan-400">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-[#f59e0b] hover:bg-[#d97706]">
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
