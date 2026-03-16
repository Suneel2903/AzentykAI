"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { BRAND } from "@/content/placeholders";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Platform", href: "/platform" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
];

export default function SiteNav() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative mt-6 flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 shadow-soft backdrop-blur-xl">
                    {/* Logo / Brand */}
                    <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                        {BRAND.name}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-white",
                                    pathname === item.href ? "text-white" : "text-white/60"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90"
                        >
                            Book Demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
