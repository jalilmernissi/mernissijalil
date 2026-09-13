import { useState } from 'react';
import { WEBMASTER_EMAIL, SOCIAL_LINKS } from '../lib/config';
import { Reveal, SectionHeading, Breadcrumbs } from '../components/ui';
import { IconCheck, IconChevron, IconTikTok, IconTelegram, IconMail, IconYoutube, Feather } from '../components/Icons';

interface FormState {
  nom: string;
  email: string;
  objet: string;
  message: string;
}

const SUJETS = ['Question sur un cours', 'Signaler une erreur', 'Suggestion de contenu', 'Demande de ressource', 'Autre'];

const FAQ = [
  {
    q: 'Les cours sont-ils gratuits ?',
    a: 'Oui, l’intégralité des cours, exercices, corrigés et ressources de la plateforme est accessible gratuitement.',
  },
  {
    q: 'Ma progression est-elle enregistrée ?',
    a: 'Oui, sur votre appareil uniquement (stockage local du navigateur). Aucune donnée n’est envoyée à un serveur.',
  },
  {
    q: 'Comment proposer un nouveau cours ou une ressource ?',
    a: 'Écrivez au webmaster via le formulaire ci-contre en précisant le niveau et le thème souhaités.',
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ nom: '', email: '', objet: SUJETS[0], message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (form.nom.trim().length < 2) errs.nom = 'Indiquez votre nom (2 caractères minimum).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errs.email = 'Adresse e-mail invalide (exemple : nom@domaine.com).';
    if (form.message.trim().length < 10) errs.message = 'Votre message doit contenir au moins 10 caractères.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  const inputCls = (err?: string) =>
    `w-full rounded-lg border bg-card px-4 py-3 text-[15px] outline-none transition-colors focus:border-bleu ${
      err ? 'border-rouge bg-rouge-tint/40' : 'border-mist'
    }`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]} />

      <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_0.85fr]">
        {/* Formulaire */}
        <div>
          <SectionHeading kicker="Formulaire" title="Contactez le webmaster" description="Vous avez une question, une suggestion ou souhaitez signaler une erreur ? Écrivez-nous." />

          <Reveal delay={120}>
            {sent ? (
              <div className="mt-10 rounded-xl border border-green-600/40 bg-green-50 p-8 text-center shadow-fiche" role="status">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-600 text-card">
                  <IconCheck className="w-7 h-7" />
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-green-900">Message envoyé !</h2>
                <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-green-800">
                  Merci {form.nom.trim()}. Votre message a bien été transmis au webmaster. Vous recevrez une réponse à l’adresse{' '}
                  <strong>{form.email.trim()}</strong> dans les meilleurs délais.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ nom: '', email: '', objet: SUJETS[0], message: '' });
                  }}
                  className="mt-6 rounded-lg border border-green-700/40 px-5 py-2.5 text-sm font-bold text-green-800 transition-colors hover:bg-green-100"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="mt-10 space-y-5 rounded-xl border border-mist bg-card p-6 shadow-fiche sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-1.5 block text-sm font-bold text-ink">
                      Nom <span className="text-rouge">*</span>
                    </label>
                    <input id="nom" type="text" value={form.nom} onChange={set('nom')} placeholder="Votre nom" aria-invalid={!!errors.nom} className={inputCls(errors.nom)} />
                    {errors.nom && <p className="mt-1.5 text-[13px] font-semibold text-rouge-deep">{errors.nom}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-ink">
                      Adresse e-mail <span className="text-rouge">*</span>
                    </label>
                    <input id="email" type="email" value={form.email} onChange={set('email')} placeholder="nom@exemple.com" aria-invalid={!!errors.email} className={inputCls(errors.email)} />
                    {errors.email && <p className="mt-1.5 text-[13px] font-semibold text-rouge-deep">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="objet" className="mb-1.5 block text-sm font-bold text-ink">
                    Objet
                  </label>
                  <select id="objet" value={form.objet} onChange={set('objet')} className={inputCls()}>
                    {SUJETS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-ink">
                    Message <span className="text-rouge">*</span>
                  </label>
                  <textarea id="message" rows={6} value={form.message} onChange={set('message')} placeholder="Votre message…" aria-invalid={!!errors.message} className={`${inputCls(errors.message)} resize-y`} />
                  <div className="mt-1.5 flex items-center justify-between">
                    {errors.message ? <p className="text-[13px] font-semibold text-rouge-deep">{errors.message}</p> : <span />}
                    <span className="text-[12px] font-semibold text-ink-faint">{form.message.trim().length} caractère{form.message.trim().length > 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" className="group inline-flex items-center gap-2.5 rounded-lg bg-bleu px-7 py-3.5 font-bold text-card shadow-lift transition-all hover:bg-bleu-deep hover:-translate-y-0.5">
                    Envoyer <Feather className="w-5 h-5 text-or transition-transform group-hover:-rotate-12" />
                  </button>
                  <p className="text-[13px] text-ink-faint">Les champs marqués * sont obligatoires.</p>
                </div>
              </form>
            )}
          </Reveal>
        </div>

        {/* Coordonnées + FAQ */}
        <aside className="space-y-6">
          <Reveal delay={200}>
            <div className="rounded-xl bg-navy p-7 text-mist shadow-lift">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-or">Coordonnées</p>
              <a href={`mailto:${WEBMASTER_EMAIL}`} className="mt-4 flex items-center gap-3 text-card transition-colors hover:text-or">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-3">
                  <IconMail className="w-5 h-5 text-or" />
                </span>
                <span>
                  <span className="block text-[12px] font-bold text-mist/60">Webmaster</span>
                  <span className="font-bold">{WEBMASTER_EMAIL}</span>
                </span>
              </a>
              <p className="mt-4 text-[13.5px] leading-relaxed text-mist/65">
                Réponse généralement sous 48 h ouvrées. Pour signaler une erreur, indiquez la page et le passage concernés.
              </p>
              <div className="mt-5 flex gap-2.5">
                {[
                  { Icon: IconTikTok, ...SOCIAL_LINKS[0] },
                  { Icon: IconTelegram, ...SOCIAL_LINKS[1] },
                  { Icon: IconYoutube, ...SOCIAL_LINKS[2] },
                ].map(({ Icon, name, url }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="grid h-10 w-10 place-items-center rounded-lg border border-navy-3 text-mist/80 transition-all hover:border-or hover:text-or hover:-translate-y-0.5">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="rounded-xl border border-mist bg-card p-6 shadow-fiche">
              <p className="font-display text-lg font-bold text-ink">Questions fréquentes</p>
              <div className="mt-3 space-y-2">
                {FAQ.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={i} className="rounded-lg border border-mist">
                      <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-semibold text-ink hover:bg-paper/70 transition-colors">
                        {f.q}
                        <IconChevron className={`w-5 h-5 shrink-0 text-ink-faint transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`acc-body ${open ? 'open' : ''}`}>
                        <div>
                          <p className="border-t border-mist px-4 py-3 text-[14px] leading-relaxed text-ink-soft">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
