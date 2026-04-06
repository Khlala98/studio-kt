"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

// TODO: Brancher sur un backend (API route, Resend, Formspree, etc.)

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  formula: string;
  message: string;
}

const formulas = [
  { value: "", label: "Choisir une formule" },
  { value: "essentiel", label: "Essentiel — 499€" },
  { value: "pro", label: "Pro — 799€" },
  { value: "premium", label: "Premium — 1 499€" },
  { value: "undecided", label: "Pas encore décidé" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // TODO: Envoyer les données au backend
    console.log("Contact form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl border border-border-dark bg-navy-light p-6 md:p-8"
      noValidate
    >
      <FieldGroup label="Nom" error={errors.name?.message}>
        <input
          {...register("name", { required: "Le nom est requis" })}
          type="text"
          placeholder="Votre nom"
          className={fieldClasses(!!errors.name)}
        />
      </FieldGroup>

      <FieldGroup label="Email" error={errors.email?.message}>
        <input
          {...register("email", {
            required: "L'email est requis",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email invalide",
            },
          })}
          type="email"
          placeholder="votre@email.com"
          className={fieldClasses(!!errors.email)}
        />
      </FieldGroup>

      <FieldGroup label="Téléphone" sublabel="(optionnel)">
        <input
          {...register("phone")}
          type="tel"
          placeholder="06 00 00 00 00"
          className={fieldClasses(false)}
        />
      </FieldGroup>

      <FieldGroup label="Formule souhaitée">
        <select
          {...register("formula")}
          className={fieldClasses(false)}
        >
          {formulas.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </FieldGroup>

      <FieldGroup label="Message" error={errors.message?.message}>
        <textarea
          {...register("message", { required: "Le message est requis" })}
          rows={4}
          placeholder="Décrivez votre projet en quelques lignes..."
          className={`${fieldClasses(!!errors.message)} resize-none`}
        />
      </FieldGroup>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        data-track="contact_submit"
      >
        <Send className="h-4 w-4" />
        Envoyer ma demande
      </Button>
    </form>
  );
}

function FieldGroup({
  label,
  sublabel,
  error,
  children,
}: {
  label: string;
  sublabel?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text-light">
        {label}
        {sublabel && (
          <span className="ml-1 font-normal text-text-light/50">{sublabel}</span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function fieldClasses(hasError: boolean): string {
  return `w-full rounded-lg border bg-navy px-4 py-2.5 text-sm text-white placeholder-text-light/40 transition-colors focus:border-gold focus:outline-none ${
    hasError ? "border-red-400" : "border-border-dark"
  }`;
}

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border-dark bg-navy-light p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
        <CheckCircle className="h-8 w-8 text-success" />
      </div>
      <h3 className="font-playfair text-xl font-bold text-white">
        Message envoyé !
      </h3>
      <p className="text-sm text-text-light">
        Merci pour votre message. Je vous réponds sous 48h maximum.
      </p>
    </div>
  );
}
