"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"

const steps = [
  {
    number: "01",
    label: "CONNECT",
    heading: "Plugs into your existing stack",
    body: "Azentyk integrates with Epic, Cerner, athenahealth, and all major payer portals in under 48 hours. No rip-and-replace. No IT project.",
  },
  {
    number: "02",
    label: "REASON",
    heading: "Reads the rules. Makes the call.",
    body: "Each agent is trained on payer-specific rules, clinical protocols, and your facility's workflows. It doesn't guess — it follows a decision tree that your team defines and approves.",
  },
  {
    number: "03",
    label: "ACT",
    heading: "Completes the workflow. Documents it.",
    body: "The agent navigates IVR trees, submits forms, records outcomes, and hands off to humans only when escalation logic triggers. Every action is logged.",
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-bg-secondary relative border-y border-border-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <SectionLabel className="justify-center flex">— UNDER THE HOOD</SectionLabel>
          <h2 className="text-h2 text-text-primary mb-6">
            Not a chatbot. Not an IVR. An Agent.
          </h2>
          <p className="text-body-lg text-text-secondary">
            The difference is decision-making. Azentyk agents reason through clinical and payer rules, navigate real systems, and complete full workflows — without a human in the loop.
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-12 right-12 h-[2px] overflow-hidden opacity-30">
            <motion.div
               initial={{ x: "-100%" }}
               whileInView={{ x: "0%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="w-full h-full border-t-2 border-dashed border-accent-primary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 group"
              >
                
                {/* Node */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full glass border border-border-strong flex items-center justify-center bg-bg-primary z-10 relative group-hover:border-accent-primary transition-colors duration-300 shadow-xl">
                     <span className="font-display font-bold text-2xl text-text-primary group-hover:text-accent-primary transition-colors">
                        {step.number}
                     </span>
                  </div>
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 rounded-full bg-accent-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                </div>

                 {/* Content */}
                 <div className="flex flex-col gap-3 max-w-sm">
                    <div className="font-mono text-xs font-semibold tracking-widest text-accent-primary">
                       — {step.label}
                    </div>
                    <h3 className="text-h3 text-text-primary">{step.heading}</h3>
                    <p className="text-body text-text-secondary">{step.body}</p>
                 </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
