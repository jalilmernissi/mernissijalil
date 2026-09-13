import { useParams } from 'react-router-dom';
import { fleLevels } from '../data/fle';
import { vocabulaire } from '../data/vocabulaire';
import { grammarLessons, type GrammarLesson } from '../data/grammaire';
import { getCompleted, toggleCompleted } from '../lib/config';
import { useState } from 'react';
import { Reveal, SectionHeading, Breadcrumbs, Modal } from '../components/ui';
import { LessonView } from '../components/LessonView';
import { ExerciseCard } from '../components/ExerciseEngine';
import { IconCheck, IconGlobe, IconArrowRight, IconSearch, IconRefresh, Feather } from '../components/Icons';
import { useEffect } from 'react';

const LEVEL_ACCENTS: Record<string, { border: string; badge: string; dot: string }> = {
  A1: { border: 'border-t-bleu', badge: 'bg-bleu text-card', dot: 'bg-bleu' },
  A2: { border: 'border-t-bleu', badge: 'bg-bleu-deep text-card', dot: 'bg-bleu-deep' },
  B1: { border: 'border-t-or', badge: 'bg-or text-navy', dot: 'bg-or' },
  B2: { border: 'border-t-or', badge: 'bg-or-deep text-card', dot: 'bg-or-deep' },
  C1: { border: 'border-t-rouge', badge: 'bg-rouge text-card', dot: 'bg-rouge' },
  C2: { border: 'border-t-navy', badge: 'bg-navy text-card', dot: 'bg-navy' },
};

/* ————— Page d’index : les six niveaux ————— */
export function FleIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'FLE A1-C2' }]} />
      <div className="mt-6 max-w-3xl">
        <Reveal>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-rouge">
            <IconGlobe className="w-4 h-4" /> Français Langue Étrangère
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-ink">Du niveau A1 au niveau C2</h1>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            Six paliers du Cadre européen commun de référence pour les langues (CECRL). Chaque niveau possède sa page : objectifs, compétences
            travaillées, points de grammaire, vocabulaire ciblé et une leçon d’exemple avec exercices corrigés.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {fleLevels.map((lvl, i) => {
          const acc = LEVEL_ACCENTS[lvl.code];
          return (
            <Reveal key={lvl.code} delay={(i % 3) * 80}>
              <article className={`group flex h-full flex-col rounded-xl border border-mist border-t-4 ${acc.border} bg-card p-6 shadow-fiche transition-all hover:-translate-y-1.5 hover:shadow-lift`}>
                <div className="flex items-start justify-between">
                  <span className={`rounded-xl px-4 py-2 font-display text-3xl font-black ${acc.badge}`}>{lvl.code}</span>
                  <span className="mt-1 flex gap-1" aria-hidden="true">
                    {Array.from({ length: 6 }).map((_, d) => (
                      <span key={d} className={`h-2 w-2 rounded-full ${d <= i ? acc.dot : 'bg-mist'}`} />
                    ))}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                  {lvl.code} — {lvl.name}
                </h2>
                <p className="mt-1 text-[13.5px] font-bold uppercase tracking-wide text-ink-faint">{lvl.tagline}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{lvl.description}</p>

                <p className="mt-4 text-[12px] font-black uppercase tracking-[0.16em] text-bleu-deep">{lvl.verb} :</p>
                <ul className="mt-2 grid gap-1.5">
                  {lvl.goals.map((g) => (
                    <li key={g} className="flex gap-2 text-[14px] text-ink-soft">
                      <IconCheck className="mt-0.5 w-4 h-4 shrink-0 text-bleu" /> {g}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {lvl.competences.slice(0, 3).map((c) => (
                    <span key={c} className="rounded-full bg-paper border border-mist px-3 py-1 text-[12px] font-semibold text-ink-faint">
                      {c}
                    </span>
                  ))}
                </div>

                <span className="mt-auto pt-6">
                  <a
                    href={`#/fle/${lvl.code.toLowerCase()}`}
                    className={`flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold shadow-fiche transition-all hover:-translate-y-0.5 hover:shadow-lift ${acc.badge}`}
                  >
                    Voir les cours
                  </a>
                </span>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/* ————— Page d’un niveau (A1 … C2) ————— */
export function FleLevel() {
  const { level } = useParams();
  const lvl = fleLevels.find((l) => l.code.toLowerCase() === level?.toLowerCase());
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [vocabOpen, setVocabOpen] = useState(false);
  const [grammarOpen, setGrammarOpen] = useState<string | null>(null);

  useEffect(() => {
    setCompleted(getCompleted());
    window.scrollTo(0, 0);
  }, [level]);

  if (!lvl) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Niveau introuvable</h1>
        <p className="mt-3 text-ink-soft">Ce niveau FLE n’existe pas encore. Choisissez un niveau de A1 à C2.</p>
        <a href="#/fle" className="mt-6 inline-block rounded-lg bg-bleu px-6 py-3 font-bold text-card">
          Retour aux niveaux FLE
        </a>
      </div>
    );
  }

  const idx = fleLevels.indexOf(lvl);
  const acc = LEVEL_ACCENTS[lvl.code];
  const prev = idx > 0 ? fleLevels[idx - 1] : null;
  const next = idx < fleLevels.length - 1 ? fleLevels[idx + 1] : null;
  const lessonDone = completed.has(lvl.lesson.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'FLE A1-C2', to: '/fle' }, { label: `${lvl.code} — ${lvl.name}` }]} />

      {/* En-tête du niveau */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl font-display text-4xl font-black shadow-lift ${acc.badge}`}>{lvl.code}</span>
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-ink">{lvl.name}</h1>
              <p className="mt-1 font-bold uppercase tracking-wide text-ink-faint">{lvl.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">{lvl.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-mist bg-card p-5 shadow-fiche">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bleu">{lvl.verb}</p>
              <ul className="mt-2.5 grid gap-1.5">
                {lvl.goals.map((g) => (
                  <li key={g} className="flex gap-2 text-[14.5px] text-ink-soft">
                    <IconCheck className="mt-0.5 w-4 h-4 shrink-0 text-bleu" /> {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-mist bg-card p-5 shadow-fiche">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-or-deep">Compétences travaillées</p>
                <ul className="mt-2.5 grid gap-1.5">
                  {lvl.competences.map((c) => (
                    <li key={c} className="flex gap-2 text-[14.5px] text-ink-soft">
                      <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 ${acc.dot}`} aria-hidden="true" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setVocabOpen(true)}
                className="group w-full rounded-xl border border-mist bg-navy p-5 text-left text-card shadow-fiche transition-all hover:-translate-y-1 hover:bg-navy-2 hover:shadow-lift"
                aria-haspopup="dialog"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-or">Vocabulaire ciblé</p>
                <p className="mt-1.5 flex items-center justify-between gap-3 font-display text-[1.35rem] font-black leading-snug">
                  Vocabulaire {lvl.code}. {vocabulaire[lvl.code]?.total ?? lvl.vocab}
                  <IconArrowRight className="w-5 h-5 shrink-0 text-or transition-transform group-hover:translate-x-1" />
                </p>
                <p className="mt-1 text-[13px] text-mist/70">Ouvrir la liste par thèmes et le test de vocabulaire.</p>
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-mist bg-card p-5 shadow-fiche">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-rouge">Points de grammaire du niveau</p>
            <p className="mt-1.5 text-[12.5px] text-ink-faint">Cliquez sur un point pour ouvrir la leçon complète (observation, analyse, règle, exercices).</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {lvl.grammar.map((g) => {
                const hasLesson = Boolean(grammarLessons[g]);
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrammarOpen(g)}
                    disabled={!hasLesson}
                    aria-haspopup="dialog"
                    className={`group inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] font-semibold transition-all ${
                      hasLesson
                        ? 'border-bleu/30 bg-bleu-tint/50 text-bleu-deep hover:border-bleu hover:bg-bleu hover:text-card hover:-translate-y-0.5'
                        : 'border-mist bg-paper text-ink-faint cursor-not-allowed'
                    }`}
                  >
                    {g}
                    {hasLesson && (
                      <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Parcours visuel des niveaux */}
        <Reveal delay={150}>
          <aside className="rounded-xl border border-mist bg-card p-6 shadow-fiche" aria-label="Votre parcours CECRL">
            <p className="font-display text-lg font-bold text-ink">Votre parcours CECRL</p>
            <ol className="mt-4 space-y-2">
              {fleLevels.map((l, i) => {
                const active = l.code === lvl.code;
                return (
                  <li key={l.code}>
                    <a
                      href={`#/fle/${l.code.toLowerCase()}`}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                        active ? 'bg-bleu text-card shadow-fiche' : 'text-ink-soft hover:bg-bleu-tint/60'
                      }`}
                    >
                      <span className={`grid h-9 w-9 place-items-center rounded-lg font-display font-black ${active ? 'bg-card/20 text-card' : LEVEL_ACCENTS[l.code].badge}`}>
                        {l.code}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-bold">{l.name}</span>
                        <span className={`block text-[12px] ${active ? 'text-card/80' : 'text-ink-faint'}`}>{l.vocab}</span>
                      </span>
                      {i <= idx && <IconCheck className={`w-4 h-4 ${active ? 'text-or' : 'text-green-700'}`} />}
                    </a>
                  </li>
                );
              })}
            </ol>
            <div className="mt-4 flex gap-2">
              {prev && (
                <a href={`#/fle/${prev.code.toLowerCase()}`} className="flex-1 rounded-lg border border-mist px-3 py-2 text-center text-[13px] font-bold text-ink-soft hover:border-bleu/50 hover:text-bleu-deep transition-colors">
                  ← {prev.code}
                </a>
              )}
              {next && (
                <a href={`#/fle/${next.code.toLowerCase()}`} className="flex-1 rounded-lg bg-bleu px-3 py-2 text-center text-[13px] font-bold text-card hover:bg-bleu-deep transition-colors">
                  {next.code} →
                </a>
              )}
            </div>
          </aside>
        </Reveal>
      </div>

      {/* Leçon du niveau */}
      <div className="mt-16">
        <SectionHeading
          kicker={`Leçon d’exemple · Niveau ${lvl.code}`}
          title={lvl.lesson.title}
          description="Une leçon complète du niveau, avec exercices interactifs et corrigés. La bibliothèque de leçons s’enrichit régulièrement."
        />
        <div className="mx-auto mt-8 max-w-4xl">
          <LessonView
            lesson={lvl.lesson}
            completed={lessonDone}
            onToggleComplete={() => setCompleted(toggleCompleted(lvl.lesson.id))}
            prev={prev ? { title: `Niveau ${prev.code} — ${prev.name}`, to: `/fle/${prev.code.toLowerCase()}` } : null}
            next={next ? { title: `Niveau ${next.code} — ${next.name}`, to: `/fle/${next.code.toLowerCase()}` } : null}
          />
        </div>
      </div>

      {vocabOpen && <VocabModal lvl={lvl} onClose={() => setVocabOpen(false)} />}
      {grammarOpen && grammarLessons[grammarOpen] && (
        <GrammarModal lesson={grammarLessons[grammarOpen]} onClose={() => setGrammarOpen(null)} />
      )}
    </div>
  );
}

/* ————— Fenêtre Vocabulaire : liste par thèmes + test de niveau ————— */
function VocabModal({ lvl, onClose }: { lvl: (typeof fleLevels)[number]; onClose: () => void }) {
  const vocab = vocabulaire[lvl.code];
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [tryN, setTryN] = useState(0);

  if (!vocab) return null;

  const q = query.trim().toLowerCase();
  const themes = vocab.themes
    .map((t) => ({ ...t, words: t.words.filter((w) => !q || w.toLowerCase().includes(q)) }))
    .filter((t) => t.words.length > 0);
  const shown = themes.reduce((n, t) => n + t.words.length, 0);
  const totalWords = vocab.themes.reduce((n, t) => n + t.words.length, 0);
  const answered = Object.keys(results).length;
  const score = Object.values(results).filter(Boolean).length;
  const quizDone = answered === vocab.quiz.length && vocab.quiz.length > 0;

  return (
    <Modal title={`Vocabulaire ${lvl.code}`} kicker={`${vocab.total} mots · ${lvl.name}`} onClose={onClose} wide>
      {!vocab.complete && (
        <p className="mb-4 rounded-lg border border-or/50 bg-or-tint px-4 py-2.5 text-[13.5px] font-semibold text-or-deep">
          Aperçu de la liste {lvl.code} — la liste complète de {vocab.total} mots s’enrichit régulièrement.
        </p>
      )}

      {/* Filtre de mots */}
      <div className="relative">
        <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 w-5 h-5 -translate-y-1/2 text-ink-faint" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filtrer les mots (ex. : pain, lundi, rouge…)"
          aria-label="Filtrer le vocabulaire"
          className="w-full rounded-lg border border-mist bg-paper py-3 pl-11 pr-4 text-[15px] outline-none transition-colors focus:border-bleu"
        />
      </div>
      <p className="mt-2 text-[12.5px] font-bold text-ink-faint" role="status">
        {shown} mot{shown > 1 ? 's' : ''} affiché{shown > 1 ? 's' : ''} · {totalWords} mots dans la liste {lvl.code}
      </p>

      {/* Thèmes et mots */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {themes.map((t, i) => (
          <div key={`${i}-${t.theme}`} className="rounded-xl border border-mist bg-paper/60 p-4">
            <p className="flex items-center justify-between gap-2 font-display text-[15.5px] font-bold text-ink">
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-bleu text-[11px] font-black text-card">{i + 1}</span>
                {t.theme}
              </span>
              <span className="shrink-0 text-[11.5px] font-black text-ink-faint">{t.words.length} mots</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.words.map((w, wi) => (
                <span
                  key={`${w}-${wi}`}
                  className="rounded-lg border border-mist bg-card px-2.5 py-1 text-[13.5px] font-medium text-ink-soft transition-colors hover:border-bleu/50 hover:text-bleu-deep"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {themes.length === 0 && (
        <p className="mt-6 rounded-lg border-2 border-dashed border-mist bg-paper px-4 py-8 text-center text-sm font-semibold text-ink-faint">
          Aucun mot ne correspond à « {query} ».
        </p>
      )}

      {/* Test de vocabulaire */}
      {vocab.quiz.length > 0 ? (
        <div className="mt-10 border-t border-mist pt-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-or-tint text-or-deep">
              <Feather className="w-6 h-6" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Testez votre vocabulaire</h3>
              <p className="text-[14px] text-ink-soft">Un mini-test pour vérifier votre niveau {lvl.code}. Validez chaque réponse pour voir le corrigé.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-5">
            {vocab.quiz.map((exo, i) => (
              <ExerciseCard key={`${exo.id}-${tryN}`} exo={exo} index={i} onResult={(id, ok) => setResults((r) => ({ ...r, [id]: ok }))} />
            ))}
          </div>
          {answered > 0 && (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-dashed border-bleu/40 bg-bleu-tint/40 px-5 py-4" role="status">
              <div>
                <p className="font-display text-xl font-black text-bleu-deep">
                  Score : {score} / {vocab.quiz.length}
                </p>
                {quizDone && (
                  <p className="mt-0.5 text-[13.5px] font-semibold text-ink-soft">
                    {score === vocab.quiz.length
                      ? `Excellent ! Votre vocabulaire ${lvl.code} est solide — passez au niveau suivant.`
                      : score >= vocab.quiz.length / 2
                        ? `Bien ! Révisez les thèmes ci-dessus pour consolider votre niveau ${lvl.code}.`
                        : 'Relisez la liste des mots puis recommencez le test.'}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setResults({});
                  setTryN((n) => n + 1);
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-bleu px-4 py-2 text-sm font-bold text-bleu-deep transition-all hover:bg-bleu hover:text-card"
              >
                <IconRefresh className="w-4 h-4" /> Recommencer le test
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="mt-8 rounded-lg border border-mist bg-paper px-4 py-3 text-sm font-semibold text-ink-soft">
          Le test de vocabulaire du niveau {lvl.code} arrive bientôt.
        </p>
      )}
    </Modal>
  );
}

/* ————— Fenêtre Leçon de grammaire : Observation → Analyse → Règle → Exercices ————— */
function GrammarStepBadge({ n, label, tone }: { n: string; label: string; tone: 'bleu' | 'or' | 'rouge' | 'navy' }) {
  const tones = {
    bleu: 'bg-bleu text-card',
    or: 'bg-or text-navy',
    rouge: 'bg-rouge text-card',
    navy: 'bg-navy text-card',
  };
  return (
    <div className="flex items-center gap-2.5">
      <span className={`grid h-8 w-8 place-items-center rounded-lg font-display font-bold ${tones[tone]}`}>{n}</span>
      <h3 className="font-display text-lg font-bold text-ink">{label}</h3>
    </div>
  );
}

function GrammarModal({ lesson, onClose }: { lesson: GrammarLesson; onClose: () => void }) {
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [tryN, setTryN] = useState(0);

  const answered = Object.keys(results).length;
  const score = Object.values(results).filter(Boolean).length;
  const total = lesson.exercices.length;
  const quizDone = answered === total && total > 0;

  return (
    <Modal title={lesson.title} kicker={`Grammaire · Niveau ${lesson.level}`} onClose={onClose} wide>
      {/* 1 · Observation */}
      <section className="space-y-2.5">
        <GrammarStepBadge n="1" label="Observation" tone="bleu" />
        <p className="text-[13.5px] text-ink-faint">Lisez attentivement ces phrases et repérez le point commun.</p>
        <figure className="bg-seyes rounded-xl border border-mist bg-card px-5 py-4 shadow-fiche">
          <ul className="grid gap-1">
            {lesson.observation.map((o, i) => (
              <li key={i} className="font-display text-[15px] italic leading-relaxed text-ink">
                {o}
              </li>
            ))}
          </ul>
        </figure>
      </section>

      {/* 2 · Analyse */}
      <section className="mt-7 space-y-3">
        <GrammarStepBadge n="2" label="Analyse" tone="or" />
        <div className="space-y-2.5">
          {lesson.analyse.map((a, i) => (
            <div key={i} className="rounded-xl border border-mist bg-paper/60 px-4 py-3">
              <p className="flex items-center gap-2 font-bold text-ink">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-or-tint text-[11px] font-black text-or-deep">{String.fromCharCode(97 + i)}</span>
                {a.point}
              </p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · Règle */}
      <section className="mt-7 space-y-2.5">
        <GrammarStepBadge n="3" label="Règle" tone="rouge" />
        <div className="relative overflow-hidden rounded-xl bg-navy p-5 text-card shadow-lift">
          <span className="absolute -right-3 -top-5 select-none font-display text-[6rem] font-black text-navy-3" aria-hidden="true">
            §
          </span>
          <ul className="relative grid gap-2.5">
            {lesson.regle.map((r, i) => (
              <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-or" aria-hidden="true" />
                <span className="text-mist">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Exercices */}
      <section className="mt-7 space-y-4">
        <GrammarStepBadge n="4" label="Exercices" tone="navy" />
        <p className="text-[13.5px] text-ink-faint">Appliquez la règle : validez chaque réponse pour voir le corrigé expliqué.</p>
        <div className="grid gap-4">
          {lesson.exercices.map((exo, i) => (
            <ExerciseCard key={`${exo.id}-${tryN}`} exo={exo} index={i} onResult={(id, ok) => setResults((r) => ({ ...r, [id]: ok }))} />
          ))}
        </div>
        {answered > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-dashed border-bleu/40 bg-bleu-tint/40 px-5 py-4" role="status">
            <div>
              <p className="font-display text-xl font-black text-bleu-deep">
                Score : {score} / {total}
              </p>
              {quizDone && (
                <p className="mt-0.5 text-[13.5px] font-semibold text-ink-soft">
                  {score === total
                    ? 'Parfait ! La règle est maîtrisée.'
                    : score >= total / 2
                      ? 'Bien ! Relisez la règle pour consolider.'
                      : 'Relisez l’analyse et la règle, puis recommencez.'}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setResults({});
                setTryN((n) => n + 1);
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-bleu px-4 py-2 text-sm font-bold text-bleu-deep transition-all hover:bg-bleu hover:text-card"
            >
              <IconRefresh className="w-4 h-4" /> Recommencer
            </button>
          </div>
        )}
      </section>

      {/* À retenir */}
      <section className="mt-7 space-y-2.5">
        <GrammarStepBadge n="§" label="À retenir" tone="rouge" />
        <div className="rounded-xl border border-or/50 bg-or-tint/70 p-5">
          <ul className="grid gap-2">
            {(((lesson as unknown) as Record<string, string[]>)['\u0061\u0072\u0065\u0074\u0065\u006e\u0069\u0072'] ?? []).map((s, i) => (
              <li key={i} className="flex gap-2.5 text-[14.5px] font-medium leading-relaxed text-ink">
                <IconCheck className="mt-1 w-4 h-4 shrink-0 text-or-deep" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Modal>
  );
}
