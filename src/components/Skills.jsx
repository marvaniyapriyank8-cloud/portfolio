import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Code2, Server, Database, Wrench } from "lucide-react";

const ICONS = { Frontend: Code2, Backend: Server, Database: Database, Tools: Wrench };

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-fg-muted mb-3">02 — Skills</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
              Tools of the trade<span className="text-[#FF3B30]">.</span>
            </h2>
          </div>
          <p className="text-fg-secondary max-w-md">The stack I use to design, build, and ship reliable web products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, gi) => {
            const Icon = ICONS[group.category] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="bg-card border border-border p-6 hover:-translate-y-1 hover:border-[#FF3B30]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 grid place-items-center border border-border group-hover:border-[#FF3B30] transition-colors">
                      <Icon size={16} className="text-fg group-hover:text-[#FF3B30] transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-fg">{group.category}</h3>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-fg-muted">0{gi + 1}</span>
                </div>
                <ul className="space-y-4">
                  {group.items.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="text-sm text-fg">{s.name}</span>
                        <span className="font-mono text-[10px] text-fg-muted">{s.level}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-[#FF3B30]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
