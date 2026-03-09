"use client";

import { motion } from "framer-motion";

const schedule = [
  {
    time: "7:00 PM",
    title: "Guest Arrival",
    description: "Time for dramatic entries, endless hugs, and camera flashes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    ),
  },
  {
    time: "8:00 PM",
    title: "Dinner",
    description: "Plates full, diets forgotten, happiness guaranteed",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5"
      />
    ),
  },
  {
    time: "9:00 PM",
    title: "Rasam",
    description: "The real reason we’re all here: love, laughter, and a little family commentary.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
      />
    ),
  },
  {
    time: "10:00 PM",
    title: "Mouj Masti",
    description: "Music up, heels off, and the dance floor officially taken over.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.75-11.396c.25.023.5.05.75.082M5 14.5l-1.456 1.456a1.5 1.5 0 001.06 2.544h14.792a1.5 1.5 0 001.06-2.544L19 14.5m-14 0h14"
      />
    ),
  },

 
  {
    time: "11:00 PM",
    title: "End of Party",
    description: "Tired feet, happy hearts, and memories we’ll laugh about forever.",
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
        {/* Desi illustration */}
        <motion.div
          className="flex justify-center !mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/desi-removebg-preview.png"
            alt="Wedding illustration"
            className="w-64 sm:w-80 md:w-96 object-contain"
          />
        </motion.div>

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

        {/* Vertical timeline */}
        <motion.div
          className="relative max-w-lg !mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {schedule.map((item, index) => (
            <motion.div
              key={item.time}
              variants={itemVariants}
              className="flex items-start !gap-5"
            >
              {/* Left: Icon + Connecting line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-burgundy/20 bg-cream flex items-center justify-center z-10">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
                {/* Vertical line connecting to next icon */}
                {index < schedule.length - 1 && (
                  <div className="w-px flex-1 min-h-[40px] bg-burgundy/15" />
                )}
              </div>

              {/* Right: Time badge + Title + Description */}
              <div className="!pt-2 !pb-8">
                <div className="flex items-center !gap-3 !mb-1">
                  <span className="inline-block !px-3 !py-1 rounded-full bg-burgundy text-champagne text-xs font-body tracking-wider">
                    {item.time}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-semibold text-text-dark">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-text-dark/50 font-body !mt-1">
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
