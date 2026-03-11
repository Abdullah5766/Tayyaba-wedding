"use client";

import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <section className="!pt-24 sm:!pt-32 !pb-10 sm:!pb-14 bg-cream">
      <div className="max-w-3xl !mx-auto !px-4">
        {/* Icon */}
        <motion.div
          className="text-center !mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <img src="/calendar.svg" alt="Calendar" className="w-10 h-10 !mx-auto" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-script text-4xl sm:text-5xl md:text-6xl text-center text-text-dark !mb-0.5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Details of the Day
        </motion.h2>
        <motion.p
          className="text-center text-text-dark/60 font-body !mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Everything you need to know
        </motion.p>

        {/* Details Card */}
        <motion.div
          className="bg-champagne/50 rounded-2xl !p-8 sm:!p-12 shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Location Icon */}
          <div className="flex justify-center !mb-4">
            <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-sage"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>

          <h3 className="font-display text-xl sm:text-2xl text-center text-text-dark !mb-1">
            Location
          </h3>
          <p className="text-center font-body text-text-dark/80 font-medium !mb-2">
            Mian Rafiq Farm House, Green Acres, Pine Avenue
          </p>
          <div className="flex items-center justify-center !gap-2 text-text-dark/60 text-sm !mb-8">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-body">7:00 PM to 12:00 AM</span>
          </div>

          {/* Venue Image */}
          <div className="rounded-xl overflow-hidden !mb-6">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
              alt="Wedding venue"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden !mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.2!2d74.2395722!3d31.4074889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018011b7eee1%3A0xb9de06389ab6eeb8!2sMian%20Rafiq%20Orchard!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row !gap-3 justify-center">
            <a
              href="https://maps.app.goo.gl/tdFdPVJtx3n7Lntd8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center !gap-2 !px-6 !py-3 rounded-full border border-text-dark/20 text-text-dark/70 hover:bg-text-dark/5 transition-colors font-body text-sm"
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Open in Maps
            </a>
          
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
