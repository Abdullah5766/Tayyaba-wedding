"use client";

import { useState, useRef } from "react";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    // Start music on user interaction (seal tap) — must be in the same call stack
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.currentTime = 26;
      audio.play().catch(() => {});
    }
    setIsOpen(true);
  };

  return (
    <main>
      <audio ref={audioRef} preload="auto" playsInline>
        <source src="/music/music.mp3" type="audio/mpeg" />
        <source src="/music/music.mpeg" type="audio/mpeg" />
      </audio>
      <AnimatePresence mode="wait">
        {!isOpen && (
          <EnvelopeOpener key="envelope" onOpen={handleOpen} />
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
          {/* <AccommodationSection /> */}
          {/* <FAQSection /> */}
          {/* <GiftsSection /> */}
          {/* <RSVPSection /> */}
          <Footer />
          <MusicToggle audioRef={audioRef} />
        </motion.div>
      )}
    </main>
  );
}
