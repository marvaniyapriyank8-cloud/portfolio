import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-[#FF3B30] hover:bg-[#D62828] text-white grid place-items-center shadow-lg transition-all hover:-translate-y-1"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
