"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ThemeToggle"

const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/platform", label: "Platform" },
  { href: "/security", label: "Security" },
  { href: "/use-cases", label: "Use Cases" },
]

export function SiteNav() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-bg-secondary/95 backdrop-blur-xl border-border-default shadow-sm"
          : "bg-bg-secondary/80 backdrop-blur-md border-border-subtle"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <svg
                className="w-8 h-8 text-accent-primary group-hover:animate-pulse"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12V22L22 17V7L12 2Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12L2 7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L22 7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-bold text-[1.625rem] text-text-primary tracking-tight">Azentyk.AI</span>
            </Link>
          </div>

          {/* Desktop Nav Links - Center */}
          <nav className="hidden md:flex items-center gap-[54px] justify-center absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-bold transition-colors relative py-1",
                  pathname === link.href
                    ? "text-accent-primary"
                    : "text-text-primary hover:text-accent-primary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Theme Toggle - Right */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <ThemeToggle />
            <Button asChild variant="default">
              <Link href="/contact">
                Book a Demo
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-3xl pt-24 px-4 h-screen">
          <nav className="flex flex-col gap-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                onClick={closeMobileMenu}
                href={link.href}
                className={cn(
                  "text-xl font-medium",
                  pathname === link.href
                    ? "text-accent-primary"
                    : "text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px w-full bg-border-subtle my-2"></div>

            <Button asChild variant="default" className="w-full h-12 text-lg">
              <Link onClick={closeMobileMenu} href="/contact">
                Book a Demo
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
