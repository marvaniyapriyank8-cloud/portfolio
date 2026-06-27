import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = portfolioData.navLinks.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050505]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="flex items-center gap-2 group"
        >
          <span className="w-2 h-2 bg-[#FF3B30] block group-hover:scale-150 transition-transform" />
          <span className="font-display text-base font-semibold tracking-tight text-fg">
            {portfolioData.shortName}<span className="text-[#FF3B30]">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {portfolioData.navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  isActive ? "text-[#FF3B30]" : "text-fg-secondary hover:text-fg"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF3B30]" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-zinc-800 hover:border-zinc-600 transition-colors text-fg"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden p-2 text-fg"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-16 md:hidden bg-[#050505] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start gap-6 p-8">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="font-display text-3xl font-bold text-white hover:text-[#FF3B30] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
