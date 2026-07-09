import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-2 text-white">
            Alexander Churio
        </h2>
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            Desarrollador de Software Junior
        </h3>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Construyendo soluciones eficientes desde el análisis algorítmico, desarrollo gráfico, hasta el despliegue web. 
            Enfocado en el código limpio, la lógica sólida y la integración de IA para optimizar procesos.
        </p>
      
    </div> 
    </motion.div>
  );
}