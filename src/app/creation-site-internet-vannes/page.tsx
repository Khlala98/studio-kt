import type { Metadata } from "next";
import Script from "next/script";
import CityLanding, { CityFAQ } from "@/components/city/CityLanding";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import { getCityPage } from "@/data/city-pages";
import { siteConfig } from "@/data/site-config";

const city = getCityPage("creation-site-internet-vannes")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: {
    canonical: `https://studiokt.fr/${city.slug}`,
  },
  openGraph: {
    title: city.metaTitle,
    description: city.metaDescription,
    url: `https://studiokt.fr/${city.slug}`,
    type: "website",
    locale: "fr_FR",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://studiokt.fr/${city.slug}#business`,
  name: `Studio KT — Création de site internet à ${city.city}`,
  url: `https://studiokt.fr/${city.slug}`,
  telephone: `+${siteConfig.whatsapp}`,
  email: siteConfig.email,
  description: city.metaDescription,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: city.city,
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "City",
    name: city.city,
  },
  makesOffer: siteConfig.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
    },
  })),
};

export default function VannesPage() {
  return (
    <>
      <Script
        id={`localbusiness-jsonld-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <CityLanding city={city} />
      <Pricing />
      <CityFAQ city={city} />
      <Contact />
    </>
  );
}
