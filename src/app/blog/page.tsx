import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog — Studio KT | Création de site internet en Bretagne",
  description:
    "Conseils, guides et actualités sur la création de site internet à Rennes, Nantes, Brest et dans tout l'Ouest. Studio KT, votre développeur local.",
  alternates: {
    canonical: "https://studiokt.fr/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-bg-main px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Blog Studio KT
          </p>
          <h1 className="mt-3 font-playfair text-4xl font-bold text-navy md:text-5xl">
            Conseils & guides pour votre présence en ligne
          </h1>
          <p className="mt-4 text-lg text-text-muted leading-relaxed">
            Tout ce qu&apos;il faut savoir pour créer, optimiser et rentabiliser
            votre site internet en Bretagne et dans l&apos;Ouest. Sans jargon,
            sans bullshit.
          </p>
        </header>

        <BlogList posts={blogPosts} />
      </div>
    </div>
  );
}
