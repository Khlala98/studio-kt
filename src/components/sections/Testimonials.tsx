"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

// TODO: Les témoignages ci-dessous sont fictifs. Les remplacer par de vrais avis clients.

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Camille D.",
    role: "Architecte d'intérieur",
    quote:
      "Mon site a été livré en 4 jours. Le résultat est exactement ce que j'avais en tête. Mes clients me disent que ça fait très professionnel.",
    stars: 5,
  },
  {
    name: "Maxime R.",
    role: "Coach sportif",
    quote:
      "Je n'y connaissais rien en sites internet. On m'a tout expliqué simplement et j'ai un site qui me ramène des clients chaque semaine.",
    stars: 5,
  },
  {
    name: "Sophie L.",
    role: "Gérante de boutique",
    quote:
      "Le fait de ne pas avoir d'abonnement, c'est ce qui m'a convaincue. Et je peux modifier mes textes toute seule, c'est top.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <SectionWrapper bg="navy">
      <SectionHeading
        badge="Témoignages"
        title="Ils nous font confiance"
        subtitle="Découvrez ce que nos clients disent de leur expérience avec Studio KT."
        dark
      />

      <div
        className="relative mx-auto max-w-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <CarouselArrows onPrev={prev} onNext={next} />

        <div className="overflow-hidden px-2 py-4">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={current}
              testimonial={testimonials[current]}
            />
          </AnimatePresence>
        </div>

        <Dots current={current} onSelect={setCurrent} />
      </div>
    </SectionWrapper>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.blockquote
      className="rounded-xl border border-border-dark bg-navy-light p-6 text-center md:p-8"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <Quote className="mx-auto mb-4 h-8 w-8 text-gold/30" />

      <Stars count={testimonial.stars} />

      <p className="mt-4 text-lg leading-relaxed text-white/90 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <footer className="mt-6">
        <cite className="not-italic">
          <span className="block font-playfair font-bold text-gold">
            {testimonial.name}
          </span>
          <span className="text-sm text-text-light">{testimonial.role}</span>
        </cite>
      </footer>
    </motion.blockquote>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
      ))}
    </div>
  );
}

function CarouselArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  const base =
    "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border-dark bg-navy-light text-text-light transition-colors hover:text-gold hover:border-gold";
  return (
    <>
      <button
        onClick={onPrev}
        className={`${base} -left-2 md:-left-14`}
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={onNext}
        className={`${base} -right-2 md:-right-14`}
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  );
}

function Dots({
  current,
  onSelect,
}: {
  current: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            i === current ? "w-6 bg-gold" : "bg-text-light/30 hover:bg-text-light/50"
          }`}
          aria-label={`Voir le témoignage ${i + 1}`}
        />
      ))}
    </div>
  );
}
