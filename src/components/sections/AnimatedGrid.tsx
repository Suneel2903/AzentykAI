"use client"

import { useEffect, useState } from "react"

export function AnimatedGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#1E293B" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
        
        {/* Animated glowing dots (Client Side Only) */}
        {mounted && Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={1.5 + Math.random() * 1}
            fill="#00D4FF"
            className="animate-glow-pulse origin-center"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.4
            }}
          />
        ))}

        {/* Scan line effect */}
        <line 
          x1="-10%" y1="0" x2="110%" y2="0" 
          stroke="url(#scan-grad)" strokeWidth="1"
          className="animate-data-flow stroke-dasharray-[100%]"
        />
        <defs>
           <linearGradient id="scan-grad" x1="0" y1="0" x2="1" y2="0">
             <stop offset="0%" stopColor="transparent" />
             <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.4" />
             <stop offset="100%" stopColor="transparent" />
           </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
