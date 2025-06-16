"use client"

import { useEffect } from "react"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { DemoScheduler } from "@/components/demo-scheduler"

export default function ContactPage() {
  useEffect(() => {
    // Ensure we start at the top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <DemoScheduler />
        <ContactForm />
      </div>
      <ContactInfo />
    </div>
  )
}
