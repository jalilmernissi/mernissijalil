import type { ResourceItem } from './types';

export const resourceLevels = ['Tous les niveaux', 'Tronc Commun', '1ère Bac', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const resourceCategories = ['Toutes les matières', 'Grammaire', 'Conjugaison', 'Littérature', 'Vocabulaire', 'Production écrite', 'Compréhension'];
export const resourceTypes = ['Tous les types', 'Fiche', 'Exercice', 'Sujet', 'Texte', 'Méthode', 'Vocabulaire'];

export const ressources: ResourceItem[] = [
  {
    id: 'fiche-genres',
    title: 'Fiche — Les genres littéraires',
    description: 'Les quatre grands genres, leurs sous-genres et un tableau comparatif pour réviser l’essentiel.',
    level: 'Tronc Commun',
    category: 'Littérature',
    type: 'Fiche',
    downloadable: true,
    content: `FICHE DE RÉVISION — LES GENRES LITTÉRAIRES
Plateforme MERNISSI JALIL — mernissijalil.com

1. GENRE NARRATIF — raconter
   Narrateur, personnages, schéma narratif.
   Sous-genres : roman, nouvelle, conte, autobiographie.
   Exemples : « Aux champs » (Maupassant), « La boîte à merveilles » (Séfrioui).

2. GENRE THÉÂTRAL — représenter
   Dialogues, didascalies, actes et scènes.
   Sous-genres : tragédie, comédie, drame.
   Exemple : « Antigone » (Anouilh).

3. GENRE POÉTIQUE — exprimer
   Vers, strophes, rimes, images.
   Sous-genres : sonnet, ode, poème en prose.
   Exemple : « Demain, dès l’aube… » (Hugo).

4. GENRE ARGUMENTATIF — convaincre
   Thèse, arguments, exemples.
   Sous-genres : essai, discours, pamphlet, lettre ouverte.
   Exemple : « Le dernier jour d’un condamné » (Hugo).

À RETENIR : pour classer un texte, posez trois questions —
Quelle est sa forme ? Quel est son but ? Qui parle ?`,
  },
  {
    id: 'fiche-schema-narratif',
    title: 'Fiche — Le schéma narratif',
    description: 'Les cinq étapes du récit avec un exemple développé sur « Aux champs ».',
    level: 'Tronc Commun',
    category: 'Littérature',
    type: 'Fiche',
    downloadable: true,
    content: `FICHE DE RÉVISION — LE SCHÉMA NARRATIF
Plateforme MERNISSI JALIL — mernissijalil.com

1. SITUATION INITIALE : équilibre du début (cadre, personnages).
   Dans « Aux champs » : les deux familles vivent pauvrement côte à côte.
2. ÉLÉMENT PERTURBATEUR : événement qui rompt l’équilibre.
   La proposition d’adoption de Mme d’Hubières.
3. PÉRIPÉTIES : série d’événements.
   Refus des Tuvache, don des Vallin, brouille des familles.
4. DÉNOUEMENT : résolution de l’action.
   Le retour de Jean, adulte, riche et éduqué.
5. SITUATION FINALE : nouvel état (souvent inversé).
   Charlot quitte ses parents ; les Tuvache restent seuls.

ASTUCE : citez un mot du texte pour chaque étape.`,
  },
  {
    id: 'exercice-points-de-vue',
    title: 'Exercices corrigés — Points de vue du narrateur',
    description: 'Dix phrases à classer : point de vue interne, externe ou omniscient, avec corrigé détaillé.',
    level: 'Tronc Commun',
    category: 'Compréhension',
    type: 'Exercice',
    downloadable: true,
    content: `EXERCICES — POINTS DE VUE DU NARRATEUR (avec corrigé)
Plateforme MERNISSI JALIL — mernissijalil.com

Classez chaque phrase : interne, externe ou omniscient.

1. « Il savait que tout était perdu. » → OMNISCIENT (le narrateur connaît les pensées).
2. « Un homme entra dans le café et s’assit. » → EXTERNE (simple constat visible).
3. « Elle tremblait en pensant à l’examen. » → INTERNE (on vit la scène avec elle).
4. « Personne ne comprit jamais pourquoi il était parti. » → OMNISCIENT (le narrateur domine le temps).
5. « De la fenêtre, on voyait la mer. » → EXTERNE (vision « caméra »).

RAPPEL :
- Interne = à travers un personnage.
- Externe = comme une caméra.
- Omniscient = le narrateur sait tout.`,
  },
  {
    id: 'fiche-connecteurs',
    title: 'Fiche — Les connecteurs logiques',
    description: 'Cause, conséquence, opposition, concession, addition : les connecteurs classés avec exemples.',
    level: 'Tronc Commun',
    category: 'Grammaire',
    type: 'Fiche',
    downloadable: true,
    content: `FICHE — LES CONNECTEURS LOGIQUES
Plateforme MERNISSI JALIL — mernissijalil.com

CAUSE : car, parce que, en effet, grâce à, à cause de.
CONSÉQUENCE : donc, ainsi, c’est pourquoi, par conséquent, alors.
ADDITION : de plus, en outre, par ailleurs, d’ailleurs.
OPPOSITION : mais, cependant, en revanche, or, au contraire.
CONCESSION : certes… mais, bien que + subjonctif, quoique + subjonctif.
ORDRE : d’abord, ensuite, puis, enfin.
CONCLUSION : en conclusion, en somme, finalement.

EXEMPLE : « Certes, ce film est long, mais il est magnifique. » (concession)`,
  },
  {
    id: 'texte-aux-champs-incipit',
    title: 'Texte — L’incipit d’« Aux champs »',
    description: 'Le début de la nouvelle de Maupassant, suivi de cinq questions d’analyse avec pistes de réponse.',
    level: 'Tronc Commun',
    category: 'Littérature',
    type: 'Texte',
    downloadable: true,
    content: `TEXTE ÉTUDIÉ — L’INCIPIT D’« AUX CHAMPS » (extrait adapté)
Plateforme MERNISSI JALIL — mernissijalil.com

« Les deux familles vivaient côte à côte, au bout du village, presque en pleine campagne. Elles vivaient péniblement de soupe, de pommes de terre et de grand air. Les deux chaumières, adossées à la colline, semblaient deux mendiants côte à côte. »
D’après Guy de Maupassant, « Aux champs », 1883.

QUESTIONS D’ANALYSE :
1. Montrez que ce début remplit la fonction informative de l’incipit.
   Piste : lieu, personnages, situation de misère présentés d’emblée.
2. Relevez le champ lexical de la pauvreté.
   Piste : péniblement, soupe, pommes de terre, mendiants.
3. Identifiez et expliquez la figure de style « semblaient deux mendiants ».
   Piste : comparaison à valeur symbolique — annonce le drame.
4. Quel point de vue adopte le narrateur ?
   Piste : externe au début (vision « caméra »), puis omniscient.
5. En quoi cet incipit prépare-t-il la chute ?
   Piste : l’égalité dans la misère rendra la divergence du choix plus cruelle.`,
  },
  {
    id: 'sujet-regional-type',
    title: 'Sujet — Examen régional type (juin)',
    description: 'Un sujet complet : compréhension, langue et production écrite, avec barème et conseils de gestion du temps.',
    level: '1ère Bac',
    category: 'Compréhension',
    type: 'Sujet',
    downloadable: true,
    content: `EXAMEN RÉGIONAL — SUJET TYPE (avec barème)
Plateforme MERNISSI JALIL — mernissijalil.com

I. COMPRÉHENSION (10 pts) — 1 h 15 conseillées
1. Identifiez le type de texte et justifiez (2 pts).
2. Relevez le champ lexical dominant et son rôle (2 pts).
3. Relevez deux indices de la situation d’énonciation (2 pts).
4. Identifiez la figure de style et expliquez son effet (2 pts).
5. Situez l’extrait dans le schéma de l’œuvre étudiée (2 pts).

II. LANGUE (6 pts) — 30 minutes conseillées
1. Transformation au discours indirect (2 pts).
2. Analyse des propositions et du lien (2 pts).
3. Synonyme employé dans une phrase personnelle (2 pts).

III. PRODUCTION ÉCRITE (4 pts) — 45 minutes conseillées
Paragraphe argumenté : thèse, deux arguments, un exemple.

CONSEIL : relisez votre copie 10 minutes avant la fin.`,
  },
  {
    id: 'fiche-figures-style',
    title: 'Fiche — Les 13 figures de style du programme',
    description: 'Comparaison, métaphore, antithèse, oxymore, hyperbole, gradation… définies et illustrées.',
    level: '1ère Bac',
    category: 'Littérature',
    type: 'Fiche',
    downloadable: true,
    content: `FICHE — LES FIGURES DE STYLE DU PROGRAMME
Plateforme MERNISSI JALIL — mernissijalil.com

1. COMPARAISON : rapprochement avec outil (comme, tel, sembler…).
2. MÉTAPHORE : rapprochement sans outil.
3. PERSONNIFICATION : traits humains prêtés aux choses.
4. ANTITHÈSE : opposition de deux idées.
5. ANTIPHRASE : dire le contraire de ce qu’on pense (ironie).
6. OXYMORE : alliance de mots contraires (« obscure clarté »).
7. HYPERBOLE : exagération (« mourir de faim »).
8. GRADATION : termes d’intensité croissante ou décroissante.
9. ÉNUMÉRATION : juxtaposition de termes de même nature.
10. ANAPHORE : répétition en tête de phrase.
11. RÉPÉTITION : reprise sans position fixe.
12. MÉTONYMIE : substitution par relation logique (« boire un verre »).
13. SYNECDOQUE : la partie pour le tout (« une voile »).

MÉTHODE : toujours nommer la figure + citer le passage + expliquer l’effet.`,
  },
  {
    id: 'fiche-essai-argumente',
    title: 'Méthode — L’essai argumenté en 5 étapes',
    description: 'Introduction, développement, conclusion : la méthode complète avec connecteurs et exemple rédigé.',
    level: '1ère Bac',
    category: 'Production écrite',
    type: 'Méthode',
    downloadable: true,
    content: `MÉTHODE — L’ESSAI ARGUMENTÉ EN 5 ÉTAPES
Plateforme MERNISSI JALIL — mernissijalil.com

1. COMPRENDRE le sujet : thème, thèse, consigne.
2. INTRODUCTION : amener le sujet → problématique → annoncer le plan.
3. DÉVELOPPEMENT : un paragraphe = un argument + explication + exemple.
4. CONCLUSION : bilan de la thèse + élargissement.
5. CONNECTEURS : d’abord, ensuite, de plus, cependant, en effet, en conclusion.

PLAN POSSIBLE :
- Plan simple : thèse soutenue (arguments + exemples).
- Plan dialectique : thèse / antithèse / dépassement.

ERREURS À ÉVITER : le « je » trop présent, l’exemple sans lien avec l’argument, la conclusion qui répète sans bilan.`,
  },
  {
    id: 'fiche-passe-compose',
    title: 'Fiche — Le passé composé',
    description: 'Formation avec avoir et être, accord du participe, emplois : tout le passé composé A2 en une fiche.',
    level: 'A2',
    category: 'Conjugaison',
    type: 'Fiche',
    downloadable: true,
    content: `FICHE DE CONJUGAISON — LE PASSÉ COMPOSÉ (A2)
Plateforme MERNISSI JALIL — mernissijalil.com

FORMATION : auxiliaire (avoir ou être) au présent + participe passé.

AVEC AVOIR (majorité des verbes) :
  j’ai mangé — tu as fini — il a pris — nous avons vu — vous avez dit — ils ont fait

AVEC ÊTRE (verbes de mouvement et d’état) :
  aller, venir, partir, arriver, rester, tomber, monter, descendre, naître, mourir…
  je suis allé(e) — elle est partie — ils sont arrivés
  → Le participe s’accorde avec le sujet.

EMPLOI : actions terminées dans le passé.
  « Hier, je suis allé au marché et j’ai acheté des légumes. »

INDICATEURS : hier, d’abord, ensuite, puis, enfin.`,
  },
  {
    id: 'vocabulaire-fle-a1-essentiel',
    title: 'Vocabulaire — L’essentiel du niveau A1',
    description: 'Les mots indispensables pour se présenter, saluer et parler du quotidien, classés par thèmes.',
    level: 'A1',
    category: 'Vocabulaire',
    type: 'Vocabulaire',
    downloadable: true,
    content: `VOCABULAIRE ESSENTIEL A1
Plateforme MERNISSI JALIL — mernissijalil.com

SALUER : bonjour, bonsoir, salut, au revoir, à bientôt, merci, pardon, s’il vous plaît, enchanté.
SE PRÉSENTER : Je m’appelle…, J’ai… ans, Je viens de…, J’habite à…, J’aime…
LA FAMILLE : le père, la mère, le frère, la sœur, le grand-père, la grand-mère, l’ami, l’amie.
LES REPAS : le pain, l’eau, le café, le thé, le lait, la pomme, le riz, le poulet.
LA MAISON : la porte, la fenêtre, la chambre, la cuisine, la table, la chaise, le lit.
LES NOMBRES : un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.

ASTUCE : apprenez 10 mots par jour avec une phrase d’exemple pour chacun.`,
  },
  {
    id: 'fiche-subjonctif',
    title: 'Fiche — Le subjonctif présent',
    description: 'Formation, emplois obligatoires et connecteurs qui l’imposent : la fiche B1 complète.',
    level: 'B1',
    category: 'Conjugaison',
    type: 'Fiche',
    downloadable: true,
    content: `FICHE DE CONJUGAISON — LE SUBJONCTIF PRÉSENT (B1)
Plateforme MERNISSI JALIL — mernissijalil.com

FORMATION : radical de la 3e personne du pluriel + -e, -es, -e, -ions, -iez, -ent.
  que je parle — que tu finisses — qu’il prenne — que nous allions — que vous soyez — qu’ils fassent

EMPLOIS OBLIGATOIRES APRÈS :
  Il faut que…, Je veux que…, Il est possible que…
  Bien que, quoique, pour que, à condition que

EXEMPLES :
  « Il faut que tu viennes demain. »
  « Bien qu’il soit tard, il travaille encore. »

ATTENTION : après « espérer que », on utilise l’indicatif : « J’espère qu’il viendra. »`,
  },
  {
    id: 'exercices-champ-lexical',
    title: 'Exercices corrigés — Le champ lexical',
    description: 'Repérer et nommer des champs lexicaux dans de courts extraits, avec corrigé commenté.',
    level: '1ère Bac',
    category: 'Grammaire',
    type: 'Exercice',
    downloadable: true,
    content: `EXERCICES — LE CHAMP LEXICAL (avec corrigé)
Plateforme MERNISSI JALIL — mernissijalil.com

1. « La vague, l’écume, la marée et le rivage. »
   → Champ lexical de LA MER.
2. « L’échafaud, le bourreau, le couteau, la foule. »
   → Champ lexical de LA PEINE DE MORT (Hugo).
3. « Le décret, la loi, l’interdit, l’obéissance. »
   → Champ lexical de LA LOI (« Antigone »).
4. « La soupe, les pommes de terre, le chaume, la misère. »
   → Champ lexical de LA PAUVRETÉ (« Aux champs »).

MÉTHODE : citer 3 mots du texte + nommer le thème + expliquer l’effet produit.`,
  },
];
