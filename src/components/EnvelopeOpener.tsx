"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeOpenerProps {
  onOpen: () => void;
}

export default function EnvelopeOpener({ onOpen }: EnvelopeOpenerProps) {
  const [stage, setStage] = useState<"sealed" | "opening" | "done">("sealed");

  const handleOpen = useCallback(() => {
    if (stage !== "sealed") return;
    setStage("opening");
    setTimeout(() => setStage("done"), 2000);
    setTimeout(() => onOpen(), 2800);
  }, [stage, onOpen]);

  const isOpen = stage === "opening" || stage === "done";

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="envelope-overlay"
          className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundColor: "#F7F8F3" }}
        >
          {/* Envelope background */}
          <motion.img
            src="/en-bg.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            animate={isOpen ? { scale: 1.3, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Card content revealed behind */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }
            }
            transition={{ duration: 0.8, delay: isOpen ? 0.6 : 0 }}
          >
            <div
              className="w-[78vw] max-w-[380px] rounded-md overflow-hidden"
              style={{
                aspectRatio: "3/4.5",
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #FBF7F2 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="h-full flex flex-col items-center justify-center !px-6 text-center">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-burgundy/80 font-body !mb-3">
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
                  <svg
                    className="w-2.5 h-2.5 text-gold/60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="h-px w-8 bg-gold/40" />
                </div>
                <p className="font-script text-sm sm:text-base text-burgundy/50">
                  March 28, 2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* === WAX SEAL === */}
          <motion.button
            onClick={handleOpen}
            className="absolute z-20 cursor-pointer"
            style={{ top: "52%" }}
            whileHover={stage === "sealed" ? { scale: 1.06 } : {}}
            whileTap={stage === "sealed" ? { scale: 0.94 } : {}}
            animate={
              isOpen
                ? { scale: 0.3, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/wax.svg"
              alt="Wax seal"
              className="w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36"
              style={{
                filter: "drop-shadow(0 10px 25px rgba(74, 27, 38, 0.4))",
              }}
            />
          </motion.button>

          {/* "Tap to open" hint */}
          <motion.p
            className="absolute left-0 right-0 text-center text-xs sm:text-sm tracking-[0.25em] uppercase font-body"
            style={{
              bottom: "max(6vh, 30px)",
              zIndex: 10,
              color: "rgba(139,125,107,0.5)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === "sealed" ? 1 : 0 }}
            transition={{
              delay: stage === "sealed" ? 1.4 : 0,
              duration: 0.6,
            }}
          >
            Tap the seal to open
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
