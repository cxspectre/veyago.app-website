"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  variant?: "left" | "right" | "center" | "bottom";
  dots?: boolean;
  grid?: boolean;
  warm?: boolean;
};

export default function AmbientLayer({
  variant = "right",
  dots = true,
  grid = false,
  warm = false,
}: Props) {
  const reduced = useReducedMotion();
  const glow = {
    right: "radial-gradient(55% 45% at 82% 40%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 70%)",
    left: "radial-gradient(55% 45% at 18% 40%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 70%)",
    center: "radial-gradient(60% 50% at 50% 40%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 70%)",
    bottom: "radial-gradient(60% 45% at 50% 100%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)",
  }[variant];

  const warmGlow =
    "radial-gradient(50% 40% at 30% 60%, rgba(255,168,99,0.07) 0%, rgba(255,168,99,0) 70%)";

  const dotCount = 10;
  const floats = Array.from({ length: dotCount }, (_, i) => ({
    left: `${(i * 89) % 100}%`,
    top: `${(i * 53) % 100}%`,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.7,
    duration: 9 + (i % 4),
  }));

  return (
    <>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: glow }} />
      {warm && (
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: warmGlow }} />
      )}
      {grid && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "8rem 100%",
          }}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {dots && !reduced && (
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {floats.map((d, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white/40"
              style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.4, 0.4, 0], y: [0, -50, -80, -110] }}
              transition={{
                duration: d.duration,
                delay: d.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
