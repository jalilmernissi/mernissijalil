import { Component, useEffect, useState, type ReactNode } from 'react';
import { HashRouter, Route, Routes, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Home } from './pages/Home';
import { TroncCommun } from './pages/TroncCommun';
import { LessonPage } from './pages/LessonPage';
import { Bac } from './pages/Bac';
import { DeuxiemeBac } from './pages/DeuxiemeBac';
import { FleIndex, FleLevel } from './pages/Fle';
import { Ressources } from './pages/Ressources';
import { Contact } from './pages/Contact';

/* Filet de sécurité : affiche un message plutôt qu’une page blanche en cas d’erreur */
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-paper px-6 text-center">
          <div>
            <p className="font-display text-7xl font-black text-bleu">Oups…</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-ink">Une erreur s’est produite</h1>
            <p className="mt-2 text-ink-soft">Rechargez la page : vos cours vous attendent.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-lg bg-bleu px-6 py-3 font-bold text-card transition-colors hover:bg-bleu-deep"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/* Remonte en haut de page à chaque navigation (sauf ancres internes) */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 text-center">
      <p className="font-display text-8xl font-black text-bleu">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">Page introuvable</h1>
      <p className="mt-3 text-ink-soft">La page demandée n’existe pas. Retournez à l’accueil pour poursuivre votre apprentissage.</p>
      <Link to="/" className="mt-8 inline-block rounded-lg bg-bleu px-7 py-3 font-bold text-card shadow-fiche transition-all hover:bg-bleu-deep hover:-translate-y-0.5">
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  /* Raccourci clavier Ctrl+K / Cmd+K */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-quadrille">
          <span className="noise-overlay" aria-hidden="true" />
          <Header onOpenSearch={() => setSearchOpen(true)} />
          <main id="contenu" className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tronc-commun" element={<TroncCommun />} />
              <Route path="/tronc-commun/:moduleId/:seqId/:lessonId" element={<LessonPage />} />
              <Route path="/bac" element={<Bac />} />
              <Route path="/deuxieme-bac" element={<DeuxiemeBac />} />
              <Route path="/fle" element={<FleIndex />} />
              <Route path="/fle/:level" element={<FleLevel />} />
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      </HashRouter>
    </ErrorBoundary>
  );
}
