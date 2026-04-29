import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { SOLUTION_PILLARS, type SolutionPillar } from "@/content/solutions"

export const metadata: Metadata = {
  title: "Solutions - Azentyk.AI",
  description: "Three paths to production: Discovery & Implementation, Plug-n-Play deployments, or custom Frameworks-based solutioning for healthcare AI automation.",
}

function StepsVisual({ steps }: { steps: Extract<SolutionPillar, { visualType: "steps" }>["visualData"] }) {
  return (
    <div className="rounded-3xl border border-border-subtle bg-bg-secondary/60 p-6">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex gap-4">
            {index < steps.length - 1 ? (
              <div className="absolute left-[19px] top-12 h-[calc(100%-1rem)] w-px bg-border-subtle" />
            ) : null}
            <div className="relative z-10 h-10 w-10 rounded-full border border-accent-primary/30 bg-accent-primary/10 flex items-center justify-center text-sm font-mono text-accent-primary shrink-0">
              {step.number}
            </div>
            <div className="rounded-2xl border border-border-subtle bg-bg-primary/50 p-4 flex-1">
              <h3 className="text-lg font-semibold text-text-primary">{step.name}</h3>
              <p className="text-sm text-text-secondary mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntegrationsVisual({ data }: { data: Extract<SolutionPillar, { visualType: "integrations" }>["visualData"] }) {
  return (
    <div className="rounded-3xl border border-border-subtle bg-bg-secondary/60 p-6 space-y-6">
      <div>
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-3">Certified EHR Integrations</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {data.ehrs.map((ehr) => (
            <div key={ehr} className="rounded-2xl border border-border-subtle bg-bg-primary/50 px-4 py-5 text-center text-sm font-semibold text-text-primary">
              {ehr}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-3">Deployable Modules</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.useCases.map((useCase) => (
            <div key={useCase} className="rounded-2xl border border-accent-primary/20 bg-accent-primary/5 px-4 py-4 text-sm text-text-primary">
              {useCase}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ModularVisual({ blocks }: { blocks: string[] }) {
  return (
    <div className="rounded-3xl border border-border-subtle bg-bg-secondary/60 p-6">
      <div className="grid grid-cols-2 gap-4">
        {blocks.map((block, index) => (
          <div
            key={block}
            className={[
              "rounded-2xl border px-4 py-6 text-center text-sm font-medium",
              index % 2 === 0
                ? "border-accent-violet/30 bg-accent-violet/10 text-text-primary"
                : "border-accent-primary/30 bg-accent-primary/10 text-text-primary",
            ].join(" ")}
          >
            {block}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SolutionsPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-4xl mx-auto text-center mb-20">
          <SectionLabel className="justify-center flex">HOW WE DELIVER</SectionLabel>
          <h1 className="text-h1 text-text-primary mb-6">Three paths to production</h1>
          <p className="text-body-lg text-text-secondary">
            Whether you need full-stack discovery, ready-to-deploy automation, or custom frameworks for unique workflows — we meet you where you are.
          </p>
        </section>

        <section className="space-y-20">
          {SOLUTION_PILLARS.map((pillar, index) => {
            const reverse = index % 2 === 1

            return (
              <div key={pillar.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={reverse ? "lg:col-start-2" : ""}>
                  <div className="text-sm font-mono uppercase tracking-[0.35em] text-accent-primary mb-4">{pillar.number}</div>
                  <h2 className="text-h2 text-text-primary mb-4">{pillar.name}</h2>
                  <p className="text-xl text-text-primary/90 mb-4">{pillar.tagline}</p>
                  <p className="text-body text-text-secondary leading-7">{pillar.description}</p>
                </div>

                <div className={reverse ? "lg:col-start-1" : ""}>
                  {pillar.visualType === "steps" ? <StepsVisual steps={pillar.visualData} /> : null}
                  {pillar.visualType === "integrations" ? <IntegrationsVisual data={pillar.visualData} /> : null}
                  {pillar.visualType === "modular" ? <ModularVisual blocks={pillar.visualData.blocks} /> : null}
                </div>
              </div>
            )
          })}
        </section>

        <section className="mt-20 max-w-4xl mx-auto rounded-3xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/10 to-accent-violet/10 p-10 text-center">
          <h2 className="text-h2 text-text-primary mb-4">Not sure which path fits?</h2>
          <p className="text-body text-text-secondary mb-8">
            Most engagements blend all three — discovery to scope the work, plug-n-play for the obvious wins, frameworks for the edge cases. Talk to us and we&apos;ll map the right approach for your team.
          </p>
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="/contact">
              Talk to Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
