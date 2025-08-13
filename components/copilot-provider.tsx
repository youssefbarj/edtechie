"use client"

import type React from "react"

import { CopilotKit } from "@copilotkit/react-core"
import { CopilotPopup } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"

interface CopilotProviderProps {
  children: React.ReactNode
}

export function CopilotProvider({ children }: CopilotProviderProps) {
  return (
    <CopilotKit publicApiKey="ck_pub_11a68d047402142751c76b2f24efb127">
      {children}
      <CopilotPopup
        instructions="You are an AI assistant for EdTechie Corp, a cybersecurity training company. Help visitors with:
        - Information about cybersecurity training services
        - Audit preparation and compliance questions
        - Phishing simulation and security awareness training
        - Custom training solutions for businesses
        - Scheduling demos and consultations
        - General cybersecurity best practices
        
        Be professional, knowledgeable, and focus on how EdTechie Corp can help solve their security training needs. Always encourage them to schedule a demo or contact the team for personalized solutions."
        labels={{
          title: "EdTechie Security Assistant",
          initial: "Hi! I'm your EdTechie security assistant. How can I help you with cybersecurity training today?",
        }}
        defaultOpen={false}
      />
    </CopilotKit>
  )
}
