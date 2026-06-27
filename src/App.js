import { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import "./App.css";
import { portfolioData } from "./data/portfolioData";

function App() {
  useEffect(() => {
    // Dynamic browser title
    document.title = portfolioData.meta.siteTitle;

    // Smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App relative bg-bg text-fg min-h-screen antialiased">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;