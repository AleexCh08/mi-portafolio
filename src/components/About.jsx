import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre-mi" className="mt-24 scroll-mt-24">
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
          <h3 className="text-3xl font-bold mb-4">Sobre Mí</h3>
          <p className="text-slate-300 leading-relaxed mb-4 text-justify">
            Soy estudiante del último año de la Licenciatura en Computación en la UCV y desarrollador de Software Junior. Me especializo en traducir requerimientos lógicos y teóricos en aplicaciones funcionales. Manejo el ciclo completo de desarrollo, trabajando con ecosistemas modernos (React) y robustos (Python/Django, Java, C++).
          </p>
          <p className="text-slate-300 leading-relaxed mb-4 text-justify">
            Tengo un enfoque fuerte en la resolución de problemas y el análisis de algoritmos. Integro activamente herramientas de Inteligencia Artificial en mi flujo de trabajo para acelerar el debugging, refactorizar código y optimizar recursos, garantizando entregas precisas.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Python', 'Java', 'Kotlin','React', 'JavaScript', 'Django', 'C++', 'SQL/NoSQL'].map((skill) => (
              <span key={skill} className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}