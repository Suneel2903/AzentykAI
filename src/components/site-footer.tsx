import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <svg 
                className="w-6 h-6 text-accent-primary" 
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12V22L22 17V7L12 2Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12L2 7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L22 7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-semibold text-lg text-text-primary tracking-tight">Azentyk</span>
            </Link>
            <p className="text-body text-text-secondary mt-2">
              Agentic AI for US Healthcare
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="https://linkedin.com/company/azentyk" className="text-text-muted hover:text-accent-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="https://twitter.com/azentyk" className="text-text-muted hover:text-accent-primary transition-colors">
                Twitter
              </Link>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-sm tracking-wider uppercase text-text-primary mb-2">Product</h4>
            <Link href="/solutions" className="text-text-secondary hover:text-text-primary transition-colors">Solutions</Link>
            <Link href="/platform" className="text-text-secondary hover:text-text-primary transition-colors">Platform</Link>
            <Link href="/security" className="text-text-secondary hover:text-text-primary transition-colors">Security</Link>
            <Link href="/use-cases" className="text-text-secondary hover:text-text-primary transition-colors">Use Cases</Link>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-sm tracking-wider uppercase text-text-primary mb-2">Company</h4>
            <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
            <Link href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">Terms of Service</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-text-muted">
            &copy; {new Date().getFullYear()} Azentyk AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-success"></span>
              <span className="text-caption text-text-muted font-mono uppercase tracking-wider">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-success"></span>
              <span className="text-caption text-text-muted font-mono uppercase tracking-wider">SOC 2 Type II</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
