"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

export function SocialProofBar() {
  return (
    <section className="w-full bg-bg-secondary border-y border-border-subtle py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Metric Counters - Left (60%) */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left">
            
            <div className="flex flex-col gap-1">
              <span className="font-mono text-accent-deep text-4xl font-bold">
                <AnimatedCounter to={24000} suffix="+" duration={2} />
              </span>
              <span className="text-caption text-text-secondary">Calls Handled Daily</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-accent-deep text-4xl font-bold">
                <AnimatedCounter to={72} suffix="%" duration={2} />
              </span>
              <span className="text-caption text-text-secondary">Claim Denial Rate Reduction</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-accent-deep text-4xl font-bold">
                <AnimatedCounter to={1400} suffix="+" duration={2} />
              </span>
              <span className="text-caption text-text-secondary">Hours Saved Per Facility/Month</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-accent-deep text-4xl font-bold">
                <AnimatedCounter to={340} suffix="%" duration={2} />
              </span>
              <span className="text-caption text-text-secondary">Average ROI Realised</span>
            </div>

          </div>

          {/* Logo Strip - Right (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end gap-4">
            <span className="text-caption text-text-muted">Trusted by leading health systems</span>
            <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-end">
              {[
                { src: "/logos/epic.svg", alt: "Epic" },
                { src: "/logos/cerner.svg", alt: "Cerner" },
                { src: "/logos/athenahealth.svg", alt: "athenahealth" },
                { src: "/logos/salesforce.svg", alt: "Salesforce" },
              ].map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 dark:opacity-50 dark:hover:opacity-90"
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
