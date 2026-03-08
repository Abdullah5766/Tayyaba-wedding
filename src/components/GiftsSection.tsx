"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftsSection() {
  const [showDetails, setShowDetails] = useState(false);
  const [showIBAN, setShowIBAN] = useState(false);

  return (
    <section className="!py-24 sm:!py-32 bg-champagne/40">
      <div className="max-w-3xl !mx-auto !px-4 text-center">
        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl text-text-dark !mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Gifts
        </motion.h2>

        <motion.p
          className="text-text-dark/60 font-body max-w-lg !mx-auto !mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your presence is the most important thing to us.
          <br />
          If you wish to give a gift, you can do it in whatever way is most
          convenient for you.
        </motion.p>

        {/* Accordion */}
        <motion.div
          className="max-w-xl !mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="border border-burgundy/10 rounded-xl overflow-hidden bg-cream">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex items-center justify-between !px-6 !py-4 text-left cursor-pointer"
            >
              <span className="font-display text-text-dark/80 font-semibold">
                Contribution
              </span>
              <motion.svg
                className="w-5 h-5 text-burgundy/40 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                animate={{ rotate: showDetails ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="!px-6 !pb-6">
                    <p className="text-sm text-text-dark/60 font-body leading-relaxed !mb-4">
                      If you prefer, you can give a monetary gift.
                      <br />
                      In case you&apos;d like to make a bank transfer:
                    </p>
                    <button
                      onClick={() => setShowIBAN(!showIBAN)}
                      className="text-burgundy font-body text-sm underline underline-offset-4 hover:text-burgundy-dark transition-colors cursor-pointer"
                    >
                      {showIBAN ? "Hide IBAN" : "Show IBAN"}
                    </button>
                    <AnimatePresence>
                      {showIBAN && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="!mt-3 text-sm font-mono text-text-dark/70 bg-champagne/80 !py-2 !px-4 rounded-lg"
                        >
                          IBAN: XX00 0000 0000 0000 0000 0000
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
