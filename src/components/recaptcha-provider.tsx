"use client"

import * as React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const [isLocalhost, setIsLocalhost] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname
      setIsLocalhost(hostname === "localhost" || hostname === "127.0.0.1")
    }
  }, [])

  if (!siteKey || isLocalhost) {
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{ async: true, defer: true, appendTo: "head" }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
