import * as React from "react"
import Image from "next/image"
import { SectionLabel } from "@/components/ui/SectionLabel"

const integrations = [
  { name: "Epic",                    logo: "/logos/epic.svg" },
  { name: "Cerner",                  logo: "/logos/cerner.svg" },
  { name: "athenahealth",            logo: "/logos/athenahealth.svg" },
  { name: "Salesforce Health Cloud", logo: "/logos/salesforce.svg" },
  { name: "AdvancedMD",              logo: "/logos/advancedmd.svg" },
  { name: "Kareo",                   logo: "/logos/kareo.svg" },
]

export function IntegrationGrid() {
  return (
    <section className="py-24 bg-bg-secondary border-y border-border-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel className="justify-center flex">— INTEGRATIONS</SectionLabel>
          <h2 className="text-h2 text-text-primary mb-6">
            Already speaks your systems.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Azentyk connects to the EHRs, payer portals, and practice management systems your team uses today. Typical integration time: 48 hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, idx) => (
             <div
               key={idx}
               className="card-dark aspect-square flex flex-col items-center justify-center gap-4 p-6 group cursor-default relative overflow-hidden"
             >
                {/* Logo */}
                <div className="w-full h-20 rounded-xl bg-bg-tertiary/50 border border-border-subtle flex items-center justify-center group-hover:bg-bg-tertiary group-hover:border-accent-primary/30 group-hover:scale-105 transition-all duration-300 px-3 py-2">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={200}
                    height={60}
                    className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                <span className="text-caption text-text-secondary group-hover:text-text-primary transition-colors text-center">
                   {integration.name}
                </span>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-[-1]" />
             </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-sm text-text-muted italic">
              Plus 40+ additional EHR, billing, and payer integrations — ask us about yours.
           </p>
        </div>

      </div>
    </section>
  )
}
