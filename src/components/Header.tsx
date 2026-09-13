import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LogoMark, IconMenu, IconClose, IconSearch } from './Icons';

export const NAV_ITEMS = [
  { label: 'Accueil', to: '/' },
  { label: 'Tronc Commun', to: '/tronc-commun' },
  { label: '1ère Bac', to: '/bac' },
  { label: '2ème Bac', to: '/deuxieme-bac' },
  { label: 'FLE A1-C2', to: '/fle' },
  { label: 'Ressources', to: '/ressources' },
  { label: 'Contact', to: '/contact' },
];

export function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-[70] border-b transition-all duration-300 ${
        scrolled ? 'border-mist bg-card/95 shadow-fiche backdrop-blur' : 'border-transparent bg-paper/80 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#/" aria-label="Mernissi Jalil — retour à l’accueil" className="transition-transform hover:-translate-y-0.5">
          <LogoMark />
        </a>

        {/* Navigation bureau */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link text-[14.5px] font-semibold transition-colors ${isActive ? 'active text-bleu-deep' : 'text-ink-soft hover:text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="group flex items-center gap-2.5 rounded-lg border border-mist bg-card px-3 py-2 text-sm font-semibold text-ink-faint shadow-fiche transition-all hover:border-bleu/50 hover:text-bleu-deep"
            aria-label="Rechercher sur le site"
          >
            <IconSearch className="w-[18px] h-[18px]" />
            <span className="hidden sm:inline">Rechercher…</span>
            <kbd className="hidden md:inline-block rounded border border-mist bg-paper px-1.5 py-0.5 text-[11px] font-bold text-ink-faint">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-11 h-11 rounded-lg border border-mist bg-card text-ink shadow-fiche"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-[75] bg-navy/50 overlay-in" onClick={() => setMenuOpen(false)}>
          <nav
            aria-label="Navigation mobile"
            className="modal-in mx-4 mt-3 rounded-xl border border-mist bg-card p-3 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3.5 font-display text-lg font-bold transition-colors ${
                    isActive ? 'bg-bleu-tint text-bleu-deep' : 'text-ink hover:bg-paper'
                  }`
                }
              >
                {item.label}
                <span className="text-rouge" aria-hidden="true">›</span>
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenSearch();
              }}
              className="mt-2 flex w-full items-center gap-2 rounded-lg border border-mist px-4 py-3 font-semibold text-ink-soft"
            >
              <IconSearch /> Rechercher un cours, une notion…
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
