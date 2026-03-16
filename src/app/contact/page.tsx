"use client";

import * as React from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Building2, User, MessageSquare } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    organization: z.string().min(2, "Organization is required"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        // Placeholder submission
        await fetch("/api/lead", {
            method: "POST",
            body: JSON.stringify(data)
        });
        setIsSubmitted(true);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <SiteNav />
            <main className="flex-1 pt-32 px-6 pb-20">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
                        <p className="text-text-secondary">
                            Ready to deploy autonomous agents? Our team is ready to discuss your workflow needs.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-bg-900 p-8 shadow-soft">
                        {isSubmitted ? (
                            <div className="text-center py-12 animate-fade-in-up">
                                <div className="w-16 h-16 rounded-full bg-accent-mint/10 text-accent-mint flex items-center justify-center mx-auto mb-6">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                                <p className="text-text-secondary">
                                    Thank you for your interest in Azenty K AI. <br />
                                    We will be in touch shortly to schedule your demo.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted pl-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 text-text-muted">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            {...register("name")}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                            placeholder="Dr. Jane Smith"
                                        />
                                    </div>
                                    {errors.name && <p className="text-xs text-accent-coral pl-1">{errors.name.message}</p>}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted pl-1">Work Email</label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 text-text-muted">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                            placeholder="jane@hospital.org"
                                        />
                                    </div>
                                    {errors.email && <p className="text-xs text-accent-coral pl-1">{errors.email.message}</p>}
                                </div>

                                {/* Organization */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted pl-1">Health System / Organization</label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 text-text-muted">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <input
                                            {...register("organization")}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                            placeholder="General Hospital"
                                        />
                                    </div>
                                    {errors.organization && <p className="text-xs text-accent-coral pl-1">{errors.organization.message}</p>}
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted pl-1">Message (Optional)</label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 text-text-muted">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                                            placeholder="Tell us about your workflow challenges..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-white/90 transition-all shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        "Request Consultation"
                                    )}
                                </button>

                                <p className="text-center text-xs text-text-muted/50">
                                    By submitting this form, you agree to our Privacy Policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
