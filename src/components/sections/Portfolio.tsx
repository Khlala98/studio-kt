"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  name: string;
  type: string;
  url: string;
  displayUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Camille Duval Architecte",
    type: "Site vitrine",
    url: "https://camille-duval-architecte.vercel.app",
    displayUrl: "camille-duval-architecte.vercel.app",
    image: "/portfolio-camille.webp",
  },
  {
    name: "HK Clothing",
    type: "E-commerce",
    url: "https://hk-clothing-two.vercel.app",
    displayUrl: "hk-clothing-two.vercel.app",
    image: "/portfolio-hk-1.webp",
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
      <PortfolioBrowser url={project.displayUrl} image={project.image} name={project.name} />
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

function PortfolioBrowser({ url, image, name }: { url: string; image: string; name: string }) {
  return (
    <a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl border border-border-dark bg-navy-light shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
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

      {/* Real screenshot */}
      <div className="relative aspect-[16/10] w-full bg-navy">
        <Image
          src={image}
          alt={`Aperçu du site ${name}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </a>
  );
}
