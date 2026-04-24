"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  kicker?: string;
  label: ReactNode;
  pulse?: boolean;
  className?: string;
};

export default function StatusChip({ kicker, label, pulse = true, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-3 rounded-card border border-white/10 bg-surface/70 backdrop-blur-md px-4 py-2.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      {pulse && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
      <div className="flex flex-col">
        {kicker && (
          <span className="text-[9px] uppercase tracking-[0.22em] text-gray-3 leading-none">{kicker}</span>
        )}
        <span className="display text-xs mt-0.5 leading-tight">{label}</span>
      </div>
    </motion.div>
  );
}
