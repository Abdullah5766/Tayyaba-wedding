"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeOpener from "@/components/EnvelopeOpener";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventDetails from "@/components/EventDetails";
import TimelineSection from "@/components/TimelineSection";
import AccommodationSection from "@/components/AccommodationSection";
import FAQSection from "@/components/FAQSection";
import GiftsSection from "@/components/GiftsSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import MusicToggle from "@/components/MusicToggle";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isOpen && (
          <EnvelopeOpener key="envelope" onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <CountdownSection />
          <EventDetails />
          <TimelineSection />
          <AccommodationSection />
          <FAQSection />
          <GiftsSection />
          <RSVPSection />
          <Footer />
          <MusicToggle />
        </motion.div>
      )}
    </main>
  );
}
