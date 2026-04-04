"use client"

import * as React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

interface AnalyticsAccordionProps {
  analytics: string[]
}

export function AnalyticsAccordion({ analytics }: AnalyticsAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="mt-4">
      <Accordion.Item value="analytics" className="border border-border-subtle rounded-xl overflow-hidden bg-bg-secondary/50">
        <Accordion.Header>
           <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-sm font-semibold text-text-primary hover:bg-white/5 transition-colors group">
              What you measure in the dashboard
              <ChevronDown className="w-4 h-4 text-text-muted group-data-[state=open]:rotate-180 transition-transform" />
           </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="p-4 pt-0 text-text-secondary text-sm overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
           <ul className="list-disc pl-5 space-y-2 mt-2">
             {analytics.map((item, i) => (
               <li key={i}>{item}</li>
             ))}
           </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
