import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SpotlightCursor } from "@/components/SpotlightCursor";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BRAND.domain}`),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    "A creative-first tech and marketing agency helping ambitious brands stand out with premium design, content systems, and conversion-focused websites.",
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Creative-first design and tech execution: branding, social creatives, UI/UX, and conversion-focused websites.",
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Where Technology Meets Growth — creative-first design + modern web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative isolate min-h-full flex flex-col bg-[#050A18] text-white">
        <ScrollProgress />
        <SpotlightCursor />
        <div className="agency-grain" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10 flex-1 pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
