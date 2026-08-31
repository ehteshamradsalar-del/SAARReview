import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

interface MegaMenuProps {
  type: 'magazine' | 'experience' | 'collaborations' | 'about';
}

export default function MegaMenu({ type }: MegaMenuProps) {
  const { lang, t } = useLanguage();
  const buildPath = (path: string) => `/${lang}${path}`;

  const sections: Record<MegaMenuProps['type'], { label: string; path: string }[]> = {
    magazine: [
      { label: t.nav.features, path: '/category/feature' },
      { label: t.nav.reviews, path: '/category/review' },
      { label: t.nav.opinion, path: '/category/opinion' },
      { label: t.nav.news, path: '/category/news' },
      { label: t.nav.previews, path: '/category/preview' },
      { label: t.nav.archive, path: '/category/feature' },
    ],
    experience: [
      { label: t.nav.podcast, path: '/category/podcast' },
      { label: t.nav.video, path: '/category/video' },
      { label: t.nav.power100, path: '/power-100' },
    ],
    collaborations: [
      { label: t.nav.shop, path: '/category/feature' },
      { label: t.nav.subscribe, path: '/category/feature' },
    ],
    about: [
      { label: t.nav.about, path: '/category/feature' },
      { label: t.nav.archive, path: '/category/feature' },
    ],
  };

  const intros: Record<MegaMenuProps['type'], string> = {
    magazine: t.mega.magazineIntro,
    experience: t.mega.experienceIntro,
    collaborations: t.mega.collaborationsIntro,
    about: t.mega.aboutIntro,
  };

  return (
    <div className="absolute top-full left-0 pt-2 mega-menu-enter" style={{ minWidth: '320px' }}>
      <div className="bg-white-paper border-hairline shadow-sm">
        <div className="p-6 max-w-sm">
          <p className="text-sm text-secondary leading-relaxed mb-4 max-measure">
            {intros[type]}
          </p>
          <div className="space-y-1">
            {sections[type].map((item) => (
              <Link
                key={item.path + item.label}
                to={buildPath(item.path)}
                className="block text-body hover-underline py-1.5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
