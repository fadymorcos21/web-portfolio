import { motion } from "framer-motion";
import { useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const tocItems = [
  { id: "client-platforms", label: "Client Work", short: "C" },
  { id: "experience", label: "Experience", short: "E" },
  { id: "apps", label: "Projects", short: "P" },
];

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SideToc() {
  const { activeSection } = useActiveSection();
  const activeId = useMemo(() => {
    if (tocItems.some((item) => item.id === activeSection)) {
      return activeSection;
    }
    return null;
  }, [activeSection]);

  return (
    <aside
      className="fixed top-1/2 z-30 hidden -translate-y-1/2 xl:block"
      style={{ left: "clamp(4px, calc((100vw - 1360px)/2 - 76px), 48px)" }}
      aria-label="Section navigation"
    >
      <nav className="relative rounded-full border border-white/10 bg-midnight-900/70 p-2 backdrop-blur-xl">
        <span className="pointer-events-none absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-white/15" />

        <ul className="relative z-10 flex flex-col gap-2">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  title={item.label}
                  aria-label={item.label}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full outline-none transition hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-neon-cyan/60"
                >
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold transition-all ${
                      isActive
                        ? "border-neon-cyan/70 bg-neon-cyan/20 text-neon-cyan shadow-neon"
                        : "border-white/20 bg-white/5 text-slate-400 group-hover:border-white/35 group-hover:text-slate-200"
                    }`}
                  >
                    {item.short}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="toc-node-active"
                      className="absolute inset-0 -z-10 rounded-full border border-neon-cyan/25 bg-neon-cyan/10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}

                  <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-md border border-white/10 bg-midnight-900/95 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200 2xl:block">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
