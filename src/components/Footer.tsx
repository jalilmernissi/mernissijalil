import { useState } from 'react';
import { FOOTER_BRAND, SITE_TAGLINE, SOCIAL_LINKS, WEBMASTER_EMAIL } from '../lib/config';
import { Feather, IconTikTok, IconTelegram, IconMail, IconYoutube } from './Icons';
import { Modal } from './ui';
import { NAV_ITEMS } from './Header';

export function Footer() {
  const [legal, setLegal] = useState<null | 'mentions' | 'privacy'>(null);

  const socialIcons = [
    { Icon: IconTikTok, ...SOCIAL_LINKS[0] },
    { Icon: IconTelegram, ...SOCIAL_LINKS[1] },
    { Icon: IconYoutube, ...SOCIAL_LINKS[2] },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-mist">
      {/* liseré tricolore */}
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-bleu" />
        <span className="flex-1 bg-card/90" />
        <span className="flex-1 bg-rouge" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl font-black text-card">
            <span className="text-or">{FOOTER_BRAND.split(' ')[0]}</span> {FOOTER_BRAND.split(' ')[1]}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist/75">{SITE_TAGLINE}</p>
          <div className="mt-5 flex items-center gap-3">
            {socialIcons.map(({ Icon, name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid place-items-center w-10 h-10 rounded-lg border border-navy-3 text-mist/80 transition-all hover:border-or hover:text-or hover:-translate-y-0.5"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Plan du site">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-or">Navigation</p>
          <ul className="mt-4 grid gap-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <a href={`#${item.to}`} className="text-sm text-mist/80 transition-colors hover:text-card hover:translate-x-1 inline-block">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-or">Niveaux</p>
          <ul className="mt-4 grid gap-2.5 text-sm">
            <li>
              <a href="#/tronc-commun" className="text-mist/80 transition-colors hover:text-card">
                Tronc Commun
              </a>
            </li>
            <li>
              <a href="#/bac" className="text-mist/80 transition-colors hover:text-card">
                1ère année du Bac
              </a>
            </li>
            <li>
              <a href="#/deuxieme-bac" className="text-mist/80 transition-colors hover:text-card">
                2ème année du Bac
              </a>
            </li>
            <li>
              <a href="#/fle" className="text-mist/80 transition-colors hover:text-card">
                FLE A1-C2
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-or">Le site</p>
          <ul className="mt-4 grid gap-2.5 text-sm">
            <li>
              <button type="button" onClick={() => setLegal('mentions')} className="text-mist/80 transition-colors hover:text-card">
                Mentions légales
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setLegal('privacy')} className="text-mist/80 transition-colors hover:text-card">
                Politique de confidentialité
              </button>
            </li>
            <li>
              <a href="#/contact" className="text-mist/80 transition-colors hover:text-card">
                Contacter le webmaster
              </a>
            </li>
            <li>
              <a href="#/ressources" className="text-mist/80 transition-colors hover:text-card">
                Toutes les ressources
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-or">Contact</p>
          <a href={`mailto:${WEBMASTER_EMAIL}`} className="mt-4 inline-flex items-center gap-2.5 text-sm text-mist/80 transition-colors hover:text-card">
            <IconMail className="w-5 h-5 text-or" />
            {WEBMASTER_EMAIL}
          </a>
          <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-mist/60">
            <Feather className="mt-0.5 w-5 h-5 shrink-0 text-or" />
            Cours, exercices et ressources conçus pour les lycéens et les apprenants de français langue étrangère.
          </p>
        </div>
      </div>

      <div className="border-t border-navy-3">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-[13px] text-mist/50 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Mernissi Jalil — mernissijalil.com. Tous droits réservés.</p>
          <p className="font-display italic text-mist/60">« Le talent est une longue patience. »</p>
        </div>
      </div>

      {legal === 'mentions' && (
        <Modal title="Mentions légales" kicker="Informations" onClose={() => setLegal(null)}>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Le site <strong className="text-ink">mernissijalil.com</strong> est une plateforme éducative dédiée à l’apprentissage du français,
              destinée aux élèves du lycée et aux apprenants de français langue étrangère (FLE).
            </p>
            <p><strong className="text-ink">Directeur de la publication :</strong> Jalil Mernissi, webmaster du site.</p>
            <p><strong className="text-ink">Contact :</strong> {WEBMASTER_EMAIL}</p>
            <p>
              Les contenus pédagogiques (cours, exercices, corrigés) sont proposés à titre éducatif. Les citations d’œuvres littéraires sont
              courtes et utilisées dans un cadre strictement pédagogique, conformément au droit de courte citation.
            </p>
          </div>
        </Modal>
      )}
      {legal === 'privacy' && (
        <Modal title="Politique de confidentialité" kicker="Vos données" onClose={() => setLegal(null)}>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Le site <strong className="text-ink">mernissijalil.com</strong> respecte la vie privée de ses visiteurs. Aucune donnée
              personnelle n’est collectée à des fins commerciales.
            </p>
            <p>
              <strong className="text-ink">Progression locale :</strong> votre progression (leçons terminées) est enregistrée uniquement sur
              votre appareil (stockage local du navigateur) et n’est jamais transmise à un serveur.
            </p>
            <p>
              <strong className="text-ink">Formulaire de contact :</strong> les informations envoyées (nom, e-mail, message) servent
              exclusivement à répondre à votre demande.
            </p>
          </div>
        </Modal>
      )}
    </footer>
  );
}
