"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Script from "next/script";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Combien de temps pour avoir mon site ?",
    answer:
      "Entre 3 et 14 jours selon la formule. Essentiel : 3-5 jours, Pro : 5-7 jours, Premium : 1-2 semaines.",
  },
  {
    question: "Est-ce que je dois payer avant de voir le résultat ?",
    answer:
      "Non. Vous ne payez qu'à la livraison. Deux retours inclus. Si ça ne vous plaît pas, vous ne payez rien.",
  },
  {
    question: "Est-ce qu'il y a un abonnement mensuel ?",
    answer:
      "Non. Le prix affiché est le prix final. Seul coût récurrent : nom de domaine ~12€/an. Hébergement inclus.",
  },
  {
    question: "Est-ce que le site m'appartient ?",
    answer:
      "Oui, à 100%. Hébergé sur un compte à votre nom, tous les accès sont à vous.",
  },
  {
    question: "Est-ce que je peux modifier mon site moi-même ?",
    answer:
      "Oui. Interface simple incluse pour modifier textes, photos, horaires sans coder.",
  },
  {
    question: "Pourquoi pas WordPress ?",
    answer:
      "WordPress est lent, vulnérable, nécessite des mises à jour. Nos sites Next.js sont ultra-rapides, sécurisés, zéro maintenance.",
  },
  {
    question: "Vous faites aussi des applications et de l'IA ?",
    answer:
      "Oui. SaaS, automatisations IA, chatbots, outils internes, intégrations API. Contactez-moi.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Paiement après livraison et validation. Prestation via ITG (portage salarial). Tous les prix sont TTC.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionWrapper id="faq" bg="alt">
        <SectionHeading
          badge="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir avant de vous lancer."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <FaqAccordion
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

function FaqAccordion({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-border bg-white"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-bg-alt"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-navy">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-gold" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-muted">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
