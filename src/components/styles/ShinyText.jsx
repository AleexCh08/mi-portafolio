import { motion } from "framer-motion";

export function ShinyText({ children }) {
  return (
    <motion.span
      className="bg-[linear-gradient(110deg,#94a3b8,45%,#ffffff,55%,#94a3b8)] bg-size-[200%_auto] bg-clip-text text-transparent"
      animate={{ backgroundPosition: ["-100% center", "200% center"] }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
} 