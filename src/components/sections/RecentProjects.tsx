"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

// TODO: Remplacer par de vrais projets livrés (garder la même structure).

interface RecentProject {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  year: string;
}

const projects: RecentProject[] = [
  {
    title: "Site vitrine — Architecte d'intérieur",
    category: "Site Web",
    summary:
      "Portfolio sur mesure avec galerie de réalisations, contact direct et SEO local pour une indépendante basée en Bretagne.",
    stack: ["Next.js", "Tailwind", "SEO local"],
    year: "2026",
  },
  {
    title: "Landing page — Coach sportif",
    category: "Site Web",
    summary:
      "One-page rapide avec prise de rendez-vous intégrée, formulaire Formspree et optimisation mobile poussée.",
    stack: ["Next.js", "Formspree", "Calendly"],
    year: "2026",
  },
  {
    title: "Outil interne — Gestion de devis",
    category: "Outils Internes",
    summary:
      "Back-office sur mesure pour générer, envoyer et suivre des devis clients, avec export PDF et relances automatiques.",
    stack: ["Next.js", "Supabase", "PDF"],
    year: "2026",
  },
];

export default function RecentProjects() {
  return (
    <SectionWrapper id="projets-recents" bg="navy">
      <SectionHeading
        badge="Réalisations récentes"
        title="Projets récents"
        subtitle="Un aperçu de ce que je livre concrètement. Chaque projet est conçu sur mesure, sans template."
        dark
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: RecentProject;
  index: number;
}) {
  return (
    <motion.article
      className="card-gradient-border relative flex h-full flex-col p-6 md:p-7"
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold text-gold">
          {project.category}
        </span>
        <span className="text-xs text-text-light/60">{project.year}</span>
      </div>

      <h3 className="mt-5 font-playfair text-xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-light">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-navy-medium px-2.5 py-1 text-xs text-text-light/80"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold">
        Projet sur mesure
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </motion.article>
  );
}
