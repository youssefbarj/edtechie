import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuditPopup } from "@/components/audit-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EdTechie Corp - Cybersecurity Training That Actually Works",
  description:
    "Interactive cybersecurity simulations for tech companies. EdTechie Corp specializes in audit-ready training that transforms your security posture. We fix what others break.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EdTechie Corp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Force favicon refresh with cache busting and proper format */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />

        {/* Apple touch icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />

        {/* Web app manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="EdTechie" />
        <meta name="theme-color" content="#4981f2" />
        <meta name="msapplication-TileColor" content="#4981f2" />
      </head>
      <body className={`${inter.className} bg-[#1e293b] text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AuditPopup />
      </body>
    </html>
  )
}
