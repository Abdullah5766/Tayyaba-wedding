"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeOpenerProps {
  onOpen: () => void;
}

// Reusable paper grain overlay
function PaperGrain({ clipPath }: { clipPath: string }) {
  return (
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        clipPath,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        mixBlendMode: "multiply" as const,
      }}
    />
  );
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

  // All clip paths meet at exact center (50% 50%)
  const clips = {
    top: "polygon(0 0, 100% 0, 50% 50%)",
    bottom: "polygon(0 100%, 100% 100%, 50% 50%)",
    left: "polygon(0 0, 0 100%, 50% 50%)",
    right: "polygon(100% 0, 100% 100%, 50% 50%)",
  };

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="envelope-overlay"
          className="fixed inset-0 z-50 overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundColor: "#FCFCFC" }}
        >
          {/* Card content revealed behind the flaps */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }
            }
            transition={{ duration: 0.8, delay: isOpen ? 0.4 : 0 }}
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
                  May 8, 2027
                </p>
              </div>
            </div>
          </motion.div>

          {/* === FOUR FULL-SCREEN FLAPS — each covers one triangle quadrant === */}

          {/* BOTTOM FLAP */}
          <motion.div
            className="absolute inset-0"
            style={{
              transformOrigin: "50% 100%",
              zIndex: 2,
            }}
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.bottom,
                background:
                  "linear-gradient(0deg, #EDE4DB 0%, #F0E8E0 40%, #F3ECE5 100%)",
              }}
            />
            <PaperGrain clipPath={clips.bottom} />
          </motion.div>

          {/* LEFT FLAP */}
          <motion.div
            className="absolute inset-0"
            style={{
              transformOrigin: "0% 50%",
              zIndex: 3,
            }}
            animate={isOpen ? { rotateY: -180 } : { rotateY: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
              delay: isOpen ? 0.12 : 0,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.left,
                background:
                  "linear-gradient(90deg, #F0E7DF 0%, #ECE2D9 50%, #E8DDD4 100%)",
              }}
            />
            {/* Edge shadow */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.left,
                background:
                  "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 100%)",
              }}
            />
            <PaperGrain clipPath={clips.left} />
          </motion.div>

          {/* RIGHT FLAP */}
          <motion.div
            className="absolute inset-0"
            style={{
              transformOrigin: "100% 50%",
              zIndex: 3,
            }}
            animate={isOpen ? { rotateY: 180 } : { rotateY: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
              delay: isOpen ? 0.12 : 0,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.right,
                background:
                  "linear-gradient(270deg, #F0E7DF 0%, #ECE2D9 50%, #E8DDD4 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.right,
                background:
                  "linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.05) 100%)",
              }}
            />
            <PaperGrain clipPath={clips.right} />
          </motion.div>

          {/* TOP FLAP — opens last, on top */}
          <motion.div
            className="absolute inset-0"
            style={{
              transformOrigin: "50% 0%",
              zIndex: 4,
            }}
            animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
              delay: isOpen ? 0.25 : 0,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.top,
                background:
                  "linear-gradient(180deg, #F5EDE6 0%, #F0E7DF 50%, #EBDFD6 100%)",
              }}
            />
            {/* Top light */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: clips.top,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
              }}
            />
            <PaperGrain clipPath={clips.top} />
          </motion.div>

          {/* Fold edge lines */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0"
              x2="50%"
              y2="50%"
              stroke="rgba(0,0,0,0.07)"
              strokeWidth="0.5"
            />
            <line
              x1="100%"
              y1="0"
              x2="50%"
              y2="50%"
              stroke="rgba(0,0,0,0.07)"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="100%"
              x2="50%"
              y2="50%"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="0.5"
            />
            <line
              x1="100%"
              y1="100%"
              x2="50%"
              y2="50%"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="0.5"
            />
          </motion.svg>

          {/* === WAX SEAL === */}
          <motion.button
            onClick={handleOpen}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ zIndex: 20 }}
            whileHover={stage === "sealed" ? { scale: 1.06 } : {}}
            whileTap={stage === "sealed" ? { scale: 0.94 } : {}}
            animate={
              isOpen
                ? { scale: 0.3, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Shadow under seal */}
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(74,27,38,0.3) 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
              />
              {/* Main wax body */}
              <div
                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, #A8556A 0%, #8B3B50 20%, #6B2737 50%, #5A1F2E 75%, #4A1826 100%)",
                  boxShadow: `
                    0 10px 35px rgba(74, 27, 38, 0.5),
                    0 4px 12px rgba(0,0,0,0.2),
                    inset 0 2px 4px rgba(255,200,200,0.15),
                    inset 0 -3px 6px rgba(0,0,0,0.3),
                    inset 2px 0 4px rgba(255,200,200,0.05),
                    inset -2px 0 4px rgba(0,0,0,0.15)
                  `,
                }}
              >
                {/* Wax texture */}
                <div
                  className="absolute inset-0 rounded-full opacity-[0.15]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay" as const,
                  }}
                />

                {/* Embossed outer ring */}
                <div
                  className="absolute inset-[14%] rounded-full"
                  style={{
                    border: "2px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.1), 0 1px 1px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Inner circle with monogram */}
                <div
                  className="absolute inset-[18%] rounded-full flex flex-col items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.04), transparent 60%)",
                    boxShadow:
                      "inset 0 1px 2px rgba(255,255,255,0.06), inset 0 -1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <span
                    className="font-script text-2xl sm:text-3xl md:text-4xl leading-none"
                    style={{
                      color: "rgba(255,220,225,0.45)",
                      textShadow:
                        "0 1px 1px rgba(0,0,0,0.3), 0 -1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    T & J
                  </span>
                  <img
                    src="/flower.svg"
                    alt="Flower"
                    className="w-4 h-4 !mt-1"
                    style={{
                      opacity: 0.35,
                      filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3)) brightness(2)",
                    }}
                  />
                </div>

                {/* Specular highlight */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: "12%",
                    left: "18%",
                    width: "35%",
                    height: "25%",
                    background:
                      "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)",
                    transform: "rotate(-20deg)",
                  }}
                />
              </div>
            </div>
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
