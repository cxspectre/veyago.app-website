"use client";

import { useState } from "react";
import Link from "next/link";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";

const faqs = [
  { q: "How much does it cost?", a: "Free forever with three group sessions a month and up to four friends per session. Premium is €4.99/month (€29.99/year) — unlimited sessions, up to ten friends, full AI itinerary, no ads." },
  { q: "iOS and Android?", a: "Yes — both ship together in early Q3 2026, feature parity from day one." },
  { q: "How many people can join a group?", a: "Up to four friends on free, up to ten on Premium. Sessions are real-time — everyone swipes at once." },
  { q: "Is it safe with my friends’ data?", a: "Minimum data, EU-hosted (Frankfurt), no cross-site tracking, one-click delete. Your swipes are private in Round 1." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <AmbientLayer variant="center" dots={false} />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionIndex n="09" label="Questions" />
          <StatusChip kicker="Index" label={`${faqs.length} entries`} pulse={false} />
        </div>
        <RevealHeadline
          className="display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[0.88] tracking-[-0.03em] mb-14"
          lines={[
            { text: "Before" },
            { text: "you ask.", className: "italic text-gray-3" },
          ]}
        />
        <ul className="border-t border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-white/10">
                <button
                  className="w-full text-left py-6 flex items-baseline gap-6 group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="display text-[11px] text-white/40 tabular-nums shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <span className="display text-xl sm:text-2xl flex-1 tracking-[-0.015em]">{f.q}</span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-2xl text-gray-3 group-hover:text-white transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-14 pb-6 text-gray-1 leading-relaxed max-w-2xl">{f.a}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-10">
          <Link
            href="/help"
            className="text-sm text-gray-1 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/70"
          >
            Full help centre →
          </Link>
        </div>
      </div>
    </section>
  );
}
