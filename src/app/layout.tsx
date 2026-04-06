import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/sections/CookieBanner";
import SkipToContent from "@/components/ui/SkipToContent";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiokt.fr"),
  title: "Studio KT — Sites internet professionnels, livrés clé en main",
  description:
    "Studio KT conçoit des sites vitrines modernes, performants et optimisés pour convertir vos visiteurs en clients. Livraison en 5 jours, sans abonnement.",
  keywords: [
    "création site internet",
    "site vitrine",
    "développeur web",
    "Studio KT",
  ],
  openGraph: {
    title: "Studio KT — Sites internet professionnels",
    description:
      "Sites vitrines modernes, livrés clé en main en 5 jours. Sans abonnement.",
    url: "https://studiokt.fr",
    siteName: "Studio KT",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Studio KT — Sites internet professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio KT — Sites internet professionnels",
    description:
      "Sites vitrines modernes, livrés clé en main en 5 jours. Sans abonnement.",
    images: ["/og-image.svg"],
  },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: "https://studiokt.fr",
  email: siteConfig.email,
  telephone: `+${siteConfig.whatsapp}`,
  description:
    "Studio de développement web spécialisé dans les sites vitrines, applications SaaS, automatisations IA et intégrations API.",
  makesOffer: siteConfig.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {plausibleDomain && (
          <Script
            id="plausible"
            strategy="afterInteractive"
            defer
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
          />
        )}
        <SkipToContent />
        <Navbar />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
