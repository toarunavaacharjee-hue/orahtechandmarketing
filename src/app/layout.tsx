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
  robots: { index: true, follow: true },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Creative-first design and tech execution: branding, social creatives, UI/UX, and conversion-focused websites.",
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${BRAND.name} — ${BRAND.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: "Where Technology Meets Growth — creative-first design + modern web experiences.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: `https://${BRAND.domain}`,
  logo: `https://${BRAND.domain}/favicon.ico`,
  description:
    "Creative-first tech and marketing agency. Premium design, content systems, and conversion-focused websites.",
  email: BRAND.email,
  sameAs: [BRAND.social.linkedin, BRAND.social.instagram, BRAND.social.twitter],
  areaServed: ["US", "IN"],
  serviceType: [
    "Branding & Identity",
    "Web Design & Development",
    "Social Media Creatives",
    "UI/UX Design",
    "Creative Strategy",
    "AI Creative Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative isolate min-h-full flex flex-col bg-[#050A18] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ScrollProgress />
        <SpotlightCursor />
        <div className="agency-grain" aria-hidden="true" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-[#FF5C1A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-10 flex-1 pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
