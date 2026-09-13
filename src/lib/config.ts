/* ————————————————————————————————————————————
   Configuration globale du site
   Modifier ici le nom, le slogan, l’e-mail, etc.
   (prévu pour être piloté plus tard par un espace admin)
   ———————————————————————————————————————————— */

export const SITE_NAME = 'MERNISSI JALIL';
export const SITE_DOMAIN = 'mernissijalil.com';
export const SITE_TAGLINE = 'Une plateforme pour apprendre, comprendre et progresser en français.';
export const FOOTER_BRAND = 'Mernissi Jalil';
export const WEBMASTER_EMAIL = 'contact@mernissijalil.com';

export const SOCIAL_LINKS = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@bac.fle?is_from_webapp=1&sender_device=pc' },
  { name: 'Telegram', url: 'https://t.me/mernissijalil' },
  { name: 'YouTube', url: 'https://www.youtube.com/@mernissijalil' },
];

/* Téléchargement d’un contenu texte généré à la volée */
export function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* Progression de l’élève (leçons terminées) — localStorage */
const PROGRESS_KEY = 'mj-progress-v1';

export function getCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

export function toggleCompleted(lessonId: string): Set<string> {
  const set = getCompleted();
  if (set.has(lessonId)) set.delete(lessonId);
  else set.add(lessonId);
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify([...set]));
  } catch {
    /* stockage indisponible : on continue sans persistance */
  }
  return set;
}
