import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SubscribePromo() {
  const { lang, t } = useLanguage();
  const buildPath = (path: string) => `/${lang}${path}`;

  return (
    <section className="bg-inverse text-inverse py-16 md:py-22">
      <div className="content-max mx-auto px-5 md:px-7 text-center">
        <h2 className="text-h1 font-display max-w-3xl mx-auto leading-tight">
          {t.subscribePromo.title}
        </h2>
        <p className="text-body text-white/60 mt-4 max-measure mx-auto">
          {t.subscribePromo.desc}
        </p>
        <Link
          to={buildPath('/category/feature')}
          className="inline-block mt-8 text-meta border-b border-white px-1 py-2 hover:bg-white hover:text-black transition-colors duration-base ease-editorial"
        >
          {t.subscribePromo.button}
        </Link>
      </div>
    </section>
  );
}
