"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    router.push(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1e293b]/95 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
      style={{ minHeight: "6rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center" onClick={() => handleNavClick("/")}>
            <Image
              src="/images/edtechie-logo-official.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={300}
              height={90}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("/")}
              className="text-slate-300 hover:text-[#03A6A6] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="text-slate-300 hover:text-[#03A6A6] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/case-studies")}
              className="text-slate-300 hover:text-[#03A6A6] transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick("/resources")}
              className="text-slate-300 hover:text-[#03A6A6] transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-slate-300 hover:text-[#03A6A6] transition-colors"
            >
              Contact
            </button>
            <Button
              asChild
              className="bg-[#180A73] hover:bg-[#4981F2] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
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
              <button
                onClick={() => handleNavClick("/")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-[#03A6A6]"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("/services")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-[#03A6A6]"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("/case-studies")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-[#03A6A6]"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleNavClick("/resources")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-[#03A6A6]"
              >
                Resources
              </button>
              <button
                onClick={() => handleNavClick("/contact")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-[#03A6A6]"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-[#180A73] hover:bg-[#4981F2]">
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
