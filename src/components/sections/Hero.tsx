"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import BrowserMockup from "@/components/ui/BrowserMockup";

const reassurance = [
  "Paiement à la livraison",
  "2 retours inclus",
  "Le site est à vous",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy hero-pattern">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pt-28 pb-16 md:flex-row md:gap-8 md:px-6 md:pt-36 md:pb-24">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <motion.div
      className="flex-[3] text-center md:text-left"
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Badge text="Sites livrés en 5 jours" />

      <h1 className="font-playfair text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Votre site internet professionnel,{" "}
        <span className="text-gradient-gold">livré clé en main</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-light">
        Studio KT conçoit des sites vitrines modernes, performants et optimisés
        pour convertir vos visiteurs en clients. Sans abonnement, sans surprise.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
        <Button href="#contact" variant="primary" data-track="cta_hero_devis">
          Devis gratuit
        </Button>
        <Button href="#realisations" variant="secondary" className="text-white border-white/30 hover:border-gold">
          Voir les réalisations
        </Button>
      </div>

      <Reassurance />
    </motion.div>
  );
}

function Reassurance() {
  return (
    <motion.ul
      className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-6 sm:justify-center md:justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      role="list"
    >
      {reassurance.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-text-light">
          <Check className="h-4 w-4 text-success" />
          {item}
        </li>
      ))}
    </motion.ul>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="flex-[2] w-full max-w-md md:max-w-none"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <BrowserMockup />
    </motion.div>
  );
}
