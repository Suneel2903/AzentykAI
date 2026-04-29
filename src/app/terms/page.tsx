import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Azentyk AI terms of service.",
}

const LAST_UPDATED = "April 29, 2026"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
      <div className="space-y-4 text-body text-text-secondary leading-7">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-h1 text-text-primary mb-4">Terms of Service</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 text-sm text-text-secondary mb-10">
          This document is provided as a template and is subject to legal review. For questions, contact legal@azentyk.ai.
        </div>

        <div className="space-y-10">
          <Section title="1. Acceptance of Terms">
            <p>These Terms of Service govern your access to and use of the Azentyk platform, website, APIs, integrations, and related services. By accessing or using the service, you agree to be bound by these terms.</p>
            <p>If you are using the service on behalf of an organization, you represent that you have authority to bind that organization to these terms.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>Azentyk provides AI-powered automation software for healthcare revenue cycle and operational workflows, including agent-assisted call handling, workflow orchestration, EHR-connected processes, and analytics.</p>
            <p>Features may include automation of eligibility verification, prior authorization, scheduling, billing and collections, as well as custom workflow implementations built on the Azentyk platform.</p>
          </Section>

          <Section title="3. Account Registration">
            <p>You may be required to create an account or designate authorized users to access portions of the service. You agree to provide accurate information and to keep your credentials secure.</p>
            <p>You are responsible for activity occurring under your account and for promptly notifying Azentyk of any unauthorized use.</p>
          </Section>

          <Section title="4. User Responsibilities">
            <p>You agree to use the service only for lawful and authorized business purposes. Customers operating in healthcare environments remain responsible for their own compliance obligations under HIPAA, HITECH, and other applicable healthcare laws and regulations.</p>
            <p>You must ensure that only authorized personnel access protected health information, and you may not use the service in a way that is deceptive, abusive, unlawful, or inconsistent with your contractual obligations to patients, payers, providers, or partners.</p>
          </Section>

          <Section title="5. Service Availability & SLA">
            <p>Azentyk targets 99.9% uptime for paid tiers, excluding scheduled maintenance, emergency maintenance, force majeure events, and outages caused by third-party platforms or customer-controlled systems.</p>
            <p>Service levels, support response times, and escalation paths may vary by plan and may be documented further in an order form, statement of work, or service-level addendum.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>Azentyk and its licensors retain all right, title, and interest in the platform, software, models, interfaces, documentation, and derivative improvements, excluding customer-owned data.</p>
            <p>Customer retains ownership of its data, including submitted content, workflow materials, and other information uploaded or processed through the service, subject to the rights necessary for Azentyk to provide the service.</p>
          </Section>

          <Section title="7. Confidentiality">
            <p>Each party may receive confidential information from the other in connection with the relationship. The receiving party agrees to use such information only as necessary to perform under these terms and to protect it with reasonable care.</p>
            <p>Confidential information does not include information that becomes public through no fault of the receiving party, was already known without restriction, or is independently developed without use of the disclosing party&apos;s confidential information.</p>
          </Section>

          <Section title="8. Data Processing & BAA">
            <p>Where Azentyk processes protected health information on behalf of a covered entity or business associate, the parties may execute a Business Associate Agreement. If a BAA applies, that agreement governs the handling of PHI in addition to these terms.</p>
            <p>Azentyk implements administrative, physical, and technical safeguards designed for healthcare environments, but each customer remains responsible for determining whether the service is appropriate for its compliance program and workflow design.</p>
          </Section>

          <Section title="9. Fees, Payment & Billing">
            <p>Fees are custom-quoted based on scope, deployment model, integrations, patient volume, seat count, and support level. Unless otherwise stated in an order form, invoices are payable within the agreed payment term.</p>
            <p>Late payments may result in suspension of non-essential services, delayed support, or additional fees as permitted by law and contract.</p>
          </Section>

          <Section title="10. Termination">
            <p>Either party may terminate the relationship as provided in the applicable order form or statement of work. Azentyk may suspend or terminate access for material breach, non-payment, misuse, or security risk.</p>
            <p>Upon termination, access rights cease and each party will handle return or deletion of customer data as described in the governing agreement, BAA, or data-processing terms.</p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>To the fullest extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenues, goodwill, or business interruption.</p>
            <p>Except for excluded claims such as fraud, willful misconduct, confidentiality breaches, or payment obligations, each party&apos;s aggregate liability under these terms will be limited to the amounts paid or payable by customer to Azentyk during the twelve months preceding the claim.</p>
          </Section>

          <Section title="12. Indemnification">
            <p>Customer agrees to indemnify and hold Azentyk harmless from third-party claims arising from customer data, misuse of the service, violation of law, or breach of these terms.</p>
            <p>Azentyk may provide separate intellectual-property indemnity language in an order form or master services agreement where applicable.</p>
          </Section>

          <Section title="13. Governing Law">
            <p>These terms are governed by the laws of the State of Texas, without regard to conflict-of-laws rules. The parties agree that courts located in or serving Dallas, Texas will have exclusive jurisdiction over disputes not subject to arbitration or other contractual resolution mechanisms.</p>
          </Section>

          <Section title="14. Changes to Terms">
            <p>Azentyk may update these terms from time to time. If material changes are made, Azentyk will post the revised version on the website and update the last-updated date above.</p>
            <p>Continued use of the service after the effective date of updated terms constitutes acceptance of the revised terms.</p>
          </Section>

          <Section title="15. Contact Information">
            <p>Questions about these Terms of Service may be directed to <a href="mailto:contact@azentyk.ai" className="text-accent-primary hover:underline">contact@azentyk.ai</a> or <a href="mailto:legal@azentyk.ai" className="text-accent-primary hover:underline">legal@azentyk.ai</a>.</p>
          </Section>
        </div>
      </div>
    </div>
  )
}
