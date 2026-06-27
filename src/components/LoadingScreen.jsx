import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1100;
    const tick = (t) => {
      const p = Math.min(100, Math.round(((t - start) / duration) * 100));
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] grid place-items-center"
        >
          <div className="text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-fg-muted uppercase mb-3">
              Initializing portfolio
            </div>
            <div className="font-display text-6xl sm:text-8xl font-bold tracking-tighter text-white">
              {String(pct).padStart(2, "0")}
              <span className="text-[#FF3B30]">%</span>
            </div>
            <div className="mt-6 w-56 h-[2px] bg-zinc-800 mx-auto overflow-hidden">
              <div
                className="h-full bg-[#FF3B30] transition-all duration-100"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
