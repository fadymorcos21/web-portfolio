import { motion } from "framer-motion";
import { about } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1360px] scroll-mt-28 px-4 py-14 sm:px-6 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <h2 className="font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          {about.heading}
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
