'use client'

import { useEffect, useState } from 'react'

// ── Kore.ai style — light bg, animated gradient orbs ───
function KoreBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Grid dots pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(5,150,105,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }}
      />

      {/* Orb 1 — large green top-left */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 70%)',
        top: -200, left: -150, filter: 'blur(60px)',
        animation: 'kore-orb-a 18s ease-in-out infinite',
      }} />

      {/* Orb 2 — purple right */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)',
        top: '25%', right: -80, filter: 'blur(55px)',
        animation: 'kore-orb-b 14s ease-in-out infinite',
      }} />

      {/* Orb 3 — teal bottom-center */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 70%)',
        bottom: -150, left: '20%', filter: 'blur(70px)',
        animation: 'kore-orb-c 22s ease-in-out infinite',
      }} />

      {/* Orb 4 — small green mid-right */}
      <div style={{
        position: 'absolute', width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(5,150,105,0.14) 0%, transparent 70%)',
        top: '55%', right: '30%', filter: 'blur(45px)',
        animation: 'kore-orb-a 16s ease-in-out infinite',
        animationDelay: '-9s',
      }} />

      {/* Orb 5 — purple top-right */}
      <div style={{
        position: 'absolute', width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        top: '8%', right: '25%', filter: 'blur(40px)',
        animation: 'kore-orb-b 20s ease-in-out infinite',
        animationDelay: '-4s',
      }} />
    </div>
  )
}

// ── ThemeBackground — renders based on active data-theme ─
export function ThemeBackground() {
  const [theme, setTheme] = useState<string>('')

  useEffect(() => {
    const read = () =>
      setTheme(document.documentElement.getAttribute('data-theme') ?? 'cyberTeal')

    read()

    const obs = new MutationObserver(read)
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => obs.disconnect()
  }, [])

  if (theme === 'growthGreen') return <KoreBackground />
  return null
}
