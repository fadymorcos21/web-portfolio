import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TechBadges from "../components/TechBadges";
import { experiences } from "../data/portfolioData";

function LogoBadge({ item, isPadded, isBgWhite }) {
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_30%,rgba(101,217,255,0.35),rgba(15,27,58,0.92))] p-1.5 shadow-neon`}
    >
      {item.logoImage ? (
        <img
          src={item.logoImage}
          alt={`${item.company} logo`}
          className={`h-full w-full rounded-full object-contain ${isBgWhite ? "bg-white/100" : ""} ${isPadded ? "p-1" : ""}`}
          loading="lazy"
        />
      ) : (
        <span className="font-heading text-sm font-bold text-neon-cyan">
          {item.logo}
        </span>
      )}
    </span>
  );
}

function ExperienceCard({
  item,
  isExpanded,
  onExpand,
  onCollapse,
  onToggle,
  isBgWhite,
  isPadded,
}) {
  return (
    <article
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onMouseEnter={onExpand}
      onMouseLeave={onCollapse}
      onFocus={onExpand}
      onBlur={onCollapse}
      onClick={onExpand}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      className={`group w-full cursor-pointer rounded-2xl border bg-white/5 p-5 text-left outline-none transition-all duration-300 ${
        isExpanded
          ? "border-neon-cyan/50 shadow-neon"
          : "border-white/10 hover:border-neon-cyan/40 hover:bg-white/[0.07]"
      }`}
    >
      <div className="flex items-start gap-4">
        <LogoBadge item={item} isBgWhite={isBgWhite} isPadded={isPadded} />
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-wider text-neon-cyan/80">
            {item.dateRange}
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-slate-100">
            {item.title}
          </h3>
          <p className="text-sm text-slate-300">
            {item.company} - {item.employmentType}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">{item.location}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        {item.summary}
      </p>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            key={`${item.id}-details`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-4 space-y-2 overflow-hidden text-sm text-slate-300"
          >
            {item.details.map((detail) => (
              <li key={detail} className="flex gap-2 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan/80" />
                <span>{detail}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mt-4">
        <TechBadges tech={item.tech} />
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(experiences[0]?.id ?? null);

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-[1360px] scroll-mt-28 px-4 py-14 sm:px-6 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Hover or focus each role to expand responsibilities, delivery impact,
          and technical stack.
        </p>
      </motion.div>

      <div className="relative mt-10">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-neon-cyan/30 via-neon-cyan to-neon-blue/25 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-6">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="relative md:grid md:grid-cols-[1fr_52px_1fr] md:items-start"
              >
                <div
                  className={`pl-8 md:col-span-1 md:pl-0 ${
                    isLeft ? "md:col-start-1 md:pr-4" : "md:col-start-3 md:pl-4"
                  }`}
                >
                  <ExperienceCard
                    item={item}
                    isExpanded={isExpanded}
                    onExpand={() => setExpandedId(item.id)}
                    // isPadded={["alignerr"].includes(item.id)}
                    isBgWhite={item.id === "ev-gateway"}
                    onCollapse={() =>
                      setExpandedId((prev) => (prev === item.id ? null : prev))
                    }
                    onToggle={() =>
                      setExpandedId((prev) =>
                        prev === item.id ? null : item.id,
                      )
                    }
                  />
                </div>

                <div className="pointer-events-none absolute left-4 top-10 h-4 w-4 -translate-x-1/2 rounded-full border border-neon-cyan/70 bg-neon-cyan/45 shadow-neon md:left-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
