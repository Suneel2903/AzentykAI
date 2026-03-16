"use client";

import * as React from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import AgentConsole from "@/components/agent-console";
import { BRAND } from "@/content/placeholders";
import { ArrowRight, Shield, Brain, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AGENT_WORKFLOWS } from "@/content/agent-workflows";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
          <div className="max-w-[1400px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent-cyan mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              Now deploying Generative Voice Agents v2.0
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in-up delay-100">
              Close the loop across <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">payers, providers, & patients.</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
              {BRAND.oneLiner} Replace endless phone tag and administrative bottlenecks with autonomous voice agents that reason, negotiate, and execute.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
              <Link href="/contact" className="px-10 py-5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center gap-2 shadow-glow text-lg">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions" className="px-10 py-5 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm text-lg">
                Explore Agents
              </Link>
            </div>
          </div>
        </section>

        {/* Agent Console Demo */}
        <section className="px-4 pb-32">
          <div className="max-w-full mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">See Azenty K AI in Action</h2>
              <p className="text-text-muted text-lg">Interactive demo: Select an agent to view its logic and governance.</p>
            </div>
            <AgentConsole />
          </div>
        </section>

        {/* Value Props / Solutions Grid */}
        <section className="px-6 py-32 bg-black/40">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">Complete Revenue Cycle Autonomy</h2>
              <p className="text-text-secondary max-w-3xl mx-auto text-xl leading-relaxed">
                From front-desk scheduling to back-office denial management, our agents work seamlessly with your existing EHR and team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {AGENT_WORKFLOWS.slice(0, 3).map((agent, i) => (
                <Link href="/solutions" key={i} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-cyan/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform relative z-10">
                    <Brain className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">{agent.name}</h3>
                  <p className="text-text-secondary mb-6 text-base leading-relaxed relative z-10">{agent.tagline}</p>
                  <span className="flex items-center gap-2 text-sm font-medium text-accent-cyan group-hover:translate-x-1 transition-transform relative z-10">
                    View Workflow <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
              <div className="md:col-span-3 text-center mt-12">
                <Link href="/solutions" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-lg">
                  View all 5 Specialized Agents <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / Security Teaser */}
        <section className="mx-auto max-w-[1200px] px-6 pb-32 text-center">
          <div className="p-16 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-8">Built for Healthcare Security</h2>
            <div className="flex flex-wrap justify-center gap-12 mb-10 text-text-secondary font-medium text-lg">
              <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-accent-mint" /> SOC 2 Type II Ready</div>
              <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-accent-mint" /> HIPAA Compliant</div>
              <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-accent-mint" /> HITRUST CSF</div>
            </div>
            <Link href="/security" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 text-base font-medium text-white transition-colors hover:bg-white/10">
              Review Security Posture
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-24 border-t border-white/5">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">Ready to transform your workflow?</h2>
          <Link href="/contact" className="inline-flex h-16 items-center justify-center rounded-full bg-accent-cyan px-12 text-xl font-bold text-black shadow-glow hover:bg-accent-cyan/90 transition-all scale-100 hover:scale-105">
            Book a Consultation
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
