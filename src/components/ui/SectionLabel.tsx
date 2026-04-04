import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "font-mono text-accent-primary text-xs tracking-widest uppercase mb-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
