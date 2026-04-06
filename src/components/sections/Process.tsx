"use client";

import { motion } from "framer-motion";
import {
  ClipboardList, Code, CheckCircle, Rocket, Key,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: "Vous remplissez un formulaire simple",
    description:
      "Votre activité, vos couleurs, vos textes, vos photos. Pas besoin de téléphoner pendant des heures.",
  },
  {
    icon: Code,
    title: "On crée votre site",
    description:
      "On construit votre site exactement selon vos indications. Vous n'avez rien à faire.",
  },
  {
    icon: CheckCircle,
    title: "Vous validez",
    description:
      "Vous regardez le résultat sur votre téléphone et votre ordinateur. Deux retours sont inclus.",
  },
  {
    icon: Rocket,
    title: "Mise en ligne",
    description: "Votre site est publié sur Internet. Tout est opérationnel.",
  },
  {
    icon: Key,
    title: "C'est à vous",
    description:
      "Vous recevez votre site et toutes les informations pour le gérer. Le site vous appartient à 100%.",
  },
];

export default function Process() {
  return (
    <SectionWrapper id="processus" bg="main">
      <SectionHeading
        badge="Processus"
        title="Comment ça se passe"
        subtitle="5 étapes simples pour obtenir votre site professionnel, sans prise de tête."
      />

      <div className="relative mx-auto max-w-2xl">
        <TimelineLine />
        <div className="space-y-10">
          {steps.map((step, i) => (
            <TimelineStep key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function TimelineLine() {
  return (
    <div
      className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-gold/20 md:left-6"
      aria-hidden="true"
    />
  );
}

function TimelineStep({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      className="relative flex gap-5 md:gap-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <StepNumber number={index + 1} icon={step.icon} />
      <div className="pt-1">
        <h3 className="font-playfair text-lg font-bold text-navy">
          {step.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function StepNumber({ number, icon: Icon }: { number: number; icon: LucideIcon }) {
  return (
    <div className="relative z-10 flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-gold text-navy shadow-md md:h-12 md:w-12">
      <span className="font-playfair text-sm font-bold leading-none">{number}</span>
      <Icon className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-white p-0.5 text-gold" />
    </div>
  );
}
