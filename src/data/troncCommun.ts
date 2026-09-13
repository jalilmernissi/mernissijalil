import type { Course } from './types';
import { moduleI } from './troncCommun1';
import { moduleII, fichesJeRetiens } from './troncCommun2';

export { fichesJeRetiens };

export const troncCommun: Course = {
  id: 'tronc-commun',
  title: 'Tronc Commun',
  tagline: 'Les bases solides de l’étude du français au lycée',
  bookUrl: 'https://1drv.ms/b/c/b40cc29fe01a6502/IQCq7uBJJh1bQ6CT0pWJgMkcAe8s7OVLG4uA7vCcQugKJJI?e=aCQy59',
  bookNote: 'Manuel de l’élève au format numérique.',
  modules: [moduleI, moduleII],
};

export interface FlatLesson {
  lessonId: string;
  title: string;
  moduleTitle: string;
  seqTitle: string;
  path: string;
  minutes: number;
}

export const flatLessons: FlatLesson[] = troncCommun.modules.flatMap((m) =>
  m.sequences.flatMap((s) =>
    s.lessons.map((l) => ({
      lessonId: l.id,
      title: l.title,
      moduleTitle: m.title,
      seqTitle: s.title,
      path: `/tronc-commun/${m.id}/${s.id}/${l.id}`,
      minutes: l.minutes,
    }))
  )
);

export const totalLessons = flatLessons.length;
