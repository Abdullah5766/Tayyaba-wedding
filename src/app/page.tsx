"use client";

import { useState, useRef, useEffect } from "react";
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

  // Preload audio during envelope stage
  useEffect(() => {
    const audio = new Audio("/music/music.mpeg");
    audio.preload = "auto";
    audio.loop = false;
    audio.volume = 0.3;
    audio.currentTime = 26;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const handleOpen = () => {
    // Start music immediately on user interaction (seal tap)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setIsOpen(true);
  };

  return (
    <main>
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
