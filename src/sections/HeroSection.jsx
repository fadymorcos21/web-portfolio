import { motion } from "framer-motion";
import { hero } from "../data/portfolioData";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full max-w-[1360px] px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-10"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-midnight-900/70 px-6 py-16 shadow-neon sm:px-10 lg:px-16">
        <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-neon-cyan/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-neon-blue/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-neon-cyan/80 sm:text-sm">
            Portfolio
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-slate-50 sm:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-5 text-base font-medium text-slate-200 sm:text-2xl">
            {hero.roles.join(" • ")}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            {hero.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("client-platforms")}
              className="rounded-full border border-neon-cyan/60 bg-neon-cyan/15 px-7 py-3 text-sm font-semibold text-neon-cyan transition hover:-translate-y-0.5 hover:bg-neon-cyan/25"
            >
              {hero.ctaLabel}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Contact
            </button>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute left-6 top-6 hidden w-64 rounded-xl border border-neon-cyan/25 bg-midnight-950/80 p-4 text-left text-[11px] text-neon-cyan/80 md:block">
          <p className="mb-2 font-semibold text-neon-cyan">deployment/config.ts</p>
          <p>const stack = [React, Node, Cloud];</p>
          <p>status = "production"</p>
          <p>uptime &gt; 99.9%</p>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-6 hidden w-60 rounded-xl border border-neon-blue/30 bg-midnight-950/75 p-4 md:block">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={index}
                className="h-6 rounded-md border border-neon-blue/35 bg-neon-blue/10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
