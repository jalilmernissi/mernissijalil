import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { troncCommun, flatLessons } from '../data/troncCommun';
import { getCompleted, toggleCompleted } from '../lib/config';
import { LessonView } from '../components/LessonView';

/* Page de lecture dédiée d’une leçon du Tronc Commun :
   Accueil > Tronc Commun > Module > Séquence > Leçon */

export function LessonPage() {
  const { moduleId, seqId, lessonId } = useParams();
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCompleted(getCompleted());
    window.scrollTo(0, 0);
  }, [moduleId, seqId, lessonId]);

  const module = troncCommun.modules.find((m) => m.id === moduleId);
  const seq = module?.sequences.find((s) => s.id === seqId);
  const lesson = seq?.lessons.find((l) => l.id === lessonId);

  if (!module || !seq || !lesson) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Leçon introuvable</h1>
        <p className="mt-3 text-ink-soft">Cette leçon n’existe pas (ou pas encore). Retournez au sommaire du Tronc Commun.</p>
        <a href="#/tronc-commun" className="mt-6 inline-block rounded-lg bg-bleu px-6 py-3 font-bold text-card transition-colors hover:bg-bleu-deep">
          Retour au Tronc Commun
        </a>
      </div>
    );
  }

  const idx = flatLessons.findIndex((f) => f.lessonId === lesson.id);
  const prev = idx > 0 ? flatLessons[idx - 1] : null;
  const next = idx < flatLessons.length - 1 ? flatLessons[idx + 1] : null;
  const doneCount = flatLessons.filter((f) => completed.has(f.lessonId)).length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
      <LessonView
        lesson={lesson}
        breadcrumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Tronc Commun', to: '/tronc-commun' },
          { label: module.id === 'module-2' ? 'Module II' : 'Module I', to: '/tronc-commun' },
          { label: seq.title.replace(/^Séquence \d+ — |^Séquence inaugurale/, 'Séq. ').trim(), to: '/tronc-commun' },
          { label: lesson.title },
        ]}
        prev={prev ? { title: prev.title, to: prev.path } : null}
        next={next ? { title: next.title, to: next.path } : null}
        progress={{ current: doneCount, total: flatLessons.length }}
        completed={completed.has(lesson.id)}
        onToggleComplete={() => setCompleted(toggleCompleted(lesson.id))}
      />
    </div>
  );
}
