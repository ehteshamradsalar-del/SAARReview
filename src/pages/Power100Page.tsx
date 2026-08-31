import { useLanguage } from '@/i18n/LanguageContext';
import { pickLocalized, toLocaleDigits } from '@/i18n/locale-utils';
import { power100 } from '@/data/power100';

export default function Power100Page() {
  const { lang, t } = useLanguage();

  return (
    <div className="pb-22">
      <header className="content-max mx-auto px-5 md:px-7 pt-12 md:pt-16">
        <h1 className="text-display font-display">{t.power100.title}</h1>
        <p className="text-body text-secondary mt-4 max-measure">
          {t.power100.subtitle}
        </p>
      </header>

      <section className="content-max mx-auto px-5 md:px-7 mt-16">
        <div className="border-t-strong">
          {power100.map((entry) => (
            <div
              key={entry.rank}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-b-hairline items-start group"
            >
              {/* Rank */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-4xl md:text-6xl leading-none text-primary">
                  {toLocaleDigits(String(entry.rank).padStart(2, '0'), lang)}
                </span>
              </div>

              {/* Portrait */}
              <div className="col-span-3 md:col-span-2">
                <div className="hover-img-zoom aspect-square">
                  <img
                    src={entry.image}
                    alt={pickLocalized(entry.name, lang)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-slow ease-editorial"
                  />
                </div>
              </div>

              {/* Name + profession */}
              <div className="col-span-7 md:col-span-3">
                <h2 className="font-display text-2xl md:text-3xl leading-tight">
                  {pickLocalized(entry.name, lang)}
                </h2>
                <p className="text-meta text-secondary mt-2">
                  {pickLocalized(entry.profession, lang)}
                </p>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-6">
                <p className="text-body text-secondary leading-relaxed">
                  {pickLocalized(entry.description, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
