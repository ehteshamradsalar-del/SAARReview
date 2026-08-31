import HeroCarousel from '@/components/HeroCarousel';
import SectionHeader from '@/components/SectionHeader';
import SubscribePromo from '@/components/SubscribePromo';
import AdPlaceholder from '@/components/AdPlaceholder';
import {
  FeatureCard,
  StandardArticleCard,
  CompactArticleCard,
  ImageOnlyCard,
  NewsCard,
  ReviewCard,
  PodcastCard,
  VideoCard,
  ArchiveCard,
} from '@/components/ArticleCards';
import { useLanguage } from '@/i18n/LanguageContext';
import { articles } from '@/data/articles';

export default function HomePage() {
  const { lang, t } = useLanguage();

  const features = articles.filter((a) => a.type === 'feature');
  const news = articles.filter((a) => a.type === 'news');
  const reviews = articles.filter((a) => a.type === 'review');
  const opinions = articles.filter((a) => a.type === 'opinion');
  const previews = articles.filter((a) => a.type === 'preview');
  const podcasts = articles.filter((a) => a.type === 'podcast');
  const videos = articles.filter((a) => a.type === 'video');
  const archive = articles.filter((a) => a.originalPublication);

  return (
    <div className="pb-22">
      <HeroCarousel />

      {/* Latest: asymmetric grid */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <SectionHeader title={t.sections.latest} viewAllPath="/category/feature" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Large feature */}
          {features[1] && (
            <div className="lg:col-span-7">
              <FeatureCard article={features[1]} />
            </div>
          )}
          {/* Right column: compact items */}
          <div className="lg:col-span-5 space-y-6">
            {news.slice(0, 2).map((a) => (
              <CompactArticleCard key={a.slug} article={a} />
            ))}
            {opinions[0] && <CompactArticleCard article={opinions[0]} />}
          </div>
        </div>
      </section>

      <div className="content-max mx-auto px-5 md:px-7">
        <AdPlaceholder />
      </div>

      {/* Reviews: larger imagery */}
      <section className="content-max mx-auto px-5 md:px-7">
        <SectionHeader title={t.nav.reviews} viewAllPath="/category/review" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((a) => (
            <ReviewCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Opinion: text-forward layout */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <SectionHeader title={t.nav.opinion} viewAllPath="/category/opinion" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {opinions.map((a) => (
            <StandardArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Subscribe promo */}
      <div className="mt-22">
        <SubscribePromo />
      </div>

      {/* Features: mixed grid */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <SectionHeader title={t.nav.features} viewAllPath="/category/feature" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.slice(0, 2).map((a) => (
            <StandardArticleCard key={a.slug} article={a} />
          ))}
          {previews.slice(0, 2).map((a) => (
            <StandardArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* News: dense newspaper list */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <SectionHeader title={t.nav.news} viewAllPath="/category/news" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {news.map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <div className="content-max mx-auto px-5 md:px-7">
        <AdPlaceholder />
      </div>

      {/* Podcast + Video side by side */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <SectionHeader title={t.nav.podcast} viewAllPath="/category/podcast" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {podcasts.map((a) => (
                <PodcastCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title={t.nav.video} viewAllPath="/category/video" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((a) => (
                <VideoCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive: year as visual device */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <SectionHeader title={t.nav.archive} viewAllPath="/category/feature" />
        <div>
          {archive.map((a) => (
            <ArchiveCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Image-only blocks */}
      <section className="content-max mx-auto px-5 md:px-7 mt-22">
        <SectionHeader title={t.sections.editorPicks} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {articles.slice(0, 4).map((a) => (
            <ImageOnlyCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
