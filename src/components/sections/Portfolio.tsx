"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  name: string;
  type: string;
  url: string;
  displayUrl: string;
}

const projects: Project[] = [
  {
    name: "Camille Duval Architecte",
    type: "Site vitrine",
    url: "https://camille-duval-architecte.vercel.app",
    displayUrl: "camille-duval-architecte.vercel.app",
  },
  {
    name: "HK Clothing",
    type: "E-commerce",
    url: "https://hk-clothing-two.vercel.app",
    displayUrl: "hk-clothing-two.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <SectionWrapper id="realisations" bg="navy">
      <SectionHeading
        badge="Portfolio"
        title="Exemples de réalisations"
        subtitle="Découvrez quelques projets livrés récemment à nos clients."
        dark
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <PortfolioBrowser url={project.displayUrl} />
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-playfair text-lg font-bold text-white">
            {project.name}
          </h3>
          <p className="text-sm text-text-light">{project.type}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-light"
        >
          Voir le site
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

function PortfolioBrowser({ url }: { url: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-dark bg-navy-light shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border-dark bg-navy px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-navy-medium px-3 py-1 text-xs text-text-light">
          {url}
        </div>
      </div>

      {/* Mock page content */}
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-navy/60 px-3 py-2">
          <div className="h-2.5 w-14 rounded bg-gold/50" />
          <div className="flex gap-2">
            <div className="h-2 w-10 rounded bg-text-light/25" />
            <div className="h-2 w-10 rounded bg-text-light/25" />
            <div className="h-2 w-10 rounded bg-text-light/25" />
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-gradient-to-br from-navy-medium to-navy p-6">
          <div className="mb-2 h-3 w-4/5 rounded bg-white/15" />
          <div className="mb-1 h-2.5 w-3/5 rounded bg-white/10" />
          <div className="mt-3 h-6 w-20 rounded bg-gold/60" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-lg bg-navy/30 p-3">
              <div className="mb-2 h-8 rounded bg-navy-medium/60" />
              <div className="mb-1 h-1.5 w-full rounded bg-text-light/15" />
              <div className="h-1.5 w-2/3 rounded bg-text-light/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
