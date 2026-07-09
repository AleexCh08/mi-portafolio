import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function DemoModal({ isOpen, onClose, proyecto }) {
    const [mediaIndex, setMediaIndex] = useState(0);

    const handleClose = () => {
        setMediaIndex(0);
        onClose();
    };

    return (
    <AnimatePresence>
      {isOpen && proyecto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-slate-100">
                {proyecto.titulo} <span className="text-slate-500 font-normal">- Demostración</span>
              </h3>
              <button 
                onClick={handleClose} 
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <div className="p-4 bg-slate-950 grow flex flex-col justify-center items-center">
              {proyecto.demoMedia && proyecto.demoMedia.length > 0 ? (
                <div className="w-full flex flex-col items-center">
                  <video 
                      src={proyecto.demoMedia[mediaIndex]} 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-contain rounded-lg shadow-inner bg-black"
                  />

                  {proyecto.demoMedia.length > 1 && (
                    <div className="flex justify-between items-center w-full mt-4 text-slate-300">
                        <button 
                          onClick={() => setMediaIndex(mediaIndex - 1)}
                          disabled={mediaIndex === 0}
                          className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          Anterior
                        </button>
                        
                        <span className="text-sm font-medium">
                          {mediaIndex + 1} de {proyecto.demoMedia.length}
                        </span>
                        
                        <button 
                          onClick={() => setMediaIndex(mediaIndex + 1)}
                          disabled={mediaIndex === proyecto.demoMedia.length - 1}
                          className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          Siguiente
                        </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-600 aspect-video">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                    <p className="text-lg font-medium">Demostración en construcción</p>
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