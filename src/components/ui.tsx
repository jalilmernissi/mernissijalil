import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { IconClose } from './Icons';

/* ————— Révélation au défilement ————— */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? 'is-in' : ''} ${className}`} style={{ ['--reveal-delay' as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ————— Titre de section avec kicker ————— */
export function SectionHeading({
  kicker,
  title,
  description,
  light = false,
  center = false,
}: {
  kicker: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${light ? 'text-or' : 'text-rouge'}`}>{kicker}</p>
      <div className={`mt-3 flex items-center gap-4 ${center ? 'justify-center' : ''}`}>
        <span className={`h-[3px] w-10 rounded-full ${light ? 'bg-or' : 'bg-rouge'}`} aria-hidden="true" />
        <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${light ? 'text-card' : 'text-ink'}`}>{title}</h2>
      </div>
      {description && <p className={`mt-4 max-w-2xl text-base leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-mist/80' : 'text-ink-soft'}`}>{description}</p>}
    </Reveal>
  );
}

/* ————— Modale accessible ————— */
export function Modal({
  title,
  kicker,
  onClose,
  children,
  wide = false,
}: {
  title: string;
  kicker?: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-label={title}>
      <button
        type="button"
        aria-label="Fermer la fenêtre"
        className="absolute inset-0 bg-navy/60 overlay-in cursor-default"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`modal-in relative w-full ${wide ? 'max-w-4xl' : 'max-w-2xl'} max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-xl bg-card shadow-lift outline-none`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-mist bg-card/95 px-6 py-4 backdrop-blur">
          <div>
            {kicker && <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rouge">{kicker}</p>}
            <h2 className="font-display text-xl font-bold text-ink leading-snug">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 grid place-items-center w-9 h-9 rounded-lg border border-mist text-ink-soft hover:bg-rouge-tint hover:text-rouge hover:border-rouge/40 transition-colors"
            aria-label="Fermer"
          >
            <IconClose />
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}

/* ————— Fil d’Ariane ————— */
export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="text-[13px] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="text-mist">›</span>}
            {it.to ? (
              <a href={`#${it.to}`} className="hover:text-bleu transition-colors">
                {it.label}
              </a>
            ) : (
              <span className="font-semibold text-ink-soft" aria-current="page">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
