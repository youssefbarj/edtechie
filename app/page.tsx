import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0f1729] px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 30 Q20 25 15 30 L10 35 Q8 40 15 42 L20 40 Q22 38 25 40 L30 42 Q37 40 35 35 L30 30 Q27 25 25 30" fill="#00CED1"/>
          <ellipse cx="35" cy="50" rx="25" ry="30" fill="#00CED1"/>
          <circle cx="28" cy="45" r="8" fill="#0f1729"/>
          <circle cx="42" cy="45" r="8" fill="#0f1729"/>
          <circle cx="30" cy="44" r="3" fill="white"/>
          <circle cx="44" cy="44" r="3" fill="white"/>
          <path d="M35 52 L32 56 L35 54 L38 56 Z" fill="#0f1729"/>
          <ellipse cx="20" cy="70" rx="8" ry="12" fill="#00CED1"/>
          <ellipse cx="50" cy="70" rx="8" ry="12" fill="#00CED1"/>
          <rect x="15" y="82" width="40" height="4" rx="2" fill="#00CED1"/>
        </svg>
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#00CED1] to-[#4169E1] bg-clip-text text-transparent">
            EdTechie
          </span>
          <span className="text-xs tracking-[0.3em] text-[#8B7FB8] font-medium">
            CORP
          </span>
        </div>
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
