import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// @ts-ignore: Missing declaration file for ThemeToggle
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";
import VisitorCounter from "./components/VisitorCounter";

function App() {
  const theme = useTheme()?.theme ?? "light";

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "light"
          ? "bg-white text-slate-900"
          : "bg-slate-950 text-white"
      }`}
    >
      {/* Glow Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="fixed top-5 right-5 z-500 mr-10">
        <ThemeToggle />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <VisitorCounter />
    </div>
  );
}

export default App;
