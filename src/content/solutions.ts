export type SolutionPillar =
  | {
      id: "discovery"
      number: string
      name: string
      tagline: string
      description: string
      visualType: "steps"
      visualData: { number: number; name: string; desc: string }[]
    }
  | {
      id: "plug-n-play"
      number: string
      name: string
      tagline: string
      description: string
      visualType: "integrations"
      visualData: { ehrs: string[]; useCases: string[] }
    }
  | {
      id: "frameworks"
      number: string
      name: string
      tagline: string
      description: string
      visualType: "modular"
      visualData: { blocks: string[] }
    }

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    id: "discovery",
    number: "01",
    name: "Discovery & Implementation",
    tagline: "From first conversation to production deployment in weeks, not months.",
    description: "Every Azentyk engagement starts with structured discovery — a workflow audit, integration mapping session, and clear success metric definition. From there, we move into a phased implementation: pilot deployment, measured rollout, and continuous optimization. The goal is fast time-to-value with no surprises along the way.",
    visualType: "steps",
    visualData: [
      { number: 1, name: "Discover", desc: "Workflow audit + integration mapping" },
      { number: 2, name: "Design", desc: "Agent configuration + success metrics" },
      { number: 3, name: "Deploy", desc: "Phased rollout with measured launches" },
      { number: 4, name: "Optimize", desc: "Continuous tuning + performance review" },
    ],
  },
  {
    id: "plug-n-play",
    number: "02",
    name: "Plug-n-Play Solutions",
    tagline: "Pre-built agents that integrate with your EHR and go live in days.",
    description: "For health systems that want speed, our Plug-n-Play library offers ready-to-deploy agents for the four core revenue cycle use cases — eligibility verification, prior authorization, scheduling, and billing/collections. Each agent comes pre-trained on healthcare-specific workflows and ships with certified integrations for major EHRs. Configuration is minimal, and most deployments hit production in under two weeks.",
    visualType: "integrations",
    visualData: {
      ehrs: ["Epic", "Athena", "Cerner", "Allscripts", "NextGen", "eClinicalWorks"],
      useCases: ["Eligibility Verification", "Prior Authorization", "Appointment Scheduling", "Medical Billing & Collections"],
    },
  },
  {
    id: "frameworks",
    number: "03",
    name: "Custom Frameworks",
    tagline: "When your workflow doesn't fit a template — we build around it.",
    description: "Some workflows are too unique for an off-the-shelf agent. Our Frameworks approach gives you modular building blocks — configurable decision trees, custom integration adapters, and tunable agent components — that combine into a tailored solution. You get the speed of a productized platform with the flexibility of custom development. Built for enterprise teams with non-standard requirements.",
    visualType: "modular",
    visualData: {
      blocks: ["Trigger Logic", "Decision Engine", "Integration Layer", "Action Runtime", "Audit & Compliance", "Analytics"],
    },
  },
]
