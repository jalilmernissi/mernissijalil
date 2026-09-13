import { useMemo, useState } from 'react';
import type { Exercise } from '../data/types';
import { IconCheck, IconClose } from './Icons';

/* Moteur d’exercices interactifs : QCM, vrai/faux, compléter, remettre en ordre, associer */

const norm = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const TYPE_LABEL: Record<Exercise['type'], string> = {
  qcm: 'QCM',
  vf: 'Vrai / Faux',
  complete: 'Compléter',
  ordre: 'Remettre en ordre',
  associe: 'Associer',
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ExerciseCard({ exo, index, onResult }: { exo: Exercise; index: number; onResult: (id: string, correct: boolean) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [vf, setVf] = useState<boolean | null>(null);
  const [text, setText] = useState('');
  const [picked, setPicked] = useState<string[]>([]);
  const [choices, setChoices] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const rightOptions = useMemo(() => (exo.pairs ? shuffle(exo.pairs.map((p) => p[1])) : []), [exo.pairs]);
  const pool = useMemo(() => (exo.shuffled && exo.shuffled.length ? exo.shuffled : exo.items ?? []), [exo.shuffled, exo.items]);

  const ready = (() => {
    switch (exo.type) {
      case 'qcm':
        return selected !== null;
      case 'vf':
        return vf !== null;
      case 'complete':
        return text.trim().length > 0;
      case 'ordre':
        return picked.length === (exo.items?.length ?? 0);
      case 'associe':
        return exo.pairs ? exo.pairs.every((_, i) => choices[i]) : false;
    }
  })();

  function validate() {
    if (!ready || submitted) return;
    let ok = false;
    switch (exo.type) {
      case 'qcm':
        ok = selected === exo.answer;
        break;
      case 'vf':
        ok = vf === exo.vfAnswer;
        break;
      case 'complete': {
        const t = norm(text);
        ok = (exo.answers ?? []).some((a) => (a === '' ? t.length > 0 : norm(a) === t));
        break;
      }
      case 'ordre':
        ok = exo.items?.every((it, i) => picked[i] === it) ?? false;
        break;
      case 'associe':
        ok = exo.pairs?.every((p, i) => choices[i] === p[1]) ?? false;
        break;
    }
    setCorrect(ok);
    setSubmitted(true);
    onResult(exo.id, ok);
  }

  return (
    <div className="rounded-xl border border-mist bg-card p-5 sm:p-6 shadow-fiche">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-7 h-7 rounded-lg bg-bleu-tint text-bleu font-display font-bold text-sm">{index + 1}</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-bleu">{TYPE_LABEL[exo.type]}</span>
      </div>
      <p className="mt-3 font-semibold text-ink leading-snug">{exo.question}</p>

      {/* QCM */}
      {exo.type === 'qcm' && exo.options && (
        <div className="mt-4 grid gap-2" role="radiogroup" aria-label={exo.question}>
          {exo.options.map((opt, i) => {
            const isSel = selected === i;
            const showState = submitted;
            const good = i === exo.answer;
            return (
              <button
                key={i}
                type="button"
                disabled={submitted}
                onClick={() => setSelected(i)}
                aria-pressed={isSel}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-[15px] transition-all
                  ${showState && good ? 'border-green-600/60 bg-green-50 text-green-900' : ''}
                  ${showState && isSel && !good ? 'border-rouge/60 bg-rouge-tint text-rouge-deep' : ''}
                  ${!showState && isSel ? 'border-bleu bg-bleu-tint text-bleu-deep shadow-sm' : ''}
                  ${!showState && !isSel ? 'border-mist hover:border-bleu/50 hover:bg-bleu-tint/40' : ''}
                  ${showState && !good && !isSel ? 'border-mist opacity-60' : ''}`}
              >
                <span className={`grid place-items-center w-5 h-5 rounded-full border text-[11px] font-bold ${isSel || (showState && good) ? 'border-current' : 'border-ink-faint/50'}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {/* Vrai / Faux */}
      {exo.type === 'vf' && (
        <div className="mt-4 flex gap-3">
          {[true, false].map((v) => {
            const isSel = vf === v;
            const good = v === exo.vfAnswer;
            return (
              <button
                key={String(v)}
                type="button"
                disabled={submitted}
                onClick={() => setVf(v)}
                aria-pressed={isSel}
                className={`flex-1 rounded-lg border px-4 py-3 font-semibold transition-all
                  ${submitted && good ? 'border-green-600/60 bg-green-50 text-green-900' : ''}
                  ${submitted && isSel && !good ? 'border-rouge/60 bg-rouge-tint text-rouge-deep' : ''}
                  ${!submitted && isSel ? 'border-bleu bg-bleu-tint text-bleu-deep' : ''}
                  ${!submitted && !isSel ? 'border-mist hover:border-bleu/50 hover:bg-bleu-tint/40' : ''}
                  ${submitted && !good && !isSel ? 'border-mist opacity-60' : ''}`}
              >
                {v ? 'Vrai' : 'Faux'}
              </button>
            );
          })}
        </div>
      )}

      {/* Compléter */}
      {exo.type === 'complete' && exo.sentence && (
        <div className="mt-4">
          <p className="rounded-lg border border-mist bg-paper px-4 py-3 leading-8 text-ink">
            {exo.sentence.split('___').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <input
                    type="text"
                    value={text}
                    disabled={submitted}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && validate()}
                    aria-label="Votre réponse"
                    className={`mx-1 inline-block w-36 rounded-md border-b-2 border-t-0 border-x-0 bg-transparent px-2 py-0.5 text-center font-semibold text-bleu-deep outline-none transition-colors
                      ${submitted ? (correct ? 'border-green-600 text-green-800' : 'border-rouge text-rouge-deep') : 'border-bleu/50 focus:border-bleu'}`}
                  />
                )}
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Remettre en ordre */}
      {exo.type === 'ordre' && (
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-dashed border-bleu/40 bg-bleu-tint/40 p-3 min-h-[3.25rem]">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-bleu">Votre ordre (cliquez pour retirer)</p>
            <div className="flex flex-wrap gap-2">
              {picked.map((it, i) => (
                <button
                  key={`${it}-${i}`}
                  type="button"
                  disabled={submitted}
                  onClick={() => setPicked((p) => p.filter((_, j) => j !== i))}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all
                    ${submitted && exo.items?.[i] === it ? 'border-green-600/60 bg-green-50 text-green-900' : ''}
                    ${submitted && exo.items?.[i] !== it ? 'border-rouge/60 bg-rouge-tint text-rouge-deep' : ''}
                    ${!submitted ? 'border-bleu/50 bg-card text-bleu-deep hover:bg-bleu-tint' : ''}`}
                >
                  {i + 1}. {it}
                </button>
              ))}
              {picked.length === 0 && <span className="text-sm text-ink-faint">Cliquez sur les éléments ci-dessous…</span>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {pool.filter((it) => !picked.includes(it)).map((it) => (
              <button
                key={it}
                type="button"
                disabled={submitted}
                onClick={() => setPicked((p) => [...p, it])}
                className="rounded-lg border border-mist bg-card px-3 py-1.5 text-sm font-medium text-ink-soft hover:border-bleu hover:text-bleu-deep hover:bg-bleu-tint/50 transition-all"
              >
                {it}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Associer */}
      {exo.type === 'associe' && exo.pairs && (
        <div className="mt-4 grid gap-2">
          {exo.pairs.map((p, i) => {
            const val = choices[i] ?? '';
            const good = val === p[1];
            return (
              <div key={i} className="grid sm:grid-cols-2 items-center gap-2 rounded-lg border border-mist bg-paper/60 px-3 py-2">
                <span className="text-sm font-semibold text-ink">{p[0]}</span>
                <select
                  value={val}
                  disabled={submitted}
                  onChange={(e) => setChoices((c) => ({ ...c, [i]: e.target.value }))}
                  aria-label={`Associer : ${p[0]}`}
                  className={`rounded-lg border px-3 py-2 text-sm bg-card outline-none transition-colors
                    ${submitted ? (good ? 'border-green-600/60 bg-green-50 text-green-900' : 'border-rouge/60 bg-rouge-tint text-rouge-deep') : 'border-mist focus:border-bleu'}`}
                >
                  <option value="">— Choisir —</option>
                  {rightOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      )}

      {/* Validation + corrigé */}
      <div className="mt-5">
        {!submitted ? (
          <button
            type="button"
            onClick={validate}
            disabled={!ready}
            className="rounded-lg bg-bleu px-5 py-2.5 text-sm font-bold text-card shadow-fiche transition-all hover:bg-bleu-deep hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
          >
            Valider ma réponse
          </button>
        ) : (
          <div
            role="status"
            className={`rounded-xl border p-4 ${correct ? 'border-green-600/40 bg-green-50' : 'border-rouge/40 bg-rouge-tint'}`}
          >
            <p className={`flex items-center gap-2 font-bold ${correct ? 'text-green-800' : 'text-rouge-deep'}`}>
              {correct ? <IconCheck className="w-5 h-5" /> : <IconClose className="w-5 h-5" />}
              {correct ? 'Bonne réponse !' : 'Pas tout à fait…'}
            </p>
            {exo.type === 'ordre' && !correct && exo.items && (
              <p className="mt-2 text-sm text-ink-soft">
                <span className="font-bold text-ink">Ordre correct : </span>
                {exo.items.map((it, i) => `${i + 1}. ${it}`).join(' — ')}
              </p>
            )}
            {exo.type === 'associe' && !correct && exo.pairs && (
              <p className="mt-2 text-sm text-ink-soft">
                <span className="font-bold text-ink">Associations correctes : </span>
                {exo.pairs.map((p) => `${p[0]} → ${p[1]}`).join(' · ')}
              </p>
            )}
            {exo.type === 'complete' && !correct && exo.answers && exo.answers[0] !== '' && (
              <p className="mt-2 text-sm text-ink-soft">
                <span className="font-bold text-ink">Réponse attendue : </span>
                {exo.answers[0]}
              </p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              <span className="font-bold text-ink">Explication : </span>
              {exo.explain}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
