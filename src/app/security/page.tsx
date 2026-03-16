"use client";

import * as React from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { Shield, Lock, FileKey, Eye, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteNav />
            <main className="flex-1 pt-32 px-6 pb-20">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Enterprise-Grade Security</h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Azenty K AI is built from the ground up to exceed HIPAA and SOC 2 requirements. Your data integrity and patient privacy are non-negotiable.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Compliance Card */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Shield className="w-10 h-10 text-accent-mint mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Compliance</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent-mint" />
                                <span className="text-text-secondary font-medium">SOC 2 Type II Ready</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent-mint" />
                                <span className="text-text-secondary font-medium">HIPAA BAA Available</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent-mint" />
                                <span className="text-text-secondary font-medium">GDPR & CCPA Compliant</span>
                            </div>
                        </div>
                    </div>

                    {/* Data Protection Card */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Lock className="w-10 h-10 text-accent-violet mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
                        <p className="text-text-secondary mb-4 leading-relaxed">
                            We use AES-256 encryption at rest and TLS 1.3 for data in transit. All AI processing happens in isolated, single-tenant containers.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-white border border-white/10">End-to-End Encryption</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-white border border-white/10">Zero-Retention Mode</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    <section>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <FileKey className="w-5 h-5 text-accent-cyan" /> Access Control
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-4">
                            Strict Role-Based Access Control (RBAC) ensures only authorized personnel can access sensitive data. We support SSO (Okta, Google Workspace, Azure AD) for seamless and secure provisioning.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-accent-cyan" /> Vulnerability Management
                        </h3>
                        <ul className="text-text-secondary space-y-2">
                            <li className="flex items-center gap-2">• Regular Penetration Testing</li>
                            <li className="flex items-center gap-2">• Automated Vulnerability Scanning</li>
                            <li className="flex items-center gap-2">• 24/7 Security Monitoring</li>
                        </ul>
                    </section>

                    <section className="text-center pt-8 border-t border-white/10">
                        <p className="text-text-muted mb-6">Need our full security package or due diligence documents?</p>
                        <Link href="/contact" className="text-white font-semibold underline decoration-accent-cyan decoration-2 underline-offset-4 hover:decoration-white transition-all">
                            Contact our Compliance Team
                        </Link>
                    </section>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
