"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { AnimatedGrid } from "@/components/sections/AnimatedGrid"
import { DemoBookingWidget } from "@/components/sections/DemoBookingWidget"
import { Button } from "@/components/ui/Button"

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }).refine((value) => {
    const domain = value.split("@")[1]
    return !["gmail.com", "yahoo.com", "hotmail.com"].includes(domain)
  }, { message: "Please use your work email" }),
  company: z.string().min(2, { message: "Company name is required" }),
  role: z.enum(["Revenue Cycle Director", "CFO", "Practice Manager", "CTO", "Other"]),
  visits: z.enum(["<1,000", "1,000-5,000", "5,000-20,000", "20,000+"]),
  useCases: z.array(z.string()).min(1, { message: "Select at least one use case" }),
  message: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const INPUT_CLS =
  "bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all duration-200 w-full"

const SELECT_CLS = `${INPUT_CLS} appearance-none cursor-pointer`

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState("")
  const [preferredSlot, setPreferredSlot] = React.useState("")
  const [preferredTimezone, setPreferredTimezone] = React.useState("UTC")
  const [website, setWebsite] = React.useState("")
  const { executeRecaptcha } = useGoogleReCaptcha()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      role: "Revenue Cycle Director",
      visits: "1,000-5,000",
      useCases: [],
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    setErrorMsg("")

    try {
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha("contact_form")
        : ""

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          preferredSlot: preferredSlot || undefined,
          timezone: preferredTimezone || undefined,
          website,
          recaptchaToken,
        }),
      })

      if (!response.ok) {
        throw new Error("submit_failed")
      }

      setIsSuccess(true)
    } catch {
      setErrorMsg("There was an error submitting your request. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-bg-primary min-h-screen relative pt-32 pb-24">
      <AnimatedGrid />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-violet/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bg-secondary/60 border border-border-subtle rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-ping-slow" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Demo Available</span>
          </div>
          <h1 className="text-h1 text-text-primary mb-4">
            Let&apos;s talk <span className="gradient-text">workflow.</span>
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Book a live 30-minute demo or send your requirements.
            We typically deploy new agents in under 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-5">
            <div className="border-gradient p-[1px] rounded-3xl h-fit">
              <div className="bg-bg-secondary/60 backdrop-blur-xl rounded-[23px] p-8 relative">
                {isSuccess ? (
                  <div className="text-center py-16 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-violet/20 border border-accent-primary/30 flex items-center justify-center text-accent-success text-2xl mb-2">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">Request Received</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      We&apos;ll confirm your demo slot and send a calendar invite to{" "}
                      <span className="text-accent-primary">{form.getValues("email")}</span> shortly.
                    </p>
                    {preferredSlot && (
                      <div className="mt-4 bg-gradient-to-r from-accent-primary/10 to-accent-violet/10 border border-accent-primary/20 rounded-xl px-5 py-3 text-sm text-text-primary font-medium">
                        {preferredSlot}
                      </div>
                    )}
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="mb-1">
                      <h2 className="text-xl font-semibold text-text-primary">Request a Demo</h2>
                      <p className="text-xs text-text-muted mt-1">Work emails only. No spam, ever.</p>
                    </div>

                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      name="website"
                      value={website}
                      onChange={(event) => setWebsite(event.target.value)}
                      className="absolute left-[-9999px] top-[-9999px] w-px h-px opacity-0"
                    />

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Full Name *</label>
                      <input {...form.register("fullName")} placeholder="Dr. Priya Sharma" className={INPUT_CLS} />
                      {form.formState.errors.fullName && <span className="text-xs text-accent-danger">{form.formState.errors.fullName.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Work Email *</label>
                      <input type="email" {...form.register("email")} placeholder="you@hospital.com" className={INPUT_CLS} />
                      {form.formState.errors.email && <span className="text-xs text-accent-danger">{form.formState.errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Health System / Organization *</label>
                      <input {...form.register("company")} placeholder="Dallas Regional Medical Center" className={INPUT_CLS} />
                      {form.formState.errors.company && <span className="text-xs text-accent-danger">{form.formState.errors.company.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Role *</label>
                        <select {...form.register("role")} className={SELECT_CLS}>
                          <option value="Revenue Cycle Director">RCM Director</option>
                          <option value="CFO">CFO</option>
                          <option value="Practice Manager">Practice Manager</option>
                          <option value="CTO">CTO</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Visits/Month *</label>
                        <select {...form.register("visits")} className={SELECT_CLS}>
                          <option value="<1,000">&lt;1,000</option>
                          <option value="1,000-5,000">1,000-5,000</option>
                          <option value="5,000-20,000">5,000-20,000</option>
                          <option value="20,000+">20,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Primary Use Case *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {["RCM Eligibility", "Prior Auth", "Scheduling", "Billing & Collections", "Care Gap Closure"].map((useCase) => (
                          <label
                            key={useCase}
                            className="flex items-center gap-2.5 p-3 rounded-lg border border-border-subtle bg-bg-primary/40 cursor-pointer hover:border-accent-primary/30 hover:bg-bg-primary/70 transition-all group"
                          >
                            <input
                              type="checkbox"
                              value={useCase}
                              {...form.register("useCases")}
                              className="w-4 h-4 rounded border-border-subtle accent-accent-primary bg-bg-secondary"
                            />
                            <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">{useCase}</span>
                          </label>
                        ))}
                      </div>
                      {form.formState.errors.useCases && <span className="text-xs text-accent-danger">{form.formState.errors.useCases.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">Message (Optional)</label>
                      <textarea
                        {...form.register("message")}
                        rows={3}
                        placeholder="Any specific workflows, EHR systems, or payers you'd like us to demo against..."
                        className={`${INPUT_CLS} resize-none`}
                      />
                    </div>

                    {preferredSlot && (
                      <div className="flex items-center gap-2 text-xs text-text-secondary bg-accent-primary/8 border border-accent-primary/15 rounded-lg px-3 py-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-success shrink-0" />
                        <span>Slot selected: <strong className="text-text-primary">{preferredSlot}</strong></span>
                      </div>
                    )}

                    {errorMsg && (
                      <div className="text-sm text-accent-danger p-3 rounded-lg bg-accent-danger/10 border border-accent-danger/20">
                        {errorMsg}
                      </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base mt-1">
                      {isSubmitting ? "Submitting..." : "Request Demo →"}
                    </Button>

                    <p className="text-center text-xs text-text-muted">
                      HIPAA compliant · No credit card required
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <DemoBookingWidget
              embedded
              onSlotSelected={(slot, timezone) => {
                setPreferredSlot(slot)
                setPreferredTimezone(timezone)
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-dark p-5 rounded-2xl flex flex-col gap-2">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest">Email</div>
                <a href="mailto:contact@azentyk.ai" className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors">
                  contact@azentyk.ai
                </a>
              </div>
              <div className="card-dark p-5 rounded-2xl flex flex-col gap-2">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest">Social</div>
                <a href="https://linkedin.com/company/azentyk" target="_blank" rel="noreferrer" className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors">
                  LinkedIn →
                </a>
              </div>
              <div className="card-dark p-5 rounded-2xl flex flex-col gap-2">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest">HQ</div>
                <div className="text-sm font-medium text-text-primary">Dallas, TX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
