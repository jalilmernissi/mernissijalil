import type { Lesson } from './types';

export const bacBookUrl = 'https://1drv.ms/b/c/B40CC29FE01A6502/AW_ngx9fVY1Gpo-PCklVRAU?e=ewGKyD';

/* ————————————————————————————————————————————
   ŒUVRES ÉTUDIÉES — architecture extensible :
   ajouter une œuvre = ajouter un objet dans « oeuvres ».
   ———————————————————————————————————————————— */

export interface ChapterSummary {
  num: string;
  title: string;
  summary: string;
}

export interface Oeuvre {
  id: string;
  title: string;
  author: string;
  year: string;
  genre: string;
  image: string;
  imageAlt: string;
  description: string;
  chapterLabel: string;
  chapters: ChapterSummary[];
  bio: {
    dates: string;
    portrait: string;
    portraitAlt: string;
    text: string;
    oeuvresCitees: string[];
  };
}

export const oeuvres: Oeuvre[] = [
  {
    id: 'la-boite-a-merveilles',
    title: 'La boîte à merveilles',
    author: 'Ahmed Séfrioui',
    year: '1954',
    genre: 'Roman autobiographique',
    image: 'https://image.qwenlm.ai/generated-images/07d46fe3-7577-4887-8e06-d4e97344c578/_result.png',
    imageAlt: 'Illustration de la médina de Fès',
    description:
      'À Fès, dans les années 1920, Sidi Mohammed, six ans, rêveur solitaire, découvre le monde des adultes entre superstitions, fêtes et épreuves familiales. Sa « boîte à merveilles », pleine d’objets hétéroclites, est son refuge imaginaire.',
    chapterLabel: 'Chapitres',
    chapters: [
      { num: 'I', title: 'Dar Chouafa', summary: 'Le narrateur adulte, confronté à la solitude et à l’insomnie, se replonge dans ses souvenirs d’enfance. Il évoque sa vie à Dar Chouafa, maison habitée par plusieurs familles, et présente son univers de six ans, marqué par la solitude et l’imagination. Il raconte sa fréquentation du Msid, le bain maure qu’il déteste et les nombreuses disputes entre les voisines. Une violente querelle entre sa mère, Lalla Zoubida, et Rahma le bouleverse au point qu’il s’évanouit.' },
      { num: 'II', title: 'Le sanctuaire de Sidi Ali Boughaleb', summary: 'Sidi Mohamed redoute particulièrement le mardi, jour de récitation au Msid. À la maison, sa mère souffre d’une forte migraine. Lalla Aïcha, son amie, lui conseille de se rendre au sanctuaire de Sidi Ali Boughaleb pour chercher un soulagement. Les deux femmes s’y rendent avec l’enfant. Pendant la visite, Sidi Mohamed est soudainement griffé au visage par un chat, ce qui renforce encore son malaise et sa peur.' },
      { num: 'III', title: 'La disparition de Zineb', summary: 'Après quelques jours de repos, Sidi Mohamed retourne au Msid. La découverte d’une lampe à pétrole chez Fatma Bziouya émerveille sa mère, qui demande à son mari d’en acheter une. Peu après, Zineb disparaît alors qu’elle accompagnait sa mère à un baptême. Son absence provoque une grande inquiétude dans le voisinage. Lorsqu’elle est retrouvée, Rahma organise un repas de charité (sadaka) pour remercier Dieu. L’enfant, toujours attiré par son monde intérieur, se réfugie dans sa Boîte à merveilles.' },
      { num: 'IV', title: 'Les ennuis de Lalla Aïcha', summary: 'Avec l’arrivée du printemps, Sidi Mohamed accompagne sa mère chez Lalla Aïcha. Les deux femmes parlent des difficultés de Moulay Larbi, le mari de Lalla Aïcha, qui a été victime d’une escroquerie de la part de son associé. Pendant ce temps, l’enfant joue avec d’autres enfants, mais le jeu finit par une dispute. Le père de Sidi Mohamed lui raconte également les histoires extraordinaires d’Abdellah l’épicier, célèbre conteur du quartier.' },
      { num: 'V', title: 'L’école coranique et les malheurs de Lalla Aïcha', summary: 'Le Fqih annonce aux élèves les préparatifs de la fête de l’Achoura, ce qui apporte un peu de joie au Msid. De son côté, Lalla Zoubida raconte aux voisines les malheurs de Lalla Aïcha, qui a sacrifié ses biens pour aider son mari. Le chapitre est également marqué par la mort de Sidi Mohamed Ben Tahar, le coiffeur du quartier. L’enfant assiste aux funérailles et cette expérience de la mort le traumatise profondément.' },
      { num: 'VI', title: 'Les préparatifs de l’Achoura', summary: 'Les élèves participent au nettoyage et à la décoration du Msid en vue de l’Achoura. Sidi Mohamed accompagne sa mère à la Kissaria, où elle lui achète des vêtements neufs pour la fête. Dans le quartier, les femmes continuent à échanger des histoires sur leurs voisins. Rahma raconte notamment l’histoire de Khadija et de son vieux mari, l’oncle Othman, un récit à la fois comique et triste. L’atmosphère générale est dominée par l’attente et l’excitation.' },
      { num: 'VII', title: 'La fête de l’Achoura', summary: 'À la veille de l’Achoura, toute la maison est animée par les préparatifs. Les femmes achètent des tambourins et Sidi Mohamed reçoit une trompette qui le rend très fier. Son père l’emmène en ville, où il découvre les magasins de jouets et doit passer chez le coiffeur, une expérience qu’il déteste. Le jour de l’Achoura, l’enfant se rend tôt au Msid avec ses habits neufs. Les prières, les chants et le repas familial donnent à cette journée une atmosphère exceptionnelle.' },
      { num: 'VIII', title: 'Les bijoux du malheur', summary: 'L’été arrive et la chaleur devient accablante. Au cours d’une sortie au souk, Maalem Abdesslam veut acheter de beaux bracelets en or pour sa femme. Mais une dispute éclate autour de ces bijoux. Lalla Zoubida les considère comme un mauvais présage et refuse de les porter. Cet épisode annonce le début des difficultés qui vont bouleverser la famille.' },
      { num: 'IX', title: 'Un ménage en difficulté', summary: 'La situation familiale se dégrade rapidement. Sidi Mohamed tombe gravement malade et la maison est envahie par l’inquiétude. Dans le même temps, Maalem Abdesslam connaît une grave difficulté financière : il perd son capital et ne peut plus exercer normalement son métier. Pour subvenir aux besoins de sa famille, il décide de partir travailler comme moissonneur à la campagne. Son départ plonge Lalla Zoubida et son fils dans une profonde tristesse. Même la Boîte à merveilles ne parvient plus à consoler l’enfant.' },
      { num: 'X', title: 'Superstitions', summary: 'Face au malheur et à l’absence du père, Lalla Zoubida et Lalla Aïcha cherchent du réconfort auprès de Sidi El Arafi, un voyant aveugle réputé pour sa sagesse. Ses paroles rassurent quelque peu les deux femmes. Lalla Zoubida décide également de garder son fils auprès d’elle et de l’emmener régulièrement prier auprès d’un saint. Plus tard, un messager envoyé par Maalem Abdesslam apporte de l’argent, des provisions et de bonnes nouvelles, ce qui redonne de l’espoir à la famille.' },
      { num: 'XI', title: 'Bavardage de bonnes femmes', summary: 'Lalla Zoubida rend visite à Lalla Aïcha. Chez cette dernière, les femmes discutent longuement de Moulay Larbi, qui a épousé une jeune femme après ses difficultés avec Lalla Aïcha. Salama, la marieuse qui avait arrangé ce mariage, raconte les circonstances de cette union et reconnaît sa responsabilité. Zhor, une voisine, apporte à son tour de nouvelles informations : le mariage est malheureux et le divorce semble proche. Sidi Mohamed, qui ne comprend pas toujours les conversations des adultes, se laisse surtout fasciner par les sons et les histoires qu’il entend.' },
      { num: 'XII', title: 'Un conte de fée a toujours une chute heureuse', summary: 'La nouvelle tant attendue arrive enfin : Maalem Abdesslam est de retour. La maison est aussitôt remplie de joie et les voisines célèbrent l’événement. La famille retrouve son équilibre après cette longue période d’angoisse. Driss El Aouad annonce également que le divorce de Moulay Larbi avec sa seconde épouse est prononcé. Pourtant, après l’agitation des adultes, Sidi Mohamed retrouve sa solitude et se réfugie une dernière fois dans sa Boîte à merveilles, son univers intime et imaginaire.' },
    ],
    bio: {
      dates: '1915–2004',
      portrait: 'https://image.qwenlm.ai/generated-images/8f990b93-b154-496e-b35d-9c99f42c5a33/_result.png',
      portraitAlt: 'Portrait gravé d’Ahmed Sefrioui',
      text: 'Ahmed Sefrioui est un écrivain marocain d’expression française, né en 1915 à Fès. Il est considéré comme l’un des premiers grands romanciers marocains de langue française. Dans ses œuvres, il évoque souvent la société marocaine traditionnelle, les coutumes, la famille et la vie quotidienne à Fès. Son œuvre la plus célèbre est La Boîte à merveilles, publiée en 1954, un roman largement autobiographique qui raconte l’enfance de Sidi Mohammed dans la médina de Fès. Il est également l’auteur de Le Chapelet d’ambre et de La Maison de servitude. Il est mort en 2004.',
      oeuvresCitees: ['La Boîte à merveilles (1954)', 'Le Chapelet d’ambre', 'La Maison de servitude'],
    },
  },
  {
    id: 'le-dernier-jour-dun-condamne',
    title: 'Le dernier jour d’un condamné',
    author: 'Victor Hugo',
    year: '1829',
    genre: 'Roman à thèse (plaidoyer)',
    image: 'https://image.qwenlm.ai/generated-images/34ed1de1-9672-422a-a5f1-c2046c2dca4f/_result.png',
    imageAlt: 'Paris nocturne au XIXe siècle',
    description:
      'Un condamné à mort anonyme écrit, de sa prison, le récit de ses dernières semaines. Monologue intérieur halluciné, le roman est un plaidoyer éclatant de Victor Hugo contre la peine de mort.',
    chapterLabel: 'Chapitres (par groupes)',
    chapters: [
      { num: 'I-II', title: '« Condamné à mort ! »', summary: 'Le narrateur, enfermé à Bicêtre, tourne en boucle sur sa sentence : « Condamné à mort ! Voilà cinq semaines que j’habite avec cette pensée. » L’idée fixe s’installe.' },
      { num: 'III-VI', title: 'Souvenirs et transfert des forçats', summary: 'Le condamné évoque sa vie passée, sa famille. Il assiste, terrifié, au ferrage des forçats partant pour le bagne : spectacle d’horreur qui lui fait presque envier les galères.' },
      { num: 'VII-XII', title: 'La vie de prison', summary: 'Tableau de la prison de Bicêtre : argot, chansons de bagnards, violence. Le narrateur rencontre la « friauche » et découvre l’écriture comme refuge : il décide d’écrire son journal.' },
      { num: 'XIII-XVIII', title: 'Écrire pour survivre', summary: 'Le condamné explique son projet : consigner ses souffrances pour « instruire » les juges. Entre espoir de grâce et désespoir, il décrit sa cellule, ses gardiens, ses angoisses.' },
      { num: 'XIX-XXIII', title: 'Le pourvoi en cassation', summary: 'Il forme un pourvoi en cassation, dernier recours. L’attente devient une torture : six semaines d’espoir et de terreur. Il analyse les rouages froids de la justice.' },
      { num: 'XXIV-XXX', title: 'La Conciergerie', summary: 'Transfert à la Conciergerie. Cellule froide, visiteurs curieux, rencontre avec un prêtre qui le confesse. Le narrateur rédige une forme de testament et pense à ses proches.' },
      { num: 'XXXI-XXXVI', title: 'Marie, sa mère, sa femme', summary: 'Pages déchirantes : le condamné pense à sa fille Marie, trois ans, qui grandira sans père, « fille d’un forçat ». Il évoque sa mère, sa femme, ce qu’il laisse derrière lui.' },
      { num: 'XXXVII-XLII', title: 'Le pourvoi est rejeté', summary: 'Le pourvoi est rejeté : l’exécution aura lieu le jour même. Panique, tentative de fuite avortée. Puis la visite de Marie : la petite ne reconnaît pas son père, l’appelle « monsieur » — scène insoutenable.' },
      { num: 'XLIII-XLVI', title: 'La toilette du condamné', summary: 'Rituel sinistre : cheveux coupés, col de chemise coupé, mains liées. Trajet en charrette vers l’Hôtel de Ville, puis vers la place de Grève. La foule se presse, avide de spectacle.' },
      { num: 'XLVII-XLIX', title: 'Les dernières heures', summary: 'Dernier sursaut d’espoir : demander la grâce. Il compte les heures — « quatre heures ». Le cri final, « Grâce ! », se perd : la guillotine attend. Le roman s’arrête au seuil de la mort.' },
    ],
    bio: {
      dates: '1802–1885',
      portrait: 'https://image.qwenlm.ai/generated-images/01384fc3-8acb-4f60-a1a0-fdc77ffba2ef/_result.png',
      portraitAlt: 'Portrait gravé de Victor Hugo',
      text: 'Victor Hugo est un grand écrivain, poète, dramaturge et homme politique français. Il naît à Besançon en 1802. Figure majeure du romantisme, il a profondément marqué la littérature française du XIXᵉ siècle. Il est l’auteur de nombreux ouvrages célèbres, notamment Notre-Dame de Paris (1831) et Les Misérables (1862). Dans Le Dernier Jour d’un condamné (1829), il dénonce la peine de mort et défend la dignité humaine. Engagé dans les luttes sociales et politiques de son époque, il s’exile pendant plusieurs années sous le règne de Napoléon III. Il revient en France après la chute de l’Empire et meurt à Paris en 1885.',
      oeuvresCitees: ['Notre-Dame de Paris (1831)', 'Les Misérables (1862)', 'Le Dernier Jour d’un condamné (1829)'],
    },
  },
  {
    id: 'antigone',
    title: 'Antigone',
    author: 'Jean Anouilh',
    year: '1944',
    genre: 'Tragédie moderne',
    image: 'https://image.qwenlm.ai/generated-images/cd8115d5-2b82-4ac6-a2bf-26e718909ccc/_result.png',
    imageAlt: 'Colonnes grecques et couronne de laurier',
    description:
      'Relecture moderne du mythe de Sophocle : Antigone, fille d’Œdipe, brave l’interdit du roi Créon pour enterrer son frère Polynice. Créée sous l’Occupation, la pièce interroge le devoir, la loi et la révolte.',
    chapterLabel: 'Scènes clés',
    chapters: [
      { num: '1', title: 'Le Prologue', summary: 'Le Prologue présente les personnages, alignés face au public : Antigone « la petite maigre », Ismène la belle, Créon le roi fatigué, Hémon le fiancé. Il annonce aussi le dénouement : « Elle s’appelle Antigone et il va falloir qu’elle joue son rôle jusqu’au bout. »' },
      { num: '2', title: 'Antigone et la Nourrice', summary: 'À l’aube, Antigone rentre en cachette. La Nourrice la gronde avec tendresse. Dialogue familier et quotidien qui contraste avec le destin tragique déjà annoncé.' },
      { num: '3', title: 'Antigone et Ismène', summary: 'Ismène, prudente, supplie sa sœur de renoncer à enterrer Polynice : Créon l’a interdit sous peine de mort. Antigone refuse : « Moi, je veux tout, tout de suite — et que ce soit entier. »' },
      { num: '4', title: 'Antigone et Hémon', summary: 'Antigone retrouve Hémon, son fiancé. Elle le provoque, se montre impossible, puis le serre contre elle. Elle lui écrit une lettre d’adieu : elle sait qu’elle va mourir et veut le libérer.' },
      { num: '5', title: 'L’arrestation', summary: 'Un garde annonce : quelqu’un a recouvert le corps de Polynice de terre. Antigone, arrêtée en train de recommencer, est conduite devant Créon. Ismène, bouleversée, veut partager son sort.' },
      { num: '6', title: 'Antigone et Créon — le devoir contre la loi', summary: 'Premier affrontement. Créon invoque la loi, l’ordre, la raison d’État. Antigone invoque le devoir fraternel et les « lois non écrites ». Elle ne cède rien : « Je suis là pour vous dire non et pour mourir. »' },
      { num: '7', title: 'Le refus du bonheur', summary: 'Créon tente de la sauver : il lui propose d’étouffer l’affaire, de lui laisser la vie et le bonheur. Antigone refuse ce « petit bonheur » étriqué : « Vous me dégoûtez tous avec votre bonheur ! »' },
      { num: '8', title: 'Ismène et Créon', summary: 'Ismène plaide pour sa sœur, propose de mourir avec elle. Créon, las, refuse : il veut encore sauver Antigone malgré elle, pour Hémon et pour la paix de Thèbes.' },
      { num: '9', title: 'La sentence', summary: 'Créon, acculé par l’intransigeance d’Antigone, prononce la sentence. Les gardes emmènent Antigone : elle sera murée vivante dans un tombeau. Hémon, furieux, rompt avec son père.' },
      { num: '10', title: 'Le dénouement', summary: 'Le Messager raconte : Antigone s’est pendue dans son tombeau, Hémon s’est tué auprès d’elle, et la reine Eurydice, en l’apprenant, s’est donné la mort. Créon reste seul : « Il n’y a plus personne. »' },
    ],
    bio: {
      dates: '1910–1987',
      portrait: 'https://image.qwenlm.ai/generated-images/8cd4d6fd-6898-4e39-93c9-84cee423fb69/_result.png',
      portraitAlt: 'Portrait gravé de Jean Anouilh',
      text: 'Jean Anouilh est un dramaturge et écrivain français, né à Bordeaux en 1910. Il commence à écrire pour le théâtre dans les années 1930 et devient l’un des dramaturges français les plus importants du XXᵉ siècle. Ses pièces abordent souvent des thèmes comme le conflit entre l’individu et la société, la liberté, le pouvoir, le bonheur et le devoir. Son œuvre la plus célèbre est Antigone, créée en 1944, une réécriture moderne de la tragédie de Sophocle. À travers le conflit entre Antigone et Créon, Anouilh oppose notamment l’idéal, la liberté et la révolte au réalisme politique et au compromis. Il meurt en 1987 à Lausanne, en Suisse.',
      oeuvresCitees: ['Antigone (1944)'],
    },
  },
];

/* ————————————————————————————————————————————
   LANGUE — leçons complètes (fenêtre de lecture)
   ———————————————————————————————————————————— */

export const langueLessons: Lesson[] = [
  {
    id: 'phrase-simple',
    title: 'La phrase simple',
    minutes: 30,
    objectives: ['définir la phrase simple ;', 'identifier le sujet, le verbe et les compléments ;', 'construire des phrases simples correctes.'],
    observation: {
      label: 'Observez',
      text: '« Charlot quitte la maison. » — Une seule action, un seul verbe conjugué : la phrase simple est la brique de base du discours.',
    },
    sections: [
      {
        kind: 'p',
        text: 'La phrase simple ne comporte qu’un seul verbe conjugué : elle n’a donc qu’une seule proposition, dite indépendante. Elle s’organise autour du verbe, avec un sujet et, souvent, des compléments.',
      },
      {
        kind: 'liste',
        title: 'Les constituants essentiels',
        items: [
          'Le sujet : qui fait l’action ? (« Charlot »)',
          'Le verbe : noyau de la phrase (« quitte »)',
          'Le complément d’objet (COD/COI) : complète le verbe (« la maison »)',
          'Les compléments circonstanciels : facultatifs (lieu, temps, manière) : « pendant la nuit ».',
        ],
      },
      {
        kind: 'note',
        tone: 'astuce',
        text: 'Comptez les verbes conjugués : un seul verbe = phrase simple ; deux ou plus = phrase complexe.',
      },
    ],
    rule: [
      'Une phrase simple = un seul verbe conjugué = une seule proposition indépendante.',
      'Structure de base : Sujet + Verbe (+ Compléments).',
      'Les compléments circonstanciels (temps, lieu, manière) sont facultatifs et déplaçables.',
    ],
    examples: [
      '« Jean revient. » → sujet + verbe.',
      '« Les deux familles vivaient de soupe. » → sujet + verbe + COI.',
      '« Pendant la nuit, Charlot s’enfuit de la maison. » → CC de temps + S + V + CC de lieu.',
    ],
    exercises: [
      {
        id: 'ps-q1',
        type: 'qcm',
        question: 'Quelle phrase est une phrase simple ?',
        options: ['Il pleut et le vent souffle.', 'Le condamné écrit son journal.', 'Quand il part, sa mère pleure.', 'Je crois qu’il viendra.'],
        answer: 1,
        explain: '« Le condamné écrit son journal » n’a qu’un seul verbe conjugué (« écrit ») : phrase simple.',
      },
      {
        id: 'ps-q2',
        type: 'complete',
        question: 'Complétez la phrase.',
        sentence: 'Une phrase simple ne comporte qu’un seul ___ conjugué.',
        answers: ['verbe'],
        explain: 'Un seul verbe conjugué = une seule proposition = phrase simple.',
      },
    ],
    synthese: ['1 verbe conjugué = phrase simple.', 'Sujet + verbe + compléments.', 'Les CC sont facultatifs et déplaçables.'],
    keywords: ['phrase simple', 'sujet', 'verbe', 'complément', 'proposition indépendante'],
  },
  {
    id: 'phrase-complexe',
    title: 'La phrase complexe',
    minutes: 45,
    objectives: ['définir la phrase complexe ;', 'distinguer juxtaposition, coordination et subordination ;', 'analyser les propositions d’une phrase.'],
    observation: {
      label: 'Observez',
      text: '« Charlot regardait Jean, mais il ne disait rien. » — Deux verbes conjugués (« regardait », « disait »), deux propositions reliées : la phrase est complexe.',
    },
    sections: [
      {
        kind: 'p',
        text: 'La phrase complexe comporte plusieurs verbes conjugués, donc plusieurs propositions. Le lien entre les propositions révèle la logique de la pensée.',
      },
      {
        kind: 'tableau',
        title: 'Les trois façons de relier les propositions',
        headers: ['Lien', 'Outil', 'Exemple'],
        rows: [
          ['Juxtaposition', 'Ponctuation (virgule, point-virgule)', '« Il regarde, il se tait. »'],
          ['Coordination', 'Conjonction de coordination (mais, ou, et, donc, or, ni, car)', '« Il regarde, mais il se tait. »'],
          ['Subordination', 'Subordonnant (que, quand, parce que, qui, dont…)', '« Il se tait parce qu’il a peur. »'],
        ],
      },
      {
        kind: 'liste',
        title: 'Les subordonnées principales',
        items: [
          'Relative : introduite par qui, que, dont, où → complète un nom (« la maison qui brûle »).',
          'Complétive : introduite par que → complète un verbe (« je crois qu’il viendra »).',
          'Circonstancielle : exprime temps, cause, but, condition, opposition (« quand il arrive », « parce qu’il pleut »).',
        ],
      },
      {
        kind: 'note',
        tone: 'astuce',
        text: '« Mais où est donc Ornicar ? » — la phrase mnémotechnique des conjonctions de coordination : mais, ou, et, donc, or, ni, car.',
      },
    ],
    rule: [
      'Phrase complexe = plusieurs verbes conjugués = plusieurs propositions.',
      'Trois liens : juxtaposition (ponctuation), coordination (mais, ou, et, donc, or, ni, car), subordination (que, quand, parce que…).',
      'La subordonnée dépend de la proposition principale.',
    ],
    examples: [
      '« La mère pleurait ; le père se taisait. » → juxtaposition.',
      '« Il hésite, car l’offre est tentante. » → coordination (cause).',
      '« Elle refuse qu’on vende son fils. » → subordonnée complétive.',
    ],
    exercises: [
      {
        id: 'pc-q1',
        type: 'qcm',
        question: '« Il pleut, donc nous restons. » Quel lien entre les propositions ?',
        options: ['Juxtaposition', 'Coordination', 'Subordination', 'Aucun lien'],
        answer: 1,
        explain: '« Donc » est une conjonction de coordination : les propositions sont coordonnées.',
      },
      {
        id: 'pc-q2',
        type: 'associe',
        question: 'Classez chaque lien.',
        pairs: [
          ['« ; » (point-virgule)', 'Juxtaposition'],
          ['« mais »', 'Coordination'],
          ['« parce que »', 'Subordination'],
        ],
        explain: 'La ponctuation juxtapose, « mais » coordonne, « parce que » subordonne une proposition de cause.',
      },
    ],
    synthese: ['Plusieurs verbes = phrase complexe.', 'Juxtaposer, coordonner, subordonner.', 'La subordonnée dépend de la principale.'],
    keywords: ['phrase complexe', 'juxtaposition', 'coordination', 'subordination', 'proposition', 'relative', 'complétive'],
  },
  {
    id: 'champ-lexical-bac',
    title: 'Le champ lexical',
    minutes: 30,
    objectives: ['définir le champ lexical ;', 'repérer un champ lexical dans un texte ;', 'analyser son rôle dans l’interprétation.'],
    observation: {
      label: 'Observez',
      text: '« Soupe, pommes de terre, pain dur, miettes, faim » — tous ces mots appartiennent au même univers : celui de la pauvreté alimentaire dans « Aux champs ».',
    },
    sections: [
      {
        kind: 'p',
        text: 'Le champ lexical est l’ensemble des mots (noms, verbes, adjectifs, adverbes) qui se rapportent à un même thème ou à une même idée. Repérer un champ lexical, c’est comprendre ce sur quoi le texte insiste.',
      },
      {
        kind: 'liste',
        title: 'Comment le repérer ?',
        items: [
          'Chercher les mots du même thème : la mer → vague, écume, marée, navire, rivage.',
          'Inclure les synonymes et les dérivés : riche, richesse, enrichir.',
          'Compter les occurrences : un champ lexical répété est un indice majeur d’interprétation.',
        ],
      },
      {
        kind: 'note',
        tone: 'astuce',
        text: 'Dans une analyse, ne dites jamais « il y a le champ lexical de X » sans citer au moins trois mots du texte et sans expliquer l’effet produit.',
      },
    ],
    rule: [
      'Champ lexical = ensemble des mots se rapportant à un même thème.',
      'Il se construit avec noms, verbes, adjectifs, synonymes et dérivés.',
      'Son rôle : insister, créer une atmosphère, orienter l’interprétation.',
    ],
    examples: [
      'Dans « Aux champs » : soupe, pommes de terre, marmaille, délabrées → champ lexical de la pauvreté.',
      'Dans « Le dernier jour d’un condamné » : échafaud, guillotine, bourreau, couteau → champ lexical de la mort.',
      'Dans « Antigone » : loi, décret, interdit, obéir → champ lexical de la loi.',
    ],
    exercises: [
      {
        id: 'cl-q1',
        type: 'qcm',
        question: 'Quel ensemble forme un champ lexical cohérent ?',
        options: ['Mer, écume, marée, rivage', 'Mer, piano, route, idée', 'Chaise, courir, bleu, hier', 'Aucun des ensembles'],
        answer: 0,
        explain: 'Mer, écume, marée et rivage se rapportent tous au même thème : l’univers marin.',
      },
      {
        id: 'cl-q2',
        type: 'vf',
        question: 'Vrai ou faux ? Un champ lexical peut être composé de mots de natures différentes (noms, verbes, adjectifs).',
        vfAnswer: true,
        explain: 'Vrai. « Nager » (verbe), « nageur » (nom), « aquatique » (adjectif) participent du même champ lexical.',
      },
    ],
    synthese: ['Mots d’un même thème = champ lexical.', 'Toutes natures de mots peuvent y contribuer.', 'Répété, il oriente l’interprétation du texte.'],
    keywords: ['champ lexical', 'lexique', 'thème', 'synonymes', 'interprétation'],
  },
  {
    id: 'indices-enonciation',
    title: 'Les indices de l’énonciation',
    minutes: 35,
    objectives: ['définir l’énonciation ;', 'repérer les indices d’énonciation (personnes, temps, lieux) ;', 'identifier la situation d’énonciation d’un texte.'],
    observation: {
      label: 'Observez',
      text: '« Je vous écris aujourd’hui, ici, de ma prison. » — Qui parle ? à qui ? quand ? où ? Le texte porte les marques de celui qui l’a produit : ce sont les indices de l’énonciation.',
    },
    sections: [
      {
        kind: 'p',
        text: 'L’énonciation est l’acte par lequel un énonciateur produit un énoncé pour un destinataire, dans un lieu et un moment donnés. Les indices (ou embrayeurs) sont les traces de cette situation dans le texte.',
      },
      {
        kind: 'liste',
        title: 'Les principaux indices',
        items: [
          'Les pronoms personnels : je/tu (implication), il/elle (mise à distance).',
          'Les possessifs et démonstratifs : mon, ce, cette…',
          'Les temps verbaux : présent d’énonciation, passé composé vs passé simple.',
          'Les indicateurs spatio-temporels : ici, maintenant, aujourd’hui, hier.',
          'Les marques de subjectivité : hélas, heureusement, interrogations, exclamations.',
        ],
      },
      {
        kind: 'note',
        tone: 'astuce',
        text: 'Posez toujours les quatre questions : Qui parle ? À qui ? Où ? Quand ? Les réponses dessinent la situation d’énonciation.',
      },
    ],
    rule: [
      'L’énonciation = l’acte de produire un énoncé (énonciateur → destinataire, lieu, moment).',
      'Indices : pronoms (je/tu), possessifs, temps verbaux, indicateurs de temps et de lieu, marques de subjectivité.',
      'Un récit sans « je » ni repères présents est « coupé » de la situation d’énonciation.',
    ],
    examples: [
      '« Je souffre ici, maintenant » → je, ici, maintenant : indices forts d’énonciation.',
      '« Il partit un matin » → aucun je/tu, temps du récit : énoncé coupé de la situation d’énonciation.',
      '« Hélas ! faut-il mourir ? » → exclamation + interrogation : subjectivité marquée.',
    ],
    exercises: [
      {
        id: 'ie-q1',
        type: 'qcm',
        question: 'Quel mot n’est PAS un indice d’énonciation ?',
        options: ['« je »', '« aujourd’hui »', '« ici »', '« table »'],
        answer: 3,
        explain: '« Table » est un simple nom commun : il ne renvoie ni à la personne, ni au lieu, ni au moment de l’énonciation.',
      },
      {
        id: 'ie-q2',
        type: 'complete',
        question: 'Complétez la phrase.',
        sentence: 'Celui qui produit l’énoncé s’appelle l’___.',
        answers: ['énonciateur', 'enonciateur'],
        explain: 'L’énonciateur (celui qui parle/écrit) s’adresse à un destinataire (énonciataire) dans une situation donnée.',
      },
    ],
    synthese: ['Énonciation : qui parle, à qui, où, quand.', 'Indices : pronoms, possessifs, temps, indicateurs, subjectivité.', 'Les embrayeurs ancrent le texte dans sa situation.'],
    keywords: ['énonciation', 'énonciateur', 'destinataire', 'embrayeurs', 'indices', 'je', 'ici', 'maintenant'],
  },
  {
    id: 'enonce-ancr-coupe',
    title: 'L’énoncé ancré et l’énoncé coupé de la situation d’énonciation',
    minutes: 40,
    objectives: ['distinguer énoncé ancré et énoncé coupé ;', 'reconnaître les systèmes de temps de chaque plan ;', 'classer des énoncés selon leur plan.'],
    observation: {
      label: 'Comparez',
      text: '« Je t’écris ce soir pour te dire mon inquiétude. » (ancré) — « Le roi ordonna qu’on enterrât le corps avant l’aube. » (coupé). Deux plans d’énonciation, deux systèmes temporels.',
    },
    sections: [
      {
        kind: 'tableau',
        title: 'Les deux plans d’énonciation',
        headers: ['', 'Énoncé ancré', 'Énoncé coupé'],
        rows: [
          ['Situation', 'Lié au moment où l’on parle', 'Détaché de la situation d’énonciation'],
          ['Personnes', 'Je / tu / nous / vous', 'Il / elle / ils'],
          ['Temps', 'Présent, passé composé, futur', 'Passé simple, imparfait, plus-que-parfait'],
          ['Indicateurs', 'Ici, maintenant, aujourd’hui', 'Là, ce jour-là, la veille'],
          ['Genres', 'Lettre, dialogue, discours, journal', 'Récit, conte, roman au passé'],
        ],
      },
      {
        kind: 'p',
        text: 'L’énoncé ancré s’inscrit dans la situation d’énonciation : le « je » parle à un « tu », ici et maintenant. L’énoncé coupé raconte un monde autonome : le récit au passé simple ne dépend plus du moment où l’on parle. Un même texte peut alterner les deux plans — « Le dernier jour d’un condamné » est ancré (journal intime), « Aux champs » est coupé (récit).',
      },
      {
        kind: 'note',
        tone: 'astuce',
        text: 'Astuce de repérage : cherchez le « maintenant » du texte. S’il existe (ici, aujourd’hui, présent d’énonciation), l’énoncé est ancré ; sinon, il est coupé.',
      },
    ],
    rule: [
      'Énoncé ancré : lié à la situation d’énonciation (je/tu, présent, passé composé, futur, ici/maintenant).',
      'Énoncé coupé : détaché de la situation (il, passé simple/imparfait, là/ce jour-là).',
      'Le choix du plan détermine le système des temps du texte.',
    ],
    examples: [
      '« Aujourd’hui, maman est morte. » (Camus) → ancré : aujourd’hui, présent.',
      '« Il était une fois un roi… » → coupé : imparfait de récit, aucun ancrage.',
      '« Je vous écris, monsieur, pour protester » (Zola) → ancré : je/vous, présent.',
    ],
    exercises: [
      {
        id: 'ea-q1',
        type: 'qcm',
        question: '« Hier, je suis allé au marché et j’ai acheté du pain. » Quel plan d’énonciation ?',
        options: ['Énoncé coupé', 'Énoncé ancré', 'Ni l’un ni l’autre', 'Les deux à la fois'],
        answer: 1,
        explain: 'Le « je » et le passé composé rattachent l’énoncé à la situation d’énonciation : plan ancré.',
      },
      {
        id: 'ea-q2',
        type: 'associe',
        question: 'Associez chaque marque à son plan.',
        pairs: [
          ['« je » et « maintenant »', 'Énoncé ancré'],
          ['« il » et « ce jour-là »', 'Énoncé coupé'],
          ['Passé simple du récit', 'Énoncé coupé'],
        ],
        explain: 'Je/maintenant ancrent le texte ; il/ce jour-là/passé simple le coupent de la situation d’énonciation.',
      },
    ],
    synthese: ['Ancré = je/tu + présent/PC/futur + ici/maintenant.', 'Coupé = il + passé simple/imparfait + là/ce jour-là.', 'Un texte peut alterner les deux plans.'],
    keywords: ['énoncé ancré', 'énoncé coupé', 'situation d’énonciation', 'plan d’énonciation', 'temps du récit'],
  },
];

/* ————————————————————————————————————————————
   RHÉTORIQUE — figures de style
   ———————————————————————————————————————————— */

export interface FigureStyle {
  id: string;
  name: string;
  definition: string;
  examples: string[];
  quiz: { question: string; options: string[]; answer: number; explain: string };
}

export const figures: FigureStyle[] = [
  {
    id: 'comparaison',
    name: 'La comparaison',
    definition: 'Rapproche un comparé et un comparant à l’aide d’un outil de comparaison (comme, tel, semblable à, ainsi que, sembler, ressembler à, plus… que…).',
    examples: [
      '« Les deux chaumières semblaient deux mendiants. » (Maupassant)',
      '« La terre est bleue comme une orange. » (Éluard)',
      '« Il est fort comme un lion. »',
    ],
    quiz: {
      question: '« Sa voix éclata comme un tonnerre. » Quelle figure ?',
      options: ['Métaphore', 'Comparaison', 'Hyperbole', 'Anaphore'],
      answer: 1,
      explain: 'L’outil « comme » relie la voix (comparé) au tonnerre (comparant) : comparaison.',
    },
  },
  {
    id: 'metaphore',
    name: 'La métaphore',
    definition: 'Rapproche deux réalités sans outil de comparaison : elle fusionne comparé et comparant, ou remplace l’un par l’autre. Filée, elle se développe sur plusieurs phrases.',
    examples: [
      '« Ma jeunesse ne fut qu’un ténébreux orage. » (Baudelaire)',
      '« L’or du soir qui tombe. »',
      '« Cette marmaille vivait de grand air. » (métaphore ironique de la faim)',
    ],
    quiz: {
      question: '« L’homme est un loup pour l’homme. » Quelle figure ?',
      options: ['Comparaison', 'Métaphore', 'Oxymore', 'Litote'],
      answer: 1,
      explain: 'Aucun outil de comparaison : l’homme est directement identifié au loup → métaphore.',
    },
  },
  {
    id: 'personnification',
    name: 'La personnification',
    definition: 'Attribue des comportements, des sentiments ou des paroles humains à une chose, un animal ou une idée abstraite.',
    examples: [
      '« Le vent gémit dans les branches. »',
      '« La maison semblait pleurer son maître. »',
      '« La nuit avala Charlot. »',
    ],
    quiz: {
      question: '« La forêt m’écoute et me regarde. » Quelle figure ?',
      options: ['Personnification', 'Antithèse', 'Gradation', 'Synecdoque'],
      answer: 0,
      explain: 'Écouter et regarder sont des actions humaines prêtées à la forêt : personnification.',
    },
  },
  {
    id: 'antithese',
    name: 'L’antithèse',
    definition: 'Oppose deux idées, deux mots ou deux images dans une même phrase ou un même passage pour renforcer le contraste.',
    examples: [
      '« Je vis, je meurs ; je me brûle et me noie. » (Louise Labé)',
      '« Certains aimaient, d’autres haïssaient. »',
      '« La vertu punie, le vice récompensé. » (fin d’« Aux champs »)',
    ],
    quiz: {
      question: '« Ici c’est la nuit, là-bas c’est le jour. » Quelle figure ?',
      options: ['Oxymore', 'Antithèse', 'Anaphore', 'Métonymie'],
      answer: 1,
      explain: 'Deux idées contraires (nuit/jour) sont opposées dans la même phrase : antithèse.',
    },
  },
  {
    id: 'antiphrase',
    name: 'L’antiphrase',
    definition: 'Dit le contraire de ce que l’on pense, avec une intention ironique : c’est la forme la plus courante de l’ironie.',
    examples: [
      '« Quel courage ! » dit à quelqu’un qui a fui.',
      '« C’est du propre ! » devant un travail bâclé.',
      '« Bravo, tu as encore réussi à arriver en retard. »',
    ],
    quiz: {
      question: 'Devant un élève qui dort en classe, le professeur lance : « Voilà un élève passionné ! » Quelle figure ?',
      options: ['Hyperbole', 'Antiphrase', 'Comparaison', 'Gradation'],
      answer: 1,
      explain: 'Le professeur dit l’inverse de sa pensée pour se moquer : antiphrase ironique.',
    },
  },
  {
    id: 'oxymore',
    name: 'L’oxymore',
    definition: 'Allie deux mots de sens contraire à l’intérieur d’un même groupe de mots, créant une alliance paradoxale.',
    examples: [
      '« Cette obscure clarté qui tombe des étoiles. » (Corneille)',
      '« Un silence assourdissant. »',
      '« Une douce violence. »',
    ],
    quiz: {
      question: '« Un mort vivant. » Quelle figure ?',
      options: ['Antithèse', 'Oxymore', 'Métaphore', 'Répétition'],
      answer: 1,
      explain: 'Deux termes contraires sont collés dans le même groupe nominal : oxymore (l’antithèse, elle, oppose à l’échelle de la phrase).',
    },
  },
  {
    id: 'hyperbole',
    name: 'L’hyperbole',
    definition: 'Exagère la réalité, par amplification ou par atténuation impossible, pour frapper l’imagination.',
    examples: [
      '« Je meurs de faim. »',
      '« Je te l’ai dit mille fois. »',
      '« Un fracas à réveiller les morts. »',
    ],
    quiz: {
      question: '« Il pleurait des rivières de larmes. » Quelle figure ?',
      options: ['Litote', 'Hyperbole', 'Antithèse', 'Métonymie'],
      answer: 1,
      explain: 'Des larmes devenues « rivières » : exagération frappante → hyperbole.',
    },
  },
  {
    id: 'gradation',
    name: 'La gradation',
    definition: 'Dispose des termes d’intensité croissante (ascendante) ou décroissante (descendante) pour amplifier l’effet.',
    examples: [
      '« Va, cours, vole et nous venge. » (Corneille)',
      '« Je me meurs, je suis mort, je suis enterré. » (Molière)',
      '« Un soupir, un regret, un murmure, un cri. »',
    ],
    quiz: {
      question: '« Je me meurs, je suis mort, je suis enterré. » Quelle figure ?',
      options: ['Gradation ascendante', 'Gradation descendante', 'Oxymore', 'Anaphore seule'],
      answer: 0,
      explain: 'L’intensité croît du soupir de la mort (« je me meurs ») jusqu’à l’enterrement : gradation ascendante (avec anaphore de « je »).',
    },
  },
  {
    id: 'enumeration',
    name: 'L’énumération',
    definition: 'Juxtapose plusieurs termes de même nature pour amplifier ou préciser une idée ; poussée à l’excès, elle devient une accumulation.',
    examples: [
      '« Adieu, veau, vache, cochon, couvée. » (La Fontaine)',
      '« Il fallait des cahiers, des plumes, de l’encre et du courage. »',
      '« Soupe, pommes de terre, pain dur, grand air : tout leur repas. »',
    ],
    quiz: {
      question: '« J’ai acheté des pommes, des poires, des cerises, des prunes. » Quelle figure ?',
      options: ['Gradation', 'Énumération', 'Antithèse', 'Hyperbole'],
      answer: 1,
      explain: 'Plusieurs termes de même nature juxtaposés sans ordre d’intensité : énumération.',
    },
  },
  {
    id: 'anaphore',
    name: 'L’anaphore',
    definition: 'Répète le même mot (ou groupe de mots) en tête de phrases, de vers ou de propositions successives pour marteler une idée.',
    examples: [
      '« Rome, l’unique objet de mon ressentiment ! / Rome, à qui vient ton bras d’immoler mon amant ! » (Corneille)',
      '« Toujours aimer, toujours souffrir, toujours mourir. »',
      '« Moi, je refuse. Moi, je veux tout. Moi, je dis non. »',
    ],
    quiz: {
      question: '« Paris outragé ! Paris brisé ! Paris martyrisé ! mais Paris libéré ! » (De Gaulle). Quelle figure ?',
      options: ['Anaphore', 'Métonymie', 'Oxymore', 'Comparaison'],
      answer: 0,
      explain: '« Paris » est répété en tête de chaque membre de phrase : anaphore.',
    },
  },
  {
    id: 'repetition',
    name: 'La répétition',
    definition: 'Reprend un même mot ou une même formule à plusieurs reprises (sans position fixe) pour insister, créer un rythme ou traduire une obsession.',
    examples: [
      '« Condamné à mort ! Voilà cinq semaines que j’habite avec cette pensée, condamné à mort. » (Hugo)',
      '« L’eau, l’eau partout, et pas une goutte à boire. »',
      '« Non, non, et non ! »',
    ],
    quiz: {
      question: 'Quelle différence entre anaphore et répétition ?',
      options: ['Aucune différence', 'L’anaphore répète en tête de phrases ; la répétition n’a pas de position fixe', 'La répétition ne concerne que les vers', 'L’anaphore est toujours ironique'],
      answer: 1,
      explain: 'L’anaphore est une répétition en position initiale ; la répétition simple peut intervenir n’importe où dans le texte.',
    },
  },
  {
    id: 'metonymie',
    name: 'La métonymie',
    definition: 'Désigne une réalité par un autre mot lié par un rapport logique : le contenant pour le contenu, la cause pour l’effet, l’auteur pour l’œuvre, le symbole pour la chose.',
    examples: [
      '« Boire un verre » (le contenant pour le contenu).',
      '« Lire un Zola » (l’auteur pour l’œuvre).',
      '« Le trône a décidé » (le symbole pour le pouvoir).',
    ],
    quiz: {
      question: '« Toute la salle a applaudi. » Quelle figure ?',
      options: ['Synecdoque uniquement', 'Métonymie', 'Hyperbole', 'Antiphrase'],
      answer: 1,
      explain: 'La salle (le lieu) désigne le public (les personnes) : substitution par relation logique → métonymie.',
    },
  },
  {
    id: 'synecdoque',
    name: 'La synecdoque',
    definition: 'Cas particulier de métonymie fondé sur un rapport d’inclusion : la partie pour le tout, le tout pour la partie, la matière pour l’objet.',
    examples: [
      '« Une voile à l’horizon » (la partie pour le tout : le bateau).',
      '« Un fer » pour une épée (la matière pour l’objet).',
      '« La France a gagné » (le pays pour l’équipe : le tout pour la partie).',
    ],
    quiz: {
      question: '« Trente voiles quittèrent le port. » Quelle figure ?',
      options: ['Métaphore', 'Synecdoque', 'Anaphore', 'Litote'],
      answer: 1,
      explain: 'Les voiles (partie) désignent les navires (tout) : synecdoque de la partie pour le tout.',
    },
  },
];

/* ————————————————————————————————————————————
   PRODUCTION ÉCRITE & EXAMENS (téléchargements)
   ———————————————————————————————————————————— */

/* ————— MÉTHODOLOGIE DE L’ESSAI ARGUMENTÉ (méthode en couleurs) ————— */

export interface PePart {
  id: string;
  legend: string;
  band: string;
  badge: string;
  border: string;
  chip: string;
  soft: string;
  text: string;
}

/* Cinq couleurs pour distinguer les parties de l’essai */
export const peParts: PePart[] = [
  {
    id: 'intro',
    legend: 'Introduction',
    band: 'bg-bleu text-card',
    badge: 'bg-bleu text-card',
    border: 'border-bleu',
    chip: 'border-bleu/30 bg-bleu-tint text-bleu-deep',
    soft: 'bg-bleu-tint/40',
    text: 'text-bleu-deep',
  },
  {
    id: 'these',
    legend: 'Thèse',
    band: 'bg-rouge text-card',
    badge: 'bg-rouge text-card',
    border: 'border-rouge',
    chip: 'border-rouge/30 bg-rouge-tint text-rouge-deep',
    soft: 'bg-rouge-tint/50',
    text: 'text-rouge-deep',
  },
  {
    id: 'arg1',
    legend: 'Argument 1',
    band: 'bg-or text-navy',
    badge: 'bg-or text-navy',
    border: 'border-or',
    chip: 'border-or/40 bg-or-tint text-or-deep',
    soft: 'bg-or-tint/50',
    text: 'text-or-deep',
  },
  {
    id: 'arg2',
    legend: 'Argument 2',
    band: 'bg-teal-700 text-card',
    badge: 'bg-teal-700 text-card',
    border: 'border-teal-600',
    chip: 'border-teal-600/30 bg-teal-50 text-teal-800',
    soft: 'bg-teal-50',
    text: 'text-teal-800',
  },
  {
    id: 'conclusion',
    legend: 'Conclusion',
    band: 'bg-emerald-700 text-card',
    badge: 'bg-emerald-700 text-card',
    border: 'border-emerald-700',
    chip: 'border-emerald-700/30 bg-emerald-50 text-emerald-800',
    soft: 'bg-emerald-50',
    text: 'text-emerald-800',
  },
];

export interface PeStep {
  id: string;
  part: string;
  num: string;
  label: string;
  instruction: string;
  formulas: string[];
}

export const peSteps: PeStep[] = [
  {
    id: 'amener',
    part: 'intro',
    num: '1',
    label: 'Amener le sujet',
    instruction: 'Une seule phrase simple ou complexe pour : définir le thème, le situer dans son contexte social ou dans le contexte de l’œuvre.',
    formulas: [],
  },
  {
    id: 'opinions',
    part: 'intro',
    num: '2',
    label: 'Identifier les opinions opposées',
    instruction: 'Une seule phrase complexe :',
    formulas: ['« Certains pensent que… tandis que d’autres estiment que… »', '« Si pour certains, …, pour d’autres, … »'],
  },
  {
    id: 'problematique',
    part: 'intro',
    num: '3',
    label: 'Reformuler la problématique',
    instruction: 'Une seule phrase interrogative qui reprend le sujet avec vos propres mots :',
    formulas: ['Faut-il … ?', 'Est-il préférable de … ?', 'Doit-on vraiment … ?'],
  },
  {
    id: 'these',
    part: 'these',
    num: '1',
    label: 'Exprimer la thèse',
    instruction: 'Une seule phrase simple ou complexe introduite par :',
    formulas: ['« Je pense que… »', '« J’estime que… »', '« À mon avis… »'],
  },
  {
    id: 'arg1',
    part: 'arg1',
    num: '2',
    label: 'Premier argument',
    instruction: 'Une seule phrase simple introduite par :',
    formulas: ['D’abord,', 'De prime abord,', 'D’une part,', 'Premièrement…'],
  },
  {
    id: 'explication1',
    part: 'arg1',
    num: 'a',
    label: 'Explication',
    instruction: 'Une seule phrase complexe introduite par :',
    formulas: ['En effet,'],
  },
  {
    id: 'raisonnement1',
    part: 'arg1',
    num: 'b',
    label: 'Raisonnement',
    instruction: 'Une seule phrase complexe exprimant le raisonnement par l’absurde ou une concession suivie d’une réfutation :',
    formulas: ['Supposons que… / Au cas où…', 'Certes… mais…', 'Il est vrai que… néanmoins…'],
  },
  {
    id: 'exemple1',
    part: 'arg1',
    num: 'c',
    label: 'Exemple',
    instruction: 'Une seule phrase simple ou complexe introduite par :',
    formulas: ['Prenons l’exemple de…', 'Par exemple…'],
  },
  {
    id: 'conclusion1',
    part: 'arg1',
    num: 'd',
    label: 'Conclusion partielle',
    instruction: 'Une seule phrase simple ou complexe qui referme l’argument :',
    formulas: ['Donc, …', 'Alors, pensez-vous encore que …'],
  },
  {
    id: 'arg2',
    part: 'arg2',
    num: '3',
    label: 'Deuxième argument',
    instruction: 'Une seule phrase simple introduite par :',
    formulas: ['Ensuite,', 'De plus,', 'D’autre part,', 'Deuxièmement…'],
  },
  {
    id: 'explication2',
    part: 'arg2',
    num: 'a',
    label: 'Explication',
    instruction: 'Une seule phrase complexe introduite par :',
    formulas: ['En effet,'],
  },
  {
    id: 'raisonnement2',
    part: 'arg2',
    num: 'b',
    label: 'Raisonnement',
    instruction: 'Une seule phrase complexe exprimant le raisonnement par l’absurde ou une concession suivie d’une réfutation :',
    formulas: ['Supposons que… / Au cas où…', 'Certes… mais…', 'Il est vrai que… néanmoins…'],
  },
  {
    id: 'exemple2',
    part: 'arg2',
    num: 'c',
    label: 'Exemple',
    instruction: 'Une seule phrase simple ou complexe introduite par :',
    formulas: ['Prenons l’exemple de…', 'Par exemple…'],
  },
  {
    id: 'conclusion2',
    part: 'arg2',
    num: 'd',
    label: 'Conclusion partielle',
    instruction: 'Une seule phrase simple ou complexe qui referme l’argument :',
    formulas: ['Donc, …', 'Alors, pensez-vous encore que …'],
  },
  {
    id: 'confirmer',
    part: 'conclusion',
    num: '1',
    label: 'Confirmer la thèse',
    instruction: 'Une seule phrase qui reprend les deux mots clés des arguments développés.',
    formulas: [],
  },
];

/* Options du menu déroulant de l’exercice d’identification */
export const peElementOptions = Array.from(new Set(peSteps.map((s) => s.label)));

export const peSujet = 'Le comportement strict et autoritaire d’un professeur a-t-il un impact positif sur l’apprentissage ?';

export interface PeSentence {
  para: number;
  text: string;
  stepId: string;
}

/* L’exemple rédigé, phrase par phrase, avec l’étape de la méthodologie correspondante */
export const peSentences: PeSentence[] = [
  {
    para: 1,
    text: 'La figure du maître sévère, armé de sa règle et de sa voix forte, appartient encore à la mémoire de beaucoup d’élèves Marocains.',
    stepId: 'amener',
  },
  {
    para: 1,
    text: 'Certains pédagogues estiment que seule une main ferme fait travailler les enfants, tandis que des parents pensent que la peur éteint le goût d’apprendre.',
    stepId: 'opinions',
  },
  {
    para: 1,
    text: 'L’autorité stricte d’un enseignant favorise-t-elle réellement l’apprentissage ?',
    stepId: 'problematique',
  },
  {
    para: 2,
    text: 'À mon avis, un professeur trop strict et trop autoritaire nuit à l’apprentissage bien plus qu’il ne le sert.',
    stepId: 'these',
  },
  {
    para: 2,
    text: 'D’abord, la peur bloque l’intelligence de l’élève.',
    stepId: 'arg1',
  },
  {
    para: 2,
    text: 'En effet, l’apprenant qui redoute la punition consacre son énergie à se protéger au lieu de l’employer à comprendre, si bien que sa mémoire et son raisonnement se paralysent.',
    stepId: 'explication1',
  },
  {
    para: 2,
    text: 'Certes, un climat sévère impose le silence dans la classe, mais ce silence n’est souvent qu’une obéissance passive qui cache l’ennui et l’incompréhension.',
    stepId: 'raisonnement1',
  },
  {
    para: 2,
    text: 'Prenons l’exemple de Sidi Mohammed, dans La Boîte à Merveilles, qui tremble devant son maître et récite les versets sans en saisir le sens.',
    stepId: 'exemple1',
  },
  {
    para: 2,
    text: 'La sévérité produit donc de la crainte, non du savoir.',
    stepId: 'conclusion1',
  },
  {
    para: 3,
    text: 'Ensuite, la confiance développe la motivation de l’élève.',
    stepId: 'arg2',
  },
  {
    para: 3,
    text: 'En effet, lorsqu’un enseignant encourage, écoute et corrige sans humilier, l’élève ose poser des questions et transforme ses erreurs en progrès.',
    stepId: 'explication2',
  },
  {
    para: 3,
    text: 'Supposons que tous les professeurs gouvernent par la menace : l’école deviendra une prison.',
    stepId: 'raisonnement2',
  },
  {
    para: 3,
    text: 'Par exemple, les classes qui pratiquent le travail de groupe et l’encouragement obtiennent souvent de meilleurs résultats que celles où règne la crainte.',
    stepId: 'exemple2',
  },
  {
    para: 3,
    text: 'Alors pensez-vous encore qu’un professeur sévère enseigne ?',
    stepId: 'conclusion2',
  },
  {
    para: 4,
    text: 'En définitive, vu que la peur paralyse l’esprit et que la confiance nourrit la motivation, je reste convaincu qu’un professeur ferme mais bienveillant instruit mieux qu’un maître autoritaire.',
    stepId: 'confirmer',
  },
];

/* ————————————————————————————————————————————
   MÉTHODOLOGIE DE L’ESSAI ARGUMENTÉ (nouvelle méthode)
   Trois parties, chacune avec sa couleur :
   I. Introduction (bleu) · II. Développement (or) · III. Conclusion (rouge)
   ———————————————————————————————————————————— */

export type EssaiPartId = 'introduction' | 'developpement' | 'conclusion';

export interface EssaiSubStep {
  num: string;
  name: string;
  detail: string;
  connecteurs?: string[];
}

export interface EssaiStep {
  num: string;
  name: string;
  detail: string;
  connecteurs?: string[];
  sub?: EssaiSubStep[];
}

export interface EssaiPart {
  id: EssaiPartId;
  numeral: string;
  title: string;
  steps: EssaiStep[];
}

/* Sous-étapes communes aux deux arguments (a → d) */
const argumentSubSteps: EssaiSubStep[] = [
  {
    num: 'a',
    name: 'Explication',
    detail: 'Une seule phrase complexe qui développe l’argument.',
    connecteurs: ['En effet,'],
  },
  {
    num: 'b',
    name: 'Raisonnement',
    detail: 'Une seule phrase complexe exprimant le raisonnement par l’absurde ou une concession suivie d’une réfutation.',
    connecteurs: ['Supposons que…', 'Au cas où…', 'Certes… mais…', 'Il est vrai que… néanmoins…'],
  },
  {
    num: 'c',
    name: 'Exemple',
    detail: 'Une seule phrase simple ou complexe qui illustre l’argument.',
    connecteurs: ['Prenons l’exemple de…', 'Par exemple…'],
  },
  {
    num: 'd',
    name: 'Conclusion partielle',
    detail: 'Une seule phrase simple ou complexe qui referme l’argument.',
    connecteurs: ['Donc,…', 'Alors, pensez-vous encore que… ?'],
  },
];

export const essaiParts: EssaiPart[] = [
  {
    id: 'introduction',
    numeral: 'I',
    title: 'L’introduction',
    steps: [
      {
        num: '1',
        name: 'Amener le sujet',
        detail: 'Une seule phrase simple ou complexe pour définir le thème, le situer dans son contexte social ou dans le contexte de l’œuvre.',
      },
      {
        num: '2',
        name: 'Identifier les opinions opposées',
        detail: 'Une seule phrase complexe qui met face à face deux points de vue contraires.',
        connecteurs: ['Certains pensent que… tandis que d’autres estiment que…', 'Si pour certains…, pour d’autres,…'],
      },
      {
        num: '3',
        name: 'Reformuler la problématique',
        detail: 'Une seule phrase interrogative qui reprend le sujet avec vos propres mots.',
        connecteurs: ['Faut-il… ?', 'Est-il préférable de… ?', 'Doit-on vraiment… ?'],
      },
    ],
  },
  {
    id: 'developpement',
    numeral: 'II',
    title: 'Le développement',
    steps: [
      {
        num: '1',
        name: 'Exprimer la thèse',
        detail: 'Une seule phrase simple ou complexe qui donne votre position.',
        connecteurs: ['Je pense que…', 'J’estime que…', 'À mon avis…'],
      },
      {
        num: '2',
        name: 'Premier argument',
        detail: 'Une seule phrase simple, développée ensuite en quatre temps (a → d).',
        connecteurs: ['D’abord,', 'De prime abord,', 'D’une part,', 'Premièrement…'],
        sub: argumentSubSteps,
      },
      {
        num: '3',
        name: 'Deuxième argument',
        detail: 'Une seule phrase simple, construite comme le premier argument (a → d).',
        connecteurs: ['Ensuite,', 'D’autre part,', 'Deuxièmement…'],
        sub: argumentSubSteps,
      },
    ],
  },
  {
    id: 'conclusion',
    numeral: 'III',
    title: 'La conclusion',
    steps: [
      {
        num: '1',
        name: 'Confirmer la thèse',
        detail: 'Une seule phrase qui reprend les deux mots-clés des arguments développés.',
      },
    ],
  },
];

/* Les éléments à identifier dans l’exercice */
export const essaiElements = [
  'Amener le sujet',
  'Identifier les opinions opposées',
  'Reformuler la problématique',
  'Exprimer la thèse',
  'Premier argument',
  'Explication',
  'Raisonnement',
  'Exemple',
  'Conclusion partielle',
  'Deuxième argument',
  'Confirmer la thèse',
];

export interface EssaiPhrase {
  text: string;
  part: EssaiPartId;
  element: string;
}

/* L’exemple rédigé, découpé phrase par phrase */
export const essaiExemple = {
  sujet: 'Le comportement strict et autoritaire d’un professeur a-t-il un impact positif sur l’apprentissage ?',
  paragraphes: [
    [
      {
        part: 'introduction',
        element: 'Amener le sujet',
        text: 'La figure du maître sévère, armé de sa règle et de sa voix forte, appartient encore à la mémoire de beaucoup d’élèves marocains.',
      },
      {
        part: 'introduction',
        element: 'Identifier les opinions opposées',
        text: 'Certains pédagogues estiment que seule une main ferme fait travailler les enfants, tandis que des parents pensent que la peur éteint le goût d’apprendre.',
      },
      {
        part: 'introduction',
        element: 'Reformuler la problématique',
        text: 'L’autorité stricte d’un enseignant favorise-t-elle réellement l’apprentissage ?',
      },
    ],
    [
      {
        part: 'developpement',
        element: 'Exprimer la thèse',
        text: 'À mon avis, un professeur trop strict et trop autoritaire nuit à l’apprentissage bien plus qu’il ne le sert.',
      },
      {
        part: 'developpement',
        element: 'Premier argument',
        text: 'D’abord, la peur bloque l’intelligence de l’élève.',
      },
      {
        part: 'developpement',
        element: 'Explication',
        text: 'En effet, l’apprenant qui redoute la punition consacre son énergie à se protéger au lieu de l’employer à comprendre, si bien que sa mémoire et son raisonnement se paralysent.',
      },
      {
        part: 'developpement',
        element: 'Raisonnement',
        text: 'Certes, un climat sévère impose le silence dans la classe, mais ce silence n’est souvent qu’une obéissance passive qui cache l’ennui et l’incompréhension.',
      },
      {
        part: 'developpement',
        element: 'Exemple',
        text: 'Prenons l’exemple de Sidi Mohammed, dans La Boîte à Merveilles, qui tremble devant son maître et récite les versets sans en saisir le sens.',
      },
      {
        part: 'developpement',
        element: 'Conclusion partielle',
        text: 'La sévérité produit donc de la crainte, non du savoir.',
      },
    ],
    [
      {
        part: 'developpement',
        element: 'Deuxième argument',
        text: 'Ensuite, la confiance développe la motivation de l’élève.',
      },
      {
        part: 'developpement',
        element: 'Explication',
        text: 'En effet, lorsqu’un enseignant encourage, écoute et corrige sans humilier, l’élève ose poser des questions et transforme ses erreurs en progrès.',
      },
      {
        part: 'developpement',
        element: 'Raisonnement',
        text: 'Supposons que tous les professeurs gouvernent par la menace : l’école deviendra une prison.',
      },
      {
        part: 'developpement',
        element: 'Exemple',
        text: 'Par exemple, les classes qui pratiquent le travail de groupe et l’encouragement obtiennent souvent de meilleurs résultats que celles où règne la crainte.',
      },
      {
        part: 'developpement',
        element: 'Conclusion partielle',
        text: 'Alors pensez-vous encore qu’un professeur sévère enseigne ?',
      },
    ],
    [
      {
        part: 'conclusion',
        element: 'Confirmer la thèse',
        text: 'En définitive, vu que la peur paralyse l’esprit et que la confiance nourrit la motivation, je reste convaincu qu’un professeur ferme mais bienveillant instruit mieux qu’un maître autoritaire.',
      },
    ],
  ] as EssaiPhrase[][],
};

export const productionEcrite = {
  title: 'Méthodologie de l’essai argumenté',
  description:
    'La méthode complète en couleurs — introduction, thèse, deux arguments, conclusion — avec l’exemple rédigé annoté et un exercice d’identification.',
  filename: 'methodologie-essai-argumente.txt',
  content: `MÉTHODOLOGIE DE L’ESSAI ARGUMENTÉ — 1ère année du Bac
Plateforme MERNISSI JALIL — mernissijalil.com
Code couleurs : [BLEU] Introduction · [ROUGE] Thèse · [OR] Argument 1 · [CANARD] Argument 2 · [VERT] Conclusion

I. L’INTRODUCTION [BLEU]
1. Amener le sujet : une seule phrase simple ou complexe pour définir le thème, le situer dans son contexte social ou dans le contexte de l’œuvre.
2. Identifier les opinions opposées : une seule phrase complexe — « Certains pensent que… tandis que d’autres estiment que… » / « Si pour certains, …, pour d’autres, … »
3. Reformuler la problématique : une seule phrase interrogative qui reprend le sujet avec vos propres mots — Faut-il … ? / Est-il préférable de … ? / Doit-on vraiment … ?

II. LE DÉVELOPPEMENT
1. [ROUGE] Exprimer la thèse : une seule phrase simple ou complexe introduite par « Je pense que… », « J’estime que… », « À mon avis… ».
2. [OR] Premier argument : une seule phrase simple introduite par D’abord, De prime abord, D’une part, Premièrement…
   a. Explication : une seule phrase complexe introduite par En effet,
   b. Raisonnement : raisonnement par l’absurde ou concession suivie d’une réfutation — Supposons que… / Au cas où… — Certes… mais… / Il est vrai que… néanmoins…
   c. Exemple : une seule phrase simple ou complexe introduite par Prenons l’exemple de… / Par exemple…
   d. Conclusion partielle : une seule phrase qui referme l’argument — Donc, … / Alors, pensez-vous encore que …
3. [CANARD] Deuxième argument : une seule phrase simple introduite par Ensuite, De plus, D’autre part, Deuxièmement…
   a. Explication — b. Raisonnement — c. Exemple — d. Conclusion partielle (mêmes règles que pour le premier argument).

III. LA CONCLUSION [VERT]
1. Confirmer la thèse : une seule phrase qui reprend les deux mots clés des arguments développés.

EXEMPLE RÉDIGÉ
Sujet : Le comportement strict et autoritaire d’un professeur a-t-il un impact positif sur l’apprentissage ?

[BLEU · Amener le sujet] La figure du maître sévère, armé de sa règle et de sa voix forte, appartient encore à la mémoire de beaucoup d’élèves Marocains. [BLEU · Opinions opposées] Certains pédagogues estiment que seule une main ferme fait travailler les enfants, tandis que des parents pensent que la peur éteint le goût d’apprendre. [BLEU · Problématique] L’autorité stricte d’un enseignant favorise-t-elle réellement l’apprentissage ?
[ROUGE · Thèse] À mon avis, un professeur trop strict et trop autoritaire nuit à l’apprentissage bien plus qu’il ne le sert. [OR · Argument 1] D’abord, la peur bloque l’intelligence de l’élève. [OR · Explication] En effet, l’apprenant qui redoute la punition consacre son énergie à se protéger au lieu de l’employer à comprendre, si bien que sa mémoire et son raisonnement se paralysent. [OR · Raisonnement] Certes, un climat sévère impose le silence dans la classe, mais ce silence n’est souvent qu’une obéissance passive qui cache l’ennui et l’incompréhension. [OR · Exemple] Prenons l’exemple de Sidi Mohammed, dans La Boîte à Merveilles, qui tremble devant son maître et récite les versets sans en saisir le sens. [OR · Conclusion partielle] La sévérité produit donc de la crainte, non du savoir.
[CANARD · Argument 2] Ensuite, la confiance développe la motivation de l’élève. [CANARD · Explication] En effet, lorsqu’un enseignant encourage, écoute et corrige sans humilier, l’élève ose poser des questions et transforme ses erreurs en progrès. [CANARD · Raisonnement] Supposons que tous les professeurs gouvernent par la menace : l’école deviendra une prison. [CANARD · Exemple] Par exemple, les classes qui pratiquent le travail de groupe et l’encouragement obtiennent souvent de meilleurs résultats que celles où règne la crainte. [CANARD · Conclusion partielle] Alors pensez-vous encore qu’un professeur sévère enseigne ?
[VERT · Confirmer la thèse] En définitive, vu que la peur paralyse l’esprit et que la confiance nourrit la motivation, je reste convaincu qu’un professeur ferme mais bienveillant instruit mieux qu’un maître autoritaire.`,
};

export interface ExamenItem {
  id: string;
  title: string;
  session: string;
  description: string;
  filename: string;
  content: string;
}

export const examens: ExamenItem[] = [
  {
    id: 'ex-regional-1',
    title: 'Examen régional — Sujet type n° 1',
    session: 'Session de juin',
    description: 'Texte narratif : questions de compréhension, de langue (champ lexical, énonciation) et de production écrite.',
    filename: 'examen-regional-sujet-1.txt',
    content: `EXAMEN RÉGIONAL — FRANÇAIS — 1ère ANNÉE DU BAC — SUJET TYPE N° 1
Plateforme MERNISSI JALIL — mernissijalil.com

I. COMPRÉHENSION (10 pts)
Texte : extrait narratif sur l’enfance et le souvenir.
1. Identifiez le type de texte et justifiez votre réponse (2 pts).
2. Relevez le champ lexical dominant et dites son rôle (2 pts).
3. « Le narrateur évoque ses souvenirs avec nostalgie. » Relevez deux indices qui le prouvent (2 pts).
4. Identifiez la figure de style : « sa mémoire était un grenier plein de trésors » et expliquez son effet (2 pts).
5. Relevez deux indices de la situation d’énonciation (2 pts).

II. LANGUE (6 pts)
1. Transformez au discours indirect : Il déclara : « Je garderai toujours cette image. » (2 pts)
2. Identifiez les propositions et le lien qui les unit : « Il écrivait souvent, car les mots le consolaient. » (2 pts)
3. Donnez un synonyme de « nostalgie » et employez-le dans une phrase (2 pts).

III. PRODUCTION ÉCRITE (4 pts)
« Les souvenirs d’enfance sont-ils utiles ? » Rédigez un paragraphe argumenté (8 à 10 lignes) avec une thèse, deux arguments et un exemple.`,
  },
  {
    id: 'ex-regional-2',
    title: 'Examen régional — Sujet type n° 2',
    session: 'Session de rattrapage',
    description: 'Texte descriptif : organisation de la description, modalisation, figures de style, transformation de phrases.',
    filename: 'examen-regional-sujet-2.txt',
    content: `EXAMEN RÉGIONAL — FRANÇAIS — 1ère ANNÉE DU BAC — SUJET TYPE N° 2
Plateforme MERNISSI JALIL — mernissijalil.com

I. COMPRÉHENSION (10 pts)
Texte : description d’un lieu abandonné (incipit réaliste).
1. Montrez que ce texte est une description : relevez trois indices (3 pts).
2. Quel ordre suit la description ? Justifiez (2 pts).
3. Relevez deux marques de modalisation et expliquez leur effet (2 pts).
4. Identifiez et expliquez : « la maison semblait retenir son souffle » (2 pts).
5. Quelle fonction remplit cette description ? Justifiez (1 pt).

II. LANGUE (6 pts)
1. Mettez à l’imparfait : « Il entre, regarde, s’approche de la fenêtre. » (2 pts)
2. Transformez en phrase complexe par subordination : « La pluie tombait. Nous sommes restés à l’abri. » (2 pts)
3. Relevez les adjectifs qualificatifs et précisez leur valeur (méliorative / péjorative) (2 pts).

III. PRODUCTION ÉCRITE (4 pts)
Décrivez un lieu de votre enfance en dix lignes : utilisez l’imparfait, des adjectifs, une comparaison et un champ lexical cohérent.`,
  },
  {
    id: 'ex-controle-boite',
    title: 'Contrôle — « La boîte à merveilles »',
    session: 'Contrôle continu',
    description: 'Questions sur l’œuvre : autobiographie, personnages, épisodes clés, le merveilleux et le quotidien.',
    filename: 'controle-boite-a-merveilles.txt',
    content: `CONTRÔLE — « LA BOÎTE À MERVEILLES » (Ahmed Séfrioui)
Plateforme MERNISSI JALIL — mernissijalil.com

1. Ce roman est autobiographique : donnez deux indices qui le prouvent (2 pts).
2. Présentez le narrateur : âge, caractère, particularité (2 pts).
3. Que contient la « boîte à merveilles » ? Que représente-t-elle pour l’enfant ? (2 pts)
4. Racontez brièvement un épisode marquant : l’Achoura, la ruine du père ou le retour du père (3 pts).
5. Le msid : quel rôle joue l’école dans le récit ? (2 pts)
6. Expliquez la place du surnaturel dans l’univers du roman (2 pts).
7. Production écrite : « L’imagination est-elle un refuge ou une fuite ? » — paragraphe argumenté (4 pts).`,
  },
  {
    id: 'ex-controle-condamne',
    title: 'Contrôle — « Le dernier jour d’un condamné »',
    session: 'Contrôle continu',
    description: 'Questions sur l’œuvre : le plaidoyer, l’écriture du moi, les lieux de la prison, la dénonciation.',
    filename: 'controle-dernier-jour-condamne.txt',
    content: `CONTRÔLE — « LE DERNIER JOUR D’UN CONDAMNÉ » (Victor Hugo)
Plateforme MERNISSI JALIL — mernissijalil.com

1. Pourquoi le condamné écrit-il son journal ? (2 pts)
2. L’auteur ne donne ni le nom du condamné ni son crime : pourquoi ce choix ? (2 pts)
3. Présentez la scène du ferrage des forçats : que dénonce-t-elle ? (3 pts)
4. La visite de Marie (chapitres 42-43) : racontez la scène et analysez sa force pathétique (3 pts).
5. En quoi ce roman est-il un plaidoyer contre la peine de mort ? Donnez deux arguments du texte (3 pts).
6. Production écrite : « Un écrivain doit-il s’engager dans ses œuvres ? » — paragraphe argumenté (4 pts).`,
  },
  {
    id: 'ex-controle-antigone',
    title: 'Contrôle — « Antigone »',
    session: 'Contrôle continu',
    description: 'Questions sur l’œuvre : la tragédie moderne, Antigone et Créon, le Prologue, la révolte.',
    filename: 'controle-antigone.txt',
    content: `CONTRÔLE — « ANTIGONE » (Jean Anouilh)
Plateforme MERNISSI JALIL — mernissijalil.com

1. Quel rôle joue le Prologue ? (2 pts)
2. Pourquoi Antigone veut-elle enterrer Polynice malgré l’interdit ? (2 pts)
3. Opposez Antigone et Ismène : caractère, attitude face au danger (3 pts).
4. « Vous me dégoûtez tous avec votre bonheur ! » — situez et expliquez cette réplique (3 pts).
5. Créon est-il seulement un tyran ? Nuancez votre réponse (3 pts).
6. En quoi s’agit-il d’une tragédie ? Rappelez les règles du genre et montrez qu’elles sont respectées (3 pts).
7. Production écrite : « Faut-il toujours obéir à la loi ? » — paragraphe argumenté (4 pts).`,
  },
];
