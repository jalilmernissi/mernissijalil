import type { CourseModule, Lesson } from './types';

/* MODULE II — « Aux champs » de Guy de Maupassant (nouvelle réaliste, 1883) */

const biographie: Lesson = {
  id: 'biographie-maupassant',
  title: 'La biographie de Guy de Maupassant',
  minutes: 35,
  objectives: ['situer Maupassant dans son époque ;', 'connaître les étapes de sa vie et de sa carrière ;', 'lier sa vie à son œuvre.'],
  observation: {
    label: 'Repères essentiels',
    text: 'Guy de Maupassant (1850-1893) publie « Boule de Suif » en 1880 et devient aussitôt célèbre. En dix ans, il écrit plus de 300 nouvelles et six romans, dont « Une vie » et « Bel-Ami ».',
  },
  sections: [
    { kind: 'sub', text: 'Une vie entre Normandie et Paris' },
    {
      kind: 'p',
      text: 'Né en 1850 au château de Miromesnil, en Normandie, Maupassant grandit entre la campagne normande et la mer. Élève de Flaubert, ami de Zola, il participe aux soirées de Médan et s’impose comme le maître de la nouvelle réaliste et fantastique.',
    },
    {
      kind: 'liste',
      title: 'Les étapes à retenir',
      items: [
        '1850 : naissance en Normandie.',
        '1870 : guerre franco-prussienne (source de « Boule de Suif »).',
        '1880 : « Boule de Suif » — succès immédiat.',
        '1880-1890 : plus de 300 nouvelles (« Aux champs », « La parure », « Le Horla ») et 6 romans.',
        '1893 : mort à 42 ans.',
      ],
    },
    { kind: 'sub', text: 'Un observateur lucide' },
    {
      kind: 'p',
      text: 'Maupassant observe sans juger : paysans, bourgeois, employés, soldats. Ses nouvelles montrent les petitesses humaines, l’argent, l’hypocrisie sociale — avec une ironie froide.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Retenez le lien vie/œuvre : la Normandie natale inspire les récits paysans comme « Aux champs » ; la guerre inspire « Boule de Suif ».',
    },
  ],
  rule: [
    'Maupassant (1850-1893) est le maître français de la nouvelle réaliste.',
    'Normand d’origine, formé par Flaubert, il peint la société de son temps avec lucidité et ironie.',
    'Son œuvre immense (300 nouvelles, 6 romans) fait de lui l’un des auteurs les plus lus au monde.',
  ],
  examples: [
    '« Boule de Suif » (1880) : une nouvelle de guerre.',
    '« Aux champs » (1883) : une nouvelle paysanne et cruelle.',
    '« Bel-Ami » (1885) : un roman sur l’arrivisme parisien.',
  ],
  exercises: [
    {
      id: 'bio-q1',
      type: 'qcm',
      question: 'Quelle nouvelle a rendu Maupassant célèbre en 1880 ?',
      options: ['« La parure »', '« Boule de Suif »', '« Aux champs »', '« Le Horla »'],
      answer: 1,
      explain: '« Boule de Suif », publiée en 1880 dans le recueil des Soirées de Médan, assure sa célébrité.',
    },
    {
      id: 'bio-q2',
      type: 'vf',
      question: 'Vrai ou faux ? Maupassant a écrit principalement des poèmes.',
      vfAnswer: false,
      explain: 'Faux. Il a écrit surtout des nouvelles (plus de 300) et six romans.',
    },
  ],
  synthese: ['1850-1893, Normandie → Paris.', 'Maître de la nouvelle réaliste.', '300 nouvelles, 6 romans.'],
  keywords: ['Maupassant', 'biographie', 'Boule de Suif', 'Normandie', 'nouvelle réaliste', 'Flaubert'],
};

const realisme: Lesson = {
  id: 'realisme',
  title: 'Le réalisme',
  minutes: 40,
  objectives: ['définir le mouvement réaliste ;', 'identifier les indices du réalisme dans un texte ;', 'comprendre la démarche de Maupassant.'],
  observation: {
    label: 'La leçon de Flaubert',
    text: '« Le réalisme, si on a le malheur d’être réaliste, consiste à voir les choses comme elles sont et non pas comme on voudrait qu’elles soient. » Cette exigence d’exactitude guide toute l’œuvre de Maupassant.',
  },
  sections: [
    { kind: 'sub', text: 'Un mouvement né au XIXe siècle' },
    {
      kind: 'p',
      text: 'Le réalisme (vers 1850) veut représenter la réalité sans l’embellir : la vie quotidienne, les milieux populaires, l’argent, le travail. Il s’oppose à l’idéalisme romantique. Balzac, Flaubert puis Maupassant et Zola en sont les grands noms.',
    },
    {
      kind: 'liste',
      title: 'Les principes du réalisme',
      items: [
        'Observation précise et documentation (milieux, métiers, lieux).',
        'Sujets ordinaires : paysans, employés, bourgeois de province.',
        'Refus de l’embellissement : montrer aussi la laideur et la misère.',
        'Narrateur objectif : il montre, il ne juge pas.',
        'Détails concrets : noms de lieux, objets, gestes quotidiens.',
      ],
    },
    { kind: 'sub', text: 'Les indices du réalisme dans « Aux champs »' },
    {
      kind: 'p',
      text: 'Un cadre paysan vraisemblable (la Normandie), des noms propres ordinaires (Tuvache, Vallin), des détails matériels (soupe, pommes de terre, quatre sous par jour), une psychologie crédible (jalousie, orgueil, regret).',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Le réalisme n’est pas la réalité brute : l’écrivain choisit, compose, met en scène. Maupassant parle d’« illusion du vrai ».',
    },
  ],
  rule: [
    'Le réalisme représente la vie quotidienne telle qu’elle est, sans l’idéaliser.',
    'Ses indices : cadre vraisemblable, personnages ordinaires, détails concrets, narrateur objectif.',
    'Maupassant, héritier de Flaubert, pratique une observation lucide et impersonnelle.',
  ],
  examples: [
    '« Ils vivaient péniblement de soupe, de pommes de terre et de grand air » → détail matériel réaliste.',
    'Les noms Tuvache et Vallin → anonymat paysan vraisemblable.',
    'La jalousie finale de Charlot → psychologie crédible, sans morale ajoutée.',
  ],
  exercises: [
    {
      id: 'rea-q1',
      type: 'qcm',
      question: 'Quel est le principe fondamental du réalisme ?',
      options: ['Embellir la réalité', 'Représenter la réalité telle qu’elle est', 'Raconter des légendes', 'Exprimer ses sentiments'],
      answer: 1,
      explain: 'Le réalisme observe et décrit la réalité sans l’embellir ni la moraliser.',
    },
    {
      id: 'rea-q2',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Le réalisme s’oppose à l’idéalisme du mouvement ___.',
      answers: ['romantique', 'romantisme'],
      explain: 'Le réalisme réagit contre l’idéalisme et le lyrisme romantiques de la première moitié du XIXe siècle.',
    },
  ],
  synthese: ['Montrer la vie telle qu’elle est.', 'Sujets ordinaires, détails concrets, narrateur objectif.', 'Balzac, Flaubert, Maupassant, Zola.'],
  keywords: ['réalisme', 'Flaubert', 'observation', 'illusion du vrai', 'XIXe siècle', 'nouvelle réaliste'],
};

const nouvelle: Lesson = {
  id: 'nouvelle',
  title: 'La nouvelle',
  minutes: 40,
  objectives: ['définir le genre de la nouvelle ;', 'connaître ses caractéristiques ;', 'distinguer nouvelle, roman et conte.'],
  observation: {
    label: 'Une forme brève',
    text: '« Aux champs » se lit en une vingtaine de minutes : quelques pages, peu de personnages, une seule action, une chute brutale. C’est une nouvelle.',
  },
  sections: [
    { kind: 'sub', text: 'Définition et caractéristiques' },
    {
      kind: 'liste',
      title: 'La nouvelle, un récit bref',
      items: [
        'Brièveté : de quelques pages à une centaine.',
        'Peu de personnages, un seul lieu souvent.',
        'Une seule intrigue resserrée.',
        'Un début rapide, sans longue introduction.',
        'Une chute : fin brève, surprenante ou cruelle, qui éclaire tout le récit.',
      ],
    },
    { kind: 'sub', text: 'Nouvelle, roman, conte' },
    {
      kind: 'tableau',
      title: 'Comparer les formes narratives',
      headers: ['Forme', 'Longueur', 'Intrigue', 'Fin'],
      rows: [
        ['Nouvelle', 'Brève', 'Une seule action', 'Chute'],
        ['Roman', 'Longue', 'Plusieurs intrigues entrelacées', 'Dénouement développé'],
        ['Conte', 'Variable', 'Merveilleux, épreuves', 'Fin morale (« ils vécurent heureux »)'],
      ],
    },
    { kind: 'sub', text: 'Maupassant, maître de la nouvelle' },
    {
      kind: 'p',
      text: 'Maupassant compose la nouvelle comme une démonstration : chaque détail prépare la chute. Dans « Aux champs », la description initiale de la misère annonce déjà le dénouement tragique.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour analyser une nouvelle : relevez tout ce qui annonce la chute dès le début (indices, répétitions, détails symboliques).',
    },
  ],
  rule: [
    'La nouvelle est un récit bref, centré sur une seule action et peu de personnages.',
    'Sa fin s’appelle la chute : brève, souvent surprenante ou cruelle.',
    'Maupassant en est le maître français : chaque détail prépare la chute.',
  ],
  examples: [
    '« Aux champs » : une seule action (l’adoption), une chute (le départ de Charlot).',
    '« La parure » : une chute qui renverse tout le récit.',
    'Une nouvelle se lit en une séance ; un roman demande plusieurs jours.',
  ],
  exercises: [
    {
      id: 'nou-q1',
      type: 'qcm',
      question: 'Comment s’appelle la fin brève et frappante d’une nouvelle ?',
      options: ['L’incipit', 'La chute', 'La péripétie', 'L’épilogue'],
      answer: 1,
      explain: 'La chute est la fin brève, souvent surprenante ou cruelle, caractéristique de la nouvelle.',
    },
    {
      id: 'nou-q2',
      type: 'vf',
      question: 'Vrai ou faux ? Une nouvelle développe plusieurs intrigues entrelacées.',
      vfAnswer: false,
      explain: 'Faux. C’est le roman qui entrelace plusieurs intrigues ; la nouvelle se concentre sur une seule action.',
    },
  ],
  synthese: ['Récit bref, une seule action.', 'Peu de personnages, cadre resserré.', 'Fin = chute, préparée dès le début.'],
  keywords: ['nouvelle', 'chute', 'récit bref', 'incipit', 'genre narratif', 'Maupassant'],
};

const personnages: Lesson = {
  id: 'personnages-aux-champs',
  title: 'Les personnages de « Aux champs »',
  minutes: 45,
  objectives: ['identifier les personnages de la nouvelle ;', 'analyser leurs caractères et leurs motivations ;', 'comprendre les oppositions entre personnages.'],
  observation: {
    label: 'Deux familles face à face',
    text: 'Les Tuvache et les Vallin, voisins misérables, ont chacun plusieurs enfants. Une riche bourgeoise, Mme d’Hubières, propose d’adopter un enfant de chaque famille… avec des réponses opposées.',
  },
  sections: [
    { kind: 'sub', text: 'Le portrait des personnages' },
    {
      kind: 'liste',
      title: 'Les principaux personnages',
      items: [
        'Les Tuvache : paysans pauvres, fiers et attachés à leurs principes — la mère refuse de « vendre » son fils Charlot.',
        'Les Vallin : paysans tout aussi pauvres, mais prêts à négocier — ils confient leur fils Jean contre une rente.',
        'Mme d’Hubières : bourgeoise riche et élégante, émue mais décidée ; elle représente l’argent et la ville.',
        'Charlot Tuvache : l’enfant gardé, qui grandit dans la misère et la rancœur.',
        'Jean Vallin : l’enfant adopté, éduqué et enrichi, qui revient en jeune bourgeois.',
      ],
    },
    { kind: 'sub', text: 'Des personnages-types' },
    {
      kind: 'p',
      text: 'Maupassant ne psychanalyse pas : il montre des types sociaux (la paysanne orgueilleuse, le paysan cupide, la bourgeoise charitable) dont les réactions sont prévisibles et vraies. La nouvelle oppose deux morales : la fierté pauvre des Tuvache et l’intérêt des Vallin.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Attention : aucune morale n’est donnée par le narrateur. Le lecteur seul juge — c’est la cruauté froide du réalisme.',
    },
  ],
  rule: [
    'Les personnages de la nouvelle sont des types sociaux : paysans pauvres, bourgeoise riche.',
    'L’opposition Tuvache/Vallin structure le récit : fierté contre intérêt.',
    'Charlot et Jean, les deux enfants, incarnent les conséquences opposées du choix initial.',
  ],
  examples: [
    'La mère Tuvache : « On ne vend pas son enfant ! » → fierté paysanne.',
    'Les Vallin marchent la rente : « V’là-t-y point qu’i r’viennent » → intérêt.',
    'Le retour de Jean, en beau monsieur, provoque la jalousie de Charlot.',
  ],
  exercises: [
    {
      id: 'per-q1',
      type: 'qcm',
      question: 'Quelle famille refuse de donner son enfant ?',
      options: ['Les Vallin', 'Les Tuvache', 'Les d’Hubières', 'Aucune des deux'],
      answer: 1,
      explain: 'Les Tuvache refusent, par fierté et attachement à leurs principes ; les Vallin acceptent contre une rente.',
    },
    {
      id: 'per-q2',
      type: 'associe',
      question: 'Associez chaque personnage à sa caractéristique.',
      pairs: [
        ['La mère Tuvache', 'Fierté paysanne'],
        ['Les Vallin', 'Intérêt et négociation'],
        ['Mme d’Hubières', 'Richesse bourgeoise'],
        ['Charlot', 'Jalousie et rancœur'],
      ],
      explain: 'Chaque personnage incarne une attitude sociale : fierté, intérêt, richesse, rancœur.',
    },
  ],
  synthese: ['Deux familles opposées : Tuvache (fierté) / Vallin (intérêt).', 'Charlot et Jean : deux destins inversés.', 'Des types sociaux plus que des individus.'],
  keywords: ['personnages', 'Tuvache', 'Vallin', 'Charlot', 'Jean', 'd’Hubières', 'types sociaux', 'opposition'],
};

const schema: Lesson = {
  id: 'schema-narratif-aux-champs',
  title: 'Le schéma narratif de « Aux champs »',
  minutes: 45,
  objectives: ['reconstituer le schéma narratif de la nouvelle ;', 'repérer la place de chaque étape ;', 'analyser le rôle de la chute.'],
  observation: {
    label: 'Un récit en cinq temps',
    text: 'De la misère partagée des deux familles au départ de Charlot, la nouvelle suit rigoureusement les cinq étapes du schéma narratif.',
  },
  sections: [
    { kind: 'sub', text: 'Les cinq étapes' },
    {
      kind: 'tableau',
      title: 'Le schéma narratif d’« Aux champs »',
      headers: ['Étape', 'Contenu'],
      rows: [
        ['Situation initiale', 'Les deux familles paysannes vivent pauvrement côte à côte ; les enfants grandissent ensemble'],
        ['Élément perturbateur', 'Mme d’Hubières propose d’adopter un enfant et offre une rente'],
        ['Péripéties', 'Refus indigné des Tuvache ; négociation puis acceptation des Vallin ; départ de Jean ; les familles se brouillent'],
        ['Dénouement', 'Jean revient, adulte, riche et éduqué, rendre visite à ses parents'],
        ['Situation finale', 'Charlot, rongé de jalousie, quitte ses parents ; les Tuvache sont seuls'],
      ],
    },
    { kind: 'sub', text: 'Une construction implacable' },
    {
      kind: 'p',
      text: 'Le temps écoulé (une vingtaine d’années) accentue le basculement : le choix initial produit ses effets jusqu’au bout. La situation finale inverse la situation initiale : les « gagnants » moraux (Tuvache) sont les perdants réels, et inversement.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour l’examen : récitez le schéma en une phrase par étape, en citant un mot du texte à chaque fois.',
    },
  ],
  rule: [
    '« Aux champs » suit le schéma narratif classique en cinq étapes.',
    'L’élément perturbateur (la proposition d’adoption) déclenche toutes les péripéties.',
    'La situation finale inverse la situation initiale : c’est la chute cruelle de Maupassant.',
  ],
  examples: [
    'Situation initiale : « Ils vivaient péniblement de soupe… »',
    'Élément perturbateur : l’arrivée de la « dame de la ville ».',
    'Chute : Charlot claque la porte et s’en va.',
  ],
  exercises: [
    {
      id: 'sch-q1',
      type: 'ordre',
      question: 'Remettez les événements d’« Aux champs » dans l’ordre.',
      items: ['Misère des deux familles', 'Proposition de Mme d’Hubières', 'Les Vallin donnent Jean', 'Retour de Jean adulte', 'Départ de Charlot'],
      shuffled: ['Retour de Jean adulte', 'Misère des deux familles', 'Départ de Charlot', 'Proposition de Mme d’Hubières', 'Les Vallin donnent Jean'],
      explain: 'L’ordre du récit : misère initiale, proposition, don de Jean, retour de Jean, départ de Charlot (chute).',
    },
    {
      id: 'sch-q2',
      type: 'qcm',
      question: 'Quel événement joue le rôle d’élément perturbateur ?',
      options: ['Le mariage de Jean', 'La proposition d’adoption', 'La mort du père Tuvache', 'La moisson'],
      answer: 1,
      explain: 'La proposition d’adoption de Mme d’Hubières rompt l’équilibre initial et déclenche tout le récit.',
    },
  ],
  synthese: ['Cinq étapes classiques parfaitement respectées.', 'Un choix initial aux conséquences totales.', 'Chute = inversion de la situation initiale.'],
  keywords: ['schéma narratif', 'Aux champs', 'situation initiale', 'élément perturbateur', 'péripéties', 'dénouement', 'chute'],
};

const fonctionsIncipit: Lesson = {
  id: 'fonctions-incipit',
  title: 'Les fonctions de l’incipit',
  minutes: 50,
  objectives: ['définir l’incipit ;', 'identifier ses fonctions (informer, intéresser, préparer) ;', 'analyser l’incipit d’« Aux champs ».'],
  observation: {
    label: 'Le début de la nouvelle',
    text: '« Les deux familles vivaient côte à côte, au bout du village, presque en pleine campagne. […] Ils vivaient péniblement de soupe, de pommes de terre et de grand air. »',
    source: 'Maupassant, « Aux champs », 1883',
  },
  sections: [
    { kind: 'sub', text: 'Qu’est-ce qu’un incipit ?' },
    {
      kind: 'p',
      text: 'L’incipit (du latin « il commence ») est l’ouverture d’un récit. Il remplit plusieurs fonctions essentielles : informer le lecteur, capter son intérêt et préparer la suite.',
    },
    {
      kind: 'liste',
      title: 'Les trois grandes fonctions',
      items: [
        'Informer : présenter le cadre (lieu, époque), les personnages, la situation.',
        'Intéresser : créer une attente par un mystère, une tension ou une scène frappante.',
        'Préparer : installer des indices (détails, atmosphère) qui annoncent la suite.',
      ],
    },
    { kind: 'sub', text: 'L’incipit d’« Aux champs »' },
    {
      kind: 'p',
      text: 'Incipit descriptif et informatif : la Normandie, deux familles paysannes, la misère (« péniblement »), la similitude des deux foyers. Rien de spectaculaire — et pourtant tout est déjà en place : cette égalité dans la pauvreté rendra la divergence du choix d’autant plus cruelle.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Un incipit réaliste informe plus qu’il ne captive : son intérêt vient des indices discrets qui annoncent le drame.',
    },
  ],
  rule: [
    'L’incipit ouvre le récit : il informe, intéresse et prépare.',
    'Il présente le cadre spatio-temporel et les personnages.',
    'Dans une nouvelle réaliste, il installe discrètement les indices de la chute.',
  ],
  examples: [
    '« Au bout du village, presque en pleine campagne » → informe sur le lieu.',
    '« Péniblement de soupe, de pommes de terre » → installe la misère (indice).',
    'Les deux familles « côte à côte » → prépare la comparaison future.',
  ],
  exercises: [
    {
      id: 'fi-q1',
      type: 'qcm',
      question: 'Quelle n’est PAS une fonction de l’incipit ?',
      options: ['Informer le lecteur', 'Préparer la suite du récit', 'Révéler la fin de l’histoire', 'Capter l’intérêt'],
      answer: 2,
      explain: 'L’incipit prépare et suggère, mais il ne révèle pas la fin : ce serait détruire l’intérêt du récit.',
    },
    {
      id: 'fi-q2',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Le mot « incipit » vient du latin et signifie « il ___ ».',
      answers: ['commence'],
      explain: 'Incipit = « il commence » : c’est l’ouverture du récit.',
    },
  ],
  synthese: ['Incipit = ouverture du récit.', 'Trois fonctions : informer, intéresser, préparer.', 'L’incipit réaliste sème des indices discrets.'],
  keywords: ['incipit', 'fonctions de l’incipit', 'ouverture', 'indices', 'Aux champs', 'cadre spatio-temporel'],
};

const indicesRealisme: Lesson = {
  id: 'indices-realisme-incipit',
  title: 'Les indices du réalisme',
  minutes: 50,
  objectives: ['repérer les indices du réalisme dans un incipit ;', 'expliquer leur effet sur le lecteur ;', 'caractériser l’écriture réaliste de Maupassant.'],
  observation: {
    label: 'Un extrait à examiner',
    text: '« C’était à l’entrée du bourg, entre deux chaumières, sur la route de Goderville. […] Quatre enfants mangeaient une bouillie de pommes de terre. »',
  },
  sections: [
    { kind: 'sub', text: 'Des indices multiples' },
    {
      kind: 'liste',
      title: 'Où se cache le réalisme ?',
      items: [
        'Lieux réels ou vraisemblables : la route de Goderville (Normandie).',
        'Détails matériels précis : chaumières, bouillie de pommes de terre.',
        'Vocabulaire ordinaire : pas d’emphase, pas de lyrisme.',
        'Chiffres et quantités : quatre enfants, quatre sous.',
        'Phrases simples, constatatives : le narrateur montre sans commenter.',
      ],
    },
    { kind: 'sub', text: 'L’effet produit' },
    {
      kind: 'p',
      text: 'Ces indices créent l’« illusion du vrai » : le lecteur croit à un reportage. La misère n’est pas dénoncée, elle est montrée — et c’est plus efficace.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Un indice isolé ne suffit pas : c’est leur accumulation qui crée l’effet réaliste.',
    },
  ],
  rule: [
    'Les indices du réalisme : lieux vraisemblables, détails matériels, vocabulaire ordinaire, chiffres, ton constatatif.',
    'Ils produisent l’illusion du vrai : le récit semble un témoignage.',
    'Le narrateur montre sans juger : au lecteur de tirer ses conclusions.',
  ],
  examples: [
    '« La route de Goderville » → ancrage géographique normand.',
    '« Bouillie de pommes de terre » → détail matériel de la pauvreté.',
    '« Quatre sous par jour » → précision chiffrée quasi documentaire.',
  ],
  exercises: [
    {
      id: 'ir-q1',
      type: 'qcm',
      question: 'Quel élément est un indice du réalisme ?',
      options: ['Un dragon gardant un trésor', 'La route de Goderville', 'Un château enchanté', 'Une fée bienfaitrice'],
      answer: 1,
      explain: 'Un lieu géographique vraisemblable (la Normandie) ancre le récit dans le réel ; les autres éléments relèvent du merveilleux.',
    },
    {
      id: 'ir-q2',
      type: 'vf',
      question: 'Vrai ou faux ? Le narrateur réaliste donne toujours son opinion sur les personnages.',
      vfAnswer: false,
      explain: 'Faux. Le narrateur réaliste montre sans juger : c’est l’objectivité apparente qui fait la force du texte.',
    },
  ],
  synthese: ['Lieux, détails, chiffres, ton neutre.', 'Illusion du vrai = effet de témoignage.', 'Montrer sans juger.'],
  keywords: ['indices du réalisme', 'illusion du vrai', 'détails concrets', 'objectivité', 'narrateur', 'Aux champs'],
};

const pointDeVue: Lesson = {
  id: 'point-de-vue-aux-champs',
  title: 'Le point de vue du narrateur',
  minutes: 50,
  objectives: ['identifier le point de vue adopté dans « Aux champs » ;', 'distinguer savoir du narrateur et savoir des personnages ;', 'analyser l’effet du point de vue sur le récit.'],
  observation: {
    label: 'Qui voit ? Qui sait ?',
    text: '« On apercevait de la route les deux maisons. » Puis : « La mère Tuvache, accablée, ne répondit rien. » Le narrateur passe du visible extérieur aux sentiments intérieurs.',
  },
  sections: [
    { kind: 'sub', text: 'Un narrateur omniscient dominant' },
    {
      kind: 'p',
      text: 'Dans « Aux champs », le narrateur raconte à la troisième personne et sait presque tout : il connaît les pensées des personnages (« accablée », « la joie au cœur ») et anticipe parfois l’avenir. C’est un point de vue omniscient.',
    },
    { kind: 'sub', text: 'Des passages en focalisation externe' },
    {
      kind: 'p',
      text: 'Certaines scènes sont vues de l’extérieur, comme par une caméra : la description d’ouverture, l’arrivée de la voiture des d’Hubières. Ce recul renforce l’impression d’objectivité.',
    },
    { kind: 'sub', text: 'L’effet produit' },
    {
      kind: 'p',
      text: 'L’omniscience permet de comparer les deux familles de l’intérieur ; les passages externes donnent l’illusion d’un constat neutre. Jamais le narrateur ne condamne : la cruauté vient des faits eux-mêmes.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour repérer le point de vue : demandez « le narrateur en sait-il plus que les personnages ? ». Oui = omniscient. Seulement ce qu’un personnage voit = interne. Moins qu’eux = externe.',
    },
  ],
  rule: [
    '« Aux champs » est raconté par un narrateur omniscient à la troisième personne.',
    'Le narrateur alterne avec des passages en focalisation externe (vision « caméra »).',
    'Ce point de vue permet de tout comparer sans jamais juger.',
  ],
  examples: [
    '« La mère Tuvache, accablée » → accès aux sentiments : omniscience.',
    '« On apercevait de la route les deux maisons » → vision extérieure.',
    'Le narrateur sait que les familles « se brouillèrent » : il domine le temps.',
  ],
  exercises: [
    {
      id: 'pv-q1',
      type: 'qcm',
      question: 'Quel est le point de vue dominant dans « Aux champs » ?',
      options: ['Interne', 'Externe', 'Omniscient', 'Aucun'],
      answer: 2,
      explain: 'Le narrateur connaît les pensées des personnages et domine le temps : il est omniscient, avec des passages externes.',
    },
    {
      id: 'pv-q2',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Quand le narrateur ne montre que l’extérieur, sans connaître les pensées, on parle de focalisation ___.',
      answers: ['externe'],
      explain: 'La focalisation externe limite le narrateur à ce qu’une caméra pourrait enregistrer.',
    },
  ],
  synthese: ['Omniscience dominante + passages externes.', 'Narrateur à la 3e personne.', 'Savoir total, jugement absent.'],
  keywords: ['point de vue', 'focalisation', 'omniscient', 'externe', 'interne', 'narrateur', 'Aux champs'],
};

const modalisation: Lesson = {
  id: 'modalisation',
  title: 'La modalisation',
  minutes: 50,
  objectives: ['définir la modalisation ;', 'repérer les marques de modalisation dans un texte ;', 'analyser l’attitude du narrateur.'],
  observation: {
    label: 'Deux façons de dire la même chose',
    text: '« Les deux familles vivaient côte à côte. » (constat neutre) — « Les deux malheureuses familles survivaient péniblement. » (constat teinté de pitié). Le second énoncé est modalisé.',
  },
  sections: [
    { kind: 'sub', text: 'Définition' },
    {
      kind: 'p',
      text: 'La modalisation est l’ensemble des marques qui révèlent l’attitude de l’énonciateur (certitude, doute, jugement, émotion) par rapport à ce qu’il dit. Un énoncé neutre présente le fait sans marque ; un énoncé modalisé le colore.',
    },
    {
      kind: 'liste',
      title: 'Les marques de modalisation',
      items: [
        'Adjectifs et adverbes appréciatifs : malheureusement, admirablement, péniblement.',
        'Verbes d’opinion ou de sentiment : croire, sembler, regretter.',
        'Modes et temps : conditionnel (doute), exclamations (émotion).',
        'Figures de style : ironie, hyperbole, antiphrase.',
        'Ponctuation expressive : « ! », « ? », « … ».',
      ],
    },
    { kind: 'sub', text: 'La modalisation chez Maupassant' },
    {
      kind: 'p',
      text: 'Maupassant modalise peu, mais quand il le fait, c’est décisif : « péniblement », « misérables », la jalousie « atroce » de Charlot. Ces marques discrètes orientent le jugement du lecteur sans que le narrateur prenne la parole.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour trouver la modalisation : effacez mentalement les adverbes et adjectifs — ce qui change le sens ou la couleur était une marque de modalisation.',
    },
  ],
  rule: [
    'La modalisation révèle l’attitude de l’énonciateur envers son énoncé.',
    'Ses marques : lexique appréciatif, verbes d’opinion, modes, figures de style, ponctuation.',
    'Chez Maupassant, la modalisation est rare mais oriente fortement le jugement du lecteur.',
  ],
  examples: [
    '« Ils vivaient péniblement » → l’adverbe modalise la vie quotidienne.',
    '« Il semblait content » → « semblait » marque le doute.',
    '« Quelle honte ! » → exclamation : émotion du locuteur.',
  ],
  exercises: [
    {
      id: 'mod-q1',
      type: 'qcm',
      question: 'Quel énoncé est le plus fortement modalisé ?',
      options: ['« Il pleut. »', '« Il pleut, hélas, sur la fête ruinée. »', '« La pluie est tombée. »', '« Il a plu hier. »'],
      answer: 1,
      explain: '« Hélas » et « ruinée » expriment le regret : l’énoncé est nettement modalisé.',
    },
    {
      id: 'mod-q2',
      type: 'associe',
      question: 'Associez chaque marque à la modalité qu’elle exprime.',
      pairs: [
        ['« Peut-être viendra-t-il »', 'Doute'],
        ['« Hélas ! »', 'Regret / tristesse'],
        ['« C’est admirable ! »', 'Admiration'],
      ],
      explain: '« Peut-être » exprime le doute, « hélas » le regret, « admirable » l’admiration.',
    },
  ],
  synthese: ['Modalisation = attitude de l’énonciateur.', 'Marques : lexique, modes, figures, ponctuation.', 'Maupassant : modalisation rare et décisive.'],
  keywords: ['modalisation', 'subjectivité', 'adverbe appréciatif', 'ironie', 'énonciation', 'attitude du narrateur'],
};

const elementPerturbateur: Lesson = {
  id: 'element-perturbateur',
  title: 'L’élément perturbateur',
  minutes: 45,
  objectives: ['identifier l’élément perturbateur d’un récit ;', 'analyser son rôle dans « Aux champs » ;', 'étudier la construction du personnage de Mme d’Hubières.'],
  observation: {
    label: 'L’irruption de la ville',
    text: '« Un matin, une dame élégante s’arrêta devant les chaumières. » En une phrase, l’équilibre du début est rompu : la richesse entre dans le monde de la misère.',
  },
  sections: [
    { kind: 'sub', text: 'Définition et rôle' },
    {
      kind: 'p',
      text: 'L’élément perturbateur est l’événement qui rompt la situation initiale et déclenche l’action. Il est souvent introduit par un indicateur de changement (« un matin », « soudain », « or »).',
    },
    { kind: 'sub', text: 'Dans « Aux champs »' },
    {
      kind: 'p',
      text: 'La proposition d’adoption de Mme d’Hubières fait basculer le récit : elle introduit l’argent dans un monde qui en manque, et transforme deux familles semblables en rivales. L’objet du désir (l’enfant) devient objet de transaction.',
    },
    { kind: 'sub', text: 'Une opposition symbolique' },
    {
      kind: 'p',
      text: 'La « dame de la ville », élégante et pressée, s’oppose aux paysannes lentes et usées. Maupassant oppose deux mondes : la campagne misérable et la bourgeoisie aisée qui achète ce qu’elle désire.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Analysez toujours l’élément perturbateur en deux temps : ce qui change matériellement (l’argent) et ce qui change symboliquement (les valeurs).',
    },
  ],
  rule: [
    'L’élément perturbateur rompt l’équilibre initial et déclenche les péripéties.',
    'Dans « Aux champs », c’est la proposition d’adoption de Mme d’Hubières.',
    'Il oppose deux mondes : la campagne pauvre et la bourgeoisie riche.',
  ],
  examples: [
    '« Un matin » → indicateur de rupture.',
    'La rente proposée → l’argent entre dans le récit.',
    'Le refus des Tuvache / l’acceptation des Vallin → première conséquence.',
  ],
  exercises: [
    {
      id: 'ep-q1',
      type: 'qcm',
      question: 'Quel mot introduit souvent l’élément perturbateur ?',
      options: ['« Toujours »', '« Soudain »', '« Autrefois »', '« Enfin »'],
      answer: 1,
      explain: '« Soudain », « un matin », « or » signalent la rupture de l’équilibre initial.',
    },
    {
      id: 'ep-q2',
      type: 'vf',
      question: 'Vrai ou faux ? L’élément perturbateur peut être un personnage nouveau.',
      vfAnswer: true,
      explain: 'Vrai. L’arrivée de Mme d’Hubières, personnage nouveau, joue exactement ce rôle dans « Aux champs ».',
    },
  ],
  synthese: ['Rupture de l’équilibre initial.', 'L’adoption proposée par Mme d’Hubières.', 'Deux mondes opposés : campagne / bourgeoisie.'],
  keywords: ['élément perturbateur', 'rupture', 'adoption', 'd’Hubières', 'péripéties', 'Aux champs'],
};

const caracteres: Lesson = {
  id: 'caracteres-personnages',
  title: 'Les caractères des personnages',
  minutes: 45,
  objectives: ['analyser le caractère des personnages par leurs paroles et leurs actes ;', 'comparer les deux mères de famille ;', 'interpréter la jalousie de Charlot.'],
  observation: {
    label: 'Des paroles révélatrices',
    text: 'La mère Tuvache : « On n’vend pas son enfant ! » — Le père Vallin : « C’est-y raisonnable d’garder l’petit, quand on peut l’mett’e à l’aise ? »',
  },
  sections: [
    { kind: 'sub', text: 'Le discours direct révèle les caractères' },
    {
      kind: 'p',
      text: 'Maupassant laisse parler ses personnages : leurs mots, leur syntaxe paysanne, leurs cris révèlent leur caractère mieux qu’une longue description.',
    },
    {
      kind: 'liste',
      title: 'Deux mères, deux morales',
      items: [
        'La mère Tuvache : fière, entière, indignée — elle refuse la transaction au nom de la dignité.',
        'La mère Vallin : pragmatique, émue mais calculatrice — elle pleure en signant.',
        'Le père Vallin : raisonneur, il justifie l’intérêt par le bien-être futur de l’enfant.',
      ],
    },
    { kind: 'sub', text: 'La jalousie de Charlot' },
    {
      kind: 'p',
      text: 'Charlot n’a pas choisi : il a été gardé. Sa jalousie finale n’est pas un vice inné, elle naît de la comparaison imposée par le retour de Jean. Maupassant montre comment la société fabrique la rancœur.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Ne réduisez pas Charlot à un « méchant » : c’est une victime du choix de ses parents, broyé par la comparaison sociale.',
    },
  ],
  rule: [
    'Le caractère des personnages se révèle par leurs paroles (discours direct) et leurs actes.',
    'Les deux mères incarnent deux morales : dignité contre intérêt.',
    'Charlot n’est pas coupable : la société fabrique sa jalousie.',
  ],
  examples: [
    '« On n’vend pas son enfant ! » → indignation et fierté.',
    'Le marchandage de la rente → calcul.',
    '« V’là-t-y pas qu’i r’vient ! » → aigreur de Charlot.',
  ],
  exercises: [
    {
      id: 'car-q1',
      type: 'qcm',
      question: 'Que révèle la réplique « On n’vend pas son enfant ! » ?',
      options: ['La cupidité de la mère Tuvache', 'La fierté et l’indignation de la mère Tuvache', 'La joie de la mère Tuvache', 'L’indifférence de la mère Tuvache'],
      answer: 1,
      explain: 'Cette exclamation montre l’indignation et la fierté de la mère Tuvache face à la proposition d’achat.',
    },
    {
      id: 'car-q2',
      type: 'vf',
      question: 'Vrai ou faux ? La jalousie de Charlot existe dès le début de la nouvelle.',
      vfAnswer: false,
      explain: 'Faux. Elle naît au retour de Jean, quand la comparaison sociale devient insupportable.',
    },
  ],
  synthese: ['Les paroles révèlent les caractères.', 'Dignité (Tuvache) contre intérêt (Vallin).', 'Charlot : victime de la comparaison sociale.'],
  keywords: ['caractères', 'discours direct', 'fierté', 'jalousie', 'Charlot', 'morale', 'Aux champs'],
};

const convaincrePersuader2: Lesson = {
  id: 'convaincre-persuader',
  title: 'Convaincre / persuader',
  minutes: 45,
  objectives: ['distinguer convaincre et persuader ;', 'analyser les arguments de Mme d’Hubières et du père Vallin ;', 'repérer les procédés utilisés dans la négociation.'],
  observation: {
    label: 'Une négociation en deux temps',
    text: 'Mme d’Hubières insiste, augmente la rente, promet l’éducation. Le père Vallin, lui, calcule : « I s’rait ben aise, l’petit, pus tard. »',
  },
  sections: [
    { kind: 'sub', text: 'Rappel : convaincre et persuader' },
    {
      kind: 'p',
      text: 'Convaincre, c’est toucher la raison par des arguments ; persuader, c’est toucher la sensibilité par l’émotion. Dans la scène de négociation, les deux procédés s’entremêlent.',
    },
    { kind: 'sub', text: 'Les arguments en présence' },
    {
      kind: 'liste',
      title: 'Qui dit quoi ?',
      items: [
        'Mme d’Hubières : l’avenir de l’enfant, l’éducation, la rente croissante (convaincre) ; son émotion sincère, les larmes (persuader).',
        'Le père Vallin : le calcul financier, le bien-être futur (convaincre).',
        'La mère Tuvache : la dignité (« on ne vend pas ») — un argument moral contre tous les autres.',
      ],
    },
    { kind: 'sub', text: 'L’efficacité de l’argument' },
    {
      kind: 'p',
      text: 'C’est l’argument de l’intérêt qui l’emporte chez les Vallin : l’argent pèse plus que le sentiment. Maupassant, sans le dire, montre la force du déterminisme social.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Dans un paragraphe argumenté, citez la négociation comme exemple de conflit entre argument moral et argument d’intérêt.',
    },
  ],
  rule: [
    'Convaincre = raison (arguments) ; persuader = émotion.',
    'La négociation mêle les deux : promesses chiffrées et larmes sincères.',
    'Chez Maupassant, l’argument de l’intérêt l’emporte sur la morale.',
  ],
  examples: [
    'La rente augmentée → argument d’intérêt (convaincre).',
    'Les larmes de Mme d’Hubières → émotion (persuader).',
    '« On n’vend pas son enfant » → argument moral.',
  ],
  exercises: [
    {
      id: 'cp-q1',
      type: 'qcm',
      question: 'Augmenter la rente pour emporter la décision, c’est…',
      options: ['persuader par l’émotion', 'convaincre par l’intérêt', 'réfuter', 'concéder'],
      answer: 1,
      explain: 'L’augmentation de la rente s’adresse à la raison et à l’intérêt des parents : on les convainc.',
    },
    {
      id: 'cp-q2',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Toucher la sensibilité du destinataire, c’est le ___.',
      answers: ['persuader'],
      explain: 'Persuader, c’est agir sur les émotions et la sensibilité ; convaincre agit sur la raison.',
    },
  ],
  synthese: ['Convaincre (raison) / persuader (émotion).', 'Intérêt contre morale dans la négociation.', 'L’argent l’emporte.'],
  keywords: ['convaincre', 'persuader', 'argument', 'négociation', 'intérêt', 'morale', 'Aux champs'],
};

const rythmes: Lesson = {
  id: 'rythmes-recit',
  title: 'Les rythmes du récit',
  minutes: 45,
  objectives: ['distinguer les rythmes du récit (accélération, ralenti, ellipse, pause) ;', 'repérer les ellipses temporelles dans « Aux champs » ;', 'analyser l’effet des rythmes sur le lecteur.'],
  observation: {
    label: 'Vingt ans en une phrase',
    text: '« Les années passèrent. » Toute l’enfance des deux garçons tient dans cette ellipse : Maupassant saute vingt ans pour revenir au moment décisif.',
  },
  sections: [
    { kind: 'sub', text: 'Les quatre rythmes' },
    {
      kind: 'tableau',
      title: 'Vitesse du récit et effets',
      headers: ['Rythme', 'Définition', 'Effet'],
      rows: [
        ['Pause', 'Le récit s’arrête (description)', 'Installe le décor, fait attendre'],
        ['Scène', 'Durée récit = durée histoire (dialogue)', 'Vivacité, présence'],
        ['Sommaire', 'Résumé rapide d’une période', 'Fait avancer vite'],
        ['Ellipse', 'Saut dans le temps (« Les années passèrent »)', 'Évite l’inutile, concentre sur l’essentiel'],
      ],
    },
    { kind: 'sub', text: 'Dans « Aux champs »' },
    {
      kind: 'p',
      text: 'Lenteur initiale (description de la misère), scène dialoguée vive (la négociation), ellipse de vingt ans, retour en scène pour le dénouement. Ce contraste de rythmes rend la chute d’autant plus brutale.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour analyser le rythme : comparez la durée racontée et la longueur du passage qui la raconte.',
    },
  ],
  rule: [
    'Quatre rythmes : pause, scène, sommaire, ellipse.',
    '« Aux champs » alterne lenteur descriptive, scène vive et ellipse de vingt ans.',
    'Le contraste des rythmes prépare la brutalité de la chute.',
  ],
  examples: [
    '« Les années passèrent » → ellipse.',
    'La négociation en dialogue direct → scène.',
    'La description initiale de la misère → pause.',
  ],
  exercises: [
    {
      id: 'ry-q1',
      type: 'qcm',
      question: '« Les années passèrent. » De quel rythme s’agit-il ?',
      options: ['Une pause', 'Une ellipse', 'Une scène', 'Un sommaire détaillé'],
      answer: 1,
      explain: 'La phrase saute par-dessus vingt ans sans rien raconter : c’est une ellipse temporelle.',
    },
    {
      id: 'ry-q2',
      type: 'associe',
      question: 'Associez chaque passage à son rythme.',
      pairs: [
        ['La description des chaumières', 'Pause'],
        ['La négociation en dialogues', 'Scène'],
        ['« Les années passèrent »', 'Ellipse'],
      ],
      explain: 'Description = pause ; dialogues = scène ; saut temporel = ellipse.',
    },
  ],
  synthese: ['Pause, scène, sommaire, ellipse.', 'Ellipse majeure : vingt ans.', 'Le contraste des rythmes sert la chute.'],
  keywords: ['rythmes du récit', 'ellipse', 'pause', 'scène', 'sommaire', 'temps du récit', 'Aux champs'],
};

const comparaisonMetaphore: Lesson = {
  id: 'comparaison-metaphore',
  title: 'Comparaison et métaphore',
  minutes: 45,
  objectives: ['distinguer comparaison et métaphore ;', 'repérer ces figures dans « Aux champs » ;', 'analyser leur rôle dans l’écriture réaliste.'],
  observation: {
    label: 'Deux images à comparer',
    text: '« Les chaumières semblaient deux mendiants. » (comparaison) — « Une marée humaine envahit la route. » (métaphore).',
  },
  sections: [
    { kind: 'sub', text: 'Définitions' },
    {
      kind: 'liste',
      title: 'Deux façons de rapprocher',
      items: [
        'La comparaison rapproche un comparé et un comparant au moyen d’un outil (comme, tel, semblable à, sembler…).',
        'La métaphore rapproche sans outil : elle fusionne ou remplace (« la marée humaine »).',
        'Filée, la métaphore se développe sur plusieurs phrases.',
      ],
    },
    { kind: 'sub', text: 'Dans « Aux champs »' },
    {
      kind: 'p',
      text: 'La comparaison des chaumières à « deux mendiants » annonce la misère et la future rivalité. Maupassant, économe de figures, les réserve aux moments décisifs : elles condensent le sens.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Pas d’outil = métaphore. Mais attention : « semblait » peut introduire une comparaison (« semblait un roi ») — vérifiez la présence d’un comparé et d’un comparant.',
    },
  ],
  rule: [
    'Comparaison : comparé + comparant + outil (comme, tel, sembler…).',
    'Métaphore : rapprochement sans outil, par fusion ou substitution.',
    'Chez Maupassant, les figures sont rares mais chargées de sens.',
  ],
  examples: [
    '« Semblaient deux mendiants » → comparaison (outil : semblaient).',
    '« Une marée de souvenirs » → métaphore.',
    '« La terre est bleue comme une orange » (Éluard) → comparaison célèbre.',
  ],
  exercises: [
    {
      id: 'cm-q1',
      type: 'qcm',
      question: '« Sa voix éclata comme un tonnerre. » Quelle figure ?',
      options: ['Métaphore', 'Comparaison', 'Hyperbole seule', 'Personnification'],
      answer: 1,
      explain: 'L’outil « comme » relie la voix (comparé) au tonnerre (comparant) : comparaison.',
    },
    {
      id: 'cm-q2',
      type: 'associe',
      question: 'Classez chaque image.',
      pairs: [
        ['« Fort comme un lion »', 'Comparaison'],
        ['« L’or du soir »', 'Métaphore'],
        ['« Il est un lion »', 'Métaphore'],
      ],
      explain: '« Comme » = comparaison ; « l’or du soir » (sans outil) et « il est un lion » (fusion) = métaphores.',
    },
  ],
  synthese: ['Comparaison = avec outil ; métaphore = sans outil.', 'Figures rares et décisives chez Maupassant.', 'Toujours nommer comparé et comparant.'],
  keywords: ['comparaison', 'métaphore', 'comparé', 'comparant', 'figure de style', 'outil de comparaison'],
};

const rebondissementChute: Lesson = {
  id: 'rebondissement-chute',
  title: 'Le rebondissement et la chute',
  minutes: 50,
  objectives: ['définir rebondissement et chute ;', 'analyser le retour de Jean comme rebondissement ;', 'interpréter la cruauté de la chute.'],
  observation: {
    label: 'Le coup de théâtre final',
    text: 'Vingt ans après le départ de Jean, « un beau monsieur » revient. Les Tuvache, qui se croyaient vainqueurs moraux, découvrent que leur fils les quitte : c’est la chute.',
  },
  sections: [
    { kind: 'sub', text: 'Définitions' },
    {
      kind: 'liste',
      title: 'Deux notions voisines',
      items: [
        'Le rebondissement : événement imprévu qui relance l’action (le retour de Jean).',
        'La chute : fin brève et frappante qui clôt la nouvelle et en révèle le sens (le départ de Charlot).',
      ],
    },
    { kind: 'sub', text: 'Une inversion totale' },
    {
      kind: 'p',
      text: 'Tout s’inverse : les Tuvache, fiers de leur refus, perdent leur fils ; les Vallin, « vendeurs », retrouvent le leur embelli. La morale paysanne (garder l’enfant) est punie ; l’intérêt est récompensé.',
    },
    { kind: 'sub', text: 'Une chute sans morale' },
    {
      kind: 'p',
      text: 'Maupassant ne commente pas : le dernier mot revient à Charlot qui claque la porte. Le lecteur, seul, éprouve le malaise. C’est la force du réalisme : montrer l’injustice sans la dénoncer.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour l’oral : montrez que la chute réécrit tout le récit — relisez l’incipit à la lumière de la fin.',
    },
  ],
  rule: [
    'Le rebondissement relance l’action ; la chute clôt brutalement la nouvelle.',
    'Le retour de Jean inverse tous les rapports : vainqueurs moraux deviennent perdants réels.',
    'La chute de Maupassant est sans morale : le lecteur juge seul.',
  ],
  examples: [
    '« Un beau monsieur » → rebondissement (retour de Jean).',
    '« Vous m’avez sacrifié » → chute : Charlot accuse ses parents.',
    'La porte claquée → dernier geste, sans commentaire du narrateur.',
  ],
  exercises: [
    {
      id: 'rc-q1',
      type: 'qcm',
      question: 'Quel événement constitue le rebondissement de la nouvelle ?',
      options: ['La naissance de Charlot', 'Le retour de Jean adulte', 'La mort de la mère Vallin', 'La moisson d’été'],
      answer: 1,
      explain: 'Le retour inattendu de Jean, riche et éduqué, relance l’action vingt ans après le don.',
    },
    {
      id: 'rc-q2',
      type: 'vf',
      question: 'Vrai ou faux ? Le narrateur explique explicitement la morale de la fin.',
      vfAnswer: false,
      explain: 'Faux. Maupassant s’efface : c’est au lecteur de tirer les conclusions de la chute.',
    },
  ],
  synthese: ['Rebondissement = retour de Jean.', 'Chute = départ de Charlot.', 'Inversion totale, morale absente, lecteur juge.'],
  keywords: ['rebondissement', 'chute', 'inversion', 'dénouement', 'cruauté', 'Aux champs'],
};

const contrasteSentiments: Lesson = {
  id: 'contraste-sentiments',
  title: 'Le contraste des sentiments',
  minutes: 45,
  objectives: ['repérer le contraste des sentiments dans la nouvelle ;', 'analyser l’opposition entre les deux familles ;', 'étudier le registre pathétique.'],
  observation: {
    label: 'Deux cris opposés',
    text: 'La mère Vallin pleure en embrassant son fils retrouvé ; la mère Tuvache reste muette, « accablée », tandis que Charlot hurle sa haine. Même événement, sentiments inverses.',
  },
  sections: [
    { kind: 'sub', text: 'L’antithèse des sentiments' },
    {
      kind: 'p',
      text: 'Maupassant construit la scène finale sur des oppositions : joie des Vallin / stupeur des Tuvache ; fierté retrouvée / honte ; tendresse / haine. L’antithèse structure le pathétique.',
    },
    { kind: 'sub', text: 'Un pathétique sobre' },
    {
      kind: 'p',
      text: 'Pas de grandes effusions : des larmes, un silence, une porte qui claque. La retenue du narrateur rend l’émotion plus forte — le lecteur complète ce que le texte tait.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour analyser le pathétique : relevez les marques sensorielles (larmes, cris, silence) et les oppositions.',
    },
  ],
  rule: [
    'La scène finale oppose les sentiments des deux familles : joie contre accablement.',
    'Le contraste (antithèse) structure l’émotion du lecteur.',
    'Le pathétique de Maupassant est sobre : retenue, silence, gestes.',
  ],
  examples: [
    'Larmes de la mère Vallin / silence de la mère Tuvache.',
    'Tendresse du fils retrouvé / haine du fils gardé.',
    'La porte claquée : le sentiment dit par le geste.',
  ],
  exercises: [
    {
      id: 'cs-q1',
      type: 'qcm',
      question: 'Quelle figure structure la scène finale ?',
      options: ['L’hyperbole', 'L’antithèse des sentiments', 'L’anaphore', 'La litote'],
      answer: 1,
      explain: 'Joie des Vallin contre accablement des Tuvache : le contraste (antithèse) organise toute la scène.',
    },
    {
      id: 'cs-q2',
      type: 'vf',
      question: 'Vrai ou faux ? Le narrateur multiplie les exclamations pour faire pleurer le lecteur.',
      vfAnswer: false,
      explain: 'Faux. Maupassant reste sobre : l’émotion naît des gestes et des silences, non des exclamations.',
    },
  ],
  synthese: ['Joie contre accablement.', 'Antithèse structurelle.', 'Pathétique sobre : gestes et silences.'],
  keywords: ['contraste', 'sentiments', 'antithèse', 'pathétique', 'registre', 'Aux champs'],
};

const renversement: Lesson = {
  id: 'renversement-situations',
  title: 'Le renversement des situations',
  minutes: 45,
  objectives: ['analyser le renversement des situations dans la nouvelle ;', 'mesurer l’ironie du sort ;', 'comprendre la dimension critique du récit.'],
  observation: {
    label: 'Les gagnants et les perdants changent de camp',
    text: 'Au début, les Tuvache se croient supérieurs (« On n’vend pas son enfant »). À la fin, ils sont seuls et pauvres, tandis que les Vallin « vendus » triomphent.',
  },
  sections: [
    { kind: 'sub', text: 'Une ironie du sort' },
    {
      kind: 'p',
      text: 'Le renversement est complet : le choix « moral » aboutit au malheur, le choix « intéressé » au bonheur matériel. Maupassant met en scène une ironie du sort cruelle.',
    },
    { kind: 'sub', text: 'Une critique sociale' },
    {
      kind: 'p',
      text: 'Ce renversement n’est pas un jeu gratuit : il dénonce une société où l’argent détermine tout, même l’amour familial. La fierté paysanne ne pèse rien face à la richesse.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Ne résumez pas la nouvelle à « l’argent gagne » : Maupassant montre aussi le prix payé — Jean a été élevé loin des siens, Charlot a été sacrifié à un principe.',
    },
  ],
  rule: [
    'Le renversement final inverse vainqueurs et perdants du début.',
    'Cette ironie du sort critique une société dominée par l’argent.',
    'Chaque famille paie un prix : aucun choix n’est gratuit.',
  ],
  examples: [
    'Début : Tuvache fiers / fin : Tuvache seuls.',
    'Début : Vallin « vendeurs » / fin : Vallin triomphants.',
    'Charlot, gardé par principe, finit par partir : le renversement est total.',
  ],
  exercises: [
    {
      id: 're-q1',
      type: 'qcm',
      question: 'Que dénonce le renversement final ?',
      options: ['La malchance des paysans', 'Une société où l’argent détermine tout', 'La méchanceté des enfants', 'La dureté de la ville'],
      answer: 1,
      explain: 'Le renversement montre que l’argent l’emporte sur la morale et même sur les liens familiaux.',
    },
    {
      id: 're-q2',
      type: 'vf',
      question: 'Vrai ou faux ? Seuls les Vallin « paient un prix » dans cette histoire.',
      vfAnswer: false,
      explain: 'Faux. Les Tuvache perdent leur fils ; Jean a grandi loin des siens : chaque famille paie un prix.',
    },
  ],
  synthese: ['Inversion complète des positions.', 'Critique de la société de l’argent.', 'Chaque choix a un prix.'],
  keywords: ['renversement', 'ironie du sort', 'critique sociale', 'argent', 'morale', 'Aux champs'],
};

const personnification: Lesson = {
  id: 'personnification',
  title: 'La personnification',
  minutes: 40,
  objectives: ['définir la personnification ;', 'repérer les personnifications dans la nouvelle ;', 'analyser leur effet poétique et symbolique.'],
  observation: {
    label: 'Quand les choses vivent',
    text: '« La chaumière semblait pleurer son maître. » La maison reçoit un sentiment humain : c’est une personnification.',
  },
  sections: [
    { kind: 'sub', text: 'Définition' },
    {
      kind: 'p',
      text: 'La personnification attribue des traits humains (sentiments, gestes, paroles) à une chose, un animal ou une idée. Elle anime le décor et le charge de sens.',
    },
    { kind: 'sub', text: 'Dans « Aux champs »' },
    {
      kind: 'p',
      text: 'Maupassant personnifie avec parcimonie : la nature et les maisons reflètent les états des personnages. Le décor devient le miroir des sentiments — procédé réaliste quand il reste discret.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Distinguez personnification (donner des traits humains) et comparaison (« semblait un homme ») : la personnification fusionne, la comparaison rapproche.',
    },
  ],
  rule: [
    'La personnification prête des traits humains aux choses.',
    'Elle anime le décor et le fait refléter les sentiments.',
    'Chez Maupassant, elle est rare et toujours symbolique.',
  ],
  examples: [
    '« La maison semblait pleurer » → tristesse prêtée à la maison.',
    '« Le vent gémit dans les branches » → la nature exprimée comme un être vivant.',
    '« La nuit avala le village » → image animée de la tombée du jour.',
  ],
  exercises: [
    {
      id: 'pe-q1',
      type: 'qcm',
      question: '« La forêt m’écoute et me regarde. » Quelle figure ?',
      options: ['Personnification', 'Antithèse', 'Gradation', 'Synecdoque'],
      answer: 0,
      explain: 'Écouter et regarder sont des actions humaines prêtées à la forêt : personnification.',
    },
    {
      id: 'pe-q2',
      type: 'vf',
      question: 'Vrai ou faux ? La personnification ne peut concerner que des animaux.',
      vfAnswer: false,
      explain: 'Faux. Elle peut concerner des objets, des lieux ou des idées abstraites (« la justice aveugle »).',
    },
  ],
  synthese: ['Traits humains prêtés aux choses.', 'Décor-miroir des sentiments.', 'Figure rare et symbolique chez Maupassant.'],
  keywords: ['personnification', 'figure de style', 'animation', 'décor', 'symbole', 'Aux champs'],
};

const discours: Lesson = {
  id: 'discours-direct-indirect',
  title: 'Discours direct / discours indirect',
  minutes: 50,
  objectives: ['distinguer discours direct et discours indirect ;', 'transformer des phrases de l’un à l’autre ;', 'analyser le choix de Maupassant.'],
  observation: {
    label: 'Deux manières de rapporter des paroles',
    text: 'Discours direct : La mère Tuvache cria : « On n’vend pas son enfant ! » — Discours indirect : La mère Tuvache cria qu’on ne vendait pas son enfant.',
  },
  sections: [
    { kind: 'sub', text: 'Le discours direct' },
    {
      kind: 'p',
      text: 'Le discours direct reproduit les paroles telles qu’elles ont été dites : guillemets, tirets, deux points, je/tu, temps d’origine. Il donne la vivacité de la scène et la voix du personnage.',
    },
    { kind: 'sub', text: 'Le discours indirect' },
    {
      kind: 'p',
      text: 'Le discours indirect intègre les paroles dans le récit : subordonnée en « que », pronoms et temps adaptés (concordance des temps : présent → imparfait, futur → conditionnel).',
    },
    { kind: 'sub', text: 'Le choix de Maupassant' },
    {
      kind: 'p',
      text: 'Maupassant privilégie le discours direct, avec la syntaxe paysanne (« On n’vend pas ») : les personnages se révèlent par leur langue. Le narrateur garde le discours indirect pour résumer et dominer le récit.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'À la transformation, adaptez tout : pronoms (je → il), temps (présent → imparfait), indicateurs (aujourd’hui → ce jour-là, ici → là).',
    },
  ],
  rule: [
    'Discours direct : paroles reproduites (guillemets, je/tu, temps d’origine).',
    'Discours indirect : paroles intégrées (que + concordance des temps, pronoms adaptés).',
    'Maupassant utilise le discours direct pour donner la voix aux personnages.',
  ],
  examples: [
    '« On n’vend pas son enfant ! » → discours direct, voix paysanne.',
    'Il déclara qu’il viendrait le lendemain. → discours indirect (futur → conditionnel).',
    'Elle répondit qu’elle ne comprenait pas. → concordance des temps.',
  ],
  exercises: [
    {
      id: 'di-q1',
      type: 'qcm',
      question: 'Transformez : Il dit : « Je viendrai demain. »',
      options: ['Il dit qu’il viendra demain.', 'Il dit qu’il viendrait le lendemain.', 'Il dit que je viendrais demain.', 'Il dit qu’il est venu demain.'],
      answer: 1,
      explain: 'Au discours indirect : je → il, futur → conditionnel, demain → le lendemain.',
    },
    {
      id: 'di-q2',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Au discours indirect, le temps du verbe suit la règle de la concordance des ___.',
      answers: ['temps'],
      explain: 'La concordance des temps adapte le temps de la subordonnée à celui du verbe introducteur.',
    },
    {
      id: 'di-q3',
      type: 'vf',
      question: 'Vrai ou faux ? Le discours direct utilise les guillemets et la première personne.',
      vfAnswer: true,
      explain: 'Vrai. Le discours direct reproduit les paroles avec je/tu, guillemets ou tirets.',
    },
  ],
  synthese: ['Direct : paroles reproduites, vivacité.', 'Indirect : paroles intégrées, concordance.', 'Maupassant : voix directe des personnages.'],
  keywords: ['discours direct', 'discours indirect', 'concordance des temps', 'guillemets', 'transposition', 'dialogue'],
};

export const moduleII: CourseModule = {
  id: 'module-2',
  title: 'Module II — « Aux champs » de Guy de Maupassant',
  description: 'Étude complète de la nouvelle réaliste : l’auteur, le mouvement réaliste, l’incipit, les péripéties et la chute cruelle.',
  sequences: [
    {
      id: 'seq-inaugurale',
      title: 'Séquence inaugurale — Découvrir l’œuvre',
      subtitle: 'L’auteur, le réalisme, la nouvelle et ses personnages',
      lessons: [biographie, realisme, nouvelle, personnages, schema],
    },
    {
      id: 'seq-1',
      title: 'Séquence 1 — Étudier l’incipit',
      subtitle: 'Fonctions, indices du réalisme, point de vue, modalisation',
      lessons: [fonctionsIncipit, indicesRealisme, pointDeVue, modalisation],
    },
    {
      id: 'seq-2',
      title: 'Séquence 2 — Élément perturbateur et péripéties',
      subtitle: 'La proposition d’adoption et ses conséquences',
      lessons: [elementPerturbateur, caracteres, convaincrePersuader2, rythmes, comparaisonMetaphore],
    },
    {
      id: 'seq-3',
      title: 'Séquence 3 — Le rebondissement et la chute',
      subtitle: 'Le retour de Jean et le dénouement cruel',
      lessons: [rebondissementChute, contrasteSentiments, renversement, personnification, discours],
    },
  ],
};

/* ————— Fiches « Je retiens » du module II ————— */
export const fichesJeRetiens = [
  {
    title: 'Maupassant en une fiche',
    points: ['1850-1893, Normandie', 'Maître de la nouvelle réaliste', '300 nouvelles, 6 romans', 'Observation lucide, ironie froide'],
  },
  {
    title: 'Le réalisme',
    points: ['Montrer la vie telle qu’elle est', 'Sujets ordinaires, détails concrets', 'Narrateur objectif, « illusion du vrai »', 'Balzac, Flaubert, Maupassant, Zola'],
  },
  {
    title: 'La nouvelle',
    points: ['Récit bref, une seule action', 'Peu de personnages, cadre resserré', 'Fin = chute, préparée dès l’incipit', 'Maupassant : chaque détail compte'],
  },
  {
    title: 'Le schéma narratif d’« Aux champs »',
    points: [
      'Situation initiale : misère des deux familles',
      'Élément perturbateur : la proposition d’adoption',
      'Péripéties : refus des Tuvache, don des Vallin',
      'Dénouement : retour de Jean riche',
      'Chute : Charlot quitte ses parents',
    ],
  },
  {
    title: 'L’incipit réaliste',
    points: ['Informer, intéresser, préparer', 'Lieux vraisemblables, détails matériels', 'Indices discrets de la chute', 'Ton constatatif, sans jugement'],
  },
  {
    title: 'Les procédés à connaître',
    points: [
      'Points de vue : interne, externe, omniscient',
      'Modalisation : lexique appréciatif, modes',
      'Rythmes : pause, scène, sommaire, ellipse',
      'Figures : comparaison, métaphore, personnification',
      'Discours direct / indirect + concordance des temps',
    ],
  },
];
