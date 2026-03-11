import { motion } from "framer-motion";
import { hero } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scrollToSection";

const navItems = [
  { id: "hero", label: "Portfolio" },
  { id: "client-platforms", label: "Clients" },
  { id: "experience", label: "Experience" },
  { id: "apps", label: "Apps" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { activeSection } = useActiveSection();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-midnight-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="font-heading text-base font-semibold tracking-wide text-slate-100 sm:text-lg"
        >
          {hero.name}
        </button>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-neon-cyan" : "text-slate-300 hover:text-slate-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-neon-cyan/40 bg-neon-cyan/10"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => scrollToSection("client-platforms")}
          className="rounded-full border border-neon-cyan/45 bg-white/5 px-4 py-2 text-sm font-semibold text-neon-cyan transition hover:border-neon-cyan hover:bg-neon-cyan/10"
        >
          View Work
        </button>
      </div>
    </header>
  );
}
