import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Studio KT",
  tagline: "Votre site internet professionnel, livré clé en main",
  email: "studiokt@outlook.fr",
  phone: "06 22 76 35 33",
  whatsapp: "33622763533",
  whatsappUrl: "https://wa.me/33622763533",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Formules", href: "#formules" },
    { label: "Processus", href: "#processus" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Sites vitrines",
    "Landing pages",
    "Refonte de sites",
    "Optimisation SEO",
    "Maintenance web",
  ],
  demos: [
    { title: "Restaurant Le Gourmet", category: "Restaurant" },
    { title: "Cabinet Martin", category: "Avocat" },
    { title: "Atelier Bois & Co", category: "Artisan" },
  ],
};
