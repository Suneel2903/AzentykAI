import type { Metadata } from "next"
import { PUBLIC_CONTACT_EMAIL } from "@/lib/public-config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Azentyk AI privacy policy - how we handle and protect your data.",
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

export default function PrivacyPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-h1 text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 text-sm text-text-secondary mb-10">
          This document is provided as a template and is subject to legal review. For questions, contact legal@azentyk.ai.
        </div>

        <div className="space-y-10">
          <Section title="1. Introduction">
            <p>Azentyk values the trust of our customers, prospects, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you interact with our website, platform, integrations, APIs, and related services.</p>
            <p>Because Azentyk serves healthcare organizations, this policy is written with both standard privacy expectations and healthcare-specific obligations in mind.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect account and contact information such as name, business email address, job title, organization name, and scheduling details when you submit forms, request demos, or communicate with us.</p>
            <p>We may also collect technical and usage information, such as device characteristics, browser details, approximate geolocation, event logs, page interactions, and service telemetry.</p>
            <p>Where customers use the platform in healthcare workflows, Azentyk may process customer data and protected health information strictly under the instructions of the customer and any applicable Business Associate Agreement.</p>
            <p>We may use cookies, analytics tools, and similar technologies to understand site usage and improve service performance.</p>
          </Section>

          <Section title="3. How We Use Information">
            <p>We use information to provide and improve the service, respond to requests, schedule demos, authenticate users, troubleshoot issues, monitor reliability, and support customer success and security operations.</p>
            <p>We may also use information for lawful business purposes such as billing, contract management, service updates, compliance, and fraud prevention.</p>
          </Section>

          <Section title="4. PHI & HIPAA Compliance">
            <p>Azentyk is designed for healthcare environments and applies data-minimization principles when handling regulated workflows. Protected health information is handled separately from marketing and basic website analytics wherever applicable.</p>
            <p>When Azentyk processes PHI on behalf of a covered entity or business associate, the governing Business Associate Agreement and related contract documents control how that PHI is used, protected, retained, and disclosed.</p>
          </Section>

          <Section title="5. Information Sharing & Disclosure">
            <p>We may share information with trusted service providers and subprocessors who help operate our business, such as cloud infrastructure providers, security vendors, communications tools, and support systems, subject to confidentiality and security obligations.</p>
            <p>We may also disclose information to comply with law, enforce contractual rights, respond to valid legal requests, prevent fraud or abuse, or support a merger, acquisition, financing, or asset sale.</p>
            <p>Azentyk does not sell personal information for third-party advertising purposes.</p>
          </Section>

          <Section title="6. Data Security">
            <p>We use administrative, technical, and physical safeguards designed to protect data, including encryption in transit, encryption at rest where appropriate, access controls, role-based permissions, and audit logging.</p>
            <p>Our security program is aligned with modern SaaS and healthcare expectations, including SOC 2 Type II style controls, monitoring, incident response practices, and least-privilege access management.</p>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain personal information for as long as needed to provide the service, fulfill contractual obligations, resolve disputes, enforce agreements, and comply with legal requirements.</p>
            <p>Retention of customer data and PHI may be governed further by customer contracts, BAAs, data-processing terms, and documented deletion or export procedures.</p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict use of your personal information, or to request a copy of information we hold about you.</p>
            <p>We also recognize that California, EU, and other regional privacy laws may provide additional rights. We will respond to verified requests in accordance with applicable law and the role Azentyk plays as controller or processor for the relevant data.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Azentyk&apos;s services are designed for business and healthcare organizations and are not directed to children under 13. We do not knowingly collect personal information directly from children through the site or service.</p>
          </Section>

          <Section title="10. International Data Transfers">
            <p>Azentyk may process information in the United States and other jurisdictions where we or our providers operate. Where required, we use contractual and operational safeguards designed to support lawful cross-border transfers.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our services, legal obligations, or operational practices. When we do, we will update the last-updated date above.</p>
          </Section>

          <Section title="12. Contact for Privacy Inquiries">
            <p>Questions about this Privacy Policy or privacy practices may be sent to <a href="mailto:privacy@azentyk.ai" className="text-accent-primary hover:underline">privacy@azentyk.ai</a>. If that inbox is not yet monitored for a given matter, you may also contact <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`} className="text-accent-primary hover:underline">{PUBLIC_CONTACT_EMAIL}</a>.</p>
          </Section>
        </div>
      </div>
    </div>
  )
}
