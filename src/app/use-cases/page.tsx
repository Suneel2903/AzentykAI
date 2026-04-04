import type { Metadata } from "next"
import { UseCaseSection } from "@/components/sections/UseCaseSection"
import { MoreWorkflows } from "@/components/sections/MoreWorkflows"

export const metadata: Metadata = {
  title: "Use Cases",
  description: "See how Azentyk AI agents automate RCM eligibility, prior authorization, scheduling, billing, and care gap closure for US healthcare.",
}

export default function UseCasesPage() {
  return (
    <main>
      <UseCaseSection />
      <MoreWorkflows />
    </main>
  )
}
