import Image from "next/image"
import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0f1729] px-4">
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/images/edtechie-logo-horizontal.png"
          alt="EdTechie Corp"
          width={280}
          height={80}
          priority
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        We're working on something new.
      </h1>
      
      {/* Subtext */}
      <p className="text-gray-400 text-lg text-center mb-16">
        Our website is currently being updated. Check back soon!
      </p>

      {/* Contact */}
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-2">Questions? Reach out directly:</p>
        <a 
          href="mailto:barjyoussef5@gmail.com" 
          className="inline-flex items-center gap-2 text-[#00CED1] hover:underline"
        >
          <Mail size={16} />
          barjyoussef5@gmail.com
        </a>
      </div>
    </main>
  )
}