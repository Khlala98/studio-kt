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
  divider?: boolean;
}

export default function SectionWrapper({
  id,
  bg = "main",
  className = "",
  children,
  divider = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-16 px-4 md:py-24 md:px-6 ${bgClasses[bg]} ${className}`}
    >
      {divider && (
        <div
          className="section-divider absolute left-1/2 top-0 -translate-x-1/2"
          style={{ width: "min(90%, 1100px)" }}
          aria-hidden="true"
        />
      )}
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
