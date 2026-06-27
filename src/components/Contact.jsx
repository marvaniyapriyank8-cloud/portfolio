import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { contactInfo, socialLinks, contactHeading } = portfolioData;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-fg-muted mb-3">05 — Contact</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-fg leading-[0.95]">
              {contactHeading.split(" ")[0]}
<br />
{contactHeading.split(" ").slice(1).join(" ")}
<span className="text-[#FF3B30]">.</span>
            </h2>
            <p className="mt-6 text-fg-secondary max-w-md leading-relaxed">
              Open to internships, freelance work, and conversations about interesting problems.
            </p>

            <div className="mt-12 space-y-5">
              <InfoItem Icon={Mail} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <InfoItem Icon={Phone} label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} />
              <InfoItem Icon={MapPin} label="Location" value={contactInfo.location} />
            </div>

            <div className="mt-12 pt-8 border-t border-border flex items-center gap-5">
              <SocialBtn Icon={Github} href={socialLinks.github} />
              <SocialBtn Icon={Linkedin} href={socialLinks.linkedin} />
              <SocialBtn Icon={Instagram} href={socialLinks.instagram} />
              <SocialBtn Icon={Twitter} href={socialLinks.twitter} />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="relative bg-card border border-border p-8 lg:p-12 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#FF3B30]/20 blur-3xl rounded-full" />
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-muted mb-8">// Send a message</p>

            <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            <Field label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project…" textarea />

            <button type="submit"
              className="mt-8 group w-full bg-[#FF3B30] hover:bg-[#D62828] text-white px-7 py-4 font-medium text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
              Send Message
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ Icon, label, value, href }) => {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 grid place-items-center border border-border group-hover:border-[#FF3B30] transition-colors">
        <Icon size={15} className="text-fg group-hover:text-[#FF3B30] transition-colors" />
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-fg-muted">{label}</p>
        <p className="text-fg group-hover:text-[#FF3B30] transition-colors">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>;
};

const SocialBtn = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noreferrer"
    className="w-10 h-10 grid place-items-center border border-border text-fg-secondary hover:text-[#FF3B30] hover:border-[#FF3B30] transition-colors">
    <Icon size={15} />
  </a>
);

const Field = ({ label, name, value, onChange, placeholder, type = "text", textarea }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block font-mono text-[10px] tracking-[0.2em] uppercase text-fg-muted mb-2">
      {label}
    </label>
    {textarea ? (
      <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} rows={4} required
        className="w-full bg-transparent border-b border-border focus:border-[#FF3B30] focus:outline-none py-3 text-fg placeholder:text-fg-muted/70 transition-colors resize-none" />
    ) : (
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required
        className="w-full bg-transparent border-b border-border focus:border-[#FF3B30] focus:outline-none py-3 text-fg placeholder:text-fg-muted/70 transition-colors" />
    )}
  </div>
);

export default Contact;
