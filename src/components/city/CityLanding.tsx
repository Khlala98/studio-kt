"use client";

import { motion } from "framer-motion";
import {
  Check,
  MapPin,
  ChevronRight,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import type { CityPageData } from "@/data/city-pages";

const reassurance = [
  "Livré en 5 jours",
  "Sans abonnement",
  "Le site est à vous",
];

export default function CityLanding({ city }: { city: CityPageData }) {
  return (
    <>
      <CityHero city={city} />
      <CityIntro city={city} />
      <CityAdvantages city={city} />
      <CityLandmarks city={city} />
    </>
  );
}

function CityHero({ city }: { city: CityPageData }) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-navy hero-pattern">
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-32 pb-20 text-center md:px-6 md:pt-40 md:pb-28">
        <Breadcrumb city={city.city} />

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <Badge text={`Sites internet à ${city.city}`} />

          <h1 className="font-playfair text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {city.heroTitle.split(` à ${city.city}`)[0]}{" "}
            <span className="text-gradient-gold">à {city.city}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            {city.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#formules"
              variant="primary"
              data-track={`cta_city_${city.slug}_formules`}
            >
              Voir les formules
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="text-white border-white/30 hover:border-gold"
              data-track={`cta_city_${city.slug}_devis`}
            >
              Devis gratuit
            </Button>
          </div>

          <ul
            className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6"
            role="list"
          >
            {reassurance.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-text-light"
              >
                <Check className="h-4 w-4 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Breadcrumb({ city }: { city: string }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="mx-auto flex max-w-fit items-center gap-1 text-xs text-text-light/70"
    >
      <a href="/" className="hover:text-gold">
        Accueil
      </a>
      <ChevronRight className="h-3 w-3" />
      <span className="text-gold">Création de site à {city}</span>
    </nav>
  );
}

function CityIntro({ city }: { city: CityPageData }) {
  return (
    <SectionWrapper bg="main">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          badge="Contexte local"
          title={`Pourquoi un site pro à ${city.city} ?`}
          subtitle={`L'activité économique à ${city.city} est dense. Votre site doit sortir du lot.`}
        />
        <div className="mt-8 space-y-5">
          {city.introParagraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-text-muted md:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function CityAdvantages({ city }: { city: CityPageData }) {
  return (
    <SectionWrapper bg="alt">
      <SectionHeading
        badge="Avantages"
        title="Pourquoi choisir un développeur local"
        subtitle={`Travailler avec quelqu'un qui connaît ${city.city} change la façon dont votre site est pensé, rédigé et référencé.`}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {city.localAdvantages.map((adv, i) => (
          <AdvantageCard
            key={adv.title}
            title={adv.title}
            description={adv.description}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function AdvantageCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="card-gradient-border-light p-6 md:p-7"
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
        <Check className="h-5 w-5 text-gold" strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-playfair text-xl font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
        {description}
      </p>
    </motion.div>
  );
}

function CityLandmarks({ city }: { city: CityPageData }) {
  return (
    <SectionWrapper bg="main">
      <div className="mx-auto max-w-4xl text-center">
        <Badge text="Zones couvertes" />
        <h2 className="font-playfair text-3xl font-bold text-navy md:text-4xl">
          Tous les quartiers de {city.city} et sa métropole
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-muted leading-relaxed">
          Studio KT intervient sur l&apos;ensemble de {city.city} et son agglomération,
          du centre historique aux communes périphériques.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {city.landmarks.map((landmark) => (
            <span
              key={landmark}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-muted"
            >
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {landmark}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function CityFAQ({ city }: { city: CityPageData }) {
  return (
    <SectionWrapper id="faq" bg="alt">
      <SectionHeading
        badge="FAQ locale"
        title={`Questions fréquentes — ${city.city}`}
        subtitle="Tout ce que les pros me demandent avant de lancer leur projet."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {city.faq.map((item, i) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <motion.details
      className="card-gradient-border-light group p-5 md:p-6"
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <summary className="flex cursor-pointer list-none items-start gap-3">
        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
        <span className="flex-1 font-playfair text-lg font-bold text-navy">
          {question}
        </span>
        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform group-open:rotate-90" />
      </summary>
      <div className="mt-3 pl-8 text-sm leading-relaxed text-text-muted md:text-base">
        {answer}
      </div>
    </motion.details>
  );
}
