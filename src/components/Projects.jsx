import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-fg-muted mb-3">03 — Selected Work</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
              Recent projects<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <p className="text-fg-secondary max-w-md font-mono text-xs tracking-widest uppercase">
            {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-card border border-border overflow-hidden hover:border-[#FF3B30]/40 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-white/80">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                    className="w-9 h-9 grid place-items-center bg-black/60 backdrop-blur border border-white/10 text-white hover:bg-[#FF3B30] transition-colors">
                    <Github size={14} />
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo"
                    className="w-9 h-9 grid place-items-center bg-black/60 backdrop-blur border border-white/10 text-white hover:bg-[#FF3B30] transition-colors">
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-fg group-hover:text-[#FF3B30] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm lg:text-base text-fg-secondary leading-relaxed flex-1">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono tracking-widest uppercase border border-border rounded-full px-3 py-1 text-fg-secondary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-6">
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className="group/link text-sm font-medium text-fg flex items-center gap-1.5 hover:text-[#FF3B30] transition-colors">
                    Live Demo
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="text-sm font-medium text-fg-secondary flex items-center gap-1.5 hover:text-fg transition-colors">
                    Source <Github size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
