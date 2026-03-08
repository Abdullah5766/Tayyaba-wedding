"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/background.mp3");
    audioRef.current.loop = false;
    audioRef.current.volume = 0.3;
    audioRef.current.currentTime = 26;

    const audio = audioRef.current;
    const handleEnded = () => {
      audio.currentTime = 26;
      audio.play();
    };
    audio.addEventListener("ended", handleEnded);

    // Auto-play when card opens (user already interacted with envelope)
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Browser blocked autoplay
    });

    return () => {
      audio.removeEventListener("ended", handleEnded);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

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
