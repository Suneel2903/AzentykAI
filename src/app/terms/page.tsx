import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Azentyk AI terms of service.",
}

export default function TermsPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-h1 text-text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-text-secondary space-y-6">
          <p className="text-body-lg">
            Azentyk AI Inc. terms of service will be published here prior to public launch.
          </p>
          <p className="text-body">
            For questions, please contact us at{" "}
            <a href="mailto:contact@azentyk.ai" className="text-accent-primary hover:underline">contact@azentyk.ai</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
