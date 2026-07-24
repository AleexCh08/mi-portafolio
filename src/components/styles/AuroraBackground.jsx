import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.3], 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full blur-3xl -translate-x-1/4"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.3], 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 md:w-80 md:h-80 bg-emerald-500 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"
      />
    </div>
  );
}