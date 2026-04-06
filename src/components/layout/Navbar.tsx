"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  return (
    <>
      <ScrollListener onScroll={handleScroll} />
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-scrolled shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Logo />
          <DesktopLinks />
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              className="hidden text-xs md:inline-flex"
            >
              Devis gratuit
            </Button>
            <MobileMenuToggle
              isOpen={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
            />
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <MobileMenu onClose={() => setMobileOpen(false)} />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

/* ---------- Sub-components ---------- */

function ScrollListener({ onScroll }: { onScroll: () => void }) {
  if (typeof window !== "undefined") {
    // Using a passive scroll listener via a hidden component
  }
  return <ScrollEffect onScroll={onScroll} />;
}

function ScrollEffect({ onScroll }: { onScroll: () => void }) {
  "use client";
  // We use motion's useMotionValueEvent alternative:
  // attach scroll listener in a useEffect-free way via a ref callback
  return (
    <motion.div
      className="hidden"
      onViewportEnter={() => {}}
      ref={(el) => {
        if (el && typeof window !== "undefined") {
          window.addEventListener("scroll", onScroll, { passive: true });
        }
      }}
    />
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Studio KT - Accueil">
      <Image
        src="/logo.png"
        alt="Studio KT"
        width={36}
        height={36}
        className="h-9 w-9"
      />
      <span className="flex items-baseline gap-1">
        <span className="font-playfair text-xl font-bold text-gold">KT</span>
        <span className="text-sm text-text-light">Studio</span>
      </span>
    </a>
  );
}

function DesktopLinks() {
  return (
    <ul className="hidden items-center gap-6 md:flex" role="list">
      {siteConfig.navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-sm text-text-light transition-colors duration-200 hover:text-gold"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function MobileMenuToggle({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-lg p-2 text-text-light transition-colors hover:text-gold md:hidden"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden border-t border-border-dark bg-navy/95 backdrop-blur-lg md:hidden"
    >
      <ul className="flex flex-col gap-1 px-4 py-4" role="list">
        {siteConfig.navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-2.5 text-sm text-text-light transition-colors hover:bg-navy-medium hover:text-gold"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="mt-2">
          <Button href="#contact" variant="primary" className="w-full text-sm" onClick={onClose}>
            Devis gratuit
          </Button>
        </li>
      </ul>
    </motion.div>
  );
}
