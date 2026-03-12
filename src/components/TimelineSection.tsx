"use client";

import { motion } from "framer-motion";

const schedule = [
  {
    time: "7:00 PM",
    title: "Guest Arrival",
    description: "Time for dramatic entries, endless hugs, and camera flashes.",
    image: "/guest.svg",
  },
  {
    time: "8:00 PM",
    title: "Roti Shoti",
    description: "Plates full, diets forgotten, happiness guaranteed every bite.",
    image: "/dinner.svg",
  },
  {
    time: "9:00 PM",
    title: "Rasam",
    description: "The real reason we’re all here: love, laughter, and a little family commentary.",
    image: "/rasam.svg",
  },
  {
    time: "10:00 PM",
    title: "Mouj Masti",
    description: "Music up, heels off, and the dance floor officially taken over.",
    image: "/mouj.svg",
  },
  {
    time: "11:00 PM",
    title: "End of Party",
    description: "Tired feet, happy hearts, and memories we’ll laugh about forever.",
    image: "/end.svg",
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
    <section className="relative !pt-1 sm:!pt-14 !pb-24 sm:!pb-32 bg-cream overflow-hidden">
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
            src="/weddng-illustration.png"
            alt="Wedding illustration"
            className="w-64 sm:w-96 md:w-96 object-contain"
          />
        </motion.div>

        <motion.h2
          className="font-great-vibes text-4xl sm:text-5xl md:text-6xl text-center text-text-dark !mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Program of the Day
        </motion.h2>
        <motion.p
          className="text-center text-text-dark/60 font-body !mb-12"
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
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-burgundy/20 bg-cream flex items-center justify-center z-10 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                  />
                </div>
                {/* Vertical line connecting to next icon */}
                {index < schedule.length - 1 && (
                  <div className="w-px flex-1 min-h-[40px] bg-burgundy/15" />
                )}
              </div>

              {/* Right: Time badge + Title + Description */}
              <div className="!pt-2 !pb-1">
                <div className="flex items-center !gap-3 !mb-1">
                  <span className="inline-block !px-3 !py-1 rounded-full bg-burgundy text-champagne text-xs font-bold tracking-wider">
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

      {/* Bottom-left floral decoration */}
      <img
        src="/floral-right.svg"
        alt=""
        className="absolute left-0 bottom-0 h-48 sm:h-64 w-auto pointer-events-none z-0"
        style={{ transform: "scaleX(-1)" }}
      />
    </section>
  );
}
