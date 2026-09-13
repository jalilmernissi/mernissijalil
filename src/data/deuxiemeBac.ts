/* ————————————————————————————————————————————
   2ème année du Baccalauréat
   Candide ou l'optimisme — Voltaire
   ———————————————————————————————————————————— */

export const deuxiemeBacBookUrl = 'https://1drv.ms/b/c/b40cc29fe01a6502/IQDYPn8rNH7XQKFJlEg9YrsUAUL7XueREWcmnnfbILrjHWo?e=cfbjFh';

/* ————————————————————————————————————————————
   Biographie de Voltaire
   ———————————————————————————————————————————— */

export const voltaireBio = {
  name: 'Voltaire',
  fullName: 'François-Marie Arouet',
  dates: '1694–1778',
  portrait: 'https://image.qwenlm.ai/generated-images/767c87c1-2dae-4f96-9814-e5cb032e771c/_result.png',
  portraitAlt: 'Portrait gravé de Voltaire',
  text: 'Voltaire, de son vrai nom François-Marie Arouet, est né à Paris en 1694 et mort en 1778. Écrivain, philosophe et homme des Lumières, il est l\'une des figures majeures du XVIIIe siècle français. Fils d\'un notaire, il fait ses études chez les jésuites au collège Louis-le-Grand. Esprit vif et critique, il se fait rapidement connaître par ses satires et ses écrits mordants contre l\'Ancien Régime, l\'Église et l\'intolérance. Emprisonné à la Bastille en 1717, il y compose sa tragédie Œdipe et prend le nom de Voltaire. Exilé en Angleterre de 1726 à 1729, il y découvre la philosophie de Locke et la pensée politique de Newton. À son retour, il publie les Lettres philosophiques qui lui valent de nouvelles persécutions. Il se retire ensuite à Cirey chez la marquise du Châtelet, puis à Potsdam auprès de Frédéric II de Prusse. En 1759, il publie Candide ou l\'Optimisme, conte philosophique qui connaît un immense succès. Voltaire défend toute sa vie la tolérance, la liberté de pensée et la justice. Il meurt à Paris en 1778, couvert de gloire.',
  oeuvres: [
    'Œdipe (1718)',
    'Lettres philosophiques (1734)',
    'Zadig (1747)',
    'Micromégas (1752)',
    'Candide ou l\'Optimisme (1759)',
    'Traité sur la tolérance (1763)',
    'Dictionnaire philosophique (1764)',
    'L\'Ingénu (1767)',
  ],
};

/* ————————————————————————————————————————————
   Résumés des 30 chapitres de Candide
   ———————————————————————————————————————————— */

export interface ChapitreCandide {
  num: number;
  title: string;
  summary: string;
}

export const chapitresCandide: ChapitreCandide[] = [
  {
    num: 1,
    title: 'Comment Candide fut élevé dans un beau château et comment il fut chassé',
    summary: 'Candide, jeune homme naïf, vit dans le château de Thunder-ten-tronckh en Westphalie. Élevé par le baron, il est instruit par le philosophe Pangloss qui enseigne que « tout est au mieux dans le meilleur des mondes ». Candide tombe amoureux de Cunégonde, fille du baron, et l\'embrasse. Surpris par le baron, il est chassé du château à grands coups de pied.',
  },
  {
    num: 2,
    title: 'Ce que devint Candide parmi les Bulgares',
    summary: 'Candide, errant sans argent ni ressources, est enrôlé de force dans l\'armée bulgare. Il découvre l\'horreur de la guerre : massacres, viols, destructions. Blessé, il est soigné puis mendie sa vie. Il retrouve Pangloss, devenu mendiant et couvert de maladies, qui lui explique que tout cela était nécessaire dans le meilleur des mondes.',
  },
  {
    num: 3,
    title: 'Comment Candide se sauva d\'entre les Bulgares',
    summary: 'Candide et Pangloss, mourants, sont recueillis par les Abares (alliés des Bulgares). Pangloss est pendu et Candide reçoit trente coups de bâton. Il est soigné par une vieille femme qui le conduit chez une dame : c\'est Cunégonde, survivante du massacre de son château. Elle raconte comment elle a été violée par un soldat bulgare puis vendue à un Juif, Don Issachar, qui la partage avec un Grand Inquisiteur.',
  },
  {
    num: 4,
    title: 'Comment Candide, ayant retrouvé sa chère Cunégonde, la retrouve expirante',
    summary: 'Don Issachar surprend Candide chez Cunégonde et le tue d\'un coup d\'épée. Candide, blessé, est soigné par la vieille femme. Le Grand Inquisiteur arrive et, furieux, fait enterrer Don Issachar. Cunégonde, partagée entre ses deux amants, propose à Candide de fuir avec elle à Buenos Aires.',
  },
  {
    num: 5,
    title: 'Tempête, naufrage, tremblement de terre',
    summary: 'Candide, Cunégonde et la vieille femme s\'embarquent pour Buenos Aires. Une tempête éclate, suivie d\'un tremblement de terre à Lisbonne. Trois personnes sont brûlées vives en autodafé pour apaiser la colère divine. Pangloss, miraculeusement survivant, est pendu. Candide, sauvé par la vieille femme, part avec Cunégonde pour le Paraguay.',
  },
  {
    num: 6,
    title: 'Comment on fit un beau feu de joie',
    summary: 'Récit du tremblement de terre de Lisbonne (1755). L\'Inquisition décide d\'organiser un autodafé pour prévenir de nouveaux séismes. Pangloss et deux autres personnes sont brûlés. Candide, témoin de cette horreur, s\'exclame : « S\'il n\'y a que un monde possible, pourquoi y souffrir tant de maux ? » Il part avec la vieille femme et Cunégonde.',
  },
  {
    num: 7,
    title: 'Comment la vieille femme prend soin de Candide',
    summary: 'La vieille femme raconte son histoire : fille d\'un pape, elle a connu la richesse puis la misère. Esclavagisée, violée, vendue, elle a tout perdu. Elle conduit Candide et Cunégonde au Paraguay, où le gouverneur don Fernando les accueille. Celui-ci tombe amoureux de Cunégonde et veut l\'épouser.',
  },
  {
    num: 8,
    title: 'Histoire d\'une vieille femme',
    summary: 'Suite du récit de la vieille femme : après avoir été esclave en Afrique, elle est vendue à un eunuque qui la conduit au sérail du sultan. Elle échappe à la mort lors d\'un massacre mais est capturée par des pirates. Vendue à nouveau, elle finit par s\'installer en Italie où elle devient servante.',
  },
  {
    num: 9,
    title: 'Comment Cunégonde, Candide, la vieille femme et un jésuite furent obligés de fuir',
    summary: 'Candide, furieux que don Fernando veuille épouser Cunégonde, le tue. Ils fuient avec la vieille femme et un jésuite, le baron de Thunder-ten-tronckh (frère de Cunégonde), qui s\'oppose au mariage de sa sœur avec un roturier. Candide le tue également et s\'enfuit.',
  },
  {
    num: 10,
    title: 'Comment Candide et la vieille femme arrivent à Cadix',
    summary: 'Candide et la vieille femme arrivent à Cadix, en Espagne. Une flotte part pour le Paraguay. Candide s\'engage comme soldat. La vieille femme est vendue comme esclave. Candide découvre que le gouverneur du Paraguay est le jésuite qu\'il a cru tuer.',
  },
  {
    num: 11,
    title: 'Comment la vieille femme devient esclave',
    summary: 'La vieille femme est achetée par un bey en Algérie. Elle vit dans le luxe mais souffre de la faim lors d\'une famine. Elle est vendue à un marchand russe qui la traite cruellement. Elle finit par s\'échapper et arrive en Italie.',
  },
  {
    num: 12,
    title: 'Suite des malheurs de la vieille femme',
    summary: 'En Italie, la vieille femme devient servante chez une princesse. Elle y rencontre Cunégonde, devenue la maîtresse du gouverneur du Paraguay. Les deux femmes se reconnaissent et se racontent leurs malheurs.',
  },
  {
    num: 13,
    title: 'Comment Cunégonde et la vieille femme sont obligées de fuir',
    summary: 'Cunégonde, lassée du gouverneur, s\'enfuit avec Candide et la vieille femme. Ils arrivent en Hollande où ils sont recueillis par un anabaptiste bienveillant, Jacques.',
  },
  {
    num: 14,
    title: 'Comment Candide et Cacambo sont reçus chez les jésuites du Paraguay',
    summary: 'Candide et son valet Cacambo arrivent au Paraguay, territoire des jésuites. Ils rencontrent le commandant, qui n\'est autre que le baron de Thunder-ten-tronckh, frère de Cunégonde, que Candide croyait avoir tué. Le baron refuse que Candide épouse sa sœur. Candide le tue.',
  },
  {
    num: 15,
    title: 'Comment Candide tue le frère de Cunégonde',
    summary: 'Suite du combat entre Candide et le baron. Candide, aidé de Cacambo, s\'enfuit en se déguisant avec la robe du jésuite mort. Ils traversent le territoire des Oreillons, peuple cannibale qui les capture.',
  },
  {
    num: 16,
    title: 'Rencontre de deux jeunes filles dans une prairie',
    summary: 'Candide et Cacambo, capturés par les Oreillons, sont sur le point d\'être mangés. Cacambo persuade les cannibales que Candide n\'est pas un jésuite mais leur ennemi. Ils sont libérés et poursuivent leur voyage.',
  },
  {
    num: 17,
    title: 'Arrivée de Candide et de son valet au pays d\'Eldorado',
    summary: 'Candide et Cacambo arrivent en Eldorado, pays utopique où l\'or et les pierres précieuses sont méprisés, où règnent la raison, la tolérance et le bonheur. Les habitants sont heureux, ignorants des guerres et de l\'intolérance religieuse. Candide et Cacambo sont accueillis avec bienveillance.',
  },
  {
    num: 18,
    title: 'Ce qu\'ils virent dans le pays d\'Eldorado',
    summary: 'Description détaillée de l\'Eldorado : palais magnifiques, sciences avancées, religion simple et tolérante, pas de prisons ni de tribunaux. Le roi accueille Candide et Cacambo avec générosité. Ceux-ci décident de partir, emportant des trésors, pour retrouver Cunégonde.',
  },
  {
    num: 19,
    title: 'Ce qui leur arriva à Surinam',
    summary: 'Candide et Cacambo arrivent à Surinam, colonie hollandaise. Ils y rencontrent un esclave noir mutilé (main et jambe coupées) qui leur raconte les horreurs de l\'esclavage. Candide, révolté, abandonne sa philosophie optimiste. Ils rencontrent le marchand Vanderdendur qui les arnaque.',
  },
  {
    num: 20,
    title: 'Ce qui leur arriva en mer',
    summary: 'Candide et Cacambo s\'embarquent pour Venise avec un nouveau valet, Martin, philosophe manichéen pessimiste. Pendant la traversée, ils perdent la plupart de leurs trésors dans une bataille navale. Candide désespère de retrouver Cunégonde.',
  },
  {
    num: 21,
    title: 'Arrivée en France',
    summary: 'Candide et Martin arrivent en France. Ils y observent les mœurs parisiennes : frivolité, médisance, opéra, politique. Candide tombe malade. Un abbé périgourdin les escroque. Ils rencontrent une marquise qui les accueille.',
  },
  {
    num: 22,
    title: 'Ce qui se passe en France',
    summary: 'Suite du séjour en France. Candide assiste à une représentation de tragédie, fréquente les salons, observe les querelles religieuses et politiques. Il rencontre un savant qui lui explique les divisions intellectuelles françaises. Candide, lassé, décide de partir pour Venise.',
  },
  {
    num: 23,
    title: 'Candide et Martin rencontrent un vieillard',
    summary: 'En Angleterre, Candide assiste à l\'exécution de l\'amiral Byng, fusillé pour n\'avoir pas tué assez d\'Anglais. Cette absurdité révolte Candide. Ils rencontrent six rois déchus qui dînent ensemble au carnaval de Venise.',
  },
  {
    num: 24,
    title: 'De Paquette et de Frère Giroflée',
    summary: 'À Venise, Candide rencontre Paquette, ancienne servante de Cunégonde, devenue prostituée, et le moine giroflée, qui se lamente de sa condition. Candide donne de l\'argent à tous deux.',
  },
  {
    num: 25,
    title: 'Visite au sénateur Pococurante',
    summary: 'Candide et Martin visitent le sénateur vénitien Pococurante, homme riche et blasé qui ne trouve de plaisir à rien. Il critique Homère, Virgile, Milton. Candide comprend que l\'ennui est le pire des maux.',
  },
  {
    num: 26,
    title: 'D\'un souper que Candide et Martin firent sur le canal avec six étrangers',
    summary: 'Lors d\'un souper sur le canal, Candide et Martin rencontrent six rois déchus (dont un tsar, un sultan, un empereur). Ils discutent de la vanité du pouvoir et de la fortune. Candide reconnaît l\'un d\'eux.',
  },
  {
    num: 27,
    title: 'Voyage de Candide en Angleterre',
    summary: 'Récit rétrospectif du voyage en Angleterre. Candide y observe la liberté politique mais aussi l\'intolérance religieuse et l\'absurdité de certaines lois. Il rencontre des savants et des philosophes.',
  },
  {
    num: 28,
    title: 'Ce qui arriva à Candide en Angleterre',
    summary: 'Suite du séjour anglais. Candide assiste à des débats philosophiques, observe les mœurs anglaises. Il apprend que Cunégonde est à Constantinople, réduite en esclavage.',
  },
  {
    num: 29,
    title: 'Comment Candide retrouva Cunégonde et la vieille femme',
    summary: 'Candide arrive à Constantinople. Il retrouve Cunégonde, devenue laide et acariâtre, et la vieille femme. Cunégonde exige que Candide l\'épouse. Celui-ci, dégoûté, hésite. Il rachète leur liberté.',
  },
  {
    num: 30,
    title: 'Conclusion : Il faut cultiver notre jardin',
    summary: 'Candide, Cunégonde, la vieille femme, Martin, Pangloss (retrouvé) et Cacambo s\'installent sur une petite ferme en Turquie. Chacun s\'ennuie. Ils rencontrent un vieux turc qui leur enseigne que le travail éloigne trois grands maux : l\'ennui, le vice et le besoin. Candide conclut : « Il faut cultiver notre jardin. » Pangloss persiste : « Tout est au mieux. » Candide répond : « Cela est bien dit, mais il faut cultiver notre jardin. »',
  },
];

/* ————————————————————————————————————————————
   Thèmes de Candide
   ———————————————————————————————————————————— */

export interface ThemeCandide {
  title: string;
  icon: string;
  description: string;
  exemples: string[];
}

export const themesCandide: ThemeCandide[] = [
  {
    title: 'L\'optimisme et la critique de Leibniz',
    icon: '🌍',
    description: 'Voltaire critique la philosophie de Leibniz et de Pope selon laquelle « tout est au mieux dans le meilleur des mondes ». Pangloss incarne cet optimisme aveugle qui refuse de voir la réalité du mal.',
    exemples: [
      'Pangloss justifie tous les maux par la nécessité',
      'Le tremblement de terre de Lisbonne (1755)',
      'L\'esclave mutilé de Surinam',
      'La conclusion : « Il faut cultiver notre jardin »',
    ],
  },
  {
    title: 'Le mal et la souffrance',
    icon: '⚡',
    description: 'Le conte multiplie les catastrophes naturelles et les cruautés humaines pour montrer l\'omniprésence du mal dans le monde. Voltaire refuse toute justification théologique de la souffrance.',
    exemples: [
      'La guerre entre Bulgares et Abares',
      'L\'esclavage et la mutilation',
      'L\'Inquisition et l\'autodafé',
      'Les maladies et les violences',
    ],
  },
  {
    title: 'Le voyage initiatique',
    icon: '🗺️',
    description: 'Candide parcourt le monde (Europe, Amérique, Orient) dans un voyage qui est une initiation. Chaque étape lui fait découvrir un aspect du mal et lui fait perdre ses illusions.',
    exemples: [
      'De la Westphalie au Paraguay',
      'L\'Eldorado, utopie perdue',
      'Constantinople, lieu de désillusion',
      'Le retour à la ferme',
    ],
  },
  {
    title: 'L\'utopie et l\'Eldorado',
    icon: '✨',
    description: 'L\'Eldorado représente un monde idéal : tolérance, raison, abondance sans cupidité. Mais Candide le quitte, montrant que l\'utopie est inaccessible et que l\'homme préfère l\'agitation au bonheur tranquille.',
    exemples: [
      'L\'or méprisé comme cailloux',
      'Pas de prisons ni de procès',
      'Le roi hospitalier et sage',
      'Le départ volontaire de Candide',
    ],
  },
  {
    title: 'La religion et l\'intolérance',
    icon: '⛪',
    description: 'Voltaire dénonce l\'intolérance religieuse, l\'Inquisition, les guerres de religion. Il oppose une religion naturelle et raisonnable aux dogmes et aux persécutions.',
    exemples: [
      'L\'autodafé de Lisbonne',
      'Les jésuites du Paraguay',
      'Les querelles théologiques',
      'Le turc tolérant de la fin',
    ],
  },
  {
    title: 'L\'amour et la désillusion',
    icon: '💔',
    description: 'L\'amour de Candide pour Cunégonde est le moteur du voyage. Mais Cunégonde, vieillie et aigrie, ne correspond plus à l\'idéal. L\'amour se transforme en devoir et en résignation.',
    exemples: [
      'Le baiser initial dans le château',
      'Les retrouvailles à Constantinople',
      'Cunégonde devenue laide',
      'Le mariage par devoir',
    ],
  },
  {
    title: 'Le travail et l\'action',
    icon: '🌱',
    description: 'La conclusion du conte valorise le travail comme remède à l\'ennui et au mal. « Il faut cultiver notre jardin » signifie agir concrètement plutôt que philosopher sur le monde.',
    exemples: [
      'Le vieux turc et son jardin',
      'Chacun trouve son occupation',
      'Le refus de la spéculation oisive',
      'L\'action contre la contemplation',
    ],
  },
  {
    title: 'La satire sociale et politique',
    icon: '🎭',
    description: 'Voltaire critique toutes les institutions : monarchie, noblesse, clergé, armée, justice. Chaque pays visité révèle une absurdité ou une injustice.',
    exemples: [
      'L\'exécution de l\'amiral Byng',
      'Les rois déchus de Venise',
      'L\'esclavage colonial',
      'La vanité des puissants',
    ],
  },
];

/* ————————————————————————————————————————————
   Leçons de langue : les propositions subordonnées
   ———————————————————————————————————————————— */

export interface LeconSubordonnee {
  id: string;
  title: string;
  definition: string;
  nature: string;
  fonction: string;
  outils: string[];
  exemples: string[];
  exercices: {
    question: string;
    options: string[];
    answer: number;
    explain: string;
  }[];
}

export const leconsSubordonnees: LeconSubordonnee[] = [
  {
    id: 'sub-relative',
    title: 'La proposition subordonnée relative',
    definition: 'La proposition subordonnée relative est introduite par un pronom relatif (qui, que, dont, où, lequel, etc.) et se rattache à un nom ou un pronom appelé antécédent.',
    nature: 'Elle est de nature adjectivale : elle se comporte comme un adjectif qualificatif épithète ou apposé.',
    fonction: 'Elle a la fonction de complément de l\'antécédent : elle peut être épithète liée (collée au nom) ou épithète détachée (séparée par une virgule).',
    outils: ['qui (sujet)', 'que/qui (COD)', 'dont (complément introduit par "de")', 'où (lieu ou temps)', 'lequel, laquelle, etc.', 'auquel, duquel, etc.'],
    exemples: [
      '« L\'homme qui parle est mon père. » (relative épithète liée, "qui" sujet de "parle")',
      '« Le livre que je lis est passionnant. » (relative épithète liée, "que" COD de "lis")',
      '« La ville où je suis né me manque. » (relative épithète liée, "où" complément de lieu)',
      '« Candide, qui est naïf, découvre le monde. » (relative épithète détachée)',
    ],
    exercices: [
      {
        question: '« La femme qui travaille ici est médecin. » Quelle est la nature de la subordonnée ?',
        options: ['Complétive', 'Relative', 'Circonstancielle', 'Interrogative'],
        answer: 1,
        explain: 'La subordonnée est introduite par "qui" et se rapporte au nom "femme" : c\'est une relative.',
      },
      {
        question: '« Le film que j\'ai vu est génial. » Quelle est la fonction de la subordonnée ?',
        options: ['Sujet', 'COD', 'Épithète liée du nom "film"', 'Complément circonstanciel'],
        answer: 2,
        explain: 'La relative "que j\'ai vu" complète le nom "film" : elle est épithète liée.',
      },
    ],
  },
  {
    id: 'sub-completive',
    title: 'La proposition subordonnée complétive (introduite par "que")',
    definition: 'La proposition subordonnée complétive est introduite par "que" (conjonction de subordination) et complète un verbe, un adjectif ou un nom. Elle ne se rapporte pas à un nom comme la relative.',
    nature: 'Elle est de nature nominale : elle se comporte comme un nom, un groupe nominal.',
    fonction: 'Elle a la fonction de complément du verbe introducteur : sujet, COD, COI, ou complément d\'un adjectif ou d\'un nom.',
    outils: ['que (conjonction de subordination)', 'si (interrogation indirecte)', 'quand, comme, parce que, etc.'],
    exemples: [
      '« Je pense que Candide est naïf. » (complétive COD du verbe "pense")',
      '« Il est certain que Voltaire critique l\'optimisme. » (complétive sujet du verbe "est")',
      '« Je me réjouis que tu aies réussi. » (complétive COI du verbe "réjouis")',
      '« L\'idée que tout va bien est fausse. » (complétive épithète du nom "idée")',
    ],
    exercices: [
      {
        question: '« Il dit qu\'il viendra. » Quelle est la fonction de la subordonnée ?',
        options: ['Sujet', 'COD du verbe "dit"', 'Complément circonstanciel', 'Épithète'],
        answer: 1,
        explain: 'La complétive "qu\'il viendra" complète le verbe "dit" : elle est COD.',
      },
      {
        question: '« Qu\'il parte me dérange. » Quelle est la fonction de la subordonnée ?',
        options: ['COD', 'Sujet du verbe "dérange"', 'Complément circonstanciel', 'Attribut'],
        answer: 1,
        explain: 'La complétive "Qu\'il parte" est le sujet du verbe "dérange".',
      },
    ],
  },
  {
    id: 'sub-interrogative',
    title: 'La proposition subordonnée interrogative indirecte',
    definition: 'La proposition subordonnée interrogative indirecte est une question intégrée dans une phrase principale. Elle est introduite par un mot interrogatif (si, quand, comment, pourquoi, où, qui, que, etc.).',
    nature: 'Elle est de nature nominale : elle se comporte comme un nom.',
    fonction: 'Elle a la fonction de complément du verbe introducteur : COD le plus souvent, parfois sujet.',
    outils: ['si (interrogation totale)', 'quand, où, comment, pourquoi (interrogation partielle)', 'qui, que, quel', 'combien, combien de'],
    exemples: [
      '« Je me demande si Candide retrouvera Cunégonde. » (interrogative indirecte COD, introduite par "si")',
      '« Il ignore où est passé son valet. » (interrogative indirecte COD, introduite par "où")',
      '« Elle se demande pourquoi Pangloss est optimiste. » (interrogative indirecte COD, introduite par "pourquoi")',
      '« On ne sait pas comment il a survécu. » (interrogative indirecte COD, introduite par "comment")',
    ],
    exercices: [
      {
        question: '« Je me demande s\'il pleuvra. » Quelle est la nature de la subordonnée ?',
        options: ['Relative', 'Complétive', 'Interrogative indirecte', 'Circonstancielle'],
        answer: 2,
        explain: 'La subordonnée est une question introduite par "si" : c\'est une interrogative indirecte.',
      },
      {
        question: '« Il ne sait pas où elle est partie. » Quelle est la fonction de la subordonnée ?',
        options: ['Sujet', 'COD du verbe "sait"', 'Complément circonstanciel de lieu', 'Épithète'],
        answer: 1,
        explain: 'L\'interrogative indirecte "où elle est partie" complète le verbe "sait" : elle est COD.',
      },
    ],
  },
  {
    id: 'sub-circonstancielle',
    title: 'La proposition subordonnée circonstancielle',
    definition: 'La proposition subordonnée circonstancielle est introduite par une conjonction de subordination ou une locution conjonctive. Elle exprime une circonstance (temps, cause, but, condition, concession, opposition, conséquence, comparaison, hypothèse).',
    nature: 'Elle est de nature adverbiale : elle se comporte comme un adverbe ou un groupe adverbial.',
    fonction: 'Elle a la fonction de complément circonstanciel du verbe de la principale : circonstanciel de temps, cause, but, condition, etc.',
    outils: [
      'Temps : quand, lorsque, pendant que, avant que, après que, dès que, tandis que',
      'Cause : parce que, puisque, comme, car',
      'But : pour que, afin que',
      'Condition : si, à condition que, au cas où',
      'Concession : bien que, quoique, quoique, malgré que',
      'Opposition : alors que, tandis que, au lieu que',
      'Conséquence : de sorte que, si bien que, de façon que',
      'Comparaison : comme, ainsi que, de même que',
      'Hypothèse : si, au cas où, à supposer que',
    ],
    exemples: [
      '« Candide voyagea pendant qu\'il pleuvait. » (circonstancielle de temps, introduite par "pendant que")',
      '« Il partit parce qu\'il était en danger. » (circonstancielle de cause, introduite par "parce que")',
      '« Il travaille pour qu\'il réussisse. » (circonstancielle de but, introduite par "pour que")',
      '« Si tu viens, je serai content. » (circonstancielle de condition, introduite par "si")',
      '« Bien qu\'il soit fatigué, il continue. » (circonstancielle de concession, introduite par "bien que")',
    ],
    exercices: [
      {
        question: '« Il partit parce qu\'il avait peur. » Quelle est la nature de la subordonnée ?',
        options: ['Relative', 'Complétive', 'Circonstancielle de cause', 'Interrogative'],
        answer: 2,
        explain: 'La subordonnée est introduite par "parce que" et exprime la cause : c\'est une circonstancielle de cause.',
      },
      {
        question: '« Quand il arriva, tout le monde dormait. » Quelle est la fonction de la subordonnée ?',
        options: ['Sujet', 'COD', 'Complément circonstanciel de temps', 'Complément circonstanciel de cause'],
        answer: 2,
        explain: 'La subordonnée "Quand il arriva" indique le moment : elle est complément circonstanciel de temps.',
      },
    ],
  },
];

/* ————————————————————————————————————————————
   Sujet de dissertation avec exemple
   ———————————————————————————————————————————— */

export const dissertation = {
  sujet: '« Candide ou l\'Optimisme » de Voltaire est-il un simple conte divertissant ou une œuvre philosophique engagée ?',
  introduction: {
    amorce: 'Publié en 1759, Candide ou l\'Optimisme de Voltaire connaît un succès immédiat et scandaleux. Ce conte philosophique raconte les aventures mouvementées d\'un jeune homme naïf à travers le monde.',
    opinions: 'Certains lecteurs y voient un récit d\'aventure plaisant, plein de rebondissements et d\'humour. D\'autres y décèlent une critique profonde de la philosophie optimiste et des institutions de l\'époque.',
    problematique: 'Dans quelle mesure Candide dépasse-t-il le simple divertissement pour devenir une œuvre philosophique engagée ?',
  },
  these: 'À mon avis, Candide est bien plus qu\'un conte divertissant : c\'est une œuvre philosophique qui utilise le divertissement comme arme de critique sociale et politique.',
  arguments: [
    {
      titre: 'Premier argument : Le conte divertit par son rythme et son humour',
      explication: 'En effet, Voltaire multiplie les aventures invraisemblables, les rebondissements et les situations comiques pour captiver le lecteur.',
      raisonnement: 'Certes, le récit semble parfois gratuit ou exagéré, mais cette accumulation de catastrophes sert un dessein : montrer l\'absurdité du monde et ridiculiser l\'optimisme béat de Pangloss.',
      exemple: 'Par exemple, dans les premiers chapitres, Candide est chassé du château, enrôlé de force, blessé, puis retrouve Cunégonde violée et vendue. Ce rythme effréné divertit mais fait aussi réfléchir sur la violence du monde.',
      conclusion: 'Le divertissement n\'est donc pas une fin en soi mais un moyen d\'attirer le lecteur vers une réflexion plus profonde.',
    },
    {
      titre: 'Deuxième argument : Le conte critique la philosophie de l\'optimisme',
      explication: 'En effet, Voltaire s\'attaque directement à la philosophie de Leibniz et de Pope selon laquelle « tout est au mieux dans le meilleur des mondes ».',
      raisonnement: 'Supposons que cette philosophie soit vraie : comment justifier alors les horreurs décrites dans le conte ? La guerre, l\'esclavage, l\'Inquisition, les catastrophes naturelles contredisent cet optimisme.',
      exemple: 'Par exemple, l\'esclave mutilé de Surinam, qui a perdu une main et une jambe, déclare : « C\'est à ce prix que vous mangez du sucre en Europe. » Cette scène terrible ruine toute justification du mal.',
      conclusion: 'Le conte n\'est donc pas un simple divertissement mais une réfutation systématique de l\'optimisme métaphysique.',
    },
  ],
  conclusion: 'En définitive, si Candide divertit par son rythme et son humour, il engage aussi une réflexion profonde sur le mal, l\'optimisme et l\'action humaine. Voltaire utilise le conte pour critiquer les philosophies aveugles et proposer une sagesse pratique : « Il faut cultiver notre jardin. » L\'œuvre dépasse ainsi le divertissement pour devenir un manifeste philosophique.',
};
