"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Button } from "@/components/ui/Button"

// Constants for calculations
const AGENTYK_ANNUAL_COST = 120000;
const HOURS_SAVED_PER_VISIT = 0.2; // 12 mins
const DENIAL_RECOVERY_RATE = 0.65; // 65% of denied claims recovered

export function ROICalculator() {
  const [visits, setVisits] = React.useState(5000)
  const [staffRatio, setStaffRatio] = React.useState(10)
  const [hourlyRate, setHourlyRate] = React.useState(28)
  const [denialRate, setDenialRate] = React.useState(18)
  const [claimValue, setClaimValue] = React.useState(850)

  // Calculations
  const monthlyHoursSaved = visits * HOURS_SAVED_PER_VISIT * (staffRatio / 100); // Rough approximation of ratio impact
  const annualStaffSavings = monthlyHoursSaved * 12 * hourlyRate;
  
  const annualRevenueRecovered = (visits * 12) * (denialRate / 100) * claimValue * DENIAL_RECOVERY_RATE;
  
  const totalAnnualValue = annualStaffSavings + annualRevenueRecovered;
  const roiMultiple = Math.max(0, (totalAnnualValue / AGENTYK_ANNUAL_COST) * 100);

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-bg-tertiary border border-border-subtle rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left - Inputs */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border-subtle bg-bg-secondary/50">
              <h3 className="text-h3 text-text-primary mb-8">Calculate your Azentyk ROI</h3>
              
              <div className="flex flex-col gap-8">
                
                {/* Slider Component Inline for simplicity, could be extracted */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-medium text-text-secondary">Patient visits per month</label>
                    <span className="font-mono text-accent-primary">{visits.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="500" max="50000" step="500" 
                    value={visits} onChange={(e) => setVisits(Number(e.target.value))}
                    className="w-full h-2 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-medium text-text-secondary">Current staff handling calls</label>
                    <span className="font-mono text-accent-primary">{staffRatio}</span>
                  </div>
                  <input 
                    type="range" min="2" max="50" step="1" 
                    value={staffRatio} onChange={(e) => setStaffRatio(Number(e.target.value))}
                    className="w-full h-2 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-medium text-text-secondary">Average hourly staff cost</label>
                    <span className="font-mono text-accent-primary">${hourlyRate}</span>
                  </div>
                  <input 
                    type="range" min="18" max="45" step="1" 
                    value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-medium text-text-secondary">Current claim denial rate</label>
                    <span className="font-mono text-accent-primary">{denialRate}%</span>
                  </div>
                  <input 
                    type="range" min="5" max="35" step="1" 
                    value={denialRate} onChange={(e) => setDenialRate(Number(e.target.value))}
                    className="w-full h-2 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-medium text-text-secondary">Average claim value</label>
                    <span className="font-mono text-accent-primary">${claimValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="200" max="5000" step="50" 
                    value={claimValue} onChange={(e) => setClaimValue(Number(e.target.value))}
                    className="w-full h-2 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                  />
                </div>

              </div>
            </div>

            {/* Right - Live Results */}
            <div className="p-8 lg:p-12 relative flex flex-col justify-between">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-primary/10 to-transparent pointer-events-none" />
              
              <div className="flex flex-col gap-10 relative z-10">
                
                <div className="grid grid-cols-2 gap-8">
                   <div className="flex flex-col gap-2">
                     <span className="text-sm text-text-muted font-medium">Monthly staff hours saved</span>
                     <span className="font-mono text-3xl text-text-primary">
                        <AnimatedCounter to={Math.round(monthlyHoursSaved)} duration={0.5} />
                     </span>
                   </div>
                   <div className="flex flex-col gap-2">
                     <span className="text-sm text-text-muted font-medium">Annual staff savings</span>
                     <span className="font-mono text-3xl text-accent-success">
                        $<AnimatedCounter to={Math.round(annualStaffSavings)} duration={0.5} />
                     </span>
                   </div>
                </div>

                <div className="flex flex-col gap-2 pb-8 border-b border-border-subtle">
                   <span className="text-sm text-text-muted font-medium">Revenue recovered (Annual)</span>
                   <span className="font-mono text-4xl text-accent-success">
                      $<AnimatedCounter to={Math.round(annualRevenueRecovered)} duration={0.8} />
                   </span>
                </div>

                <div className="flex flex-col gap-2">
                   <span className="text-sm text-accent-primary font-mono tracking-widest uppercase">Total Projected ROI</span>
                   <span className="font-display font-bold text-6xl text-text-primary glow-cyan inline-block pb-2">
                      <AnimatedCounter to={Math.round(roiMultiple)} duration={1} suffix="%" />
                   </span>
                </div>

              </div>

              <div className="mt-12 relative z-10">
                 <p className="text-xs text-text-muted mb-6 leading-relaxed">
                   These projections are based on median outcomes across Azentyk deployments. Your results will vary based on case mix and payer distribution.
                 </p>
                 <Button asChild variant="default" size="lg" className="w-full h-14 text-lg">
                    <Link href="/contact">
                       Get Your Personalised ROI Report
                    </Link>
                 </Button>
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
