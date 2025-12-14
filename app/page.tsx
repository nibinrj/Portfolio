import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Nibin Sellaraj. All rights reserved.</p>
      </footer>
    </main>
  );
}
