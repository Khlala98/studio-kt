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
        text: "Rennes bouge. Entre la French Tech Rennes Saint-Malo, les milliers d'étudiants qui traversent le centre tous les jours, les commerces de la rue Saint-Michel, les artisans installés autour de la route de Lorient ou de la zone Alma, l'activité économique de la métropole est dense. Le revers, c'est la concurrence. Et quand un client cherche un service aujourd'hui, il ne sort plus l'annuaire : il tape sur Google.",
      },
      { type: "h2", text: "Un site, c'est ce qui décide à votre place" },
      {
        type: "p",
        text: "Imaginez un client qui cherche un plombier dans le quartier de Sainte-Thérèse. Il tape \"plombier Rennes\" sur son téléphone. Il voit trois résultats. Il en clique un, regarde le site pendant dix secondes, puis appelle. Ce client n'a pas comparé vos compétences. Il a comparé vos sites. Vous pouvez être le meilleur plombier de la ville, si votre site donne l'impression d'avoir été fait il y a quinze ans, vous perdez le client avant même de lui parler.",
      },
      { type: "h2", text: "Pourquoi un développeur basé à Rennes change quelque chose" },
      {
        type: "p",
        text: "Parce qu'il connaît votre terrain. Quelqu'un qui sait que la zone commerciale Alma, le centre, Villejean et Cleunay n'attirent pas la même clientèle pense votre site différemment. Les textes, les zones d'intervention, les exemples, les mots-clés : tout est plus juste quand celui qui code connaît l'endroit. Une grosse agence parisienne ne fera pas cette nuance. Elle vous livrera un template propre, avec votre logo dessus, et basta.",
      },
      { type: "h2", text: "Le SEO local, c'est ce qui fait la différence" },
      {
        type: "p",
        text: "Le SEO local, c'est l'ensemble des techniques qui font qu'on vous trouve quand quelqu'un tape \"coiffeur Rennes centre\" ou \"ostéopathe Villejean\". Ce n'est pas magique. C'est la combinaison d'un site bien structuré, d'une fiche Google Business Profile complète, de pages dédiées à vos zones d'intervention, et de balises propres. Un site Studio KT est livré avec ces fondations en place, sans surcoût.",
      },
      { type: "h2", text: "Le piège des plateformes en ligne" },
      {
        type: "p",
        text: "Beaucoup de pros rennais commencent avec Wix ou un constructeur similaire. C'est tentant : pas cher au démarrage, rapide à mettre en place, accessible. Le problème, c'est que ces plateformes vous louent un emplacement. Le jour où vous arrêtez de payer, votre site disparaît. Et techniquement, leurs sites sont souvent plus lents et plus difficiles à référencer finement. Pour démarrer une activité ce mois-ci, ça peut dépanner. Pour s'installer durablement, c'est limité.",
      },
      { type: "h2", text: "Ce que je propose" },
      {
        type: "p",
        text: "Trois formules, pas d'abonnement, pas d'engagement : Essentiel à 499 €, Pro à 799 €, Premium à 1499 €. Vous payez une fois, le site est à vous. L'hébergement est offert la première année. Techniquement, je travaille avec Next.js et Vercel, ce qui produit des pages rapides, sans base de données fragile, sans plugins à mettre à jour. Une fois en ligne, le site tient des années sans maintenance.",
      },
      {
        type: "p",
        text: "Si vous êtes installé à Rennes ou dans la métropole et que vous voulez un site qui travaille pour vous, on peut en discuter. Le devis est gratuit, sans engagement, et je vous dis franchement si votre projet a besoin d'un site complet ou si une simple fiche Google Business Profile suffit pour commencer.",
      },
    ],
  },

  {
    slug: "creation-site-internet-nantes",
    title: "Création de site internet à Nantes : votre site pro livré en cinq jours",
    metaDescription:
      "Studio KT crée votre site internet professionnel à Nantes. Design sur mesure, ultra-rapide, sans abonnement. Devis gratuit en 48h.",
    excerpt:
      "Nantes est l'une des métropoles les plus dynamiques de France. Voici pourquoi un site internet bien fait y est devenu indispensable.",
    category: "SEO Local",
    date: "2026-01-19",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "Nantes est l'une des métropoles les plus actives de France. La French Tech Nantes structure une partie du paysage numérique, l'Île de Nantes continue sa reconversion, le quartier Graslin concentre du commerce haut de gamme, et la zone Atlantis draine toute la périphérie ouest. Il y a de l'activité économique partout. Et avec elle, beaucoup de concurrence locale. Pour un indépendant ou un commerçant, exister en ligne n'est plus une option.",
      },
      { type: "h2", text: "Le bon réflexe des Nantais : Google avant tout" },
      {
        type: "p",
        text: "Quand quelqu'un cherche un kiné à Bouffay, un ostéopathe à Procé ou un menuisier vers Saint-Herblain, il ne demande presque jamais à un voisin. Il sort son téléphone, tape sa recherche, regarde les premiers résultats. Si vous y êtes, il vous appelle. Sinon, il appelle quelqu'un d'autre. Cette mécanique est la même pour quasi toutes les activités locales, du dépannage urgent au rendez-vous planifié.",
      },
      { type: "h2", text: "Pourquoi Nantes mérite un travail soigné" },
      {
        type: "p",
        text: "La concurrence à Nantes est plus dense que dans une ville moyenne. Vous n'êtes pas seul ostéopathe, pas seul menuisier, pas seul photographe. Ce qui fait la différence, ce n'est pas seulement votre talent : c'est la première impression que vous donnez en ligne. Un site lent, mal designé, sans informations claires, c'est un client qui ferme l'onglet en deux secondes. Un site rapide, propre, qui répond à ses questions, c'est un client qui prend rendez-vous.",
      },
      { type: "h2", text: "Sur mesure, pas un template" },
      {
        type: "p",
        text: "Studio KT ne reprend pas de modèles existants. Chaque site est conçu pour une activité précise. Vos couleurs, votre tonalité, vos arguments. C'est ce qui permet de se distinguer dans une ville où tout le monde a un site. Et techniquement, le code est propre, le mobile est prioritaire, les performances sont au plafond. Google adore ce genre de site, vos visiteurs aussi.",
      },
      { type: "h2", text: "Cinq jours, sans abonnement" },
      {
        type: "p",
        text: "La promesse est simple : un site professionnel livré en cinq jours ouvrés. Vous m'envoyez vos contenus et vos photos, je m'occupe du reste. Pas de réunions interminables sur trois mois, pas de bla-bla. Pour les pros qui veulent juste être en ligne rapidement, c'est ce qui marche. Trois formules : Essentiel à 499 €, Pro à 799 €, Premium à 1499 €. Aucun abonnement mensuel, aucun frais caché.",
      },
      { type: "h2", text: "Pour qui c'est fait" },
      {
        type: "p",
        text: "Pour les indépendants, artisans, commerçants, coachs, thérapeutes, consultants installés à Nantes ou dans la métropole. Si votre activité dépend de clients qui vous trouvent, un site bien fait est probablement le meilleur investissement de l'année. Beaucoup le rentabilisent en quelques semaines, simplement parce qu'il continue d'amener des contacts pendant qu'ils travaillent.",
      },
      {
        type: "p",
        text: "Si vous voulez en discuter, le devis est gratuit et arrive sous quarante-huit heures. Pas de jargon, pas d'engagement, juste une réponse claire sur ce qui est faisable et à quel prix.",
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
        text: "Brest a une économie particulière. Le port militaire, l'arsenal, le technopôle Brest-Iroise, les filières de défense et du maritime structurent une bonne partie de l'activité. Mais autour, il y a aussi tout un tissu de commerces, d'artisans, d'indépendants et de professions libérales qui font vivre la ville au quotidien. Cette partie-là est souvent invisible en ligne, alors qu'elle aurait tout à gagner à se montrer.",
      },
      { type: "h2", text: "La rue de Siam, et tout le reste" },
      {
        type: "p",
        text: "La rue de Siam concentre une bonne partie du commerce de centre-ville. Mais Brest, c'est aussi Saint-Marc, Bellevue, Recouvrance, le port. Chaque quartier a sa propre clientèle, ses propres habitudes. Un site internet bien fait permet d'expliquer où vous êtes, qui vous servez, à quels horaires. Ces détails paraissent évidents, mais ils ne le sont jamais pour le client qui ne vous connaît pas encore.",
      },
      { type: "h2", text: "Le meilleur rapport effort/résultat" },
      {
        type: "p",
        text: "La pub dans un grand journal local coûte cher et touche peu. La distribution de flyers fatigue rapidement et finit dans les poubelles. Un site internet, lui, travaille pendant que vous travaillez. Il répond aux questions de vos prospects à minuit, à six heures du matin, le dimanche. Pour un commerçant ou un artisan brestois, c'est probablement l'investissement avec le meilleur rapport effort/résultat.",
      },
      { type: "h2", text: "Le SEO local, sans le jargon" },
      {
        type: "p",
        text: "Quand un Brestois tape \"boulangerie Brest centre\" ou \"plombier Saint-Marc\", Google fait remonter en priorité les sites qui correspondent à la fois à l'intention de recherche et à la localisation. Pour y arriver, votre site doit être structuré correctement, votre fiche Google Business Profile doit être complète, et vos pages doivent mentionner vos zones d'intervention. Studio KT prépare ce travail dès la conception, sans frais supplémentaires.",
      },
      { type: "h2", text: "Rapide et durable" },
      {
        type: "p",
        text: "Les sites livrés sont construits avec Next.js et hébergés via Vercel. Concrètement, ça veut dire que vos pages se chargent en moins d'une seconde, que le site ne tombe pas tout seul, et qu'il n'y a quasi rien à entretenir. Vous n'avez pas à payer une maintenance mensuelle pour qu'il continue de marcher. Une fois en ligne, il tient des années.",
      },
      { type: "h2", text: "Combien ça coûte" },
      {
        type: "p",
        text: "Trois formules : Essentiel à 499 €, Pro à 799 €, Premium à 1499 €. Aucun abonnement, aucun frais caché. Vous payez une fois, le site est à vous. L'hébergement est offert la première année. Pour un commerce ou une activité indépendante à Brest, c'est moins cher qu'une campagne de pub locale ponctuelle, et ça dure beaucoup plus longtemps.",
      },
      {
        type: "p",
        text: "Si vous êtes installé à Brest ou dans le pays de Brest et que vous voulez enfin un site qui sert à quelque chose, on peut en discuter. Le devis arrive sous quarante-huit heures, c'est gratuit, et vous saurez exactement ce que vous obtenez.",
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
        text: "La question revient toujours en premier, et la réponse honnête, c'est : ça dépend. Mais \"ça dépend\" n'est pas une réponse utile. Voici donc ce qu'on trouve réellement sur le marché en 2026, avec des fourchettes vérifiables et les avantages réels de chaque option. Aucune n'est mauvaise dans l'absolu : tout dépend de votre situation, de votre budget et de ce que vous voulez obtenir.",
      },
      { type: "h2", text: "Les plateformes en ligne (Wix, Squarespace, Webflow…)" },
      {
        type: "p",
        text: "Comptez entre 15 et 40 € par mois selon le plan choisi, soit entre 180 et 480 € par an. C'est l'option la plus rapide pour démarrer si vous voulez tout faire vous-même un dimanche après-midi. Les templates sont propres, l'éditeur visuel est intuitif, l'hébergement est inclus. Pour tester une idée ou lancer une petite activité, c'est tout à fait honnête.",
      },
      {
        type: "p",
        text: "Les limites apparaissent dès que vous voulez personnaliser plus loin, optimiser le SEO finement ou faire évoluer le design au-delà du template. Et le coût annuel s'additionne : sur cinq ans, vous pouvez avoir dépensé plus de deux mille euros sans rien posséder, puisque le site disparaît dès que vous arrêtez l'abonnement.",
      },
      { type: "h2", text: "WordPress chez un freelance" },
      {
        type: "p",
        text: "Un freelance qui installe et configure WordPress facture en général entre 800 et 3000 € selon la complexité. Il faut ajouter l'hébergement (5 à 15 € par mois), souvent une licence de thème ou de plugin premium, et idéalement une maintenance mensuelle pour gérer les mises à jour de sécurité. WordPress reste un outil puissant, surtout pour des sites avec beaucoup de contenu géré par le client. Pour un site vitrine de quelques pages, c'est souvent disproportionné.",
      },
      { type: "h2", text: "Les agences web" },
      {
        type: "p",
        text: "Une agence classique facture rarement en dessous de 3000 € pour un site vitrine, et monte facilement à 8000, 12000 ou 15000 € pour des projets plus ambitieux. La qualité est souvent au rendez-vous, le suivi aussi, mais l'addition aussi. Comptez en plus trois à six mois entre le brief et la mise en ligne. C'est cohérent pour une entreprise avec un budget marketing structuré, beaucoup moins pour un indépendant ou un petit commerce.",
      },
      { type: "h2", text: "Studio KT, le freelance moderne" },
      {
        type: "p",
        text: "C'est ici que je me positionne. Trois formules : Essentiel à 499 €, Pro à 799 €, Premium à 1499 €. Tout est inclus : design sur mesure, développement, mise en ligne, optimisation SEO de base, hébergement la première année. Aucun abonnement, aucun frais récurrent. C'est possible parce que les outils ont évolué : Next.js et Vercel permettent de produire un site rapide, propre et durable sans la lourdeur d'un CMS classique.",
      },
      { type: "h2", text: "Ce qui fait vraiment varier le prix" },
      {
        type: "p",
        text: "Au-delà du prestataire, plusieurs facteurs comptent : le nombre de pages, la complexité du design, les fonctionnalités spécifiques (paiement, espace membre, multilangue), la production de contenu (textes, photos), l'optimisation SEO poussée. Plus le projet est sur mesure, plus le prix monte. C'est logique. Mais pour la majorité des indépendants et petits commerces, un site vitrine bien fait suffit largement.",
      },
      { type: "h2", text: "La bonne question à se poser" },
      {
        type: "p",
        text: "Avant de choisir, demandez-vous toujours : qu'est-ce que je possède exactement quand le site est livré ? Si la réponse est \"tout, sans condition, sans abonnement\", vous êtes tranquille pour des années. Si la réponse implique de payer chaque mois pour que le site continue d'exister, c'est une location déguisée. Aucune des deux logiques n'est mauvaise, mais elles ne servent pas les mêmes besoins. Un freelance qui démarre peut très bien commencer sur Wix puis migrer plus tard. Un commerce installé qui veut un actif durable a plus à gagner avec un site qu'il possède pleinement.",
      },
    ],
  },

  {
    slug: "pourquoi-pas-wordpress",
    title: "Pourquoi je ne crée pas vos sites avec WordPress",
    metaDescription:
      "WordPress est lent, vulnérable et nécessite de la maintenance. Découvrez pourquoi Studio KT utilise Next.js pour des sites plus rapides et plus sûrs.",
    excerpt:
      "WordPress reste un excellent outil pour beaucoup de projets. Mais pour un site vitrine moderne, ce n'est plus toujours le bon choix. Voici pourquoi.",
    category: "Conseils",
    date: "2026-02-09",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "WordPress alimente environ 43 % des sites du web selon les données publiques de W3Techs. C'est énorme, et c'est mérité : pendant vingt ans, c'est l'outil qui a démocratisé la création de sites. Pourtant, je ne l'utilise pas pour les projets de mes clients. Ce n'est pas un rejet de l'outil — c'est un choix de cohérence avec ce que je propose. Voici pourquoi.",
      },
      { type: "h2", text: "WordPress a été conçu pour les blogs" },
      {
        type: "p",
        text: "À la base, WordPress était une plateforme de blogging. Au fil des années, il est devenu un couteau suisse capable de tout faire : sites vitrines, e-commerce, forums, espaces membres, intranets. C'est sa force. C'est aussi sa faiblesse pour des projets simples. Un site vitrine de quatre à dix pages n'a pas besoin d'une base de données, d'un système de gestion d'utilisateurs, d'un thème complexe et d'une dizaine de plugins. C'est utiliser un tank pour aller chercher du pain.",
      },
      { type: "h2", text: "Le coût caché des plugins et des mises à jour" },
      {
        type: "p",
        text: "Un site WordPress vit grâce à ses plugins. Chaque plugin est un morceau de code écrit par un tiers, et chaque plugin doit être maintenu. Quand un plugin n'est plus mis à jour, il devient une porte d'entrée pour des failles. Quand un plugin est mis à jour mais devient incompatible avec un autre, le site casse. C'est pour ça que les agences sérieuses vendent presque toujours un contrat de maintenance mensuel : sans lui, le site finit par avoir des problèmes. Pour un site vitrine simple, ce coût récurrent n'a pas vraiment de raison d'exister.",
      },
      { type: "h2", text: "La performance" },
      {
        type: "p",
        text: "Un site WordPress moyen est plus lent qu'un site statique généré avec un outil moderne. La raison est technique : à chaque visite, le serveur interroge la base de données, exécute du PHP, charge les plugins, assemble la page, puis l'envoie. Un site statique en Next.js, lui, est pré-généré au moment de la mise en ligne. Il n'y a rien à calculer quand le visiteur arrive, juste du HTML déjà prêt à servir. Résultat : des pages qui s'affichent quasi instantanément, même sur une connexion mobile correcte.",
      },
      { type: "h2", text: "La sécurité" },
      {
        type: "p",
        text: "Parce que WordPress est partout, c'est aussi la cible numéro un des bots qui scannent le web à la recherche de failles. Un site vitrine en HTML statique n'a quasi pas de surface d'attaque : pas de base de données exposée, pas de panneau d'administration public, pas de PHP exécuté en permanence sur un serveur. Pour le client, ça veut dire un site qui ne se fait pas pirater pendant qu'il vit sa vie.",
      },
      { type: "h2", text: "Quand WordPress reste pertinent" },
      {
        type: "p",
        text: "Soyons clairs : WordPress est un excellent outil pour beaucoup d'usages. Un blog géré par plusieurs rédacteurs avec publication quotidienne, un site média, un e-commerce avec un gros catalogue, une communauté avec des comptes utilisateurs : dans ces cas, son écosystème de plugins et son interface d'administration sont précieux. Si vous gérez un site qui demande de la mise à jour permanente par des non-développeurs, WordPress est probablement le bon choix.",
      },
      { type: "h2", text: "Pour un site vitrine, autre chose" },
      {
        type: "p",
        text: "Pour un site vitrine de quelques pages — typiquement ce dont a besoin un artisan, un indépendant ou un petit commerce — les outils modernes sont mieux adaptés. Plus rapides, plus simples, plus durables, et sans coût récurrent. C'est ce que j'utilise chez Studio KT, parce que c'est ce qui sert le mieux les projets que je prends. Si demain un meilleur outil apparaît, je changerai. L'objectif n'a jamais été de défendre une techno : c'est de livrer un site qui marche pour vous.",
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
      "Vous êtes artisan ou indépendant et vous hésitez encore à investir dans un site ? Voici les vraies objections, et pourquoi aucune ne tient vraiment.",
    category: "Conseils",
    date: "2026-02-16",
    readingTime: 6,
    content: [
      {
        type: "p",
        text: "Vous êtes plombier, électricien, coiffeur, photographe, kiné, fleuriste ou consultant. Vous travaillez bien, vos clients sont contents, le bouche-à-oreille fonctionne. Et pourtant, vous sentez que vous pourriez avoir plus de demandes. C'est presque toujours le même problème : vous n'êtes pas visible quand les gens vous cherchent. Voici les quatre objections qu'on m'oppose toutes les semaines, et pourquoi aucune ne tient vraiment.",
      },
      { type: "h2", text: "\"J'ai déjà ma page Facebook, ça suffit\"" },
      {
        type: "p",
        text: "Une page Facebook, ce n'est pas un site. C'est une location. Vous ne possédez pas votre audience, vous ne contrôlez pas ce qu'elle voit. L'algorithme de Facebook ne montre vos publications qu'à une petite partie de vos abonnés. Le jour où Facebook décide de fermer votre page pour une raison absurde, ou simplement de modifier ses règles, vous perdez tout. Un site, lui, vous appartient. Il continue d'exister, tel quel, tant que vous le voulez.",
      },
      { type: "h2", text: "\"C'est trop cher pour moi\"" },
      {
        type: "p",
        text: "Un site vitrine professionnel à 499 €, c'est moins cher qu'une demi-page de pub dans un journal local. Sauf que la pub dans le journal disparaît au prochain numéro, alors que le site continue d'amener des contacts pendant cinq, sept, dix ans. Si vous obtenez ne serait-ce qu'un seul nouveau client par mois grâce à votre site, il s'est rentabilisé en quelques semaines. Le vrai coût, ce n'est pas d'avoir un site. C'est de ne pas en avoir et de laisser les clients aller ailleurs.",
      },
      { type: "h2", text: "\"Je n'ai pas le temps de m'en occuper\"" },
      {
        type: "p",
        text: "C'est probablement la meilleure raison d'en commander un. Un site vitrine bien fait n'a quasi rien à demander une fois en ligne. Pas de mise à jour mensuelle, pas de publication obligatoire, pas de gestion d'algorithme à apprivoiser. Vous m'envoyez vos contenus une fois, je m'occupe de tout, et le site travaille ensuite tout seul. C'est exactement l'inverse d'une page Facebook qui exige des publications hebdomadaires pour rester visible.",
      },
      { type: "h2", text: "\"Mes clients me trouvent par le bouche-à-oreille\"" },
      {
        type: "p",
        text: "Tant mieux, et continuez. Mais voici ce qui se passe en réalité : quelqu'un vous recommande à un ami, l'ami note votre nom, et avant d'appeler, il tape votre nom sur Google. S'il trouve un vrai site qui présente votre activité, vos tarifs, vos zones d'intervention, vos témoignages, il appelle. S'il ne trouve rien ou juste une page Facebook abandonnée, il a un doute. Et le doute, en commerce, ça coûte cher. Un site, c'est ce qui transforme une recommandation en client.",
      },
      { type: "h2", text: "Ce qu'un site change concrètement" },
      {
        type: "p",
        text: "Le client qui arrive sur votre site doit trouver trois choses en moins de dix secondes : ce que vous faites, où vous le faites, et comment vous joindre. Si ces trois informations sont claires, vous gagnez la majorité des visites. Tout le reste — les belles images, les témoignages, la galerie de réalisations — sert à rassurer ceux qui hésitent encore. Studio KT conçoit des sites pensés exactement dans cet ordre : clarté d'abord, esthétique ensuite.",
      },
      {
        type: "p",
        text: "Si vous êtes artisan, indépendant ou commerçant et que vous voulez enfin un site qui travaille pour vous, on peut en parler tranquillement. Le devis est gratuit, sans engagement, et vous aurez une réponse claire sous quarante-huit heures.",
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
