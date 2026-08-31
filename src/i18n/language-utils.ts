import type { Language } from '@/types/content';

const STORAGE_KEY = 'zamineh-language';

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'fa') return stored;
  return 'en';
}

export function storeLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }
}

export function applyDocumentLanguage(lang: Language): void {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
}

export function getOppositeLanguage(lang: Language): Language {
  return lang === 'en' ? 'fa' : 'en';
}

export function getLanguageLabel(lang: Language, asLabel = false): string {
  if (asLabel) {
    return lang === 'en' ? 'English' : 'فارسی';
  }
  return lang === 'en' ? 'EN' : 'فارسی';
}
