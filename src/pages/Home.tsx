import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Reveal, SectionHeading } from '../components/ui';
import { IconBook, IconCheck, IconFolder, IconGlobe, IconLaurel, IconSteps, IconTarget, IconPen, IconRefresh, Feather } from '../components/Icons';
import { fleLevels } from '../data/fle';
import { totalLessons } from '../data/troncCommun';

const HERO_IMG = 'https://image.qwenlm.ai/generated-images/a8b34921-e697-4c79-97fe-04bf884626a3/_result.png';

function VisitorCounter() {
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    // Vérifier immédiatement si on est dans un iframe
    const isInIframe = window.self !== window.top;
    
    // Ne charger le script que si on n'est PAS dans un iframe
    if (!isInIframe) {
      // Attendre que le DOM soit complètement chargé
      const timer = setTimeout(() => {
        try {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://counter11.optistats.ovh/private/counter.js?c=4252q1p9xpx4fb9rbqp3b7thu5wgfa91&down=async';
          script.async = true;
          document.body.appendChild(script);
          setShowCounter(true);
        } catch (error) {
          console.warn('Impossible de charger le compteur:', error);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
      <Reveal>
        <div className="flex justify-center items-center min-h-[60px]">
          <a href="https://www.compteurdevisite.com" title="compteur" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://counter11.optistats.ovh/private/compteurdevisite.php?c=4252q1p9xpx4fb9rbqp3b7thu5wgfa91" 
              style={{ border: '0' }}
              title="compteur" 
              alt="compteur de visites"
            />
          </a>
          {!showCounter && (
            <div id="sfc4252q1p9xpx4fb9rbqp3b7thu5wgfa91" style={{ display: 'none' }}></div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

const FLOATING = [
  { ch: 'é', cls: 'left-[6%] top-[18%] text-bleu/25 text-6xl', delay: '0s', rot: '-8deg' },
  { ch: 'ç', cls: 'left-[42%] top-[8%] text-rouge/20 text-5xl', delay: '1.2s', rot: '6deg' },
  { ch: 'à', cls: 'right-[8%] top-[16%] text-or/30 text-7xl', delay: '2s', rot: '10deg' },
  { ch: 'œ', cls: 'left-[12%] bottom-[16%] text-or/25 text-5xl', delay: '0.6s', rot: '-5deg' },
  { ch: 'è', cls: 'right-[16%] bottom-[10%] text-bleu/20 text-6xl', delay: '1.6s', rot: '8deg' },
];

export function Home() {
  return (
    <div>
      {/* ————— HERO façon page de cahier ————— */}
      <section className="bg-seyes relative overflow-hidden">
        {FLOATING.map((f) => (
          <span
            key={f.ch}
            className={`pointer-events-none absolute font-display font-black select-none float-accent ${f.cls}`}
            style={{ ['--float-delay' as string]: f.delay, ['--float-rot' as string]: f.rot }}
            aria-hidden="true"
          >
            {f.ch}
          </span>
        ))}
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.22em] text-rouge">
                <Feather className="w-4 h-4" /> mernissijalil.com · Plateforme éducative
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] font-black tracking-tight text-ink sm:text-6xl">
                <span className="line-mask" style={{ ['--line-delay' as string]: '80ms' }}>
                  <span>Apprenez le français.</span>
                </span>
                <span className="line-mask" style={{ ['--line-delay' as string]: '240ms' }}>
                  <span>Comprenez. Pratiquez.</span>
                </span>
                <span className="line-mask" style={{ ['--line-delay' as string]: '400ms' }}>
                  <span className="relative inline-block text-bleu">
                    Progressez.
                    <svg className="squiggle absolute -bottom-2 left-0 w-full" viewBox="0 0 300 14" fill="none" aria-hidden="true">
                      <path d="M3 9c40-6 80 4 120-2s80-4 118 2 40-2 56-4" stroke="#e8a23d" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-soft">
                Bienvenue sur <strong className="text-ink">mernissijalil.com</strong>, une plateforme éducative conçue pour aider les élèves du
                lycée et les apprenants débutants à améliorer leur français grâce à des cours clairs, progressifs et accessibles.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/tronc-commun"
                  className="rounded-lg bg-bleu px-6 py-3.5 font-bold text-card shadow-lift transition-all hover:bg-bleu-deep hover:-translate-y-0.5"
                >
                  Commencer les cours
                </Link>
                <Link
                  to="/fle"
                  className="rounded-lg border-2 border-ink/15 bg-card px-6 py-3.5 font-bold text-ink shadow-fiche transition-all hover:border-rouge/60 hover:text-rouge-deep hover:-translate-y-0.5"
                >
                  Découvrir le FLE
                </Link>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
                {[
                  { n: String(totalLessons), l: 'leçons complètes' },
                  { n: '6', l: 'niveaux CECRL' },
                  { n: '2 350', l: 'mots de vocabulaire' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-mist bg-card/80 px-4 py-3 shadow-fiche">
                    <dt className="order-2 text-[12px] font-semibold text-ink-faint">{s.l}</dt>
                    <dd className="font-display text-2xl font-black text-bleu-deep">{s.n}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Illustration façon fiche cartonnée */}
          <Reveal delay={250} className="relative mx-auto w-full max-w-[520px]">
            <div className="relative rotate-1 rounded-xl border border-mist bg-card p-3 pb-5 shadow-lift transition-transform duration-500 hover:rotate-0">
              <span className="absolute -top-3 left-10 h-7 w-24 -rotate-6 bg-or/50" aria-hidden="true" />
              <span className="absolute -top-3 right-12 h-7 w-20 rotate-3 bg-bleu/30" aria-hidden="true" />
              <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-bleu-tint via-card to-or-tint">
                <span className="pointer-events-none absolute inset-0 grid place-items-center text-bleu/20" aria-hidden="true">
                  <Feather className="h-40 w-40 -rotate-12" />
                </span>
                <img
                  src={HERO_IMG}
                  alt="Vieux livre ouvert sur un bureau en bois avec lunettes et café, vue sur une ruelle parisienne et la Tour Eiffel"
                  className="relative w-full rounded-lg"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="mt-3 text-center font-display text-sm italic text-ink-faint">Lire, écrire, comprendre — chaque jour un peu plus.</p>
              <span className="stamp absolute -right-4 -bottom-5 grid place-items-center w-24 h-24 rounded-full border-[3px] border-rouge/70 text-center font-display text-[11px] font-black uppercase leading-tight tracking-widest text-rouge/80" aria-hidden="true">
                MJ ·<br />Français<br />· 2025 ·
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— QUE SOUHAITEZ-VOUS APPRENDRE ? ————— */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          kicker="Rubriques"
          title="Que souhaitez-vous apprendre ?"
          description="Quatre portes d’entrée vers les contenus : le Tronc Commun, la 1ère année du Bac, le français langue étrangère et la bibliothèque de ressources."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Tronc Commun */}
          <Reveal className="lg:col-span-5">
            <article className="group flex h-full flex-col rounded-xl border border-mist border-t-4 border-t-bleu bg-card p-7 shadow-fiche transition-all hover:-translate-y-1.5 hover:shadow-lift">
              <span className="grid place-items-center w-14 h-14 rounded-xl bg-bleu-tint text-bleu transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <IconBook />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Tronc Commun</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">Les bases de l’étude de la langue et des genres littéraires.</p>
              <ul className="mt-4 grid gap-1.5 text-[13.5px] font-semibold text-ink-faint">
                <li>· 5 leçons sur les types de textes</li>
                <li>· 14 leçons sur « Aux champs » de Maupassant</li>
              </ul>
              <span className="mt-auto pt-6">
                <Link to="/tronc-commun" className="inline-flex items-center rounded-lg bg-bleu px-5 py-2.5 text-sm font-bold text-card shadow-fiche transition-all hover:-translate-y-0.5 hover:bg-bleu-deep">
                  Voir les cours
                </Link>
              </span>
            </article>
          </Reveal>

          {/* 1ère Bac */}
          <Reveal delay={90} className="lg:col-span-7">
            <article className="group flex h-full flex-col rounded-xl border border-mist border-t-4 border-t-rouge bg-card p-7 shadow-fiche transition-all hover:-translate-y-1.5 hover:shadow-lift">
              <span className="grid place-items-center w-14 h-14 rounded-xl bg-rouge-tint text-rouge transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <IconLaurel />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">1ère année du Bac</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Littérature, langue, analyse des textes et préparation aux examens.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Module I · « La boîte à merveilles » — Ahmed Séfrioui',
                  'Module II · « Le dernier jour d’un condamné » — Victor Hugo',
                  'Module III · « Antigone » — Jean Anouilh',
                ].map((m) => (
                  <span key={m} className="rounded-lg bg-paper border border-mist px-3 py-1.5 text-[12.5px] font-semibold text-ink-soft">
                    {m}
                  </span>
                ))}
              </div>
              <span className="mt-auto pt-6">
                <Link to="/bac" className="inline-flex items-center rounded-lg bg-rouge px-5 py-2.5 text-sm font-bold text-card shadow-fiche transition-all hover:-translate-y-0.5 hover:bg-rouge-deep">
                  Voir les cours
                </Link>
              </span>
            </article>
          </Reveal>

          {/* FLE */}
          <Reveal className="lg:col-span-7">
            <article className="group flex h-full flex-col rounded-xl border border-mist border-t-4 border-t-or bg-card p-7 shadow-fiche transition-all hover:-translate-y-1.5 hover:shadow-lift">
              <span className="grid place-items-center w-14 h-14 rounded-xl bg-or-tint text-or-deep transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <IconGlobe />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Français Langue Étrangère</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">Progressez du niveau A1 au niveau C2.</p>
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {fleLevels.map((l) => (
                  <span key={l.code} className="grid h-9 flex-1 place-items-center rounded-lg bg-paper border border-mist font-display text-sm font-black text-ink-soft transition-colors group-hover:border-or/50">
                    {l.code}
                  </span>
                ))}
              </div>
              <span className="mt-auto pt-6">
                <Link to="/fle" className="inline-flex items-center rounded-lg bg-or px-5 py-2.5 text-sm font-bold text-navy shadow-fiche transition-all hover:-translate-y-0.5 hover:bg-or-deep hover:text-card">
                  Choisir mon niveau
                </Link>
              </span>
            </article>
          </Reveal>

          {/* Ressources */}
          <Reveal delay={90} className="lg:col-span-5">
            <article className="group flex h-full flex-col rounded-xl border border-mist border-t-4 border-t-navy bg-card p-7 shadow-fiche transition-all hover:-translate-y-1.5 hover:shadow-lift">
              <span className="grid place-items-center w-14 h-14 rounded-xl bg-mist/70 text-navy transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <IconFolder />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Ressources</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Fiches, exercices, livres, livres audio, BD, méthodes et documents pédagogiques.
              </p>
              <ul className="mt-4 grid gap-1.5 text-[13.5px] font-semibold text-ink-faint">
                <li>· Filtres par niveau, matière et type</li>
                <li>· Téléchargements immédiats</li>
              </ul>
              <span className="mt-auto pt-6">
                <Link to="/ressources" className="inline-flex items-center rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-card shadow-fiche transition-all hover:-translate-y-0.5 hover:bg-navy-2">
                  Explorer
                </Link>
              </span>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ————— APPRENDRE PAR NIVEAU (FLE) ————— */}
      <section className="bg-mist/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            kicker="FLE — du A1 au C2"
            title="Apprendre par niveau"
            description="Six paliers du Cadre européen commun de référence (CECRL), avec pour chacun une page dédiée, des compétences ciblées et un vocabulaire progressif."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {fleLevels.map((lvl, i) => (
              <Reveal key={lvl.code} delay={i * 70}>
                <a
                  href={`#/fle/${lvl.code.toLowerCase()}`}
                  className="group flex h-full flex-col rounded-xl border border-mist bg-card p-5 shadow-fiche transition-all hover:-translate-y-1.5 hover:shadow-lift hover:border-bleu/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-black text-bleu group-hover:text-bleu-deep">{lvl.code}</span>
                    <span className="flex gap-1" aria-hidden="true">
                      {Array.from({ length: 6 }).map((_, d) => (
                        <span key={d} className={`h-1.5 w-1.5 rounded-full ${d <= i ? 'bg-or' : 'bg-mist'}`} />
                      ))}
                    </span>
                  </div>
                  <p className="mt-1 font-bold text-ink">{lvl.name}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{lvl.tagline}</p>
                  <p className="mt-3 text-[12.5px] font-semibold text-ink-faint">
                    {lvl.verb.toLowerCase()} : {lvl.goals.slice(0, 2).join(' ')} …
                  </p>
                  <span className="mt-auto pt-4">
                    <span className="flex w-full items-center justify-center rounded-lg bg-bleu-tint px-4 py-2 text-[13.5px] font-bold text-bleu-deep transition-colors group-hover:bg-bleu group-hover:text-card">
                      Voir les cours
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— POURQUOI UTILISER LE SITE ? ————— */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
        <span className="pointer-events-none absolute -left-10 top-10 font-display text-[16rem] font-black text-navy-2 select-none" aria-hidden="true">
          §
        </span>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            light
            kicker="Nos engagements"
            title="Pourquoi utiliser le site ?"
            description="Une méthode simple : comprendre la règle, la voir en exemple, s’entraîner puis vérifier — à votre rythme."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: IconTarget, title: 'Cours clairs', text: 'Des explications simples et structurées, sans jargon inutile.' },
              { Icon: IconSteps, title: 'Progression', text: 'Des contenus organisés du niveau débutant au niveau avancé.' },
              { Icon: IconPen, title: 'Exercices', text: 'Des activités interactives pour vérifier la compréhension.' },
              { Icon: IconRefresh, title: 'Révision', text: 'Des ressources utiles pour préparer les contrôles et examens.' },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <article className="group h-full rounded-xl border border-navy-3 bg-navy-2/60 p-6 transition-all hover:-translate-y-1.5 hover:border-or/50">
                  <span className="grid place-items-center w-13 h-13 p-3 rounded-xl bg-navy-3 text-or transition-transform group-hover:scale-110 group-hover:-rotate-6">
                    <a.Icon className="w-7 h-7" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-card">{a.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-mist/70">{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[14px] font-semibold text-mist/60">
            {['Corrigés détaillés', 'Fiches de révision', 'Suivi de progression local', '100 % gratuit'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <IconCheck className="w-4 h-4 text-or" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ————— CTA FINAL ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-mist bg-card p-8 shadow-lift sm:p-12">
            <span className="pointer-events-none absolute -right-8 -top-10 font-display text-[12rem] font-black text-bleu-tint select-none" aria-hidden="true">
              Aa
            </span>
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-ink">Votre parcours, étape par étape</h2>
              <Link to="/tronc-commun" className="group inline-flex items-center gap-2 rounded-lg bg-or px-5 py-2.5 text-sm font-bold text-navy shadow-fiche transition-all hover:bg-or-deep hover:text-card hover:-translate-y-0.5">
                Démarrer maintenant
              </Link>
            </div>
            <p className="relative mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Accueil → niveau → module → séquence → leçon → exercice → correction : chaque étape est balisée, du premier cours du Tronc Commun
              jusqu’aux exercices du niveau C2.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ————— COMPTEUR DE VISITEURS ————— */}
      <VisitorCounter />
    </div>
  );
}
