"use client"

import * as React from "react"
import { Play, ShieldCheck, Phone, Calendar, CreditCard, HeartPulse } from "lucide-react"
import { cn } from "@/lib/utils"

export interface VideoPlaceholderProps {
  useCase: 'rcm' | 'prior-auth' | 'scheduling' | 'billing' | 'care-gap'
  label: string
  duration?: string
  className?: string
}

const useCaseConfig = {
  'rcm': {
    icon: ShieldCheck,
    gradient: 'from-accent-primary/20 via-accent-primary/5 to-transparent',
    iconColor: 'text-accent-primary',
    headline: 'Eligibility Verified',
    subline: 'Copay: $30 · Deductible Met · In-Network',
  },
  'prior-auth': {
    icon: Phone,
    gradient: 'from-accent-violet/20 via-accent-violet/5 to-transparent',
    iconColor: 'text-accent-violet',
    headline: 'Auth Approved',
    subline: 'MRI Lumbar · UHC · Ref #PA-2847291',
  },
  'scheduling': {
    icon: Calendar,
    gradient: 'from-accent-success/20 via-accent-success/5 to-transparent',
    iconColor: 'text-accent-success',
    headline: 'Appointment Booked',
    subline: 'Dr. Patel · Mon 9:00 AM · X-ray + Consult',
  },
  'billing': {
    icon: CreditCard,
    gradient: 'from-accent-warning/20 via-accent-warning/5 to-transparent',
    iconColor: 'text-accent-warning',
    headline: 'Payment Collected',
    subline: '$240.00 · Plan: 3x $80 · Patient Satisfied',
  },
  'care-gap': {
    icon: HeartPulse,
    gradient: 'from-accent-danger/20 via-accent-primary/5 to-transparent',
    iconColor: 'text-accent-danger',
    headline: 'Screening Scheduled',
    subline: 'Mammogram · Fri 2:00 PM · Insurance Verified',
  },
}

export function VideoPlaceholder({ useCase, label, duration, className }: VideoPlaceholderProps) {
  const config = useCaseConfig[useCase]
  const Icon = config.icon

  return (
    <div className={cn("relative w-full aspect-video bg-bg-tertiary border border-border-subtle rounded-2xl overflow-hidden group", className)}>

      {/* Background gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", config.gradient)} />

      {/* Illustration */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
        {/* Icon circle */}
        <div className={cn("w-20 h-20 rounded-2xl bg-bg-secondary/80 border border-border-subtle flex items-center justify-center shadow-lg", config.iconColor)}>
          <Icon className="w-10 h-10" />
        </div>
        {/* Mock result card */}
        <div className="bg-bg-secondary/80 backdrop-blur-sm border border-border-subtle rounded-xl px-6 py-4 text-center shadow-sm max-w-xs">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-accent-success" />
            <span className="text-sm font-semibold text-text-primary">{config.headline}</span>
          </div>
          <span className="text-xs text-text-secondary">{config.subline}</span>
        </div>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="w-16 h-16 rounded-full bg-bg-secondary/90 border border-border-subtle flex items-center justify-center text-text-primary transition-all duration-300 hover:scale-105 shadow-lg"
          aria-label="Play Video"
        >
          <Play className="w-6 h-6 ml-1" />
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-secondary/90 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-text-primary">{label}</span>
          {duration && (
            <span className="text-xs font-mono text-text-muted bg-bg-900/60 px-2 py-0.5 rounded">
              {duration}
            </span>
          )}
        </div>
        <div className="px-2 py-0.5 rounded text-xs font-semibold bg-accent-warning/20 text-accent-warning border border-accent-warning/30">
          Coming Soon
        </div>
      </div>
    </div>
  )
}
