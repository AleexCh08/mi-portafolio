import { useRef, useState } from "react";

export function SpotlightCard({ children }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 w-full flex flex-col md:flex-row gap-8 items-center"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.12), transparent 40%)`,
        }}
      />
      <div className="z-10 w-full flex flex-col md:flex-row gap-8 items-center">
        {children}
      </div>
    </div>
  );
}