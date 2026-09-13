/* ————————————————————————————————————————————
   Modèle de données pédagogique :
   Niveau → Module → Séquence → Leçon → Cours → Exercices → Corrigé
   ———————————————————————————————————————————— */

export type ExerciseType = 'qcm' | 'vf' | 'complete' | 'ordre' | 'associe';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  /* QCM */
  options?: string[];
  answer?: number;
  /* Vrai / Faux */
  vfAnswer?: boolean;
  /* Compléter */
  sentence?: string;
  answers?: string[];
  /* Remettre en ordre */
  items?: string[];
  shuffled?: string[];
  /* Associer */
  pairs?: [string, string][];
  /* Corrigé */
  explain: string;
}

export type SectionBlock =
  | { kind: 'p'; text: string }
  | { kind: 'sub'; text: string }
  | { kind: 'liste'; title?: string; items: string[] }
  | { kind: 'texte'; title?: string; text: string; source?: string }
  | { kind: 'tableau'; title?: string; headers: string[]; rows: string[][] }
  | { kind: 'note'; tone: 'attention' | 'astuce'; text: string };

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  objectives: string[];
  observation: { label?: string; text: string; source?: string };
  sections: SectionBlock[];
  rule: string[];
  examples: string[];
  exercises: Exercise[];
  synthese: string[];
  keywords: string[];
}

export interface Sequence {
  id: string;
  title: string;
  subtitle?: string;
  lessons: Lesson[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  sequences: Sequence[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  bookUrl?: string | null;
  bookNote?: string;
  modules: CourseModule[];
}

export interface SearchEntry {
  title: string;
  type: 'Cours' | 'Notion' | 'Œuvre' | 'Exercice' | 'Ressource' | 'Niveau';
  to: string;
  hint?: string;
  keywords: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  type: 'Fiche' | 'Exercice' | 'Sujet' | 'Texte' | 'Méthode' | 'Vocabulaire';
  downloadable: boolean;
  content: string;
}
