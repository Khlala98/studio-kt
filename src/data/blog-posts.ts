export type BlockType = "p" | "h2" | "ul";

export interface ContentBlock {
  type: BlockType;
  text?: string;
  items?: string[];
}

export type BlogCategory = "SEO Local" | "Guide" | "Conseils";

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO YYYY-MM-DD
  readingTime: number; // minutes
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "creation-site-internet-rennes",
    title:
      "Création de site internet à Rennes : pourquoi choisir un développeur local",
    metaDescription:
      "Vous cherchez un créateur de site internet à Rennes ? Studio KT conçoit des sites vitrines professionnels, rapides et optimisés SEO. Devis gratuit.",
    excerpt:
      "Pourquoi confier la création de votre site internet à un développeur basé à Rennes plutôt qu'à une agence anonyme ou une plateforme générique.",
    category: "SEO Local",
    date: "2026-01-12",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "En 2026, ne pas avoir de site internet quand on est commerçant, artisan ou indépendant à Rennes, c'est comme tenir une boutique sans enseigne dans une rue déserte. Vos futurs clients ne vous trouvent pas. Ils tombent sur vos concurrents. Et la plupart d'entre eux n'iront jamais plus loin que la première page de Google.",
      },
      {
        type: "p",
        text: "La bonne nouvelle, c'est qu'un site bien conçu suffit à inverser la tendance. Pas un site générique pondu en deux heures sur un constructeur en ligne. Un vrai site, pensé pour votre activité, optimisé pour Google et rapide à charger sur mobile. C'est exactement ce qu'on fait chez Studio KT.",
      },
      { type: "h2", text: "Pourquoi un développeur local change la donne" },
      {
        type: "p",
        text: "Travailler avec un développeur basé à Rennes, ce n'est pas qu'une question de proximité géographique. C'est avant tout une question de compréhension. Je connais le tissu économique local : le centre historique, les indépendants de Sainte-Anne, les commerces de Villejean, les artisans installés autour de Rennes Métropole. Cette connaissance change la façon dont on pense votre site, vos textes, vos appels à l'action.",
      },
      {
        type: "p",
        text: "Concrètement, ça veut dire un site qui parle à vos clients réels. Une page d'accueil qui mentionne votre quartier, vos zones d'intervention, les particularités de votre métier en Bretagne. C'est ce niveau de détail qui fait la différence sur Google quand quelqu'un tape \"plombier Rennes centre\" ou \"coach sportif Cesson-Sévigné\".",
      },
      { type: "h2", text: "Le SEO local, votre meilleur levier" },
      {
        type: "p",
        text: "Le référencement local, c'est l'art d'apparaître quand quelqu'un cherche un service près de chez lui. Studio KT travaille systématiquement l'optimisation locale de chaque site : balises géographiques, structure de contenu adaptée, fiche Google Business Profile bien renseignée, données structurées Schema.org. Tout ça pour que votre site remonte sur les recherches qui comptent vraiment pour vous.",
      },
      {
        type: "p",
        text: "Et soyons honnêtes : ce n'est pas une grosse agence parisienne qui va prendre le temps de comprendre que votre clientèle vient surtout de Bruz, de Pacé ou de Saint-Grégoire. Un développeur local sait. Et il en tient compte.",
      },
      { type: "h2", text: "Pourquoi pas WordPress ?" },
      {
        type: "p",
        text: "WordPress, c'est l'outil que tout le monde recommande par défaut. Le problème, c'est qu'en 2026 il accuse son âge. Les sites WordPress sont souvent lents, vulnérables aux failles de sécurité, dépendants de dizaines de plugins qui se cassent à chaque mise à jour. Et si vous ne payez pas une maintenance mensuelle, votre site finit par planter.",
      },
      {
        type: "p",
        text: "Studio KT utilise Next.js, une technologie moderne qui produit des sites cinq à dix fois plus rapides, sans plugins, sans base de données fragile, sans surface d'attaque inutile. Le résultat : un site qui se charge en moins d'une seconde, qui ne tombe jamais en panne et qui ne vous coûte rien à entretenir.",
      },
      { type: "h2", text: "Ce que Studio KT propose concrètement" },
      {
        type: "p",
        text: "Un site vitrine professionnel, livré clé en main en cinq jours ouvrés. Sans abonnement mensuel, sans frais cachés, sans engagement. Vous payez une fois, le site est à vous. À partir de 499 €, vous obtenez un site moderne, optimisé pour le mobile et pour Google, hébergé gratuitement la première année.",
      },
      {
        type: "p",
        text: "Si vous êtes installé à Rennes ou dans sa métropole et que vous voulez enfin un site qui travaille pour vous, parlons-en. Le devis est gratuit, la première discussion sans engagement, et je vous dirai franchement si votre projet mérite un site ou si une simple fiche Google suffit.",
      },
    ],
  },

  {
    slug: "creation-site-internet-nantes",
    title: "Création de site internet à Nantes : votre site pro livré en 5 jours",
    metaDescription:
      "Studio KT crée votre site internet professionnel à Nantes. Design sur mesure, ultra-rapide, sans abonnement. Devis gratuit en 48h.",
    excerpt:
      "Nantes est l'une des villes les plus dynamiques du Grand Ouest. Voici pourquoi un site internet bien fait y est devenu indispensable.",
    category: "SEO Local",
    date: "2026-01-19",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "Nantes a une économie qui bouge. Entre l'Île de Nantes, le quartier de la création, les commerces de Bouffay, les indépendants installés autour de Doulon ou de Chantenay, il y a des milliers d'activités qui se lancent chaque année. Toutes ne survivent pas. Et l'une des premières raisons de l'échec, c'est l'absence de visibilité en ligne.",
      },
      {
        type: "p",
        text: "On peut être excellent dans son métier et invisible sur Google. C'est même la situation par défaut. Pour exister en ligne, il faut un site. Pas un profil Facebook, pas une fiche Instagram. Un vrai site, qui vous appartient, qui vous représente et qui convertit les curieux en clients.",
      },
      { type: "h2", text: "Le contexte nantais" },
      {
        type: "p",
        text: "Nantes Métropole, c'est plus de 660 000 habitants, une attractivité forte, et une concurrence locale qui s'intensifie chaque mois. Les Nantais cherchent énormément en ligne avant d'acheter ou de prendre rendez-vous : un coiffeur à Talensac, un ostéopathe à Procé, un menuisier à Saint-Herblain. Si votre activité n'apparaît pas dans les premiers résultats, vous n'existez pas pour eux.",
      },
      {
        type: "p",
        text: "Studio KT conçoit des sites pensés pour ce contexte précis. Un design soigné qui inspire confiance dès les premières secondes, un contenu qui parle à votre clientèle nantaise, une structure SEO qui vous fait remonter sur les requêtes locales qui comptent.",
      },
      { type: "h2", text: "Livré en cinq jours, sans abonnement" },
      {
        type: "p",
        text: "La promesse Studio KT est simple : un site professionnel livré en cinq jours ouvrés, à partir de 499 €, sans abonnement mensuel. Pas de mauvaise surprise, pas de facture qui revient chaque mois, pas de plateforme qui vous tient en otage. Vous payez une fois, le site est à vous, vous le gardez à vie.",
      },
      {
        type: "p",
        text: "Cette rapidité de livraison n'est pas un effet d'annonce. Elle vient du fait que je travaille avec une stack moderne, sans CMS lourd, sans intermédiaire inutile. Vous m'envoyez vos contenus et vos photos, je m'occupe du reste. Cinq jours plus tard, votre site est en ligne.",
      },
      { type: "h2", text: "Un design sur mesure, pas un template" },
      {
        type: "p",
        text: "La grande différence avec un constructeur en ligne ou une agence low-cost, c'est que chaque site Studio KT est conçu spécifiquement pour vous. Pas de template repris sur trois mille autres sites. Vos couleurs, votre identité, votre tonalité. Le résultat, c'est un site qui vous ressemble, qui se distingue de la concurrence et qui inspire confiance immédiatement.",
      },
      {
        type: "p",
        text: "Et techniquement, on ne fait aucun compromis. Score PageSpeed maximum, mobile-first, accessibilité respectée, code propre, balises optimisées. Google adore ce genre de site. Vos visiteurs aussi.",
      },
      { type: "h2", text: "Pour qui ?" },
      {
        type: "p",
        text: "Les indépendants, les artisans, les commerçants, les coachs, les thérapeutes, les consultants installés à Nantes ou dans la métropole. Toute activité qui a besoin d'une vitrine professionnelle pour gagner en visibilité, en crédibilité et en clients. Si vous reconnaissez votre situation, on peut en parler tranquillement, sans engagement.",
      },
      {
        type: "p",
        text: "Le devis est gratuit et arrive sous 48 heures. Vous saurez exactement ce que vous payez, ce que vous obtenez, et combien de temps il faudra. Pas de jargon, pas de bullshit.",
      },
    ],
  },

  {
    slug: "creation-site-internet-brest",
    title: "Création de site internet à Brest : un site qui travaille pour vous",
    metaDescription:
      "Créateur de site internet à Brest. Sites vitrines modernes, rapides, optimisés Google. Pas d'abonnement. Studio KT, devis gratuit.",
    excerpt:
      "À Brest, beaucoup d'activités locales restent invisibles en ligne. Pourtant, un site bien conçu peut transformer la donne en quelques semaines.",
    category: "SEO Local",
    date: "2026-01-26",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "Brest a une identité forte. Le port, l'arsenal, l'économie maritime, le tourisme, sans oublier tout le tissu commerçant et artisanal qui anime Saint-Marc, Bellevue, Recouvrance ou le centre-ville. C'est une ville qui vit, qui produit, qui accueille. Et pourtant, beaucoup de ces activités locales sont invisibles sur Google.",
      },
      {
        type: "p",
        text: "Le problème n'est pas le manque de qualité. Les Brestois savent travailler. Le problème, c'est qu'en 2026, si on ne vous trouve pas en ligne, on ne vous trouve pas du tout. Et pendant ce temps, vos concurrents, eux, s'affichent en haut des résultats.",
      },
      { type: "h2", text: "Un site adapté à la réalité brestoise" },
      {
        type: "p",
        text: "Travailler avec un développeur qui connaît la Bretagne, c'est avoir quelqu'un qui comprend votre clientèle. Quelqu'un qui sait que les visiteurs touristiques cherchent autrement que les locaux, que la saisonnalité influence votre activité, que la météo joue un rôle dans certains métiers, et que l'attachement au territoire est un argument de vente puissant ici.",
      },
      {
        type: "p",
        text: "Studio KT prend tout ça en compte. Le site qu'on vous livre n'est pas un modèle copié-collé, c'est un outil pensé pour votre métier, votre quartier, votre saisonnalité. C'est ce niveau d'attention qui fait qu'un site fonctionne ou pas.",
      },
      { type: "h2", text: "Rapide, fiable, sans entretien" },
      {
        type: "p",
        text: "Les sites Studio KT sont construits avec Next.js, une technologie qui produit des pages quasi instantanées même sur une connexion 4G moyenne. C'est important parce que vos visiteurs sont impatients : si une page met plus de trois secondes à s'afficher, plus de la moitié partent. Avec un site rapide, vous gardez tout le monde et vous montez naturellement dans les résultats Google.",
      },
      {
        type: "p",
        text: "Autre avantage : pas de plugin, pas de base de données fragile, rien à mettre à jour. Une fois le site en ligne, il marche tout seul. Vous n'avez pas à payer un développeur tous les mois pour qu'il continue de fonctionner. C'est une vraie différence avec WordPress et consorts.",
      },
      { type: "h2", text: "Le SEO local, l'arme secrète" },
      {
        type: "p",
        text: "Un commerçant brestois qui veut être trouvé sur Google n'a pas besoin d'un site qui fait le buzz à Paris. Il a besoin d'apparaître quand quelqu'un tape \"boulangerie bio Brest\" ou \"plombier Saint-Marc\". C'est ça, le SEO local. Et ça se travaille dès la conception du site, pas après.",
      },
      {
        type: "p",
        text: "Chez Studio KT, le SEO local fait partie du livrable. Optimisation des balises, structure adaptée, contenu géolocalisé, données structurées. Tout est pensé pour que votre site remonte sur les recherches qui amènent de vrais clients chez vous.",
      },
      { type: "h2", text: "Combien ça coûte ?" },
      {
        type: "p",
        text: "Trois formules : 499 € pour un site vitrine de quatre pages, 999 € pour un site plus complet avec galerie, blog et formulaires avancés, 1499 € pour un site sur mesure avec fonctionnalités spécifiques. Aucun abonnement, aucun frais caché, vous savez tout dès le départ.",
      },
      {
        type: "p",
        text: "Si vous êtes installé à Brest ou dans le pays de Brest et que vous voulez enfin un site qui vous serve à quelque chose, demandez un devis. C'est gratuit, sans engagement, et vous aurez une réponse claire sous 48 heures.",
      },
    ],
  },

  {
    slug: "combien-coute-site-internet-professionnel",
    title: "Combien coûte un site internet professionnel en 2026 ?",
    metaDescription:
      "Le prix d'un site internet varie de 500€ à 5000€+. Découvrez ce qui fait varier le tarif et comment obtenir un site pro sans vous ruiner.",
    excerpt:
      "Un tour d'horizon honnête des tarifs du marché : agences, freelances, plateformes en ligne, et ce que vous obtenez vraiment pour votre argent.",
    category: "Guide",
    date: "2026-02-02",
    readingTime: 6,
    content: [
      {
        type: "p",
        text: "C'est la question qu'on me pose en premier, presque toujours : combien ça coûte un site internet ? La réponse honnête, c'est : ça dépend. Mais ce n'est pas une excuse pour rester flou. Voici ce qu'on trouve réellement sur le marché en 2026, avec des fourchettes claires et ce que vous obtenez pour votre argent.",
      },
      { type: "h2", text: "Les plateformes en ligne : 0 à 30 € par mois" },
      {
        type: "p",
        text: "Wix, Squarespace, Webflow, Shopify, Hostinger... toutes ces plateformes proposent de créer son site soi-même, à partir de templates. Le ticket d'entrée semble imbattable : entre 0 et 30 € par mois. Sauf qu'il faut bien comprendre que vous louez votre site. Le jour où vous arrêtez de payer, il disparaît. Sur dix ans, vous aurez dépensé entre 1200 et 3600 €, sans jamais rien posséder.",
      },
      {
        type: "p",
        text: "Et il y a les limites techniques : performances moyennes, design contraint par les templates, SEO compliqué à optimiser, dépendance totale à un fournisseur qui peut changer ses tarifs ou ses conditions du jour au lendemain.",
      },
      { type: "h2", text: "WordPress : 500 à 3000 € + maintenance" },
      {
        type: "p",
        text: "Le grand classique. Un développeur installe WordPress, choisit un thème, configure quelques plugins. Le coût varie énormément selon le freelance ou l'agence : de 500 € pour un site basique à 3000 € et plus pour quelque chose de plus sérieux. Ajoutez à ça l'hébergement, les licences de plugins premium, et surtout la maintenance mensuelle indispensable, sans quoi le site finit par tomber.",
      },
      {
        type: "p",
        text: "WordPress n'est pas mauvais en soi, mais il accuse son âge. Lent à charger, vulnérable, instable dès qu'on touche à un plugin. Pour un client qui veut juste \"un site qui marche\", c'est rarement le meilleur choix.",
      },
      { type: "h2", text: "Les agences classiques : 3000 à 15000 €" },
      {
        type: "p",
        text: "Une agence web classique facture rarement en dessous de 3000 € pour un site vitrine. Pour un site corporate ou e-commerce, on monte vite à 8000, 12000, 15000 € voire plus. La qualité est souvent au rendez-vous, mais l'addition aussi. Et il faut compter trois à six mois de délai entre le brief et la mise en ligne.",
      },
      {
        type: "p",
        text: "Pour une grosse entreprise avec un budget marketing conséquent, ça se justifie. Pour un indépendant ou un commerçant qui veut juste être visible sur Google, c'est largement disproportionné.",
      },
      { type: "h2", text: "Le freelance moderne : 500 à 1500 €" },
      {
        type: "p",
        text: "C'est ici que se situe Studio KT. Un développeur indépendant qui maîtrise les outils modernes peut produire un site de qualité agence à un tarif accessible, en quelques jours, sans abonnement. C'est possible parce que la technologie a évolué : Next.js, hébergement Vercel gratuit la première année, déploiement en un clic, plus besoin de bases de données fragiles ni de plugins instables.",
      },
      {
        type: "p",
        text: "Studio KT propose trois formules : 499 € pour un site vitrine quatre pages, 999 € pour un site plus complet avec blog et galerie, 1499 € pour un site sur mesure avec fonctionnalités avancées. Tout est inclus : design, développement, mise en ligne, optimisation SEO, hébergement la première année. Aucun abonnement.",
      },
      { type: "h2", text: "Ce qui fait vraiment varier le prix" },
      {
        type: "p",
        text: "Au-delà du prestataire, plusieurs facteurs influencent le tarif : le nombre de pages, la complexité du design, les fonctionnalités spécifiques (paiement en ligne, espace membre, multilangue), la production de contenu (textes, photos), et l'optimisation SEO poussée. Plus le projet est sur mesure, plus le prix monte. C'est logique.",
      },
      { type: "h2", text: "Le piège des abonnements" },
      {
        type: "p",
        text: "Méfiez-vous des offres qui semblent peu chères au premier abord mais qui vous engagent sur 24 ou 36 mois. Un site à 49 € par mois sur trois ans, c'est 1764 € au total, sans rien posséder à la fin. Préférez toujours un paiement unique, même un peu plus élevé : vous serez gagnant à long terme.",
      },
      {
        type: "p",
        text: "Le bon réflexe, c'est de demander : \"Qu'est-ce que je possède exactement quand le site est livré ?\" Si la réponse n'est pas \"tout, sans condition\", passez votre chemin.",
      },
    ],
  },

  {
    slug: "pourquoi-pas-wordpress",
    title: "Pourquoi je ne crée pas vos sites avec WordPress",
    metaDescription:
      "WordPress est lent, vulnérable et nécessite de la maintenance. Découvrez pourquoi Studio KT utilise Next.js pour des sites plus rapides et plus sûrs.",
    excerpt:
      "WordPress reste populaire, mais pour un site vitrine moderne en 2026, ce n'est plus le bon outil. Voici pourquoi.",
    category: "Conseils",
    date: "2026-02-09",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "Quand un client me contacte pour un site, il imagine souvent que je vais lui installer WordPress. C'est l'outil dont tout le monde parle, celui que les agences proposent par défaut depuis quinze ans. Sauf que je ne le fais plus. Et ce n'est pas un caprice technique. C'est un choix réfléchi, basé sur ce que j'ai vu encore et encore chez mes clients précédents.",
      },
      { type: "h2", text: "WordPress est lent" },
      {
        type: "p",
        text: "Un site WordPress moyen met deux à cinq secondes à s'afficher sur mobile. C'est énorme. Plus de la moitié des visiteurs partent si une page met plus de trois secondes à charger. Et Google, lui, déteste ça : depuis 2021, la vitesse est un critère de classement officiel. Un site lent, c'est un site invisible.",
      },
      {
        type: "p",
        text: "Le problème vient de l'architecture même de WordPress : à chaque visite, le serveur doit interroger une base de données, exécuter du PHP, charger des dizaines de plugins, assembler la page, puis l'envoyer. Tout ça à chaque fois. Les sites Next.js, eux, sont pré-générés en HTML statique. Ils s'affichent en moins d'une seconde, sans serveur surchargé, sans base de données.",
      },
      { type: "h2", text: "WordPress est vulnérable" },
      {
        type: "p",
        text: "WordPress alimente près de 40 % du web, ce qui en fait la cible numéro un des hackers. Chaque mois, des dizaines de failles sont découvertes dans des plugins populaires. Si vous n'appliquez pas les mises à jour rapidement, votre site se fait pirater. C'est aussi simple que ça. Et ce n'est pas une exagération : j'ai vu plusieurs clients hériter d'un site WordPress abandonné qui spammait du Viagra dans Google, sans même qu'ils s'en aperçoivent.",
      },
      {
        type: "p",
        text: "Un site Next.js, lui, n'a pas de surface d'attaque comparable. Pas de base de données exposée, pas de panneau d'admin public, pas de plugins exécutant du code tiers. C'est juste du HTML servi par un CDN. Quasi rien à attaquer.",
      },
      { type: "h2", text: "WordPress demande de la maintenance" },
      {
        type: "p",
        text: "Tous les WordPress du monde finissent par avoir besoin d'être maintenus. Mises à jour du noyau, des plugins, du thème, de PHP, de la base de données. Chaque mise à jour peut casser le site, parce que les plugins ne sont pas tous compatibles entre eux. Les agences vendent donc des contrats de maintenance à 30 ou 80 € par mois, ce qui finit par coûter plus cher que le site lui-même.",
      },
      {
        type: "p",
        text: "Avec Next.js, il n'y a rien à maintenir. Le site une fois livré reste fonctionnel pendant des années sans qu'on ait besoin d'y toucher. C'est une économie réelle pour vous.",
      },
      { type: "h2", text: "Mais le client s'en fiche de la techno" },
      {
        type: "p",
        text: "Vous ne devriez pas avoir à comprendre la différence entre WordPress et Next.js. Ce que vous voulez, c'est un site qui charge vite, qui ne tombe jamais, qui ne vous coûte rien à entretenir et qui vous amène des clients. Le rôle du développeur, c'est de choisir l'outil qui répond le mieux à ces besoins. Pas de vous vendre un nom à la mode.",
      },
      {
        type: "p",
        text: "Aujourd'hui, pour un site vitrine, l'outil qui répond le mieux à ces besoins, c'est Next.js. C'est celui que j'utilise. Demain, si quelque chose de mieux apparaît, je changerai. Le but, c'est votre résultat. Pas mon attachement à une techno.",
      },
      { type: "h2", text: "Quand WordPress reste pertinent" },
      {
        type: "p",
        text: "Soyons honnêtes : WordPress reste un bon choix pour certains usages. Un blog géré par plusieurs rédacteurs, un site d'actualité avec publication quotidienne, une boutique e-commerce complexe. Dans ces cas, son écosystème de plugins reste pertinent. Mais pour un site vitrine de quelques pages, c'est utiliser un tank pour aller chercher du pain.",
      },
    ],
  },

  {
    slug: "site-internet-artisan-independant",
    title:
      "Pourquoi chaque artisan et indépendant a besoin d'un site internet",
    metaDescription:
      "Artisan, coach, thérapeute, commerçant : votre site internet est votre meilleur commercial. Il travaille 24h/24 pour vous amener des clients.",
    excerpt:
      "Vous êtes artisan, coach ou indépendant et vous hésitez encore à investir dans un site ? Voici pourquoi c'est probablement votre meilleur investissement.",
    category: "Conseils",
    date: "2026-02-16",
    readingTime: 6,
    content: [
      {
        type: "p",
        text: "Vous êtes plombier, électricien, coach sportif, thérapeute, photographe, fleuriste ou consultant. Vous travaillez bien, vos clients sont contents, le bouche-à-oreille fonctionne. Et pourtant, vous sentez que vous pourriez faire plus. Que des clients potentiels existent quelque part et que vous ne les atteignez pas. Ces clients existent. Ils sont sur Google. Et si vous n'y êtes pas, ils vont chez quelqu'un d'autre.",
      },
      { type: "h2", text: "Vos clients cherchent en ligne avant tout" },
      {
        type: "p",
        text: "En 2026, plus de 80 % des décisions d'achat ou de prise de rendez-vous commencent par une recherche Google. Quelqu'un qui a besoin d'un plombier ne demande plus à son voisin : il tape \"plombier urgence Rennes\" sur son téléphone. Quelqu'un qui veut un coach sportif tape \"coach sportif Brest\". Si votre site n'apparaît pas, vous n'existez pas pour cette personne. Peu importe à quel point vous êtes bon dans votre métier.",
      },
      { type: "h2", text: "Un site, c'est de la crédibilité" },
      {
        type: "p",
        text: "Quand un client potentiel découvre votre activité, il fait quoi en premier ? Il tape votre nom sur Google. S'il trouve un vrai site bien fait, il se dit \"c'est sérieux, je peux les contacter\". S'il ne trouve rien, ou juste une page Facebook, il a un doute. Le doute, en commerce, ça coûte cher. Un site, c'est une carte de visite ouverte 24h/24 qui dit : je suis professionnel, je suis fiable, je suis là.",
      },
      { type: "h2", text: "\"J'ai déjà Facebook, ça suffit\"" },
      {
        type: "p",
        text: "C'est l'objection la plus courante. Et c'est la plus dangereuse. Une page Facebook ne vous appartient pas. Elle peut être suspendue du jour au lendemain pour une raison absurde. Elle ne ressort pas dans les recherches Google. Elle ne montre pas vos services en détail. Elle vous oblige à publier en permanence pour rester visible. Et surtout, elle vous fait perdre un temps fou pour un retour minime.",
      },
      {
        type: "p",
        text: "Un site, lui, vous appartient. Il travaille pour vous même quand vous dormez. Il ne dépend de personne. Et il génère des contacts qualifiés sans que vous ayez à publier quoi que ce soit.",
      },
      { type: "h2", text: "\"C'est trop cher pour moi\"" },
      {
        type: "p",
        text: "Un site vitrine professionnel à 499 €, c'est l'équivalent d'un mois de pub Facebook moyennement efficace, ou de deux dîners avec des prospects. Sauf que le site, lui, reste pendant cinq ou dix ans. Si vous obtenez ne serait-ce qu'un seul nouveau client par mois grâce à votre site, il s'est rentabilisé en quelques semaines. Le vrai coût, ce n'est pas d'avoir un site. C'est de ne pas en avoir.",
      },
      { type: "h2", text: "\"J'ai pas le temps de m'en occuper\"" },
      {
        type: "p",
        text: "C'est exactement pour ça que Studio KT existe. Vous n'avez rien à faire. Vous m'envoyez vos infos, vos photos, votre description, et je m'occupe absolument de tout : design, développement, textes, mise en ligne, optimisation SEO. Cinq jours plus tard, votre site est en ligne. Vous reprenez votre activité. Le site, lui, continue de tourner sans qu'on y touche.",
      },
      { type: "h2", text: "Le meilleur commercial du monde" },
      {
        type: "p",
        text: "Pensez à votre site comme à un commercial. Sauf qu'il ne dort jamais, ne prend pas de vacances, ne demande pas d'augmentation, ne tombe jamais malade, et ne coûte qu'une seule fois. Il présente vos services, montre vos réalisations, donne vos coordonnées, et amène des prospects pendant que vous travaillez tranquillement. C'est probablement le meilleur investissement que vous puissiez faire pour votre activité cette année.",
      },
      {
        type: "p",
        text: "Si vous êtes artisan, indépendant ou commerçant et que vous voulez enfin avoir un site qui travaille pour vous, on peut en parler. C'est gratuit, sans engagement, et vous aurez une réponse claire sous 48 heures.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "SEO Local",
  "Guide",
  "Conseils",
];

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
