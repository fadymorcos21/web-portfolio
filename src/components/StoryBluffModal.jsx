import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import TechBadges from "./TechBadges";

function StoryVisual({ app }) {
  if (app.video) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-midnight-900">
        <video
          src={app.video}
          className="h-full max-h-[30rem] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          aria-label={`${app.title} app store preview video`}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,8,25,0.45),transparent_50%)]" />
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-[#111c42] via-[#1b2451] to-[#0d1636] p-4">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(101,217,255,0.23),transparent_45%)]" />
      <div className="relative flex items-end justify-center gap-3">
        {[0, 1, 2].map((panel) => (
          <div
            key={panel}
            className={`h-44 w-24 rounded-xl border border-neon-cyan/35 bg-white/5 p-2 ${
              panel === 1 ? "mb-3" : ""
            }`}
          >
            <div className="h-2.5 w-8 rounded-full bg-white/35" />
            <div className="mt-4 space-y-2">
              <div className="h-16 rounded-lg bg-neon-cyan/25" />
              <div className="h-2 rounded bg-white/20" />
              <div className="h-2 w-2/3 rounded bg-white/15" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StoryBluffModal({ app, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-950/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.dialog
            open
            aria-labelledby="storybluff-title"
            className="relative m-0 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-midnight-900 p-6 text-slate-100 shadow-neon sm:p-8"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-neon-cyan/60 hover:text-neon-cyan"
              aria-label="Close Story Bluff details"
            >
              <FaXmark />
            </button>

            <div className="grid gap-7 md:grid-cols-[1.1fr_1fr] md:items-start">
              <StoryVisual app={app} />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neon-cyan/80">
                  App / Software Project
                </p>
                <h3
                  id="storybluff-title"
                  className="mt-2 font-heading text-3xl font-bold text-white"
                >
                  {app.title}
                </h3>
                <p className="mt-2 text-sm text-neon-cyan/80">{app.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {app.longDescription}
                </p>

                <div className="mt-5">
                  <TechBadges tech={app.tech} />
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-cyan/80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {app.appStoreUrl && (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-neon-cyan/55 hover:text-neon-cyan"
                  >
                    <FaApple className="text-base" />
                    View on App Store
                  </a>
                )}
              </div>
            </div>
          </motion.dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
