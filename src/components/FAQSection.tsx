"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "Can I bring a plus one?",
    answer:
      "Your invitation specifies the number of guests we can accommodate. If you have any questions, please reach out to us directly.",
  },
  {
    question: "Will there be parking available?",
    answer:
      "Yes, there is ample parking available at the venue. We will provide detailed directions and parking instructions closer to the date.",
  },
  {
    question: "What dress code should I follow?",
    answer:
      "We kindly request formal attire. Gentlemen in suits and ladies in cocktail or evening dresses. Please avoid white, as it is reserved for the bride.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask that you enjoy the ceremony unplugged — no phones or cameras. Our professional photographer will capture every moment. You're welcome to take photos during the rest of the celebration!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="!py-24 sm:!py-32 bg-cream">
      <div className="max-w-3xl !mx-auto !px-4">
        {/* Icon */}
        <motion.div
          className="text-center !mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <CircleHelp className="w-10 h-10 !mx-auto text-burgundy/50" strokeWidth={1.5} />
        </motion.div>

        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl text-center text-text-dark !mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="!space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-burgundy/10 rounded-xl overflow-hidden bg-champagne/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between !px-6 !py-4 text-left cursor-pointer"
              >
                <span className="font-body text-text-dark/80 !pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  className="w-5 h-5 text-burgundy/40 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
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
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="!px-6 !pb-4 text-sm text-text-dark/60 font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
