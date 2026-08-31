import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Layout() {
  const { lang, setLang } = useLanguage();
  const { lang: urlLang } = useParams();
  const navigate = useNavigate();
  const location = window.location;

  useEffect(() => {
    if (urlLang === 'en' || urlLang === 'fa') {
      if (urlLang !== lang) setLang(urlLang);
    }
  }, [urlLang, lang, setLang]);

  useEffect(() => {
    if (!urlLang || (urlLang !== 'en' && urlLang !== 'fa')) {
      navigate('/en', { replace: true });
    }
  }, [urlLang, navigate]);

  if (!urlLang || (urlLang !== 'en' && urlLang !== 'fa')) return null;

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
