import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { pickLocalized, formatDate, toLocaleDigits } from '@/i18n/locale-utils';
import { getFeaturedArticles } from '@/data/articles';

export default function HeroCarousel() {
  const { lang, t } = useLanguage();
  const slides = getFeaturedArticles();
  const [current, setCurrent] = useState(0);
  const buildPath = (path: string) => `/${lang}${path}`;

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const slide = slides[current];
  if (!slide) return null;

  const isRtl = lang === 'fa';

  return (
    <section className="content-max mx-auto px-5 md:px-7 pt-8 md:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Image: 7/12 on desktop */}
        <div className="lg:col-span-7 order-1">
          <Link to={buildPath(`/article/${slide.slug}`)} className="group block hover-img-zoom aspect-[4/3] lg:aspect-[5/4]">
            <img
              key={current}
              src={slide.image}
              alt={pickLocalized(slide.title, lang)}
              className="w-full h-full object-cover hero-slide-enter"
            />
          </Link>
        </div>

        {/* Text: 5/12 on desktop */}
        <div className="lg:col-span-5 order-2 flex flex-col justify-center" key={current}>
          <div className="hero-slide-enter">
            <p className="text-meta text-secondary mb-4">
              {pickLocalized(slide.category, lang)}
            </p>
            <Link to={buildPath(`/article/${slide.slug}`)}>
              <h1 className="text-display font-display leading-tight hover-underline">
                {pickLocalized(slide.title, lang)}
              </h1>
            </Link>
            <p className="text-body text-secondary mt-5 max-measure">
              {pickLocalized(slide.excerpt, lang)}
            </p>
            <div className="mt-6 flex items-center gap-3 text-meta text-secondary">
              <span>{t.article.by} {pickLocalized(slide.author, lang)}</span>
              <span className="opacity-40">·</span>
              <span>{formatDate(slide.date, lang)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6 md:mt-8 pt-6 border-t-hairline">
        <div className="flex items-center gap-3">
          <button
            onClick={isRtl ? next : prev}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label={t.actions.previous}
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={isRtl ? prev : next}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label={t.actions.next}
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-meta text-secondary">
          <span className="font-display text-lg text-primary">
            {toLocaleDigits(String(current + 1).padStart(2, '0'), lang)}
          </span>
          <span className="opacity-40">/</span>
          <span>{toLocaleDigits(String(slides.length).padStart(2, '0'), lang)}</span>
        </div>
      </div>
    </section>
  );
}
