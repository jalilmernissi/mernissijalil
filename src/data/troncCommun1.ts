import type { CourseModule, Lesson } from './types';

/* MODULE I — Étude de la langue et des genres littéraires */

const genresLitteraires: Lesson = {
  id: 'genres-litteraires',
  title: 'Les genres littéraires',
  minutes: 45,
  objectives: [
    'définir la notion de genre littéraire ;',
    'identifier les quatre grands genres (narratif, théâtral, poétique, argumentatif) ;',
    'classer une œuvre ou un texte dans le bon genre ;',
    'reconnaître les sous-genres de chaque grande catégorie.',
  ],
  observation: {
    label: 'Observez ces quatre courts textes',
    text:
      '1. « Il était une fois, dans un petit village de montagne, un vieil homme qui n’avait jamais vu la mer. »\n' +
      '2. « ANTIGONE. — Voilà. Ils sont tous là, à me regarder. »\n' +
      '3. « Elle était déchaussée, elle était décoiffée, / Assise, les pieds nus, près d’un fossé mouillé. » (Hugo)\n' +
      '4. « Je soutiens que la lecture est la meilleure école de la liberté. »',
  },
  sections: [
    {
      kind: 'p',
      text: 'Depuis l’Antiquité, on classe les œuvres littéraires en grandes familles appelées genres littéraires. Ce classement repose sur trois critères : la forme du texte (vers, prose, dialogue), son but (raconter, représenter, exprimer, convaincre) et la relation entre l’auteur, le texte et le lecteur.',
    },
    { kind: 'sub', text: 'Les quatre grands genres' },
    {
      kind: 'liste',
      title: '1. Le genre narratif',
      items: [
        'Un narrateur raconte une histoire à un lecteur (récit au passé, en prose le plus souvent).',
        'Sous-genres : le roman, la nouvelle, le conte, la fable, l’autobiographie, le récit fantastique.',
        'Exemples : « Aux champs » (Maupassant), « La boîte à merveilles » (Séfrioui).',
      ],
    },
    {
      kind: 'liste',
      title: '2. Le genre théâtral',
      items: [
        'Le texte est écrit pour être joué : dialogues, didascalies, actes et scènes.',
        'Sous-genres : la tragédie, la comédie, le drame, la tragicomédie.',
        'Exemples : « Antigone » (Anouilh), « Le Bourgeois gentilhomme » (Molière).',
      ],
    },
    {
      kind: 'liste',
      title: '3. Le genre poétique',
      items: [
        'Travail sur la langue : vers, strophes, rimes, sonorités, images.',
        'Sous-genres : le sonnet, l’ode, la fable en vers, le poème en prose, la chanson.',
        'Exemple : « Demain, dès l’aube… » (Hugo).',
      ],
    },
    {
      kind: 'liste',
      title: '4. Le genre argumentatif',
      items: [
        'L’auteur défend une idée (thèse) et cherche à convaincre ou persuader.',
        'Sous-genres : l’essai, le discours, le pamphlet, la lettre ouverte, la fable apologue.',
        'Exemple : « Le dernier jour d’un condamné » (Hugo), plaidoyer contre la peine de mort.',
      ],
    },
    {
      kind: 'tableau',
      title: 'Tableau comparatif des genres',
      headers: ['Genre', 'Forme dominante', 'But', 'Qui parle ?', 'Exemples'],
      rows: [
        ['Narratif', 'Récit en prose', 'Raconter une histoire', 'Un narrateur', 'Roman, nouvelle, conte'],
        ['Théâtral', 'Dialogues + didascalies', 'Être représenté sur scène', 'Les personnages', 'Tragédie, comédie'],
        ['Poétique', 'Vers ou prose rythmée', 'Exprimer, créer des images', 'Une voix poétique', 'Sonnets, odes, chansons'],
        ['Argumentatif', 'Prose d’idées', 'Convaincre, persuader', 'Un auteur engagé', 'Essai, discours, pamphlet'],
      ],
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Un même texte peut appartenir à plusieurs genres : la fable est à la fois un récit (narratif), un poème (vers) et un apologue (argumentatif). Observez toujours la dominante.',
    },
  ],
  rule: [
    'Les quatre grands genres littéraires sont le genre narratif, le genre théâtral, le genre poétique et le genre argumentatif.',
    'On classe un texte selon sa forme (prose, vers, dialogue), son but (raconter, jouer, exprimer, convaincre) et l’instance qui parle (narrateur, personnages, poète, auteur).',
    'Chaque genre se divise en sous-genres qu’il faut connaître : roman, nouvelle, tragédie, comédie, sonnet, essai…',
  ],
  examples: [
    '« Bel-Ami » de Maupassant → genre narratif (roman réaliste).',
    '« Tartuffe » de Molière → genre théâtral (comédie).',
    '« Les Fleurs du mal » de Baudelaire → genre poétique (recueil de poèmes).',
    '« J’accuse… ! » de Zola → genre argumentatif (lettre ouverte).',
  ],
  exercises: [
    {
      id: 'gl-q1',
      type: 'qcm',
      question: 'À quel genre appartient « Aux champs » de Maupassant ?',
      options: ['Le genre poétique', 'Le genre narratif', 'Le genre théâtral', 'Le genre argumentatif'],
      answer: 1,
      explain: 'C’est une nouvelle réaliste : un narrateur raconte une histoire en prose, c’est donc le genre narratif.',
    },
    {
      id: 'gl-q2',
      type: 'associe',
      question: 'Associez chaque œuvre à son genre littéraire.',
      pairs: [
        ['« Antigone » d’Anouilh', 'Genre théâtral'],
        ['« La boîte à merveilles » de Séfrioui', 'Genre narratif'],
        ['« Demain, dès l’aube… » de Hugo', 'Genre poétique'],
        ['« J’accuse… ! » de Zola', 'Genre argumentatif'],
      ],
      explain: '« Antigone » est une pièce jouée sur scène ; « La boîte à merveilles » est un roman autobiographique ; le texte de Hugo est un poème en vers ; « J’accuse… ! » est une lettre ouverte qui défend une cause.',
    },
    {
      id: 'gl-q3',
      type: 'vf',
      question: 'Vrai ou faux ? Un texte peut appartenir à plusieurs genres à la fois.',
      vfAnswer: true,
      explain: 'Vrai. La fable, par exemple, combine le récit (narratif), les vers (poétique) et la morale (argumentatif).',
    },
    {
      id: 'gl-q4',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Le texte écrit pour être joué sur scène, composé de dialogues et de didascalies, appartient au genre ___.',
      answers: ['théâtral', 'theatral'],
      explain: 'Le genre théâtral se reconnaît à sa forme : dialogues entre personnages et didascalies (indications de mise en scène).',
    },
  ],
  synthese: [
    'Un genre littéraire est une grande famille de textes qui partagent une forme, un but et des codes communs.',
    'Quatre grands genres : narratif (raconter), théâtral (jouer), poétique (exprimer), argumentatif (convaincre).',
    'Chaque genre se subdivise en sous-genres : roman, nouvelle, conte / tragédie, comédie / sonnet, ode / essai, discours.',
    'Pour classer un texte, posez-vous trois questions : Quelle est sa forme ? Quel est son but ? Qui parle ?',
  ],
  keywords: ['genres littéraires', 'narratif', 'théâtral', 'poétique', 'argumentatif', 'sous-genres', 'roman', 'tragédie', 'comédie', 'sonnet', 'essai'],
};

const texteNarratif: Lesson = {
  id: 'texte-narratif',
  title: 'Le texte narratif et ses caractéristiques',
  minutes: 60,
  objectives: [
    'définir le texte narratif ;',
    'identifier ses caractéristiques (narrateur, personnages, temps, espace) ;',
    'reconstituer le schéma narratif d’un récit ;',
    'distinguer les points de vue du narrateur ;',
    'employer correctement les temps du récit.',
  ],
  observation: {
    label: 'Lisez cet extrait',
    text:
      '« Les deux chaumières vivaient péniblement de soupe, de pommes de terre et de grand air. Un matin, une jeune dame élégante s’arrêta devant les maisons et proposa d’adopter l’un des enfants. Dès ce jour, la vie des deux familles bascula. » (d’après « Aux champs », Maupassant)',
    source: 'D’après Maupassant, « Aux champs », Contes de la bécasse, 1883',
  },
  sections: [
    { kind: 'sub', text: 'Définition et caractéristiques' },
    {
      kind: 'p',
      text: 'Le texte narratif raconte une histoire, réelle ou fictive, qui se déroule dans le temps. Il met en scène des personnages qui agissent dans un espace donné, et il est pris en charge par un narrateur qui s’adresse à un lecteur.',
    },
    {
      kind: 'liste',
      title: 'Ses caractéristiques essentielles',
      items: [
        'Un narrateur : celui qui raconte (« je » = 1re personne ; « il/elle » = 3e personne).',
        'Des personnages : héros, personnages secondaires, opposants, adjuvants.',
        'Une histoire organisée : situation initiale, élément perturbateur, péripéties, dénouement.',
        'Un cadre spatio-temporel : lieux et époque précisés.',
        'Des temps du récit : passé simple pour les actions, imparfait pour les descriptions.',
      ],
    },
    { kind: 'sub', text: 'Le schéma narratif' },
    {
      kind: 'tableau',
      title: 'Les cinq étapes du récit',
      headers: ['Étape', 'Définition', 'Dans « Aux champs »'],
      rows: [
        ['Situation initiale', 'Équilibre du début : présentation du cadre et des personnages', 'Les deux familles paysannes vivent pauvrement côte à côte'],
        ['Élément perturbateur', 'Événement qui rompt l’équilibre', 'La proposition d’adoption de Mme d’Hubières'],
        ['Péripéties', 'Série d’événements et de transformations', 'Refus des Tuvache, acceptation des Vallin, départ de Jean, rancœur de Charlot'],
        ['Dénouement', 'Fin de l’action, résolution', 'Le retour de Jean, riche et éduqué'],
        ['Situation finale', 'Nouvel état, souvent opposé au début', 'Charlot quitte ses parents ; les familles sont divisées'],
      ],
    },
    { kind: 'sub', text: 'Narrateur et point de vue' },
    {
      kind: 'p',
      text: 'Il ne faut pas confondre l’auteur (personne réelle) et le narrateur (voix qui raconte). Le point de vue (ou focalisation) est la place choisie par le narrateur pour montrer l’histoire.',
    },
    {
      kind: 'liste',
      title: 'Les trois points de vue',
      items: [
        'Point de vue interne : on voit la scène à travers les yeux d’un personnage (on connaît ses pensées).',
        'Point de vue externe : le narrateur décrit de l’extérieur, sans connaître les pensées (comme une caméra).',
        'Point de vue omniscient : le narrateur sait tout : passé, avenir, pensées de tous les personnages.',
      ],
    },
    { kind: 'sub', text: 'Les temps du récit' },
    {
      kind: 'p',
      text: 'Au passé simple se déroulent les actions de premier plan, qui font avancer l’histoire. L’imparfait installe le décor, décrit et exprime la durée ou l’habitude. Le plus-que-parfait exprime l’antériorité.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour repérer vite un récit : cherchez un narrateur, des personnages, des verbes d’action au passé simple et un enchaînement d’événements dans le temps.',
    },
  ],
  rule: [
    'Le texte narratif raconte une histoire réelle ou fictive : un narrateur rapporte des événements qui arrivent à des personnages dans un cadre spatio-temporel.',
    'Le schéma narratif compte cinq étapes : situation initiale, élément perturbateur, péripéties, dénouement, situation finale.',
    'Le point de vue peut être interne (à travers un personnage), externe (caméra) ou omniscient (narrateur qui sait tout).',
    'Passé simple = actions ; imparfait = descriptions et arrière-plan ; plus-que-parfait = action antérieure.',
  ],
  examples: [
    '« Un matin, la jeune dame s’arrêta » → passé simple : action qui fait avancer l’histoire.',
    '« Les chaumières vivaient péniblement » → imparfait : état qui dure, arrière-plan.',
    '« Charlot regardait Jean avec jalousie » → point de vue interne : on entre dans les sentiments de Charlot.',
    '« On apercevait de la route les deux maisons » → point de vue externe : simple description visible de l’extérieur.',
  ],
  exercises: [
    {
      id: 'tn-q1',
      type: 'ordre',
      question: 'Remettez les étapes du schéma narratif dans l’ordre.',
      items: ['Situation initiale', 'Élément perturbateur', 'Péripéties', 'Dénouement', 'Situation finale'],
      shuffled: ['Péripéties', 'Situation finale', 'Élément perturbateur', 'Situation initiale', 'Dénouement'],
      explain: 'Tout récit classique s’organise ainsi : équilibre initial, rupture, série d’événements, résolution, nouvel équilibre.',
    },
    {
      id: 'tn-q2',
      type: 'qcm',
      question: '« Le narrateur connaît les pensées de tous les personnages, leur passé et leur avenir. » De quel point de vue s’agit-il ?',
      options: ['Point de vue interne', 'Point de vue externe', 'Point de vue omniscient', 'Il n’y a pas de narrateur'],
      answer: 2,
      explain: 'Quand le narrateur sait tout de tous les personnages, il est omniscient (du latin « omnis », tout).',
    },
    {
      id: 'tn-q3',
      type: 'complete',
      question: 'Complétez avec le temps du récit qui convient (nom du temps).',
      sentence: 'Dans un récit au passé, les descriptions et les actions qui durent sont exprimées à l’___.',
      answers: ['imparfait'],
      explain: 'L’imparfait est le temps de la description, de la durée et de l’habitude ; le passé simple est celui des actions brèves.',
    },
    {
      id: 'tn-q4',
      type: 'vf',
      question: 'Vrai ou faux ? Le narrateur et l’auteur sont la même personne.',
      vfAnswer: false,
      explain: 'Faux. L’auteur est la personne réelle qui écrit ; le narrateur est la voix inventée qui raconte l’histoire, même quand elle dit « je ».',
    },
  ],
  synthese: [
    'Récit = narrateur + personnages + événements + cadre spatio-temporel.',
    'Schéma narratif : situation initiale → élément perturbateur → péripéties → dénouement → situation finale.',
    'Trois points de vue : interne, externe, omniscient.',
    'Temps du récit : passé simple (actions), imparfait (descriptions), plus-que-parfait (antériorité).',
  ],
  keywords: ['texte narratif', 'schéma narratif', 'narrateur', 'point de vue', 'focalisation', 'passé simple', 'imparfait', 'personnages', 'péripéties'],
};

const texteDescriptif: Lesson = {
  id: 'texte-descriptif',
  title: 'Le texte descriptif et ses caractéristiques',
  minutes: 50,
  objectives: [
    'définir le texte descriptif ;',
    'identifier ses caractéristiques linguistiques ;',
    'connaître les fonctions et l’organisation de la description ;',
    'enrichir une description avec adjectifs et champs lexicaux.',
  ],
  observation: {
    label: 'Lisez cette description',
    text:
      '« On apercevait de la route les deux maisons, au bord de la route, à l’entrée du petit village. Les deux chaumières, adossées à la colline, semblaient deux mendiants côte à côte, vieilles, délabrées, lézardées, avec leurs toits de chaume brun et leurs fenêtres minuscules. » (d’après Maupassant)',
    source: 'D’après l’incipit d’« Aux champs »',
  },
  sections: [
    { kind: 'sub', text: 'Définition et caractéristiques' },
    {
      kind: 'p',
      text: 'Le texte descriptif (ou description) est un passage qui représente un être, un lieu ou un objet par le langage : il le montre au lecteur comme un tableau. On dit souvent que la description est une « peinture par les mots ».',
    },
    {
      kind: 'liste',
      title: 'Caractéristiques linguistiques',
      items: [
        'Verbes d’état (être, paraître, sembler) et imparfait.',
        'Adjectifs qualificatifs souvent multiples : « vieilles, délabrées, lézardées ».',
        'Compléments du nom et comparaisons : « semblaient deux mendiants ».',
        'Indicateurs spatiaux : au bord de, à l’entrée de, adossées à, au fond, à droite…',
        'Champ lexical du thème décrit (ici : la pauvreté, la campagne).',
      ],
    },
    { kind: 'sub', text: 'Les fonctions de la description' },
    {
      kind: 'liste',
      title: 'À quoi sert une description ?',
      items: [
        'Fonction référentielle (informative) : faire voir le décor, situer l’action.',
        'Fonction esthétique : créer une atmosphère, produire un effet artistique.',
        'Fonction symbolique : le décor reflète les personnages ou annonce la suite (une maison délabrée annonce la misère).',
        'Fonction narrative : la description peut préparer un événement ou expliquer un comportement.',
      ],
    },
    { kind: 'sub', text: 'L’organisation de la description' },
    {
      kind: 'p',
      text: 'Une description est organisée : elle suit un ordre spatial (du lointain vers le proche, de haut en bas, de gauche à droite), un ordre logique (du général au détail) ou un ordre affectif (ce qui frappe le plus d’abord). Dans l’incipit d’« Aux champs », le narrateur part de la route (vue d’ensemble) pour aller vers les détails des maisons.',
    },
    { kind: 'sub', text: 'Adjectifs qualificatifs et champs lexicaux' },
    {
      kind: 'p',
      text: 'L’adjectif qualificatif précise le nom et oriente le regard du lecteur : c’est lui qui donne sa valeur (méliorative ou péjorative) à la description. Le champ lexical — ensemble de mots se rapportant à un même thème — crée l’unité du portrait : ici, « soupe, pommes de terre, chaume, mendiants » composent le champ lexical de la pauvreté.',
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour analyser une description, suivez toujours ce plan : ce qui est décrit → comment (outils linguistiques) → dans quel ordre → pourquoi (fonction).',
    },
  ],
  rule: [
    'La description est une peinture par les mots : elle montre un être, un lieu ou un objet.',
    'Ses outils : imparfait, verbes d’état, adjectifs qualificatifs, comparaisons, indicateurs spatiaux, champs lexicaux.',
    'Ses fonctions : informer (référentielle), créer une atmosphère (esthétique), symboliser, préparer le récit (narrative).',
    'Elle suit un ordre : spatial (du lointain au proche), logique (du général au détail) ou affectif.',
  ],
  examples: [
    '« Ses fenêtres minuscules » → adjectif à valeur péjorative : la pauvreté.',
    '« Semblaient deux mendiants côte à côte » → comparaison qui donne une valeur symbolique aux maisons.',
    '« Au bord de la route, à l’entrée du petit village » → indicateurs spatiaux qui situent le décor.',
    'Soupe, pommes de terre, chaume, délabrées → champ lexical de la misère paysanne.',
  ],
  exercises: [
    {
      id: 'td-q1',
      type: 'qcm',
      question: 'Quel est le temps verbal dominant d’une description au passé ?',
      options: ['Le passé simple', 'L’imparfait', 'Le futur', 'Le présent de l’indicatif uniquement'],
      answer: 1,
      explain: 'L’imparfait est le temps de la description : il exprime la durée, l’état et l’arrière-plan.',
    },
    {
      id: 'td-q2',
      type: 'associe',
      question: 'Associez chaque passage à la fonction de description correspondante.',
      pairs: [
        ['« Le village se trouvait à dix lieues de Rouen »', 'Fonction informative (situer)'],
        ['« La maison sombre semblait pleurer »', 'Fonction symbolique (reflet d’un sentiment)'],
        ['« Le sol était couvert de débris et de verre brisé »', 'Fonction narrative (préparer un événement)'],
      ],
      explain: 'La première phrase informe ; la seconde donne une valeur symbolique au décor ; la troisième annonce qu’un accident pourra se produire.',
    },
    {
      id: 'td-q3',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'L’ensemble des mots qui se rapportent à un même thème s’appelle un champ ___.',
      answers: ['lexical'],
      explain: 'Le champ lexical regroupe noms, verbes et adjectifs liés à un même thème (la mer, la pauvreté, la fête…).',
    },
    {
      id: 'td-q4',
      type: 'vf',
      question: 'Vrai ou faux ? Une description n’a jamais de rôle dans le récit : elle ne sert qu’à décorer.',
      vfAnswer: false,
      explain: 'Faux. La description informe, crée une atmosphère, symbolise et prépare souvent les événements du récit.',
    },
  ],
  synthese: [
    'Décrire, c’est peindre avec les mots pour faire voir au lecteur.',
    'Outils : imparfait, verbes d’état, adjectifs, comparaisons, indicateurs spatiaux, champs lexicaux.',
    'Fonctions : informative, esthétique, symbolique, narrative.',
    'Organisation : ordre spatial, logique ou affectif.',
  ],
  keywords: ['texte descriptif', 'description', 'adjectif qualificatif', 'champ lexical', 'fonctions de la description', 'indicateurs spatiaux', 'portrait'],
};

const texteExplicatif: Lesson = {
  id: 'texte-explicatif',
  title: 'Le texte explicatif et ses caractéristiques',
  minutes: 50,
  objectives: [
    'définir le texte explicatif et son objectif ;',
    'identifier ses caractéristiques et son organisation ;',
    'employer les connecteurs logiques de l’explication ;',
    'reconnaître les procédés explicatifs.',
  ],
  observation: {
    label: 'Lisez ce passage',
    text:
      '« La mer est salée parce que les fleuves, en traversant les roches, entraînent des minéraux jusqu’aux océans. Ainsi, le sel s’accumule depuis des millions d’années. C’est pourquoi l’eau de mer est environ quatre fois plus salée que l’eau des rivières. »',
  },
  sections: [
    { kind: 'sub', text: 'Définition et objectif' },
    {
      kind: 'p',
      text: 'Le texte explicatif a pour objectif de faire comprendre un phénomène, une notion ou un fonctionnement. Il répond à la question « pourquoi ? » ou « comment ? ». On le rencontre dans les manuels scolaires, les encyclopédies, les documentaires et les articles de vulgarisation.',
    },
    { kind: 'sub', text: 'Caractéristiques' },
    {
      kind: 'liste',
      title: 'Les marques du texte explicatif',
      items: [
        'Présent de vérité générale : « l’eau bout à 100 °C ».',
        'Ton neutre et objectif : pas de « je », pas de sentiments.',
        'Vocabulaire précis, termes techniques expliqués.',
        'Connecteurs logiques : parce que, en effet, c’est pourquoi, ainsi, donc.',
        'Structure : introduction (question) → développement (explication) → conclusion (bilan).',
      ],
    },
    { kind: 'sub', text: 'L’organisation de l’explication' },
    {
      kind: 'p',
      text: 'L’explication suit le plus souvent l’ordre logique cause → conséquence, ou l’ordre chronologique (étapes d’un phénomène), ou encore l’ordre problème → solution. Chaque paragraphe développe une idée appuyée par un procédé explicatif.',
    },
    {
      kind: 'tableau',
      title: 'Les principaux procédés explicatifs',
      headers: ['Procédé', 'Définition', 'Exemple'],
      rows: [
        ['La définition', 'Donner le sens exact d’un mot ou d’une notion', '« On appelle incipit le début d’un récit. »'],
        ['La reformulation', 'Redire autrement pour clarifier (autrement dit, c’est-à-dire)', '« Le récit est rétrospectif, c’est-à-dire raconté après coup. »'],
        ['La comparaison', 'Éclairer par un rapprochement connu', '« Le cœur fonctionne comme une pompe. »'],
        ['L’exemple', 'Illustrer un cas général par un cas particulier', '« Certaines villes sont très polluées, comme Mexico. »'],
        ['L’énumération', 'Lister des éléments', '« Trois facteurs expliquent ce phénomène : A, B et C. »'],
        ['L’analyse cause/conséquence', 'Relier un phénomène à ses causes et à ses effets', '« Parce que…, c’est pourquoi… »'],
      ],
    },
    { kind: 'sub', text: 'Les connecteurs logiques' },
    {
      kind: 'liste',
      title: 'Classer les connecteurs',
      items: [
        'Cause : car, parce que, en effet, grâce à, à cause de.',
        'Conséquence : donc, ainsi, c’est pourquoi, par conséquent, alors.',
        'Addition : de plus, en outre, par ailleurs.',
        'Opposition : mais, cependant, en revanche, or.',
        'Ordre : d’abord, ensuite, enfin.',
      ],
    },
    {
      kind: 'note',
      tone: 'attention',
      text: 'Ne confondez pas expliquer (faire comprendre, texte explicatif) et argumenter (convaincre, texte argumentatif). L’explication est neutre ; l’argumentation défend une thèse.',
    },
  ],
  rule: [
    'Le texte explicatif fait comprendre un phénomène ou une notion ; il répond aux questions « pourquoi ? » et « comment ? ».',
    'Ses marques : présent de vérité générale, ton neutre, vocabulaire précis, connecteurs logiques.',
    'Organisation : question → explication → bilan, selon l’ordre cause/conséquence, chronologique ou problème/solution.',
    'Procédés : définition, reformulation, comparaison, exemple, énumération, analyse cause/conséquence.',
  ],
  examples: [
    '« La mer est salée parce que les fleuves entraînent des minéraux » → analyse cause/conséquence.',
    '« Ainsi, le sel s’accumule depuis des millions d’années » → connecteur de conséquence + présent de vérité générale.',
    '« On appelle incipit le début d’un récit » → procédé de la définition.',
    '« Le cœur fonctionne comme une pompe » → comparaison explicative.',
  ],
  exercises: [
    {
      id: 'te-q1',
      type: 'qcm',
      question: 'Quel connecteur exprime la cause ?',
      options: ['C’est pourquoi', 'En effet', 'Par conséquent', 'Ainsi'],
      answer: 1,
      explain: '« En effet » introduit une cause ou une justification. Les trois autres connecteurs expriment la conséquence.',
    },
    {
      id: 'te-q2',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'Le temps verbal caractéristique du texte explicatif est le présent de vérité ___.',
      answers: ['générale', 'generale'],
      explain: 'Le présent de vérité générale énonce des faits valables à toute époque : « L’eau bout à 100 °C. »',
    },
    {
      id: 'te-q3',
      type: 'associe',
      question: 'Associez chaque énoncé au procédé explicatif utilisé.',
      pairs: [
        ['« On appelle métaphore une comparaison sans outil »', 'Définition'],
        ['« Le cerveau est un peu comme un ordinateur »', 'Comparaison'],
        ['« Autrement dit, l’auteur reste neutre »', 'Reformulation'],
      ],
      explain: 'La définition donne le sens d’un terme ; la comparaison rapproche deux réalités ; la reformulation redit autrement (« autrement dit »).',
    },
    {
      id: 'te-q4',
      type: 'vf',
      question: 'Vrai ou faux ? Un texte explicatif défend une opinion personnelle.',
      vfAnswer: false,
      explain: 'Faux. L’explication est neutre et objective. Défendre une opinion, c’est le rôle du texte argumentatif.',
    },
  ],
  synthese: [
    'Expliquer = faire comprendre (pourquoi ? comment ?) de façon neutre et objective.',
    'Marques : présent de vérité générale, connecteurs logiques, vocabulaire précis.',
    'Six procédés : définition, reformulation, comparaison, exemple, énumération, cause/conséquence.',
    'Plan type : question → explication organisée → bilan.',
  ],
  keywords: ['texte explicatif', 'connecteurs logiques', 'procédés explicatifs', 'définition', 'reformulation', 'cause', 'conséquence', 'présent de vérité générale'],
};

const texteArgumentatif: Lesson = {
  id: 'texte-argumentatif',
  title: 'Le texte argumentatif et ses caractéristiques',
  minutes: 60,
  objectives: [
    'définir le texte argumentatif, la thèse et l’argument ;',
    'distinguer convaincre et persuader ;',
    'identifier les procédés argumentatifs (réfutation, concession) ;',
    'employer les connecteurs logiques de l’argumentation ;',
    'repérer la structure d’un raisonnement.',
  ],
  observation: {
    label: 'Lisez ce court plaidoyer',
    text:
      '« On prétend que la lecture fait perdre du temps. Or, je crois au contraire qu’elle nous en fait gagner : en une heure de lecture, nous vivons mille vies. Certes, tous les livres ne se valent pas, mais priver un jeune de livres, c’est le priver de pensée. »',
  },
  sections: [
    { kind: 'sub', text: 'Définition : thèse, arguments, exemples' },
    {
      kind: 'p',
      text: 'Le texte argumentatif défend une opinion, appelée thèse, à l’aide d’arguments (raisons) illustrés par des exemples. Son but est d’agir sur le lecteur : obtenir son adhésion ou le pousser à agir. L’émetteur est appelé argumentateur, le destinataire argumentataire.',
    },
    {
      kind: 'liste',
      title: 'La structure du raisonnement',
      items: [
        'Thèse : l’opinion défendue (« la lecture fait gagner du temps »).',
        'Argument : la raison qui soutient la thèse (« en une heure, on vit mille vies »).',
        'Exemple : le cas concret qui illustre l’argument.',
        'Conclusion : reprise de la thèse, souvent renforcée.',
      ],
    },
    { kind: 'sub', text: 'Convaincre et persuader' },
    {
      kind: 'tableau',
      title: 'Deux manières d’agir sur le destinataire',
      headers: ['', 'Convaincre', 'Persuader'],
      rows: [
        ['S’adresse à…', 'la raison, la logique', 'la sensibilité, les émotions'],
        ['Outils', 'arguments logiques, preuves, exemples', 'figures de style, pathétique, ironie'],
        ['Registres', 'logos (logique)', 'pathos (émotion), ethos (autorité)'],
        ['Exemple', '« 80 % des lecteurs réussissent mieux »', '« Imaginez un enfant sans histoires… »'],
      ],
    },
    { kind: 'sub', text: 'Les procédés argumentatifs' },
    {
      kind: 'liste',
      title: 'Les moyens pour emporter l’adhésion',
      items: [
        'L’argument logique : enchaînement de causes et de conséquences.',
        'L’argument d’autorité : citer un expert reconnu.',
        'L’argument par l’exemple : illustrer par un cas concret.',
        'L’analogie : comparer à une situation connue.',
        'La réfutation : démonter la thèse adverse (« On prétend que… or… »).',
        'La concession : accorder un point à l’adversaire (« Certes… mais… ») pour mieux imposer sa thèse.',
      ],
    },
    { kind: 'sub', text: 'Les connecteurs logiques de l’argumentation' },
    {
      kind: 'liste',
      title: 'Classer les connecteurs',
      items: [
        'Ajout d’un argument : de plus, en outre, d’ailleurs.',
        'Opposition / réfutation : mais, or, cependant, au contraire.',
        'Concession : certes, sans doute, il est vrai que… mais.',
        'Conséquence : donc, ainsi, par conséquent, c’est pourquoi.',
        'Conclusion : en conclusion, en somme, finalement.',
      ],
    },
    {
      kind: 'note',
      tone: 'astuce',
      text: 'Pour analyser un texte argumentatif : 1) trouvez la thèse ; 2) numérotez les arguments ; 3) repérez les exemples ; 4) identifiez les procédés (réfutation, concession…) ; 5) classez les connecteurs.',
    },
  ],
  rule: [
    'Le texte argumentatif défend une thèse à l’aide d’arguments et d’exemples pour obtenir l’adhésion du lecteur.',
    'Convaincre = toucher la raison (logique, preuves). Persuader = toucher la sensibilité (émotions, style).',
    'Réfuter, c’est combattre la thèse adverse ; concéder (« certes… mais… »), c’est accorder un point pour mieux défendre sa thèse.',
    'Les connecteurs organisent le raisonnement : ajout, opposition, concession, conséquence, conclusion.',
  ],
  examples: [
    '« On prétend que la lecture fait perdre du temps. Or… » → réfutation de la thèse adverse.',
    '« Certes, tous les livres ne se valent pas, mais… » → concession.',
    '« En une heure de lecture, nous vivons mille vies » → argument + hyperbole pour persuader.',
    '« C’est le priver de pensée » → conséquence dramatisée : on touche l’émotion du lecteur.',
  ],
  exercises: [
    {
      id: 'ta-q1',
      type: 'qcm',
      question: '« Certes, ce film est long, mais il est magnifique. » Quel procédé est employé ?',
      options: ['La réfutation', 'La concession', 'L’analogie', 'L’argument d’autorité'],
      answer: 1,
      explain: '« Certes… mais… » accorde un défaut (concession) pour mieux affirmer la qualité : c’est le schéma classique de la concession.',
    },
    {
      id: 'ta-q2',
      type: 'associe',
      question: 'Associez chaque moyen à son objectif.',
      pairs: [
        ['Chiffres, preuves, logique', 'Convaincre'],
        ['Émotions, figures de style, images', 'Persuader'],
        ['Citer un spécialiste reconnu', 'Argument d’autorité'],
      ],
      explain: 'On convainc la raison avec des preuves ; on persuade la sensibilité avec des émotions ; citer un expert, c’est l’argument d’autorité.',
    },
    {
      id: 'ta-q3',
      type: 'complete',
      question: 'Complétez la phrase.',
      sentence: 'L’opinion défendue par l’argumentateur s’appelle la ___.',
      answers: ['thèse', 'these'],
      explain: 'La thèse est l’idée que l’auteur veut faire admettre ; les arguments la soutiennent, les exemples l’illustrent.',
    },
    {
      id: 'ta-q4',
      type: 'ordre',
      question: 'Remettez le raisonnement dans l’ordre logique.',
      items: ['Thèse', 'Argument', 'Exemple', 'Conclusion'],
      shuffled: ['Exemple', 'Conclusion', 'Thèse', 'Argument'],
      explain: 'Un raisonnement classique : on énonce la thèse, on la soutient par un argument, on illustre par un exemple, on conclut.',
    },
    {
      id: 'ta-q5',
      type: 'vf',
      question: 'Vrai ou faux ? Réfuter, c’est adopter la thèse de l’adversaire.',
      vfAnswer: false,
      explain: 'Faux. Réfuter, c’est au contraire démonter la thèse adverse en montrant ses faiblesses.',
    },
  ],
  synthese: [
    'Argumenter = défendre une thèse par des arguments et des exemples.',
    'Structure : thèse → arguments → exemples → conclusion.',
    'Convaincre (raison) ≠ persuader (émotions).',
    'Procédés : réfutation, concession, analogie, argument d’autorité, argument par l’exemple.',
  ],
  keywords: ['texte argumentatif', 'thèse', 'argument', 'exemple', 'convaincre', 'persuader', 'réfutation', 'concession', 'connecteurs logiques', 'essai', 'plaidoyer'],
};

export const moduleI: CourseModule = {
  id: 'module-1',
  title: 'Module I — Genres et formes de textes',
  description: 'Les bases de l’étude de la langue et des genres littéraires : reconnaître les grandes familles de textes et leurs caractéristiques.',
  sequences: [
    {
      id: 'seq-inaugurale',
      title: 'Séquence inaugurale',
      subtitle: 'Découvrir les grandes familles de la littérature',
      lessons: [genresLitteraires],
    },
    {
      id: 'seq-1',
      title: 'Séquence 1 — Raconter',
      subtitle: 'Le texte narratif et ses caractéristiques',
      lessons: [texteNarratif],
    },
    {
      id: 'seq-2',
      title: 'Séquence 2 — Décrire',
      subtitle: 'Le texte descriptif et ses caractéristiques',
      lessons: [texteDescriptif],
    },
    {
      id: 'seq-3',
      title: 'Séquence 3 — Expliquer',
      subtitle: 'Le texte explicatif et ses caractéristiques',
      lessons: [texteExplicatif],
    },
    {
      id: 'seq-4',
      title: 'Séquence 4 — Convaincre',
      subtitle: 'Le texte argumentatif et ses caractéristiques',
      lessons: [texteArgumentatif],
    },
  ],
};
