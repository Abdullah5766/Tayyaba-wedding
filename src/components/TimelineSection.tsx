"use client";

import { motion } from "framer-motion";

const schedule = [
  {
    time: "5:00 PM",
    title: "Guest Arrival",
    description: "Welcome & reception at the venue",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    ),
  },
  {
    time: "5:30 PM",
    title: "Welcome Drink",
    description: "Cocktails while we gather",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5"
      />
    ),
  },
  {
    time: "6:00 PM",
    title: "Ceremony",
    description: "The most special moment of the day",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
      />
    ),
  },
  {
    time: "7:00 PM",
    title: "Cocktail Hour",
    description: "Appetizers & drinks in the garden",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.75-11.396c.25.023.5.05.75.082M5 14.5l-1.456 1.456a1.5 1.5 0 001.06 2.544h14.792a1.5 1.5 0 001.06-2.544L19 14.5m-14 0h14"
      />
    ),
  },
  {
    time: "9:00 PM",
    title: "Banquet",
    description: "Dinner & celebration",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-12.75H6A2.25 2.25 0 003.75 6v0a2.25 2.25 0 002.25 2.25h12A2.25 2.25 0 0020.25 6v0A2.25 2.25 0 0018 3.75z"
        />
      </>
    ),
  },
  {
    time: "12:00 AM",
    title: "Party",
    description: "Dance until dawn!",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
      />
    ),
  },
  {
    time: "3:00 AM",
    title: "End of Party",
    description: "Farewell & beautiful memories",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function TimelineSection() {
  return (
    <section className="!pt-10 sm:!pt-14 !pb-24 sm:!pb-32 bg-cream">
      <div className="max-w-6xl !mx-auto !px-4">
        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl text-center text-text-dark !mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Program of the Day
        </motion.h2>
        <motion.p
          className="text-center text-text-dark/60 font-body !mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What we have prepared for you
        </motion.p>

        {/* Desktop: Horizontal */}
        <motion.div
          className="hidden sm:grid grid-cols-7 !gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schedule.map((item) => (
            <motion.div
              key={item.time}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Time badge */}
              <span className="inline-block !px-3 !py-1 rounded-full bg-burgundy text-champagne text-xs font-body tracking-wider !mb-4">
                {item.time}
              </span>

              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full border-2 border-burgundy/20 flex items-center justify-center !mb-3">
                <svg
                  className="w-6 h-6 text-burgundy/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  {item.icon}
                </svg>
              </div>

              {/* Title & Description */}
              <h4 className="font-display text-sm font-semibold text-text-dark !mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-text-dark/50 font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Vertical timeline */}
        <motion.div
          className="sm:hidden !space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {schedule.map((item) => (
            <motion.div
              key={item.time}
              variants={itemVariants}
              className="flex items-start !gap-4"
            >
              {/* Time + Icon */}
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="inline-block !px-3 !py-1 rounded-full bg-burgundy text-champagne text-xs font-body tracking-wider !mb-2">
                  {item.time}
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-burgundy/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-burgundy/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
              </div>
              {/* Text */}
              <div className="!pt-1">
                <h4 className="font-display text-base font-semibold text-text-dark !mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-text-dark/50 font-body">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
