import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { name, socialLinks, navLinks, footerText } = portfolioData;
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF3B30]" />
            <span className="font-display text-lg font-semibold text-fg">
              {name}<span className="text-[#FF3B30]">.</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-fg-secondary max-w-xs">
            {footerText}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-fg-muted mb-4">Quick Links</p>
          <ul className="grid grid-cols-2 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNav(e, l.href)}
                  className="text-sm text-fg-secondary hover:text-[#FF3B30] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-fg-muted mb-4">Elsewhere</p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: socialLinks.github },
              { Icon: Linkedin, href: socialLinks.linkedin },
              { Icon: Instagram, href: socialLinks.instagram },
              { Icon: Twitter, href: socialLinks.twitter },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="w-9 h-9 grid place-items-center border border-border text-fg-secondary hover:text-[#FF3B30] hover:border-[#FF3B30] transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-fg-muted tracking-widest">
          © {year} {name.toUpperCase()} — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
