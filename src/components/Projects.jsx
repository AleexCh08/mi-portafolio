import { motion } from "framer-motion";
import { useState } from "react";
import { DemoModal } from "./DemoModal";
import { useLanguage } from "../context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDemo, setActiveDemo] = useState(null);

  const proyectos = [
    {
      id: 1,
      titulo: t('p1_title'),
      status: t('status_ready'),
      descripcion: t('p1_desc'),
      tecnologias: ["React", "Tailwind CSS", "Vite", "PWA"],
      repo: "https://github.com/AleexCh08/rey-de-diamantes",
      demo: "https://rey-de-diamantes.netlify.app/",
      demoMedia: null
    },
    {
      id: 2,
      titulo: "OBJ Viewer",
      status: t('status_ready'),
      descripcion: t('p2_desc'),
      tecnologias: ["C++", "OpenGL", "ImGui", "GLFW/GLAD"],
      repo: "https://github.com/AleexCh08/obj-viewer",
      demo: "#",
      demoMedia: [
          "/demos/obj-viewer-1.mp4",
          "/demos/obj-viewer-2.mp4",
          "/demos/obj-viewer-3.mp4"
      ]
    },
    {
      id: 3,
      titulo: t('p3_title'),
      status: t('status_ready'),
      descripcion: t('p3_desc'),
      tecnologias: ["Python", "Django", "HTML/CSS/JS", "WebScraping"],
      repo: "https://github.com/AleexCh08/loteria-felmar-web",
      demo: "https://aleexch.pythonanywhere.com",
      demoMedia: null
    },
    {
      id: 4,
      titulo: "PhotoLab Pro",
      status: t('status_ready'),
      descripcion: t('p4_desc'),
      tecnologias: ["Kotlin", "JavaFX"],
      repo: "https://github.com/AleexCh08/photolab-pro",
      demo: "#",
      demoMedia: [
          "/demos/photo-lab-1.mp4",
          "/demos/photo-lab-2.mp4",
          "/demos/photo-lab-3.mp4"
      ]
    },
    {
      id: 5,
      titulo: "Dredge Clone",
      status: t('status_dev'),
      descripcion: t('p5_desc'),
      tecnologias: ["C++", "Raylib", "GLSL"],
      repo: "https://github.com/AleexCh08/dredge-clone",
      demo: "#",
      demoMedia: [
          "/demos/dredge-clone-1.mp4",
          "/demos/dredge-clone-2.mp4",
          "/demos/dredge-clone-3.mp4"
      ]
    }
  ];

  const nextCard = () => {
    if (currentIndex < proyectos.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section id="proyectos" className="mt-12 scroll-mt-12">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4 text-center"
      >
        {t('projects_title')}
      </motion.h3>

      <div 
        className="relative w-full max-w-5xl mx-auto h-110 md:h-105 flex justify-center items-center overflow-hidden" 
        style={{ perspective: "1200px" }}
      >
        {proyectos.map((proyecto, index) => {
          const offset = index - currentIndex;
          
          return (
            <motion.div 
              key={proyecto.id}
              initial={false}
              animate={{ 
                x: offset === 0 ? "0%" : offset === 1 ? "70%" : offset === -1 ? "-70%" : offset > 1 ? "150%" : "-150%",
                scale: offset === 0 ? 1 : 0.85,
                rotateY: offset === 0 ? 0 : offset === 1 ? -25 : offset === -1 ? 25 : 0,
                opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.4 : 0,
                zIndex: offset === 0 ? 10 : 5
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={`absolute w-[90%] sm:w-100 md:w-112.5 rounded-xl flex flex-col h-fit transition-all overflow-hidden ${
                index !== currentIndex 
                  ? "pointer-events-none shadow-2xl bg-slate-800" 
                  : "cursor-grab active:cursor-grabbing hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] shadow-2xl bg-slate-800"
              }`}
              // Este padding de 1px es la clave: expone un pixel de la capa de fondo (donde gira la luz)
              style={{ padding: "1px" }}
              drag={index === currentIndex ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -50) nextCard();
                if (offset.x > 50) prevCard();
              }}
            >
              {/* Efecto de Borde Animado (Solo en la tarjeta central activa) */}
              {index === currentIndex && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_60%,rgba(52,211,153,1)_80%,rgba(59,130,246,1)_100%)] z-0 origin-center"
                />
              )}

              {/* Contenedor del contenido interno (Fondo oscuro que tapa el centro) */}
              <div className="relative z-10 bg-slate-900 rounded-[10px] p-6 flex flex-col h-full w-full">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-xl font-bold">{proyecto.titulo}</h4>
                    
                    {proyecto.status && (
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md whitespace-nowrap mt-1 border ${
                            (['Listo', 'Completed'].includes(proyecto.status)) 
                            ? 'bg-emerald-900/30 text-emerald-400 border-emerald-700/50' 
                            : 'bg-amber-900/30 text-amber-400 border-amber-700/50'
                        }`}>
                            {proyecto.status}
                        </span>
                    )}
                  </div>
                  <p className="text-slate-400 mb-4 text-justify">{proyecto.descripcion}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 self-center-safe">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span key={i} className="bg-slate-800 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 self-center-safe">
                    <a 
                      href={proyecto.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium border border-slate-700 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors text-center"
                    >
                      {t('projects_btn_code')}
                    </a>
                    {proyecto.demo === "#" ? (
                      <button 
                        onClick={() => setActiveDemo(proyecto)}
                        className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex-1 text-center cursor-pointer"
                      >
                        {t('projects_btn_demo')}
                      </button>
                    ) : (
                      <a 
                        href={proyecto.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex-1 text-center"
                      >
                        {t('projects_btn_web')}
                      </a>
                    )}
                  </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-4 mt-3">
        <button 
          onClick={prevCard} 
          disabled={currentIndex === 0}
          className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-lg"
          aria-label="Proyecto anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex gap-3">
          {proyectos.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-slate-700 hover:bg-slate-600'}`}
              aria-label={`Ir al proyecto ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextCard} 
          disabled={currentIndex === proyectos.length - 1}
          className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-lg"
          aria-label="Siguiente proyecto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm">
          {t('projects_more_question')} <a href="https://github.com/AleexCh08" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4 transition-colors">{t('projects_more_link')}</a> {t('projects_more_text')}
        </p>
      </div>

      <DemoModal 
        isOpen={!!activeDemo} 
        onClose={() => setActiveDemo(null)} 
        proyecto={activeDemo} 
      />
    </section>
  );
}