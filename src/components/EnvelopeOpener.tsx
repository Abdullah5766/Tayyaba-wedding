"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeOpenerProps {
  onOpen: () => void;
}

export default function EnvelopeOpener({ onOpen }: EnvelopeOpenerProps) {
  const [stage, setStage] = useState<"sealed" | "opening" | "card-rising" | "done">("sealed");

  const handleOpen = () => {
    if (stage !== "sealed") return;
    setStage("opening");
    // Flap opens for 800ms, then card rises
    setTimeout(() => setStage("card-rising"), 900);
    // Card rises for 1200ms, then fade out
    setTimeout(() => setStage("done"), 2400);
    setTimeout(() => onOpen(), 3200);
  };

  return (
    <AnimatePresence>
      {stage !== "done" ? null : null}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === "done" ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(160deg, #F5EDE4 0%, #EDE0D4 40%, #E0D0BF 100%)",
        }}
      >
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Envelope container with perspective */}
        <div className="relative" style={{ perspective: "1200px" }}>
          {/* Whole envelope */}
          <motion.div
            className="relative w-[340px] h-[240px] sm:w-[460px] sm:h-[320px] md:w-[540px] md:h-[370px]"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* === ENVELOPE BACK (bottom layer) === */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                background: "linear-gradient(175deg, #EDE0D4 0%, #DDD0C0 100%)",
                boxShadow: "0 15px 50px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.08)",
              }}
            />

            {/* === CARD inside envelope === */}
            <motion.div
              className="absolute left-[8%] right-[8%] bottom-[8%] rounded-sm overflow-hidden"
              style={{
                height: "82%",
                background: "linear-gradient(180deg, #FFFFFF 0%, #FBF7F2 100%)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                zIndex: 2,
              }}
              animate={
                stage === "card-rising" || stage === "done"
                  ? { y: "-110%", opacity: stage === "done" ? 0 : 1 }
                  : { y: 0 }
              }
              transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Card content */}
              <div className="h-full flex flex-col items-center justify-center !px-6 text-center">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-burgundy/40 font-body !mb-3">
                  You are invited to the wedding of
                </p>
                <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-burgundy/80 !mb-1">
                  Tayyaba
                </h2>
                <span className="text-gold text-lg font-script">&</span>
                <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-burgundy/80 !mb-3">
                  Jazib
                </h2>
                <div className="flex items-center !gap-3 !mb-3">
                  <span className="h-px w-8 bg-gold/40" />
                  <svg className="w-2.5 h-2.5 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="h-px w-8 bg-gold/40" />
                </div>
                <p className="font-script text-sm sm:text-base text-burgundy/50">
                  May 8, 2027
                </p>
              </div>
            </motion.div>

            {/* === ENVELOPE FRONT (covers bottom of card) === */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                zIndex: 3,
                clipPath: "polygon(0 40%, 50% 70%, 100% 40%, 100% 100%, 0 100%)",
                background: "linear-gradient(180deg, #E8DAC8 0%, #DDD0C0 50%, #D4C4B0 100%)",
              }}
            />

            {/* Front fold lines (left and right diagonals from top corners to center) */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                zIndex: 4,
                clipPath: "polygon(0 40%, 50% 70%, 0 100%)",
                background: "linear-gradient(135deg, #E5D7C5 0%, #DDD0C0 100%)",
                borderRight: "1px solid rgba(0,0,0,0.04)",
              }}
            />
            <div
              className="absolute inset-0 rounded-md"
              style={{
                zIndex: 4,
                clipPath: "polygon(100% 40%, 50% 70%, 100% 100%)",
                background: "linear-gradient(225deg, #E5D7C5 0%, #DDD0C0 100%)",
                borderLeft: "1px solid rgba(0,0,0,0.04)",
              }}
            />

            {/* === ENVELOPE FLAP (top triangle, opens upward on click) === */}
            <motion.div
              className="absolute top-0 left-0 right-0"
              style={{
                height: "45%",
                zIndex: 5,
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              animate={
                stage !== "sealed"
                  ? { rotateX: 180 }
                  : { rotateX: 0 }
              }
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Flap front face */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  background: "linear-gradient(180deg, #EDE0D4 0%, #E0D0BF 100%)",
                  backfaceVisibility: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              />
              {/* Flap back face (visible when opened) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  background: "linear-gradient(0deg, #D8C8B4 0%, #CDBDA8 100%)",
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              />
            </motion.div>

            {/* === WAX SEAL === */}
            <motion.button
              onClick={handleOpen}
              className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
              style={{
                top: "32%",
                zIndex: stage === "sealed" ? 10 : 1,
              }}
              whileHover={stage === "sealed" ? { scale: 1.06 } : {}}
              whileTap={stage === "sealed" ? { scale: 0.95 } : {}}
              animate={
                stage !== "sealed"
                  ? { scale: 0.8, opacity: 0, y: -30 }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Outer ring */}
              <div className="relative">
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center"
                  style={{
                    background: "radial-gradient(circle at 38% 38%, #9B4A5A, #6B2737 45%, #4A1B26 100%)",
                    boxShadow:
                      "0 6px 25px rgba(107, 39, 55, 0.45), 0 2px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.12), inset 0 -1px 3px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Inner circle (embossed look) */}
                  <div
                    className="w-[78%] h-[78%] rounded-full flex flex-col items-center justify-center border"
                    style={{
                      borderColor: "rgba(255,255,255,0.08)",
                      background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.06), transparent 70%)",
                    }}
                  >
                    <span className="font-script text-2xl sm:text-3xl md:text-4xl text-champagne/85 leading-none">
                      T & J
                    </span>
                    <svg
                      className="w-4 h-4 !mt-0.5 text-champagne/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* "Tap to open" hint */}
          <motion.p
            className="text-center !mt-8 text-[#8B7D6B]/60 text-xs sm:text-sm tracking-[0.2em] uppercase font-body"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: stage === "sealed" ? 1 : 0,
              y: stage === "sealed" ? 0 : -10,
            }}
            transition={{ delay: stage === "sealed" ? 1.2 : 0, duration: 0.6 }}
          >
            Tap the seal to open
          </motion.p>
        </div>

        {/* Cursive text peeking at the bottom (like the reference) */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: stage === "sealed" ? 1 : 0, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="font-script text-2xl sm:text-3xl text-[#8B7D6B]/70">
            We invite you to celebrate...
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
