import { SITE_NAME } from '../lib/config';

type IconProps = { className?: string };

/* Plume — emblème du site */
export function Feather({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.5 3.5c-7 1.2-12.3 6.4-13.6 14.4 2.8 1.3 6.4 1 9-1.4 3.6-3.2 5.4-8.2 4.6-13z"
        fill="currentColor"
      />
      <path d="M6 18.5 3.5 21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 15.5c2.5-4.5 6-8 10-10" stroke="var(--color-card)" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* Logo typographique MJ + plume */
export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative grid place-items-center w-11 h-11 rounded-xl bg-bleu text-card shadow-fiche overflow-hidden">
        <span className="absolute -right-2 -top-2 text-or/90">
          <Feather className="w-8 h-8 rotate-12" />
        </span>
        <span className="font-display font-black text-lg tracking-tight leading-none pt-1">MJ</span>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display font-bold text-[15px] tracking-wide text-ink">{SITE_NAME}</span>
          <span className="block text-[11px] font-medium text-ink-faint uppercase tracking-[0.18em]">Plateforme de français</span>
        </span>
      )}
    </span>
  );
}

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export const IconSearch = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

export const IconMenu = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="M3.5 7h17M3.5 12h17M3.5 17h11" />
  </svg>
);

export const IconClose = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconArrowRight = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="M4 12h15m0 0-6-6m6 6-6 6" />
  </svg>
);

export const IconArrowLeft = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="M20 12H5m0 0 6-6m-6 6 6 6" />
  </svg>
);

/* Livre ouvert avec signet */
export const IconBook = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <path d="M4 7c4-1.8 8-1.8 12 0 4-1.8 8-1.8 12 0v18c-4-1.8-8-1.8-12 0-4-1.8-8-1.8-12 0z" />
    <path d="M16 7v18" />
    <path d="M20 4.5v6l2.5-1.8L25 10.5v-6" strokeWidth="1.5" />
  </svg>
);

/* Laurier — diplôme */
export const IconLaurel = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <path d="M16 6v13" />
    <circle cx="16" cy="5" r="2" />
    <path d="M16 19c-5 0-8-3-8.5-8 3 0 5.5 1 7 3M16 19c5 0 8-3 8.5-8-3 0-5.5 1-7 3" />
    <path d="M10 25.5c3.5 2 8.5 2 12 0M12 22.5c2.3 1.2 5.7 1.2 8 0" />
  </svg>
);

/* Globe avec accents */
export const IconGlobe = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <circle cx="16" cy="16" r="11" />
    <path d="M5 16h22M16 5c-6 6.5-6 15.5 0 22 6-6.5 6-15.5 0-22z" />
    <path d="M24 6.5c1.6 1 2.8 2.3 3.7 4" strokeWidth="1.5" />
  </svg>
);

/* Chemise de dossiers */
export const IconFolder = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <path d="M4 9.5A2.5 2.5 0 0 1 6.5 7h6l3 3.5h10A2.5 2.5 0 0 1 28 13v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 24z" />
    <path d="M4 13.5h24" />
    <path d="M11 19h10" strokeWidth="1.5" />
  </svg>
);

export const IconCheck = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} strokeWidth={2.4} aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconTarget = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <circle cx="16" cy="16" r="11" />
    <circle cx="16" cy="16" r="6.5" />
    <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconSteps = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <path d="M5 26h6v-5h6v-5h6v-5h4" />
    <path d="M23 8.5 27 11l-4 2.5" />
  </svg>
);

export const IconPen = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <path d="m6 26 1.5-5.5L20 8l4 4L11.5 24.5z" />
    <path d="m17.5 10.5 4 4M6 26l5.5-1.5" />
    <path d="M22 6l2-2 4 4-2 2" />
  </svg>
);

export const IconRefresh = ({ className = 'w-7 h-7' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} {...S} aria-hidden="true">
    <path d="M26 16a10 10 0 1 1-3-7.1" />
    <path d="M26 4v5h-5" />
  </svg>
);

export const IconDownload = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="M12 4v11m0 0 4.5-4.5M12 15 7.5 10.5M4.5 19.5h15" />
  </svg>
);

export const IconEye = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconMail = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconClock = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconQuote = ({ className = 'w-8 h-8' }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M6 20c0-6 3.4-10.6 9-13l1.4 2.4C12.8 11.3 11 13.7 10.6 16c.4-.2 1-.3 1.6-.3 2.6 0 4.4 1.9 4.4 4.4 0 2.6-2 4.6-4.7 4.6C8.4 24.7 6 22.9 6 20zm14 0c0-6 3.4-10.6 9-13l1.4 2.4C26.8 11.3 25 13.7 24.6 16c.4-.2 1-.3 1.6-.3 2.6 0 4.4 1.9 4.4 4.4 0 2.6-2 4.6-4.7 4.6-3.5 0-5.9-1.8-5.9-4.7z" />
  </svg>
);

export const IconChevron = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* Réseaux sociaux */
export const IconTikTok = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.79-2.47V9.66a5.9 5.9 0 1 0 4.88 5.78V8.72a7.35 7.35 0 0 0 4.3 1.38V7.01a4.29 4.29 0 0 1-3.24-1.19z" />
  </svg>
);

export const IconTelegram = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="m21.6 3.3-17.7 6.8c-.9.35-.85 1.6.06 1.9l4.5 1.45 1.66 5.3c.28.9 1.4 1.18 2.08.5l2.42-2.27 4.33 3.18c.75.55 1.8.13 2-.77l2.2-14.9c.16-1.05-.83-1.55-1.55-1.2z" />
    <path d="m8.1 13.5 9.6-7.3c.3-.23.63.18.37.44l-7.9 8.1-.4 3.6z" opacity="0.35" />
  </svg>
);

export const IconYoutube = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden="true">
    <rect x="3" y="6" width="18" height="12.5" rx="3" />
    <path d="m10.5 9.5 4.5 2.7-4.5 2.7z" fill="currentColor" stroke="none" />
  </svg>
);
