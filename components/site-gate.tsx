"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

interface SiteGateProps {
  constructionPage: React.ReactNode
  actualSite: React.ReactNode
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#03A6A6] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function SiteGateContent({ constructionPage, actualSite }: SiteGateProps) {
  const searchParams = useSearchParams()
  const showPreview = searchParams.get("preview") === "true"

  if (showPreview) {
    return <>{actualSite}</>
  }

  return <>{constructionPage}</>
}

export function SiteGate({ constructionPage, actualSite }: SiteGateProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SiteGateContent constructionPage={constructionPage} actualSite={actualSite} />
    </Suspense>
  )
}
