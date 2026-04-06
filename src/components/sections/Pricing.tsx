"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  highlighted?: boolean;
  delay: string;
  whatsappUrl: string;
}

const plans: PricingPlan[] = [
  {
    name: "Essentiel",
    price: "499€",
    subtitle: "Carte de visite en ligne",
    delay: "3-5 jours",
    whatsappUrl:
      "https://wa.me/33622763533?text=Bonjour%2C%20je%20suis%20intéressé(e)%20par%20la%20formule%20Essentiel%20à%20499€%20pour%20mon%20site%20internet.",
    features: [
      "One-page",
      "Design professionnel",
      "Visibilité Google basique",
      "Pas de blog",
      "Vous écrivez les textes",
      "Vous fournissez les photos",
      "Chatbot simple",
      "Vous gérez le domaine (~12€/an)",
      "Suivi 7 jours",
    ],
  },
  {
    name: "Pro",
    price: "799€",
    subtitle: "Présence pro complète",
    delay: "5-7 jours",
    highlighted: true,
    whatsappUrl:
      "https://wa.me/33622763533?text=Bonjour%2C%20je%20suis%20intéressé(e)%20par%20la%20formule%20Pro%20à%20799€%20pour%20mon%20site%20internet.",
    features: [
      "One-page + blog",
      "Design sur-mesure",
      "SEO local optimisé",
      "3-5 articles",
      "Aide à la rédaction",
      "Guide photos fourni",
      "Chatbot simple",
      "Domaine géré pour vous",
      "Suivi 14 jours",
    ],
  },
  {
    name: "Premium",
    price: "1 499€",
    subtitle: "Expérience complète",
    delay: "1-2 semaines",
    whatsappUrl:
      "https://wa.me/33622763533?text=Bonjour%2C%20je%20suis%20intéressé(e)%20par%20la%20formule%20Premium%20à%201499€%20pour%20mon%20site%20internet.",
    features: [
      "Multi-pages + blog",
      "Sur-mesure + maquette validée",
      "SEO local + Google Maps",
      "5-8 articles",
      "On rédige tout pour vous",
      "Guide photo + retouche",
      "Chatbot avancé",
      "Prise de RDV en ligne + rapport SEO 3 mois",
      "Domaine géré pour vous",
      "Suivi 30 jours",
    ],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="formules" bg="navy">
      <SectionHeading
        badge="Tarifs"
        title="Choisissez votre formule"
        subtitle="Des formules claires, sans surprise. Paiement uniquement à la livraison."
        dark
      />

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-text-light">
        Paiement à la livraison · 2 retours inclus · Prix TTC
      </p>
    </SectionWrapper>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const isHighlighted = plan.highlighted;

  return (
    <motion.div
      className={`relative flex flex-col rounded-xl p-6 md:p-8 ${
        isHighlighted
          ? "scale-100 border-2 border-gold bg-navy-light shadow-xl md:scale-105"
          : "border border-border-dark bg-navy-light/50"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge text="Recommandé" />
        </div>
      )}

      <PricingHeader plan={plan} />
      <PricingFeatures features={plan.features} highlighted={isHighlighted} />

      <div className="mt-auto pt-6">
        <Button
          href={plan.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant={isHighlighted ? "primary" : "secondary"}
          className={`w-full ${!isHighlighted ? "text-white border-white/30 hover:border-gold" : ""}`}
          data-track={`cta_pricing_${plan.name.toLowerCase()}`}
        >
          Choisir {plan.name}
        </Button>
      </div>
    </motion.div>
  );
}

function PricingHeader({ plan }: { plan: PricingPlan }) {
  return (
    <div className="mb-6">
      <h3 className="font-playfair text-xl font-bold text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-text-light">{plan.subtitle}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-playfair text-4xl font-bold text-gold">
          {plan.price}
        </span>
        <span className="text-sm text-text-light">TTC</span>
      </div>
      <p className="mt-1 text-xs text-text-light">Livraison en {plan.delay}</p>
    </div>
  );
}

function PricingFeatures({
  features,
  highlighted,
}: {
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <ul className="space-y-3 border-t border-border-dark pt-6" role="list">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm">
          <Check
            className={`mt-0.5 h-4 w-4 shrink-0 ${
              highlighted ? "text-gold" : "text-text-light"
            }`}
          />
          <span className="text-text-light">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
