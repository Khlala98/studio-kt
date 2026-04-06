"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Sparkles, UserCheck, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Zap,
    title: "Livré en cinq jours",
    description:
      "Pas de process sur trois mois. Vous m'envoyez vos contenus, je livre le site en cinq jours ouvrés.",
  },
  {
    icon: Lock,
    title: "Sans abonnement",
    description:
      "Vous payez une fois, le site est à vous. Zéro frais récurrent, zéro dépendance à une plateforme.",
  },
  {
    icon: Sparkles,
    title: "Tech moderne et rapide",
    description:
      "Next.js et Vercel, pas de WordPress lourd. Des pages qui se chargent quasi instantanément, sans maintenance.",
  },
  {
    icon: UserCheck,
    title: "Interlocuteur unique",
    description:
      "Pas d'intermédiaire, pas d'agence opaque. Vous parlez directement à la personne qui code votre site.",
  },
];

export default function WhyStudioKT() {
  return (
    <SectionWrapper id="pourquoi-studio-kt" bg="main">
      <SectionHeading
        badge="Pourquoi Studio KT"
        title="Ce qui fait la différence"
        subtitle="Un studio indépendant, des outils modernes, et une promesse simple : un site rapide, durable et qui vous appartient vraiment."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <ReasonCard key={reason.title} reason={reason} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const Icon = reason.icon;
  return (
    <motion.div
      className="card-gradient-border-light p-6"
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-dim">
        <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
      </div>
      <h3 className="mt-4 font-playfair text-lg font-bold text-navy">
        {reason.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        {reason.description}
      </p>
    </motion.div>
  );
}
