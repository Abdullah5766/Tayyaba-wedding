"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="!py-16 bg-burgundy-dark text-text-light">
      <div className="max-w-4xl !mx-auto !px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heart */}
          <svg
            className="w-6 h-6 !mx-auto text-dusty-rose/60 !mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <h3 className="font-script text-3xl sm:text-4xl text-champagne !mb-2">
            Tayyaba & Jazib
          </h3>
          <p className="font-body text-dusty-rose/60 text-sm !mb-6">
            May 8, 2027
          </p>
          <p className="font-body text-dusty-rose/40 text-xs">
            Made with love
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
