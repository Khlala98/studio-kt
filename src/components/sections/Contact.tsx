"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import ContactForm from "@/components/sections/ContactForm";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: siteConfig.phone,
    href: `tel:+${siteConfig.whatsapp}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Écrire sur WhatsApp",
    href: siteConfig.whatsappUrl,
    external: true,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" bg="navy">
      <SectionHeading
        badge="Contact"
        title="Prêt à avoir votre site ?"
        subtitle="Remplissez le formulaire ou contactez-moi directement. Réponse garantie sous 48h."
        dark
      />

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ContactInfo />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {contactItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 rounded-xl border border-border-dark bg-navy-light p-4 transition-all duration-300 hover:border-gold/40 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-dim">
            <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <div>
            <span className="block text-xs text-text-light">{item.label}</span>
            <span className="font-medium text-white">{item.value}</span>
          </div>
        </a>
      ))}

      <div className="flex items-center gap-3 rounded-xl bg-gold-dim p-4">
        <Clock className="h-5 w-5 text-gold" />
        <span className="text-sm font-medium text-gold">
          Réponse sous 48h
        </span>
      </div>
    </div>
  );
}
