import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Studio KT",
  description:
    "Politique de confidentialité du site Studio KT. Données collectées, RGPD, cookies, droits utilisateurs.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="bg-bg-main px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-playfair text-3xl font-bold text-navy md:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>

        <div className="prose prose-slate mt-10 max-w-none space-y-8">
          <Section title="Données collectées">
            <p>
              Lorsque vous utilisez le formulaire de contact de notre site, nous
              collectons les informations suivantes :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Message et formule souhaitée</li>
            </ul>
          </Section>

          <Section title="Finalité du traitement">
            <p>
              Les données collectées sont utilisées exclusivement pour traiter
              votre demande de devis et vous recontacter dans le cadre de votre
              projet. Aucune donnée n&apos;est cédée, vendue ou utilisée à des
              fins commerciales tierces.
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Vos données sont conservées pendant <strong>12 mois</strong> à
              compter du dernier contact, puis automatiquement supprimées.
            </p>
          </Section>

          <Section title="Vos droits (RGPD)">
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-3">
              Pour exercer vos droits, contactez-nous à :{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Ce site utilise uniquement des <strong>cookies fonctionnels</strong>{" "}
              indispensables à son bon fonctionnement. Aucun cookie de tracking,
              de publicité ou d&apos;analyse comportementale n&apos;est déposé sur
              votre appareil.
            </p>
          </Section>

          <Section title="Hébergement et transfert de données">
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, société
              américaine. Le transfert de données vers les États-Unis est encadré
              par les clauses contractuelles types adoptées par la Commission
              européenne, garantissant un niveau de protection équivalent à celui
              de l&apos;Union européenne.
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
