import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'HIPAA Compliant AI — Security & Compliance',
  description: 'Azentyk AI is HIPAA-compliant, SOC 2 Type II certified, and built exclusively for protected health information environments.'
}

const practices = [
  { title: 'End-to-End Encryption', desc: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256)' },
  { title: 'Zero PHI Retention', desc: 'Call transcripts processed in memory. No PHI stored post-session unless explicitly configured.' },
  { title: 'HIPAA BAA', desc: 'Business Associate Agreement included with every subscription. Standard, not add-on.' },
  { title: 'Penetration Testing', desc: 'Annual third-party pen test. Results available to enterprise customers on NDA.' },
  { title: 'Role-Based Access', desc: 'Granular RBAC. Staff see only what they need. Audit trail on every access.' },
  { title: 'Disaster Recovery', desc: 'RTO < 4 hours. RPO < 1 hour. Multi-region Azure deployment.' },
  { title: 'Vendor Risk Management', desc: 'All sub-processors reviewed annually. Full sub-processor list available on request.' },
]

export default function SecurityPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border-subtle">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl pt-12">
            <h1 className="text-h1 text-text-primary mb-6">
              PHI treated like the liability it is.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Healthcare data security isn’t a checkbox for us. It’s the constraint we designed the entire platform around.
            </p>
         </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-24 border-b border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'HIPAA', desc: 'Compliant & BAA Ready' },
                { name: 'SOC 2 Type II', desc: 'Certified & Audited' },
                { name: 'HITRUST', desc: 'Certification In Progress' },
                { name: 'Azure Compliant', desc: 'Built on Azure Health' },
              ].map((badge, idx) => (
                <div key={idx} className="card-dark p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-success/10 border border-accent-success/30 flex items-center justify-center text-accent-success font-display font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{badge.name}</h3>
                    <p className="text-sm text-text-secondary mt-1">{badge.desc}</p>
                  </div>
                  <button className="mt-4 text-xs font-mono text-accent-primary hover:underline uppercase tracking-widest">
                    View Certificate
                  </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Security Practices Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
           <h2 className="text-h2 text-text-primary mb-12">Security Architecture</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((practice, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                     <h3 className="text-base font-semibold text-text-primary">{practice.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary pl-4.5">{practice.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* HIPAA Statement */}
      <section className="py-24 bg-bg-secondary border-t border-border-subtle">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="glass p-8 md:p-12 rounded-2xl border border-border-subtle">
               <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6 border-b border-border-subtle pb-4">
                  Compliance Statement
               </div>
               <p className="text-body text-text-primary/90 leading-relaxed font-serif">
                  Azentyk.AI Inc. operates as a Business Associate under HIPAA. Our platform was designed from the ground up for protected health information environments. We maintain administrative, physical, and technical safeguards as required under 45 CFR Parts 160 and 164, and execute a Business Associate Agreement with every customer prior to go-live.
               </p>
            </div>
         </div>
      </section>
      
    </div>
  )
}
