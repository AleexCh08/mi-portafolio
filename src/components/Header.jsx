export function Header() {
  return (
    <header className="p-8 border-b border-slate-800 flex justify-between items-center max-w-5xl mx-auto">
      <a href="#">
        <h1 className="text-xl font-bold tracking-tight">Mi Portafolio</h1>
      </a>
      
      <nav className="space-x-6 text-sm font-medium text-slate-400">
        <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a>
        <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>    
        <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
      </nav>
    </header>
  );
}