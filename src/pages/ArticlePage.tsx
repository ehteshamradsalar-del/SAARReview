import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { pickLocalized, formatDate, toLocaleDigits } from '@/i18n/locale-utils';
import { getArticleBySlug, getRelatedArticles, getPrevNextArticles } from '@/data/articles';
import { StandardArticleCard } from '@/components/ArticleCards';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ArticlePage() {
  const { lang, t } = useLanguage();
  const { slug } = useParams();
  const navigate = useNavigate();
  const buildPath = (path: string) => `/${lang}${path}`;

  const article = slug ? getArticleBySlug(slug) : undefined;
  if (!article) return <NotFoundPage />;

  const body = article.body[lang];
  const related = getRelatedArticles(article.slug);
  const { prev, next } = getPrevNextArticles(article.slug);
  const isRtl = lang === 'fa';

  return (
    <article className="pb-22">
      {/* Header */}
      <header className="content-max mx-auto px-5 md:px-7 pt-12 md:pt-16">
        <p className="text-meta text-secondary mb-4">
          {pickLocalized(article.category, lang)}
        </p>
        <h1 className="text-display font-display max-w-5xl leading-tight">
          {pickLocalized(article.title, lang)}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-meta text-secondary">
          <span>{t.article.by} {pickLocalized(article.author, lang)}</span>
          <span className="opacity-40">·</span>
          <span>{formatDate(article.date, lang)}</span>
          {article.city && (
            <>
              <span className="opacity-40">·</span>
              <span>{pickLocalized(article.city, lang)}</span>
            </>
          )}
        </div>
      </header>

      {/* Hero image */}
      <div className="content-max mx-auto px-5 md:px-7 mt-8 md:mt-10">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={pickLocalized(article.title, lang)}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body: two-column on desktop */}
      <div className="content-max mx-auto px-5 md:px-7 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Article body */}
          <div className="lg:col-span-8 lg:col-start-1">
            <div className="max-measure space-y-6">
              {/* Excerpt as deck */}
              <p className="text-h2 font-display text-secondary leading-snug">
                {pickLocalized(article.excerpt, lang)}
              </p>

              {body.map((block, i) => {
                if (block.type === 'paragraph' && block.text) {
                  return (
                    <p key={i} className="text-body leading-relaxed">
                      {pickLocalized(block.text, lang)}
                    </p>
                  );
                }
                if (block.type === 'heading' && block.text) {
                  return (
                    <h2 key={i} className="font-display text-3xl mt-10">
                      {pickLocalized(block.text, lang)}
                    </h2>
                  );
                }
                if (block.type === 'pullquote' && block.text) {
                  return (
                    <blockquote
                      key={i}
                      className="font-display text-3xl md:text-4xl leading-snug py-6 border-y-strong my-8"
                    >
                      {pickLocalized(block.text, lang)}
                    </blockquote>
                  );
                }
                if (block.type === 'image' && block.src) {
                  return (
                    <figure key={i} className="-mx-5 md:mx-0 my-8">
                      <img
                        src={block.src}
                        alt={block.alt || ''}
                        className="w-full"
                      />
                    </figure>
                  );
                }
                if (block.type === 'caption' && block.text) {
                  return (
                    <figcaption
                      key={i}
                      className="text-meta text-secondary -mt-4 mb-4"
                    >
                      {pickLocalized(block.text, lang)}
                    </figcaption>
                  );
                }
                return null;
              })}
            </div>

            {/* Prev/Next navigation */}
            <nav className="flex justify-between gap-4 mt-16 pt-8 border-t-strong">
              {prev ? (
                <Link
                  to={buildPath(`/article/${prev.slug}`)}
                  className="group flex items-center gap-3 max-w-xs"
                >
                  {isRtl ? <ArrowRight size={18} strokeWidth={1.5} className="flex-shrink-0" /> : <ArrowLeft size={18} strokeWidth={1.5} className="flex-shrink-0" />}
                  <div>
                    <p className="text-meta text-secondary mb-1">{t.actions.previous}</p>
                    <p className="font-display text-lg leading-tight hover-underline line-clamp-2">
                      {pickLocalized(prev.title, lang)}
                    </p>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  to={buildPath(`/article/${next.slug}`)}
                  className="group flex items-center gap-3 max-w-xs text-end"
                >
                  <div>
                    <p className="text-meta text-secondary mb-1">{t.actions.next}</p>
                    <p className="font-display text-lg leading-tight hover-underline line-clamp-2">
                      {pickLocalized(next.title, lang)}
                    </p>
                  </div>
                  {isRtl ? <ArrowLeft size={18} strokeWidth={1.5} className="flex-shrink-0" /> : <ArrowRight size={18} strokeWidth={1.5} className="flex-shrink-0" />}
                </Link>
              ) : <div />}
            </nav>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28 space-y-10">
              {/* About author */}
              <div className="border-l-hairline ps-5">
                <h3 className="text-meta text-secondary mb-2">{t.article.aboutAuthor}</h3>
                <p className="font-display text-xl">{pickLocalized(article.author, lang)}</p>
              </div>

              {/* Share */}
              <div className="border-l-hairline ps-5">
                <h3 className="text-meta text-secondary mb-2">{t.article.shareArticle}</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-sm hover-underline">Twitter</a>
                  <a href="#" className="text-sm hover-underline">Facebook</a>
                  <a href="#" className="text-sm hover-underline">Email</a>
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-meta text-secondary mb-4 border-b-strong pb-2">
                    {t.article.relatedArticles}
                  </h3>
                  <div className="space-y-6">
                    {related.map((a) => (
                      <StandardArticleCard key={a.slug} article={a} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
