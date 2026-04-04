"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"

export interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  duration = 1.5,
  className = "font-mono",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [count, setCount] = React.useState(from)

  React.useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    let animationFrame: number

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(from + (to - from) * easeProgress)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      } else {
        setCount(to)
      }
    }

    animationFrame = requestAnimationFrame(updateCounter)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [inView, from, to, duration])

  // Format with commas
  const formattedCount = new Intl.NumberFormat("en-US").format(count)

  return (
    <span ref={ref} className={className}>
      {formattedCount}
      {suffix}
    </span>
  )
}
