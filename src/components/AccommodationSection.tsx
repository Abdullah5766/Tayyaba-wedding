"use client";

import { motion } from "framer-motion";

const accommodations = [
  {
    name: "The Riverside Inn",
    description: "Closest to the venue",
    link: "#",
  },
  {
    name: "Garden View Hotel",
    description: "Recommended accommodation",
    link: "#",
  },
];

export default function AccommodationSection() {
  return (
    <section className="!py-24 sm:!py-32 bg-champagne/40">
      <div className="max-w-4xl !mx-auto !px-4">
        {/* Divider */}
        <div className="flex items-center justify-center !gap-3 !mb-16">
          <span className="h-[1px] w-16 bg-burgundy/20" />
          <svg className="w-3 h-3 text-burgundy/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="h-[1px] w-16 bg-burgundy/20" />
        </div>

        {/* Icon */}
        <motion.div
          className="text-center !mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <svg
            className="w-10 h-10 !mx-auto text-burgundy/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
        </motion.div>

        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl text-center text-text-dark !mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Accommodation
        </motion.h2>
        <motion.p
          className="text-center text-text-dark/60 font-body !mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Recommendations for your stay
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 !gap-4 sm:!gap-6">
          {accommodations.map((place, i) => (
            <motion.div
              key={place.name}
              className="bg-cream rounded-xl !p-6 sm:!p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="font-display text-lg font-semibold text-text-dark !mb-1">
                {place.name}
              </h3>
              <p className="text-sm text-text-dark/50 font-body mb-5">
                {place.description}
              </p>
              <a
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center !gap-2 !px-5 !py-2.5 rounded-full border border-burgundy/20 text-burgundy/70 hover:bg-burgundy/5 transition-colors text-sm font-body"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                View Details
              </a>
            </motion.div>
          ))}
        </div>

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
