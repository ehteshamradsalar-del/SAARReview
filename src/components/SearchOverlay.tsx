import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { pickLocalized, formatDate, toLocaleDigits } from '@/i18n/locale-utils';
import { articles } from '@/data/articles';

interface SearchOverlayProps {
  onClose: () => void;
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const buildPath = (path: string) => `/${lang}${path}`;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return articles.filter((a) => {
      const titleEn = a.title.en.toLowerCase();
      const titleFa = a.title.fa.toLowerCase();
      const excerptEn = a.excerpt.en.toLowerCase();
      const excerptFa = a.excerpt.fa.toLowerCase();
      const authorEn = a.author.en.toLowerCase();
      const authorFa = a.author.fa.toLowerCase();
      const categoryEn = a.category.en.toLowerCase();
      const categoryFa = a.category.fa.toLowerCase();
      return (
        titleEn.includes(q) ||
        titleFa.includes(q) ||
        excerptEn.includes(q) ||
        excerptFa.includes(q) ||
        authorEn.includes(q) ||
        authorFa.includes(q) ||
        categoryEn.includes(q) ||
        categoryFa.includes(q)
      );
    });
  }, [query]);

  return (
    <div className="fixed inset-0 z-[60] bg-paper search-enter overflow-y-auto">
      <div className="content-max mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <span className="text-meta text-secondary">{t.actions.search}</span>
          <button onClick={onClose} aria-label={t.actions.close} className="p-1">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="py-8">
          <div className="relative">
            <SearchIcon
              size={28}
              strokeWidth={1.5}
              className="absolute top-1/2 -translate-y-1/2 start-0 text-secondary"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search.placeholder}
              className="w-full ps-10 pe-4 py-4 text-h1 font-display bg-transparent border-b-strong focus:outline-none placeholder:text-secondary"
            />
          </div>

          {query.trim() && (
            <div className="mt-8">
              <p className="text-meta text-secondary mb-4">
                {toLocaleDigits(results.length, lang)} {t.search.results}
              </p>
              {results.length === 0 ? (
                <p className="text-body text-secondary">{t.search.noResults}</p>
              ) : (
                <div className="space-y-6">
                  {results.map((article) => (
                    <Link
                      key={article.slug}
                      to={buildPath(`/article/${article.slug}`)}
                      onClick={onClose}
                      className="flex gap-4 group"
                    >
                      <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 overflow-hidden bg-gray-light">
                        <img
                          src={article.image}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-base ease-editorial group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-meta text-secondary mb-1">
                          {pickLocalized(article.category, lang)} · {formatDate(article.date, lang)}
                        </p>
                        <h3 className="font-display text-lg leading-snug hover-underline">
                          {pickLocalized(article.title, lang)}
                        </h3>
                        <p className="text-sm text-secondary mt-1 line-clamp-2">
                          {pickLocalized(article.excerpt, lang)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
