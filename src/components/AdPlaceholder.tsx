import { useLanguage } from '@/i18n/LanguageContext';

export default function AdPlaceholder() {
  const { t } = useLanguage();
  return (
    <div className="py-8 text-center">
      <div className="border-y-hairline py-6">
        <p className="text-meta text-secondary opacity-50">{t.ads.advertisement}</p>
      </div>
    </div>
  );
}
