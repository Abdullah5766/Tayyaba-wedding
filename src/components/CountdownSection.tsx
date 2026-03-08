"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2027-05-08T17:00:00").getTime();

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
    <section className="!py-24 sm:!py-32 bg-navy text-text-light">
      <div className="max-w-5xl !mx-auto !px-4 text-center">
        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl !mb-4 text-champagne"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Counting Down
        </motion.h2>
        <motion.p
          className="text-dusty-rose/80 font-body text-base sm:text-lg !mb-14"
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
              className="bg-white/10 backdrop-blur-sm rounded-xl !p-6 sm:!p-8 border border-white/10"
            >
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white">
                {mounted ? unit.value : "--"}
              </span>
              <p className="!mt-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-dusty-rose/70 font-body">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
