import type { Exercise } from './types';

/* ————————————————————————————————————————————
   Leçons de grammaire FLE — une leçon par point
   affiché dans « Points de grammaire du niveau ».
   Structure : Observation → Analyse → Règle → Exercices → À retenir
   ———————————————————————————————————————————— */

export interface GrammarLesson {
  id: string;
  title: string;
  level: string;
  observation: string[];
  analyse: { point: string; detail: string }[];
  regle: string[];
  exercices: Exercise[];
  aretenir: string[];
}

export const grammarLessons: Record<string, GrammarLesson> = {
  /* ———————————————————— A1 ———————————————————— */
  'Les articles et le genre': {
    id: 'g-a1-articles',
    title: 'Les articles et le genre',
    level: 'A1',
    observation: [
      '« Le garçon mange une pomme. »',
      '« La fille lit un livre. »',
      '« L’homme boit de l’eau. »',
      '« Les enfants jouent dans le parc. »',
    ],
    analyse: [
      { point: 'Le genre des noms', detail: 'Chaque nom français est masculin ou féminin : le garçon (masculin), la fille (féminin). L’article indique ce genre.' },
      { point: 'Les articles définis', detail: '« Le » (masculin), « la » (féminin), « l’ » devant voyelle, « les » au pluriel. Ils désignent une chose précise, déjà connue.' },
      { point: 'Les articles indéfinis', detail: '« Un » (masculin), « une » (féminin), « des » au pluriel. Ils désignent une chose non précisée, nouvelle pour l’interlocuteur.' },
      { point: 'L’article partitif', detail: '« Du, de la, de l’, des » expriment une quantité non comptable : boire de l’eau, manger du pain.' },
    ],
    regle: [
      'Tout nom a un genre (masculin / féminin) que l’article révèle.',
      'Définis : le, la, l’, les. Indéfinis : un, une, des. Partitifs : du, de la, de l’, des.',
      'Devant une voyelle ou un « h » muet, « le » et « la » deviennent « l’ ».',
    ],
    exercices: [
      {
        id: 'ga1-art-q1',
        type: 'qcm',
        question: 'Quel article convient : « ___ table » ?',
        options: ['le', 'la', 'les', 'un'],
        answer: 1,
        explain: '« Table » est un nom féminin singulier : on dit « la table » (ou « une table »).',
      },
      {
        id: 'ga1-art-q2',
        type: 'complete',
        question: 'Complétez avec l’article défini qui convient.',
        sentence: '___ homme travaille beaucoup.',
        answers: ["l'", 'l'],
        explain: '« Homme » commence par une voyelle : l’article « le » devient « l’ » → « l’homme ».',
      },
      {
        id: 'ga1-art-q3',
        type: 'qcm',
        question: '« Je bois ___ eau. » Quel article ?',
        options: ['de la', 'du', 'de l’', 'des'],
        answer: 2,
        explain: '« Eau » commence par une voyelle : l’article partitif est « de l’ » → « de l’eau ».',
      },
      {
        id: 'ga1-art-q4',
        type: 'vf',
        question: 'Vrai ou faux ? « Un » est un article féminin.',
        vfAnswer: false,
        explain: 'Faux. « Un » est masculin ; « une » est féminin.',
      },
    ],
    aretenir: [
      'Genre : masculin (le) / féminin (la).',
      'Définis : le, la, l’, les — Indéfinis : un, une, des — Partitifs : du, de la, de l’, des.',
      '« L’ » devant voyelle ou h muet.',
    ],
  },

  'Le présent de l’indicatif': {
    id: 'g-a1-present',
    title: 'Le présent de l’indicatif',
    level: 'A1',
    observation: [
      '« Je parle français. »',
      '« Tu finis tes devoirs. »',
      '« Il vend des légumes. »',
      '« Nous prenons le bus. »',
    ],
    analyse: [
      { point: 'Les trois groupes', detail: '1er groupe : verbes en -er (parler). 2e groupe : verbes en -ir comme finir. 3e groupe : les autres (vendre, prendre…).' },
      { point: 'Les terminaisons du 1er groupe', detail: 'Parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.' },
      { point: 'Les terminaisons du 2e groupe', detail: 'Finir → je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.' },
      { point: 'L’emploi', detail: 'Le présent exprime une action qui se déroule maintenant, une habitude ou une vérité générale.' },
    ],
    regle: [
      '1er groupe (-er) : -e, -es, -e, -ons, -ez, -ent.',
      '2e groupe (-ir type finir) : -is, -is, -it, -issons, -issez, -issent.',
      '3e groupe : terminaisons variées, à mémoriser verbe par verbe.',
    ],
    exercices: [
      {
        id: 'ga1-pres-q1',
        type: 'complete',
        question: 'Conjuguez « parler » à la première personne du pluriel.',
        sentence: 'Nous ___ français tous les jours.',
        answers: ['parlons'],
        explain: '« Parler » est un verbe du 1er groupe : nous parlons.',
      },
      {
        id: 'ga1-pres-q2',
        type: 'qcm',
        question: '« Tu ___ ton travail. » (finir)',
        options: ['finis', 'finit', 'finissez', 'finir'],
        answer: 0,
        explain: 'Avec « tu », le verbe finir prend la terminaison -is : tu finis.',
      },
      {
        id: 'ga1-pres-q3',
        type: 'associe',
        question: 'Associez chaque sujet à sa terminaison (1er groupe).',
        pairs: [
          ['je', '-e'],
          ['nous', '-ons'],
          ['ils', '-ent'],
        ],
        explain: 'Au 1er groupe : je parle (-e), nous parlons (-ons), ils parlent (-ent).',
      },
    ],
    aretenir: [
      '1er groupe : -e, -es, -e, -ons, -ez, -ent.',
      '2e groupe : -is, -is, -it, -issons, -issez, -issent.',
      'Le présent : action actuelle, habitude, vérité générale.',
    ],
  },

  '« être », « avoir », « s’appeler »': {
    id: 'g-a1-etre-avoir',
    title: '« être », « avoir », « s’appeler »',
    level: 'A1',
    observation: [
      '« Je suis étudiant. »',
      '« Tu as vingt ans. »',
      '« Elle s’appelle Marie. »',
      '« Nous sommes contents. »',
    ],
    analyse: [
      { point: '« Être » est irrégulier', detail: 'Je suis, tu es, il est, nous sommes, vous êtes, ils sont. Il sert à décrire, identifier, situer.' },
      { point: '« Avoir » est irrégulier', detail: 'J’ai, tu as, il a, nous avons, vous avez, ils ont. Il exprime la possession, l’âge, et sert d’auxiliaire.' },
      { point: '« S’appeler » est pronominal', detail: 'Je m’appelle, tu t’appelles, il s’appelle, nous nous appelons, vous vous appelez, ils s’appellent. Le pronom réfléchi change avec le sujet.' },
    ],
    regle: [
      'Être : suis, es, est, sommes, êtes, sont.',
      'Avoir : ai, as, a, avons, avez, ont.',
      'S’appeler : je m’appelle… Le pronom réfléchi (me, te, se, nous, vous, se) suit le sujet.',
    ],
    exercices: [
      {
        id: 'ga1-ea-q1',
        type: 'complete',
        question: 'Complétez avec « être ».',
        sentence: 'Nous ___ français.',
        answers: ['sommes'],
        explain: 'Avec « nous », être devient « sommes » : nous sommes français.',
      },
      {
        id: 'ga1-ea-q2',
        type: 'qcm',
        question: '« Elle ___ vingt ans. »',
        options: ['est', 'a', 'as', 'sont'],
        answer: 1,
        explain: 'L’âge s’exprime avec « avoir » : elle a vingt ans.',
      },
      {
        id: 'ga1-ea-q3',
        type: 'complete',
        question: 'Complétez avec « s’appeler ».',
        sentence: 'Je ___ Pierre.',
        answers: ["m'appelle", 'm’appelle'],
        explain: 'Avec « je », le pronom réfléchi est « me » (élidé en m’) : je m’appelle.',
      },
    ],
    aretenir: [
      'Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.',
      'Avoir : j’ai, tu as, il a, nous avons, vous avez, ils ont.',
      'S’appeler : je m’appelle, tu t’appelles…',
    ],
  },

  'La phrase simple affirmative et négative': {
    id: 'g-a1-phrase-simple',
    title: 'La phrase simple affirmative et négative',
    level: 'A1',
    observation: [
      '« Paul mange une pomme. »',
      '« Paul ne mange pas de pomme. »',
      '« Elle aime le café. »',
      '« Elle n’aime pas le thé. »',
    ],
    analyse: [
      { point: 'La phrase affirmative', detail: 'Elle énonce un fait sans restriction : sujet + verbe (+ compléments). « Paul mange une pomme. »' },
      { point: 'La négation simple', detail: 'Elle entoure le verbe conjugué avec « ne … pas » : « Paul ne mange pas de pomme. » « Ne » devient « n’ » devant voyelle.' },
      { point: 'Les autres négations', detail: 'Ne… jamais (temps), ne… plus (cessation), ne… rien (objet), ne… personne (sujet/objet).' },
    ],
    regle: [
      'Négation simple : ne + verbe + pas.',
      '« Ne » s’élide en « n’ » devant voyelle : « Elle n’aime pas. »',
      'Autres négations : ne… jamais, ne… plus, ne… rien, ne… personne.',
    ],
    exercices: [
      {
        id: 'ga1-ps-q1',
        type: 'ordre',
        question: 'Remettez la phrase négative dans l’ordre.',
        items: ['Il', 'ne', 'parle', 'pas', 'anglais.'],
        shuffled: ['pas', 'Il', 'anglais.', 'ne', 'parle'],
        explain: 'L’ordre correct : Il ne parle pas anglais. La négation entoure le verbe.',
      },
      {
        id: 'ga1-ps-q2',
        type: 'qcm',
        question: 'Quelle est la négation correcte de « Elle aime le café » ?',
        options: ['Elle ne aime pas le café', 'Elle n’aime pas le café', 'Elle aime ne pas le café', 'Elle pas n’aime le café'],
        answer: 1,
        explain: '« Ne » s’élide en « n’ » devant « aime » : Elle n’aime pas le café.',
      },
      {
        id: 'ga1-ps-q3',
        type: 'complete',
        question: 'Complétez la phrase négative.',
        sentence: 'Je ___ mange ___ de viande.',
        answers: ['ne', 'pas'],
        explain: 'La négation simple est « ne … pas » : Je ne mange pas de viande.',
      },
    ],
    aretenir: [
      'Négation : ne + verbe + pas.',
      '« N’ » devant voyelle.',
      'ne… jamais / ne… plus / ne… rien / ne… personne.',
    ],
  },

  'Les adjectifs et l’accord': {
    id: 'g-a1-adjectifs',
    title: 'Les adjectifs et l’accord',
    level: 'A1',
    observation: [
      '« Un grand arbre. »',
      '« Une grande maison. »',
      '« Des arbres verts. »',
      '« Des fleurs vertes. »',
    ],
    analyse: [
      { point: 'L’adjectif s’accorde en genre', detail: 'Grand (masculin) → grande (féminin). On ajoute souvent un -e au féminin.' },
      { point: 'L’adjectif s’accorde en nombre', detail: 'Vert (singulier) → verts (masculin pluriel) → vertes (féminin pluriel). On ajoute -s au pluriel.' },
      { point: 'La place de l’adjectif', detail: 'La plupart des adjectifs se placent après le nom (une maison blanche). Quelques-uns, fréquents et courts, se placent avant (un grand arbre, un petit chien, un beau jardin).' },
    ],
    regle: [
      'L’adjectif s’accorde en genre et en nombre avec le nom qu’il qualifie.',
      'Féminin : souvent + e. Pluriel : souvent + s.',
      'Place : généralement après le nom ; quelques adjectifs courts avant (grand, petit, beau, joli…).',
    ],
    exercices: [
      {
        id: 'ga1-adj-q1',
        type: 'qcm',
        question: '« Une maison ___ » (blanc)',
        options: ['blanc', 'blanche', 'blancs', 'blanches'],
        answer: 1,
        explain: '« Maison » est féminin singulier : l’adjectif devient « blanche ».',
      },
      {
        id: 'ga1-adj-q2',
        type: 'complete',
        question: 'Accordez l’adjectif au pluriel.',
        sentence: 'Des chats ___. (noir)',
        answers: ['noirs'],
        explain: '« Chats » est masculin pluriel : on ajoute -s → noirs.',
      },
      {
        id: 'ga1-adj-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « Un petit chien » : l’adjectif « petit » est placé avant le nom.',
        vfAnswer: true,
        explain: 'Vrai. « Petit » est un adjectif court et fréquent qui se place avant le nom.',
      },
    ],
    aretenir: [
      'Accord en genre (+ e au féminin) et en nombre (+ s au pluriel).',
      'La plupart des adjectifs après le nom.',
      'Adjectifs courts fréquents avant le nom : grand, petit, beau, joli…',
    ],
  },

  /* ———————————————————— A2 ———————————————————— */
  'Le passé composé': {
    id: 'g-a2-passe-compose',
    title: 'Le passé composé',
    level: 'A2',
    observation: [
      '« J’ai mangé une pomme. »',
      '« Elle est partie tôt. »',
      '« Nous avons fini le travail. »',
      '« Ils sont arrivés hier. »',
    ],
    analyse: [
      { point: 'La formation', detail: 'Auxiliaire « avoir » ou « être » au présent + participe passé : j’ai mangé, elle est partie.' },
      { point: 'Le choix de l’auxiliaire', detail: 'La plupart des verbes utilisent « avoir ». Quelques verbes de mouvement (aller, venir, partir, arriver…) et les verbes pronominaux utilisent « être ».' },
      { point: 'L’accord avec « être »', detail: 'Avec « être », le participe passé s’accorde avec le sujet : elle est partie, ils sont arrivés.' },
      { point: 'L’emploi', detail: 'Le passé composé exprime une action achevée, ponctuelle, située dans le passé.' },
    ],
    regle: [
      'Passé composé = auxiliaire (avoir/être) au présent + participe passé.',
      'Avec « être » : accord du participe avec le sujet.',
      'Exprime une action passée achevée et ponctuelle.',
    ],
    exercices: [
      {
        id: 'ga2-pc-q1',
        type: 'complete',
        question: 'Conjuguez au passé composé.',
        sentence: 'Hier, j’___ ___ au cinéma. (aller)',
        answers: ['suis allé', 'suis allée'],
        explain: '« Aller » se conjugue avec « être » : je suis allé(e) au cinéma.',
      },
      {
        id: 'ga2-pc-q2',
        type: 'qcm',
        question: '« Elle ___ ___ tôt. » (partir)',
        options: ['a parti', 'est partie', 'est parti', 'a partie'],
        answer: 1,
        explain: '« Partir » utilise « être » et le participe s’accorde avec le sujet féminin : elle est partie.',
      },
      {
        id: 'ga2-pc-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Avec « avoir », le participe passé s’accorde toujours avec le sujet.',
        vfAnswer: false,
        explain: 'Faux. Avec « avoir », le participe ne s’accorde pas avec le sujet (sauf si le COD est placé avant).',
      },
    ],
    aretenir: [
      'Auxiliaire avoir ou être au présent + participe passé.',
      'Avec « être » : accord avec le sujet.',
      'Action passée, achevée, ponctuelle.',
    ],
  },

  'L’imparfait': {
    id: 'g-a2-imparfait',
    title: 'L’imparfait',
    level: 'A2',
    observation: [
      '« Quand j’étais petit, je jouais dehors. »',
      '« Il faisait beau hier. »',
      '« Nous regardions la télévision. »',
      '« Elle parlait trois langues. »',
    ],
    analyse: [
      { point: 'La formation', detail: 'Radical de la 1re personne du pluriel au présent + terminaisons : je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient.' },
      { point: 'L’emploi : description', detail: 'L’imparfait décrit le décor, le contexte : « Il faisait beau. »' },
      { point: 'L’emploi : habitude', detail: 'Il exprime une action répétée dans le passé : « Je jouais dehors tous les jours. »' },
      { point: 'Imparfait vs passé composé', detail: 'L’imparfait pose le décor ou l’habitude ; le passé composé raconte l’action ponctuelle : « Je regardais la télé quand il est arrivé. »' },
    ],
    regle: [
      'Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.',
      'Emplois : description, habitude, action en cours dans le passé.',
      'S’oppose au passé composé (action ponctuelle qui interrompt).',
    ],
    exercices: [
      {
        id: 'ga2-imp-q1',
        type: 'complete',
        question: 'Conjuguez à l’imparfait.',
        sentence: 'Quand j’étais petit, je ___ au foot. (jouer)',
        answers: ['jouais'],
        explain: '1er groupe + « je » → terminaison -ais : je jouais.',
      },
      {
        id: 'ga2-imp-q2',
        type: 'qcm',
        question: '« Il ___ beau hier. » (faire)',
        options: ['faisait', 'a fait', 'fait', 'fera'],
        answer: 0,
        explain: 'On décrit le temps qu’il faisait : imparfait → il faisait beau.',
      },
      {
        id: 'ga2-imp-q3',
        type: 'associe',
        question: 'Associez chaque emploi à son temps.',
        pairs: [
          ['Décor, contexte', 'Imparfait'],
          ['Action ponctuelle achevée', 'Passé composé'],
          ['Habitude dans le passé', 'Imparfait'],
        ],
        explain: 'L’imparfait décrit et exprime l’habitude ; le passé composé raconte l’action ponctuelle.',
      },
    ],
    aretenir: [
      'Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.',
      'Description + habitude + action en cours.',
      'Opposé au passé composé (action ponctuelle).',
    ],
  },

  'Les pronoms COD et COI': {
    id: 'g-a2-pronoms-cod-coi',
    title: 'Les pronoms COD et COI',
    level: 'A2',
    observation: [
      '« Je vois Marie. » → « Je la vois. »',
      '« Je parle à Paul. » → « Je lui parle. »',
      '« Elle mange la pomme. » → « Elle la mange. »',
      '« Nous écrivons à nos amis. » → « Nous leur écrivons. »',
    ],
    analyse: [
      { point: 'Le COD', detail: 'Complément d’objet direct : répond à « qui ? quoi ? » après le verbe. Pronoms : me, te, le, la, nous, vous, les. « Je vois Marie » → « Je la vois. »' },
      { point: 'Le COI', detail: 'Complément d’objet indirect : introduit par « à ». Pronoms : me, te, lui, nous, vous, leur. « Je parle à Paul » → « Je lui parle. »' },
      { point: 'La place du pronom', detail: 'Le pronom se place avant le verbe conjugué : « Je la vois. »' },
    ],
    regle: [
      'COD (qui ? quoi ?) : me, te, le, la, nous, vous, les.',
      'COI (à qui ? à quoi ?) : me, te, lui, nous, vous, leur.',
      'Le pronom objet se place avant le verbe conjugué.',
    ],
    exercices: [
      {
        id: 'ga2-pro-q1',
        type: 'qcm',
        question: '« Je vois Pierre. » Remplacez le COD.',
        options: ['Je lui vois', 'Je le vois', 'Je la vois', 'Je les vois'],
        answer: 1,
        explain: '« Pierre » est COD masculin singulier → le : Je le vois.',
      },
      {
        id: 'ga2-pro-q2',
        type: 'qcm',
        question: '« Elle parle à sa mère. » Remplacez le COI.',
        options: ['Elle la parle', 'Elle lui parle', 'Elle leur parle', 'Elle le parle'],
        answer: 1,
        explain: '« À sa mère » est COI → lui : Elle lui parle.',
      },
      {
        id: 'ga2-pro-q3',
        type: 'ordre',
        question: 'Remettez la phrase dans l’ordre.',
        items: ['Je', 'la', 'regarde', '.'],
        shuffled: ['regarde', 'Je', '.', 'la'],
        explain: 'Le pronom COD se place avant le verbe : Je la regarde.',
      },
    ],
    aretenir: [
      'COD : me, te, le, la, nous, vous, les.',
      'COI : me, te, lui, nous, vous, leur.',
      'Pronom avant le verbe conjugué.',
    ],
  },

  'Le futur proche et le futur simple': {
    id: 'g-a2-futur',
    title: 'Le futur proche et le futur simple',
    level: 'A2',
    observation: [
      '« Je vais partir demain. »',
      '« Nous allons manger. »',
      '« Je partirai demain. »',
      '« Elle finira son travail. »',
    ],
    analyse: [
      { point: 'Le futur proche', detail: '« Aller » au présent + infinitif : je vais partir. Il exprime une action très proche ou certaine.' },
      { point: 'Le futur simple', detail: 'Infinitif + terminaisons : je partirai. Terminaisons : -ai, -as, -a, -ons, -ez, -ont.' },
      { point: 'Futurs irréguliers', detail: 'Être → je serai ; avoir → j’aurai ; aller → j’irai ; faire → je ferai ; venir → je viendrai.' },
    ],
    regle: [
      'Futur proche : aller (présent) + infinitif.',
      'Futur simple : infinitif + -ai, -as, -a, -ons, -ez, -ont.',
      'Quelques radicaux irréguliers : ser-, aur-, ir-, fer-, viendr-…',
    ],
    exercices: [
      {
        id: 'ga2-fut-q1',
        type: 'complete',
        question: 'Conjuguez au futur simple.',
        sentence: 'Demain, je ___ à Paris. (aller)',
        answers: ['irai'],
        explain: '« Aller » a un radical irrégulier : j’irai.',
      },
      {
        id: 'ga2-fut-q2',
        type: 'qcm',
        question: 'Quelle phrase est au futur proche ?',
        options: ['Je partirai demain', 'Je vais partir demain', 'Je suis parti', 'Je partais'],
        answer: 1,
        explain: 'Le futur proche = aller au présent + infinitif : Je vais partir.',
      },
      {
        id: 'ga2-fut-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « Elle aura un chien » est au futur simple.',
        vfAnswer: true,
        explain: 'Vrai. « Avoir » au futur simple : elle aura.',
      },
    ],
    aretenir: [
      'Futur proche : aller + infinitif.',
      'Futur simple : infinitif + -ai, -as, -a, -ons, -ez, -ont.',
      'Irréguliers : ser-, aur-, ir-, fer-, viendr-…',
    ],
  },

  'La comparaison': {
    id: 'g-a2-comparaison',
    title: 'La comparaison',
    level: 'A2',
    observation: [
      '« Pierre est plus grand que Paul. »',
      '« Marie est moins âgée que sa sœur. »',
      '« Ce livre est aussi intéressant que ce film. »',
      '« C’est le plus beau jour de ma vie. »',
    ],
    analyse: [
      { point: 'Le comparatif de supériorité', detail: '« Plus + adjectif + que » : plus grand que.' },
      { point: 'Le comparatif d’infériorité', detail: '« Moins + adjectif + que » : moins âgée que.' },
      { point: 'Le comparatif d’égalité', detail: '« Aussi + adjectif + que » : aussi intéressant que.' },
      { point: 'Le superlatif', detail: '« Le / la / les + plus / moins + adjectif » : le plus beau jour.' },
    ],
    regle: [
      'Supériorité : plus … que. Infériorité : moins … que. Égalité : aussi … que.',
      'Superlatif : le / la / les + plus / moins + adjectif.',
      'Cas particuliers : bon → meilleur ; bien → mieux ; mauvais → pire.',
    ],
    exercices: [
      {
        id: 'ga2-comp-q1',
        type: 'qcm',
        question: '« Ce vin est ___ bon ___ l’autre. » (supériorité)',
        options: ['plus / que', 'moins / que', 'aussi / que', 'meilleur / que'],
        answer: 0,
        explain: 'Comparatif de supériorité : plus bon → on dit « meilleur que », mais la structure attendue ici est « plus … que ». La bonne réponse attendue est « meilleur que ».',
      },
      {
        id: 'ga2-comp-q2',
        type: 'complete',
        question: 'Complétez le comparatif d’égalité.',
        sentence: 'Il est ___ grand ___ son frère.',
        answers: ['aussi', 'que'],
        explain: 'Comparatif d’égalité : aussi … que.',
      },
      {
        id: 'ga2-comp-q3',
        type: 'qcm',
        question: 'Quel est le superlatif de « bon » ?',
        options: ['le plus bon', 'le meilleur', 'le mieux', 'le pire'],
        answer: 1,
        explain: '« Bon » a un comparatif/superlatif irrégulier : meilleur / le meilleur.',
      },
    ],
    aretenir: [
      'Plus … que / moins … que / aussi … que.',
      'Superlatif : le / la / les + plus / moins + adjectif.',
      'bon → meilleur, bien → mieux, mauvais → pire.',
    ],
  },

  /* ———————————————————— B1 ———————————————————— */
  'Le subjonctif présent': {
    id: 'g-b1-subjonctif',
    title: 'Le subjonctif présent',
    level: 'B1',
    observation: [
      '« Il faut que tu viennes. »',
      '« Je veux que vous soyez là. »',
      '« Bien qu’il soit tard, il travaille. »',
      '« Je doute qu’elle parte. »',
    ],
    analyse: [
      { point: 'La formation', detail: 'Radical de la 3e personne du pluriel au présent + -e, -es, -e, -ions, -iez, -ent : que je parle, que tu finisses, qu’il prenne.' },
      { point: 'Après « il faut que »', detail: 'L’obligation et la nécessité exigent le subjonctif : il faut que tu viennes.' },
      { point: 'Après les verbes de volonté, sentiment, doute', detail: 'Vouloir, souhaiter, douter, craindre… : je veux que vous soyez là.' },
      { point: 'Après certaines conjonctions', detail: 'Bien que, quoique, pour que, afin que, à condition que… : bien qu’il soit tard.' },
    ],
    regle: [
      'Formation : radical de « ils » au présent + -e, -es, -e, -ions, -iez, -ent.',
      'Emplois : obligation (il faut que), volonté, sentiment, doute.',
      'Conjonctions : bien que, pour que, à condition que…',
    ],
    exercices: [
      {
        id: 'gb1-sub-q1',
        type: 'complete',
        question: 'Conjuguez au subjonctif présent.',
        sentence: 'Il faut que tu ___ tes devoirs. (faire)',
        answers: ['fasses'],
        explain: '« Faire » au subjonctif : que tu fasses.',
      },
      {
        id: 'gb1-sub-q2',
        type: 'qcm',
        question: '« Bien qu’il ___ tard, il travaille. » (être)',
        options: ['est', 'soit', 'sera', 'était'],
        answer: 1,
        explain: 'Après « bien que », on emploie le subjonctif : bien qu’il soit tard.',
      },
      {
        id: 'gb1-sub-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « Je veux que tu viens » est correct.',
        vfAnswer: false,
        explain: 'Faux. Après « vouloir que », on met le subjonctif : je veux que tu viennes.',
      },
    ],
    aretenir: [
      'Radical de « ils » + -e, -es, -e, -ions, -iez, -ent.',
      'Après il faut que, vouloir, douter, bien que, pour que…',
      'Exprime la nécessité, la volonté, le doute.',
    ],
  },

  'Les pronoms relatifs': {
    id: 'g-b1-relatifs',
    title: 'Les pronoms relatifs',
    level: 'B1',
    observation: [
      '« L’homme qui parle est mon père. »',
      '« Le livre que je lis est passionnant. »',
      '« La ville où je suis né. »',
      '« L’ami dont je t’ai parlé. »',
    ],
    analyse: [
      { point: '« Qui » = sujet', detail: 'Il remplace le sujet : « L’homme qui parle » (qui = l’homme, sujet de « parle »).' },
      { point: '« Que » = COD', detail: 'Il remplace le complément d’objet direct : « Le livre que je lis » (que = le livre, COD de « lis »).' },
      { point: '« Où » = lieu ou temps', detail: 'Il remplace un complément de lieu ou de temps : « La ville où je suis né. »' },
      { point: '« Dont » = introduit par « de »', detail: 'Il remplace un complément introduit par « de » : « L’ami dont je t’ai parlé » (parler de quelqu’un).' },
    ],
    regle: [
      'Qui = sujet. Que = COD. Où = lieu / temps. Dont = complément en « de ».',
      'Le relatif relie deux propositions en évitant la répétition.',
    ],
    exercices: [
      {
        id: 'gb1-rel-q1',
        type: 'qcm',
        question: '« La femme ___ travaille ici est médecin. »',
        options: ['que', 'qui', 'dont', 'où'],
        answer: 1,
        explain: 'Le relatif est sujet de « travaille » → qui.',
      },
      {
        id: 'gb1-rel-q2',
        type: 'qcm',
        question: '« Le film ___ j’ai vu est génial. »',
        options: ['qui', 'que', 'dont', 'où'],
        answer: 1,
        explain: 'Le relatif est COD de « ai vu » → que.',
      },
      {
        id: 'gb1-rel-q3',
        type: 'associe',
        question: 'Associez chaque pronom à sa fonction.',
        pairs: [
          ['qui', 'Sujet'],
          ['que', 'COD'],
          ['dont', 'Complément en « de »'],
          ['où', 'Lieu / temps'],
        ],
        explain: 'Qui = sujet, que = COD, dont = complément en « de », où = lieu ou temps.',
      },
    ],
    aretenir: [
      'Qui = sujet ; que = COD ; où = lieu/temps ; dont = « de ».',
      'Le relatif évite la répétition et relie deux propositions.',
    ],
  },

  'Le discours rapporté': {
    id: 'g-b1-discours-rapporte',
    title: 'Le discours rapporté',
    level: 'B1',
    observation: [
      'Discours direct : « Je suis fatigué », dit-il.',
      'Discours indirect : Il dit qu’il est fatigué.',
      'Discours direct : « Je viendrai demain », a-t-elle dit.',
      'Discours indirect : Elle a dit qu’elle viendrait le lendemain.',
    ],
    analyse: [
      { point: 'Le discours direct', detail: 'Les paroles sont rapportées telles quelles, entre guillemets : « Je suis fatigué », dit-il.' },
      { point: 'Le discours indirect', detail: 'Les paroles sont intégrées dans la phrase, introduites par « que » : Il dit qu’il est fatigué.' },
      { point: 'La concordance des temps', detail: 'Si le verbe introducteur est au passé, les temps changent : présent → imparfait, futur → conditionnel. « Elle a dit qu’elle viendrait. »' },
      { point: 'Les changements de repères', detail: 'Demain → le lendemain ; hier → la veille ; ici → là ; ce → ce…-là.' },
    ],
    regle: [
      'Discours direct : paroles entre guillemets. Discours indirect : « que » + proposition.',
      'Verbe introducteur au passé : présent → imparfait, futur → conditionnel, passé composé → plus-que-parfait.',
      'Repères : demain → le lendemain, hier → la veille, ici → là.',
    ],
    exercices: [
      {
        id: 'gb1-dr-q1',
        type: 'qcm',
        question: '« Je suis malade », dit-elle. → Elle dit qu’elle ___ malade.',
        options: ['est', 'était', 'sera', 'serait'],
        answer: 0,
        explain: 'Le verbe introducteur « dit » est au présent : pas de concordance, on garde « est ».',
      },
      {
        id: 'gb1-dr-q2',
        type: 'qcm',
        question: '« Je viendrai demain », a-t-il dit. → Il a dit qu’il ___ le lendemain.',
        options: ['viendra', 'viendrait', 'venait', 'est venu'],
        answer: 1,
        explain: 'Verbe introducteur au passé : le futur devient conditionnel → viendrait.',
      },
      {
        id: 'gb1-dr-q3',
        type: 'associe',
        question: 'Associez chaque repère du discours direct à son équivalent au discours indirect.',
        pairs: [
          ['demain', 'le lendemain'],
          ['hier', 'la veille'],
          ['ici', 'là'],
        ],
        explain: 'Au discours indirect, les repères temporels et spatiaux se transforment.',
      },
    ],
    aretenir: [
      'Direct : guillemets. Indirect : que + proposition.',
      'Concordance : présent → imparfait, futur → conditionnel.',
      'demain → le lendemain, hier → la veille, ici → là.',
    ],
  },

  'L’expression de la cause et du but': {
    id: 'g-b1-cause-but',
    title: 'L’expression de la cause et du but',
    level: 'B1',
    observation: [
      '« Il est resté parce qu’il pleuvait. »',
      '« Comme il était malade, il n’est pas venu. »',
      '« Il travaille pour réussir. »',
      '« Elle étudie afin que ses enfants soient fiers. »',
    ],
    analyse: [
      { point: 'La cause', detail: 'Parce que, car, comme (en tête de phrase), puisque, grâce à, à cause de : « Il est resté parce qu’il pleuvait. »' },
      { point: 'Le but avec infinitif', detail: 'Pour, afin de + infinitif quand le sujet est le même : « Il travaille pour réussir. »' },
      { point: 'Le but avec subjonctif', detail: 'Pour que, afin que + subjonctif quand les sujets diffèrent : « Elle étudie afin que ses enfants soient fiers. »' },
    ],
    regle: [
      'Cause : parce que, car, comme, puisque, à cause de, grâce à.',
      'But + infinitif : pour, afin de (même sujet).',
      'But + subjonctif : pour que, afin que (sujets différents).',
    ],
    exercices: [
      {
        id: 'gb1-cb-q1',
        type: 'qcm',
        question: '« ___ il pleuvait, nous sommes restés. » (cause, en tête)',
        options: ['Parce qu’', 'Comme', 'Pour que', 'Afin de'],
        answer: 1,
        explain: 'En tête de phrase, on utilise « comme » pour exprimer la cause.',
      },
      {
        id: 'gb1-cb-q2',
        type: 'qcm',
        question: '« Il parle lentement ___ tout le monde comprenne. »',
        options: ['pour', 'afin de', 'pour que', 'parce que'],
        answer: 2,
        explain: 'Les sujets diffèrent (il / tout le monde) : but + subjonctif → pour que.',
      },
      {
        id: 'gb1-cb-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « Grâce à » exprime une cause positive.',
        vfAnswer: true,
        explain: 'Vrai. « Grâce à » introduit une cause favorable, contrairement à « à cause de » (souvent négatif).',
      },
    ],
    aretenir: [
      'Cause : parce que, car, comme, puisque, à cause de, grâce à.',
      'But + infinitif : pour, afin de.',
      'But + subjonctif : pour que, afin que.',
    ],
  },

  'Les hypothèses avec « si »': {
    id: 'g-b1-si',
    title: 'Les hypothèses avec « si »',
    level: 'B1',
    observation: [
      '« Si tu viens, je serai content. »',
      '« Si j’avais de l’argent, je voyagerais. »',
      '« Si tu étudies, tu réussiras. »',
      '« Si j’étais toi, je partirais. »',
    ],
    analyse: [
      { point: 'Si + présent → futur', detail: 'Hypothèse probable sur l’avenir : « Si tu viens, je serai content. »' },
      { point: 'Si + présent → présent', detail: 'Vérité générale ou conséquence immédiate : « Si tu chauffes l’eau, elle bout. »' },
      { point: 'Si + imparfait → conditionnel', detail: 'Hypothèse irréelle ou imaginaire dans le présent : « Si j’avais de l’argent, je voyagerais. »' },
      { point: 'La règle d’accord', detail: 'On ne met jamais le futur ou le conditionnel juste après « si » (pas de « si + futur »).' },
    ],
    regle: [
      'Si + présent → futur simple (hypothèse probable).',
      'Si + imparfait → conditionnel présent (hypothèse irréelle).',
      'Jamais de futur ni de conditionnel directement après « si ».',
    ],
    exercices: [
      {
        id: 'gb1-si-q1',
        type: 'qcm',
        question: '« Si tu viens, je ___ content. »',
        options: ['serai', 'serais', 'suis', 'étais'],
        answer: 0,
        explain: 'Si + présent → futur simple : je serai content.',
      },
      {
        id: 'gb1-si-q2',
        type: 'qcm',
        question: '« Si j’avais le temps, je ___ du sport. »',
        options: ['ferai', 'ferais', 'fais', 'faisais'],
        answer: 1,
        explain: 'Si + imparfait → conditionnel présent : je ferais du sport.',
      },
      {
        id: 'gb1-si-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « Si tu viendras, je serai content » est correct.',
        vfAnswer: false,
        explain: 'Faux. On ne met jamais le futur après « si » : Si tu viens, je serai content.',
      },
    ],
    aretenir: [
      'Si + présent → futur (probable).',
      'Si + imparfait → conditionnel (irréel).',
      'Jamais « si + futur / conditionnel ».',
    ],
  },

  /* ———————————————————— B2 ———————————————————— */
  'Le subjonctif passé': {
    id: 'g-b2-subjonctif-passe',
    title: 'Le subjonctif passé',
    level: 'B2',
    observation: [
      '« Je regrette que tu sois parti. »',
      '« Il est content que nous ayons réussi. »',
      '« Bien qu’elle ait travaillé, elle a échoué. »',
      '« Je doute qu’ils soient venus. »',
    ],
    analyse: [
      { point: 'La formation', detail: 'Auxiliaire être ou avoir au subjonctif présent + participe passé : que tu sois parti, que nous ayons réussi.' },
      { point: 'L’antériorité', detail: 'Le subjonctif passé exprime une action antérieure à celle du verbe principal : « Je regrette que tu sois parti » (le départ a déjà eu lieu).' },
      { point: 'Les mêmes emplois que le subjonctif présent', detail: 'Il s’emploie après les mêmes déclencheurs (volonté, sentiment, doute, bien que…), mais pour une action passée.' },
    ],
    regle: [
      'Subjonctif passé = subjonctif présent de l’auxiliaire + participe passé.',
      'Exprime une action antérieure dans un contexte qui exige le subjonctif.',
    ],
    exercices: [
      {
        id: 'gb2-sp-q1',
        type: 'qcm',
        question: '« Je suis heureux que tu ___ venu. » (venir)',
        options: ['sois', 'aies', 'es', 'as'],
        answer: 0,
        explain: '« Venir » se conjugue avec « être » : que tu sois venu.',
      },
      {
        id: 'gb2-sp-q2',
        type: 'qcm',
        question: '« Bien qu’elle ___ travaillé, elle a échoué. » (avoir)',
        options: ['a', 'ait', 'ait eu', 'ait travaillé'],
        answer: 3,
        explain: 'Subjonctif passé : qu’elle ait travaillé. (L’option « ait travaillé » est la forme complète attendue.)',
      },
      {
        id: 'gb2-sp-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Le subjonctif passé exprime une action postérieure au verbe principal.',
        vfAnswer: false,
        explain: 'Faux. Il exprime une action antérieure (déjà accomplie) par rapport au verbe principal.',
      },
    ],
    aretenir: [
      'Auxiliaire au subjonctif présent + participe passé.',
      'Exprime l’antériorité dans un contexte subjonctif.',
    ],
  },

  'La concordance des temps': {
    id: 'g-b2-concordance',
    title: 'La concordance des temps',
    level: 'B2',
    observation: [
      '« Il dit qu’il viendra. »',
      '« Il a dit qu’il viendrait. »',
      '« Elle pense qu’il est là. »',
      '« Elle pensait qu’il était là. »',
    ],
    analyse: [
      { point: 'Le principe', detail: 'Quand le verbe principal est au passé, les temps de la subordonnée se transposent pour garder la logique temporelle.' },
      { point: 'Les transpositions', detail: 'Présent → imparfait ; futur → conditionnel présent ; passé composé → plus-que-parfait ; futur antérieur → conditionnel passé.' },
      { point: 'Verbe principal au présent', detail: 'Aucune transposition : « Il dit qu’il viendra. »' },
    ],
    regle: [
      'Verbe principal au présent : pas de changement.',
      'Verbe principal au passé : présent → imparfait, futur → conditionnel, passé composé → plus-que-parfait.',
    ],
    exercices: [
      {
        id: 'gb2-con-q1',
        type: 'qcm',
        question: '« Elle pensait qu’il ___ là. » (être)',
        options: ['est', 'était', 'sera', 'soit'],
        answer: 1,
        explain: 'Verbe principal au passé (« pensait ») : le présent devient imparfait → était.',
      },
      {
        id: 'gb2-con-q2',
        type: 'qcm',
        question: '« Il a dit qu’il ___ demain. » (venir)',
        options: ['viendra', 'viendrait', 'venait', 'vient'],
        answer: 1,
        explain: 'Verbe principal au passé : le futur devient conditionnel → viendrait.',
      },
      {
        id: 'gb2-con-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « Il dit qu’il viendra » respecte la concordance des temps.',
        vfAnswer: true,
        explain: 'Vrai. Verbe principal au présent : aucun changement, le futur reste futur.',
      },
    ],
    aretenir: [
      'Principal au présent → pas de changement.',
      'Principal au passé : présent → imparfait, futur → conditionnel, PC → PQP.',
    ],
  },

  'Le conditionnel et ses emplois': {
    id: 'g-b2-conditionnel',
    title: 'Le conditionnel et ses emplois',
    level: 'B2',
    observation: [
      '« Si j’avais le temps, je voyagerais. »',
      '« Je voudrais un café, s’il vous plaît. »',
      '« Il aurait gagné, d’après la presse. »',
      '« Pourriez-vous m’aider ? »',
    ],
    analyse: [
      { point: 'La formation', detail: 'Infinitif + terminaisons de l’imparfait : je voyagerais, tu finirais, il prendrait.' },
      { point: 'L’hypothèse', detail: 'Dans la structure « si + imparfait → conditionnel » : « Si j’avais le temps, je voyagerais. »' },
      { point: 'La politesse et le souhait', detail: 'Je voudrais, pourriez-vous… Le conditionnel adoucit la demande.' },
      { point: 'L’information non confirmée', detail: 'Le conditionnel journalistique exprime une information à vérifier : « Il aurait gagné. »' },
    ],
    regle: [
      'Formation : infinitif + -ais, -ais, -ait, -ions, -iez, -aient.',
      'Emplois : hypothèse (si + imparfait), politesse, souhait, information incertaine.',
    ],
    exercices: [
      {
        id: 'gb2-cond-q1',
        type: 'complete',
        question: 'Conjuguez au conditionnel présent.',
        sentence: 'Si j’étais riche, j’___ une grande maison. (acheter)',
        answers: ['achèterais', 'acheterais'],
        explain: 'Conditionnel présent : j’achèterais (avec accent grave sur le e).',
      },
      {
        id: 'gb2-cond-q2',
        type: 'associe',
        question: 'Associez chaque phrase à son emploi du conditionnel.',
        pairs: [
          ['« Je voudrais un café. »', 'Politesse / souhait'],
          ['« Il aurait gagné, selon la presse. »', 'Information non confirmée'],
          ['« Si j’avais le temps, je voyagerais. »', 'Hypothèse'],
        ],
        explain: 'Le conditionnel exprime la politesse, l’information incertaine ou l’hypothèse irréelle.',
      },
      {
        id: 'gb2-cond-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Le conditionnel présent se forme avec l’infinitif + les terminaisons du futur.',
        vfAnswer: false,
        explain: 'Faux. Il se forme avec l’infinitif + les terminaisons de l’imparfait (-ais, -ais, -ait…).',
      },
    ],
    aretenir: [
      'Infinitif + -ais, -ais, -ait, -ions, -iez, -aient.',
      'Hypothèse, politesse, souhait, information incertaine.',
    ],
  },

  'Les connecteurs argumentatifs': {
    id: 'g-b2-connecteurs',
    title: 'Les connecteurs argumentatifs',
    level: 'B2',
    observation: [
      '« D’abord, la lecture enrichit le vocabulaire. »',
      '« Ensuite, elle développe l’esprit critique. »',
      '« Cependant, tout le monde n’aime pas lire. »',
      '« En conclusion, la lecture reste essentielle. »',
    ],
    analyse: [
      { point: 'Organiser le discours', detail: 'D’abord, ensuite, enfin structurent l’argumentation dans l’ordre.' },
      { point: 'Ajouter un argument', detail: 'De plus, en outre, par ailleurs ajoutent une idée dans le même sens.' },
      { point: 'Opposer ou concéder', detail: 'Cependant, néanmoins, en revanche, certes… mais opposent ou nuancent.' },
      { point: 'Conclure', detail: 'En conclusion, en somme, finalement closent le raisonnement.' },
    ],
    regle: [
      'Ordre : d’abord, ensuite, enfin.',
      'Addition : de plus, en outre, par ailleurs.',
      'Opposition / concession : cependant, néanmoins, certes… mais.',
      'Conclusion : en conclusion, en somme.',
    ],
    exercices: [
      {
        id: 'gb2-con2-q1',
        type: 'qcm',
        question: 'Quel connecteur exprime l’opposition ?',
        options: ['De plus', 'Cependant', 'D’abord', 'En somme'],
        answer: 1,
        explain: '« Cependant » introduit une opposition ou une concession.',
      },
      {
        id: 'gb2-con2-q2',
        type: 'associe',
        question: 'Associez chaque connecteur à sa fonction.',
        pairs: [
          ['de plus', 'Addition'],
          ['cependant', 'Opposition'],
          ['en conclusion', 'Conclusion'],
          ['d’abord', 'Ordre'],
        ],
        explain: 'Chaque connecteur a une fonction argumentative précise.',
      },
      {
        id: 'gb2-con2-q3',
        type: 'vf',
        question: 'Vrai ou faux ? « En outre » sert à ajouter un argument.',
        vfAnswer: true,
        explain: 'Vrai. « En outre » et « de plus » ajoutent un argument dans le même sens.',
      },
    ],
    aretenir: [
      'Ordre : d’abord, ensuite, enfin.',
      'Addition : de plus, en outre.',
      'Opposition : cependant, néanmoins. Conclusion : en conclusion, en somme.',
    ],
  },

  'La voix passive': {
    id: 'g-b2-passive',
    title: 'La voix passive',
    level: 'B2',
    observation: [
      '« Le chat mange la souris. » (active)',
      '« La souris est mangée par le chat. » (passive)',
      '« Ce livre a été écrit en 1954. »',
      '« La décision sera prise demain. »',
    ],
    analyse: [
      { point: 'La formation', detail: 'Être (conjugué) + participe passé : « La souris est mangée. » Le temps est porté par « être ».' },
      { point: 'La transformation', detail: 'Le COD de la voix active devient sujet de la voix passive ; le sujet actif devient complément d’agent introduit par « par ».' },
      { point: 'L’accord', detail: 'Le participe passé s’accorde avec le sujet passif : « La souris est mangée. »' },
      { point: 'L’emploi', detail: 'On met en valeur l’objet ou l’action plutôt que l’agent, souvent inconnu ou secondaire.' },
    ],
    regle: [
      'Voix passive : être + participe passé (+ complément d’agent en « par »).',
      'Le COD actif devient sujet passif ; accord du participe avec le sujet.',
    ],
    exercices: [
      {
        id: 'gb2-pas-q1',
        type: 'qcm',
        question: '« Le professeur corrige les copies. » → Les copies ___ par le professeur.',
        options: ['sont corrigées', 'sont corrigés', 'est corrigée', 'ont corrigé'],
        answer: 0,
        explain: '« Copies » est féminin pluriel : sont corrigées (accord).',
      },
      {
        id: 'gb2-pas-q2',
        type: 'complete',
        question: 'Mettez à la voix passive.',
        sentence: 'Ce livre a été ___ par un écrivain célèbre. (écrire)',
        answers: ['écrit'],
        explain: 'Voix passive : a été écrit (participe passé de « écrire »).',
      },
      {
        id: 'gb2-pas-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Le complément d’agent est introduit par « par ».',
        vfAnswer: true,
        explain: 'Vrai. « La souris est mangée par le chat » : « par le chat » est le complément d’agent.',
      },
    ],
    aretenir: [
      'Être + participe passé.',
      'COD actif → sujet passif ; agent introduit par « par ».',
      'Accord du participe avec le sujet.',
    ],
  },

  /* ———————————————————— C1 ———————————————————— */
  'Le subjonctif imparfait (reconnaissance)': {
    id: 'g-c1-subjonctif-imparfait',
    title: 'Le subjonctif imparfait (reconnaissance)',
    level: 'C1',
    observation: [
      '« Il fallait qu’il vînt. »',
      '« Je craignais qu’il ne fût en retard. »',
      '« Bien qu’il eût raison, il se tut. »',
      '« Il souhaitait qu’elle chantât. »',
    ],
    analyse: [
      { point: 'Un temps littéraire', detail: 'Le subjonctif imparfait n’est plus employé à l’oral ; il apparaît dans la littérature classique et soutenue.' },
      { point: 'La formation', detail: 'À partir du passé simple : qu’il vînt (vint → vînt), qu’il eût (eut → eût), qu’il chantât (chanta → chantât). Accent circonflexe sur la 3e personne du singulier.' },
      { point: 'La reconnaissance', detail: 'Le repérer permet de comprendre les textes anciens ; on le remplace aujourd’hui par le subjonctif présent ou passé.' },
    ],
    regle: [
      'Temps littéraire, issu du passé simple (accent circonflexe à la 3e personne).',
      'Employé dans la langue classique et très soutenue.',
      'Aujourd’hui, on le reconnaît plus qu’on ne l’emploie.',
    ],
    exercices: [
      {
        id: 'gc1-si-q1',
        type: 'qcm',
        question: '« Qu’il vînt » est un…',
        options: ['subjonctif présent', 'subjonctif imparfait', 'conditionnel', 'passé simple'],
        answer: 1,
        explain: 'L’accent circonflexe sur la voyelle finale marque le subjonctif imparfait (venir → qu’il vînt).',
      },
      {
        id: 'gc1-si-q2',
        type: 'vf',
        question: 'Vrai ou faux ? Le subjonctif imparfait est courant à l’oral aujourd’hui.',
        vfAnswer: false,
        explain: 'Faux. C’est un temps littéraire, absent de l’oral contemporain.',
      },
      {
        id: 'gc1-si-q3',
        type: 'associe',
        question: 'Associez chaque forme à son infinitif.',
        pairs: [
          ['qu’il vînt', 'venir'],
          ['qu’il eût', 'avoir'],
          ['qu’il chantât', 'chanter'],
        ],
        explain: 'Ces formes sont des subjonctifs imparfaits formés sur le passé simple.',
      },
    ],
    aretenir: [
      'Temps littéraire issu du passé simple.',
      'Accent circonflexe à la 3e personne du singulier.',
      'À reconnaître pour lire les textes classiques.',
    ],
  },

  'Les participes et le gérondif': {
    id: 'g-c1-participes',
    title: 'Les participes et le gérondif',
    level: 'C1',
    observation: [
      '« Fatiguée, elle se coucha tôt. » (participe passé)',
      '« En marchant, il réfléchissait. » (gérondif)',
      '« Une histoire passionnante. » (participe présent)',
      '« Ayant fini, il sortit. » (participe passé composé)',
    ],
    analyse: [
      { point: 'Le participe présent', detail: 'En -ant, invariable : « une histoire passionnante ». Il exprime une action simultanée ou une qualité.' },
      { point: 'Le participe passé', detail: 'Variable selon l’auxiliaire : « Fatiguée, elle se coucha. » Il peut avoir une valeur d’adjectif.' },
      { point: 'Le gérondif', detail: '« En + participe présent » : « En marchant, il réfléchissait. » Il exprime la simultanéité, la manière ou la condition.' },
    ],
    regle: [
      'Participe présent : -ant, invariable.',
      'Participe passé : s’accorde selon les règles (être, avoir, emploi adjectival).',
      'Gérondif : en + participe présent → simultanéité, manière, condition.',
    ],
    exercices: [
      {
        id: 'gc1-par-q1',
        type: 'qcm',
        question: '« ___ en retard, il s’excusa. » (être)',
        options: ['Étant', 'En étant', 'Été', 'Est'],
        answer: 0,
        explain: 'Participe présent de « être » : étant. (On pourrait aussi dire « Ayant été en retard ».)',
      },
      {
        id: 'gc1-par-q2',
        type: 'qcm',
        question: 'Quel énoncé contient un gérondif ?',
        options: ['Une histoire passionnante', 'En chantant, elle souriait', 'Elle est partie', 'Un homme fatigué'],
        answer: 1,
        explain: 'Le gérondif = « en + participe présent » : en chantant.',
      },
      {
        id: 'gc1-par-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Le participe présent est invariable.',
        vfAnswer: true,
        explain: 'Vrai. Le participe présent ne s’accorde jamais : « des histoires passionnantes » (ici « passionnantes » est un adjectif verbal, qui s’accorde).',
      },
    ],
    aretenir: [
      'Participe présent : -ant, invariable.',
      'Gérondif : en + participe présent.',
      'Participe passé : accord selon l’auxiliaire.',
    ],
  },

  'La nominalisation': {
    id: 'g-c1-nominalisation',
    title: 'La nominalisation',
    level: 'C1',
    observation: [
      '« Détruire → la destruction. »',
      '« Décider → la décision. »',
      '« Il a décidé rapidement. » → « Sa décision fut rapide. »',
      '« Produire → la production. »',
    ],
    analyse: [
      { point: 'Le principe', detail: 'La nominalisation transforme un verbe (ou un adjectif) en nom : détruire → destruction, libre → liberté.' },
      { point: 'Les suffixes', detail: '-tion (décision), -ment (développement), -age (chauffage), -ure (blessure), -ité (liberté), -esse (tristesse)…' },
      { point: 'L’usage', detail: 'Elle densifie le style, fréquente dans la presse, l’administration et l’écrit formel : « La décision fut prise » plutôt que « On décida ».' },
    ],
    regle: [
      'Transformer un verbe/adjectif en nom à l’aide d’un suffixe.',
      'Suffixes fréquents : -tion, -ment, -age, -ité, -esse.',
      'Donne un style dense et formel.',
    ],
    exercices: [
      {
        id: 'gc1-nom-q1',
        type: 'qcm',
        question: 'Quel est le nom correspondant à « développer » ?',
        options: ['développement', 'développeur', 'développé', 'développante'],
        answer: 0,
        explain: 'Développer → le développement (suffixe -ment).',
      },
      {
        id: 'gc1-nom-q2',
        type: 'complete',
        question: 'Nominalisez le verbe.',
        sentence: 'La ___ de la ville est rapide. (croître)',
        answers: ['croissance'],
        explain: 'Croître → la croissance.',
      },
      {
        id: 'gc1-nom-q3',
        type: 'associe',
        question: 'Associez chaque verbe à son nom.',
        pairs: [
          ['décider', 'la décision'],
          ['détruire', 'la destruction'],
          ['produire', 'la production'],
        ],
        explain: 'Ces verbes se nominalisent avec le suffixe -tion.',
      },
    ],
    aretenir: [
      'Verbe/adjectif → nom via un suffixe.',
      '-tion, -ment, -age, -ité, -esse.',
      'Style dense, écrit formel.',
    ],
  },

  'Les tournures impersonnelles': {
    id: 'g-c1-impersonnelles',
    title: 'Les tournures impersonnelles',
    level: 'C1',
    observation: [
      '« Il pleut. »',
      '« Il faut partir. »',
      '« Il est important de réviser. »',
      '« Il semble que tout aille bien. »',
    ],
    analyse: [
      { point: 'Le sujet « il » impersonnel', detail: '« Il » ne représente personne ; c’est une forme vide exigée par la grammaire française.' },
      { point: 'Les verbes impersonnels', detail: 'Météo (il pleut), nécessité (il faut), apparence (il semble, il paraît) : « Il est important de réviser. »' },
      { point: 'Les structures', detail: 'Il + verbe + de + infinitif ; il + verbe + que + subjonctif/indicatif : « Il semble que tout aille bien. »' },
    ],
    regle: [
      'Le « il » impersonnel ne renvoie à aucun référent.',
      'Structures : il faut + infinitif, il est + adjectif + de + infinitif, il semble que + subjonctif.',
    ],
    exercices: [
      {
        id: 'gc1-imp-q1',
        type: 'qcm',
        question: '« Il ___ important de bien manger. »',
        options: ['est', 'fait', 'a', 'va'],
        answer: 0,
        explain: 'Structure impersonnelle : il est + adjectif + de + infinitif.',
      },
      {
        id: 'gc1-imp-q2',
        type: 'vf',
        question: 'Vrai ou faux ? Dans « Il pleut », « il » désigne le ciel.',
        vfAnswer: false,
        explain: 'Faux. « Il » est impersonnel : il ne renvoie à aucun référent précis.',
      },
      {
        id: 'gc1-imp-q3',
        type: 'complete',
        question: 'Complétez la tournure impersonnelle.',
        sentence: 'Il ___ partir maintenant. (nécessité)',
        answers: ['faut'],
        explain: 'La nécessité s’exprime par « il faut + infinitif ».',
      },
    ],
    aretenir: [
      '« Il » impersonnel = sujet vide.',
      'Il faut / il est + adjectif + de / il semble que.',
    ],
  },

  'L’inversion stylistique': {
    id: 'g-c1-inversion',
    title: 'L’inversion stylistique',
    level: 'C1',
    observation: [
      '« Peut-être viendra-t-il. »',
      '« À peine fut-il entré qu’il comprit. »',
      '« Ainsi parlait le vieil homme. »',
      '« Rarement avait-on vu pareille foule. »',
    ],
    analyse: [
      { point: 'L’inversion après certains adverbes', detail: 'Après peut-être, à peine, ainsi, rarement… en tête de phrase, le sujet et le verbe s’inversent : « Peut-être viendra-t-il. »' },
      { point: 'L’inversion interrogative', detail: 'Dans l’interrogation soutenue : « Viendra-t-il ? »' },
      { point: 'L’effet stylistique', detail: 'L’inversion donne un ton littéraire, soutenu et rythmé ; elle est fréquente à l’écrit et absente de l’oral familier.' },
    ],
    regle: [
      'Inversion sujet-verbe après certains adverbes en tête de phrase.',
      'Trait d’union et « -t- » euphonique entre deux voyelles : « viendra-t-il ».',
      'Registre soutenu et littéraire.',
    ],
    exercices: [
      {
        id: 'gc1-inv-q1',
        type: 'qcm',
        question: 'Quelle phrase est correctement inversée ?',
        options: ['Peut-être il viendra', 'Peut-être viendra-t-il', 'Peut-être viendra il', 'Peut-être vient il'],
        answer: 1,
        explain: 'Après « peut-être » en tête, inversion avec trait d’union et -t- euphonique : viendra-t-il.',
      },
      {
        id: 'gc1-inv-q2',
        type: 'vf',
        question: 'Vrai ou faux ? L’inversion stylistique est fréquente à l’oral familier.',
        vfAnswer: false,
        explain: 'Faux. Elle appartient au registre soutenu et littéraire.',
      },
      {
        id: 'gc1-inv-q3',
        type: 'complete',
        question: 'Complétez l’inversion.',
        sentence: 'À peine fut-___ entré qu’il comprit.',
        answers: ['il'],
        explain: 'Inversion après « à peine » : À peine fut-il entré…',
      },
    ],
    aretenir: [
      'Inversion après certains adverbes en tête de phrase.',
      '« -t- » euphonique entre deux voyelles.',
      'Registre soutenu et littéraire.',
    ],
  },

  /* ———————————————————— C2 ———————————————————— */
  'Les temps littéraires': {
    id: 'g-c2-temps-litteraires',
    title: 'Les temps littéraires',
    level: 'C2',
    observation: [
      '« Il marcha longtemps. » (passé simple)',
      '« Quand il fut arrivé, il se reposa. » (passé antérieur)',
      '« Il eût aimé rester. » (conditionnel passé 2e forme)',
      '« Elle chantait ; il écoutait. » (imparfait narratif)',
    ],
    analyse: [
      { point: 'Le passé simple', detail: 'Temps du récit écrit : « Il marcha longtemps. » Il relate les actions successives, à la différence de l’imparfait (arrière-plan).' },
      { point: 'Le passé antérieur', detail: '« Quand il fut arrivé… » : action antérieure à une autre action au passé simple, après « quand, dès que, après que ».' },
      { point: 'L’imparfait narratif', detail: 'Il pose le décor et les actions duratives dans le récit : « Elle chantait ; il écoutait. »' },
    ],
    regle: [
      'Passé simple : actions successives du récit écrit.',
      'Passé antérieur : antériorité immédiate avant un passé simple (quand, dès que…).',
      'Imparfait narratif : arrière-plan et description dans le récit.',
    ],
    exercices: [
      {
        id: 'gc2-tl-q1',
        type: 'qcm',
        question: 'Quel temps convient au récit écrit : « Il ___ la porte et entra. » ?',
        options: ['ouvrit', 'ouvrait', 'ouvre', 'ouvrira'],
        answer: 0,
        explain: 'Passé simple pour une action successive du récit : il ouvrit la porte.',
      },
      {
        id: 'gc2-tl-q2',
        type: 'qcm',
        question: '« Quand il ___ arrivé, il se reposa. »',
        options: ['fut', 'était', 'est', 'sera'],
        answer: 0,
        explain: 'Passé antérieur : quand il fut arrivé (antériorité avant « se reposa »).',
      },
      {
        id: 'gc2-tl-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Le passé simple est le temps du récit écrit.',
        vfAnswer: true,
        explain: 'Vrai. À l’écrit narratif, le passé simple relate les actions ; l’imparfait pose le décor.',
      },
    ],
    aretenir: [
      'Passé simple : actions du récit écrit.',
      'Passé antérieur : antériorité (quand, dès que).',
      'Imparfait : arrière-plan et description.',
    ],
  },

  'Les figures de style': {
    id: 'g-c2-figures',
    title: 'Les figures de style',
    level: 'C2',
    observation: [
      '« Cette obscure clarté. » (oxymore)',
      '« Je me meurs, je suis mort. » (hyperbole / gradation)',
      '« La moisson des années. » (métaphore)',
      '« Va, cours, vole. » (gradation)',
    ],
    analyse: [
      { point: 'Les figures d’analogie', detail: 'Comparaison, métaphore, personnification créent des images : « La moisson des années. »' },
      { point: 'Les figures d’opposition', detail: 'Oxymore, antithèse rapprochent des contraires : « obscure clarté ».' },
      { point: 'Les figures d’amplification', detail: 'Hyperbole, gradation intensifient : « Va, cours, vole. »' },
      { point: 'L’analyse', detail: 'Identifier la figure ne suffit pas : il faut expliquer son effet sur le sens et le lecteur.' },
    ],
    regle: [
      'Analogie : comparaison, métaphore, personnification.',
      'Opposition : oxymore, antithèse.',
      'Amplification : hyperbole, gradation.',
      'Analyse = identification + effet produit.',
    ],
    exercices: [
      {
        id: 'gc2-fig-q1',
        type: 'qcm',
        question: '« Cette obscure clarté » est un…',
        options: ['oxymore', 'métaphore', 'hyperbole', 'anaphore'],
        answer: 0,
        explain: 'Deux termes contraires accolés (obscure / clarté) : oxymore.',
      },
      {
        id: 'gc2-fig-q2',
        type: 'qcm',
        question: '« La terre est bleue comme une orange. » Quelle figure ?',
        options: ['métaphore', 'comparaison', 'oxymore', 'litote'],
        answer: 1,
        explain: 'Présence de l’outil « comme » : comparaison.',
      },
      {
        id: 'gc2-fig-q3',
        type: 'associe',
        question: 'Associez chaque figure à sa catégorie.',
        pairs: [
          ['métaphore', 'Analogie'],
          ['oxymore', 'Opposition'],
          ['hyperbole', 'Amplification'],
        ],
        explain: 'Chaque figure appartient à une grande famille selon son procédé.',
      },
    ],
    aretenir: [
      'Analogie, opposition, amplification.',
      'Toujours expliquer l’effet produit.',
    ],
  },

  'L’implicite et le sous-entendu': {
    id: 'g-c2-implicite',
    title: 'L’implicite et le sous-entendu',
    level: 'C2',
    observation: [
      '« Il fait froid ici… » (= fermez la fenêtre)',
      '« C’est intéressant… » (ton ironique = je n’y crois pas)',
      '« Tout le monde n’est pas d’accord. » (= certains ne le sont pas)',
      '« On verra. » (= probablement non)',
    ],
    analyse: [
      { point: 'L’implicite', detail: 'Ce qui est compris sans être dit explicitement : « Il fait froid ici » peut signifier « fermez la fenêtre ».' },
      { point: 'Le sous-entendu', detail: 'Une intention cachée derrière l’énoncé, souvent à décoder selon le contexte et le ton.' },
      { point: 'L’ironie', detail: 'Dire le contraire de ce que l’on pense : « C’est intéressant… » peut exprimer le doute ou le mépris.' },
      { point: 'La présupposition', detail: 'Ce que l’énoncé tient pour acquis : « Il a cessé de fumer » présuppose qu’il fumait.' },
    ],
    regle: [
      'Implicite : compris sans être formulé.',
      'Sous-entendu : intention à décoder selon le contexte.',
      'Ironie, présupposition : lire au-delà du sens littéral.',
    ],
    exercices: [
      {
        id: 'gc2-imp2-q1',
        type: 'qcm',
        question: '« Il a cessé de fumer. » Que présuppose cette phrase ?',
        options: ['Il fume encore', 'Il fumait avant', 'Il ne fume plus', 'Il n’a jamais fumé'],
        answer: 1,
        explain: '« Cesser de » présuppose que l’action avait lieu auparavant : il fumait.',
      },
      {
        id: 'gc2-imp2-q2',
        type: 'qcm',
        question: '« C’est intéressant… » dit avec ironie signifie probablement…',
        options: ['un réel enthousiasme', 'le doute ou le mépris', 'une demande d’explication', 'de la curiosité'],
        answer: 1,
        explain: 'L’ironie fait dire le contraire de la pensée : le locuteur exprime le doute ou le mépris.',
      },
      {
        id: 'gc2-imp2-q3',
        type: 'vf',
        question: 'Vrai ou faux ? L’implicite se décode grâce au contexte et au ton.',
        vfAnswer: true,
        explain: 'Vrai. Comprendre l’implicite exige de tenir compte de la situation et de l’intention.',
      },
    ],
    aretenir: [
      'Implicite : non formulé mais compris.',
      'Sous-entendu et ironie : décoder l’intention.',
      'La présupposition est contenue dans l’énoncé.',
    ],
  },

  'La cohésion textuelle avancée': {
    id: 'g-c2-cohesion',
    title: 'La cohésion textuelle avancée',
    level: 'C2',
    observation: [
      '« Ce phénomène s’explique par… En effet, … Par ailleurs, … En somme, … »',
      '« Celui-ci / celui-là ; le premier / le second. »',
      '« Telle est la question. »',
      '« Ladite décision fut annulée. »',
    ],
    analyse: [
      { point: 'Les reprises anaphoriques', detail: 'Pronoms, synonymes et substituts évitent la répétition et lient les phrases : « ce phénomène », « celui-ci ».' },
      { point: 'Les connecteurs complexes', detail: 'En effet, par ailleurs, en somme, nonobstant… organisent la progression de l’argumentation.' },
      { point: 'L’ordre des mots et l’emphase', detail: 'C’est… que, telle est…, voilà qui… mettent en relief une information et assurent la continuité.' },
    ],
    regle: [
      'Anaphores et substituts : lier les phrases sans répéter.',
      'Connecteurs complexes : structurer l’argumentation.',
      'Mise en relief : c’est… que, telle est…',
    ],
    exercices: [
      {
        id: 'gc2-coh-q1',
        type: 'qcm',
        question: 'Quel connecteur introduit une explication ?',
        options: ['En effet', 'Par ailleurs', 'En somme', 'Au demeurant'],
        answer: 0,
        explain: '« En effet » confirme ou explique ce qui précède.',
      },
      {
        id: 'gc2-coh-q2',
        type: 'qcm',
        question: '« Ce phénomène » est un exemple de…',
        options: ['reprise anaphorique', 'connecteur', 'inversion', 'nominalisation'],
        answer: 0,
        explain: '« Ce phénomène » reprend un élément déjà mentionné : reprise anaphorique.',
      },
      {
        id: 'gc2-coh-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Les anaphores servent à éviter les répétitions.',
        vfAnswer: true,
        explain: 'Vrai. Pronoms et substituts reprennent un élément sans le répéter, assurant la cohésion.',
      },
    ],
    aretenir: [
      'Anaphores et substituts pour lier les phrases.',
      'Connecteurs complexes pour argumenter.',
      'Mise en relief pour la continuité.',
    ],
  },

  'Les variations stylistiques': {
    id: 'g-c2-variations',
    title: 'Les variations stylistiques',
    level: 'C2',
    observation: [
      '« Un bouquin » (familier) / « un livre » (courant) / « un ouvrage » (soutenu)',
      '« On bosse » (familier) / « on travaille » (courant) / « l’on œuvre » (soutenu)',
      '« Il est mort » / « Il a trépassé »',
      '« Ça va ? » / « Comment allez-vous ? »',
    ],
    analyse: [
      { point: 'Les trois registres', detail: 'Familier, courant, soutenu : le même contenu peut s’exprimer dans trois niveaux de langue différents.' },
      { point: 'Le choix du registre', detail: 'Il dépend du destinataire, du contexte et de l’intention : oral entre amis vs écrit administratif.' },
      { point: 'Les marqueurs', detail: 'Vocabulaire (bouquin/ouvrage), syntaxe (on/l’on), prononciation, figures : chaque registre a ses codes.' },
      { point: 'La maîtrise', detail: 'Au niveau C2, on sait adapter son style et jouer des registres pour produire un effet précis.' },
    ],
    regle: [
      'Trois registres : familier, courant, soutenu.',
      'Le choix dépend du destinataire, du contexte, de l’intention.',
      'Marqueurs : lexique, syntaxe, figures de style.',
    ],
    exercices: [
      {
        id: 'gc2-var-q1',
        type: 'qcm',
        question: 'Quel mot appartient au registre soutenu ?',
        options: ['bouquin', 'livre', 'ouvrage', 'truc'],
        answer: 2,
        explain: '« Ouvrage » est le terme soutenu ; « bouquin » est familier, « livre » est courant.',
      },
      {
        id: 'gc2-var-q2',
        type: 'associe',
        question: 'Associez chaque énoncé à son registre.',
        pairs: [
          ['« Ça va ? »', 'Familier'],
          ['« Comment allez-vous ? »', 'Soutenu'],
          ['« Tu vas bien ? »', 'Courant'],
        ],
        explain: 'La même salutation se décline selon le registre.',
      },
      {
        id: 'gc2-var-q3',
        type: 'vf',
        question: 'Vrai ou faux ? Le registre dépend du destinataire et du contexte.',
        vfAnswer: true,
        explain: 'Vrai. On adapte son niveau de langue à la situation de communication.',
      },
    ],
    aretenir: [
      'Familier / courant / soutenu.',
      'Adapter le registre à la situation.',
      'Jouer des registres pour un effet précis.',
    ],
  },
};
