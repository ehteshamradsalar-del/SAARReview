import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

interface SectionHeaderProps {
  title: string;
  viewAllPath?: string;
}

export default function SectionHeader({ title, viewAllPath }: SectionHeaderProps) {
  const { lang, t } = useLanguage();
  const buildPath = (path: string) => `/${lang}${path}`;

  return (
    <div className="flex items-end justify-between border-b-strong pb-3 mb-8">
      <h2 className="text-h2 font-display">{title}</h2>
      {viewAllPath && (
        <Link to={buildPath(viewAllPath)} className="text-meta hover-underline">
          {t.actions.viewAll}
        </Link>
      )}
    </div>
  );
}
