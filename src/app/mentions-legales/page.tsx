import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Mentions légales — Studio KT",
  description:
    "Mentions légales du site Studio KT. Éditeur, hébergement, propriété intellectuelle, responsabilité.",
};

export default function MentionsLegalesPage() {
  return (
    <article className="bg-bg-main px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-playfair text-3xl font-bold text-navy md:text-4xl">
          Mentions légales
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>

        <div className="prose prose-slate mt-10 max-w-none space-y-8">
          <Section title="Éditeur du site">
            <p>
              Le présent site est édité par <strong>{siteConfig.name}</strong>,
              prestation réalisée via <strong>ITG</strong>, société de portage
              salarial.
            </p>
            <ul className="mt-2 list-none space-y-1 pl-0">
              <li>
                Email :{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                Téléphone :{" "}
                <a
                  href={`tel:+${siteConfig.whatsapp}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </Section>

          <Section title="Hébergement">
            <p>Le site est hébergé par :</p>
            <p className="mt-2">
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                vercel.com
              </a>
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              logo, code source) est la propriété exclusive de {siteConfig.name},
              sauf mention contraire. Toute reproduction, représentation ou
              diffusion, totale ou partielle, sans autorisation écrite préalable
              est interdite et constituerait une contrefaçon sanctionnée par les
              articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>
              {siteConfig.name} s&apos;efforce de fournir des informations aussi
              précises que possible sur ce site. Toutefois, l&apos;éditeur ne
              pourra être tenu responsable des omissions, inexactitudes ou
              carences dans la mise à jour, qu&apos;elles soient de son fait ou
              du fait des tiers partenaires qui lui fournissent ces
              informations.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p>
              Le présent site et les présentes mentions légales sont régis par
              le droit français. En cas de litige, et après tentative de
              recherche d&apos;une solution amiable, les tribunaux français
              seront seuls compétents.
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-playfair text-xl font-bold text-navy md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-2 text-text-muted leading-relaxed">
        {children}
      </div>
    </section>
  );
}
