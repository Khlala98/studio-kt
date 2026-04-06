"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import type { BgVariant } from "@/types";

const bgClasses: Record<BgVariant, string> = {
  main: "bg-bg-main",
  alt: "bg-bg-alt",
  navy: "bg-navy text-white",
};

interface SectionWrapperProps {
  id?: string;
  bg?: BgVariant;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  bg = "main",
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 px-4 md:py-24 md:px-6 ${bgClasses[bg]} ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
