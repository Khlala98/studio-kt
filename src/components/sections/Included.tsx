"use client";

import { motion } from "framer-motion";
import {
  Zap, Palette, Smartphone, MessageCircle, Shield,
  Globe, Search, PenTool, Bot, XCircle,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface IncludedItem {
  icon: LucideIcon;
  label: string;
}

const includedItems: IncludedItem[] = [
  { icon: Zap, label: "Site ultra-rapide" },
  { icon: Palette, label: "Design à vos couleurs" },
  { icon: Smartphone, label: "Responsive" },
  { icon: MessageCircle, label: "Formulaire + WhatsApp" },
  { icon: Shield, label: "Mentions légales RGPD" },
  { icon: Globe, label: "Mise en ligne complète" },
  { icon: Search, label: "Référencement Google" },
  { icon: PenTool, label: "Interface d'édition" },
  { icon: Bot, label: "Chatbot intégré" },
];

const notIncluded = [
  "Pas d'abonnement mensuel",
  "Pas de frais cachés",
  "Pas de dépendance",
  "Pas de risque",
];

export default function Included() {
  return (
    <SectionWrapper id="inclus" bg="alt">
      <SectionHeading
        badge="Tout compris"
        title="Inclus dans toutes les formules"
        subtitle="Chaque site livré par Studio KT embarque tout ce dont vous avez besoin pour démarrer."
      />

      <IncludedGrid />
      <NotIncluded />
    </SectionWrapper>
  );
}

function IncludedGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {includedItems.map((item, i) => (
        <motion.div
          key={item.label}
          className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-dim">
            <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-medium text-navy">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function NotIncluded() {
  return (
    <motion.div
      className="mt-12 rounded-xl border border-border bg-white p-6 md:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="mb-6 text-center font-playfair text-xl font-bold text-navy md:text-2xl">
        Ce que vous ne paierez <span className="text-gold">PAS</span>
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {notIncluded.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3"
          >
            <XCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span className="text-sm font-medium text-red-600 line-through decoration-red-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
