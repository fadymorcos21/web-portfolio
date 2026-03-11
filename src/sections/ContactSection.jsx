import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { contact, socialLinks } from "../data/portfolioData";

const socialIconMap = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1360px] scroll-mt-28 px-4 pb-20 pt-14 sm:px-6 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl border border-white/10 bg-midnight-900/75 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <h2 className="font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {contact.note}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.id] || FaEnvelope;
            return (
              <a
                key={link.id}
                href={link.url}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-neon-cyan/50 hover:bg-neon-cyan/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-midnight-850 text-neon-cyan">
                  <Icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neon-cyan/80">
                    {link.label}
                  </p>
                  <p className="text-sm text-slate-200">
                    {link.id === "email"
                      ? contact.email
                      : link.id === "linkedin"
                        ? "fady-morcos-b6b507170"
                        : "fadymorcos21"}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-slate-400">
          Designed and built by {contact.email.split("@")[0]}
        </p>
      </motion.div>
    </section>
  );
}
