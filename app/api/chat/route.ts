import { NextRequest, NextResponse } from "next/server"

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

// ============================================
// SYSTEM PROMPT - EASY TO CUSTOMIZE
// Edit this to change how the AI assistant behaves
// ============================================
const SYSTEM_PROMPT = `You are a helpful assistant for EdTechie Corp.

About EdTechie Corp:
- E-learning and cybersecurity training company
- Interactive, hands-on training that actually engages teams
- Services: Cybersecurity Training, Custom E-Learning, Team Workshops, Rapid Deployment
- 95% audit pass rate, ~14 day delivery
- Contact: barjyoussef5@gmail.com | 0644562660

Your style:
- Friendly and helpful, not corporate
- Keep answers concise (2-3 sentences when possible)
- For pricing questions, say to contact us for a custom quote
- Encourage visitors to reach out via contact page or email`
// ============================================

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      )
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://edtechiecorp.com",
        "X-Title": "EdTechie Corp Website"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.2-3b-instruct:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("OpenRouter API error:", errorData)
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: response.status }
      )
    }

    const data = await response.json()
    const assistantMessage = data.choices?.[0]?.message?.content

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
