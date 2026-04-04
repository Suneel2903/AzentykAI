import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function FinalCTA() {
  return (
    <section className="relative py-32 w-full bg-bg-primary overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_top,var(--color-accent-primary)_0%,transparent_70%)] opacity-[0.12]" />
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <h2 className="text-h1 text-text-primary mb-6 max-w-2xl mx-auto">
          Your payer is on hold. 
          <span className="block text-text-secondary mt-2">Your agent is already done.</span>
        </h2>
        
        <p className="text-body-lg text-text-secondary max-w-xl mx-auto mb-10">
          Book a 30-minute live demo. We’ll show Azentyk handling a real prior auth, a live eligibility verification, and an outbound billing call — for your specific payer mix.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
          <Button asChild variant="default" size="lg" className="w-full sm:w-auto h-14 text-lg">
            <Link href={"/contact"}>
              Book Your Demo
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto h-14 text-lg">
            <Link href="/contact">
              Request the ROI Brief
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 items-center text-caption text-text-muted">
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success/50" />
              HIPAA Compliant
           </div>
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success/50" />
              SOC 2 Type II
           </div>
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50" />
              No credit card required
           </div>
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50" />
              Cancel anytime
           </div>
        </div>

      </div>
    </section>
  )
}
