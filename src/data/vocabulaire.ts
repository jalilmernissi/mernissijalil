import type { Exercise } from './types';

/* ————————————————————————————————————————————
   Vocabulaire FLE par niveau :
   liste de mots classés par thèmes + test de niveau.
   Pour ajouter des mots : compléter les thèmes ci-dessous.
   ———————————————————————————————————————————— */

export interface VocabTheme {
  theme: string;
  words: string[];
}

export interface VocabLevelData {
  total: number;
  complete: boolean;
  themes: VocabTheme[];
  quiz: Exercise[];
}

export const vocabulaire: Record<string, VocabLevelData> = {
  /* ————————————— NIVEAU A1 — 300 mots ————————————— */
  A1: {
    total: 300,
    complete: true,
    themes: [
      {
        theme: 'Salutations et formules de politesse',
        words: ['bonjour', 'au revoir', 'salut', 'merci', 's’il vous plaît', 'pardon', 'oui', 'non', 'bonsoir', 'de rien', 'bienvenue', 'ça va', 'enchanté', 'excusez-moi', 'à bientôt'],
      },
      {
        theme: 'Famille et personnes',
        words: ['monsieur', 'madame', 'mademoiselle', 'la personne', 'l’homme', 'la femme', 'le garçon', 'la fille', 'l’enfant', 'le bébé', 'la famille', 'le père', 'la mère', 'les parents', 'le frère', 'la sœur', 'le fils', 'le grand-père', 'la grand-mère', 'l’oncle', 'la tante', 'le cousin', 'la cousine', 'l’ami', 'l’amie'],
      },
      {
        theme: 'Nourriture et boissons',
        words: ['l’eau', 'le pain', 'le riz', 'les pâtes', 'la pomme', 'la banane', 'le citron', 'la fraise', 'la tomate', 'la pomme de terre', 'la carotte', 'la salade', 'le fromage', 'le beurre', 'le lait', 'le café', 'le thé', 'le jus', 'le sucre', 'le sel', 'la viande', 'le poisson', 'le poulet', 'l’œuf', 'le gâteau', 'le chocolat', 'la glace', 'le yaourt', 'la confiture', 'le miel'],
      },
      {
        theme: 'Vêtements et accessoires',
        words: ['le pantalon', 'la chemise', 'la robe', 'la jupe', 'le t-shirt', 'le pull', 'les chaussures', 'le manteau', 'le chapeau', 'le sac'],
      },
      {
        theme: 'Maison et objets',
        words: ['la maison', 'l’appartement', 'la porte', 'la fenêtre', 'la chambre', 'la cuisine', 'la salle de bain', 'le salon', 'la table', 'la chaise', 'le lit', 'le canapé', 'la télévision', 'le téléphone', 'l’ordinateur', 'la clé', 'le livre', 'le stylo', 'le papier', 'la lampe'],
      },
      {
        theme: 'Ville et lieux',
        words: ['la ville', 'le village', 'la rue', 'la place', 'l’école', 'le collège', 'le lycée', 'l’université', 'le bureau', 'le magasin', 'le supermarché', 'le marché', 'la banque', 'la poste', 'l’hôpital'],
      },
      {
        theme: 'Transports',
        words: ['la voiture', 'le bus', 'le train', 'le métro', 'le vélo', 'la moto', 'l’avion', 'le taxi'],
      },
      {
        theme: 'Animaux',
        words: ['le chat', 'le chien', 'le cheval', 'la vache', 'le cochon', 'le mouton', 'la poule', 'l’oiseau'],
      },
      {
        theme: 'Temps, météo et nature',
        words: ['le temps', 'la pluie', 'le soleil', 'le vent', 'la neige', 'le jour', 'la nuit', 'le matin', 'le soir', 'le ciel'],
      },
      {
        theme: 'Couleurs',
        words: ['rouge', 'bleu', 'vert', 'jaune', 'noir', 'blanc', 'gris', 'orange', 'rose', 'marron'],
      },
      {
        theme: 'Jours, saisons et mois',
        words: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche', 'le printemps', 'l’été', 'l’automne', 'l’hiver', 'janvier', 'février', 'mars', 'avril'],
      },
      {
        theme: 'Verbes courants',
        words: ['être', 'avoir', 'faire', 'aller', 'venir', 'manger', 'boire', 'dormir', 'parler', 'lire', 'écrire', 'aimer', 'habiter', 'travailler', 'regarder', 'écouter', 'acheter', 'prendre', 'donner', 'vouloir'],
      },
      {
        theme: 'Adjectifs courants',
        words: ['grand', 'petit', 'beau', 'joli', 'bon', 'mauvais', 'nouveau', 'vieux'],
      },
      {
        theme: 'Adverbes et mots utiles',
        words: ['aujourd’hui', 'demain', 'hier', 'maintenant', 'très', 'beaucoup'],
      },
      {
        theme: 'Parties du corps',
        words: ['la tête', 'le visage', 'les cheveux', 'l’œil', 'le nez', 'la bouche', 'l’oreille', 'la dent', 'le cou', 'le bras', 'la main', 'le doigt', 'la jambe', 'le pied', 'le ventre'],
      },
      {
        theme: 'Nombres',
        words: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'],
      },
      {
        theme: 'Verbes courants',
        words: ['pouvoir', 'devoir', 'savoir', 'voir', 'entendre', 'sortir', 'entrer', 'ouvrir', 'fermer', 'commencer', 'finir', 'jouer', 'chanter', 'danser', 'nager', 'marcher', 'courir', 'appeler', 'demander', 'répondre'],
      },
      {
        theme: 'Adjectifs courants',
        words: ['jeune', 'facile', 'difficile', 'cher', 'chaud', 'froid', 'content', 'triste', 'malade', 'fatigué', 'propre', 'sale', 'ouvert', 'fermé', 'même', 'autre', 'long', 'court', 'heureux', 'prêt'],
      },
      {
        theme: 'Objets du quotidien',
        words: ['le crayon', 'la gomme', 'la règle', 'le cahier', 'le sac à dos', 'la montre', 'les lunettes', 'le parapluie', 'la brosse à dents', 'le savon', 'la serviette', 'l’assiette', 'le verre', 'la tasse', 'la fourchette', 'le couteau', 'la cuillère', 'la casserole', 'la poêle', 'le bol'],
      },
      {
        theme: 'Lieux et nature',
        words: ['le jardin', 'le parc', 'la plage', 'la montagne', 'la forêt', 'la rivière', 'le lac', 'la mer', 'le cinéma', 'le restaurant'],
      },
      {
        theme: 'Mots utiles',
        words: ['ici', 'là', 'souvent', 'toujours', 'avec'],
      },
    ],
    quiz: [
      {
        id: 'voc-a1-q1',
        type: 'qcm',
        question: 'Comment dit-on « le pain » en anglais ?',
        options: ['bread', 'milk', 'cheese', 'water'],
        answer: 0,
        explain: 'Le pain = bread. Le lait = milk, le fromage = cheese, l’eau = water.',
      },
      {
        id: 'voc-a1-q2',
        type: 'qcm',
        question: 'Quelle est la couleur du ciel quand il fait beau ?',
        options: ['vert', 'bleu', 'rouge', 'noir'],
        answer: 1,
        explain: 'Le ciel est bleu (blue). Vert = green, rouge = red, noir = black.',
      },
      {
        id: 'voc-a1-q3',
        type: 'qcm',
        question: 'Quel mot n’appartient pas à la famille ?',
        options: ['le frère', 'la tante', 'la table', 'le cousin'],
        answer: 2,
        explain: 'La table est un meuble de la maison ; le frère, la tante et le cousin sont des membres de la famille.',
      },
      {
        id: 'voc-a1-q4',
        type: 'complete',
        question: 'Complétez la phrase de salutation du matin.',
        sentence: 'Le matin, quand on rencontre quelqu’un, on dit « ___ ».',
        answers: ['bonjour'],
        explain: 'Le matin, on dit « bonjour » (et « bonsoir » le soir).',
      },
      {
        id: 'voc-a1-q5',
        type: 'associe',
        question: 'Associez chaque mot à son thème.',
        pairs: [
          ['un chien', 'Animaux'],
          ['lundi', 'Jours, saisons et mois'],
          ['la cuisine', 'Maison et objets'],
          ['merci', 'Salutations et formules de politesse'],
        ],
        explain: 'Chien → animaux ; lundi → jours, saisons et mois ; cuisine → maison et objets ; merci → salutations et formules de politesse.',
      },
      {
        id: 'voc-a1-q6',
        type: 'vf',
        question: 'Vrai ou faux ? « Il pleut » parle de la météo.',
        vfAnswer: true,
        explain: 'Vrai. « Il pleut », « il fait beau », « il neige » sont des expressions de la météo.',
      },
      {
        id: 'voc-a1-q7',
        type: 'qcm',
        question: 'Que fait-on avec un stylo ?',
        options: ['manger', 'écrire', 'dormir', 'conduire'],
        answer: 1,
        explain: 'Le stylo sert à écrire, comme le crayon. À l’école, on apprend à lire et à écrire.',
      },
    ],
  },

  /* ————————————— NIVEAU A2 — 350 mots ————————————— */
  A2: {
    total: 350,
    complete: true,
    themes: [
      {
        theme: 'Verbes d’action et de communication',
        words: ['raconter', 'expliquer', 'décrire', 'discuter', 'proposer', 'accepter', 'refuser', 'inviter', 'visiter', 'réserver', 'louer', 'emprunter', 'prêter', 'rendre', 'chercher', 'trouver', 'garder', 'laisser', 'montrer', 'cacher', 'poser', 'remplir', 'vider', 'nettoyer', 'laver', 'repasser', 'cuisiner', 'préparer', 'goûter', 'sentir', 'toucher', 'penser', 'croire', 'espérer', 'oublier', 'se souvenir', 'rencontrer', 'connaître', 'présenter', 'saluer', 'remercier', 'féliciter', 's’excuser', 'se plaindre', 'décider', 'essayer', 'réussir', 'rater', 'manquer', 'changer'],
      },
      {
        theme: 'Sentiments, émotions et états',
        words: ['la peur', 'la joie', 'la tristesse', 'la colère', 'la surprise', 'le bonheur', 'le malheur', 'l’amour', 'l’amitié', 'la jalousie', 'la honte', 'la fierté', 'le stress', 'l’ennui', 'le courage', 'la fatigue', 'la maladie', 'la santé', 'le rêve', 'le souci', 'le problème', 'la solution', 'l’idée', 'l’opinion', 'le sentiment', 'l’émotion', 'l’envie', 'le désir', 'l’espoir', 'le regret', 'la décision', 'le choix', 'l’erreur', 'la vérité', 'le mensonge', 'la confiance', 'le doute', 'la patience', 'la tranquillité', 'le repos'],
      },
      {
        theme: 'Adjectifs descriptifs',
        words: ['agréable', 'désagréable', 'calme', 'bruyant', 'rapide', 'lent', 'léger', 'lourd', 'profond', 'large', 'étroit', 'épais', 'mince', 'sec', 'humide', 'doux', 'dur', 'mou', 'lisse', 'rugueux', 'plein', 'vide', 'occupé', 'libre', 'disponible', 'célèbre', 'inconnu', 'important', 'intéressant', 'ennuyeux', 'amusant', 'drôle', 'sérieux', 'gentil', 'méchant', 'poli', 'impoli', 'généreux', 'égoïste', 'timide', 'sociable', 'sportif', 'créatif', 'intelligent', 'bête', 'prudent', 'imprudent', 'courageux', 'peureux', 'moderne'],
      },
      {
        theme: 'Adverbes, connecteurs et expressions de temps',
        words: ['déjà', 'encore', 'presque', 'seulement', 'surtout', 'vraiment', 'peut-être', 'heureusement', 'malheureusement', 'ensemble', 'exprès', 'lentement', 'rapidement', 'facilement', 'difficilement', 'bien', 'mal', 'mieux', 'moins', 'plus', 'assez', 'trop', 'peu', 'd’abord', 'ensuite', 'puis', 'après', 'avant', 'pendant', 'depuis', 'jusqu’à', 'vers', 'chez', 'dans', 'sur', 'sous', 'entre', 'derrière', 'devant', 'à côté de'],
      },
      {
        theme: 'Maison, objets et vie quotidienne',
        words: ['le meuble', 'le placard', 'l’armoire', 'le tiroir', 'l’étagère', 'le miroir', 'le tableau', 'le rideau', 'le tapis', 'l’oreiller', 'la couverture', 'le drap', 'la serviette', 'le robinet', 'la douche', 'la baignoire', 'le lavabo', 'les toilettes', 'le frigo', 'le congélateur', 'le four', 'le micro-ondes', 'la machine à laver', 'le lave-vaisselle', 'l’aspirateur', 'le balai', 'la pelle', 'le seau', 'le chiffon', 'le produit', 'la lessive', 'la vaisselle', 'le torchon', 'l’éponge', 'le couvercle', 'la poubelle', 'le cintre', 'la pantoufle', 'le pyjama', 'le peignoir'],
      },
      {
        theme: 'Nourriture, cuisine et repas',
        words: ['le petit-déjeuner', 'le déjeuner', 'le dîner', 'le goûter', 'l’entrée', 'le plat principal', 'le dessert', 'la boisson', 'l’apéritif', 'le repas', 'la recette', 'l’ingrédient', 'la farine', 'l’huile', 'le vinaigre', 'la crème', 'le poivre', 'les épices', 'la sauce', 'la soupe', 'la tarte', 'la quiche', 'le sandwich', 'le croissant', 'la baguette', 'le jambon', 'le saucisson', 'la crêpe', 'la pizza', 'le bifteck'],
      },
      {
        theme: 'Ville, transports, voyages et pays',
        words: ['la gare', 'l’aéroport', 'la station', 'l’arrêt', 'le billet', 'le ticket', 'le passeport', 'la carte d’identité', 'la valise', 'le voyage', 'le touriste', 'l’hôtel', 'la chambre d’hôtel', 'la réservation', 'l’annulation', 'le départ', 'l’arrivée', 'le vol', 'le trajet', 'la direction', 'la correspondance', 'le quai', 'la voie', 'la route', 'l’autoroute', 'la nationale', 'le rond-point', 'le feu rouge', 'le panneau', 'le parking', 'le garage', 'la station-service', 'l’essence', 'le permis de conduire', 'le véhicule', 'le camion', 'le bateau', 'le tramway', 'le covoiturage', 'le plan'],
      },
      {
        theme: 'Travail, études et argent',
        words: ['le métier', 'l’emploi', 'l’entreprise', 'la société', 'l’usine', 'le bureau', 'le collègue', 'le patron', 'le directeur', 'l’employé', 'le client', 'le salaire', 'l’argent', 'la carte bancaire', 'le compte', 'le chèque', 'l’impôt', 'la dépense', 'l’achat', 'la vente', 'le prix', 'le coût', 'la réduction', 'la promotion', 'les soldes', 'la facture', 'le reçu', 'la monnaie', 'le distributeur', 'le stage', 'l’étudiant', 'l’élève', 'la leçon', 'le cours', 'l’exercice', 'le devoir', 'l’examen', 'le diplôme', 'la note', 'la matière'],
      },
      {
        theme: 'Nature, météo et environnement',
        words: ['le paysage', 'la campagne', 'la nature', 'la planète', 'la terre', 'l’air', 'le climat', 'la température', 'le degré', 'la pollution'],
      },
      {
        theme: 'Santé, corps et hygiène',
        words: ['la pharmacie', 'le médecin', 'le dentiste', 'le médicament', 'la douleur', 'la fièvre', 'la toux', 'le rhume', 'la grippe', 'la blessure'],
      },
    ],
    quiz: [
      {
        id: 'voc-a2-q1',
        type: 'qcm',
        question: 'Quel est le contraire de « lent » ?',
        options: ['calme', 'rapide', 'lourd', 'léger'],
        answer: 1,
        explain: 'Le contraire de « lent » est « rapide ». Calme ≠ bruyant ; lourd ≠ léger.',
      },
      {
        id: 'voc-a2-q2',
        type: 'qcm',
        question: 'Que fait-on quand on « se souvient » de quelque chose ?',
        options: ['On l’oublie', 'On le garde en mémoire', 'On le raconte', 'On le décide'],
        answer: 1,
        explain: '« Se souvenir », c’est garder quelque chose en mémoire. Son contraire est « oublier ».',
      },
      {
        id: 'voc-a2-q3',
        type: 'complete',
        question: 'Complétez la phrase.',
        sentence: 'Quand on refuse une invitation, on la ___.',
        answers: ['refuse'],
        explain: '« Refuser » une invitation, c’est dire non ; « accepter », c’est dire oui.',
      },
      {
        id: 'voc-a2-q4',
        type: 'associe',
        question: 'Associez chaque mot à son thème.',
        pairs: [
          ['le salaire', 'Travail, études et argent'],
          ['la fièvre', 'Santé, corps et hygiène'],
          ['le billet', 'Ville, transports, voyages et pays'],
          ['l’oreiller', 'Maison, objets et vie quotidienne'],
        ],
        explain: 'Le salaire → travail et argent ; la fièvre → santé ; le billet → voyages ; l’oreiller → maison.',
      },
      {
        id: 'voc-a2-q5',
        type: 'qcm',
        question: 'Quel mot n’appartient pas à la cuisine ?',
        options: ['la poêle', 'le four', 'le cintre', 'la casserole'],
        answer: 2,
        explain: 'Le cintre sert à suspendre les vêtements ; la poêle, le four et la casserole servent à cuisiner.',
      },
      {
        id: 'voc-a2-q6',
        type: 'vf',
        question: 'Vrai ou faux ? « Heureusement » et « malheureusement » sont des adverbes.',
        vfAnswer: true,
        explain: 'Vrai. Ce sont des adverbes qui expriment la chance ou la malchance par rapport à un événement.',
      },
      {
        id: 'voc-a2-q7',
        type: 'qcm',
        question: 'À la gare, le lieu où l’on attend le train s’appelle…',
        options: ['la voie', 'le quai', 'le péage', 'le volant'],
        answer: 1,
        explain: 'On attend le train sur le quai ; la voie est la ligne où roule le train.',
      },
      {
        id: 'voc-a2-q8',
        type: 'qcm',
        question: 'Quand un médicament ne fait pas effet, on dit qu’il est…',
        options: ['inefficace', 'impossible', 'inconnu', 'impoli'],
        answer: 0,
        explain: '« Inefficace » = qui ne produit pas l’effet attendu. Le contraire est « efficace ».',
      },
    ],
  },

  /* ————————————— NIVEAU B1 — 400 mots ————————————— */
  B1: {
    total: 400,
    complete: true,
    themes: [
      {
        theme: 'Verbes d’opinion, de pensée et de communication',
        words: ['affirmer', 'déclarer', 'annoncer', 'préciser', 'constater', 'remarquer', 'observer', 'souligner', 'insister', 'avouer', 'nier', 'prétendre', 'estimer', 'juger', 'considérer', 'supposer', 'imaginer', 'deviner', 'réfléchir', 'se demander', 's’interroger', 'douter', 'hésiter', 'choisir', 'comparer', 'opposer', 'distinguer', 'définir', 'résumer', 'traduire', 'interpréter', 'commenter', 'critiquer', 'approuver', 'désapprouver', 'convaincre', 'persuader', 'promettre', 'jurer', 'menacer', 'ordonner', 'conseiller', 'recommander', 'suggérer', 'avertir', 'prévenir', 'rassurer', 'consoler', 'encourager', 'décourager', 'se moquer', 'plaisanter', 'bavarder', 'chuchoter', 'crier', 'hurler', 'murmurer', 'bégayer', 'prononcer', 'articuler'],
      },
      {
        theme: 'Sentiments, caractère et relations',
        words: ['le caractère', 'la personnalité', 'l’humeur', 'l’attitude', 'le comportement', 'la qualité', 'le défaut', 'la sensibilité', 'l’émotion', 'la passion', 'l’enthousiasme', 'la déception', 'la frustration', 'l’inquiétude', 'l’angoisse', 'le soulagement', 'la satisfaction', 'l’insatisfaction', 'la gratitude', 'la reconnaissance', 'la sympathie', 'l’antipathie', 'l’affection', 'la tendresse', 'la complicité', 'la dispute', 'la querelle', 'le conflit', 'le malentendu', 'la réconciliation', 'le pardon', 'le respect', 'le mépris', 'la tolérance', 'l’intolérance', 'la générosité', 'l’avarice', 'l’honnêteté', 'la franchise', 'l’hypocrisie', 'la modestie', 'l’orgueil', 'la vanité', 'la curiosité', 'l’indifférence', 'la loyauté', 'la trahison', 'la vengeance', 'le remords', 'le scrupule'],
      },
      {
        theme: 'Adjectifs descriptifs et évaluatifs',
        words: ['agaçant', 'énervant', 'décevant', 'surprenant', 'étonnant', 'remarquable', 'exceptionnel', 'ordinaire', 'banal', 'original', 'bizarre', 'étrange', 'curieux', 'mystérieux', 'évident', 'clair', 'confus', 'flou', 'précis', 'approximatif', 'exact', 'faux', 'vrai', 'réel', 'imaginaire', 'possible', 'impossible', 'probable', 'certain', 'douteux', 'indispensable', 'nécessaire', 'utile', 'inutile', 'efficace', 'inefficace', 'pratique', 'compliqué', 'simple', 'sophistiqué', 'fragile', 'solide', 'robuste', 'délicat', 'sensible', 'insensible', 'chaleureux', 'froid', 'accueillant', 'hostile', 'dynamique', 'passif', 'actif', 'paresseux', 'travailleur', 'ambitieux', 'modeste', 'prétentieux', 'spontané', 'réservé'],
      },
      {
        theme: 'Noms abstraits et notions',
        words: ['l’avantage', 'l’inconvénient', 'la cause', 'la conséquence', 'le but', 'l’objectif', 'le projet', 'la réalisation', 'l’échec', 'la réussite', 'le succès', 'le progrès', 'le développement', 'le changement', 'l’évolution', 'la transformation', 'l’amélioration', 'la détérioration', 'la différence', 'la ressemblance', 'l’égalité', 'l’inégalité', 'la justice', 'l’injustice', 'la liberté', 'la contrainte', 'la responsabilité', 'l’obligation', 'le droit', 'le devoir', 'la règle', 'la loi', 'l’interdiction', 'la permission', 'l’autorisation', 'l’accord', 'le désaccord', 'le compromis', 'la négociation', 'le débat', 'la discussion', 'l’argument', 'la preuve', 'l’exemple', 'la généralisation', 'l’exception', 'la condition', 'le critère', 'la norme', 'la valeur'],
      },
      {
        theme: 'Vie quotidienne, maison et objets',
        words: ['le logement', 'le propriétaire', 'le locataire', 'le loyer', 'la caution', 'le bail', 'l’état des lieux', 'le déménagement', 'l’emménagement', 'l’électricité', 'le chauffage', 'la climatisation', 'l’isolation', 'la fuite', 'la panne', 'la réparation', 'le bricolage', 'la décoration', 'le papier peint', 'la moquette', 'le parquet', 'le carrelage', 'le plafond', 'le mur', 'le sol', 'la cave', 'le grenier', 'le balcon', 'la terrasse', 'le volet', 'la serrure', 'le verrou', 'l’interrupteur', 'la prise', 'l’ampoule', 'le fusible', 'le disjoncteur', 'le compteur', 'la facture d’électricité', 'les charges', 'la copropriété', 'le syndic', 'le voisinage', 'le bruit', 'la nuisance', 'le trouble', 'l’entretien', 'le ménage', 'le rangement', 'le désordre'],
      },
      {
        theme: 'Travail, études et argent',
        words: ['la carrière', 'le poste', 'la fonction', 'la mission', 'la tâche', 'la responsabilité', 'le supérieur', 'le subordonné', 'le stagiaire', 'l’apprenti', 'l’embauche', 'le recrutement', 'l’entretien d’embauche', 'le curriculum vitae', 'la lettre de motivation', 'le contrat', 'le CDI', 'le CDD', 'le temps partiel', 'le temps plein', 'les horaires', 'la pause', 'la réunion', 'l’ordre du jour', 'le compte rendu', 'le rapport', 'le dossier', 'le classement', 'l’archive', 'la recherche d’emploi', 'le chômage', 'l’allocation', 'la formation', 'le diplôme', 'la qualification', 'la compétence', 'l’expérience', 'le salaire brut', 'le salaire net', 'la prime', 'l’augmentation', 'la promotion', 'la démission', 'le licenciement', 'la retraite', 'le budget', 'l’épargne', 'le crédit', 'le remboursement', 'la dette'],
      },
      {
        theme: 'Ville, transports et voyages',
        words: ['l’urbanisme', 'le quartier', 'le centre-ville', 'la banlieue', 'la périphérie', 'la zone piétonne', 'la piste cyclable', 'l’embouteillage', 'la circulation', 'le code de la route', 'la priorité', 'le dépassement', 'la limitation de vitesse', 'l’amende', 'la contravention', 'le contrôle', 'l’assurance', 'la ceinture de sécurité', 'le casque', 'le gilet jaune', 'le triangle de signalisation', 'la roue de secours', 'le cric', 'la crevaison', 'le carburant', 'le plein', 'la jauge', 'le kilométrage', 'l’itinéraire', 'le détour', 'la carte routière', 'le GPS', 'le péage', 'l’aire de repos', 'le passager', 'le conducteur', 'le piéton', 'le covoitureur', 'la correspondance', 'le quai'],
      },
      {
        theme: 'Santé, corps et bien-être',
        words: ['la consultation', 'le diagnostic', 'le traitement', 'l’ordonnance', 'la posologie', 'les effets secondaires', 'la guérison', 'la rechute', 'la prévention', 'le vaccin', 'l’hygiène', 'l’alimentation', 'le régime', 'l’équilibre alimentaire', 'les nutriments', 'les vitamines', 'les protéines', 'les glucides', 'les lipides', 'les calories', 'le surpoids', 'l’obésité', 'la maigreur', 'l’activité physique', 'le sport', 'l’endurance', 'la musculation', 'la souplesse', 'la relaxation', 'la méditation'],
      },
      {
        theme: 'Nature, environnement et météo',
        words: ['l’environnement', 'l’écologie', 'le développement durable', 'le recyclage', 'le tri sélectif', 'les déchets', 'l’énergie renouvelable', 'l’énergie fossile', 'le réchauffement climatique', 'la sécheresse'],
      },
    ],
    quiz: [
      {
        id: 'voc-b1-q1',
        type: 'qcm',
        question: '« Avouer » signifie…',
        options: ['refuser une demande', 'reconnaître ce que l’on a fait', 'donner un ordre', 'proposer une idée'],
        answer: 1,
        explain: 'Avouer, c’est reconnaître un acte ou un sentiment que l’on cachait : « Il a avoué son erreur. »',
      },
      {
        id: 'voc-b1-q2',
        type: 'qcm',
        question: 'Quel est le contraire de « modeste » ?',
        options: ['timide', 'prétentieux', 'travailleur', 'réservé'],
        answer: 1,
        explain: 'Le prétentieux exagère ses qualités ; le modeste les minimise. Timide et réservé sont plutôt proches de modeste.',
      },
      {
        id: 'voc-b1-q3',
        type: 'associe',
        question: 'Associez chaque mot à son thème.',
        pairs: [
          ['la caution', 'Vie quotidienne, maison et objets'],
          ['le licenciement', 'Travail, études et argent'],
          ['le tri sélectif', 'Nature, environnement et météo'],
          ['la réconciliation', 'Sentiments, caractère et relations'],
        ],
        explain: 'La caution concerne le logement ; le licenciement, le travail ; le tri sélectif, l’environnement ; la réconciliation, les relations.',
      },
      {
        id: 'voc-b1-q4',
        type: 'complete',
        question: 'Complétez la phrase.',
        sentence: 'L’argent que l’on met de côté pour l’avenir s’appelle l’___.',
        answers: ['épargne'],
        explain: 'L’épargne est l’argent mis de côté, par opposition à la dépense. Le verbe correspondant est « épargner ».',
      },
      {
        id: 'voc-b1-q5',
        type: 'qcm',
        question: 'Un « embouteillage », c’est…',
        options: ['une route fermée pour travaux', 'une file de véhicules ralentis ou arrêtés', 'une amende pour excès de vitesse', 'un détour imposé'],
        answer: 1,
        explain: 'L’embouteillage (familier : « bouchon ») est un encombrement de la circulation.',
      },
      {
        id: 'voc-b1-q6',
        type: 'vf',
        question: 'Vrai ou faux ? « Indispensable » est le contraire d’« inutile ».',
        vfAnswer: true,
        explain: 'Vrai. Indispensable = absolument nécessaire ; inutile = qui ne sert à rien.',
      },
      {
        id: 'voc-b1-q7',
        type: 'qcm',
        question: 'Quel mot appartient au thème du logement ?',
        options: ['le salaire brut', 'la caution', 'la promotion', 'l’embouteillage'],
        answer: 1,
        explain: 'La caution est la somme versée au propriétaire à la signature du bail.',
      },
      {
        id: 'voc-b1-q8',
        type: 'qcm',
        question: '« Consoler quelqu’un », c’est…',
        options: ['se moquer de lui', 'calmer sa tristesse', 'le décourager', 'le menacer'],
        answer: 1,
        explain: 'Consoler, c’est apaiser la peine de quelqu’un. Décourager et menacer ont un sens opposé.',
      },
    ],
  },

  /* ————————————— NIVEAU B2 — 450 mots ————————————— */
  B2: {
    total: 450,
    complete: true,
    themes: [
      {
        theme: 'Verbes d’argumentation, de pensée et d’opinion',
        words: ['aborder', 'aboutir', 'accorder', 'admettre', 'affronter', 'analyser', 'anticiper', 'appréhender', 'argumenter', 'assumer', 'atténuer', 'avancer', 'concéder', 'conclure', 'confronter', 'considérer', 'contester', 'convaincre', 'déduire', 'défendre', 'démontrer', 'dénoncer', 'dépeindre', 'discerner', 'évoquer', 'examiner', 'expliciter', 'formuler', 'inférer', 'justifier', 'nuancer', 'objecter', 'postuler', 'préconiser', 'présupposer', 'récuser', 'réfuter', 'relativiser', 'soutenir', 'spéculer', 'statuer', 'suggérer', 'supputer', 'trancher', 'vérifier'],
      },
      {
        theme: 'Verbes d’action, de changement et de processus',
        words: ['accélérer', 'accomplir', 'accroître', 'adapter', 'ajuster', 'altérer', 'amoindrir', 'amplifier', 'assainir', 'atténuer', 'bouleverser', 'compenser', 'concrétiser', 'consolider', 'convertir', 'déclencher', 'dégrader', 'déployer', 'détériorer', 'dissiper', 'ébranler', 'élargir', 'endiguer', 'entraver', 'éradiquer', 'étendre', 'faciliter', 'fragiliser', 'générer', 'impulser', 'instaurer', 'intensifier', 'maintenir', 'métamorphoser', 'optimiser', 'pallier', 'perpétuer', 'promouvoir', 'rationaliser', 'réduire', 'renforcer', 'remodeler', 'résorber', 'stabiliser', 'transformer'],
      },
      {
        theme: 'Adjectifs descriptifs et évaluatifs avancés',
        words: ['abject', 'absolu', 'abstrait', 'absurde', 'adéquat', 'aléatoire', 'ambigu', 'ambivalent', 'anodin', 'arbitraire', 'archaïque', 'ardu', 'authentique', 'biaisé', 'cohérent', 'complexe', 'contingent', 'contradictoire', 'crédible', 'crucial', 'décisif', 'dérisoire', 'discutable', 'disparate', 'efficient', 'éloquent', 'énigmatique', 'équivoque', 'exhaustif', 'explicite', 'factice', 'fallacieux', 'fécond', 'fictif', 'fluctuant', 'formel', 'futile', 'hasardeux', 'hétérogène', 'illusoire', 'immuable', 'implicite', 'incontestable', 'indéniable', 'inhérent'],
      },
      {
        theme: 'Adjectifs de jugement moral, social et esthétique',
        words: ['abject', 'admirable', 'affligeant', 'aguicheur', 'altier', 'austère', 'avisé', 'bénin', 'blâmable', 'candide', 'captivant', 'clairvoyant', 'condamnable', 'convenable', 'corrompu', 'décadent', 'dérisoire', 'désuet', 'édifiant', 'émérite', 'épouvantable', 'exécrable', 'fastidieux', 'flatteur', 'frugal', 'glauque', 'grandiose', 'grotesque', 'honteux', 'impeccable', 'incongrue', 'indigne', 'infâme', 'ingénieux', 'intègre', 'lamentable', 'louable', 'lugubre', 'maussade', 'médiocre', 'mesquin', 'odieux', 'pathétique', 'révoltant', 'sublime'],
      },
      {
        theme: 'Noms abstraits et concepts généraux',
        words: ['l’aberration', 'l’aboutissement', 'l’acception', 'l’acquiescement', 'l’acuité', 'l’adversité', 'l’affinité', 'l’agencement', 'l’alibi', 'l’allégeance', 'l’altruisme', 'l’ambiguïté', 'l’ampleur', 'l’anachronisme', 'l’analogie', 'l’antagonisme', 'l’antithèse', 'l’apogée', 'l’arbitrage', 'l’archétype', 'l’ascendant', 'l’aspiration', 'l’assise', 'l’atout', 'l’authenticité', 'l’axiome', 'la cohérence', 'la coïncidence', 'la collusion', 'la complexité', 'la conciliation', 'la concomitance', 'la consécration', 'la contingence', 'la controverse', 'la corrélation', 'la crédibilité', 'la dichotomie', 'la divergence', 'l’écueil', 'l’efficience', 'l’éloquence', 'l’émanation', 'l’empathie', 'l’envergure'],
      },
      {
        theme: 'Noms liés à la société, à la politique et à l’économie',
        words: ['l’abdication', 'l’abrogation', 'l’absolutisme', 'l’acquittement', 'l’administration', 'l’aliénation', 'l’amnistie', 'l’anarchie', 'l’apartheid', 'l’arbitraire', 'l’aristocratie', 'l’autarcie', 'l’autocratie', 'la bureaucratie', 'la coalition', 'la collusion', 'la conjoncture', 'la conscription', 'la constitution', 'la corruption', 'la démocratie', 'la dérégulation', 'la dictature', 'la diplomatie', 'la dissidence', 'la fiscalité', 'la géopolitique', 'la gouvernance', 'l’hégémonie', 'l’impunité', 'l’inflation', 'l’ingérence', 'la législation', 'la libéralisation', 'la mondialisation', 'l’oligarchie', 'l’oppression', 'le plébiscite', 'la ploutocratie', 'la privatisation', 'la propagande', 'la ratification', 'la récession', 'la souveraineté', 'le totalitarisme'],
      },
      {
        theme: 'Noms liés à la psychologie, aux relations et aux émotions',
        words: ['l’acrimonie', 'l’affliction', 'l’agressivité', 'l’amertume', 'l’angoisse', 'l’animosité', 'l’apathie', 'l’appréhension', 'l’arrogance', 'l’assurance', 'l’aversion', 'la bienveillance', 'la compassion', 'la complaisance', 'la convoitise', 'la défiance', 'la dépression', 'le désarroi', 'le désenchantement', 'la détresse', 'l’effroi', 'l’égocentrisme', 'l’empathie', 'l’euphorie', 'l’exaspération', 'la fascination', 'la frustration', 'la haine', 'l’hostilité', 'l’indignation', 'l’insouciance', 'l’irascibilité', 'la lassitude', 'la mélancolie', 'la méfiance', 'le narcissisme', 'la nostalgie', 'l’obsession', 'la paranoïa', 'la perplexité', 'la rancune', 'le ressentiment', 'la sérénité', 'la suspicion', 'la vulnérabilité'],
      },
      {
        theme: 'Connecteurs logiques et mots de liaison',
        words: ['ainsi', 'alors que', 'a fortiori', 'au demeurant', 'au préalable', 'auquel cas', 'cela dit', 'cependant', 'certes', 'c’est pourquoi', 'conséquemment', 'd’ailleurs', 'd’autant plus', 'de même', 'de surcroît', 'du moins', 'en contrepartie', 'en définitive', 'en dépit de', 'en effet', 'en l’occurrence', 'en outre', 'en revanche', 'en somme', 'étant donné', 'hormis', 'néanmoins', 'nonobstant', 'or', 'par ailleurs', 'par conséquent', 'par contre', 'par suite', 'pour autant', 'pourtant', 'préalablement', 'qui plus est', 'sinon', 'somme toute', 'subséquemment', 'toutefois', 'vu que', 'alors que', 'bien que', 'tandis que'],
      },
      {
        theme: 'Vocabulaire de l’environnement, de la science et de la technologie',
        words: ['l’acidification', 'l’aérosol', 'l’agriculture intensive', 'l’altermondialisme', 'l’anthropocène', 'l’aquaculture', 'l’assainissement', 'l’atmosphère', 'la biodiversité', 'le biogaz', 'la biomasse', 'la biosphère', 'le bouleversement climatique', 'la canicule', 'le captage', 'la carbonisation', 'le changement climatique', 'la combustion', 'la compensation carbone', 'la désertification', 'l’écocide', 'l’écosystème', 'l’effet de serre', 'l’empreinte carbone', 'l’énergie fossile', 'l’énergie renouvelable', 'l’érosion', 'l’eutrophisation', 'la fonte des glaces', 'le gaz à effet de serre', 'la géothermie', 'l’hydroélectricité', 'l’incinération', 'l’irradiation', 'la nocivité', 'le nucléaire', 'l’obsolescence programmée', 'l’organisme génétiquement modifié', 'la pollution lumineuse', 'le recyclage', 'la reforestation', 'la résilience', 'la séquestration du carbone', 'la surexploitation', 'la transition énergétique'],
      },
      {
        theme: 'Expressions figées et locutions usuelles',
        words: ['à cet égard', 'à condition que', 'à défaut de', 'à l’encontre de', 'à la faveur de', 'à la lumière de', 'à la merci de', 'à long terme', 'à maintes reprises', 'à moins que', 'à première vue', 'à propos de', 'à savoir', 'à titre de', 'au détriment de', 'au fil de', 'au fond', 'au fur et à mesure', 'au gré de', 'au lieu de', 'au moyen de', 'au préjudice de', 'au regard de', 'au sein de', 'au vu de', 'dans la mesure où', 'dans le but de', 'dans le cadre de', 'dans l’éventualité où', 'de crainte que', 'de manière à', 'de peur que', 'en amont de', 'en aval de', 'en ce qui concerne', 'en dépit de', 'en guise de', 'en matière de', 'en raison de', 'en vertu de', 'par le biais de', 'par l’intermédiaire de', 'quant à', 'sous couvert de', 'sous prétexte de'],
      },
    ],
    quiz: [
      {
        id: 'voc-b2-q1',
        type: 'qcm',
        question: '« Réfuter une thèse », c’est…',
        options: ['la reformuler', 'prouver qu’elle est fausse', 'l’illustrer par un exemple', 'la nuancer'],
        answer: 1,
        explain: 'Réfuter = démontrer qu’une thèse adverse est fausse. Nuancer, c’est apporter des réserves ; reformuler, c’est redire autrement.',
      },
      {
        id: 'voc-b2-q2',
        type: 'qcm',
        question: 'Un raisonnement « fallacieux » est un raisonnement…',
        options: ['très rigoureux', 'trompeur, fondé sur des apparences de logique', 'trop court', 'particulièrement émouvant'],
        answer: 1,
        explain: 'Fallacieux = trompeur : un argument fallacieux semble logique mais ne l’est pas réellement.',
      },
      {
        id: 'voc-b2-q3',
        type: 'associe',
        question: 'Associez chaque mot à son thème.',
        pairs: [
          ['l’hégémonie', 'Noms liés à la société, à la politique et à l’économie'],
          ['la mélancolie', 'Noms liés à la psychologie, aux relations et aux émotions'],
          ['l’empreinte carbone', 'Vocabulaire de l’environnement, de la science et de la technologie'],
          ['nonobstant', 'Connecteurs logiques et mots de liaison'],
        ],
        explain: 'L’hégémonie désigne une domination politique ; la mélancolie est une humeur ; l’empreinte carbone relève de l’environnement ; « nonobstant » est un connecteur soutenu.',
      },
      {
        id: 'voc-b2-q4',
        type: 'complete',
        question: 'Complétez avec l’adjectif qui convient.',
        sentence: 'Un adjectif qui signifie « qui ne change pas, permanent » : ___.',
        answers: ['immuable'],
        explain: 'Immuable = qui ne change pas. Indéniable = qu’on ne peut nier ; inhérent = lié par nature à quelque chose.',
      },
      {
        id: 'voc-b2-q5',
        type: 'qcm',
        question: '« Nonobstant » équivaut à…',
        options: ['grâce à', 'malgré', 'après', 'ainsi'],
        answer: 1,
        explain: '« Nonobstant » est une préposition soutenue équivalente à « malgré » : nonobstant ses efforts = malgré ses efforts.',
      },
      {
        id: 'voc-b2-q6',
        type: 'vf',
        question: 'Vrai ou faux ? « Pourtant » et « néanmoins » expriment tous les deux l’opposition.',
        vfAnswer: true,
        explain: 'Vrai. Ces deux connecteurs marquent l’opposition ou la concession, comme « toutefois » ou « cependant ».',
      },
      {
        id: 'voc-b2-q7',
        type: 'qcm',
        question: '« Pallier un manque » signifie…',
        options: ['l’aggraver', 'y remédier, le compenser', 'le signaler', 'l’ignorer'],
        answer: 1,
        explain: 'Pallier = remédier à, compenser. Attention à la construction : on dit « pallier un manque » (sans « à »).',
      },
      {
        id: 'voc-b2-q8',
        type: 'qcm',
        question: 'Quelle locution signifie « progressivement » ?',
        options: ['à première vue', 'au fur et à mesure', 'en définitive', 'a fortiori'],
        answer: 1,
        explain: '« Au fur et à mesure » = progressivement, au fil de l’avancement. « En définitive » = finalement ; « a fortiori » = à plus forte raison.',
      },
    ],
  },

  /* ————————————— NIVEAU C1 — 500 mots ————————————— */
  C1: {
    total: 500,
    complete: true,
    themes: [
      {
        theme: 'Verbes soutenus et d’action complexe',
        words: ['abjurer', 'abroger', 'absoudre', 'accaparer', 'accréditer', 'adjuger', 'affranchir', 'aguerrir', 'aliéner', 'amalgamer', 'annihiler', 'antéposer', 'apitoyer', 'apostasier', 'appréhender', 'araser', 'arguer', 'assener', 'attiser', 'auréoler', 'avaliser', 'bâcler', 'bafouer', 'biaiser', 'blâmer', 'brocarder', 'cautériser', 'circonscrire', 'clamer', 'coaguler', 'coïncider', 'commuer', 'compulser', 'concéder', 'conjecturer', 'conjurer', 'consacrer', 'conspuer', 'contingenter', 'corroborer', 'décréter', 'déférer', 'délester', 'démystifier', 'dénigrer', 'déprécier', 'désavouer', 'déshériter', 'désolidariser', 'dilapider', 'disculper', 'disjoindre', 'distiller', 'éconduire', 'édicter', 'édulcorer', 'émasculer', 'embobeliner', 'émoustiller', 'encenser', 'endoctriner', 'enfreindre', 'enliser', 'entériner', 'éradiquer', 'escamoter', 'exacerber', 'exempter', 'exhausser', 'exhumer', 'extirper', 'fustiger', 'galvauder', 'haranguer', 'homologuer', 'implorer', 'inféoder', 'infirmer', 'inhiber', 'insinuer'],
      },
      {
        theme: 'Noms abstraits et concepts philosophiques ou sociaux',
        words: ['l’abnégation', 'l’absolution', 'l’acception', 'l’acmé', 'l’admonestation', 'l’affèterie', 'l’alacrité', 'l’allégeance', 'l’aménité', 'l’anathème', 'l’antinomie', 'l’apanage', 'l’aporie', 'l’apostasie', 'l’apothéose', 'l’archétype', 'l’argumentaire', 'l’ascèse', 'l’assentiment', 'l’ataraxie', 'l’austérité', 'l’autosuffisance', 'l’axiologie', 'la béatitude', 'la caution', 'la circonspection', 'la clémence', 'la coalescence', 'la coercition', 'la collusion', 'la complaisance', 'la concupiscence', 'la consubstantialité', 'la contingence', 'la déférence', 'la déontologie', 'la dépravation', 'la désuétude', 'la dialectique', 'la dichotomie', 'la dissension', 'la dissonance', 'la doxa', 'l’éclectisme', 'l’effervescence', 'l’éloquence', 'l’embarras', 'l’empathie', 'l’emphase', 'l’endémie', 'l’entropie', 'l’épistémologie', 'l’équanimité', 'l’ergonomie', 'l’ésotérisme', 'l’euphémisme', 'l’exégèse', 'l’exubérance', 'la faconde', 'la fatuité', 'la félicité', 'la flamboyance', 'la frugalité', 'la généalogie', 'la gageure', 'l’hégémonie', 'l’herméneutique', 'l’hétérogénéité', 'l’hiatus', 'l’holisme', 'l’homogénéité', 'l’hybris', 'l’iconoclasme', 'l’idiosyncrasie', 'l’immanence', 'l’immixtion', 'l’impéritie', 'l’imprécation', 'l’inanité', 'l’incongruité', 'l’incurie', 'l’indolence', 'l’inéluctabilité', 'l’iniquité', 'l’insolence', 'l’intransigeance', 'l’irréversibilité', 'la jurisprudence', 'la légitimité', 'la litote', 'la magnanimité', 'la mansuétude', 'la métaphysique', 'la miséricorde', 'la munificence', 'la nébuleuse', 'la nocivité', 'l’obédience', 'l’obsolescence', 'l’onanisme'],
      },
      {
        theme: 'Adjectifs rares, littéraires ou techniques',
        words: ['abstrus', 'acariâtre', 'acerbe', 'adamantin', 'affable', 'alambiqué', 'allégorique', 'amorphe', 'anachronique', 'anodin', 'antédiluvien', 'apathique', 'apocryphe', 'apodictique', 'apolitique', 'arbitraire', 'archaïque', 'ardu', 'argutieux', 'atrabilaire', 'austère', 'avunculaire', 'bariolé', 'bélant', 'bénin', 'blafard', 'cacophonique', 'caduc', 'caustique', 'chimérique', 'clivant', 'coercitif', 'cocasse', 'comminatoire', 'congruent', 'contingent', 'crépusculaire', 'cryptique', 'cupide', 'débonnaire', 'décrépit', 'délétère', 'déontologique', 'désuet', 'diaphane', 'didactique', 'dilatoire', 'disert', 'dolent', 'dythirambique', 'éclectique', 'édifiant', 'effronté', 'énergumène', 'épistolaire', 'équivoque', 'erratique', 'ésotérique', 'exécrable', 'exigu', 'factice', 'falot', 'fastueux', 'fébrile', 'fictif', 'flagorneur', 'fluctuant', 'frileux', 'fumeux', 'galvaudeux', 'goguenard', 'hâbleur', 'hédoniste', 'hétéroclite', 'hilare', 'histrionique', 'homogène', 'iconoclaste', 'idoine', 'illusoire', 'immarcescible', 'impavide', 'impérieux', 'imprescriptible', 'inamovible', 'ineffable', 'inéluctable', 'inexorable', 'infaillible', 'insidieux', 'irascible', 'laconique', 'lapidaire', 'léonin', 'liminaire', 'lymphatique', 'madré', 'malingre', 'méphitique', 'mitigé'],
      },
      {
        theme: 'Adverbes et locutions adverbiales avancées',
        words: ['abondamment', 'allègrement', 'antérieurement', 'approximativement', 'a priori', 'a posteriori', 'ardemment', 'assurément', 'à l’envi', 'à maintes reprises', 'à profusion', 'à rebours', 'à satiété', 'à tue-tête', 'au demeurant', 'au préalable', 'bonnement', 'cahin-caha', 'certes', 'concomitamment', 'contradictoirement', 'd’abondance', 'd’ailleurs', 'd’arrache-pied', 'd’emblée', 'd’ores et déjà', 'de conserve', 'de guingois', 'de manière', 'de surcroît', 'délibérément', 'désormais', 'dorénavant', 'du reste', 'en catimini', 'en définitive', 'en dépit de', 'en l’occurrence', 'en outre', 'en pure perte', 'en sus', 'ex abrupto', 'forfaitairement', 'grosso modo', 'incontinent', 'indubitablement', 'inopinément', 'insidieusement', 'ipso facto', 'mutatis mutandis', 'néanmoins', 'nonobstant', 'nullement', 'on ne peut plus', 'paradoxalement', 'peu ou prou', 'préalablement', 'principalement', 'quid', 'subséquemment'],
      },
      {
        theme: 'Expressions figées et locutions idiomatiques C1',
        words: ['à brûle-pourpoint', 'à cor et à cri', 'à huis clos', 'à la dérobée', 'à la faveur de', 'à la va-vite', 'à l’aveuglette', 'à loisir', 'à marée basse', 'à mots couverts', 'à première vue', 'à son corps défendant', 'à tout bout de champ', 'au bas mot', 'au débotté', 'au doigt mouillé', 'au gré de', 'au nez et à la barbe de', 'au pied levé', 'au regard de', 'au sein de', 'au vu et au su de', 'battre la campagne', 'chercher midi à quatorze heures', 'couper l’herbe sous le pied', 'crier haro sur', 'de but en blanc', 'de fil en aiguille', 'de guerre lasse', 'de longue date', 'de mémoire d’homme', 'de plain-pied', 'de prime abord', 'de toute pièce', 'du jour au lendemain', 'en amont de', 'en aval de', 'en bonne et due forme', 'en bras de chemise', 'en connaissance de cause', 'en contrepartie', 'en d’autres termes', 'en dernier ressort', 'en désespoir de cause', 'en l’espace de', 'en l’état', 'en main propre', 'en porte-à-faux', 'en premier lieu', 'en pure perte', 'en règle générale', 'en revanche', 'en tant que tel', 'en un tournemain', 'faire amende honorable', 'faire chou blanc', 'faire contre mauvaise fortune bon cœur', 'faire fi de', 'faire long feu', 'jeter l’éponge', 'jouer les prolongations', 'l’échapper belle', 'laisser en plan', 'mettre au ban', 'monter au créneau', 'ne pas mâcher ses mots', 'par acquit de conscience', 'par la bande', 'par monts et par vaux', 'par procuration', 'par ricochet', 'payer au prix fort', 'pendre la crémaillère', 'perdre la face', 'prendre au dépourvu', 'prendre en grippe', 'prendre ombrage', 'prendre ses jambes à son cou', 'regarder en chiens de faïence', 'remettre à plus tard', 'rendre des comptes', 'rester en travers de la gorge', 'sans coup férir', 'sans mot dire', 'sauter aux yeux', 'se faire fort de', 'se mettre à table', 'se porter garant', 'tailler en pièces', 'tenir en haleine', 'tirer son épingle du jeu', 'toucher du bois', 'tourner autour du pot', 'trouver grâce aux yeux de', 'user de', 'venir à bout de', 'voir d’un bon œil', 'voir d’un mauvais œil', 'vogue la galère', 'y regarder à deux fois', 'avoir carte blanche', 'battre en brèche', 'broyer du noir', 'crier victoire', 'donner le change', 'faire cavalier seul', 'jouer la montre', 'lever le voile', 'mettre en exergue', 'prendre acte'],
      },
      {
        theme: 'Termes de domaines spécialisés (sciences humaines, droit, économie…)',
        words: ['l’abattement fiscal', 'l’abus de droit', 'l’acte notarié', 'l’aléa moral', 'l’amortissement', 'l’anomie', 'l’anthropocentrisme', 'l’apartheid', 'l’arbitrage', 'l’assignation', 'l’assujettissement', 'l’autorégulation', 'l’avulsion', 'la balance commerciale', 'la bienséance', 'la biométrie', 'la bureaucratie', 'la capacité contributive', 'la casuistique', 'la clause de conscience', 'la collégialité', 'la comparution', 'la concurrence déloyale', 'la condition suspensive', 'la confiscation', 'la consignation', 'la contrepartie', 'la décentralisation', 'la déflation', 'la démagogie', 'la déontologie', 'la désintermédiation', 'la dissuasion', 'la dividendende', 'la dogmatique', 'la draconienne', 'la due diligence', 'l’éclectisme juridique', 'l’économicisme', 'l’égalitarisme', 'l’émolument', 'l’endogamie', 'l’exégèse juridique', 'l’extradition', 'la féodalité', 'la gérontocratie', 'l’hégémonie culturelle', 'l’homologation', 'l’immixtion', 'l’impératif catégorique'],
      },
    ],
    quiz: [
      {
        id: 'voc-c1-q1',
        type: 'qcm',
        question: '« Fustiger un comportement », c’est…',
        options: ['l’encourager discrètement', 'le critiquer avec vigueur', 'l’analyser objectivement', 'l’imiter avec ironie'],
        answer: 1,
        explain: 'Fustiger = critiquer, blâmer avec véhémence. Son contraire serait « encenser ».',
      },
      {
        id: 'voc-c1-q2',
        type: 'qcm',
        question: 'Un événement « inéluctable » est un événement…',
        options: ['impossible à éviter', 'difficile à comprendre', 'particulièrement joyeux', 'sans importance'],
        answer: 0,
        explain: 'Inéluctable = auquel on ne peut échapper. Le nom correspondant est « l’inéluctabilité ».',
      },
      {
        id: 'voc-c1-q3',
        type: 'qcm',
        question: 'Une manœuvre « dilatoire » a pour but de…',
        options: ['faire échouer un projet', 'gagner du temps', 'clarifier un débat', 'punir un adversaire'],
        answer: 1,
        explain: 'Dilatoire = destiné à différer, à gagner du temps (du latin « dilatare », différer).',
      },
      {
        id: 'voc-c1-q4',
        type: 'associe',
        question: 'Associez chaque mot à son thème.',
        pairs: [
          ['l’aporie', 'Noms abstraits et concepts philosophiques ou sociaux'],
          ['à brûle-pourpoint', 'Expressions figées et locutions idiomatiques C1'],
          ['ipso facto', 'Adverbes et locutions adverbiales avancées'],
          ['l’émolument', 'Termes de domaines spécialisés (sciences humaines, droit, économie…)'],
        ],
        explain: 'L’aporie est une contradiction insoluble ; « à brûle-pourpoint » signifie « brusquement » ; « ipso facto » = « par le fait même » ; l’émolument est une rémunération (droit, administration).',
      },
      {
        id: 'voc-c1-q5',
        type: 'complete',
        question: 'Complétez l’expression.',
        sentence: 'Quand on abandonne un projet en cours de route, on dit qu’on « jette l’___ ».',
        answers: ['éponge'],
        explain: '« Jeter l’éponge » = abandonner. L’image vient de la boxe : on jetait l’éponge pour arrêter le combat.',
      },
      {
        id: 'voc-c1-q6',
        type: 'vf',
        question: 'Vrai ou faux ? « Laconique » qualifie une personne qui parle très peu.',
        vfAnswer: true,
        explain: 'Vrai. Laconique = bref, concis, du nom de la Laconie, région de Sparte, réputée pour sa concision.',
      },
      {
        id: 'voc-c1-q7',
        type: 'qcm',
        question: '« Faire chou blanc » signifie…',
        options: ['réussir brillamment', 'échouer dans une démarche', 'cuisiner rapidement', 'mentir effrontément'],
        answer: 1,
        explain: '« Faire chou blanc » = ne pas réussir, échouer. L’expression vient du jeu de quilles.',
      },
      {
        id: 'voc-c1-q8',
        type: 'qcm',
        question: 'Quel adjectif signifie « qui n’a plus cours, démodé » ?',
        options: ['factice', 'désuet', 'apodictique', 'impavide'],
        answer: 1,
        explain: 'Désuet = vieilli, qui n’est plus en usage. Apodictique = indiscutable ; impavide = impassible ; factice = artificiel.',
      },
    ],
  },

  /* ————————————— NIVEAU C2 — 550 mots ————————————— */
  C2: {
    total: 550,
    complete: true,
    themes: [
      {
        theme: 'Verbes rares, littéraires ou très soutenus',
        words: ['abhorrer', 'accointer', 'adoniser', 'affabuler', 'affriander', 'agioter', 'alambiquer', 'amenuiser', 'anathématiser', 'aposter', 'arroger', 'attifer', 'billeveser', 'blasphémer', 'brigander', 'cabotiner', 'calfeutrer', 'caparaçonner', 'chapitrer', 'clabauder', 'claudiquer', 'concaténer', 'cornaquer', 'créner', 'débagouler', 'déblatérer', 'décacheter', 'décatir', 'défalquer', 'défeuiller', 'dégoter', 'délurer', 'démancher', 'déparer', 'dépenailler', 'dépriser', 'désargenter', 'désembourber', 'désosser', 'éberluer', 'écornifler', 'effilocher', 'embabouiner', 'emberlificoter', 'émoucher', 'endêver', 'engeancer', 'enjôler', 'enticher', 'ergoter', 'escagasser', 'étriller', 'exécrer', 'farder', 'ferrailler', 'festonner', 'flétrir', 'forligner', 'gaber', 'galéjer'],
      },
      {
        theme: 'Noms abstraits, philosophiques, psychologiques',
        words: ['acatalepsie', 'acribie', 'adynamie', 'agnosie', 'alogie', 'amathie', 'anamnèse', 'apophtegme', 'aposiopèse', 'aséité', 'cacologie', 'catachrèse', 'cénesthésie', 'chrématistique', 'concettisme', 'consilience', 'cryptomnésie', 'déréliction', 'diachronie', 'diégèse', 'doxographie', 'dysphorie', 'écholalie', 'eidétique', 'élucubration', 'épectase', 'épiclèse', 'épiphanie', 'épochè', 'érémitisme', 'eschatologie', 'éthopée', 'étiologie', 'eudémonisme', 'facticité', 'fantasmagorie', 'gémellité', 'gnoséologie', 'haptique', 'hénothéisme', 'hérésiarque', 'hétérotopie', 'hiérophanie', 'holonymie', 'homilétique', 'hybridité', 'hylémorphisme', 'hypostase', 'iconodulie', 'idéation', 'illuminisme', 'imparité', 'impétrant', 'inchoatif', 'incommensurabilité', 'incréé', 'indétermination', 'ineffabilité', 'infaillibilité', 'infécondité', 'inséité', 'intellection', 'intelligibilité', 'intertextualité', 'ipséité', 'irénisme', 'isomorphisme', 'itérativité', 'juridicité', 'kérygme', 'légalisme', 'lexie', 'logorrhée', 'ludisme', 'maïeutique', 'méliorisme', 'métalangage', 'métonymie', 'misologie', 'monadologie'],
      },
      {
        theme: 'Noms de domaines spécialisés (droit, médecine, botanique, etc.)',
        words: ['aboulie', 'acouphène', 'acromégalie', 'adénome', 'aérophagie', 'agranulocytose', 'alexie', 'algie', 'allodynie', 'aménorrhée', 'anévrisme', 'angor', 'anosmie', 'anoxie', 'aphasie', 'apnée', 'apraxie', 'arthrose', 'asthénie', 'ataxie', 'athérome', 'bradycardie', 'cachexie', 'carcinome', 'cardiopathie', 'céphalée', 'chorée', 'cirrhose', 'colique', 'comitialité', 'conjonctivite', 'cyphose', 'dermite', 'diarrhée', 'dyspnée', 'ecchymose', 'embolie', 'emphysème', 'encéphalite', 'endocardite', 'épistaxis', 'érythème', 'exophtalmie', 'fibrome', 'gastrite', 'glaucome', 'goitre', 'hémiplégie', 'hépatite', 'hernie', 'hyperthermie', 'hypoglycémie', 'ictère', 'infarctus', 'ischémie', 'lombalgie', 'lymphome', 'mélanome', 'méningite', 'ménopause', 'métastase', 'myopie', 'nécrose', 'néphrite', 'neuralgie', 'obésité', 'œdème', 'ostéoporose', 'otalgie', 'pancréatite', 'paralysie', 'péricardite', 'phlébite', 'pleurésie', 'pneumonie', 'polype', 'prurit', 'psoriasis', 'rhumatisme', 'sciatique'],
      },
      {
        theme: 'Adjectifs très soutenus ou poétiques',
        words: ['abstersif', 'acaule', 'achromatique', 'adventice', 'albugineux', 'amarante', 'ambré', 'anfractueux', 'apiculé', 'avaricieux', 'balsamique', 'bardé', 'basilaire', 'béatifique', 'belliqueux', 'boréal', 'bucolique', 'cacochyme', 'caducifolié', 'caligineux', 'callipyge', 'capiteux', 'caréné', 'carmin', 'caverneux', 'céruléen', 'chagrin', 'chamarré', 'charbonneux', 'chatoyant', 'chevelu', 'chlorotique', 'cireux', 'clairsemé', 'clément', 'clinquant', 'colossal', 'comestible', 'concupiscent', 'conique', 'contigu', 'coriace', 'cornu', 'cotonneux', 'crasseux', 'crépitant', 'cristallin', 'cryptogame', 'cuivré', 'cunéiforme', 'curviligne', 'déhiscent', 'dense', 'dentelé', 'diapré', 'dichotome', 'diffus', 'diluvien', 'discordant', 'disgracieux', 'disjoint', 'dissolu', 'divergent', 'dodécagonal', 'dormant', 'drapé', 'dru', 'dubitatif', 'ductile', 'éburnéen', 'écarlate', 'échevelé', 'éclatant', 'écru', 'effilé', 'efflorescent', 'électif', 'ellipsoïdal', 'émacié', 'emblématique'],
      },
      {
        theme: 'Adverbes et locutions adverbiales rares',
        words: ['accessoirement', 'allusivement', 'anarchiquement', 'assidûment', 'bénévolement', 'capricieusement', 'clandestinement', 'compulsivement', 'confusément', 'copieusement', 'curieusement', 'elliptiquement', 'éperdument', 'fastidieusement', 'fortuitement', 'frénétiquement', 'graduellement', 'imperturbablement', 'indéfectiblement', 'inexorablement', 'invariablement', 'irrévocablement', 'laconiquement', 'méthodiquement', 'notoirement', 'obséquieusement', 'parcimonieusement', 'péremptoirement', 'placidement', 'précairement', 'prolixement', 'pudiquement', 'sereinement', 'subrepticement', 'tacitement', 'témérairement', 'ténébreusement', 'vraisemblablement', 'somptueusement', 'succinctement'],
      },
      {
        theme: 'Expressions idiomatiques et locutions figées de niveau C2',
        words: ['aller à Canossa', 'avoir des œillères', 'battre de l’aile', 'chercher des noises', 'courir le guilledou', 'donner dans le panneau', 'en faire des gorges chaudes', 'être sur la sellette', 'jeter le manche après la cognée', 'mener une vie de patachon', 'mettre au ban de la société', 'payer en monnaie de singe', 'pendre la crémaillère', 'prendre le mors aux dents', 'rendre la pareille', 'rester les bras croisés', 'se mettre sur son trente et un', 'tailler des croupières', 'tenir le haut du pavé', 'tourner casaque', 'vendre la mèche', 'avoir la langue bien pendue', 'battre la breloque', 'crier famine', 'en rester comme deux ronds de flan', 'être au four et au moulin', 'faire des gorges chaudes', 'faire flèche de tout bois', 'faire la part du feu', 'faire le gros dos', 'faire long feu', 'jeter l’éponge', 'jouer les trouble-fête', 'mettre la charrue avant les bœufs', 'mettre les pieds dans le plat', 'monter au créneau', 'ne pas y aller par quatre chemins', 'payer les pots cassés', 'prendre des vessies pour des lanternes', 'prendre le taureau par les cornes', 'promettre monts et merveilles', 'regarder par le petit bout de la lorgnette', 'rester sur sa faim', 'se casser la tête', 'se faire tirer l’oreille', 'se mettre le doigt dans l’œil', 'se tourner les pouces', 's’en laver les mains', 'tenir la chandelle', 'tirer les marrons du feu', 'tomber dans les pommes', 'tourner autour du pot', 'trouver chaussure à son pied', 'vendre la peau de l’ours', 'voir midi à sa porte', 'avoir un poil dans la main', 'avoir une araignée au plafond', 'battre le fer pendant qu’il est chaud', 'chercher une aiguille dans une botte de foin', 'couper les cheveux en quatre', 'donner sa langue au chat', 'en connaître un rayon', 'être cousu de fil blanc', 'faire d’une pierre deux coups', 'faire la grasse matinée', 'jeter de la poudre aux yeux', 'mettre de l’eau dans son vin', 'passer l’arme à gauche', 'poser un lapin', 'prendre ses cliques et ses claques', 'se mettre en quatre', 'tomber à pic', 'un froid de canard', 'avoir le cafard', 'avoir le compas dans l’œil', 'avoir les dents longues', 'avoir un chat dans la gorge', 'avoir une faim de loup', 'brûler la chandelle par les deux bouts', 'casser sa pipe', 'couper la poire en deux', 'faire l’école buissonnière', 'faire les quatre cents coups', 'garder une poire pour la soif', 'jouer les prolongations', 'manger sur le pouce', 'mettre les bouchées doubles', 'passer un savon', 'pleuvoir des cordes', 'prendre la poudre d’escampette', 'promettre la lune', 'revenir bredouille', 'se serrer la ceinture', 'tomber dans le panneau', 'tourner la page', 'un froid de loup', 'vendre la mèche', 'avoir le bras long', 'avoir le gosier en pente', 'chercher des poux'],
      },
      {
        theme: 'Termes techniques ou scientifiques',
        words: ['abiogenèse', 'adiabatique', 'aérodynamique', 'affouillement', 'agrostologie', 'alcaloïde', 'allotropie', 'anabolisme', 'anémométrie', 'anthropométrie', 'apogée', 'apoptose', 'aréologie', 'astrométrie', 'bathymétrie', 'biocénose', 'biostasie', 'calorimétrie', 'catabolisme', 'catalyse', 'cément', 'cénogenèse', 'chimiotactisme', 'chronobiologie', 'cladistique', 'coacervation', 'cristallographie', 'cryogénie', 'cyclogenèse', 'cytométrie', 'dendrochronologie', 'diagenèse', 'dialectologie', 'électrophorèse', 'endocytose', 'enzymologie', 'éphéméride', 'épigénétique', 'ethnobotanique', 'exobiologie', 'génomique', 'géodésie', 'géomorphologie', 'glaciologie', 'héliophysique', 'hétérosis', 'histologie', 'hydrodynamique', 'ichtyologie', 'immunologie', 'isostasie', 'karstologie', 'limnologie', 'lithosphère', 'magnétohydrodynamique', 'métabolomique', 'métallogénie', 'météoritique', 'microbiologie', 'minéralogie'],
      },
      {
        theme: 'Mots issus du registre très soutenu ou archaïque',
        words: ['abscons', 'accort', 'affèterie', 'alme', 'anté', 'argutieux', 'atrabilaire', 'béat', 'blafard', 'caduc', 'calembour', 'capiteux', 'chamarré', 'chaste', 'cocasse', 'concupiscent', 'contrit', 'délicat', 'désuet', 'doucereux', 'égrillard', 'émoustillant', 'espiègle', 'fâcheux', 'fastueux', 'félon', 'folâtre', 'frivole', 'galant', 'guindé', 'hâbleur', 'imbu', 'ineffable', 'infatué', 'ingénu', 'irrévérencieux', 'juvénile', 'languissant', 'lascif', 'loufoque', 'maussade', 'méphitique', 'obséquieux', 'outrecuidant', 'pétulant', 'précieux', 'rabat-joie', 'rébarbatif', 'sardonique', 'vétilleux'],
      },
    ],
    quiz: [
      {
        id: 'voc-c2-q1',
        type: 'qcm',
        question: '« Abhorrer » signifie…',
        options: ['admirer secrètement', 'détester profondément', 'étudier avec soin', 'imiter maladroitement'],
        answer: 1,
        explain: 'Abhorrer = avoir en horreur, détester profondément. À ne pas confondre avec « abjurer » (renoncer solennellement).',
      },
      {
        id: 'voc-c2-q2',
        type: 'qcm',
        question: 'Agir « subrepticement », c’est agir…',
        options: ['avec éclat', 'en cachette, discrètement', 'avec lenteur', 'de façon brutale'],
        answer: 1,
        explain: 'Subrepticement = furtivement, en se faufilant sans se faire remarquer. Du latin subrepere, « se glisser ».',
      },
      {
        id: 'voc-c2-q3',
        type: 'associe',
        question: 'Associez chaque mot à son thème.',
        pairs: [
          ['la diégèse', 'Noms abstraits, philosophiques, psychologiques'],
          ['l’épistaxis', 'Noms de domaines spécialisés (droit, médecine, botanique, etc.)'],
          ['aller à Canossa', 'Expressions idiomatiques et locutions figées de niveau C2'],
          ['l’électrophorèse', 'Termes techniques ou scientifiques'],
        ],
        explain: 'La diégèse est un concept narratologique ; l’épistaxis est le terme médical du saignement de nez ; « aller à Canossa » = s’humilier pour obtenir son pardon ; l’électrophorèse est une technique de laboratoire.',
      },
      {
        id: 'voc-c2-q4',
        type: 'complete',
        question: 'Complétez l’expression.',
        sentence: 'Quand on renonce à deviner, on dit : « Je donne ma langue au ___ ».',
        answers: ['chat'],
        explain: '« Donner sa langue au chat » = renoncer à trouver la réponse. Le chat, ici, garde le secret qu’on lui confie.',
      },
      {
        id: 'voc-c2-q5',
        type: 'qcm',
        question: 'Un teint « éburnéen » est un teint…',
        options: ['rougeaud', 'd’une blancheur d’ivoire', 'cuivré', 'basané'],
        answer: 1,
        explain: 'Éburnéen = qui a l’éclat ou la blancheur de l’ivoire (du latin ebur, « ivoire »). Céruléen, lui, désigne le bleu du ciel.',
      },
      {
        id: 'voc-c2-q6',
        type: 'vf',
        question: 'Vrai ou faux ? « Obséquieux » qualifie une politesse excessive et servile.',
        vfAnswer: true,
        explain: 'Vrai. L’obséquiosité est une déférence exagérée, souvent intéressée — proche de la flagornerie.',
      },
      {
        id: 'voc-c2-q7',
        type: 'qcm',
        question: '« Avoir un poil dans la main » signifie…',
        options: ['être très adroit', 'être paresseux', 'être irritable', 'être minutieux'],
        answer: 1,
        explain: 'L’expression suppose que la main du paresseux reste si longtemps inactive qu’un poil pourrait y pousser.',
      },
      {
        id: 'voc-c2-q8',
        type: 'qcm',
        question: 'Répondre « péremptoirement », c’est répondre…',
        options: ['avec hésitation', 'de façon catégorique, sans admettre la réplique', 'avec humour', 'par une question'],
        answer: 1,
        explain: 'Péremptoire = qui clôt le débat, qui ne souffre pas la contradiction. Du latin peremptorius, « qui détruit ».',
      },
    ],
  },
};
