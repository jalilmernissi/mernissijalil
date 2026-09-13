import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  bacBookUrl,
  oeuvres,
  langueLessons,
  figures,
  productionEcrite,
  examens,
  essaiParts,
  essaiExemple,
  essaiElements,
  type Oeuvre,
  type EssaiPartId,
} from '../data/bac';
import type { Lesson } from '../data/types';
import { downloadText } from '../lib/config';
import { Reveal, SectionHeading, Breadcrumbs, Modal } from '../components/ui';
import { LessonView } from '../components/LessonView';
import { IconChevron, IconClock, IconDownload, IconEye, IconPen, IconBook, Feather } from '../components/Icons';

export function Bac() {
  const [openOeuvre, setOpenOeuvre] = useState<string | null>(oeuvres[0].id);
  const [chapterModal, setChapterModal] = useState<{ oeuvre: Oeuvre; num: string; title: string; summary: string } | null>(null);
  const [langueModal, setLangueModal] = useState<Lesson | null>(null);
  const [figureModal, setFigureModal] = useState<(typeof figures)[number] | null>(null);
  const [examModal, setExamModal] = useState<(typeof examens)[number] | null>(null);
  const [bioModal, setBioModal] = useState<Oeuvre | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: '1ère année du Bac' }]} />

      <div className="mt-6 text-center">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-rouge">Français — 1ère année du Baccalauréat</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-ink">1ère année du Bac</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Œuvres intégrales avec résumés, langue, rhétorique, production écrite et préparation aux examens.
          </p>
          <a
            href={bacBookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2.5 rounded-lg bg-rouge px-6 py-3.5 font-bold text-card shadow-lift transition-all hover:bg-rouge-deep hover:-translate-y-0.5"
          >
            <IconDownload className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
            Télécharger le livre de l’élève
          </a>
        </Reveal>
      </div>

      {/* Sous-navigation */}
      <Reveal delay={120}>
        <nav aria-label="Sections de la page" className="sticky top-[72px] z-30 mt-10 -mx-4 border-y border-mist bg-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-3">
          <ul className="flex gap-2 overflow-x-auto">
            {[
              { href: '#oeuvres', label: 'Œuvres étudiées' },
              { href: '#langue', label: 'Langue' },
              { href: '#rhetorique', label: 'Rhétorique' },
              { href: '#production-ecrite', label: 'Production écrite' },
              { href: '#examens', label: 'Examens' },
            ].map((s) => (
              <li key={s.href}>
                <a href={`#/bac${s.href}`} className="whitespace-nowrap rounded-lg border border-mist bg-card px-3.5 py-2 text-[13.5px] font-bold text-ink-soft transition-colors hover:border-bleu/50 hover:text-bleu-deep">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>

      {/* ————— ŒUVRES ————— */}
      <section id="oeuvres" className="mt-16 scroll-mt-36">
        <SectionHeading
          kicker="Module I · II · III"
          title="Les œuvres étudiées"
          description="Cliquez sur un numéro de chapitre (ou de scène) pour afficher son résumé. L’architecture permet d’ajouter d’autres œuvres du programme."
        />

        <div className="mt-10 space-y-6">
          {oeuvres.map((oeuvre, oi) => {
            const open = openOeuvre === oeuvre.id;
            return (
              <Reveal key={oeuvre.id} delay={oi * 80}>
                <article className="overflow-hidden rounded-xl border border-mist bg-card shadow-fiche">
                  <div className="flex w-full items-stretch">
                    <img
                      src={oeuvre.image}
                      alt={oeuvre.imageAlt}
                      loading="lazy"
                      className="hidden w-44 shrink-0 bg-gradient-to-br from-bleu-tint to-or-tint object-cover sm:block"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-rouge">
                          Module {['I', 'II', 'III'][oi]} · {oeuvre.genre}
                        </span>
                        <button
                          type="button"
                          onClick={() => setBioModal(oeuvre)}
                          className="group/bio inline-flex items-center gap-1.5 rounded-full border border-bleu/35 bg-bleu-tint/70 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-bleu-deep shadow-fiche transition-all hover:-translate-y-0.5 hover:border-bleu hover:bg-bleu hover:text-card"
                        >
                          <Feather className="w-3.5 h-3.5 text-or transition-transform group-hover/bio:-rotate-12" />
                          Biographie
                        </button>
                      </span>
                      <button
                        type="button"
                        onClick={() => setOpenOeuvre(open ? null : oeuvre.id)}
                        aria-expanded={open}
                        className="mt-1.5 flex w-full items-center justify-between gap-4 text-left"
                      >
                        <span className="min-w-0">
                          <span className="block font-display text-xl font-bold text-ink transition-colors hover:text-bleu-deep sm:text-2xl">« {oeuvre.title} »</span>
                          <span className="block text-[13.5px] font-bold text-ink-faint">
                            {oeuvre.author} — {oeuvre.year}
                          </span>
                          <span className="mt-2 hidden max-w-2xl text-[14px] leading-relaxed text-ink-soft md:block">{oeuvre.description}</span>
                        </span>
                        <IconChevron className={`w-6 h-6 shrink-0 text-ink-faint transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <div className={`acc-body ${open ? 'open' : ''}`}>
                    <div>
                      <div className="border-t border-mist px-5 py-6 sm:px-6">
                        <p className="text-[13px] font-black uppercase tracking-wider text-ink-faint">
                          {oeuvre.chapterLabel} — résumé de chaque partie
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {oeuvre.chapters.map((ch) => (
                            <button
                              key={ch.num}
                              type="button"
                              onClick={() => setChapterModal({ oeuvre, ...ch })}
                              className="group rounded-lg border border-mist bg-paper px-3.5 py-2.5 text-sm font-bold text-ink-soft shadow-fiche transition-all hover:border-rouge/60 hover:text-rouge-deep hover:-translate-y-0.5"
                            >
                              <span className="text-rouge group-hover:text-rouge-deep">N°</span> {ch.num}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ————— LANGUE ————— */}
      <section id="langue" className="mt-20 scroll-mt-36">
        <SectionHeading
          kicker="Grammaire · syntaxe · discours"
          title="Langue"
          description="Cinq leçons essentielles — grammaire, conjugaison, syntaxe, lexique et discours — chacune avec cours complet et exercices d’application."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {langueLessons.map((l, i) => (
            <Reveal key={l.id} delay={i * 60}>
              <button
                type="button"
                onClick={() => setLangueModal(l)}
                className="group flex w-full items-center gap-4 rounded-xl border border-mist bg-card px-5 py-4 text-left shadow-fiche transition-all hover:border-bleu/50 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-bleu-tint font-display font-black text-bleu">{i + 1}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-ink group-hover:text-bleu-deep">{l.title}</span>
                  <span className="mt-0.5 flex items-center gap-2 text-[12.5px] font-semibold text-ink-faint">
                    <IconClock className="w-3.5 h-3.5" /> {l.minutes} min · {l.exercises.length} exercices
                  </span>
                </span>
                <IconEye className="w-5 h-5 shrink-0 text-ink-faint transition-colors group-hover:text-bleu" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— RHÉTORIQUE ————— */}
      <section id="rhetorique" className="mt-20 scroll-mt-36">
        <SectionHeading
          kicker="Figures de style & procédés"
          title="Rhétorique"
          description="Chaque figure s’ouvre sur une fiche : définition, exemples littéraires et exercice d’application corrigé."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {figures.map((f, i) => (
            <Reveal key={f.id} delay={(i % 5) * 50}>
              <button
                type="button"
                onClick={() => setFigureModal(f)}
                className="group flex h-full w-full flex-col rounded-xl border border-mist bg-card px-4 py-4 text-left shadow-fiche transition-all hover:border-rouge/50 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-display text-[17px] font-bold leading-tight text-ink group-hover:text-rouge-deep">{f.name.replace(/^La |^Le |^L’/, '')}</span>
                <span className="mt-auto pt-2 text-[12px] font-bold uppercase tracking-wider text-ink-faint transition-colors group-hover:text-rouge">
                  Ouvrir la fiche →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— PRODUCTION ÉCRITE ————— */}
      <section id="production-ecrite" className="mt-20 scroll-mt-36">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Production écrite"
            title="Méthodologie de l’essai argumenté"
            description="Une méthode phrase par phrase, en trois temps. Chaque partie a sa couleur : retrouvez-la dans la méthode, dans l’exemple rédigé, puis entraînez-vous à identifier chaque élément."
          />
          <Reveal delay={140}>
            <button
              type="button"
              onClick={() => downloadText(productionEcrite.filename, productionEcrite.content)}
              className="group inline-flex items-center gap-2 self-start rounded-lg bg-or px-5 py-3 text-sm font-bold text-navy shadow-fiche transition-all hover:-translate-y-0.5 hover:bg-or-deep hover:text-card"
            >
              <IconDownload className="w-4 h-4 transition-transform group-hover:translate-y-0.5" /> Télécharger la fiche
            </button>
          </Reveal>
        </div>

        {/* Légende des couleurs */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Légende des couleurs de la méthode">
            {essaiParts.map((p) => (
              <span key={p.id} className={`inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-bold shadow-fiche ${PART_STYLES[p.id].chip}`}>
                <span className="font-display text-lg font-black">{p.numeral}</span> {p.title}
              </span>
            ))}
          </div>
        </Reveal>

        {/* La méthode en trois temps */}
        <div className="mt-8 space-y-6">
          {essaiParts.map((part, pi) => (
            <Reveal key={part.id} delay={pi * 80}>
              <article className="overflow-hidden rounded-xl border border-mist bg-card shadow-fiche">
                <header className={`flex items-center gap-4 px-6 py-4 ${PART_STYLES[part.id].header}`}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-card/15 font-display text-xl font-black">{part.numeral}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{part.title}</h3>
                    <p className={`text-[12.5px] font-semibold ${PART_STYLES[part.id].headerSub}`}>
                      {part.id === 'introduction' && '3 phrases pour ouvrir l’essai'}
                      {part.id === 'developpement' && 'La thèse, puis deux arguments construits en 4 temps'}
                      {part.id === 'conclusion' && '1 phrase pour fermer l’essai'}
                    </p>
                  </div>
                </header>
                <div className="grid gap-6 px-6 py-6">
                  {part.steps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-[15px] font-black ${PART_STYLES[part.id].stepNum}`}>
                        {step.num}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-ink">{step.name}</p>
                        <p className="mt-0.5 text-[14.5px] leading-relaxed text-ink-soft">{step.detail}</p>
                        {step.connecteurs && (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {step.connecteurs.map((c) => (
                              <code key={c} className={`rounded-md border px-2.5 py-1 text-[12.5px] font-bold ${PART_STYLES[part.id].code}`}>
                                {c}
                              </code>
                            ))}
                          </div>
                        )}
                        {step.sub && (
                          <div className={`mt-4 space-y-3.5 border-l-2 pl-4 ${PART_STYLES[part.id].subBorder}`}>
                            {step.sub.map((s) => (
                              <div key={s.num} className="flex gap-3">
                                <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md font-display text-[13px] font-black ${PART_STYLES[part.id].stepNum}`}>
                                  {s.num}
                                </span>
                                <div>
                                  <p className="text-[14.5px] font-bold text-ink">{s.name}</p>
                                  <p className="text-[13.5px] leading-relaxed text-ink-soft">{s.detail}</p>
                                  {s.connecteurs && (
                                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                                      {s.connecteurs.map((c) => (
                                        <code key={c} className={`rounded-md border px-2 py-0.5 text-[12px] font-bold ${PART_STYLES[part.id].code}`}>
                                          {c}
                                        </code>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Exemple annoté */}
        <EssaiAnnote />

        {/* Exercice d’identification */}
        <EssaiExercise />
      </section>

      {/* ————— EXAMENS ————— */}
      <section id="examens" className="mt-20 scroll-mt-36">
        <SectionHeading kicker="Sujets · corrigés" title="Préparation aux examens" description="Sujets types et contrôles par œuvre, à consulter en ligne ou à télécharger pour s’entraîner en conditions réelles." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examens.map((ex, i) => (
            <Reveal key={ex.id} delay={i * 60}>
              <article className="flex h-full flex-col rounded-xl border border-mist bg-card p-5 shadow-fiche transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-rouge-tint px-3 py-1 text-[11.5px] font-black uppercase tracking-wider text-rouge-deep">
                  <IconBook className="w-3.5 h-3.5" /> {ex.session}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">{ex.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{ex.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <button type="button" onClick={() => setExamModal(ex)} className="inline-flex items-center gap-1.5 rounded-lg border border-mist px-3.5 py-2 text-[13px] font-bold text-ink-soft transition-colors hover:border-bleu/50 hover:text-bleu-deep">
                    <IconEye className="w-4 h-4" /> Consulter
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadText(ex.filename, ex.content)}
                    className="group inline-flex items-center gap-1.5 rounded-lg bg-bleu px-3.5 py-2 text-[13px] font-bold text-card transition-colors hover:bg-bleu-deep"
                  >
                    <IconDownload className="w-4 h-4 transition-transform group-hover:translate-y-0.5" /> Télécharger
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lien vers les cours du Tronc Commun */}
      <Reveal>
        <div className="mt-20 rounded-xl border border-mist bg-card p-6 text-center shadow-fiche sm:p-8">
          <p className="font-display text-xl font-bold text-ink">Besoin de revoir les bases avant le Bac ?</p>
          <p className="mx-auto mt-2 max-w-xl text-[14.5px] text-ink-soft">Les genres littéraires, le schéma narratif et l’analyse des textes se travaillent dès le Tronc Commun.</p>
          <Link to="/tronc-commun" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-bleu px-6 py-3 font-bold text-card shadow-fiche transition-all hover:bg-bleu-deep hover:-translate-y-0.5">
            Revoir les cours du Tronc Commun <Feather className="w-4 h-4 text-or" />
          </Link>
        </div>
      </Reveal>

      {/* ————— MODALES ————— */}
      {chapterModal && (
        <Modal
          title={`${chapterModal.num} — ${chapterModal.title}`}
          kicker={`« ${chapterModal.oeuvre.title} » · ${chapterModal.oeuvre.author}`}
          onClose={() => setChapterModal(null)}
        >
          <div className="space-y-4">
            <figure className="rounded-xl border-l-4 border-rouge bg-rouge-tint/60 px-5 py-4">
              <figcaption className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Résumé du chapitre</figcaption>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink">{chapterModal.summary}</p>
            </figure>
            <img
              src={chapterModal.oeuvre.image}
              alt={chapterModal.oeuvre.imageAlt}
              loading="lazy"
              className="w-full max-h-56 rounded-lg bg-gradient-to-br from-bleu-tint to-or-tint object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="text-[13.5px] leading-relaxed text-ink-soft">
              <strong className="text-ink">À retenir :</strong> situez toujours ce passage dans le schéma de l’œuvre (situation initiale,
              péripéties, dénouement) et notez les personnages présents ainsi que leur évolution.
            </p>
          </div>
        </Modal>
      )}

      {langueModal && (
        <Modal title={langueModal.title} kicker="1ère Bac · Langue" onClose={() => setLangueModal(null)} wide>
          <LessonView lesson={langueModal} />
        </Modal>
      )}

      {figureModal && (
        <Modal title={figureModal.name} kicker="1ère Bac · Rhétorique" onClose={() => setFigureModal(null)}>
          <div className="space-y-5">
            <div className="rounded-xl border-l-4 border-rouge bg-rouge-tint/60 px-5 py-4">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Définition</p>
              <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink">{figureModal.definition}</p>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-bleu">Exemples littéraires</p>
              <ul className="mt-2 grid gap-2">
                {figureModal.examples.map((e, i) => (
                  <li key={i} className="flex gap-2.5 rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14.5px] italic leading-relaxed text-ink-soft">
                    <Feather className="mt-1 w-4 h-4 shrink-0 text-or" /> {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-mist bg-card p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-or-deep">Exercice d’application</p>
              <p className="mt-2 font-semibold text-ink">{figureModal.quiz.question}</p>
              <div className="mt-3 grid gap-2">
                {figureModal.quiz.options.map((o, i) => (
                  <span key={i} className={`rounded-lg border px-4 py-2.5 text-[14.5px] ${i === figureModal.quiz.answer ? 'border-green-600/50 bg-green-50 font-semibold text-green-900' : 'border-mist text-ink-soft'}`}>
                    {String.fromCharCode(65 + i)}. {o}
                  </span>
                ))}
              </div>
              <p className="mt-3 rounded-lg bg-bleu-tint/60 px-4 py-3 text-[14px] leading-relaxed text-ink-soft">
                <strong className="text-bleu-deep">Corrigé :</strong> {figureModal.quiz.explain}
              </p>
            </div>
          </div>
        </Modal>
      )}

      {examModal && (
        <Modal title={examModal.title} kicker={`${examModal.session} · avec barème`} onClose={() => setExamModal(null)} wide>
          <pre className="whitespace-pre-wrap rounded-xl border border-mist bg-paper p-5 font-body text-[14px] leading-relaxed text-ink-soft">{examModal.content}</pre>
          <button type="button" onClick={() => downloadText(examModal.filename, examModal.content)} className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-bleu px-5 py-2.5 text-sm font-bold text-card transition-colors hover:bg-bleu-deep">
            <IconDownload className="w-4 h-4" /> Télécharger le sujet
          </button>
        </Modal>
      )}

      {bioModal && (
        <Modal title={`${bioModal.author} (${bioModal.bio.dates})`} kicker="Biographie de l’auteur" onClose={() => setBioModal(null)}>
          <div className="space-y-4">
              <p className="text-[15.5px] leading-relaxed text-ink-soft">{bioModal.bio.text}</p>
              {bioModal.bio.oeuvresCitees.length > 0 && (
                <div className="rounded-xl border border-mist bg-paper/70 p-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Œuvres à connaître</p>
                  <ul className="mt-2 grid gap-1.5">
                    {bioModal.bio.oeuvresCitees.map((o) => (
                      <li key={o} className="flex gap-2 text-[14.5px] font-semibold text-ink">
                        <Feather className="mt-1 w-4 h-4 shrink-0 text-or" /> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ————— Couleurs des trois parties de la méthode ————— */
const PART_STYLES: Record<
  EssaiPartId,
  { chip: string; header: string; headerSub: string; stepNum: string; code: string; subBorder: string }
> = {
  introduction: {
    chip: 'bg-bleu text-card',
    header: 'bg-bleu text-card',
    headerSub: 'text-bleu-tint',
    stepNum: 'bg-bleu-tint text-bleu-deep',
    code: 'border-bleu/30 bg-bleu-tint/70 text-bleu-deep',
    subBorder: 'border-bleu/30',
  },
  developpement: {
    chip: 'bg-or text-navy',
    header: 'bg-or text-navy',
    headerSub: 'text-navy/70',
    stepNum: 'bg-or-tint text-or-deep',
    code: 'border-or/40 bg-or-tint/70 text-or-deep',
    subBorder: 'border-or/40',
  },
  conclusion: {
    chip: 'bg-green-700 text-card',
    header: 'bg-green-700 text-card',
    headerSub: 'text-green-100',
    stepNum: 'bg-green-100 text-green-800',
    code: 'border-green-300 bg-green-50 text-green-800',
    subBorder: 'border-green-500/30',
  },
};

/* ————— Couleur de chaque élément à identifier ————— */
const ELEMENT_META: Record<string, { chip: string; soft: string }> = {
  'Amener le sujet': { chip: 'bg-bleu-deep text-card', soft: 'border-bleu/50 bg-bleu-tint/50' },
  'Identifier les opinions opposées': { chip: 'bg-teal-700 text-card', soft: 'border-teal-500/50 bg-teal-50' },
  'Reformuler la problématique': { chip: 'bg-rouge text-card', soft: 'border-rouge/40 bg-rouge-tint/60' },
  'Exprimer la thèse': { chip: 'bg-purple-700 text-card', soft: 'border-purple-400/60 bg-purple-50' },
  'Premier argument': { chip: 'bg-or text-navy', soft: 'border-or/60 bg-or-tint/60' },
  'Deuxième argument': { chip: 'bg-or-deep text-card', soft: 'border-or/50 bg-or-tint/40' },
  Explication: { chip: 'bg-cyan-700 text-card', soft: 'border-cyan-500/50 bg-cyan-50' },
  Raisonnement: { chip: 'bg-emerald-800 text-card', soft: 'border-emerald-500/50 bg-emerald-50' },
  Exemple: { chip: 'bg-green-700 text-card', soft: 'border-green-500/60 bg-green-50' },
  'Conclusion partielle': { chip: 'bg-lime-700 text-card', soft: 'border-lime-500/60 bg-lime-50' },
  'Confirmer la thèse': { chip: 'bg-orange-700 text-card', soft: 'border-orange-400/60 bg-orange-50' },
};
const elementMeta = (el: string) => ELEMENT_META[el] ?? { chip: 'bg-ink text-card', soft: 'border-mist bg-paper' };

/* ————— L’exemple rédigé, annoté phrase par phrase ————— */
function EssaiAnnote() {
  const [labelsOn, setLabelsOn] = useState(true);
  const partLabel: Record<EssaiPartId, string> = {
    introduction: 'I · Introduction',
    developpement: 'II · Développement',
    conclusion: 'III · Conclusion',
  };

  return (
    <Reveal>
      <section aria-label="Exemple rédigé et annoté" className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-rouge">Exemple de production écrite</p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">L’essai annoté, phrase par phrase</h3>
            <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
              Chaque phrase est surlignée dans la couleur de son élément. Survolez une phrase pour la voir s’animer ; masquez les étiquettes
              pour vous entraîner à l’œil.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLabelsOn((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
              labelsOn ? 'border-bleu bg-bleu-tint text-bleu-deep' : 'border-mist bg-card text-ink-soft hover:border-bleu/50'
            }`}
          >
            <IconEye className="w-4 h-4" /> {labelsOn ? 'Masquer les étiquettes' : 'Afficher les étiquettes'}
          </button>
        </div>

        {/* Légende */}
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Légende des éléments">
          {essaiElements.map((el) => (
            <span key={el} className={`rounded-full px-3 py-1.5 text-[12px] font-bold shadow-fiche ${elementMeta(el).chip}`}>
              {el}
            </span>
          ))}
        </div>

        {/* Sujet */}
        <div className="mt-6 flex items-start gap-4 rounded-xl bg-navy p-5 text-card shadow-lift sm:p-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-or text-navy">
            <IconPen className="w-6 h-6" />
          </span>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-or">Sujet</p>
            <p className="mt-1 font-display text-lg italic leading-snug">{essaiExemple.sujet}</p>
          </div>
        </div>

        {/* Paragraphes annotés */}
        <div className="mt-6 space-y-5">
          {essaiExemple.paragraphes.map((para, pi) => (
            <article key={pi} className="overflow-hidden rounded-xl border border-mist bg-card shadow-fiche">
              <header className={`flex items-center gap-3 px-5 py-3 ${PART_STYLES[para[0].part].header}`}>
                <span className="rounded-md bg-card/15 px-2.5 py-1 font-display text-[13px] font-black">{partLabel[para[0].part]}</span>
                <span className={`text-[12px] font-semibold ${PART_STYLES[para[0].part].headerSub}`}>
                  {para.length} phrase{para.length > 1 ? 's' : ''}
                </span>
              </header>
              <div className="space-y-3 px-5 py-5">
                {para.map((ph, si) => {
                  const meta = elementMeta(ph.element);
                  return (
                    <p
                      key={si}
                      className={`rounded-r-lg border-l-4 px-4 py-3 text-[15px] leading-relaxed text-ink transition-transform duration-200 hover:translate-x-1 ${meta.soft}`}
                    >
                      <span className="font-display italic">{ph.text}</span>
                      {labelsOn && (
                        <span className={`ml-3 inline-block translate-y-[-1px] rounded-full px-2.5 py-1 align-middle text-[11px] font-black uppercase tracking-wide ${meta.chip}`}>
                          {ph.element}
                        </span>
                      )}
                    </p>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

/* ————— Exercice : identifier chaque élément dans le texte ————— */
const PE_QUIZ: { id: string; sentence: string; options: string[]; answer: string; explain: string }[] = [
  {
    id: 'pe-q1',
    sentence: '« La figure du maître sévère, armé de sa règle et de sa voix forte, appartient encore à la mémoire de beaucoup d’élèves marocains. »',
    options: ['Amener le sujet', 'Identifier les opinions opposées', 'Exprimer la thèse', 'Exemple'],
    answer: 'Amener le sujet',
    explain: 'Cette première phrase définit le thème et le situe dans son contexte social : c’est l’amorce de l’introduction.',
  },
  {
    id: 'pe-q2',
    sentence: '« Certains pédagogues estiment que seule une main ferme fait travailler les enfants, tandis que des parents pensent que la peur éteint le goût d’apprendre. »',
    options: ['Reformuler la problématique', 'Identifier les opinions opposées', 'Confirmer la thèse', 'Raisonnement'],
    answer: 'Identifier les opinions opposées',
    explain: '« Certains… tandis que d’autres… » : une seule phrase complexe qui présente les deux camps du débat.',
  },
  {
    id: 'pe-q3',
    sentence: '« L’autorité stricte d’un enseignant favorise-t-elle réellement l’apprentissage ? »',
    options: ['Confirmer la thèse', 'Conclusion partielle', 'Reformuler la problématique', 'Exprimer la thèse'],
    answer: 'Reformuler la problématique',
    explain: 'Une phrase interrogative qui reprend le sujet avec les mots de l’auteur : c’est la problématique.',
  },
  {
    id: 'pe-q4',
    sentence: '« À mon avis, un professeur trop strict et trop autoritaire nuit à l’apprentissage bien plus qu’il ne le sert. »',
    options: ['Exprimer la thèse', 'Confirmer la thèse', 'Premier argument', 'Raisonnement'],
    answer: 'Exprimer la thèse',
    explain: '« À mon avis » annonce l’opinion défendue dans tout l’essai : c’est la thèse.',
  },
  {
    id: 'pe-q5',
    sentence: '« D’abord, la peur bloque l’intelligence de l’élève. »',
    options: ['Explication', 'Premier argument', 'Conclusion partielle', 'Exemple'],
    answer: 'Premier argument',
    explain: 'Le connecteur « D’abord » introduit une phrase simple qui énonce la première raison : le premier argument.',
  },
  {
    id: 'pe-q6',
    sentence: '« En effet, l’apprenant qui redoute la punition consacre son énergie à se protéger au lieu de l’employer à comprendre. »',
    options: ['Raisonnement', 'Exemple', 'Explication', 'Deuxième argument'],
    answer: 'Explication',
    explain: '« En effet » développe et justifie l’argument dans une phrase complexe : c’est l’explication.',
  },
  {
    id: 'pe-q7',
    sentence: '« Certes, un climat sévère impose le silence dans la classe, mais ce silence n’est souvent qu’une obéissance passive. »',
    options: ['Raisonnement', 'Explication', 'Conclusion partielle', 'Identifier les opinions opposées'],
    answer: 'Raisonnement',
    explain: '« Certes… mais… » : une concession suivie d’une réfutation, l’une des deux formes du raisonnement.',
  },
  {
    id: 'pe-q8',
    sentence: '« Supposons que tous les professeurs gouvernent par la menace : l’école deviendra une prison. »',
    options: ['Exemple', 'Raisonnement', 'Exprimer la thèse', 'Explication'],
    answer: 'Raisonnement',
    explain: '« Supposons que… » pousse l’idée adverse jusqu’à l’absurde : c’est le raisonnement par l’absurde.',
  },
  {
    id: 'pe-q9',
    sentence: '« La sévérité produit donc de la crainte, non du savoir. »',
    options: ['Confirmer la thèse', 'Conclusion partielle', 'Deuxième argument', 'Exemple'],
    answer: 'Conclusion partielle',
    explain: '« Donc » referme le premier argument en une phrase bilan, avant de passer au suivant.',
  },
  {
    id: 'pe-q10',
    sentence: '« En définitive, vu que la peur paralyse l’esprit et que la confiance nourrit la motivation, je reste convaincu qu’un professeur ferme mais bienveillant instruit mieux qu’un maître autoritaire. »',
    options: ['Conclusion partielle', 'Reformuler la problématique', 'Confirmer la thèse', 'Exprimer la thèse'],
    answer: 'Confirmer la thèse',
    explain: 'L’unique phrase de la conclusion reprend les deux mots clés des arguments — « peur » et « confiance » — et confirme la thèse.',
  },
];

function EssaiExercise() {
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [tryN, setTryN] = useState(0);

  const answered = Object.keys(submitted).length;
  const score = PE_QUIZ.filter((q) => submitted[q.id] && choices[q.id] === q.answer).length;
  const done = answered === PE_QUIZ.length;

  return (
    <Reveal>
      <section aria-label="Exercice d’identification" className="mt-12">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-rouge text-card shadow-fiche">
            <IconPen className="w-7 h-7" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-rouge">À vous de jouer</p>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">Identifiez chaque élément dans le texte</h3>
            <p className="mt-1 max-w-2xl text-[14.5px] text-ink-soft">
              Dix phrases tirées de l’exemple : retrouvez à quel élément de la méthodologie chacune appartient.
            </p>
          </div>
        </div>

        <div key={tryN} className="mt-6 grid gap-4 lg:grid-cols-2">
          {PE_QUIZ.map((q, i) => {
            const chosen = choices[q.id];
            const isSub = submitted[q.id];
            const ok = chosen === q.answer;
            return (
              <div key={q.id} className="flex flex-col rounded-xl border border-mist bg-card p-5 shadow-fiche">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-bleu">Phrase {i + 1}</p>
                <p className="mt-2 font-display text-[14.5px] italic leading-relaxed text-ink">{q.sentence}</p>
                <div className="mt-3 grid gap-1.5">
                  {q.options.map((opt) => {
                    const isChosen = chosen === opt;
                    const good = opt === q.answer;
                    return (
                      <button
                        key={opt}
                        type="button"
                        disabled={isSub}
                        onClick={() => setChoices((c) => ({ ...c, [q.id]: opt }))}
                        aria-pressed={isChosen}
                        className={`rounded-lg border px-3.5 py-2 text-left text-[13.5px] font-semibold transition-all
                          ${isSub && good ? 'border-green-600/60 bg-green-50 text-green-900' : ''}
                          ${isSub && isChosen && !good ? 'border-rouge/60 bg-rouge-tint text-rouge-deep' : ''}
                          ${!isSub && isChosen ? 'border-bleu bg-bleu-tint text-bleu-deep' : ''}
                          ${!isSub && !isChosen ? 'border-mist hover:border-bleu/50 hover:bg-bleu-tint/40' : ''}
                          ${isSub && !good && !isChosen ? 'border-mist opacity-60' : ''}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-auto pt-3">
                  {!isSub ? (
                    <button
                      type="button"
                      disabled={!chosen}
                      onClick={() => setSubmitted((s) => ({ ...s, [q.id]: true }))}
                      className="rounded-lg bg-bleu px-4 py-2 text-[13px] font-bold text-card transition-all hover:bg-bleu-deep disabled:opacity-40"
                    >
                      Valider
                    </button>
                  ) : (
                    <p className={`rounded-lg px-3.5 py-2.5 text-[13px] font-semibold leading-relaxed ${ok ? 'bg-green-50 text-green-800' : 'bg-rouge-tint text-rouge-deep'}`}>
                      {ok ? 'Bonne réponse ! ' : `Non — c’était « ${q.answer} ». `}
                      <span className="font-normal">{q.explain}</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {answered > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-dashed border-bleu/40 bg-bleu-tint/40 px-6 py-4" role="status">
            <div>
              <p className="font-display text-xl font-black text-bleu-deep">
                Score : {score} / {PE_QUIZ.length}
              </p>
              {done && (
                <p className="mt-0.5 text-[13.5px] font-semibold text-ink-soft">
                  {score === PE_QUIZ.length
                    ? 'Excellent ! Vous savez repérer chaque élément de la méthode : à vous d’écrire.'
                    : score >= PE_QUIZ.length / 2
                      ? 'Bien ! Relisez la méthode ci-dessus pour les éléments manqués.'
                      : 'Relisez la méthode et l’exemple annoté, puis recommencez.'}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setChoices({});
                setSubmitted({});
                setTryN((n) => n + 1);
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-bleu px-4 py-2 text-sm font-bold text-bleu-deep transition-all hover:bg-bleu hover:text-card"
            >
              Recommencer l’exercice
            </button>
          </div>
        )}
      </section>
    </Reveal>
  );
}
