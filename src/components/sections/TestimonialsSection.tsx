import * as React from "react"
import { SectionLabel } from "@/components/ui/SectionLabel"

const HONORIFICS = ["Dr.", "Mr.", "Mrs.", "Ms."]

function formatDisplayName(fullName: string): string {
  const parts = fullName.split(/\s+/).filter((p) => !HONORIFICS.includes(p))
  if (parts.length === 0) return fullName
  if (parts.length === 1) return parts[0]
  const first = parts[0]
  const last = parts[parts.length - 1]
  return `${first} ${last.charAt(0)}.`
}

const testimonials = [
  {
    quote: "Implementing Azentyk's follow-up automation transformed our patient engagement. We went from 58% appointment adherence to 89% in just three months. Our clinical staff now focuses on complex cases instead of making hundreds of reminder calls.",
    author: "Karen Thompson",
    title: "Chief Financial Officer",
    org: "Heartland Health Partners, Kansas City, MO, USA"
  },
  {
    quote: "The revenue cycle agent caught billing errors we didn't even know existed. Our claims denial rate dropped from 12% to under 3%, and our Days in A/R improved by 45%. This paid for itself in the first quarter.",
    author: "Marcus Bennett",
    title: "Revenue Cycle Director",
    org: "Coastal Care Network, Charleston, SC, USA"
  },
  {
    quote: "Prior authorization used to take 7-10 days. Now it's handled in hours. We've eliminated nearly all procedure cancellations due to auth delays, which means better patient outcomes and consistent revenue flow.",
    author: "Linda Foster",
    title: "Practice Manager",
    org: "Mountain View Internal Medicine, Denver, CO, USA"
  },
  {
    quote: "Our chronic care program was struggling with patient engagement. Azentyk's vigilance agent monitors our high-risk patients automatically and alerts us to concerning trends before they become emergencies. 30-day readmissions are down 38%.",
    author: "James O'Connor",
    title: "VP of Finance",
    org: "Liberty Hospital Group, Philadelphia, PA, USA"
  },
  {
    quote: "The ambient scribe capability saves each of our physicians 60-90 minutes per day. They're seeing more patients, documentation quality has improved, and burnout scores are actually decreasing. It's rare to find technology that genuinely helps clinicians.",
    author: "Dr. Sarah Mitchell",
    title: "Chief Clinical Officer",
    org: "Riverside Medical Center, Chicago, IL, USA"
  },
  {
    quote: "We implemented the patient navigator agent and saw immediate impact. No-shows dropped 42%, slot utilization increased, and patients report feeling more supported throughout their care journey. The ROI was measurable within the first 60 days.",
    author: "Michael Chen",
    title: "VP of Patient Experience",
    org: "HealthFirst Medical Group, San Francisco, CA, USA"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-16 text-center">
             <SectionLabel className="justify-center flex">— IMPACT</SectionLabel>
             <h2 className="text-h2 text-text-primary">What happens when you stop waiting.</h2>
         </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((t, idx) => (
             <div
               key={idx}
               className="card-dark p-8 flex flex-col justify-between min-w-[320px] lg:min-w-0 snap-center shrink-0"
             >
                <div className="mb-8 relative">
                   {/* Quote Mark Decoration */}
                   <span className="absolute -top-4 -left-2 text-6xl text-text-muted opacity-20 font-display leading-none">"</span>
                   <p className="text-body-lg text-text-primary/90 relative z-10 indent-4">
                      {t.quote}
                   </p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                   {/* Avatar Placeholder */}
                   <div className="w-12 h-12 rounded-full bg-bg-tertiary border border-border-subtle flex items-center justify-center shrink-0">
                      <span className="font-mono text-sm text-text-muted">{formatDisplayName(t.author).charAt(0)}</span>
                   </div>

                   <div className="flex flex-col">
                      <span className="text-sm font-semibold text-text-primary">{formatDisplayName(t.author)}</span>
                      <span className="text-xs text-text-secondary">{t.title}</span>
                      <span className="text-xs text-accent-primary mt-0.5">{t.org}</span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
