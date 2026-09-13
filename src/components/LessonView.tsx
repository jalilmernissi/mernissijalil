import { useState } from 'react';
import type { Lesson, SectionBlock } from '../data/types';
import { ExerciseCard } from './ExerciseEngine';
import { Breadcrumbs, Reveal } from './ui';
import { IconArrowLeft, IconArrowRight, IconCheck, IconClock, IconPen, IconQuote, IconRefresh } from './Icons';

/* Modèle de cours standard en 7 temps :
   Objectifs → 1 Observation → 2 Comprendre → 3 Règle à retenir → 4 Exemples
   → 5 Je m’entraîne → 6 Je vérifie → 7 À retenir */

function StepBadge({ n, label, tone = 'bleu' }: { n: string; label: string; tone?: 'bleu' | 'or' | 'rouge' | 'navy' }) {
  const tones = {
    bleu: 'bg-bleu text-card',
    or: 'bg-or text-navy',
    rouge: 'bg-rouge text-card',
    navy: 'bg-navy text-card',
  };
  return (
    <div className="flex items-center gap-3">
      <span className={`grid place-items-center w-9 h-9 rounded-lg font-display font-bold ${tones[tone]}`}>{n}</span>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">{label}</h3>
    </div>
  );
}

function SectionRenderer({ s }: { s: SectionBlock }) {
  switch (s.kind) {
    case 'p':
      return <p className="text-[15px] sm:text-base leading-relaxed text-ink-soft">{s.text}</p>;
    case 'sub':
      return (
        <h4 className="mt-6 mb-1 flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span className="h-4 w-1.5 rounded-full bg-or" aria-hidden="true" />
          {s.text}
        </h4>
      );
    case 'liste':
      return (
        <div>
          {s.title && <p className="mb-2 font-bold text-ink">{s.title}</p>}
          <ul className="grid gap-2">
            {s.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-bleu" aria-hidden="true" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'texte':
      return (
        <figure className="rounded-r-xl border-l-4 border-bleu bg-bleu-tint/50 px-5 py-4">
          <figcaption className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-bleu">
            <IconQuote className="w-4 h-4" /> Extrait
            {s.title ? ` — ${s.title}` : ''}
          </figcaption>
          <blockquote className="font-display text-[15px] italic leading-relaxed text-ink whitespace-pre-line">{s.text}</blockquote>
          {s.source && <p className="mt-2 text-[13px] font-semibold text-ink-faint">{s.source}</p>}
        </figure>
      );
    case 'tableau':
      return (
        <div>
          {s.title && <p className="mb-2 font-bold text-ink">{s.title}</p>}
          <div className="overflow-x-auto rounded-xl border border-mist">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="bg-navy text-card">
                  {s.headers.map((h, i) => (
                    <th key={i} className="px-4 py-2.5 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.rows.map((r, i) => (
                  <tr key={i} className={i % 2 ? 'bg-paper' : 'bg-card'}>
                    {r.map((c, j) => (
                      <td key={j} className="px-4 py-2.5 align-top leading-relaxed text-ink-soft first:font-semibold first:text-ink">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'note':
      return (
        <div
          className={`flex gap-3 rounded-xl border px-4 py-3.5 ${
            s.tone === 'attention' ? 'border-rouge/40 bg-rouge-tint' : 'border-or/50 bg-or-tint'
          }`}
        >
          <span className={`shrink-0 mt-0.5 text-[11px] font-black uppercase tracking-wider px-2 py-1 rounded ${s.tone === 'attention' ? 'bg-rouge text-card' : 'bg-or text-navy'}`}>
            {s.tone === 'attention' ? 'Attention' : 'Astuce'}
          </span>
          <p className="text-[14.5px] leading-relaxed text-ink">{s.text}</p>
        </div>
      );
  }
}

export function LessonView({
  lesson,
  breadcrumbs,
  prev,
  next,
  progress,
  completed = false,
  onToggleComplete,
}: {
  lesson: Lesson;
  breadcrumbs?: { label: string; to?: string }[];
  prev?: { title: string; to: string } | null;
  next?: { title: string; to: string } | null;
  progress?: { current: number; total: number };
  completed?: boolean;
  onToggleComplete?: () => void;
}) {
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [tryN, setTryN] = useState(0);

  const answered = Object.keys(results).length;
  const score = Object.values(results).filter(Boolean).length;
  const total = lesson.exercises.length;

  return (
    <article className="space-y-10">
      {/* En-tête de leçon */}
      <header className="space-y-4">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold text-ink-faint">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mist bg-card px-3 py-1">
            <IconClock /> {lesson.minutes} min
          </span>
          <span className="rounded-full bg-bleu-tint px-3 py-1 text-bleu-deep">{lesson.exercises.length} exercices corrigés</span>
          {completed && (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-green-800">
              <IconCheck className="w-3.5 h-3.5" /> Leçon terminée
            </span>
          )}
        </div>
        <h1 className="font-display text-3xl sm:text-[2.6rem] font-black tracking-tight text-ink leading-tight">{lesson.title}</h1>

        {progress && (
          <div>
            <div className="flex items-center justify-between text-[13px] font-bold text-ink-soft">
              <span>
                Progression : {progress.current} / {progress.total} leçons
              </span>
              <span>{Math.round((progress.current / Math.max(progress.total, 1)) * 100)} %</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-mist" role="progressbar" aria-valuenow={progress.current} aria-valuemin={0} aria-valuemax={progress.total}>
              <div className="progress-fill h-full rounded-full bg-gradient-to-r from-bleu to-or" style={{ width: `${(progress.current / Math.max(progress.total, 1)) * 100}%` }} />
            </div>
          </div>
        )}

        {/* Objectifs */}
        <div className="rounded-xl border border-bleu/25 bg-bleu-tint/60 p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bleu">Objectifs</p>
          <p className="mt-1.5 text-sm font-semibold text-ink">À la fin de cette leçon, l’apprenant sera capable de…</p>
          <ul className="mt-2 grid gap-1.5">
            {lesson.objectives.map((o, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] text-ink-soft">
                <IconCheck className="mt-1 w-4 h-4 shrink-0 text-bleu" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* 1 · Observation */}
      <Reveal>
        <section aria-label="Observation" className="space-y-3">
          <StepBadge n="1" label="Observation" />
          {lesson.observation.label && <p className="font-bold text-ink">{lesson.observation.label}</p>}
          <figure className="bg-seyes rounded-xl border border-mist bg-card px-6 py-6 shadow-fiche">
            <blockquote className="font-display text-[15.5px] sm:text-base italic leading-[2rem] text-ink whitespace-pre-line">
              {lesson.observation.text}
            </blockquote>
            {lesson.observation.source && <figcaption className="mt-3 text-[13px] font-semibold text-ink-faint">{lesson.observation.source}</figcaption>}
          </figure>
        </section>
      </Reveal>

      {/* 2 · Comprendre */}
      <Reveal>
        <section aria-label="Comprendre" className="space-y-4">
          <StepBadge n="2" label="Comprendre" tone="or" />
          <div className="space-y-4">
            {lesson.sections.map((s, i) => (
              <SectionRenderer key={i} s={s} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* 3 · Règle à retenir */}
      <Reveal>
        <section aria-label="Règle à retenir" className="space-y-3">
          <StepBadge n="3" label="Règle à retenir" tone="rouge" />
          <div className="relative overflow-hidden rounded-xl bg-navy p-6 text-card shadow-lift">
            <span className="absolute -right-4 -top-6 font-display text-[7rem] font-black text-navy-3 select-none" aria-hidden="true">
              §
            </span>
            <ul className="relative grid gap-3">
              {lesson.rule.map((r, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-or" aria-hidden="true" />
                  <span className="text-mist">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* 4 · Exemples */}
      <Reveal>
        <section aria-label="Exemples" className="space-y-3">
          <StepBadge n="4" label="Exemples" />
          <ul className="grid gap-2.5">
            {lesson.examples.map((e, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-mist bg-card px-4 py-3">
                <IconPen className="mt-0.5 w-5 h-5 shrink-0 text-or" />
                <span className="text-[15px] leading-relaxed text-ink-soft">{e}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* 5 · Je m’entraîne */}
      <section aria-label="Je m’entraîne" className="space-y-4">
        <Reveal>
          <StepBadge n="5" label="Je m’entraîne" tone="or" />
          <p className="text-[15px] text-ink-soft">Exercices progressifs — validez chaque réponse pour voir le corrigé et l’explication.</p>
        </Reveal>
        <div className="grid gap-5">
          {lesson.exercises.map((exo, i) => (
            <Reveal key={`${exo.id}-${tryN}`} delay={i * 60}>
              <ExerciseCard
                exo={exo}
                index={i}
                onResult={(id, ok) => setResults((r) => ({ ...r, [id]: ok }))}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6 · Je vérifie */}
      <Reveal>
        <section aria-label="Je vérifie" className="space-y-3">
          <StepBadge n="6" label="Je vérifie" tone="navy" />
          <div className="rounded-xl border-2 border-dashed border-bleu/40 bg-bleu-tint/40 p-6 text-center">
            <p className="font-display text-4xl font-black text-bleu-deep">
              {score} <span className="text-xl text-ink-faint">/ {total}</span>
            </p>
            <p className="mt-1 text-sm font-semibold text-ink-soft">
              {answered < total
                ? `Réponses validées : ${answered} sur ${total} — continuez !`
                : score === total
                  ? 'Excellent ! Toutes les réponses sont justes.'
                  : score >= total / 2
                    ? 'Bien ! Relisez les explications des exercices manqués.'
                    : 'Relisez la leçon (étapes 2 et 3) puis recommencez.'}
            </p>
            {answered > 0 && (
              <button
                type="button"
                onClick={() => {
                  setResults({});
                  setTryN((n) => n + 1);
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-bleu px-4 py-2 text-sm font-bold text-bleu-deep transition-all hover:bg-bleu hover:text-card"
              >
                <IconRefresh className="w-4 h-4" /> Recommencer les exercices
              </button>
            )}
          </div>
        </section>
      </Reveal>

      {/* 7 · À retenir */}
      <Reveal>
        <section aria-label="À retenir" className="space-y-3">
          <StepBadge n="7" label="À retenir" tone="rouge" />
          <div className="rounded-xl border border-or/50 bg-or-tint/70 p-6">
            <ul className="grid gap-2.5">
              {lesson.synthese.map((s, i) => (
                <li key={i} className="flex gap-3 text-[15px] font-medium leading-relaxed text-ink">
                  <IconCheck className="mt-1 w-4 h-4 shrink-0 text-or-deep" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          {onToggleComplete && (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onToggleComplete}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold shadow-fiche transition-all hover:-translate-y-0.5 ${
                  completed ? 'bg-green-700 text-card hover:bg-green-800' : 'bg-or text-navy hover:bg-or-deep hover:text-card'
                }`}
              >
                {completed ? 'Leçon terminée — cliquer pour annuler' : 'Marquer la leçon comme terminée'}
              </button>
              <span className="text-[13px] text-ink-faint">Votre progression est enregistrée sur cet appareil.</span>
            </div>
          )}
        </section>
      </Reveal>

      {/* Navigation précédente / suivante */}
      {(prev || next) && (
        <nav aria-label="Navigation entre leçons" className="grid gap-3 border-t border-mist pt-6 sm:grid-cols-2">
          {prev ? (
            <a href={`#${prev.to}`} className="group flex items-center gap-3 rounded-xl border border-mist bg-card px-4 py-3.5 shadow-fiche transition-all hover:border-bleu/50 hover:-translate-y-0.5">
              <IconArrowLeft className="w-5 h-5 shrink-0 text-bleu transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-faint">← Leçon précédente</span>
                <span className="block font-semibold text-ink group-hover:text-bleu-deep">{prev.title}</span>
              </span>
            </a>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}
          {next && (
            <a href={`#${next.to}`} className="group flex items-center justify-end gap-3 rounded-xl border border-mist bg-card px-4 py-3.5 text-right shadow-fiche transition-all hover:border-bleu/50 hover:-translate-y-0.5 sm:col-start-2">
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-faint">Leçon suivante →</span>
                <span className="block font-semibold text-ink group-hover:text-bleu-deep">{next.title}</span>
              </span>
              <IconArrowRight className="w-5 h-5 shrink-0 text-bleu transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </nav>
      )}
    </article>
  );
}
