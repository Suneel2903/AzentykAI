import { Metadata } from "next"
import AgentConsole from "@/components/agent-console"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ShieldCheck, Activity, Globe2, FileCode, Workflow, Server, Zap, Database } from "lucide-react"

export const metadata: Metadata = {
  title: 'How Azentyk Works — Agentic AI Platform',
  description: 'Technical overview of Azentyk’s AI agent architecture: voice engine, reasoning layer, EHR integration, compliance controls.'
}

const features = [
  { icon: Activity, title: '24/7 Autonomous Operation', desc: 'Agents run around the clock. No shift handoffs, no sick days, no overtime.' },
  { icon: Workflow, title: 'Multi-Payer IVR Navigation', desc: 'Trained on 200+ payer IVR trees. Navigates like a 10-year veteran.' },
  { icon: FileCode, title: 'EHR-Native Integration', desc: 'Reads from and writes to Epic, Cerner, athenahealth without middleware.' },
  { icon: ShieldCheck, title: 'Human Escalation Logic', desc: 'Knows exactly when to hand off. Defines the boundary between AI and human.' },
  { icon: Zap, title: 'Compliance-First Architecture', desc: 'Every call recorded. Every action logged. HIPAA BAA included standard.' },
  { icon: Globe2, title: 'Voice + API Hybrid', desc: 'Uses API where available. Falls back to voice where required. No coverage gaps.' },
  { icon: Database, title: 'Real-Time Analytics', desc: 'Every call, every outcome, every dollar. Dashboards your CFO will actually open.' },
  { icon: Server, title: 'White-Label Ready', desc: 'Deploy under your brand. Your patients hear your name, your voice.' }
]

export default function PlatformPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border-subtle bg-[radial-gradient(ellipse_at_top,var(--color-accent-violet)_0%,transparent_70%)] bg-opacity-5">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl pt-12">
            <h1 className="text-h1 text-text-primary mb-6">
              Built to reason. Designed to act.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Azentyk’s agent architecture combines large language model reasoning with rule-based execution and real-time payer data — so it makes the right call, every time.
            </p>
         </div>
      </section>

      {/* Architecture Diagram (Simplified Code Repr) */}
      <section className="py-24 border-b border-border-subtle overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionLabel className="text-center justify-center flex mb-12">— System Architecture</SectionLabel>
          
          <div className="flex flex-col gap-12 text-center relative">
             {/* Path Lines */}
             <div className="absolute top-[40px] bottom-[40px] left-1/2 w-[2px] bg-border-subtle -translate-x-1/2 z-0 hidden lg:block" />

             {/* Layer 1 */}
             <div className="relative z-10">
               <div className="text-xs font-mono text-text-muted mb-4 uppercase tracking-widest">Input Sources</div>
               <div className="flex flex-wrap justify-center gap-4">
                 {['EHR Systems', 'Payer Portals', 'Patient Records', 'Scheduling Systems'].map(item => (
                   <div key={item} className="glass px-6 py-3 rounded-lg text-sm text-text-secondary">{item}</div>
                 ))}
               </div>
             </div>

             {/* Layer 2 */}
             <div className="relative z-10">
               <div className="text-xs font-mono text-accent-primary mb-4 uppercase tracking-widest">Azentyk Core</div>
               <div className="card-dark border-accent-primary/30 p-8 flex flex-wrap justify-center gap-4">
                 {['Reasoning Engine', 'Voice Engine', 'Workflow Orchestrator', 'Compliance Layer'].map(item => (
                   <div key={item} className="bg-bg-primary border border-border-subtle px-6 py-3 rounded-lg text-sm font-semibold text-text-primary">{item}</div>
                 ))}
               </div>
             </div>

             {/* Layer 3 */}
             <div className="relative z-10">
               <div className="text-xs font-mono text-text-muted mb-4 uppercase tracking-widest">Output Actions</div>
               <div className="flex flex-wrap justify-center gap-4">
                 {['Calls Made', 'Forms Submitted', 'Records Updated', 'Alerts Sent', 'Payments Processed'].map(item => (
                   <div key={item} className="glass px-6 py-3 rounded-lg text-sm text-text-secondary">{item}</div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* AgentConsole Integration */}
      <section className="py-24 bg-bg-secondary border-b border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <h2 className="text-h2 text-text-primary mb-6">Watch an agent run a Prior Authorization — live</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto mb-16">
              This is a real simulation of how Azentyk navigates a payer portal for a UnitedHealthcare prior auth submission. Every step is logged.
            </p>
            <div className="relative text-left rounded-2xl overflow-hidden bg-bg-900 border border-border-subtle shadow-xl p-2">
                 {/* Fake traffic lights */}
                <div className="absolute top-4 left-6 flex gap-1.5 z-50">
                   <div className="w-2.5 h-2.5 rounded-full bg-accent-danger/80"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-accent-warning/80"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-accent-success/80"></div>
                </div>
               <AgentConsole />
            </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="card-dark p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded bg-bg-tertiary border border-border-subtle flex items-center justify-center text-text-primary">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{feat.title}</h3>
                  <p className="text-sm text-text-secondary">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-bg-secondary border-t border-border-subtle">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
           <h2 className="text-h2 text-text-primary mb-12 text-center">Technical Specifications</h2>
           <div className="flex flex-col card-dark divide-y divide-border-subtle">
              {[
                { label: 'Uptime SLA', val: '99.9% guaranteed — Azure-hosted with multi-region failover' },
                { label: 'Voice Latency', val: '<400ms response time on outbound IVR navigation' },
                { label: 'Integration Method', val: 'HL7 FHIR R4, REST API, or direct EHR connector' },
                { label: 'Data Residency', val: 'US-only. PHI never leaves HIPAA-compliant Azure regions.' },
                { label: 'Authentication', val: 'OAuth 2.0, SAML 2.0 SSO support' },
                { label: 'Audit Logging', val: 'Full immutable audit trail — every agent action, every call leg' },
                { label: 'Deployment Model', val: 'SaaS (default) or private cloud deployment available' },
              ].map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-8 p-6 hover:bg-bg-tertiary/50 transition-colors">
                  <div className="sm:w-1/3 font-mono text-sm text-text-primary uppercase tracking-wide">{spec.label}</div>
                  <div className="sm:w-2/3 text-sm text-text-secondary">{spec.val}</div>
                </div>
              ))}
           </div>
         </div>
      </section>
      
    </div>
  )
}
