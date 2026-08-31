import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { toLocaleDigits } from '@/i18n/locale-utils';

export default function Footer() {
  const { lang, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const buildPath = (path: string) => `/${lang}${path}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  const columns = [
    {
      title: t.footer.columns.magazine,
      links: [
        { label: t.nav.features, path: '/category/feature' },
        { label: t.nav.reviews, path: '/category/review' },
        { label: t.nav.opinion, path: '/category/opinion' },
        { label: t.nav.news, path: '/category/news' },
        { label: t.nav.archive, path: '/category/feature' },
      ],
    },
    {
      title: t.footer.columns.experience,
      links: [
        { label: t.nav.podcast, path: '/category/podcast' },
        { label: t.nav.video, path: '/category/video' },
        { label: t.nav.power100, path: '/power-100' },
      ],
    },
    {
      title: t.footer.columns.collaborations,
      links: [
        { label: t.nav.shop, path: '/category/feature' },
        { label: t.nav.subscribe, path: '/category/feature' },
      ],
    },
    {
      title: t.footer.columns.about,
      links: [
        { label: t.nav.about, path: '/category/feature' },
      ],
    },
  ];

  return (
    <footer className="bg-inverse text-inverse mt-22">
      <div className="content-max mx-auto px-5 md:px-7 py-16 md:py-22">
        {/* Top: tagline + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-16 border-b border-white/20">
          <div>
            <span className="font-display text-3xl md:text-4xl">Zamineh</span>
            <p className="mt-4 text-sm text-white/60 max-measure leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-meta mb-2">{t.footer.newsletterTitle}</h3>
            <p className="text-sm text-white/60 mb-4 max-measure leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus('idle');
                }}
                placeholder={t.footer.emailPlaceholder}
                aria-label={t.footer.emailPlaceholder}
                className="flex-1 bg-transparent border-b border-white/30 px-1 py-2 text-sm focus:outline-none focus:border-white placeholder:text-white/40"
              />
              <button
                type="submit"
                className="text-meta border-b border-white px-1 py-2 hover:bg-white hover:text-black transition-colors duration-base ease-editorial"
              >
                {t.footer.subscribe}
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-3 text-sm text-white">{t.footer.subscribeSuccess}</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-white/80">{t.footer.emailInvalid}</p>
            )}
          </div>
        </div>

        {/* Middle: nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-meta text-white/50 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      to={buildPath(link.path)}
                      className="text-sm text-white/80 hover-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-meta text-white/50 mb-4">{t.footer.social}</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-white/80 hover-underline">Instagram</a></li>
              <li><a href="#" className="text-sm text-white/80 hover-underline">Twitter</a></li>
              <li><a href="#" className="text-sm text-white/80 hover-underline">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/50">
            © {toLocaleDigits(new Date().getFullYear(), lang)} Zamineh. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/50 hover-underline">{t.footer.privacy}</a>
            <a href="#" className="text-xs text-white/50 hover-underline">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
