"use client";

import * as React from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import { AGENT_WORKFLOWS } from "@/content/agent-workflows";
import { ArrowRight, CheckCircle2, ScanEye } from "lucide-react";
import AgentConsole from "@/components/agent-console";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteNav />
            <main className="flex-1 pt-32 px-6 pb-20">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Autonomous Agents</h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Azenty K AI deploys specialized voice and cognitive agents that plug independently into your revenue cycle.
                    </p>
                </div>

                {/* Agent Deep Dives */}
                <div className="max-w-6xl mx-auto space-y-32">
                    {AGENT_WORKFLOWS.map((agent, i) => (
                        <div key={agent.id} id={agent.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className={i % 2 === 1 ? "md:order-2" : ""}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-accent-cyan mb-4">
                                    {agent.roleTitle}
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{agent.name}</h2>
                                <p className="text-lg text-text-secondary mb-6">{agent.tagline}</p>

                                <div className="space-y-4 mb-8">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-2 font-semibold">Trigger</div>
                                        <div className="flex items-start gap-3">
                                            <ScanEye className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                                            <p className="text-sm text-white">{agent.trigger}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-2 font-semibold">Ideal Outcome</div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent-mint mt-0.5 shrink-0" />
                                            <p className="text-sm text-white">{agent.outcome}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-cyan transition-colors">
                                    Deploy {agent.name} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Mini Workflow Visualization */}
                            <div className={i % 2 === 1 ? "md:order-1" : ""}>
                                <div className="rounded-2xl border border-white/10 bg-bg-900 p-6 shadow-soft relative overflow-hidden group hover:border-accent-cyan/30 transition-colors">
                                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-cyan/20 transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-50" />
                                    <h4 className="font-semibold text-white mb-4 relative z-10 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                                        Workflow Logic
                                    </h4>
                                    <div className="space-y-3 relative z-10">
                                        {agent.steps.slice(0, 5).map((step, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                                                    <div className="w-[1px] h-full bg-white/10 my-1 font-mono" />
                                                </div>
                                                <div className="pb-4">
                                                    <div className="text-xs text-accent-violet font-mono mb-0.5 uppercase">{step.phase}</div>
                                                    <div className="text-sm text-white font-medium">{step.title}</div>
                                                    <div className="text-xs text-text-muted line-clamp-1">{step.detail}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Experience the Console</h2>
                        <p className="text-text-muted">Explore how human operators govern these agents in real-time.</p>
                    </div>
                    <AgentConsole />
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
