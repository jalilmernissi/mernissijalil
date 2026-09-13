import { useEffect, useState } from 'react';
import { troncCommun, flatLessons, fichesJeRetiens } from '../data/troncCommun';
import { getCompleted } from '../lib/config';
import { Reveal, SectionHeading, Breadcrumbs } from '../components/ui';
import { IconBook, IconCheck, IconChevron, IconClock, IconDownload, Feather } from '../components/Icons';

export function TroncCommun() {
  const [openModules, setOpenModules] = useState<Set<string>>(() => new Set([troncCommun.modules[0].id]));
  const [openSeqs, setOpenSeqs] = useState<Set<string>>(() => new Set([`${troncCommun.modules[0].id}:${troncCommun.modules[0].sequences[0].id}`]));
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCompleted(getCompleted());
  }, []);

  const doneCount = flatLessons.filter((l) => completed.has(l.lessonId)).length;

  const toggleModule = (id: string) =>
    setOpenModules((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  const toggleSeq = (key: string) =>
    setOpenSeqs((s) => {
      const n = new Set(s);
      if (n.has(key)) n.delete(key);
      else n.add(key);
      return n;
    });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Tronc Commun' }]} />

      {/* En-tête */}
      <div className="mt-6 text-center">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-rouge">Français — Lycée</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-ink">Tronc Commun</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{troncCommun.tagline} : des cours complets, des exercices corrigés et une méthode pas à pas.</p>

          {/* Bouton livre de l’élève (adresse fournie par le webmaster) */}
          {troncCommun.bookUrl && (
            <a
              href={troncCommun.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-lg bg-rouge px-6 py-3.5 font-bold text-card shadow-lift transition-all hover:bg-rouge-deep hover:-translate-y-0.5"
            >
              <IconDownload className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
              Télécharger le livre de l’élève
            </a>
          )}
        </Reveal>
      </div>

      {/* Progression */}
      <Reveal delay={120}>
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-mist bg-card p-5 shadow-fiche">
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="text-ink">
              Progression : {doneCount} / {flatLessons.length} leçons
            </span>
            <span className="text-bleu-deep">{Math.round((doneCount / flatLessons.length) * 100)} %</span>
          </div>
          <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-mist" role="progressbar" aria-valuenow={doneCount} aria-valuemin={0} aria-valuemax={flatLessons.length}>
            <div className="progress-fill h-full rounded-full bg-gradient-to-r from-bleu to-or" style={{ width: `${(doneCount / flatLessons.length) * 100}%` }} />
          </div>
        </div>
      </Reveal>

      {/* Modules */}
      <div className="mt-14 space-y-8">
        {troncCommun.modules.map((mod, mi) => {
          const modOpen = openModules.has(mod.id);
          const lessonsInModule = mod.sequences.flatMap((s) => s.lessons);
          const doneInModule = lessonsInModule.filter((l) => completed.has(l.id)).length;
          return (
            <Reveal key={mod.id} delay={mi * 100}>
              <section className="overflow-hidden rounded-xl border border-mist bg-card shadow-fiche">
                <button type="button" onClick={() => toggleModule(mod.id)} aria-expanded={modOpen} className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl font-display text-2xl font-black transition-colors ${modOpen ? 'bg-bleu text-card' : 'bg-bleu-tint text-bleu'}`}>
                    {mi + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl sm:text-2xl font-bold text-ink">{mod.title}</span>
                    <span className="mt-1 block text-[14px] text-ink-soft">{mod.description}</span>
                    <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-paper border border-mist px-3 py-1 text-[12px] font-bold text-ink-faint">
                      <IconBook className="w-4 h-4 text-bleu" /> {lessonsInModule.length} leçons · {doneInModule} terminée{doneInModule > 1 ? 's' : ''}
                    </span>
                  </span>
                  <IconChevron className={`w-6 h-6 shrink-0 text-ink-faint transition-transform duration-300 ${modOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`acc-body ${modOpen ? 'open' : ''}`}>
                  <div>
                    <div className="space-y-5 border-t border-mist bg-paper/60 px-6 py-6 sm:px-8">
                      {mod.sequences.map((seq) => {
                        const key = `${mod.id}:${seq.id}`;
                        const seqOpen = openSeqs.has(key);
                        return (
                          <div key={seq.id} className="rounded-xl border border-mist bg-card shadow-fiche">
                            <button type="button" onClick={() => toggleSeq(key)} aria-expanded={seqOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                              <span>
                                <span className="block font-display text-[17px] font-bold text-ink">{seq.title}</span>
                                {seq.subtitle && <span className="block text-[13px] text-ink-faint">{seq.subtitle}</span>}
                              </span>
                              <IconChevron className={`w-5 h-5 shrink-0 text-ink-faint transition-transform duration-300 ${seqOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`acc-body ${seqOpen ? 'open' : ''}`}>
                              <div>
                                <ul className="grid gap-2 border-t border-mist px-5 py-4">
                                  {seq.lessons.map((lesson) => {
                                    const done = completed.has(lesson.id);
                                    return (
                                      <li key={lesson.id}>
                                        <a
                                          href={`#/tronc-commun/${mod.id}/${seq.id}/${lesson.id}`}
                                          className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-all hover:border-bleu/40 hover:bg-bleu-tint/50"
                                        >
                                          <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[11px] font-bold ${done ? 'border-green-600 bg-green-600 text-card' : 'border-ink-faint/40 text-ink-faint'}`}>
                                            {done ? <IconCheck className="w-3.5 h-3.5" /> : '›'}
                                          </span>
                                          <span className="flex-1 font-semibold text-ink-soft transition-colors group-hover:text-bleu-deep">{lesson.title}</span>
                                          <span className="hidden items-center gap-1 text-[12px] font-bold text-ink-faint sm:inline-flex">
                                            <IconClock className="w-3.5 h-3.5" /> {lesson.minutes} min
                                          </span>
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Fiches « Je retiens » du module II */}
                      {mod.id === 'module-2' && (
                        <div className="rounded-xl border border-or/40 bg-or-tint/50 p-6">
                          <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                            <Feather className="w-5 h-5 text-or-deep" /> Je retiens — les fiches synthèse du module
                          </p>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {fichesJeRetiens.map((f) => (
                              <div key={f.title} className="rounded-lg border border-or/40 bg-card p-4 shadow-fiche">
                                <p className="font-bold text-ink">{f.title}</p>
                                <ul className="mt-2 grid gap-1">
                                  {f.points.map((p) => (
                                    <li key={p} className="flex gap-2 text-[13px] leading-relaxed text-ink-soft">
                                      <span className="mt-[8px] h-1 w-1 shrink-0 rotate-45 bg-or-deep" aria-hidden="true" />
                                      {p}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      {/* Lien vers le Bac */}
      <Reveal>
        <div className="mt-16 rounded-xl border border-mist bg-card p-6 text-center shadow-fiche sm:p-8">
          <SectionHeading center kicker="Étape suivante" title="Et après le Tronc Commun ?" description="Retrouvez les œuvres intégrales, la langue, la rhétorique et les examens de la 1ère année du Bac." />
          <a href="#/bac" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-bleu px-6 py-3 font-bold text-card shadow-fiche transition-all hover:bg-bleu-deep hover:-translate-y-0.5">
            Voir la page 1ère Bac
          </a>
        </div>
      </Reveal>
    </div>
  );
}
