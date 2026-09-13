import { useMemo, useState } from 'react';
import { ressources, resourceLevels, resourceCategories, resourceTypes } from '../data/ressources';
import type { ResourceItem } from '../data/types';
import { downloadText } from '../lib/config';
import { Reveal, SectionHeading, Breadcrumbs, Modal } from '../components/ui';
import { IconDownload, IconEye, IconSearch, IconFolder } from '../components/Icons';

const TYPE_COLORS: Record<ResourceItem['type'], string> = {
  Fiche: 'bg-bleu-tint text-bleu-deep',
  Exercice: 'bg-green-100 text-green-800',
  Sujet: 'bg-rouge-tint text-rouge-deep',
  Texte: 'bg-or-tint text-or-deep',
  Méthode: 'bg-navy text-card',
  Vocabulaire: 'bg-mist text-navy',
};

export function Ressources() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState(resourceLevels[0]);
  const [category, setCategory] = useState(resourceCategories[0]);
  const [type, setType] = useState(resourceTypes[0]);
  const [preview, setPreview] = useState<ResourceItem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ressources.filter((r) => {
      if (level !== resourceLevels[0] && r.level !== level) return false;
      if (category !== resourceCategories[0] && r.category !== category) return false;
      if (type !== resourceTypes[0] && r.type !== type) return false;
      if (q && !`${r.title} ${r.description} ${r.category} ${r.type} ${r.level}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, level, category, type]);

  const resetFilters = () => {
    setQuery('');
    setLevel(resourceLevels[0]);
    setCategory(resourceCategories[0]);
    setType(resourceTypes[0]);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Ressources' }]} />

      <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          kicker="Bibliothèque pédagogique"
          title="Ressources"
          description="Fiches de cours, fiches de révision, exercices, corrigés, textes, méthodes, sujets d’examen, vocabulaire, grammaire, conjugaison et production écrite."
        />
        <Reveal delay={120}>
          <div className="relative w-full lg:w-80">
            <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 w-5 h-5 -translate-y-1/2 text-ink-faint" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une ressource…"
              aria-label="Rechercher une ressource"
              className="w-full rounded-lg border border-mist bg-card py-3 pl-11 pr-4 text-[15px] shadow-fiche outline-none transition-colors focus:border-bleu"
            />
          </div>
        </Reveal>
      </div>

      {/* Filtres */}
      <Reveal delay={160}>
        <div className="mt-8 grid gap-4 rounded-xl border border-mist bg-card p-5 shadow-fiche sm:grid-cols-3">
          {(
            [
              { label: 'Niveau', value: level, options: resourceLevels, set: setLevel },
              { label: 'Matière', value: category, options: resourceCategories, set: setCategory },
              { label: 'Type de ressource', value: type, options: resourceTypes, set: setType },
            ] as const
          ).map((f) => (
            <label key={f.label} className="block">
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-ink-faint">{f.label}</span>
              <select
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-[14.5px] font-semibold text-ink outline-none transition-colors focus:border-bleu"
              >
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </Reveal>

      <p className="mt-6 text-sm font-bold text-ink-faint" role="status">
        {filtered.length} ressource{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
      </p>

      {/* Cartes */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border-2 border-dashed border-mist bg-card p-12 text-center">
          <IconFolder className="mx-auto w-12 h-12 text-ink-faint" />
          <p className="mt-4 font-display text-xl font-bold text-ink">Aucune ressource ne correspond</p>
          <p className="mt-1 text-[14.5px] text-ink-soft">Modifiez votre recherche ou réinitialisez les filtres.</p>
          <button type="button" onClick={resetFilters} className="mt-5 rounded-lg bg-bleu px-5 py-2.5 text-sm font-bold text-card hover:bg-bleu-deep transition-colors">
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 70}>
              <article className="flex h-full flex-col rounded-xl border border-mist bg-card p-5 shadow-fiche transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-md px-2.5 py-1 text-[11px] font-black uppercase tracking-wider ${TYPE_COLORS[r.type]}`}>{r.type}</span>
                  <span className="text-[12px] font-bold text-ink-faint">{r.level}</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink">{r.title}</h2>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{r.description}</p>
                <span className="mt-2.5 inline-flex w-fit rounded-full bg-paper border border-mist px-2.5 py-0.5 text-[11.5px] font-bold text-ink-faint">
                  {r.category}
                </span>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setPreview(r)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-mist px-3.5 py-2 text-[13px] font-bold text-ink-soft transition-colors hover:border-bleu/50 hover:text-bleu-deep"
                  >
                    <IconEye className="w-4 h-4" /> Consulter
                  </button>
                  {r.downloadable && (
                    <button
                      type="button"
                      onClick={() => downloadText(`${r.id}.txt`, r.content)}
                      className="group inline-flex items-center gap-1.5 rounded-lg bg-bleu px-3.5 py-2 text-[13px] font-bold text-card transition-colors hover:bg-bleu-deep"
                    >
                      <IconDownload className="w-4 h-4 transition-transform group-hover:translate-y-0.5" /> Télécharger
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      {preview && (
        <Modal title={preview.title} kicker={`${preview.level} · ${preview.category}`} onClose={() => setPreview(null)} wide>
          <pre className="whitespace-pre-wrap rounded-xl border border-mist bg-paper p-5 font-body text-[14px] leading-relaxed text-ink-soft">{preview.content}</pre>
          {preview.downloadable && (
            <button
              type="button"
              onClick={() => downloadText(`${preview.id}.txt`, preview.content)}
              className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-bleu px-5 py-2.5 text-sm font-bold text-card transition-colors hover:bg-bleu-deep"
            >
              <IconDownload className="w-4 h-4" /> Télécharger cette ressource
            </button>
          )}
        </Modal>
      )}
    </div>
  );
}
