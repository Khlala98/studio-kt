import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy px-4 py-16 text-text-light md:px-6" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          <FooterServices />
          <FooterInfo />
          <FooterContact />
        </div>

        <div className="mt-12 border-t border-border-dark pt-8 text-center text-sm text-text-light/60">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
          <p className="mt-1">
            Activité portée par{" "}
            <a
              href="https://www.itg.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 transition-colors hover:text-gold"
            >
              ITG
            </a>
            , société de portage salarial.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div>
      <a href="#" className="mb-4 flex items-center gap-2" aria-label="Studio KT - Accueil">
        <Image
          src="/logo.png"
          alt="Studio KT"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="flex items-baseline gap-1">
          <span className="font-playfair text-lg font-bold text-gold">KT</span>
          <span className="text-sm text-text-light">Studio</span>
        </span>
      </a>
      <p className="mt-3 max-w-xs text-sm leading-relaxed">
        Sites internet professionnels, livrés clé en main. Votre présence en ligne, notre expertise.
      </p>
    </div>
  );
}

function FooterServices() {
  return (
    <div>
      <h3 className="mb-4 font-playfair text-sm font-semibold text-white">Services</h3>
      <ul className="space-y-2 text-sm" role="list">
        {siteConfig.services.map((service) => (
          <li key={service}>
            <a
              href="#services"
              className="transition-colors hover:text-gold"
            >
              {service}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterInfo() {
  const anchors = [
    { label: "Processus", href: "/#processus" },
    { label: "Formules & Tarifs", href: "/#formules" },
    { label: "FAQ", href: "/#faq" },
  ];

  const pages = [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ];

  return (
    <div>
      <h3 className="mb-4 font-playfair text-sm font-semibold text-white">Informations</h3>
      <ul className="space-y-2 text-sm" role="list">
        {anchors.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </a>
          </li>
        ))}
        {pages.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div>
      <h3 className="mb-4 font-playfair text-sm font-semibold text-white">Contact</h3>
      <ul className="space-y-3 text-sm" role="list">
        <li>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4 text-gold/70" />
            {siteConfig.email}
          </a>
        </li>
        <li>
          <a
            href={`tel:+${siteConfig.whatsapp}`}
            data-track="phone_click"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold/70" />
            {siteConfig.phone}
          </a>
        </li>
      </ul>
    </div>
  );
}
