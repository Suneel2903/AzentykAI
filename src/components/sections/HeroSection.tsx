"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { AnimatedGrid } from "@/components/sections/AnimatedGrid"
import AgentConsole from "@/components/agent-console"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-bg-primary pt-32 pb-20 lg:pt-48 overflow-hidden z-10 flex items-center">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,var(--color-accent-primary)_0%,transparent_60%)] opacity-[0.08]" />
      </div>
      
      {/* SVG Deep Background */}
      <AnimatedGrid />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <SectionLabel>— AGENTIC AI FOR US HEALTHCARE</SectionLabel>
            </motion.div>

            <h1 className="text-hero text-text-primary mt-2 mb-6">
              <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2, duration: 0.6 }}
                 className="block"
              >The AI Agent</motion.span>
              <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.35, duration: 0.6 }}
                 className="block gradient-text"
              >That Works the Phones.</motion.span>
               <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.6 }}
                 className="block"
              >And Wins.</motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-body-lg text-text-secondary max-w-lg mb-10"
            >
              Azentyk deploys autonomous voice and workflow agents that call payers, navigate IVR systems, handle prior auths, and collect on patient balances — without a human touching the keyboard.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            >
              <Button asChild variant="default" size="lg" className="w-full sm:w-auto h-14 text-lg">
                <Link href={"/contact"}>
                  Book a Demo
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto h-14 text-lg">
                <Link href="/use-cases">
                  See It In Action
                </Link>
              </Button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.9, duration: 0.4 }}
               className="text-caption text-text-muted flex flex-wrap gap-2 items-center"
            >
              <span>HIPAA Compliant</span>
              <span className="w-1 h-1 rounded-full bg-border-strong mx-1" />
              <span>SOC 2 Type II</span>
              <span className="w-1 h-1 rounded-full bg-border-strong mx-1" />
              <span>Epic & Cerner Integrated</span>
              <span className="w-1 h-1 rounded-full bg-border-strong mx-1" />
              <span>No-Code Setup</span>
            </motion.div>
          </div>

          {/* Right Column - Agent Console Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            {/* Floating Label */}
            <div className="absolute -top-6 -left-4 z-20">
               <div className="glass px-4 py-2 rounded-full border border-accent-primary/20 bg-bg-secondary/80 flex items-center gap-2 shadow-lg scale-90 sm:scale-100 origin-bottom-left">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-text-primary tracking-wide">
                     LIVE AGENT — RCM Eligibility Verification
                  </span>
               </div>
            </div>

            {/* Console Wrapper */}
            <div className="rounded-2xl overflow-hidden border border-border-subtle shadow-xl bg-bg-900 w-full relative">
                <div className="p-1 bg-panel-900 rounded-t-2xl flex gap-1.5 px-4 pt-3 pb-2 border-b border-white/10">
                   <div className="w-2.5 h-2.5 rounded-full bg-accent-danger/80"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-accent-warning/80"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-accent-success/80"></div>
                </div>
                <div className="bg-bg-900 rounded-b-2xl max-h-[500px] overflow-hidden">
                    <div className="scale-90 origin-top w-[111%] -ml-[5.5%] -mt-1 pointer-events-none">
                       <AgentConsole />
                    </div>
                </div>
            </div>

            {/* Ambient Background Glow behind console */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-accent-primary/5 blur-[100px] -z-10 rounded-full"></div>
            
          </motion.div>

        </div>
      </div>
    </section>
  )
}
