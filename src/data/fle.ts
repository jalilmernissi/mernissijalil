import type { Lesson } from './types';

/* ————————————————————————————————————————————
   FLE — Les six niveaux du CECRL (A1 → C2)
   Chaque niveau possède une page dédiée et une leçon d’exemple.
   ———————————————————————————————————————————— */

export interface FleLevelData {
  code: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  name: string;
  tagline: string;
  description: string;
  verb: string;
  goals: string[];
  competences: string[];
  grammar: string[];
  vocab: string;
  color: 'bleu' | 'or' | 'rouge' | 'navy';
  lesson: Lesson;
}

const leconA1: Lesson = {
  id: 'fle-a1-se-presenter',
  title: 'Se présenter et saluer',
  minutes: 30,
  objectives: ['saluer quelqu’un selon le moment de la journée ;', 'se présenter simplement (nom, âge, pays) ;', 'utiliser « être », « avoir » et « s’appeler ».'],
  observation: {
    label: 'Écoutez et lisez',
    text: '« — Bonjour ! Je m’appelle Salma. J’ai seize ans. Je viens du Maroc et j’habite à Rabat.\n— Enchanté, Salma ! Moi, c’est Paul. J’habite à Paris. »',
  },
  sections: [
    { kind: 'sub', text: 'Saluer selon le moment' },
    {
      kind: 'liste',
      title: 'Les salutations essentielles',
      items: [
        'Le matin et la journée : « Bonjour ! »',
        'Le soir : « Bonsoir ! »',
        'Entre amis : « Salut ! »',
        'Pour prendre congé : « Au revoir ! », « À bientôt ! »',
        'Pour être poli : « s’il vous plaît », « merci », « pardon ».',
      ],
    },
    { kind: 'sub', text: 'Se présenter' },
    {
      kind: 'p',
      text: 'Pour se présenter, on utilise trois verbes : s’appeler (« Je m’appelle… »), avoir (« J’ai seize ans ») et venir de (« Je viens du Maroc »). On peut ajouter : « J’habite à… » et « J’aime… ».',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'On dit « Je viens DU Maroc » (pays masculin), « Je viens DE France » (pays féminin) et « Je viens DU Japon ».',
    },
  ],
  rule: [
    'Saluer : « Bonjour » (jour), « Bonsoir » (soir), « Salut » (amis), « Au revoir » (congé).',
    'Se présenter : « Je m’appelle… », « J’ai… ans », « Je viens de… », « J’habite à… ».',
    '« Enchanté ! » répond à une première rencontre.',
  ],
  examples: [
    '« Bonjour, je m’appelle Karim et j’ai dix-huit ans. »',
    '« Salut ! Tu viens d’où ? — Je viens d’Espagne. »',
    '« Enchanté ! Moi, c’est Léa. »',
  ],
  exercises: [
    {
      id: 'a1-q1',
      type: 'qcm',
      question: 'Le soir, pour saluer quelqu’un, on dit…',
      options: ['Bonjour', 'Bonsoir', 'À bientôt', 'De rien'],
      answer: 1,
      explain: '« Bonsoir » s’utilise le soir ; « Bonjour » s’utilise dans la journée.',
    },
    {
      id: 'a1-q2',
      type: 'complete',
      question: 'Complétez la présentation.',
      sentence: 'Je m’___ Salma et j’ai seize ans.',
      answers: ['appelle'],
      explain: 'Le verbe « s’appeler » se conjugue : je m’appelle, tu t’appelles, il s’appelle…',
    },
    {
      id: 'a1-q3',
      type: 'associe',
      question: 'Associez chaque situation à la formule.',
      pairs: [
        ['Rencontrer quelqu’un pour la première fois', 'Enchanté !'],
        ['Quitter un ami', 'À bientôt !'],
        ['Demander poliment', 'S’il vous plaît'],
      ],
      explain: '« Enchanté » pour une première rencontre, « À bientôt » pour prendre congé, « s’il vous plaît » pour demander poliment.',
    },
  ],
  synthese: ['Bonjour / Bonsoir / Salut / Au revoir.', 'Je m’appelle… J’ai… ans. Je viens de…', 'Enchanté pour une première rencontre.'],
  keywords: ['saluer', 'se présenter', 'bonjour', 'bonsoir', 's’appeler', 'enchanté', 'A1'],
};

const leconA2: Lesson = {
  id: 'fle-a2-raconter',
  title: 'Raconter un souvenir au passé composé',
  minutes: 40,
  objectives: ['former le passé composé avec avoir et être ;', 'raconter un événement simple au passé ;', 'utiliser les indicateurs de temps du passé.'],
  observation: {
    label: 'Lisez ce petit récit',
    text: '« Hier, je suis allée au marché avec ma mère. Nous avons acheté des légumes frais. Ensuite, nous avons préparé une soupe délicieuse. C’était un bon moment ! »',
  },
  sections: [
    { kind: 'sub', text: 'Le passé composé' },
    {
      kind: 'p',
      text: 'Le passé composé raconte des actions terminées dans le passé. Il se forme avec l’auxiliaire avoir ou être au présent + le participe passé : « j’ai mangé », « je suis parti(e) ».',
    },
    {
      kind: 'liste',
      title: 'Avoir ou être ?',
      items: [
        'Avec « avoir » : la plupart des verbes → « j’ai fini », « nous avons visité ».',
        'Avec « être » : les verbes de mouvement et d’état (aller, venir, partir, arriver, rester, tomber…) → « je suis allé(e) ».',
        'Avec « être », le participe s’accorde : « elle est partie », « ils sont arrivés ».',
      ],
    },
    { kind: 'sub', text: 'Organiser son récit' },
    {
      kind: 'p',
      text: 'Pour raconter, on utilise des indicateurs de temps : hier, d’abord, ensuite, puis, enfin. Ils structurent le récit et le rendent clair.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Astuce : « être » accompagne les verbes qu’on peut mimer avec un déplacement (aller, venir, partir, arriver, monter, descendre…).',
    },
  ],
  rule: [
    'Passé composé = auxiliaire (avoir/être) au présent + participe passé.',
    'Les verbes de mouvement se conjuguent avec « être » et s’accordent.',
    'Indicateurs de temps : hier, d’abord, ensuite, puis, enfin.',
  ],
  examples: [
    '« J’ai visité un musée avec mes amis. »',
    '« Elle est arrivée en retard ce matin. »',
    '« D’abord, nous avons mangé, puis nous sommes sortis. »',
  ],
  exercises: [
    {
      id: 'a2-q1',
      type: 'qcm',
      question: 'Complétez : « Hier, je ___ au cinéma avec mon frère. »',
      options: ['suis allé', 'ai allé', 'vais', 'allait'],
      answer: 0,
      explain: '« Aller » est un verbe de mouvement : il se conjugue avec « être » au passé composé → « je suis allé ».',
    },
    {
      id: 'a2-q2',
      type: 'complete',
      question: 'Complétez au passé composé.',
      sentence: 'Nous avons ___ (manger) une pizza délicieuse.',
      answers: ['mangé', 'mange'],
      explain: 'Avec « avoir », on emploie le participe passé : « nous avons mangé ».',
    },
    {
      id: 'a2-q3',
      type: 'ordre',
      question: 'Remettez le récit dans l’ordre.',
      items: ['D’abord, je suis sorti de la maison.', 'Ensuite, j’ai pris le bus.', 'Enfin, je suis arrivé à l’école.'],
      shuffled: ['Enfin, je suis arrivé à l’école.', 'D’abord, je suis sorti de la maison.', 'Ensuite, j’ai pris le bus.'],
      explain: 'Un récit s’organise : d’abord (début), ensuite (milieu), enfin (fin).',
    },
  ],
  synthese: ['Passé composé : avoir/être + participe passé.', 'Mouvement = être + accord.', 'D’abord, ensuite, puis, enfin.'],
  keywords: ['passé composé', 'avoir', 'être', 'raconter', 'indicateurs de temps', 'A2'],
};

const leconB1: Lesson = {
  id: 'fle-b1-opinion',
  title: 'Exprimer son opinion et argumenter',
  minutes: 45,
  objectives: ['exprimer une opinion avec des formules variées ;', 'justifier son point de vue avec des arguments ;', 'utiliser les connecteurs logiques de l’argumentation.'],
  observation: {
    label: 'Lisez ce point de vue',
    text: '« À mon avis, les réseaux sociaux sont utiles, car ils permettent de garder le contact. Cependant, je pense qu’il faut les utiliser avec prudence : en effet, ils peuvent isoler au lieu de rapprocher. »',
  },
  sections: [
    { kind: 'sub', text: 'Les formules d’opinion' },
    {
      kind: 'liste',
      title: 'Pour donner son avis',
      items: [
        'Neutre : « Je pense que… », « Je crois que… », « À mon avis… »',
        'Plus fort : « Je suis convaincu que… », « Il est évident que… »',
        'Nuancé : « Il me semble que… », « Je trouve que… »',
        'Accord / désaccord : « Je suis d’accord », « Pas du tout ! », « Au contraire… »',
      ],
    },
    { kind: 'sub', text: 'Justifier et nuancer' },
    {
      kind: 'p',
      text: 'Une opinion se justifie avec des connecteurs : « car », « en effet », « parce que » introduisent un argument ; « cependant », « pourtant » nuancent ; « par exemple » illustre.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Structure simple et efficace : Opinion → Argument → Exemple. « Je pense que lire est utile, car cela enrichit le vocabulaire. Par exemple, depuis que je lis en français, je progresse vite. »',
    },
  ],
  rule: [
    'Exprimer une opinion : « Je pense que… », « À mon avis… », « Il me semble que… ».',
    'Justifier : car, parce que, en effet. Nuancer : cependant, pourtant. Illustrer : par exemple.',
    'Structure : opinion → argument → exemple.',
  ],
  examples: [
    '« À mon avis, ce film est excellent, car les acteurs sont formidables. »',
    '« Je ne suis pas d’accord : au contraire, cette mesure me semble injuste. »',
    '« Il est évident que le sport est bon pour la santé. »',
  ],
  exercises: [
    {
      id: 'b1-q1',
      type: 'qcm',
      question: 'Quelle formule exprime une opinion nuancée ?',
      options: ['Il est évident que…', 'Il me semble que…', 'Je suis certain que…', 'Sans aucun doute…'],
      answer: 1,
      explain: '« Il me semble que » présente une opinion avec prudence : c’est une formule nuancée.',
    },
    {
      id: 'b1-q2',
      type: 'complete',
      question: 'Complétez avec le connecteur qui illustre.',
      sentence: 'Le sport est bénéfique ; ___ exemple, il réduit le stress.',
      answers: ['par'],
      explain: '« Par exemple » introduit une illustration concrète de l’argument.',
    },
    {
      id: 'b1-q3',
      type: 'associe',
      question: 'Associez chaque connecteur à sa fonction.',
      pairs: [
        ['« car »', 'Justifier'],
        ['« cependant »', 'Nuancer'],
        ['« par exemple »', 'Illustrer'],
      ],
      explain: '« Car » justifie, « cependant » nuance, « par exemple » illustre.',
    },
  ],
  synthese: ['Opinion : je pense que, à mon avis…', 'Argument : car, en effet. Nuance : cependant.', 'Opinion → argument → exemple.'],
  keywords: ['opinion', 'argumentation', 'connecteurs', 'je pense que', 'à mon avis', 'B1'],
};

const leconB2: Lesson = {
  id: 'fle-b2-concession',
  title: 'Concéder, réfuter, nuancer avec précision',
  minutes: 50,
  objectives: ['construire un raisonnement avec concession et réfutation ;', 'employer le subjonctif après « bien que » et « quoique » ;', 'nuancer avec précision (sans doute, probablement…).'],
  observation: {
    label: 'Analysez ce raisonnement',
    text: '« Certes, le télétravail offre de la flexibilité. Toutefois, bien qu’il séduise de plus en plus d’employés, il ne convient pas à tous les métiers. Sans doute faudrait-il un modèle hybride. »',
  },
  sections: [
    { kind: 'sub', text: 'Concession et réfutation' },
    {
      kind: 'p',
      text: 'Concéder, c’est reconnaître partiellement la thèse adverse (« certes… », « bien que + subjonctif ») pour mieux la réfuter (« toutefois… », « cependant… »). Ce mouvement renforce l’argumentation.',
    },
    { kind: 'sub', text: 'Le subjonctif après certains connecteurs' },
    {
      kind: 'liste',
      title: 'Suivis du subjonctif',
      items: [
        '« Bien qu’il soit tard, il travaille encore. »',
        '« Quoiqu’elle soit fatiguée, elle sourit. »',
        '« À condition que tu viennes tôt. »',
      ],
    },
    { kind: 'sub', text: 'Nuancer avec précision' },
    {
      kind: 'p',
      text: 'Le niveau B2 exige de la précision : « sans doute », « probablement », « vraisemblablement », « dans une certaine mesure » permettent d’ajuster la force de l’affirmation.',
    },
    {
      kind: 'note',
      tone: 'attention',
      text: '« Bien que » et « quoique » sont suivis du subjonctif ; « même si » est suivi de l’indicatif : « même s’il pleut ».',
    },
  ],
  rule: [
    'Concession : certes, bien que + subjonctif, quoique + subjonctif.',
    'Réfutation : toutefois, cependant, en revanche.',
    'Nuance : sans doute, probablement, dans une certaine mesure.',
  ],
  examples: [
    '« Certes, ce projet coûte cher ; toutefois, il est indispensable. »',
    '« Bien qu’il soit jeune, il dirige l’entreprise. »',
    '« Sans doute faudra-t-il revoir ce plan. »',
  ],
  exercises: [
    {
      id: 'b2-q1',
      type: 'qcm',
      question: 'Complétez : « ___ il soit tard, elle continue à travailler. »',
      options: ['Bien qu’', 'Même s’', 'Cependant,', 'Donc,'],
      answer: 0,
      explain: '« Bien que » + subjonctif exprime la concession : « Bien qu’il soit tard… ».',
    },
    {
      id: 'b2-q2',
      type: 'vf',
      question: 'Vrai ou faux ? « Même si » est suivi du subjonctif.',
      vfAnswer: false,
      explain: 'Faux. « Même si » est suivi de l’indicatif : « même s’il pleut, je sors ».',
    },
    {
      id: 'b2-q3',
      type: 'complete',
      question: 'Complétez avec le connecteur de réfutation.',
      sentence: 'Certes, l’idée est séduisante ; ___, elle est irréalisable.',
      answers: ['toutefois', 'cependant'],
      explain: '« Toutefois » et « cependant » réfutent après une concession introduite par « certes ».',
    },
  ],
  synthese: ['Certes… toutefois…', 'Bien que / quoique + subjonctif.', 'Sans doute, probablement : la nuance précise.'],
  keywords: ['concession', 'réfutation', 'subjonctif', 'bien que', 'toutefois', 'nuance', 'B2'],
};

const leconC1: Lesson = {
  id: 'fle-c1-registres',
  title: 'Les registres de langue et la précision lexicale',
  minutes: 50,
  objectives: ['distinguer registres familier, courant et soutenu ;', 'choisir le mot juste selon le contexte ;', 'employer des tournures soutenues avec naturel.'],
  observation: {
    label: 'Trois façons de dire la même chose',
    text: 'Familier : « Ce bouquin est super. » — Courant : « Ce livre est très bien. » — Soutenu : « Cet ouvrage est remarquable. »',
  },
  sections: [
    { kind: 'sub', text: 'Les trois registres' },
    {
      kind: 'tableau',
      title: 'Adapter sa langue à la situation',
      headers: ['Registre', 'Contexte', 'Exemples'],
      rows: [
        ['Familier', 'Amis, famille', 'un bouquin, une bagnole, bosser, rigoler'],
        ['Courant', 'Vie quotidienne, travail', 'un livre, une voiture, travailler, rire'],
        ['Soutenu', 'Écrits, discours, lettres', 'un ouvrage, un véhicule, œuvrer, se réjouir'],
      ],
    },
    { kind: 'sub', text: 'La précision lexicale' },
    {
      kind: 'p',
      text: 'Le niveau C1 exige le mot juste : non pas « très grand », mais « immense » ou « colossal » ; non pas « dire », mais « affirmer », « prétendre », « rétorquer », selon l’intention.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'À l’écrit formel, évitez les mots familiers et les tournures orales (« ça », « il y a » répété). Préférez « cela », « on constate », « il existe ».',
    },
  ],
  rule: [
    'Trois registres : familier, courant, soutenu — à adapter au destinataire et au contexte.',
    'La précision lexicale remplace les mots vagues par le terme exact.',
    'Le registre soutenu caractérise l’écrit formel et les discours.',
  ],
  examples: [
    '« Bagnole » (familier) → « voiture » (courant) → « véhicule » (soutenu).',
    '« Il a rétorqué avec assurance » plutôt que « il a répondu ».',
    '« Néanmoins » plutôt que « mais » dans un essai.',
  ],
  exercises: [
    {
      id: 'c1-q1',
      type: 'qcm',
      question: 'Quel mot appartient au registre soutenu ?',
      options: ['Un bouquin', 'Un ouvrage', 'Un truc', 'Un machin'],
      answer: 1,
      explain: '« Ouvrage » est le terme soutenu pour « livre » ; « bouquin » est familier.',
    },
    {
      id: 'c1-q2',
      type: 'associe',
      question: 'Classez chaque mot.',
      pairs: [
        ['« Bosser »', 'Familier'],
        ['« Travailler »', 'Courant'],
        ['« Œuvrer »', 'Soutenu'],
      ],
      explain: '« Bosser » (familier), « travailler » (courant), « œuvrer » (soutenu).',
    },
  ],
  synthese: ['Familier / courant / soutenu.', 'Le mot juste plutôt que le mot vague.', 'Adapter la langue au contexte.'],
  keywords: ['registres de langue', 'familier', 'courant', 'soutenu', 'précision lexicale', 'C1'],
};

const leconC2: Lesson = {
  id: 'fle-c2-nuances',
  title: 'L’art de la nuance : implicite et subtilité',
  minutes: 55,
  objectives: ['comprendre l’implicite et les sous-entendus ;', 'employer des tournures idiomatiques avec aisance ;', 'manier l’ironie et la litote.'],
  observation: {
    label: 'Lisez entre les lignes',
    text: '« Ton projet est audacieux… » Sous l’apparence du compliment, la phrase peut signifier : « Ton projet est risqué, voire irréaliste. » C’est l’implicite.',
  },
  sections: [
    { kind: 'sub', text: 'L’implicite et les sous-entendus' },
    {
      kind: 'p',
      text: 'Au niveau C2, on saisit ce qui n’est pas dit : les sous-entendus, l’ironie, les allusions. Le sens se construit autant dans le non-dit que dans l’énoncé.',
    },
    { kind: 'sub', text: 'Litote et euphémisme' },
    {
      kind: 'liste',
      title: 'Dire moins pour signifier plus',
      items: [
        'Litote : « Va, je ne te hais point » (Corneille) = je t’aime.',
        'Euphémisme : « Il nous a quittés » = il est mort.',
        'Ironie : « Quel courage ! » pour un lâche.',
      ],
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour analyser un texte subtil : cherchez l’écart entre ce qui est dit et le contexte — c’est là que naît le second sens.',
    },
  ],
  rule: [
    'L’implicite est le sens non dit, suggéré par le contexte.',
    'Litote (dire moins), euphémisme (adoucir), ironie (dire le contraire).',
    'Le niveau C2 = maîtrise des nuances et du second degré.',
  ],
  examples: [
    '« Ce n’est pas mauvais » (litote) = c’est très bon.',
    '« Il a rejoint ses ancêtres » (euphémisme) = il est mort.',
    '« Bravo, encore en retard ! » (ironie).',
  ],
  exercises: [
    {
      id: 'c2-q1',
      type: 'qcm',
      question: '« Va, je ne te hais point. » Quelle figure ?',
      options: ['Hyperbole', 'Litote', 'Anaphore', 'Métonymie'],
      answer: 1,
      explain: 'La litote dit moins pour suggérer plus : « je ne te hais point » signifie « je t’aime ».',
    },
    {
      id: 'c2-q2',
      type: 'vf',
      question: 'Vrai ou faux ? L’euphémisme adoucit une réalité brutale.',
      vfAnswer: true,
      explain: 'Vrai. « Il nous a quittés » adoucit « il est mort » : c’est un euphémisme.',
    },
  ],
  synthese: ['Implicite : le sens non dit.', 'Litote, euphémisme, ironie.', 'Maîtriser le second degré.'],
  keywords: ['nuances', 'implicite', 'litote', 'euphémisme', 'ironie', 'sous-entendu', 'C2'],
};

export const fleLevels: FleLevelData[] = [
  {
    code: 'A1',
    name: 'Débutant',
    tagline: 'Découvrir la langue',
    description: 'Faire ses premiers pas en français : saluer, se présenter, comprendre des phrases simples du quotidien.',
    verb: 'Apprendre à',
    goals: [
      'se présenter ;',
      'saluer ;',
      'parler de soi ;',
      'comprendre des phrases simples ;',
      'utiliser les structures fondamentales ;',
      '300 mots du vocabulaire A1.',
    ],
    competences: ['Compréhension orale de bases', 'Lecture de textes très courts', 'Interaction simple', 'Production de phrases courtes'],
    grammar: ['Les articles et le genre', 'Le présent de l’indicatif', '« être », « avoir », « s’appeler »', 'La phrase simple affirmative et négative', 'Les adjectifs et l’accord'],
    vocab: '300 mots',
    color: 'bleu',
    lesson: leconA1,
  },
  {
    code: 'A2',
    name: 'Élémentaire',
    tagline: 'Raconter le quotidien',
    description: 'Communiquer dans des situations familières : raconter, décrire, parler de son quotidien et de son environnement.',
    verb: 'Apprendre à',
    goals: [
      'raconter des expériences simples ;',
      'décrire des personnes et des situations ;',
      'parler du quotidien ;',
      'comprendre des textes courts ;',
      '350 mots du vocabulaire A2.',
    ],
    competences: ['Comprendre des textes courts', 'Raconter au passé', 'Décrire avec précision', 'Échanges simples du quotidien'],
    grammar: ['Le passé composé', 'L’imparfait', 'Les pronoms COD et COI', 'Le futur proche et le futur simple', 'La comparaison'],
    vocab: '350 mots',
    color: 'bleu',
    lesson: leconA2,
  },
  {
    code: 'B1',
    name: 'Intermédiaire',
    tagline: 'Devenir autonome',
    description: 'Se débrouiller dans la plupart des situations, raconter un événement, expliquer un projet et défendre une opinion simple.',
    verb: 'Développer',
    goals: ['la compréhension ;', 'l’expression orale ;', 'l’expression écrite ;', '400 mots du vocabulaire B1 ;', 'l’argumentation simple.'],
    competences: ['Compréhension de l’essentiel', 'Récit détaillé', 'Opinion argumentée', 'Lettres et messages structurés'],
    grammar: ['Le subjonctif présent', 'Les pronoms relatifs', 'Le discours rapporté', 'L’expression de la cause et du but', 'Les hypothèses avec « si »'],
    vocab: '400 mots',
    color: 'or',
    lesson: leconB1,
  },
  {
    code: 'B2',
    name: 'Intermédiaire avancé',
    tagline: 'Argumenter avec aisance',
    description: 'Comprendre des textes complexes, argumenter avec précision et communiquer avec spontanéité et aisance.',
    verb: 'Développer',
    goals: ['l’argumentation ;', 'la compréhension de textes complexes ;', 'l’expression nuancée ;', 'la précision grammaticale ;', '450 mots du vocabulaire B2.'],
    competences: ['Débat et discussion', 'Textes d’opinion', 'Nuance et précision', 'Correction grammaticale'],
    grammar: ['Le subjonctif passé', 'La concordance des temps', 'Le conditionnel et ses emplois', 'Les connecteurs argumentatifs', 'La voix passive'],
    vocab: '450 mots',
    color: 'or',
    lesson: leconB2,
  },
  {
    code: 'C1',
    name: 'Avancé',
    tagline: 'Maîtriser la finesse',
    description: 'S’exprimer avec aisance et précision sur des sujets complexes, comprendre l’implicite et varier les registres.',
    verb: 'Travailler',
    goals: ['les textes complexes ;', 'la précision lexicale ;', 'la syntaxe avancée ;', 'l’argumentation développée ;', 'les nuances stylistiques ;', '500 mots du vocabulaire C1.'],
    competences: ['Textes longs et implicites', 'Expression souple et efficace', 'Registres de langue', 'Essais structurés'],
    grammar: ['Le subjonctif imparfait (reconnaissance)', 'Les participes et le gérondif', 'La nominalisation', 'Les tournures impersonnelles', 'L’inversion stylistique'],
    vocab: '500 mots',
    color: 'rouge',
    lesson: leconC1,
  },
  {
    code: 'C2',
    name: 'Maîtrise',
    tagline: 'Le français en finesse',
    description: 'Comprendre sans effort, restituer les nuances les plus fines et produire des textes d’une grande précision stylistique.',
    verb: 'Travailler',
    goals: ['la compréhension fine ;', 'l’expression très précise ;', 'les nuances ;', 'les registres de langue ;', 'la maîtrise stylistique ;', '550 mots du vocabulaire C2.'],
    competences: ['Comprendre tout, même l’implicite', 'Synthèse et reformulation', 'Style et rhétorique', 'Précision lexicale absolue'],
    grammar: ['Les temps littéraires', 'Les figures de style', 'L’implicite et le sous-entendu', 'La cohésion textuelle avancée', 'Les variations stylistiques'],
    vocab: '550 mots',
    color: 'navy',
    lesson: leconC2,
  },
];
