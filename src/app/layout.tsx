import type { Metadata } from "next";
import "./globals.css";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { RecaptchaProvider } from "@/components/recaptcha-provider";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://azentyk.ai'),
  title: {
    default: 'Azentyk AI — Agentic AI for US Healthcare',
    template: '%s | Azentyk AI'
  },
  description: 'Azentyk deploys autonomous voice and workflow AI agents for US healthcare revenue cycle, prior authorization, scheduling, and patient billing. HIPAA compliant.',
  keywords: ['healthcare AI', 'revenue cycle automation', 'prior authorization AI', 'healthcare voice AI', 'RCM automation', 'HIPAA AI agent'],
  openGraph: { 
    type: 'website', 
    locale: 'en_US', 
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://azentyk.ai',
    siteName: 'Azentyk AI', 
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] 
  },
  twitter: { 
    card: 'summary_large_image', 
    creator: '@azentyk'
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="growthGreen" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('azentyk-theme');if(t==='growthGreen'||t==='cyberTeal'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','growthGreen');}}catch(e){document.documentElement.setAttribute('data-theme','growthGreen');}})()` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Azentyk AI",
          "applicationCategory": "HealthcareApplication",
          "description": "Autonomous AI agents for US healthcare revenue cycle and operations",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "description": "Demo available on request" }
        })}} />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-accent-primary/30 selection:text-white">
          <RecaptchaProvider>
            <div className="noise" />
            <PageWrapper>
               <SiteNav />
               <div className="flex-1 flex flex-col pt-20">
                 {children}
               </div>
               <SiteFooter />
            </PageWrapper>
          </RecaptchaProvider>
      </body>
    </html>
  );
}
