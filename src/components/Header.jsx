import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="p-8 border-b border-slate-800 flex justify-between items-center max-w-5xl mx-auto">
      <a href="#">
        <h1 className="text-xl font-bold tracking-tight">Mi Portafolio</h1>
      </a>
      
      <nav className="space-x-6 text-sm font-medium text-slate-400">
        <a href="#sobre-mi" className="hover:text-white transition-colors">{t('nav_about')}</a>
        <a href="#proyectos" className="hover:text-white transition-colors">{t('nav_projects')}</a>    
        <a href="#contacto" className="hover:text-white transition-colors">{t('nav_contact')}</a>
      </nav>

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
    </header>
  );
}