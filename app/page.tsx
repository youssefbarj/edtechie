import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 100 100"
            className="w-12 h-12 sm:w-16 sm:h-16"
            role="img"
            aria-label="EdTechie Corp"
          >
            {/* Branch */}
            <path
              d="M20 75 Q50 73 80 75"
              stroke="#8B7355"
              strokeWidth="3"
              fill="none"
            />
            {/* Leaves */}
            <ellipse cx="30" cy="75" rx="5" ry="8" fill="#4CAF50" />
            <ellipse cx="45" cy="73" rx="5" ry="8" fill="#4CAF50" />
            <ellipse cx="70" cy="75" rx="5" ry="8" fill="#4CAF50" />
            
            {/* Owl Body */}
            <ellipse cx="50" cy="45" rx="20" ry="25" fill="#00CED1" />
            
            {/* Owl Wings */}
            <ellipse cx="32" cy="48" rx="8" ry="15" fill="#00BEC1" />
            <ellipse cx="68" cy="48" rx="8" ry="15" fill="#00BEC1" />
            
            {/* Owl Head */}
            <circle cx="50" cy="32" r="18" fill="#00CED1" />
            
            {/* Ear Tufts */}
            <path d="M38 18 L35 12 L40 20 Z" fill="#00CED1" />
            <path d="M62 18 L65 12 L60 20 Z" fill="#00CED1" />
            
            {/* Eyes */}
            <circle cx="43" cy="32" r="6" fill="white" />
            <circle cx="57" cy="32" r="6" fill="white" />
            <circle cx="43" cy="32" r="3" fill="#1E293B" />
            <circle cx="57" cy="32" r="3" fill="#1E293B" />
            
            {/* Beak */}
            <path d="M50 35 L45 40 L55 40 Z" fill="#FFA726" />
            
            {/* Feet */}
            <g stroke="#FFA726" strokeWidth="2">
              <path d="M45 65 L43 72" />
              <path d="M45 65 L47 72" />
              <path d="M45 65 L45 72" />
              <path d="M55 65 L53 72" />
              <path d="M55 65 L57 72" />
              <path d="M55 65 L55 72" />
            </g>
          </svg>
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
