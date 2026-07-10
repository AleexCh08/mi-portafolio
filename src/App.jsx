import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-10">
        <Header />
        <main className="max-w-5xl mx-auto p-8 mt-12">
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;