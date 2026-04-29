import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { PRICING_TIERS } from "@/content/pricing"

export const metadata: Metadata = {
  title: "Pricing - Azentyk.AI",
  description: "Custom-quoted plans for healthcare teams. HIPAA-compliant AI automation for revenue cycle, starting at single-clinic deployments through enterprise health systems.",
}

const FAQS = [
  {
    question: "How does seat-based pricing work for Enterprise?",
    answer: "Each user with platform access counts as one seat. We offer volume discounts at 25, 50, and 100+ seat tiers. Contact us for a custom quote.",
  },
  {
    question: "Can I switch tiers as I grow?",
    answer: "Yes. All plans support seamless upgrades. Most customers start at Growth and expand to Enterprise as their automation footprint grows.",
  },
  {
    question: "What's included in Discovery & Implementation?",
    answer: "A structured 4-phase rollout: Discover (workflow audit + integration mapping), Design (agent configuration + success metrics), Deploy (phased production rollout), Optimize (continuous tuning). Included at every tier.",
  },
  {
    question: "Is there a free trial or pilot?",
    answer: "We offer 30-day proof-of-concept pilots for Growth and Enterprise prospects. Contact sales to scope yours.",
  },
]

export default function PricingPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="justify-center flex">PRICING</SectionLabel>
          <h1 className="text-h1 text-text-primary mb-6">Pricing built around your scale</h1>
          <p className="text-body-lg text-text-secondary">
            Custom-quoted plans for healthcare teams of every size. All tiers include HIPAA-compliant infrastructure and our Discovery & Implementation framework.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={[
                "rounded-3xl border p-8 flex flex-col bg-bg-secondary/60 backdrop-blur-xl",
                tier.highlighted
                  ? "border-accent-primary shadow-[0_0_40px_rgba(0,212,255,0.14)] md:-translate-y-3"
                  : "border-border-subtle",
              ].join(" ")}
            >
              {tier.badge ? (
                <div className="mb-5">
                  <span className="inline-flex rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent-primary">
                    {tier.badge}
                  </span>
                </div>
              ) : (
                <div className="mb-5 h-7" />
              )}

              <div className="mb-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">{tier.name}</h2>
                <p className="text-sm text-text-secondary mt-3 min-h-[3rem]">{tier.tagline}</p>
              </div>

              <div className="text-3xl font-bold text-accent-primary mb-6">{tier.priceLabel}</div>
              <div className="h-px bg-border-subtle mb-6" />

              <div className="flex flex-col gap-3 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 mt-0.5 text-accent-success shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full mt-8 h-12 text-base">
                <Link href={tier.ctaHref}>{tier.ctaLabel}</Link>
              </Button>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-border-subtle bg-bg-secondary/50 p-8 text-center max-w-5xl mx-auto">
          <h2 className="text-h3 text-text-primary mb-4">Every plan includes</h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Our core HIPAA-compliant infrastructure, the Azentyk Discovery & Implementation framework, access to our customer success team, and 99.9% uptime SLA. Pricing is custom-quoted based on your patient volume, integration complexity, and seat count.
          </p>
        </section>

        <section className="mt-16 max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-h2 text-text-primary mb-4">Frequently asked questions</h2>
            <p className="text-body text-text-secondary">The commercial details teams ask us about most often.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-border-subtle bg-bg-secondary/60 p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-sm text-text-secondary leading-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-4xl mx-auto text-center rounded-3xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/10 to-accent-violet/10 p-10">
          <h2 className="text-h2 text-text-primary mb-4">Ready to talk numbers?</h2>
          <p className="text-body text-text-secondary mb-8">
            Book a 30-minute call with our team. We&apos;ll scope your use cases and send you a custom quote within 48 hours.
          </p>
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="/contact">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
