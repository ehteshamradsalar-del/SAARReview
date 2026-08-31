import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { pickLocalized } from '@/i18n/locale-utils';
import { articles } from '@/data/articles';
import SectionHeader from '@/components/SectionHeader';
import {
  FeatureCard,
  StandardArticleCard,
  NewsCard,
  ReviewCard,
  PodcastCard,
  VideoCard,
  ArchiveCard,
} from '@/components/ArticleCards';
import NotFoundPage from '@/pages/NotFoundPage';

const CATEGORY_MAP: Record<string, string> = {
  feature: 'feature',
  news: 'news',
  opinion: 'opinion',
  review: 'review',
  preview: 'preview',
  podcast: 'podcast',
  video: 'video',
};

const PAGE_SIZE = 6;

export default function CategoryPage() {
  const { lang, t } = useLanguage();
  const { category } = useParams();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const type = category ? CATEGORY_MAP[category] : undefined;
  if (!type) return <NotFoundPage />;

  const filtered = articles.filter((a) => a.type === type);
  if (filtered.length === 0) return <NotFoundPage />;

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const visible = rest.slice(0, visibleCount);
  const hasMore = rest.length > visibleCount;

  const categoryLabel = pickLocalized(featured.category, lang);

  return (
    <div className="pb-22">
      {/* Category header */}
      <header className="content-max mx-auto px-5 md:px-7 pt-12 md:pt-16">
        <h1 className="text-display font-display">{categoryLabel}</h1>
        <p className="text-body text-secondary mt-4 max-measure">
          {t.category.intro} {categoryLabel.toLowerCase()}.
        </p>
      </header>

      {/* Featured article */}
      <section className="content-max mx-auto px-5 md:px-7 mt-12">
        <div className="border-b-strong pb-8 mb-8">
          <FeatureCard article={featured} />
        </div>
      </section>

      {/* Grid */}
      <section className="content-max mx-auto px-5 md:px-7">
        <SectionHeader title={`${t.category.latestIn} ${categoryLabel}`} />
        {type === 'news' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {visible.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        ) : type === 'review' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {visible.map((a) => (
              <ReviewCard key={a.slug} article={a} />
            ))}
          </div>
        ) : type === 'podcast' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {visible.map((a) => (
              <PodcastCard key={a.slug} article={a} />
            ))}
          </div>
        ) : type === 'video' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {visible.map((a) => (
              <VideoCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {visible.map((a) => (
              <StandardArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="text-meta border-b-strong pb-1 hover:opacity-60 transition-opacity"
            >
              {t.actions.loadMore}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
