"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const without = [
  "Un site statique que personne ne trouve",
  "Aucun trafic organique",
  "Dépendance totale aux réseaux sociaux",
  "Pas de crédibilité en ligne",
];

const withBlog = [
  "Un site qui attire des visiteurs depuis Google",
  "Des articles qui travaillent pour vous 24h/24",
  "Preuve d'expertise pour vos prospects",
  "Positionnement local renforcé",
];

export default function WhyPro() {
  return (
    <SectionWrapper id="why-pro" bg="main">
      <SectionHeading
        badge="Le bon choix"
        title="Pourquoi la formule Pro change tout"
        subtitle="Un visiteur décide en 10 secondes s'il reste ou s'il part. Donnez-lui une raison de rester."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ComparisonColumn
          title="Sans blog"
          subtitle="Vitrine passive"
          items={without}
          negative
          index={0}
        />
        <ComparisonColumn
          title="Avec blog"
          subtitle="Aimant à clients depuis Google"
          items={withBlog}
          index={1}
        />
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button href="#formules" variant="primary">
          Choisir la formule Pro
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}

function ComparisonColumn({
  title,
  subtitle,
  items,
  negative,
  index,
}: {
  title: string;
  subtitle: string;
  items: string[];
  negative?: boolean;
  index: number;
}) {
  return (
    <motion.div
      className={`rounded-xl p-6 md:p-8 ${
        negative
          ? "border border-border bg-white"
          : "border-2 border-gold bg-gold-dim"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="mb-6">
        <h3
          className={`font-playfair text-xl font-bold ${
            negative ? "text-text-muted" : "text-navy"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${negative ? "text-text-light" : "text-text-muted"}`}>
          {subtitle}
        </p>
      </div>

      <ul className="space-y-3" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            {negative ? (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
            ) : (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            )}
            <span className={negative ? "text-text-muted" : "text-navy"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
