import { Link } from 'react-router-dom';
import { Headphones, Play } from 'lucide-react';
import type { Article } from '@/types/content';
import { useLanguage } from '@/i18n/LanguageContext';
import { pickLocalized, formatDate, formatYear, toLocaleDigits } from '@/i18n/locale-utils';

function buildPath(lang: string, path: string) {
  return `/${lang}${path}`;
}

function MetaLine({ article }: { article: Article }) {
  const { lang, t } = useLanguage();
  return (
    <p className="text-meta text-secondary">
      {pickLocalized(article.category, lang)}
      <span className="mx-2 opacity-40">·</span>
      {t.article.by} {pickLocalized(article.author, lang)}
      <span className="mx-2 opacity-40">·</span>
      {formatDate(article.date, lang)}
    </p>
  );
}

interface CardProps {
  article: Article;
}

export function FeatureCard({ article }: CardProps) {
  const { lang } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block">
      <div className="hover-img-zoom aspect-[4/3] mb-5">
        <img src={article.image} alt={pickLocalized(article.title, lang)} className="w-full h-full object-cover" />
      </div>
      <MetaLine article={article} />
      <h2 className="text-h1 font-display mt-3 hover-underline">
        {pickLocalized(article.title, lang)}
      </h2>
      <p className="text-body text-secondary mt-3 max-measure">
        {pickLocalized(article.excerpt, lang)}
      </p>
    </Link>
  );
}

export function StandardArticleCard({ article }: CardProps) {
  const { lang } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block">
      <div className="hover-img-zoom aspect-[3/2] mb-4">
        <img src={article.image} alt={pickLocalized(article.title, lang)} className="w-full h-full object-cover" />
      </div>
      <MetaLine article={article} />
      <h3 className="font-display text-2xl mt-2 leading-snug hover-underline">
        {pickLocalized(article.title, lang)}
      </h3>
      <p className="text-sm text-secondary mt-2 line-clamp-2">
        {pickLocalized(article.excerpt, lang)}
      </p>
    </Link>
  );
}

export function CompactArticleCard({ article }: CardProps) {
  const { lang } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group flex gap-4">
      <div className="hover-img-zoom w-24 h-24 flex-shrink-0">
        <img src={article.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-meta text-secondary mb-1">
          {pickLocalized(article.category, lang)}
        </p>
        <h4 className="font-display text-lg leading-tight hover-underline line-clamp-2">
          {pickLocalized(article.title, lang)}
        </h4>
        <p className="text-xs text-secondary mt-1">{formatDate(article.date, lang)}</p>
      </div>
    </Link>
  );
}

export function ImageOnlyCard({ article }: CardProps) {
  const { lang } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block">
      <div className="hover-img-zoom aspect-square">
        <img src={article.image} alt={pickLocalized(article.title, lang)} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-display text-lg mt-3 hover-underline">
        {pickLocalized(article.title, lang)}
      </h4>
    </Link>
  );
}

export function ArchiveCard({ article }: CardProps) {
  const { lang, t } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group flex items-baseline gap-6 py-5 border-b-hairline">
      <span className="font-display text-3xl text-secondary flex-shrink-0 w-16">
        {formatYear(article.date, lang)}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-xl leading-tight hover-underline">
          {pickLocalized(article.title, lang)}
        </h4>
        <p className="text-meta text-secondary mt-2">
          {t.article.by} {pickLocalized(article.author, lang)}
          {article.originalPublication && (
            <span className="mx-2 opacity-40">·</span>
          )}
          {article.originalPublication && pickLocalized(article.originalPublication, lang)}
        </p>
      </div>
      <span className="text-meta text-secondary flex-shrink-0 hidden md:block">
        {pickLocalized(article.category, lang)}
      </span>
    </Link>
  );
}

export function PodcastCard({ article }: CardProps) {
  const { lang, t } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block">
      <div className="hover-img-zoom aspect-square mb-4 relative">
        <img src={article.image} alt={pickLocalized(article.title, lang)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-base ease-editorial">
          <Headphones size={36} color="white" strokeWidth={1.5} />
        </div>
      </div>
      <p className="text-meta text-secondary mb-1">
        {t.article.episode} {toLocaleDigits(article.episode || '', lang)}
        {article.duration && <span className="mx-2 opacity-40">·</span>}
        {article.duration && toLocaleDigits(article.duration, lang)}
      </p>
      <h3 className="font-display text-xl leading-tight hover-underline">
        {pickLocalized(article.title, lang)}
      </h3>
    </Link>
  );
}

export function VideoCard({ article }: CardProps) {
  const { lang, t } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block">
      <div className="hover-img-zoom aspect-video mb-4 relative">
        <img src={article.image} alt={pickLocalized(article.title, lang)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-base ease-editorial group-hover:scale-110">
            <Play size={22} className="text-black ms-1" fill="black" strokeWidth={0} />
          </div>
        </div>
      </div>
      <p className="text-meta text-secondary mb-1">
        {pickLocalized(article.category, lang)}
        {article.duration && <span className="mx-2 opacity-40">·</span>}
        {article.duration && toLocaleDigits(article.duration, lang)}
      </p>
      <h3 className="font-display text-xl leading-tight hover-underline">
        {pickLocalized(article.title, lang)}
      </h3>
    </Link>
  );
}

export function ReviewCard({ article }: CardProps) {
  const { lang } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block">
      <div className="hover-img-zoom aspect-[16/10] mb-4">
        <img src={article.image} alt={pickLocalized(article.title, lang)} className="w-full h-full object-cover" />
      </div>
      <p className="text-meta text-secondary mb-1">
        {article.city && pickLocalized(article.city, lang)}
        {article.venue && <span className="mx-2 opacity-40">·</span>}
        {article.venue && pickLocalized(article.venue, lang)}
      </p>
      <h3 className="font-display text-2xl leading-tight hover-underline">
        {pickLocalized(article.title, lang)}
      </h3>
      <p className="text-sm text-secondary mt-2 line-clamp-2">
        {pickLocalized(article.excerpt, lang)}
      </p>
    </Link>
  );
}

export function NewsCard({ article }: CardProps) {
  const { lang } = useLanguage();
  return (
    <Link to={buildPath(lang, `/article/${article.slug}`)} className="group block py-5 border-b-hairline">
      <p className="text-meta text-secondary mb-1">{formatDate(article.date, lang)}</p>
      <h3 className="font-display text-xl leading-tight hover-underline">
        {pickLocalized(article.title, lang)}
      </h3>
      <p className="text-sm text-secondary mt-1 line-clamp-2">
        {pickLocalized(article.excerpt, lang)}
      </p>
    </Link>
  );
}
