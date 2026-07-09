import { motion, AnimatePresence } from "framer-motion";

export function DemoModal({ isOpen, onClose, proyecto }) {
  return (
    <AnimatePresence>
      {isOpen && proyecto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro del modal
            className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Cabecera del Modal */}
            <div className="flex justify-between items-center p-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-slate-100">
                {proyecto.titulo} <span className="text-slate-500 font-normal">- Demostración</span>
              </h3>
              <button 
                onClick={onClose} 
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            {/* Contenedor del GIF / Placeholder */}
            <div className="p-4 bg-slate-950 grow aspect-video flex justify-center items-center">
              {proyecto.demoMedia ? (
                <img 
                  src={proyecto.demoMedia} 
                  alt={`Demostración de ${proyecto.titulo}`} 
                  className="w-full h-full object-contain rounded-lg shadow-inner"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  <p className="text-lg font-medium">GIF de funcionamiento en construcción</p>
                  <p className="text-sm mt-2">Se agregará próximamente.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}