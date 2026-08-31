export type Language = 'en' | 'fa';

export type LocalizedString = { en: string; fa: string };

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'pullquote' | 'image' | 'caption' | 'list';
  text?: LocalizedString;
  items?: LocalizedString[];
  src?: string;
  alt?: string;
  level?: 2 | 3;
}

export type ArticleType =
  | 'feature'
  | 'news'
  | 'opinion'
  | 'review'
  | 'preview'
  | 'podcast'
  | 'video';

export interface Article {
  slug: string;
  category: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  author: LocalizedString;
  body: { en: ContentBlock[]; fa: ContentBlock[] };
  image: string;
  date: string;
  type: ArticleType;
  duration?: string;
  episode?: string;
  city?: LocalizedString;
  venue?: LocalizedString;
  originalPublication?: LocalizedString;
  year?: string;
}

export interface Power100Entry {
  rank: number;
  name: LocalizedString;
  profession: LocalizedString;
  description: LocalizedString;
  image: string;
}
