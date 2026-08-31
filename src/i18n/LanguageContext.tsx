import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { Language } from '@/types/content';
import { dictionary, type Dictionary } from '@/i18n/dictionary';
import {
  getStoredLanguage,
  storeLanguage,
  applyDocumentLanguage,
  getOppositeLanguage,
} from '@/i18n/language-utils';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  oppositeLang: Language;
  t: Dictionary;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = getStoredLanguage();
    setLangState(stored);
    applyDocumentLanguage(stored);
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    storeLanguage(newLang);
    applyDocumentLanguage(newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = getOppositeLanguage(prev);
      storeLanguage(next);
      applyDocumentLanguage(next);
      return next;
    });
  }, []);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    oppositeLang: getOppositeLanguage(lang),
    t: dictionary[lang],
    dir: lang === 'fa' ? 'rtl' : 'ltr',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
