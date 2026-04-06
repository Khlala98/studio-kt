"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import type { ButtonVariant } from "@/types";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy font-semibold hover:bg-gold-light shadow-sm hover:shadow-lg",
  secondary:
    "border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-navy",
  ghost:
    "text-text-muted hover:text-navy hover:bg-bg-alt",
};

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  "data-track"?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  onClick,
  type = "button",
  disabled,
  target,
  rel,
  "aria-label": ariaLabel,
  "data-track": dataTrack,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        data-track={dataTrack}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      data-track={dataTrack}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
