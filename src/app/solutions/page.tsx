import { Metadata } from "next"
import { USE_CASES } from "@/content/use-cases"
import { Badge } from "@/components/ui/Badge"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder"
import { AnalyticsAccordion } from "@/components/ui/AnalyticsAccordion"
import { Button } from "@/components/ui/Button"
import { MoreWorkflows } from "@/components/sections/MoreWorkflows"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Healthcare AI Use Cases — RCM, Prior Auth, Scheduling, Billing',
  description: 'See how Azentyk AI agents automate the 4 highest-value workflows in US healthcare revenue cycle management.'
}

export default function SolutionsPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border-subtle">
         {/* Animated Scan Line */}
         <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-[1px] bg-accent-primary/20 absolute top-0 animate-[fade-in-up_4s_linear_infinite]" />
         </div>

         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl pt-12">
            <h1 className="text-h1 text-text-primary mb-6">
              Every call your team makes manually is a workflow Azentyk can own.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Five core use cases — plus six more. Each one deployed in 48 hours. All of them generating measurable ROI in week one.
            </p>
         </div>
      </section>

      {/* Use Case Deep Dives */}
      {USE_CASES.map((useCase, index) => {
        const isEven = index % 2 === 0
        
        return (
          <section key={useCase.id} className="relative py-32 border-b border-border-subtle overflow-hidden">
            
            {/* Giant Number Background */}
            <div className="absolute top-10 right-10 text-[180px] font-display font-bold text-text-primary opacity-[0.04] leading-none pointer-events-none">
              {useCase.number}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                
                {/* Text Content */}
                <div className={`flex flex-col gap-8 ${isEven ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  
                  <div>
                    <Badge variant="cyan" className="font-mono mb-6">{useCase.badge}</Badge>
                    <h2 className="text-h2 text-text-primary">{useCase.name}</h2>
                  </div>

                  {/* Problem Block */}
                  <div className="card-dark border-accent-danger/20 bg-accent-danger/5 p-6 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-accent-danger/60" />
                     <p className="text-body text-text-primary/90 italic">
                       &quot;{useCase.problem}&quot;
                     </p>
                  </div>

                  {/* Agent Actions */}
                  <div className="space-y-4">
                    <h3 className="text-h3 text-text-primary mb-2">How the agent handles it:</h3>
                    <div className="flex flex-col gap-4">
                      {useCase.agentActions.map((action, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="font-mono text-xs font-bold text-accent-primary bg-accent-primary/10 px-2 py-1 rounded h-fit shrink-0 border border-accent-primary/20">
                             {action.step}
                           </div>
                           <p className="text-body text-text-secondary">{action.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="grid grid-cols-3 gap-4 border-t border-border-subtle pt-8">
                     {useCase.outcomes.map((outcome, i) => {
                        const numericValue = parseInt(outcome.after.replace(/[^0-9]/g, '')) || 0;
                        const suffix = outcome.after.replace(/[0-9,.]/g, '') || '';
                        
                        return (
                          <div key={i} className="flex flex-col gap-1">
                             <span className="text-xs text-text-muted">{outcome.label}</span>
                             <div className="flex items-baseline gap-2">
                                <span className="font-mono text-2xl font-bold text-accent-deep">
                                  {numericValue > 0 ? <AnimatedCounter to={numericValue} suffix={suffix} /> : outcome.after}
                                </span>
                             </div>
                             <span className="text-[10px] uppercase font-semibold tracking-wider text-accent-success bg-accent-success/10 block w-fit px-1.5 py-0.5 rounded border border-accent-success/20 mt-1">
                               {outcome.metric} vs baseline
                             </span>
                          </div>
                        )
                     })}
                  </div>

                  {/* Analytics Accordion */}
                  <AnalyticsAccordion analytics={useCase.analytics} />

                  <Button asChild className="w-fit mt-4" size="lg">
                    <Link href="/contact">See this agent in action</Link>
                  </Button>

                </div>

                {/* Visual / Video */}
                <div className={`w-full ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                   <VideoPlaceholder 
                      useCase={useCase.videoPlaceholderType}
                      label={useCase.videoLabel}
                      className="shadow-2xl shadow-accent-primary/5"
                   />
                </div>

              </div>
            </div>
          </section>
        )
      })}

      {/* Secondary Workflows */}
      <MoreWorkflows />

    </div>
  )
}
