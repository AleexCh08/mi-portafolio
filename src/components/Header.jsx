import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-6 md:p-8 border-b border-slate-800 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <a href="#">
          <h1 className="text-xl font-bold tracking-tight">{t('header_title')}</h1>
        </a>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-400">
          <a href="#sobre-mi" className="hover:text-white transition-colors">{t('nav_about')}</a>
          <a href="#proyectos" className="hover:text-white transition-colors">{t('nav_projects')}</a>    
          <a href="#contacto" className="hover:text-white transition-colors">{t('nav_contact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 py-1.5 pr-8 cursor-pointer hover:border-slate-500 transition-colors outline-none"
            >
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇺🇸 EN</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white p-1"
            aria-label="Alternar menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 pt-6 pb-2 mt-4 border-t border-slate-800 text-sm font-medium text-slate-400">
          <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors block">{t('nav_about')}</a>
          <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors block">{t('nav_projects')}</a>    
          <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors block">{t('nav_contact')}</a>
        </nav>
      )}
    </header>
  );
}