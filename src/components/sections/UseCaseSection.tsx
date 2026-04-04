"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as Tabs from "@radix-ui/react-tabs"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Badge } from "@/components/ui/Badge"
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder"

// Extracted data for cleaner component
const useCases = [
  {
    id: "rcm-eligibility",
    title: "RCM Eligibility",
    badge: "USE CASE 01  ·  REVENUE CYCLE",
    problem: "Front desk staff manually verify insurance for every patient visit — 12 minutes of IVR hell, per patient, per day.",
    agentActionsHeading: "What Azentyk does instead:",
    actions: [
      "Calls payer IVR systems and APIs autonomously",
      "Extracts copay, deductible, OOP max, prior auth requirements",
      "Flags discrepancies and alerts only when escalation is needed",
      "Updates patient record before the front desk even says hello"
    ],
    outcomes: ["12 min → 90 sec", "↓72% Claim Denials", "↑Clean Claim Rate"],
    videoLabel: "RCM Eligibility — Agent Demo",
    videoType: "rcm" as const
  },
  {
    id: "prior-auth",
    title: "Prior Authorization",
    badge: "USE CASE 02  ·  CLINICAL OPERATIONS",
    problem: "A doctor orders an MRI. The system flags: Prior Auth Required. And then a human waits 7–10 days, filling a 10-page form, while the patient delays treatment.",
    agentActionsHeading: "What Azentyk does instead:",
    actions: [
      "Detects the order the moment it's placed in the EHR",
      "Gathers 90 days of progress notes and lab results automatically",
      "Fills and submits payer-specific form via portal",
      "Tracks status and notifies team when approved"
    ],
    outcomes: ["7-10 days → 4 hours", "↓60% Cancellations", "↑Revenue Capture"],
    videoLabel: "Prior Auth — Agent Demo",
    videoType: "prior-auth" as const
  },
  {
    id: "scheduling",
    title: "Scheduling",
    badge: "USE CASE 03  ·  PATIENT ACCESS",
    problem: "It's 11:47pm. A patient calls to book an urgent appointment. Four rings. Voicemail. Tomorrow, they book with your competitor.",
    agentActionsHeading: "What Azentyk does instead:",
    actions: [
      "Answers inbound calls 24/7, 365 — including nights and weekends",
      "Checks insurance eligibility and imaging prerequisites before booking",
      "Books multi-step journeys: X-ray at 9am, consult at 11am, one call",
      "Optimises waitlists to fill cancellation slots in real time"
    ],
    outcomes: ["0 Missed Calls", "↓28% No-Show Rate", "↑340% After-Hours Bookings"],
    videoLabel: "Automated Scheduling — Agent Demo",
    videoType: "scheduling" as const
  },
  {
    id: "billing",
    title: "Billing & Collections",
    badge: "USE CASE 04  ·  REVENUE RECOVERY",
    problem: "Patients don't pay bills they don't understand. A $2,400 statement with 14 line items and zero context goes straight into a drawer. And stays there.",
    agentActionsHeading: "What Azentyk does instead:",
    actions: [
      "Calls patients about outstanding balances — in plain language, not billing jargon",
      "Explains every charge, answers questions, removes confusion",
      "Offers and structures payment plans on the spot",
      "Processes secure payment within the call — escalates disputes to human team"
    ],
    outcomes: ["↓44% Bad Debt", "↑31% Collections", "DAR From 87 Days to 28"],
    videoLabel: "Intelligent Billing — Agent Demo",
    videoType: "billing" as const
  },
  {
    id: "care-gap-closure",
    title: "Care Gap Closure",
    badge: "USE CASE 05  ·  VALUE-BASED CARE",
    problem: "Missed screenings — mammograms, colonoscopies, A1c checks — silently erode your HEDIS scores and value-based reimbursements. Staff can't call thousands of patients. So the gaps just grow.",
    agentActionsHeading: "What Azentyk does instead:",
    actions: [
      "Scans EHR to identify patients with open care gaps by measure type",
      "Proactively calls patients — educates on the screening and why it matters",
      "Books the appointment during the call, checks insurance eligibility first",
      "Tracks completion and re-engages patients who cancel or no-show"
    ],
    outcomes: ["↑95% Gap Closure", "↑1.5 Star HEDIS", "↑164% Quality Revenue"],
    videoLabel: "Care Gap Outreach — Agent Demo",
    videoType: "care-gap" as const
  }
]

export function UseCaseSection() {
  const [activeTab, setActiveTab] = React.useState(useCases[0].id)

  return (
    <section id="use-cases" className="py-24 bg-bg-primary relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel>— 5 REASONS REVENUE CYCLE DIRECTORS CALL US FIRST</SectionLabel>
          <h2 className="text-h2 text-text-primary mb-6">
            Your staff shouldn't be on hold.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Every one of these workflows has a human on the phone, waiting. Azentyk replaces that wait with an autonomous agent that never tires, never misses, and never forgets to document.
          </p>
        </div>

        {/* Custom Tabs implementation using Radix UI for accessibility and Framer Motion for animations */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="flex flex-col gap-10">
          
          {/* Tab List */}
          <Tabs.List className="flex flex-wrap border-b border-border-subtle" aria-label="Use Cases">
            {useCases.map((useCase) => (
              <Tabs.Trigger
                key={useCase.id}
                value={useCase.id}
                className={`relative px-6 py-4 text-sm md:text-base font-semibold transition-colors
                  ${activeTab === useCase.id ? "text-text-primary" : "text-text-muted hover:text-text-secondary"}
                `}
              >
                {useCase.title}
                {/* Active Indicator Line */}
                {activeTab === useCase.id && (
                  <motion.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-accent-primary"
                    layoutId="activeTabOutline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Tab Content Panels */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {useCases.map((useCase) => (
                useCase.id === activeTab && (
                  <Tabs.Content key={useCase.id} value={useCase.id} asChild forceMount>
                     <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                     >
                        
                        {/* Left - Text Content (55%) */}
                        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left gap-6">
                           <Badge variant="cyan" className="font-mono">{useCase.badge}</Badge>
                           
                           <div className="card-dark border-accent-danger/20 bg-accent-danger/5 p-6 relative overflow-hidden group">
                              <div className="absolute top-0 left-0 w-1 h-full bg-accent-danger/60" />
                              <p className="text-body text-text-primary/90 italic">
                                "{useCase.problem}"
                              </p>
                           </div>

                           <div className="flex flex-col gap-3">
                              <h3 className="text-h3 text-text-primary">{useCase.agentActionsHeading}</h3>
                              <ul className="flex flex-col gap-3">
                                 {useCase.actions.map((action, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                       <span className="text-accent-success shrink-0 mt-1">✓</span>
                                       <span className="text-body text-text-secondary">{action}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>

                           {/* Outcome Bar */}
                           <div className="w-full mt-4 glass p-4 rounded-xl border border-border-subtle flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-subtle">
                              {useCase.outcomes.map((outcome, idx) => (
                                  <div key={idx} className="flex-1 px-4 py-2 text-center text-sm font-semibold text-text-primary tracking-wide">
                                     {outcome}
                                  </div>
                              ))}
                           </div>

                        </div>

                        {/* Right - Video Placeholder (45%) */}
                        <div className="lg:col-span-6 xl:col-span-5 w-full">
                           <VideoPlaceholder 
                              useCase={useCase.videoType} 
                              label={useCase.videoLabel} 
                              className="shadow-2xl shadow-accent-primary/5"
                           />
                        </div>

                     </motion.div>
                  </Tabs.Content>
                )
              ))}
            </AnimatePresence>
          </div>

        </Tabs.Root>

      </div>
    </section>
  )
}
