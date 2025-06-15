"use client"

import { useEffect } from "react"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { DemoScheduler } from "@/components/demo-scheduler"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-950 pt-16">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <DemoScheduler />
        <ContactForm />
      </div>
      <ContactInfo />
    </div>
  )
}
