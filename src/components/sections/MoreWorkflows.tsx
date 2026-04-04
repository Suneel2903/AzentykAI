import { SectionLabel } from "@/components/ui/SectionLabel"
import { Phone, FileText, HeartPulse, FlaskConical, ClipboardCheck, ShieldAlert } from "lucide-react"

const workflows = [
  {
    icon: ShieldAlert,
    title: "Post-Discharge Follow-Up",
    desc: "AI calls patients after discharge to check symptoms, medication adherence, and flags risk cases for clinical escalation.",
    impact: "↓ 30-Day Readmissions",
  },
  {
    icon: FileText,
    title: "Ambient Clinical Scribe",
    desc: "Listens to doctor-patient conversations, generates structured notes, ICD-10 codes, and updates the EHR automatically.",
    impact: "60 min/day saved per clinician",
  },
  {
    icon: HeartPulse,
    title: "Chronic Care Monitoring",
    desc: "Scheduled check-ins for chronic patients — collects vitals, screens for red flags, and triggers interventions when needed.",
    impact: "↑ RPM Revenue (CPT 99457)",
  },
  {
    icon: FlaskConical,
    title: "Lab Result Follow-Up",
    desc: "Calls patients after lab results, explains findings in plain language, and recommends follow-up tests when indicated.",
    impact: "↑ Diagnostic Revenue",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-Admission Screening",
    desc: "Calls patients 24-72 hours before surgery to verify prep compliance, confirm logistics, and prevent day-of cancellations.",
    impact: "↓ Surgical Cancellations",
  },
  {
    icon: Phone,
    title: "Denial Management",
    desc: "Auto-reads ERA files, categorises denial codes, gathers evidence, drafts payer-specific appeals, and tracks to resolution.",
    impact: "↑ 69% Appeal Win Rate",
  },
]

export function MoreWorkflows() {
  return (
    <section className="py-24 bg-bg-secondary border-t border-border-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <SectionLabel className="justify-center flex">— AND THAT'S NOT ALL</SectionLabel>
          <h2 className="text-h2 text-text-primary mb-4">
            More workflows Azentyk can own.
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Beyond the core five, Azentyk agents handle these high-value workflows across clinical operations, care management, and revenue protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((wf) => (
            <div key={wf.title} className="card-dark p-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-bg-tertiary border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <wf.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-text-primary mb-1">{wf.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{wf.desc}</p>
                </div>
              </div>
              <div className="mt-auto pt-3 border-t border-border-subtle">
                <span className="text-xs font-mono font-semibold text-accent-primary uppercase tracking-wider">
                  {wf.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
