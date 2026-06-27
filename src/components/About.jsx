import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Target, GraduationCap } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const About = () => {
  const { bio, education, careerGoal } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div {...fade} className="mb-14">
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-fg-muted mb-3">01 — About</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
            Engineer with a designer's eye<span className="text-[#FF3B30]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div {...fade} className="lg:col-span-8 bg-card border border-border p-8 lg:p-12">
            <p className="text-fg-muted font-mono text-xs tracking-[0.2em] uppercase mb-6">// Personal Introduction</p>
            <p className="text-xl sm:text-2xl leading-relaxed text-fg-secondary">{bio}</p>
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat label="Projects Completed" value={`${portfolioData.projects.length}+`} />
<Stat
  label="Tech Expertise"
  value={`${portfolioData.skills.reduce(
    (total, category) => total + category.items.length,
    0
  )}+`}
/>
<Stat label="Current Focus" value="Full Stack"  />
<Stat label="Primary Stack" value={portfolioData.role.split(" ")[0]} />
            </div>
          </motion.div>

          <motion.div {...fade} className="lg:col-span-4 bg-card border border-border p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FF3B30]/10 blur-3xl rounded-full" />
            <div className="flex items-center gap-2 mb-4">
              <Target size={14} className="text-[#FF3B30]" />
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-fg-muted">Career Goal</p>
            </div>
            <p className="text-lg leading-relaxed text-fg">{careerGoal}</p>
          </motion.div>

          <motion.div {...fade} className="lg:col-span-12 bg-card border border-border p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={16} className="text-[#FF3B30]" />
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-fg-muted">Education & Experience</p>
            </div>
            <div className="relative border-l border-border ml-2">
              {education.map((item, i) => (
                <div key={i} className="pl-8 pb-10 last:pb-0 relative">
                  <span className="absolute -left-[7px] top-1 w-3 h-3 bg-[#FF3B30]" style={{ boxShadow: '0 0 0 4px rgb(var(--bg))' }} />
                  <p className="font-mono text-xs tracking-widest text-fg-muted mb-1">{item.year}</p>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-fg">{item.title}</h3>
                  <p className="text-fg-secondary mt-1">{item.org}</p>
                  <p className="text-sm text-fg-muted mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <p className="font-display text-3xl font-bold text-fg">{value}</p>
    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-muted mt-1">{label}</p>
  </div>
);

export default About;
