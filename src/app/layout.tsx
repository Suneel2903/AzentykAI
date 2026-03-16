import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Azenty K AI | Autonomous Healthcare Agents",
  description: "Agentic voice AI that closes the loop across payers, providers, and patients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <SiteNav />
            <main className="flex-1 mt-20">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
