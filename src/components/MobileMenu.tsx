import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface MobileMenuProps {
  onClose: () => void;
  onLanguageToggle: () => void;
}

export default function MobileMenu({ onClose, onLanguageToggle }: MobileMenuProps) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const buildPath = (path: string) => `/${lang}${path}`;

  const navSections = [
    {
      title: t.nav.magazine,
      items: [
        { label: t.nav.features, path: '/category/feature' },
        { label: t.nav.reviews, path: '/category/review' },
        { label: t.nav.opinion, path: '/category/opinion' },
        { label: t.nav.news, path: '/category/news' },
        { label: t.nav.previews, path: '/category/preview' },
      ],
    },
    {
      title: t.nav.experience,
      items: [
        { label: t.nav.podcast, path: '/category/podcast' },
        { label: t.nav.video, path: '/category/video' },
        { label: t.nav.power100, path: '/power-100' },
      ],
    },
    {
      title: t.nav.collaborations,
      items: [
        { label: t.nav.shop, path: '/category/feature' },
        { label: t.nav.subscribe, path: '/category/feature' },
      ],
    },
    {
      title: t.nav.about,
      items: [
        { label: t.nav.about, path: '/category/feature' },
        { label: t.nav.archive, path: '/category/feature' },
      ],
    },
  ];

  const handleNav = (path: string) => {
    navigate(buildPath(path));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-paper mobile-menu-enter overflow-y-auto">
      <div className="content-max mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <span className="font-display text-2xl tracking-tight">Zamineh</span>
          <button onClick={onClose} aria-label={t.actions.close} className="p-1">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="py-8 space-y-8">
          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-meta text-secondary mb-3">{section.title}</h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.path + item.label}
                    onClick={() => handleNav(item.path)}
                    className="block text-h2 font-display hover-underline text-start"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t-hairline py-6">
          <button
            onClick={onLanguageToggle}
            className="text-meta hover-underline py-2"
          >
            {t.actions.language}
          </button>
        </div>
      </div>
    </div>
  );
}
