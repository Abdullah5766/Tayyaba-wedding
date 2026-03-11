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
          {/* Flower */}
          <img src="/flower.svg" alt="Flower" className="w-6 h-6 !mx-auto !mb-4" />

          <h3 className="font-script text-3xl sm:text-4xl text-champagne !mb-2">
            Tayyaba & Jazib
          </h3>
          <p className="font-body text-dusty-rose/90 text-sm !mb-6">
           Your presence will make our celebration even more special, and we can’t wait to share this joyful evening with you.
          </p>
          <p className="font-body text-dusty-rose/80 text-xs">
            Made with love
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
