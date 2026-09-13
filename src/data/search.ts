import type { SearchEntry } from './types';
import { troncCommun, flatLessons } from './troncCommun';
import { figures, langueLessons, oeuvres } from './bac';
import { fleLevels } from './fle';
import { ressources } from './ressources';

/* Index global : cours, notions, œuvres, exercices, ressources, niveaux */

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export function searchAll(query: string): SearchEntry[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];
  const tokens = q.split(/\s+/);

  const entries: SearchEntry[] = [];

  for (const l of flatLessons) {
    entries.push({
      title: l.title,
      type: 'Cours',
      keywords: [l.title, l.moduleTitle, l.seqTitle, ...findKeywords(l.lessonId)],
      to: l.path,
      hint: `${l.moduleTitle} › ${l.seqTitle}`,
    });
  }
  for (const f of figures) {
    entries.push({
      title: f.name,
      type: 'Notion',
      keywords: [f.name, 'figure de style', 'rhétorique', f.definition],
      to: '/bac#rhetorique',
      hint: '1ère Bac › Rhétorique',
    });
  }
  for (const l of langueLessons) {
    entries.push({
      title: l.title,
      type: 'Notion',
      keywords: [l.title, 'langue', 'grammaire', ...l.keywords],
      to: '/bac#langue',
      hint: '1ère Bac › Langue',
    });
  }
  for (const o of oeuvres) {
    entries.push({
      title: `${o.title} — ${o.author}`,
      type: 'Œuvre',
      keywords: [o.title, o.author, o.genre, 'résumé', 'chapitres'],
      to: '/bac#oeuvres',
      hint: '1ère Bac › Œuvres étudiées',
    });
  }
  for (const n of fleLevels) {
    entries.push({
      title: `FLE ${n.code} — ${n.name}`,
      type: 'Niveau',
      keywords: [n.code, n.name, 'FLE', 'français langue étrangère', ...n.grammar],
      to: `/fle/${n.code.toLowerCase()}`,
      hint: 'Français Langue Étrangère',
    });
  }
  for (const r of ressources) {
    entries.push({
      title: r.title,
      type: 'Ressource',
      keywords: [r.title, r.category, r.type, r.level, r.description, r.content],
      to: '/ressources',
      hint: `${r.level} › ${r.category}`,
    });
  }

  const scored = entries
    .map((e) => {
      const hay = normalize(`${e.title} ${e.keywords.join(' ')}`);
      const score = tokens.reduce((acc, t) => acc + (hay.includes(t) ? (hay.startsWith(t) ? 2 : 1) : 0), 0);
      return { e, score };
    })
    .filter((x) => x.score === tokens.length || (tokens.length > 1 && x.score >= tokens.length - 1))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 12).map((x) => x.e);
}

function findKeywords(lessonId: string): string[] {
  for (const m of troncCommun.modules) {
    for (const s of m.sequences) {
      for (const l of s.lessons) {
        if (l.id === lessonId) return l.keywords;
      }
    }
  }
  return [];
}
