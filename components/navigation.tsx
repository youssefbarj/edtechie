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
    // Reset scroll state on mount
    setIsScrolled(false)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    router.push(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsScrolled(false) // Reset scroll state after navigation
    }, 100)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        isScrolled ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-700/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <Link href="/" className="flex items-center" onClick={() => handleNavClick("/")}>
            <Image
              src="/images/edtechie-logo-official.png"
              alt="EdTechie Corp - E-Learning & Digital Training"
              width={300}
              height={90}
              className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            <button
              onClick={() => handleNavClick("/")}
              className="text-white/90 hover:text-[#03A6A6] transition-all duration-300 text-sm xl:text-base font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="text-white/90 hover:text-[#03A6A6] transition-all duration-300 text-sm xl:text-base font-medium"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/case-studies")}
              className="text-white/90 hover:text-[#03A6A6] transition-all duration-300 text-sm xl:text-base font-medium"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick("/resources")}
              className="text-white/90 hover:text-[#03A6A6] transition-all duration-300 text-sm xl:text-base font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-white/90 hover:text-[#03A6A6] transition-all duration-300 text-sm xl:text-base font-medium"
            >
              Contact
            </button>
            <Button
              asChild
              className="bg-[#180A73] hover:bg-[#4981F2] text-white font-semibold px-4 xl:px-6 py-2 text-sm xl:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/90 hover:text-[#03A6A6] hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-700/50 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavClick("/")}
                className="block w-full text-left px-3 py-3 text-white/90 hover:text-[#03A6A6] hover:bg-white/10 text-base font-medium rounded-lg transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("/services")}
                className="block w-full text-left px-3 py-3 text-white/90 hover:text-[#03A6A6] hover:bg-white/10 text-base font-medium rounded-lg transition-all duration-300"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("/case-studies")}
                className="block w-full text-left px-3 py-3 text-white/90 hover:text-[#03A6A6] hover:bg-white/10 text-base font-medium rounded-lg transition-all duration-300"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleNavClick("/resources")}
                className="block w-full text-left px-3 py-3 text-white/90 hover:text-[#03A6A6] hover:bg-white/10 text-base font-medium rounded-lg transition-all duration-300"
              >
                Resources
              </button>
              <button
                onClick={() => handleNavClick("/contact")}
                className="block w-full text-left px-3 py-3 text-white/90 hover:text-[#03A6A6] hover:bg-white/10 text-base font-medium rounded-lg transition-all duration-300"
              >
                Contact
              </button>
              <div className="px-3 py-3">
                <Button
                  asChild
                  className="w-full bg-[#180A73] hover:bg-[#4981F2] text-base py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
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
