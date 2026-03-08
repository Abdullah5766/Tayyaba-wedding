"use client";

import { useState, useEffect, type RefObject } from "react";
import { motion } from "framer-motion";

interface MusicToggleProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function MusicToggle({ audioRef }: MusicToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if already playing (started from page.tsx on seal tap)
    setIsPlaying(!audio.paused);

    const handleEnded = () => {
      audio.currentTime = 26;
      audio.play();
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="music-btn fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center bg-burgundy/80 text-champagne shadow-lg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <div className={`sound-wave flex items-center gap-[2px] ${!isPlaying ? "paused" : ""}`}>
        <span style={{ height: "8px" }} />
        <span style={{ height: "12px" }} />
        <span style={{ height: "16px" }} />
        <span style={{ height: "10px" }} />
      </div>
    </motion.button>
  );
}
