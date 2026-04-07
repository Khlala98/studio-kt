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

  {
    slug: "creation-site-internet-brest",
    city: "Brest",
    heroTitle: "Création de site internet à Brest",
    heroSubtitle:
      "Studio KT crée votre site professionnel à Brest. Design sur mesure, livré en cinq jours, sans abonnement.",
    introParagraphs: [
      "Brest a une économie particulière. Le port militaire, l'arsenal, le technopôle Brest-Iroise, les filières de défense et du maritime structurent une bonne partie de l'activité. Mais autour, il y a aussi tout un tissu de commerces, d'artisans, d'indépendants et de professions libérales qui font vivre la ville au quotidien.",
      "Cette partie-là est souvent sous-représentée en ligne. Elle aurait pourtant tout à gagner à se montrer : vos clients brestois cherchent sur Google avant d'acheter ou de prendre rendez-vous, et si vous n'y êtes pas, ils vont chez quelqu'un d'autre.",
    ],
    localAdvantages: [
      {
        title: "Un développeur qui connaît Brest",
        description:
          "Siam, Saint-Marc, Bellevue, Recouvrance : chaque quartier a sa propre clientèle. Votre site est adapté à votre zone et à votre type de clients.",
      },
      {
        title: "SEO local optimisé",
        description:
          "Contenu géolocalisé, fiche Google Business Profile alignée, structure propre : votre site remonte sur les recherches locales qui amènent des clients brestois.",
      },
      {
        title: "Pensé pour la saisonnalité",
        description:
          "Activité touristique, météo, événements locaux : votre site peut être pensé pour s'adapter aux variations de la demande brestoise.",
      },
      {
        title: "Livré en cinq jours",
        description:
          "Du brief à la mise en ligne en une semaine. Sans agence, sans intermédiaire, sans process à rallonge.",
      },
    ],
    landmarks: [
      "Rue de Siam",
      "Saint-Marc",
      "Bellevue",
      "Recouvrance",
      "Kérinou",
      "Lambézellec",
      "Technopôle Brest-Iroise",
      "Guipavas",
      "Plougastel-Daoulas",
    ],
    faq: [
      {
        question: "Vous accompagnez des pros installés à Brest ?",
        answer:
          "Oui. Studio KT travaille avec des commerçants, artisans, indépendants et professions libérales dans tout le pays de Brest. Les échanges se font à distance ou en visio, ce qui permet de démarrer rapidement.",
      },
      {
        question: "Est-ce que le site sera référencé sur Google à Brest ?",
        answer:
          "C'est l'objectif central. Chaque site est conçu avec le SEO local intégré : balises géographiques, contenu adapté, fiche Google Business Profile alignée. Les premiers résultats remontent en quelques semaines.",
      },
      {
        question: "Je suis à Guipavas ou Plougastel, ça change quelque chose ?",
        answer:
          "Non. Tout le pays de Brest est couvert : Guipavas, Plougastel-Daoulas, Le Relecq-Kerhuon, Gouesnou, Bohars. Le site peut cibler spécifiquement votre commune ou couvrir plusieurs zones selon votre activité.",
      },
      {
        question: "Mon activité est saisonnière, comment le site s'adapte ?",
        answer:
          "Le site peut mettre en avant différentes informations selon la saison, intégrer un bandeau d'actualité, ou lister des événements. Tout se pense dès la conception, sans surcoût ni maintenance mensuelle.",
      },
    ],
    metaTitle: "Création de site internet à Brest | Studio KT — Devis gratuit",
    metaDescription:
      "Créateur de site internet à Brest. Sites vitrines professionnels, rapides, sans abonnement. Livré en 5 jours. Devis gratuit.",
  },

  {
    slug: "creation-site-internet-saint-malo",
    city: "Saint-Malo",
    heroTitle: "Création de site internet à Saint-Malo",
    heroSubtitle:
      "Studio KT crée votre site professionnel à Saint-Malo. Design sur mesure, livré en cinq jours, sans abonnement.",
    introParagraphs: [
      "Saint-Malo vit une double réalité : un centre intra-muros touché par un flux touristique massif toute l'année, et un tissu local de commerces, artisans et indépendants qui travaillent avec une clientèle résidente. Les deux ont besoin d'un site, mais pas pour les mêmes raisons.",
      "Pour capter cette double clientèle — visiteurs de passage et habitants fidèles — un site bien conçu est le meilleur investissement. Il répond aux questions avant même qu'on vous appelle, et fait remonter votre activité sur Google dès qu'on cherche à Saint-Malo.",
    ],
    localAdvantages: [
      {
        title: "Pensé pour la double clientèle malouine",
        description:
          "Votre site peut s'adresser à la fois aux locaux et aux touristes, avec des messages et des appels à l'action adaptés à chaque cible.",
      },
      {
        title: "SEO local travaillé",
        description:
          "Remontée sur des requêtes comme \"restaurant intra-muros\" ou \"ostéopathe Paramé\" grâce à une structure SEO propre dès la conception.",
      },
      {
        title: "Rapide sur mobile",
        description:
          "Les touristes consultent leur téléphone en marchant. Un site rapide qui s'affiche en moins d'une seconde fait une vraie différence sur le taux de conversion.",
      },
      {
        title: "Livré en cinq jours",
        description:
          "Du brief à la mise en ligne en une semaine. Idéal pour être prêt avant la haute saison.",
      },
    ],
    landmarks: [
      "Intra-muros",
      "Paramé",
      "Rocabey",
      "Saint-Servan",
      "Rothéneuf",
      "La Découverte",
      "Courtoisville",
      "Cancale",
      "Dinard",
    ],
    faq: [
      {
        question: "Mon activité est saisonnière, un site vaut-il le coup ?",
        answer:
          "Encore plus dans ce cas. Un site travaille pour vous toute l'année sans que vous ayez à publier quoi que ce soit. Et pour la haute saison, c'est ce qui fait qu'un touriste vous trouve en cherchant \"crêperie Saint-Malo\" ou \"location vélo intra-muros\" depuis son téléphone.",
      },
      {
        question:
          "Peut-on mettre un système de réservation ou prise de rendez-vous ?",
        answer:
          "Oui, la formule Premium intègre la prise de rendez-vous en ligne, utile pour les restaurants, activités touristiques, thérapeutes ou coachs. L'intégration se fait avec des outils éprouvés (Calendly, Cal.com, etc.).",
      },
      {
        question: "Vous couvrez aussi Dinard et Cancale ?",
        answer:
          "Oui. Le bassin maritime nord-breton est couvert : Saint-Malo, Dinard, Cancale, Dinan, Paramé, Rothéneuf. Le site peut cibler une commune précise ou couvrir un périmètre plus large selon votre activité.",
      },
      {
        question:
          "Comment faire remonter mon site sur \"restaurant Saint-Malo\" ?",
        answer:
          "Ce type de requête est concurrentielle : il faut un site techniquement propre, une fiche Google Business Profile bien remplie avec des photos et des avis, et du contenu pertinent. Studio KT pose ces fondations dès la conception. Les résultats s'améliorent ensuite dans le temps.",
      },
    ],
    metaTitle:
      "Création de site internet à Saint-Malo | Studio KT — Devis gratuit",
    metaDescription:
      "Créateur de site internet à Saint-Malo. Sites vitrines professionnels, rapides, sans abonnement. Livré en 5 jours. Devis gratuit.",
  },

  {
    slug: "creation-site-internet-vannes",
    city: "Vannes",
    heroTitle: "Création de site internet à Vannes",
    heroSubtitle:
      "Studio KT crée votre site professionnel à Vannes. Design sur mesure, livré en cinq jours, sans abonnement.",
    introParagraphs: [
      "Vannes conjugue un centre médiéval classé qui attire les visiteurs, un port de plaisance actif, et tout un tissu économique autour du golfe du Morbihan. L'activité locale est portée par l'artisanat, le tourisme, les services et un nombre croissant d'indépendants qui viennent s'installer dans l'agglomération.",
      "Dans ce contexte, un site internet bien fait n'est pas un luxe : c'est ce qui fait la différence entre une activité qu'on trouve sur Google et une activité qui reste invisible malgré la qualité du travail.",
    ],
    localAdvantages: [
      {
        title: "Un interlocuteur qui connaît le Morbihan",
        description:
          "Centre historique, Kercado, Conleau, Ménimur : chaque quartier a ses particularités. Votre site est pensé pour votre vraie zone d'activité.",
      },
      {
        title: "SEO local dès la conception",
        description:
          "Remontée sur les recherches \"plombier Vannes\", \"coach sportif Ménimur\" ou \"ostéopathe golfe du Morbihan\" grâce à une structure SEO propre.",
      },
      {
        title: "Adapté au tourisme du Golfe",
        description:
          "Si votre activité touche au tourisme, votre site peut mettre en avant vos prestations aux visiteurs du golfe du Morbihan et de l'île aux Moines.",
      },
      {
        title: "Livré en cinq jours",
        description:
          "Du brief à la mise en ligne en une semaine. Pour être opérationnel rapidement, sans process qui traîne.",
      },
    ],
    landmarks: [
      "Centre médiéval",
      "Port de plaisance",
      "Conleau",
      "Kercado",
      "Ménimur",
      "Saint-Patern",
      "Rohan",
      "Séné",
      "Arradon",
    ],
    faq: [
      {
        question: "Vous travaillez avec des pros installés à Vannes ?",
        answer:
          "Oui. Studio KT accompagne des indépendants, artisans, commerçants et professions libérales dans toute l'agglomération vannetaise. Les échanges se font à distance ou en visio pour avancer vite.",
      },
      {
        question: "Mon site remontera-t-il sur Google à Vannes ?",
        answer:
          "C'est l'objectif. Chaque site est structuré pour le SEO local : contenu adapté, balises géographiques, fiche Google Business Profile alignée. Les premiers résultats arrivent en quelques semaines.",
      },
      {
        question: "Je suis à Séné, Arradon ou Saint-Avé, ça fonctionne ?",
        answer:
          "Oui. Toute l'agglomération de Golfe du Morbihan est couverte : Séné, Arradon, Saint-Avé, Plescop, Theix-Noyalo. Le site peut cibler une commune précise ou couvrir plusieurs zones selon votre activité.",
      },
      {
        question: "Mon activité est liée au tourisme du golfe, c'est pertinent ?",
        answer:
          "Encore plus. Les visiteurs du golfe du Morbihan cherchent tout sur leur téléphone : restaurants, balades, hébergements, activités. Un site rapide et bien référencé transforme ces recherches en clients.",
      },
    ],
    metaTitle:
      "Création de site internet à Vannes | Studio KT — Devis gratuit",
    metaDescription:
      "Créateur de site internet à Vannes. Sites vitrines professionnels, rapides, sans abonnement. Livré en 5 jours. Devis gratuit.",
  },
];

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((p) => p.slug === slug);
}
