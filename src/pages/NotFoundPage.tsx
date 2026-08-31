import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

export default function NotFoundPage() {
  const { lang } = useLanguage();
  const buildPath = (path: string) => `/${lang}${path}`;

  return (
    <div className="content-max mx-auto px-5 md:px-7 py-22 text-center">
      <h1 className="text-display font-display">404</h1>
      <p className="text-body text-secondary mt-4">Page not found</p>
      <Link to={buildPath('')} className="inline-block mt-8 text-meta hover-underline">
        {lang === 'en' ? 'Back to home' : 'بازگشت به خانه'}
      </Link>
    </div>
  );
}
