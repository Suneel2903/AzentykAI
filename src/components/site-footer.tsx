import Link from "next/link";


const links = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Platform", href: "/platform" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
];

export default function SiteFooter() {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm leading-6 text-white/60 hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-white/40">
                        &copy; {new Date().getFullYear()} Azenty K AI. All rights reserved.
                    </p>
                    <p className="text-center text-xs leading-5 text-white/20 mt-2">
                        Secure & Compliant AI for Healthcare.
                    </p>
                </div>
            </div>
        </footer>
    );
}
