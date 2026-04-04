'use client'

import { useState, useEffect, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'
import { themes, DEFAULT_THEME, type ThemeKey } from '@/lib/themes'

const STORAGE_KEY = 'azentyk-theme'

export function ThemeToggle() {
  const [current, setCurrent] = useState<ThemeKey>(DEFAULT_THEME)

  const applyTheme = useCallback((key: ThemeKey) => {
    const vars = themes[key]?.vars
    if (!vars) return
    const root = document.documentElement
    Object.entries(vars).forEach(([prop, value]) => {
      root.style.setProperty(prop, value)
    })
    root.setAttribute('data-theme', key)
  }, [])

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null
    const theme = saved && themes[saved] ? saved : DEFAULT_THEME
    setCurrent(theme)
    applyTheme(theme)
  }, [applyTheme])

  function toggle() {
    const next: ThemeKey = current === 'cyberTeal' ? 'growthGreen' : 'cyberTeal'
    setCurrent(next)
    applyTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <button
      suppressHydrationWarning
      onClick={toggle}
      title={current === 'cyberTeal' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-border-subtle flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all"
    >
      {current === 'cyberTeal' ? (
        <Sun className="w-4 h-4 text-text-primary" />
      ) : (
        <Moon className="w-4 h-4 text-text-primary" />
      )}
    </button>
  )
}
