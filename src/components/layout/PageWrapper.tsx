"use client"

import * as React from "react"
import { useScroll, useSpring, motion } from "framer-motion"
import { ThemeBackground } from "@/components/ThemeBackground"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  // Scroll Progress Bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <ThemeBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-primary transform origin-left z-[100]"
        style={{ scaleX }}
      />
      <main className="min-h-screen bg-bg-primary relative flex flex-col">
        {children}
      </main>
    </>
  )
}
