import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { AuroraBackground } from "./styles/AuroraBackground";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-10"
    >
    <AuroraBackground />
      <div className="text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-2 text-white">
            Alexander Churio
        </h2>
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            {t('hero_role')}
        </h3>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            {t('hero_description')}
        </p>   
      </div> 
    </motion.div>
  );
}