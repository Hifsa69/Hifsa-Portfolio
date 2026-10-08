import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="bg-slate-950 text-white ai-grid overflow-x-hidden">
        <Background />
        <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;