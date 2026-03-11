import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import TechBadges from "../components/TechBadges";
import { apps } from "../data/portfolioData";

function StoryCardVisual({ app }) {
  if (app.video) {
    return (
      <div className="relative h-full min-h-60 overflow-hidden rounded-2xl border border-white/15 bg-midnight-900">
        <video
          src={app.video}
          className="h-100 w-100 object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label={`${app.title} preview video`}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,8,25,0.75),transparent_45%)]" />
        <p className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-midnight-900/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-100">
          App Store Preview
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-60 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#111f4a] via-[#222053] to-[#121b3a] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(101,217,255,0.25),transparent_48%)]" />
      <div className="relative flex h-full items-end justify-center gap-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-20 rounded-xl border border-neon-cyan/35 bg-white/5 p-2 ${
              index === 1 ? "h-44" : "h-36"
            }`}
          >
            <div className="h-2.5 w-8 rounded-full bg-white/30" />
            <div className="mt-4 space-y-2">
              <div className="h-12 rounded-lg bg-neon-cyan/20" />
              <div className="h-2 rounded bg-white/20" />
              <div className="h-2 w-2/3 rounded bg-white/15" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppsSection() {
  const storyBluff = apps[0];

  return (
    <section
      id="apps"
      className="mx-auto w-full max-w-[1360px] scroll-mt-28 px-4 py-14 sm:px-6 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          Apps / Software Projects
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          A focused showcase for the current flagship app. Additional projects
          can be dropped into the shared data file at any time.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mt-8 grid items-stretch gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-7 lg:grid-cols-[1.1fr_1fr]"
      >
        <StoryCardVisual app={storyBluff} />
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neon-cyan/75">
            Featured App
          </p>
          <h3 className="mt-2 font-heading text-3xl font-bold text-white">
            {storyBluff.title}
          </h3>
          <p className="mt-1 text-sm text-neon-cyan/80">{storyBluff.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {storyBluff.longDescription}
          </p>

          <div className="mt-5">
            <TechBadges tech={storyBluff.tech} />
          </div>

          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            {storyBluff.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-cyan/80" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {storyBluff.appStoreUrl && (
            <a
              href={storyBluff.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-neon-cyan/55 hover:text-neon-cyan"
            >
              <FaApple className="text-base" />
              View on App Store
            </a>
          )}
        </div>
      </motion.article>
    </section>
  );
}
