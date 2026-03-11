"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_50%]"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-burgundy-dark/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-text-light !px-4">
        <motion.p
          className="text-sm sm:text-base tracking-[0.35em] italic uppercase font-body !mb-6 text-champagne/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Save the Date
        </motion.p>

        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl !mb-2 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Tayyaba
        </motion.h1>

        <motion.div
          className="flex items-center justify-center !gap-4 !my-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="h-[1px] w-16 sm:w-24 bg-gold/60" />
          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="h-[1px] w-16 sm:w-24 bg-gold/60" />
        </motion.div>

        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl !mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Jazib
        </motion.h1>

         <motion.p
          className="font-script text-xl sm:text-2xl text-champagne/90 !mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Invite you to celebrate their shendi
        </motion.p>

        <motion.p
          className="font-script text-xl sm:text-2xl text-champagne/90 !mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          March &nbsp;<span className="text-champagne/40 font-thin">|</span>&nbsp; 28 &nbsp;<span className="text-champagne/40 font-thin">|</span>&nbsp; 2026
        </motion.p>

        <motion.button
          onClick={scrollToRSVP}
          className="group cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-champagne/70 !mb-10 font-body">
            We would be delighted by your presence
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 !mx-auto text-champagne/60"
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
        </motion.button>
      </div>
    </section>
  );
}
