import { motion } from "framer-motion";

const proyectos = [
  {
    id: 1,
    titulo: "Rey de Diamantes: Concurso de Belleza",
    status: "Listo",
    descripcion: "Una aplicación web progresiva que recrea el juego lógico 'Concurso de Belleza'. Diseñada bajo un enfoque mobile-first, garantiza una experiencia inmersiva mediante animaciones fluidas y un motor de audio centralizado.",
    tecnologias: ["React", "Tailwind CSS", "Vite", "PWA"],
    repo: "https://github.com/AleexCh08/rey-de-diamantes",
    demo: "https://rey-de-diamantes.netlify.app/"
  },
  {
    id: 2,
    titulo: "OBJ Viewer",
    status: "Listo",
    descripcion: "Visor de modelos 3D interactivo desarrollado en C++ moderno. Este proyecto permite cargar, visualizar y manipular archivos de objetos 3D (.obj) utilizando una interfaz gráfica en tiempo real.",
    tecnologias: ["C++", "OpenGL", "ImGui", "GLFW/GLAD"],
    repo: "https://github.com/AleexCh08/obj-viewer",
    demo: "#"
  },
  {
    id: 3,
    titulo: "Gestión de Loterías",
    status: "Listo",
    descripcion: "Plataforma digital desarrollada para modernizar y automatizar los procesos operativos de la agencia física Lotería Felmar C.A. Gestiona la compra digital de tickets, la sincronización automática de resultados mediante Web Scraping y un sistema de notificaciones asíncronas para ganadores.",
    tecnologias: ["Python", "Django", "HTML/CSS/JS", "WebScraping"],
    repo: "https://github.com/AleexCh08/loteria-felmar-web",
    demo: "https://aleexch.pythonanywhere.com"
  },
  {
    id: 4,
    titulo: "PhotoLab Pro",
    status: "Listo",
    descripcion: "Aplicación de escritorio desarrollada en Kotlin y JavaFX enfocada en el Procesamiento Digital de Imágenes (PDI). Permite cargar, editar, aplicar transformaciones matemáticas, analizar las propiedades de los píxeles y exportar los resultados.",
    tecnologias: ["Kotlin", "JavaFX"],
    repo: "https://github.com/AleexCh08/photolab-pro",
    demo: "#"
  },
  {
    id: 5,
    titulo: "Dredge Clone",
    status: "En desarrollo",
    descripcion: "Un juego de pesca y supervivencia con un fuerte componente de horror psicológico y gestión de recursos. El juego simula físicas marinas, iluminación dinámica y un sistema de cordura que altera el mundo que rodea al jugador. Clon del juego Indie DREDGE.",
    tecnologias: ["C++", "Raylib", "GLSL"],
    repo: "https://github.com/AleexCh08/dredge-clone",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="mt-12 scroll-mt-24">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4"
      >
        Trabajos Destacados
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectos.map((proyecto, index) => (
          <motion.div 
            key={proyecto.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-colors flex flex-col h-full"
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <h4 className="text-xl font-bold">{proyecto.titulo}</h4>
              
            {proyecto.status && (
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md whitespace-nowrap mt-1 border ${
                    proyecto.status === 'Listo' 
                    ? 'bg-emerald-900/30 text-emerald-400 border-emerald-700/50' 
                    : 'bg-amber-900/30 text-amber-400 border-amber-700/50'
                }`}>
                    {proyecto.status}
                </span>
            )}
            </div>
            <p className="text-slate-400 mb-6 grow text-justify">{proyecto.descripcion}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="bg-slate-800 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <a 
                href={proyecto.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium border border-slate-700 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors"
              >
                Ver Código
              </a>
              {proyecto.demo !== "#" && (
                <a 
                  href={proyecto.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Demo en Vivo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}