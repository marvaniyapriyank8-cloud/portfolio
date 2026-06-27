import { motion } from "framer-motion";
import { Download, Eye, FileText, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Resume = () => {
  const { resume, resumeLink, name, role } = portfolioData;

  return (
    <section id="resume" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-fg-muted mb-3">04 — Resume</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
            The full document<span className="text-[#FF3B30]">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          <div className="lg:col-span-3 bg-card border border-border p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FF3B30]/10 blur-3xl rounded-full" />
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 grid place-items-center border border-border">
                  <FileText size={16} className="text-[#FF3B30]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-muted">Resume.pdf</p>
                  <p className="font-mono text-[10px] tracking-widest text-fg-muted/70">{resume.updated}</p>
                </div>
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#FF3B30] uppercase">Public · Sharable</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-fg">{name}</h3>
            <p className="font-mono text-sm text-[#FF3B30] mt-1">{role}</p>
            <p className="mt-5 text-fg-secondary leading-relaxed">{resume.summary}</p>

            <ul className="mt-8 space-y-3">
              {resume.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-fg">
                  <CheckCircle2 size={16} className="text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 bg-card border border-border p-8 lg:p-10 flex flex-col">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-muted mb-3">// Actions</p>
            <h3 className="font-display text-2xl font-semibold text-fg">Take it with you.</h3>
            <p className="text-fg-secondary mt-3 leading-relaxed">Download the latest PDF or preview it inline. Updated regularly.</p>

            <div className="mt-auto pt-8 space-y-3">
              <a href={resumeLink} target="_blank" rel="noreferrer"
                className="w-full bg-[#FF3B30] hover:bg-[#D62828] text-white px-6 py-4 font-medium text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
                <Eye size={15} /> View Resume
              </a>
              <a href={resumeLink} download
                className="w-full border border-zinc-700 hover:border-zinc-400 text-fg px-6 py-4 font-medium text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
                <Download size={15} /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
