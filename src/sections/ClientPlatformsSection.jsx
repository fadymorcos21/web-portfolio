import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TechBadges from "../components/TechBadges";
import { clientPlatforms } from "../data/portfolioData";

function ClientPreview({ image, title }) {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} preview`}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#15386f] via-[#1b2e59] to-[#0f1938]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(101,217,255,0.25),transparent_50%)]" />
      <div className="relative w-[86%] rounded-xl border border-neon-cyan/30 bg-white/5 p-3">
        <div className="mb-3 h-3 w-20 rounded-full bg-white/20" />
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded bg-white/15" />
          <div className="h-2.5 w-5/6 rounded bg-white/10" />
          <div className="h-2.5 w-4/6 rounded bg-white/10" />
        </div>
      </div>
      <p className="absolute bottom-3 text-xs font-semibold tracking-wide text-white/70">
        Mock Preview
      </p>
    </div>
  );
}

function ClientCard({ platform }) {
  return (
    <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:p-5">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-midnight-900/80">
        <div className="h-44 sm:h-48 lg:h-52">
          <ClientPreview image={platform.image} title={platform.title} />
        </div>
      </div>
      <div className="mt-4 space-y-3 px-1 pb-2">
        <div>
          <p className="text-lg font-semibold text-slate-50 lg:text-xl">
            {platform.title}
          </p>
          <p className="text-xs uppercase tracking-wider text-neon-cyan/80">
            {platform.subtitle}
          </p>
        </div>
        <p className="min-h-[4.8rem] text-sm leading-relaxed text-slate-300 lg:min-h-[5.2rem]">
          {platform.description}
        </p>
        <TechBadges tech={platform.tech} />
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl border border-neon-cyan/45 bg-neon-cyan/10 px-4 py-2.5 text-sm font-semibold text-neon-cyan transition hover:border-neon-cyan hover:bg-neon-cyan/20"
        >
          View Site
        </a>
      </div>
    </article>
  );
}

export default function ClientPlatformsSection() {
  return (
    <section
      id="client-platforms"
      className="mx-auto w-full max-w-[1480px] scroll-mt-28 px-4 pb-14 pt-2 sm:px-6 sm:pt-3 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          Client Platforms
        </p>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neon-cyan/75">
          Freelance web systems
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mt-6 rounded-3xl border border-white/10 bg-midnight-900/55 p-5 backdrop-blur-xl sm:p-7"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={18}
          breakpoints={{
            320: { slidesPerView: 1.08, spaceBetween: 16 },
            640: { slidesPerView: 1.55, spaceBetween: 16 },
            900: { slidesPerView: 2.2, spaceBetween: 18 },
            1150: { slidesPerView: 3.12, spaceBetween: 20 },
            1360: { slidesPerView: 3.7, spaceBetween: 24 },
            1550: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="client-swiper pb-11"
        >
          {clientPlatforms.map((platform) => (
            <SwiperSlide key={platform.id} className="h-auto">
              <ClientCard platform={platform} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
