import { motion } from "framer-motion";

export function AnimatedDivider() {
  return (
    <div className="relative w-full max-w-sm mx-auto h-px mb-2 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-800 to-transparent" />

      <motion.div
        animate={{ x: ["-200%", "200%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute w-1/2 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.8)] rounded-full"
      />
    </div>
  );
}