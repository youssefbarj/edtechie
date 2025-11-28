"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

interface SiteGateProps {
  constructionPage: React.ReactNode
  actualSite: React.ReactNode
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
    <Suspense fallback={constructionPage}>
      <SiteGateContent constructionPage={constructionPage} actualSite={actualSite} />
    </Suspense>
  )
}
