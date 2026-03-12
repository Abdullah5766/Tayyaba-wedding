"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream !p-0">
      {/* Floral ring as background */}
      <img
        src="/hero.svg"
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-h-screen w-auto object-contain pointer-events-none"
      />

      {/* Content centered inside the floral ring */}
      <div className="relative z-10 flex-1 flex items-center justify-center !px-4">
        <div className="text-center" style={{ maxWidth: "min(70vw, 360px)" }}>
          <motion.p
            className="text-xs sm:text-sm tracking-[0.35em] italic uppercase font-body !mb-3 text-burgundy/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Save the Date
          </motion.p>

          <motion.h1
            className="font-script text-5xl sm:text-6xl md:text-7xl !mb-1 text-text-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Tayyaba
          </motion.h1>

          <motion.div
            className="flex items-center justify-center !gap-3 !my-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="h-[1px] w-10 sm:w-14 bg-burgundy/30" />
            <span className="font-script text-xl text-burgundy/50">&</span>
            <span className="h-[1px] w-10 sm:w-14 bg-burgundy/30" />
          </motion.div>

          <motion.h1
            className="font-script text-5xl sm:text-6xl md:text-7xl !mb-4 text-text-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Jazib
          </motion.h1>

          <motion.p
            className="font-script text-base sm:text-lg text-burgundy/70 !mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Invite you to celebrate their shendi
          </motion.p>

          <motion.p
            className="font-script text-base sm:text-lg text-burgundy/70 !mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            March &nbsp;<span className="text-burgundy/30 font-thin">|</span>&nbsp; 28 &nbsp;<span className="text-burgundy/30 font-thin">|</span>&nbsp; 2026
          </motion.p>

          <motion.button
            onClick={scrollToRSVP}
            className="group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-burgundy/50 !mb-3 font-body">
              We would be delighted by your presence
            </p>
            <div className="pt-10">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-5 h-5 !mx-auto text-burgundy/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 flex items-center justify-center !gap-3 !pb-8">
        <span className="h-[1px] w-16 bg-burgundy/20" />
        <svg className="w-3 h-3 text-burgundy/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <span className="h-[1px] w-16 bg-burgundy/20" />
      </div>
    </section>
  );
}
