import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Instagram, ArrowUpRight, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const scrollTo = (sel) => {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const {
  name,
  tagline,
  typewriterRoles,
  profileImage,
  socialLinks,
  resumeLink,
  heroButtons,
} = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#FF3B30]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B30]" />
            </span>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-fg-muted">
              {portfolioData.availability}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-fg leading-[1.02]">
            {name.split(" ")[0]}
            <br />
            <span className="text-fg-secondary">{name.split(" ").slice(1).join(" ")}</span>
            <span className="text-[#FF3B30]">.</span>
          </h1>

          <p className="mt-6 font-mono text-sm sm:text-base text-[#FF3B30] h-6">
            ./
            <Typewriter
              words={typewriterRoles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="mt-8 max-w-xl text-base lg:text-lg text-fg-secondary leading-relaxed">
            {tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("#projects")}
              className="group bg-[#FF3B30] hover:bg-[#D62828] text-white px-7 py-4 font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              {heroButtons.primary}
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="border border-zinc-700 hover:border-zinc-400 text-fg px-7 py-4 font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              <Download size={15} />
              {heroButtons.secondary}
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-4 text-sm font-medium tracking-wide text-fg-secondary hover:text-fg transition-colors"
            >
              {heroButtons.tertiary} →
            </button>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-fg-muted hover:text-[#FF3B30] transition-colors"><Github size={20} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-fg-muted hover:text-[#FF3B30] transition-colors"><Linkedin size={20} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-fg-muted hover:text-[#FF3B30] transition-colors"><Instagram size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-1 bg-[#FF3B30]/30 blur-3xl -z-10" />
            <div className="relative h-full w-full overflow-hidden border border-zinc-800 group">
              <img
                src={profileImage}
                alt={name}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400">
                <span>ID — 001</span>
                <span className="text-[#FF3B30]">● ONLINE</span>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 hidden md:block bg-[#09090B] border border-zinc-800 px-3 py-2 font-mono text-[10px] tracking-widest uppercase text-zinc-400"
            >
              MERN · 2026
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-16 hidden md:block bg-[#09090B] border border-zinc-800 px-3 py-2 font-mono text-[10px] tracking-widest uppercase text-zinc-400"
            >
              v.0.1 — STUDIO
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
