import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { searchAll } from '../data/search';
import type { SearchEntry } from '../data/types';
import { IconSearch, IconClose } from './Icons';

const TYPE_COLORS: Record<SearchEntry['type'], string> = {
  Cours: 'bg-bleu text-card',
  Notion: 'bg-or text-navy',
  Œuvre: 'bg-rouge text-card',
  Exercice: 'bg-green-700 text-card',
  Ressource: 'bg-navy-3 text-card',
  Niveau: 'bg-navy text-card',
};

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    setResults(searchAll(query));
  }, [query]);

  return createPortal(
    <div className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Recherche sur le site">
      <button type="button" aria-label="Fermer la recherche" className="absolute inset-0 bg-navy/60 overlay-in cursor-default" onClick={onClose} />
      <div className="modal-in relative w-full max-w-xl overflow-hidden rounded-xl bg-card shadow-lift">
        <div className="flex items-center gap-3 border-b border-mist px-4">
          <IconSearch className="w-5 h-5 shrink-0 text-bleu" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un cours, une notion, un exercice…"
            aria-label="Rechercher sur le site"
            className="w-full bg-transparent py-4 text-base text-ink outline-none placeholder:text-ink-faint"
          />
          <button type="button" onClick={onClose} aria-label="Fermer" className="grid place-items-center w-8 h-8 rounded-lg text-ink-faint hover:bg-rouge-tint hover:text-rouge">
            <IconClose className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-2">
          {query.trim().length < 2 ? (
            <div className="px-4 py-6 text-sm text-ink-faint">
              <p className="font-bold text-ink-soft">Essayez par exemple :</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['métaphore', 'incipit', 'schéma narratif', 'passé composé', 'Antigone', 'concession'].map((s) => (
                  <button key={s} type="button" onClick={() => setQuery(s)} className="rounded-full border border-mist bg-paper px-3 py-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:border-bleu hover:text-bleu-deep">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-ink-faint">
              Aucun résultat pour « {query} ». Essayez un autre mot-clé : <em>réalisme</em>, <em>conjugaison</em>, <em>A1</em>…
            </p>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={`${r.to}-${i}`}>
                  <a
                    href={`#${r.to}`}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-bleu-tint/60 focus-visible:bg-bleu-tint/60"
                  >
                    <span className={`shrink-0 rounded-md px-2 py-1 text-[10.5px] font-black uppercase tracking-wider ${TYPE_COLORS[r.type]}`}>{r.type}</span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-ink">{r.title}</span>
                      {r.hint && <span className="block truncate text-[12.5px] text-ink-faint">{r.hint}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-mist bg-paper px-4 py-2.5 text-[12px] text-ink-faint">
          <kbd className="rounded border border-mist bg-card px-1.5 py-0.5 font-bold">Échap</kbd> pour fermer · La recherche porte sur les cours, notions, exercices, ressources et niveaux.
        </div>
      </div>
    </div>,
    document.body
  );
}
