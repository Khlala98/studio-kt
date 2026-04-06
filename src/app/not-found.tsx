import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable — Studio KT",
  description:
    "Cette page n'existe pas ou a été déplacée. Retour à l'accueil de Studio KT.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy px-4 py-24 md:px-6">
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <p className="font-playfair text-8xl font-bold text-gradient-gold md:text-9xl">
          404
        </p>

        <h1 className="mt-6 font-playfair text-3xl font-bold text-white md:text-4xl">
          Cette page a disparu
        </h1>

        <p className="mt-4 text-base leading-relaxed text-text-light">
          Le lien est peut-être cassé, ou la page a été déplacée. Pas de panique,
          vous pouvez revenir à l&apos;accueil ou jeter un œil au blog.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-glow-gold inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            <Home className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gold px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            Aller au blog
          </Link>
        </div>
      </div>
    </section>
  );
}
