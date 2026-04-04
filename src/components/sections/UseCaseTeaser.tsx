import Link from "next/link"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

const useCases = [
  { title: "RCM Eligibility", stat: "12 min → 90 sec", desc: "Autonomous payer IVR calls for real-time eligibility verification." },
  { title: "Prior Authorization", stat: "7 days → 4 hours", desc: "Auto-detect orders, gather docs, submit and track payer-specific forms." },
  { title: "Scheduling", stat: "0 Missed Calls", desc: "24/7 inbound call handling with insurance checks and smart waitlists." },
  { title: "Billing & Collections", stat: "↓44% Bad Debt", desc: "Outbound patient calls in plain language with on-the-spot payment plans." },
  { title: "Care Gap Closure", stat: "↑95% Closure", desc: "Proactive patient outreach for missed screenings, boosting HEDIS scores and quality revenue." },
]

export function UseCaseTeaser() {
  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="max-w-3xl mb-16">
          <SectionLabel>— WHAT WE AUTOMATE</SectionLabel>
          <h2 className="text-h2 text-text-primary mb-6">
            Five workflows. Zero hold time.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Every one of these has a human on the phone, waiting. Azentyk replaces that wait with an autonomous agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {useCases.map((uc) => (
            <Link key={uc.title} href="/use-cases" className="card-dark p-6 flex flex-col gap-4 group hover:border-accent-primary/30 transition-all">
              <span className="font-mono text-2xl font-bold text-accent-deep">{uc.stat}</span>
              <h3 className="text-h3 text-text-primary">{uc.title}</h3>
              <p className="text-caption text-text-secondary flex-1">{uc.desc}</p>
              <span className="text-xs font-semibold text-accent-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/use-cases">See All Use Cases</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
