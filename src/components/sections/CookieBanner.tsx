"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "studiokt_cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border-dark bg-navy px-4 py-4 shadow-2xl md:px-6"
          role="dialog"
          aria-label="Bandeau cookies"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-gray-light text-center md:text-left">
              Ce site utilise uniquement des cookies fonctionnels. Aucun tracking.
            </p>
            <Button
              variant="primary"
              onClick={handleAccept}
              className="shrink-0 text-sm"
            >
              Compris
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
