"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Bot, LayoutDashboard, Plug, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Sites Web",
    description:
      "Sites vitrines, landing pages, blogs, portfolios, e-commerce simple. Design sur mesure, responsive, optimisé SEO.",
    tags: ["Vitrine", "Landing page", "Blog", "E-commerce"],
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Applications SaaS",
    description:
      "MVP, outils métier, portails clients, booking, facturation. De l'idée au produit fonctionnel.",
    tags: ["MVP", "Dashboard", "Portail client", "Booking"],
  },
  {
    icon: Bot,
    title: "Automatisations & IA",
    description:
      "Chatbots intelligents, workflows automatisés, intégration IA, génération de contenu.",
    tags: ["Chatbot", "Workflow", "RAG", "Assistant IA"],
  },
  {
    icon: LayoutDashboard,
    title: "Outils Internes",
    description:
      "Dashboards, CRM sur mesure, back-offices, outils de gestion d'équipe.",
    tags: ["CRM", "Dashboard", "Back-office", "Gestion"],
  },
  {
    icon: Plug,
    title: "Intégrations API",
    description:
      "Connexion Stripe, Notion, Airtable, Make, n8n, webhooks, synchronisations.",
    tags: ["Stripe", "Notion", "Airtable", "Webhooks"],
  },
];

export default function Services() {
  const highlight = services[0];
  const rest = services.slice(1);

  return (
    <SectionWrapper id="services" bg="main">
      <SectionHeading
        badge="Services"
        title="Ce que je crée pour vous"
        subtitle="Du site vitrine à l'application complexe, chaque projet est conçu sur mesure pour répondre à vos objectifs."
      />

      <HighlightCard service={highlight} />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function HighlightCard({ service }: { service: Service }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border-2 border-gold bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute right-4 top-4">
        <Badge text="Offre phare" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
        <ServiceIcon icon={service.icon} large />
        <div className="flex-1">
          <h3 className="font-playfair text-2xl font-bold text-navy md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-2 text-text-muted leading-relaxed">
            {service.description}
          </p>
          <ServiceTags tags={service.tags} />
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <ServiceIcon icon={service.icon} />
      <h3 className="mt-4 font-playfair text-xl font-bold text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {service.description}
      </p>
      <ServiceTags tags={service.tags} />
    </motion.div>
  );
}

function ServiceIcon({ icon: Icon, large }: { icon: LucideIcon; large?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gold-dim ${
        large ? "h-14 w-14" : "h-11 w-11"
      }`}
    >
      <Icon className={`text-gold ${large ? "h-7 w-7" : "h-5 w-5"}`} strokeWidth={1.5} />
    </div>
  );
}

function ServiceTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
