import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="mt-12 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-800 shrink-0">
          <img src="/perfil.png" alt="Alexander Churio" className="w-full h-full object-cover" />          
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 text-center">{t('about_title')}</h3>
          <p className="text-slate-300 leading-relaxed mb-4 text-justify">
            {t('about_p1')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-4 text-justify">
            {t('about_p2')}
          </p>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {['Python', 'Java', 'Kotlin','React', 'JavaScript', 'Django', 'C++', 'SQL/NoSQL'].map((skill) => (
              <span key={skill} className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a 
              href="/cv-alexander-churio.pdf" 
              download="CV_Alexander_Churio.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              {t('about_cv')}
            </a>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}