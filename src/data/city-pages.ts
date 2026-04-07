export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityPageData {
  slug: string; // e.g. "creation-site-internet-rennes"
  city: string; // e.g. "Rennes"
  heroTitle: string;
  heroSubtitle: string;
  introParagraphs: string[]; // 1-2 paragraphs for local context
  localAdvantages: {
    title: string;
    description: string;
  }[];
  landmarks: string[]; // real places / districts mentioned
  faq: CityFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const cityPages: CityPageData[] = [
  {
    slug: "creation-site-internet-rennes",
    city: "Rennes",
    heroTitle: "Création de site internet à Rennes",
    heroSubtitle:
      "Studio KT crée votre site professionnel à Rennes. Design sur mesure, livré en cinq jours, sans abonnement.",
    introParagraphs: [
      "Rennes bouge. Entre la French Tech Rennes Saint-Malo, les milliers d'étudiants qui traversent le centre tous les jours, et tout le tissu de commerçants, artisans et indépendants installés dans la métropole, l'activité locale est dense. Ce qui crée aussi beaucoup de concurrence.",
      "Pour exister dans ce paysage, un site internet bien conçu est devenu indispensable. Pas un template générique : un site pensé pour votre métier, votre quartier, et les clients que vous voulez attirer à Rennes.",
    ],
    localAdvantages: [
      {
        title: "Un interlocuteur qui connaît Rennes",
        description:
          "Je sais que la zone Alma, le centre historique, Villejean ou Cleunay n'attirent pas la même clientèle. Votre site est pensé pour votre vraie zone d'activité.",
      },
      {
        title: "SEO local travaillé dès la conception",
        description:
          "Votre site est structuré pour remonter sur des recherches comme \"plombier Rennes centre\" ou \"coach sportif Cesson-Sévigné\", avec fiche Google Business Profile alignée.",
      },
      {
        title: "Réactivité directe",
        description:
          "Pas d'agence parisienne, pas d'intermédiaire. Vous parlez directement à la personne qui code votre site. Retours traités dans la journée.",
      },
      {
        title: "Livré en cinq jours",
        description:
          "Du brief à la mise en ligne en une semaine. Vous m'envoyez vos contenus, je m'occupe du reste.",
      },
    ],
    landmarks: [
      "Centre historique",
      "Sainte-Thérèse",
      "Villejean",
      "Route de Lorient",
      "Zone commerciale Alma",
      "Cesson-Sévigné",
      "Saint-Grégoire",
      "Bruz",
      "Pacé",
    ],
    faq: [
      {
        question: "Vous êtes basé à Rennes ?",
        answer:
          "Oui, Studio KT travaille depuis Rennes et couvre toute la métropole. Je peux intervenir à distance ou en visio selon vos préférences — les échanges restent rapides et directs.",
      },
      {
        question:
          "Le site sera-t-il visible sur Google pour des recherches locales à Rennes ?",
        answer:
          "C'est exactement l'objectif. Chaque site est structuré pour le SEO local dès la conception : balises géographiques, contenu géolocalisé, fiche Google Business Profile alignée. Vous remontez sur les recherches qui amènent vraiment des clients rennais.",
      },
      {
        question: "Je suis installé en périphérie de Rennes, est-ce que ça marche aussi ?",
        answer:
          "Bien sûr. Bruz, Pacé, Cesson-Sévigné, Saint-Grégoire, Chantepie, Vern-sur-Seiche : toutes les communes de Rennes Métropole sont concernées. Le site peut même cibler plusieurs communes si votre zone d'intervention est large.",
      },
      {
        question: "Combien de temps pour voir des résultats SEO à Rennes ?",
        answer:
          "Entre quatre et huit semaines pour les premières remontées sur des requêtes peu concurrentielles (nom de marque, quartier précis). Trois à six mois pour des requêtes plus disputées. Un site bien fait posé correctement continue de progresser dans le temps.",
      },
    ],
    metaTitle: "Création de site internet à Rennes | Studio KT — Devis gratuit",
    metaDescription:
      "Créateur de site internet à Rennes. Sites vitrines professionnels, rapides, sans abonnement. Livré en 5 jours. Devis gratuit.",
  },

  {
    slug: "creation-site-internet-nantes",
    city: "Nantes",
    heroTitle: "Création de site internet à Nantes",
    heroSubtitle:
      "Studio KT crée votre site professionnel à Nantes. Design sur mesure, livré en cinq jours, sans abonnement.",
    introParagraphs: [
      "Nantes est l'une des métropoles les plus actives de France. La French Tech Nantes structure une partie du paysage numérique, l'Île de Nantes continue sa reconversion, et la zone Atlantis draine toute la périphérie ouest. Pour un indépendant, un commerçant ou un artisan installé dans la métropole, exister en ligne n'est plus optionnel.",
      "Ce qui fait la différence sur Google à Nantes, ce n'est pas juste d'avoir un site. C'est d'avoir un site rapide, bien structuré et pensé pour les recherches locales de votre clientèle réelle.",
    ],
    localAdvantages: [
      {
        title: "Un site pensé pour la densité nantaise",
        description:
          "Bouffay, Graslin, Chantenay, l'Île de Nantes ou Saint-Herblain n'ont pas la même clientèle. Votre site est adapté à votre zone et à votre positionnement.",
      },
      {
        title: "SEO local, sans jargon",
        description:
          "Structure technique, contenu géolocalisé, Google Business Profile : tout est travaillé pour que vous remontiez sur les recherches qui amènent des clients nantais.",
      },
      {
        title: "Pas d'agence, pas d'intermédiaire",
        description:
          "Vous échangez directement avec celui qui code. Les retours sont rapides, les décisions aussi.",
      },
      {
        title: "Livré en cinq jours",
        description:
          "Du brief à la mise en ligne en une semaine. Un process serré pour que vous soyez en ligne rapidement.",
      },
    ],
    landmarks: [
      "Île de Nantes",
      "Graslin",
      "Bouffay",
      "Chantenay",
      "Doulon",
      "Zone Atlantis",
      "Saint-Herblain",
      "Rezé",
      "Orvault",
    ],
    faq: [
      {
        question: "Vous travaillez avec des pros installés à Nantes ?",
        answer:
          "Oui. Studio KT accompagne des indépendants, artisans, commerçants et consultants dans toute la métropole nantaise. Les échanges se font à distance ou en visio, les décisions sont prises vite.",
      },
      {
        question: "Mon site remontera-t-il sur Google à Nantes ?",
        answer:
          "C'est l'objectif central. Chaque site est conçu avec le SEO local intégré : structure propre, contenu adapté à la géographie nantaise, fiche Google Business Profile alignée. Les premiers résultats arrivent en quelques semaines.",
      },
      {
        question: "Je suis à Saint-Herblain ou Rezé, ça change quelque chose ?",
        answer:
          "Non. Toutes les communes de Nantes Métropole sont couvertes : Saint-Herblain, Rezé, Orvault, Carquefou, Bouguenais, et les autres. Le site peut cibler spécifiquement votre commune ou couvrir plusieurs zones si vous intervenez sur un périmètre large.",
      },
      {
        question:
          "Est-ce que je peux vous rencontrer physiquement à Nantes ?",
        answer:
          "En pratique, la grande majorité des projets se fait à distance (appel, visio, messagerie) parce que c'est plus rapide et plus efficace. Si un rendez-vous physique est nécessaire, on en discute au cas par cas.",
      },
    ],
    metaTitle: "Création de site internet à Nantes | Studio KT — Devis gratuit",
    metaDescription:
      "Créateur de site internet à Nantes. Sites vitrines professionnels, rapides, sans abonnement. Livré en 5 jours. Devis gratuit.",
  },
];

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((p) => p.slug === slug);
}
