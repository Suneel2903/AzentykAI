"use client";

import * as React from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { Brain, Database, Lock, Zap, Check, Share2, Layers } from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteNav />
            <main className="flex-1 pt-32 px-6 pb-20">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cognitive Architecture</h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Built on a proprietary "Connect-Understand-Decide-Act" loop that mirrors human cognitive processes while maintaining strict clinical governance.
                    </p>
                </div>

                {/* Architecture Diagram Visualization */}
                <div className="max-w-[1400px] mx-auto mb-32">
                    <div className="relative rounded-2xl bg-bg-900 border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-mint" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

                            {/* Left: Inputs */}
                            <div className="space-y-4 w-full">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="text-sm font-bold text-text-muted">EHR Data</span>
                                    <div className="flex gap-2 justify-center mt-2 opacity-50">
                                        <Database className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="text-sm font-bold text-text-muted">Voice/Calls</span>
                                    <div className="flex gap-2 justify-center mt-2 opacity-50">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Middle: The Brain */}
                            <div className="md:col-span-2 relative group cursor-default">
                                <div className="absolute inset-0 bg-accent-violet/5 rounded-2xl blur-xl group-hover:bg-accent-violet/10 transition-colors" />
                                <div className="relative h-full rounded-2xl border border-accent-violet/30 bg-bg-950/80 p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                    <div className="w-20 h-20 rounded-full bg-accent-violet/20 flex items-center justify-center mb-6 animate-pulse ring-4 ring-accent-violet/10">
                                        <Brain className="w-10 h-10 text-accent-violet" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Cognitive Core</h3>
                                    <ul className="text-xs text-text-muted space-y-2 text-left w-full px-8">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Intent Recognition</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Clinical Context Extraction</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Decision Tree Traversal</li>
                                    </ul>
                                </div>

                                {/* Connectors */}
                                <div className="hidden md:block absolute top-1/2 -left-6 w-6 h-[1px] bg-white/20 border-t border-dashed" />
                                <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-[1px] bg-white/20 border-t border-dashed" />
                            </div>

                            {/* Right: Actions */}
                            <div className="space-y-4 w-full">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="text-sm font-bold text-text-muted">Human Review</span>
                                    <div className="flex gap-2 justify-center mt-2 opacity-50">
                                        <Check className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="text-sm font-bold text-text-muted">Write-back</span>
                                    <div className="flex gap-2 justify-center mt-2 opacity-50">
                                        <Share2 className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Integration */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Seamless Integrations</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Pre-built connectors for major EHRs (Epic, Cerner, Athena) and clearinghouses.
                            Our platform handles the API complexity so you don&apos;t have to.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-text-secondary"><Check className="w-4 h-4 text-accent-cyan" /> HL7 / FHIR Standard Support</li>
                            <li className="flex items-center gap-3 text-text-secondary"><Check className="w-4 h-4 text-accent-cyan" /> Real-time 2-way sync</li>
                            <li className="flex items-center gap-3 text-text-secondary"><Check className="w-4 h-4 text-accent-cyan" /> Legacy system adapters</li>
                        </ul>
                    </div>

                    {/* Human in Loop */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Human-in-the-Loop Controls</h3>
                        <p className="text-text-secondary leading-relaxed">
                            AI shouldn&apos;t be a black box. Configure confidence thresholds that trigger manual review
                            before any action is taken.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-text-secondary"><Check className="w-4 h-4 text-accent-cyan" /> Configurable confidence thresholds</li>
                            <li className="flex items-center gap-3 text-text-secondary"><Check className="w-4 h-4 text-accent-cyan" /> Full audit trail & decision log</li>
                            <li className="flex items-center gap-3 text-text-secondary"><Check className="w-4 h-4 text-accent-cyan" /> Role-based access control</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Secure by Design</h2>
                    <Link href="/security" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 hover:bg-white/5 px-8 text-white transition-colors">
                        View Security & Compliance
                    </Link>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
