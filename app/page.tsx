import Image from "next/image"
import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/owl-icon.png"
            alt="EdTechie Corp"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-[#00CED1] font-heading">
            EdTechie CORP
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading">
            We're working on something new.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Our website is currently being updated. Check back soon!
          </p>
        </div>

        {/* Contact Section */}
        <div className="pt-8 space-y-3">
          <p className="text-gray-400 text-sm sm:text-base">
            Questions? Reach out directly:
          </p>
          <a
            href="mailto:barjyoussef5@gmail.com"
            className="inline-flex items-center gap-2 text-[#00CED1] hover:text-[#40E0D0] transition-colors text-base sm:text-lg"
          >
            <Mail className="w-5 h-5" />
            barjyoussef5@gmail.com
          </a>
        </div>
      </div>
    </main>
  )
}
