import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { toLocaleDigits } from '@/i18n/locale-utils';
import MegaMenu from '@/components/MegaMenu';
import MobileMenu from '@/components/MobileMenu';
import SearchOverlay from '@/components/SearchOverlay';

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { lang: urlLang } = useParams();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen || searchOpen || menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, searchOpen, menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setSearchOpen(false);
        setMenuOpen(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const buildPath = (path: string) => `/${lang}${path}`;

  const navItems = [
    { label: t.nav.magazine, menu: 'magazine' as const },
    { label: t.nav.experience, menu: 'experience' as const },
    { label: t.nav.collaborations, menu: 'collaborations' as const },
    { label: t.nav.about, menu: 'about' as const },
  ];

  const handleLanguageToggle = () => {
    const newPath = location.pathname.replace(`/${urlLang}`, `/${urlLang === 'en' ? 'fa' : 'en'}`);
    toggleLang();
    navigate(newPath);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-base ease-editorial ${
          scrolled
            ? 'bg-white-paper/95 backdrop-blur-sm border-b-hairline'
            : 'bg-paper border-b-transparent'
        }`}
      >
        <div className="content-max mx-auto px-5 md:px-7">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: mobile menu + nav */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-1 -ml-1"
                aria-label={t.actions.menu}
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <div
                    key={item.menu}
                    className="relative"
                    onMouseEnter={() => setMenuOpen(item.menu)}
                    onMouseLeave={() => setMenuOpen(null)}
                  >
                    <button
                      className="text-meta hover-underline py-2"
                      onClick={() => navigate(buildPath(`/category/${item.menu === 'magazine' ? 'features' : ''}`))}
                    >
                      {item.label}
                    </button>
                    {menuOpen === item.menu && <MegaMenu type={item.menu} />}
                  </div>
                ))}
              </nav>
            </div>

            {/* Center: wordmark */}
            <Link to={buildPath('')} className="absolute left-1/2 -translate-x-1/2">
              <span className="font-display text-2xl md:text-3xl tracking-tight">
                Zamineh
              </span>
            </Link>

            {/* Right: search + language */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1"
                aria-label={t.actions.search}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={handleLanguageToggle}
                className="text-meta hover-underline py-2"
              >
                {t.actions.language}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <MobileMenu
          onClose={() => setMobileOpen(false)}
          onLanguageToggle={handleLanguageToggle}
        />
      )}

      {searchOpen && (
        <SearchOverlay onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
}
