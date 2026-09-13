import { useState } from 'react';
import { deuxiemeBacBookUrl, voltaireBio, chapitresCandide, themesCandide, leconsSubordonnees, dissertation } from '../data/deuxiemeBac';
import { downloadText } from '../lib/config';
import { Reveal, SectionHeading, Breadcrumbs, Modal } from '../components/ui';
import { IconChevron, IconDownload, IconBook, IconPen } from '../components/Icons';

export function DeuxiemeBac() {
  const [openChapitre, setOpenChapitre] = useState<number | null>(null);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [leconModal, setLeconModal] = useState<string | null>(null);
  const [dissertationModal, setDissertationModal] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: '2ème année du Bac' }]} />

      {/* En-tête */}
      <div className="mt-6 text-center">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-rouge">Français — 2ème année du Baccalauréat</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-ink">Candide ou l'Optimisme</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Étude du conte philosophique de Voltaire : biographie, résumés des chapitres, thèmes, langue et dissertation.
          </p>

          {/* Bouton livre de l'élève */}
          <a
            href={deuxiemeBacBookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2.5 rounded-lg bg-rouge px-6 py-3.5 font-bold text-card shadow-lift transition-all hover:bg-rouge-deep hover:-translate-y-0.5"
          >
            <IconDownload className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
            Télécharger le livre de l'élève
          </a>
        </Reveal>
      </div>

      {/* Biographie de Voltaire */}
      <section className="mt-16">
        <SectionHeading kicker="L'auteur" title="Voltaire (1694–1778)" description="François-Marie Arouet, dit Voltaire, figure majeure des Lumières françaises." />
        <Reveal delay={100}>
          <article className="mt-8 grid gap-6 rounded-xl border border-mist bg-card p-6 shadow-fiche sm:grid-cols-[200px_1fr] sm:p-8">
            <figure className="mx-auto sm:mx-0">
              <img
                src={voltaireBio.portrait}
                alt={voltaireBio.portraitAlt}
                loading="lazy"
                className="w-48 rounded-xl border-4 border-navy/10 bg-gradient-to-br from-bleu-tint to-or-tint object-cover shadow-fiche sm:w-full"
              />
              <figcaption className="mt-2 text-center font-display text-[13px] italic text-ink-faint">
                {voltaireBio.fullName}, {voltaireBio.dates}
              </figcaption>
            </figure>
            <div className="space-y-4">
              <p className="text-[15.5px] leading-relaxed text-ink-soft">{voltaireBio.text}</p>
              <div className="rounded-xl border border-mist bg-paper/70 p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Œuvres principales</p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {voltaireBio.oeuvres.map((o) => (
                    <li key={o} className="flex gap-2 text-[14px] font-semibold text-ink">
                      <IconPen className="mt-1 w-4 h-4 shrink-0 text-or" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Chapitres */}
      <section className="mt-16">
        <SectionHeading kicker="Le conte" title="Les 30 chapitres de Candide" description="Résumés des chapitres du conte philosophique." />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {chapitresCandide.map((chap) => (
            <Reveal key={chap.num} delay={(chap.num % 3) * 60}>
              <button
                type="button"
                onClick={() => setOpenChapitre(chap.num)}
                className="group flex w-full items-center gap-4 rounded-xl border border-mist bg-card px-4 py-3 text-left shadow-fiche transition-all hover:border-bleu/50 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-bleu-tint font-display font-black text-bleu">
                  {chap.num}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-bold text-ink group-hover:text-bleu-deep line-clamp-2">{chap.title}</span>
                </span>
                <IconChevron className="w-5 h-5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Thèmes */}
      <section className="mt-16">
        <SectionHeading kicker="Analyse" title="Les thèmes de Candide" description="Les grands thèmes abordés dans le conte philosophique." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themesCandide.map((theme, i) => (
            <Reveal key={theme.title} delay={i * 60}>
              <button
                type="button"
                onClick={() => setOpenTheme(i)}
                className="group flex h-full w-full flex-col rounded-xl border border-mist bg-card p-5 text-left shadow-fiche transition-all hover:border-rouge/50 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="text-3xl">{theme.icon}</span>
                <h3 className="mt-3 font-display text-[17px] font-bold leading-tight text-ink group-hover:text-rouge-deep">{theme.title}</h3>
                <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-ink-soft">{theme.description}</p>
                <span className="mt-auto pt-3 text-[12px] font-bold uppercase tracking-wider text-ink-faint transition-colors group-hover:text-rouge">
                  En savoir plus →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Langue : les subordonnées */}
      <section className="mt-16">
        <SectionHeading
          kicker="Langue"
          title="Les propositions subordonnées"
          description="Analyse approfondie des quatre types de propositions subordonnées : relative, complétive, interrogative indirecte et circonstancielle."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {leconsSubordonnees.map((lecon, i) => (
            <Reveal key={lecon.id} delay={i * 80}>
              <button
                type="button"
                onClick={() => setLeconModal(lecon.id)}
                className="group flex w-full items-center gap-4 rounded-xl border border-mist bg-card px-5 py-4 text-left shadow-fiche transition-all hover:border-bleu/50 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-bleu-tint font-display font-black text-bleu">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-ink group-hover:text-bleu-deep">{lecon.title}</span>
                  <span className="mt-0.5 block text-[12.5px] text-ink-faint">Nature, fonction, exemples et exercices</span>
                </span>
                <IconChevron className="w-5 h-5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dissertation */}
      <section className="mt-16">
        <SectionHeading kicker="Production écrite" title="Sujet de dissertation" description="Un sujet de dissertation sur Candide avec un exemple développé." />
        <Reveal delay={100}>
          <article className="mt-8 flex flex-col gap-6 rounded-xl border border-mist bg-navy p-7 text-mist shadow-lift sm:flex-row sm:items-center sm:p-8">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-or text-navy">
              <IconPen className="w-9 h-9" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-card">Dissertation sur Candide</h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-mist/75">
                Sujet : « Candide ou l'Optimisme » de Voltaire est-il un simple conte divertissant ou une œuvre philosophique engagée ?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setDissertationModal(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-mist/40 px-5 py-3 text-sm font-bold text-card transition-all hover:border-or hover:text-or"
              >
                Voir l'exemple
              </button>
              <button
                type="button"
                onClick={() => {
                  const content = `SUJET DE DISSERTATION\n\n${dissertation.sujet}\n\nINTRODUCTION\n\n${dissertation.introduction.amorce}\n\n${dissertation.introduction.opinions}\n\n${dissertation.introduction.problematique}\n\nTHÈSE\n\n${dissertation.these}\n\nARGUMENTS\n\n${dissertation.arguments.map((a, i) => `${i + 1}. ${a.titre}\n\nExplication : ${a.explication}\n\nRaisonnement : ${a.raisonnement}\n\nExemple : ${a.exemple}\n\nConclusion : ${a.conclusion}\n\n`).join('\n')}\nCONCLUSION\n\n${dissertation.conclusion}`;
                  downloadText('dissertation-candide.txt', content);
                }}
                className="group inline-flex items-center gap-2 rounded-lg bg-or px-5 py-3 text-sm font-bold text-navy transition-all hover:bg-or-deep hover:text-card"
              >
                <IconDownload className="w-4 h-4 transition-transform group-hover:translate-y-0.5" /> Télécharger
              </button>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Modales */}
      {openChapitre !== null && (
        <Modal
          title={`Chapitre ${openChapitre}`}
          kicker={chapitresCandide[openChapitre - 1].title}
          onClose={() => setOpenChapitre(null)}
        >
          <div className="space-y-4">
            <figure className="rounded-xl border-l-4 border-bleu bg-bleu-tint/60 px-5 py-4">
              <figcaption className="text-[11px] font-black uppercase tracking-[0.16em] text-bleu-deep">Résumé du chapitre</figcaption>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink">{chapitresCandide[openChapitre - 1].summary}</p>
            </figure>
          </div>
        </Modal>
      )}

      {openTheme !== null && (
        <Modal
          title={themesCandide[openTheme].title}
          kicker="Thème de Candide"
          onClose={() => setOpenTheme(null)}
        >
          <div className="space-y-5">
            <div className="rounded-xl border-l-4 border-rouge bg-rouge-tint/60 px-5 py-4">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Description</p>
              <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink">{themesCandide[openTheme].description}</p>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-bleu">Exemples dans le conte</p>
              <ul className="mt-2 grid gap-2">
                {themesCandide[openTheme].exemples.map((e, i) => (
                  <li key={i} className="flex gap-2.5 rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                    <span className="text-rouge">•</span> {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}

      {leconModal && (
        <LeconSubordonneeModal lecon={leconsSubordonnees.find((l) => l.id === leconModal)!} onClose={() => setLeconModal(null)} />
      )}

      {dissertationModal && (
        <Modal title="Exemple de dissertation" kicker="Candide ou l'Optimisme" onClose={() => setDissertationModal(false)} wide>
          <div className="space-y-6">
            <div className="rounded-xl border-l-4 border-rouge bg-rouge-tint/60 px-5 py-4">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Sujet</p>
              <p className="mt-1.5 font-display text-[15.5px] italic leading-relaxed text-ink">{dissertation.sujet}</p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink">Introduction</h3>
              <div className="mt-3 space-y-2">
                <p className="rounded-lg border border-mist bg-paper px-4 py-3 text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="font-bold text-bleu-deep">Amorce : </span>
                  {dissertation.introduction.amorce}
                </p>
                <p className="rounded-lg border border-mist bg-paper px-4 py-3 text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="font-bold text-bleu-deep">Opinions : </span>
                  {dissertation.introduction.opinions}
                </p>
                <p className="rounded-lg border border-mist bg-paper px-4 py-3 text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="font-bold text-bleu-deep">Problématique : </span>
                  {dissertation.introduction.problematique}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink">Thèse</h3>
              <p className="mt-2 rounded-lg border border-or/50 bg-or-tint/60 px-4 py-3 text-[14.5px] leading-relaxed text-ink">
                {dissertation.these}
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink">Arguments</h3>
              <div className="mt-3 space-y-4">
                {dissertation.arguments.map((arg, i) => (
                  <div key={i} className="space-y-2">
                    <p className="rounded-lg border-l-4 border-bleu bg-bleu-tint/50 px-4 py-3 font-bold text-ink">
                      {arg.titre}
                    </p>
                    <p className="rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14px] leading-relaxed text-ink-soft">
                      <span className="font-bold text-ink">Explication : </span>
                      {arg.explication}
                    </p>
                    <p className="rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14px] leading-relaxed text-ink-soft">
                      <span className="font-bold text-ink">Raisonnement : </span>
                      {arg.raisonnement}
                    </p>
                    <p className="rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14px] leading-relaxed text-ink-soft">
                      <span className="font-bold text-ink">Exemple : </span>
                      {arg.exemple}
                    </p>
                    <p className="rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14px] leading-relaxed text-ink-soft">
                      <span className="font-bold text-ink">Conclusion partielle : </span>
                      {arg.conclusion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink">Conclusion</h3>
              <p className="mt-2 rounded-lg border-l-4 border-green-700 bg-green-50 px-4 py-3 text-[14.5px] leading-relaxed text-ink">
                {dissertation.conclusion}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* Modal pour une leçon de subordonnée */
function LeconSubordonneeModal({ lecon, onClose }: { lecon: typeof leconsSubordonnees[number]; onClose: () => void }) {
  const [choices, setChoices] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

  return (
    <Modal title={lecon.title} kicker="Langue · Les subordonnées" onClose={onClose} wide>
      <div className="space-y-6">
        {/* Définition */}
        <div className="rounded-xl border-l-4 border-bleu bg-bleu-tint/60 px-5 py-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-bleu-deep">Définition</p>
          <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink">{lecon.definition}</p>
        </div>

        {/* Nature */}
        <div className="rounded-xl border-l-4 border-or bg-or-tint/60 px-5 py-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-or-deep">Nature</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink">{lecon.nature}</p>
        </div>

        {/* Fonction */}
        <div className="rounded-xl border-l-4 border-rouge bg-rouge-tint/60 px-5 py-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge-deep">Fonction</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink">{lecon.fonction}</p>
        </div>

        {/* Outils */}
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-ink-faint">Outils d'introduction</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {lecon.outils.map((o, i) => (
              <code key={i} className="rounded-md border border-bleu/30 bg-bleu-tint/70 px-3 py-1.5 text-[13px] font-bold text-bleu-deep">
                {o}
              </code>
            ))}
          </div>
        </div>

        {/* Exemples */}
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-ink-faint">Exemples</p>
          <ul className="mt-2 grid gap-2">
            {lecon.exemples.map((e, i) => (
              <li key={i} className="flex gap-2.5 rounded-lg border border-mist bg-paper px-4 py-2.5 text-[14.5px] italic leading-relaxed text-ink-soft">
                <span className="text-bleu">•</span> {e}
              </li>
            ))}
          </ul>
        </div>

        {/* Exercices */}
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rouge">Exercices</p>
          <div className="mt-3 grid gap-4">
            {lecon.exercices.map((exo, i) => (
              <div key={i} className="rounded-xl border border-mist bg-card p-4 shadow-fiche">
                <p className="font-semibold text-ink">{exo.question}</p>
                <div className="mt-3 grid gap-2">
                  {exo.options.map((opt, j) => {
                    const chosen = choices[i] === j;
                    const isSub = submitted[i];
                    const good = j === exo.answer;
                    return (
                      <button
                        key={j}
                        type="button"
                        disabled={isSub}
                        onClick={() => setChoices((c) => ({ ...c, [i]: j }))}
                        className={`rounded-lg border px-4 py-2.5 text-left text-[14px] font-semibold transition-all
                          ${isSub && good ? 'border-green-600/60 bg-green-50 text-green-900' : ''}
                          ${isSub && chosen && !good ? 'border-rouge/60 bg-rouge-tint text-rouge-deep' : ''}
                          ${!isSub && chosen ? 'border-bleu bg-bleu-tint text-bleu-deep' : ''}
                          ${!isSub && !chosen ? 'border-mist hover:border-bleu/50 hover:bg-bleu-tint/40' : ''}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {!submitted[i] ? (
                  <button
                    type="button"
                    disabled={choices[i] === undefined}
                    onClick={() => setSubmitted((s) => ({ ...s, [i]: true }))}
                    className="mt-3 rounded-lg bg-bleu px-4 py-2 text-[13px] font-bold text-card transition-all hover:bg-bleu-deep disabled:opacity-40"
                  >
                    Valider
                  </button>
                ) : (
                  <p className={`mt-3 rounded-lg px-4 py-2.5 text-[13.5px] font-semibold leading-relaxed ${choices[i] === exo.answer ? 'bg-green-50 text-green-800' : 'bg-rouge-tint text-rouge-deep'}`}>
                    {choices[i] === exo.answer ? 'Bonne réponse ! ' : `Non — c'était « ${exo.options[exo.answer]} ». `}
                    <span className="font-normal">{exo.explain}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
