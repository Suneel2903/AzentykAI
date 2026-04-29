export type PricingTier = {
  id: "starter" | "growth" | "enterprise"
  name: string
  tagline: string
  priceLabel: string
  highlighted: boolean
  badge?: string
  features: string[]
  ctaLabel: string
  ctaHref: string
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For single-clinic practices and small RCM teams getting started with AI automation.",
    priceLabel: "Custom",
    highlighted: false,
    features: [
      "1 use case (your choice of the four)",
      "Up to 1,000 patient visits/month",
      "Standard EHR integrations (Epic, Athena, Cerner)",
      "Email support",
      "Basic analytics dashboard",
    ],
    ctaLabel: "Talk to Sales",
    ctaHref: "/contact",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For multi-location practices and growing health systems ready to scale automation across revenue cycle.",
    priceLabel: "Custom",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Up to 3 use cases",
      "Up to 10,000 patient visits/month",
      "All Starter integrations + custom API connectors",
      "Priority email + chat support",
      "Advanced analytics + custom reports",
      "Dedicated onboarding manager",
    ],
    ctaLabel: "Talk to Sales",
    ctaHref: "/contact",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For health systems, hospital networks, and large RCM organizations needing full-stack automation with enterprise governance.",
    priceLabel: "Custom - seat-based pricing",
    highlighted: false,
    features: [
      "Unlimited use cases",
      "Unlimited patient volume",
      "Custom integrations + on-prem deployment options",
      "24/7 dedicated support + SLA",
      "Enterprise analytics + audit logs",
      "Dedicated CSM + quarterly business reviews",
      "SOC 2, HIPAA BAA, custom security reviews",
    ],
    ctaLabel: "Talk to Sales",
    ctaHref: "/contact",
  },
]
