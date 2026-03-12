"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-03-28T19:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative !pt-12 sm:!pt-12 bg-cream overflow-hidden">
      {/* Floral decoration on the right */}
      <img
        src="/floral-right.svg"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-auto object-contain pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl !mx-auto !px-4 text-center">
        <motion.h2
          className="font-great-vibes text-4xl sm:text-5xl md:text-6xl !mb-1 text-text-dark"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Counting Down
        </motion.h2>
        <motion.p
          className="text-text-dark/60 font-body text-base sm:text-lg !mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          For the most special day of our lives
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:!gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {units.map((unit) => (
            <motion.div
              key={unit.label}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm rounded-xl !p-6 sm:!p-8 border border-burgundy/10"
            >
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-text-dark">
                {mounted ? unit.value : "--"}
              </span>
              <p className="!mt-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-burgundy/60 font-body">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center !gap-3 !mt-16">
          <span className="h-[1px] w-16 bg-burgundy/20" />
          <svg className="w-3 h-3 text-burgundy/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="h-[1px] w-16 bg-burgundy/20" />
        </div>
      </div>
    </section>
  );
}
