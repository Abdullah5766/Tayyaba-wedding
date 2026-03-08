"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPSection() {
  const [attending, setAttending] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just show success. Replace with actual API call later.
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="!py-24 sm:!py-32 bg-cream">
      <div className="max-w-2xl !mx-auto !px-4">
        {/* Rings Icon */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <svg
            className="w-14 h-14 !mx-auto text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
          >
            <circle cx="9" cy="12" r="5" />
            <circle cx="15" cy="12" r="5" />
          </svg>
        </motion.div>

        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl text-center text-text-dark !mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Confirm Your Attendance
        </motion.h2>
        <motion.p
          className="text-center text-text-dark/60 font-body !mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We hope to count on you
        </motion.p>

        {submitted ? (
          <motion.div
            className="text-center !py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              className="w-16 h-16 !mx-auto text-sage !mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-script text-3xl text-text-dark !mb-2">
              Thank You!
            </h3>
            <p className="text-text-dark/60 font-body">
              Your response has been recorded. We can&apos;t wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-champagne/50 rounded-2xl !p-6 sm:!p-10 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-sm font-body text-text-dark/80 !mb-2">
                Full Name <span className="text-burgundy">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full !px-4 !py-3 rounded-lg border border-burgundy/15 bg-cream focus:outline-none focus:border-burgundy/40 focus:ring-1 focus:ring-burgundy/20 font-body text-sm transition-colors"
              />
            </div>

            {/* Email */}
            <div className="!mb-6">
              <label className="block text-sm font-body text-text-dark/80 !mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full !px-4 !py-3 rounded-lg border border-burgundy/15 bg-cream focus:outline-none focus:border-burgundy/40 focus:ring-1 focus:ring-burgundy/20 font-body text-sm transition-colors"
              />
            </div>

            {/* Attending */}
            <div className="!mb-6">
              <label className="block text-sm font-body text-text-dark/80 !mb-3">
                Will you attend? <span className="text-burgundy">*</span>
              </label>
              <div className="flex !gap-6">
                <label className="flex items-center !gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    checked={attending}
                    onChange={() => setAttending(true)}
                    className="w-4 h-4 accent-burgundy"
                  />
                  <span className="font-body text-sm text-text-dark/70">
                    Yes, I&apos;ll attend
                  </span>
                </label>
                <label className="flex items-center !gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    checked={!attending}
                    onChange={() => setAttending(false)}
                    className="w-4 h-4 accent-burgundy"
                  />
                  <span className="font-body text-sm text-text-dark/70">
                    I can&apos;t attend
                  </span>
                </label>
              </div>
            </div>

            {attending && (
              <>
                {/* Number of Guests */}
                <div className="!mb-6">
                  <label className="block text-sm font-body text-text-dark/80 !mb-2">
                    Number of guests (including yourself)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    defaultValue={1}
                    className="w-24 !px-4 !py-3 rounded-lg border border-burgundy/15 bg-cream focus:outline-none focus:border-burgundy/40 focus:ring-1 focus:ring-burgundy/20 font-body text-sm transition-colors"
                  />
                </div>

                {/* Allergies */}
                <div className="!mb-6">
                  <div className="flex items-center !gap-2 !mb-3">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                    </svg>
                    <span className="text-sm font-display font-semibold text-text-dark/80">
                      Allergies & Dietary Restrictions
                    </span>
                  </div>
                  <p className="text-xs text-text-dark/50 font-body !mb-4">
                    It is very important for us to know about any dietary restrictions. Please select all that apply:
                  </p>
                  <div className="grid grid-cols-2 !gap-3 !mb-4">
                    {[
                      "Gluten-free / Celiac",
                      "Lactose-free",
                      "Vegetarian",
                      "Vegan",
                      "Nut allergy",
                      "Seafood allergy",
                    ].map((allergy) => (
                      <label
                        key={allergy}
                        className="flex items-center !gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded accent-burgundy"
                        />
                        <span className="font-body text-sm text-text-dark/70">
                          {allergy}
                        </span>
                      </label>
                    ))}
                  </div>
                  <label className="block text-sm font-body text-text-dark/80 !mb-2">
                    Other allergies or restrictions:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., egg allergy, fructose intolerance..."
                    className="w-full !px-4 !py-3 rounded-lg border border-burgundy/15 bg-cream focus:outline-none focus:border-burgundy/40 focus:ring-1 focus:ring-burgundy/20 font-body text-sm transition-colors"
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div className="!mb-8">
              <label className="block text-sm font-body text-text-dark/80 !mb-2">
                Message for the couple (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Write us a few words..."
                className="w-full !px-4 !py-3 rounded-lg border border-burgundy/15 bg-cream focus:outline-none focus:border-burgundy/40 focus:ring-1 focus:ring-burgundy/20 font-body text-sm transition-colors resize-vertical"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full !py-3.5 rounded-lg bg-burgundy text-champagne font-body text-sm tracking-wider flex items-center justify-center !gap-2 hover:bg-burgundy-dark transition-colors cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              Send Confirmation
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
