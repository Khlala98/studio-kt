"use client";

import { motion } from "framer-motion";
import { Clock, CreditCard, Shield, Zap } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { icon: Zap, value: "5 jours", label: "Délai moyen" },
  { icon: CreditCard, value: "0 €/mois", label: "Aucun abonnement" },
  { icon: Shield, value: "100%", label: "Le site vous appartient" },
  { icon: Clock, value: "48h", label: "Délai de réponse" },
];

export default function TrustBanner() {
  return (
    <section className="bg-gold-dim px-4 py-8 md:px-6 md:py-10">
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="flex flex-col items-center gap-1 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <metric.icon className="mb-1 h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="font-playfair text-2xl font-bold text-navy md:text-3xl">
              {metric.value}
            </span>
            <span className="text-sm text-text-muted">{metric.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
