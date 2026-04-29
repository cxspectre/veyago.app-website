"use client";

import { useState } from "react";
import Link from "next/link";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";

const faqs = [
  {
    q: "What is Veyago?",
    a: "A travel destination discovery app: you swipe on places you like, then run a four-round elimination bracket until one destination wins. It’s built for the moment nobody in the group chat can decide where to go — solo travellers, couples, or up to ten friends in real time. After the bracket, Premium unlocks a streaming AI itinerary (morning / afternoon / evening) with booking deep-links.",
  },
  {
    q: "How much does it cost?",
    a: "Free tier: three bracket sessions per month, group size up to four, 200 destinations in the library, sponsored cards at a capped density. Premium is €4.99/month or €29.99/year — unlimited sessions, group size up to ten, full AI itinerary builder, 500+ destinations including hidden gems, no sponsored cards, and cross-device sync.",
  },
  {
    q: "When do iOS and Android launch?",
    a: "Both platforms are planned to ship together in Q3 2026, with feature parity from day one. A TestFlight beta is targeted for June 2026. Join the waitlist for TestFlight and launch updates.",
  },
  {
    q: "How does group mode work?",
    a: "The host starts a session and shares a six-character invite code (VYG-XXXX) or a deep link. Up to ten people swipe in real time over WebSockets; in round one, no one sees others’ picks so the group avoids herding. From round two onward, cards can show how many people saved each destination. Sessions stay open for seven days so friends can catch up asynchronously.",
  },
  {
    q: "How long does a session take?",
    a: "Most bracket sessions finish in about eight to twelve minutes end to end — twenty destinations in, one winner out, then optional itinerary generation for Premium users.",
  },
  {
    q: "Is my data safe?",
    a: "We collect the minimum needed to run accounts and sessions. Infrastructure is EU-oriented (e.g. AWS eu-west-1, Ireland) with encryption in transit and at rest, no IDFA, and one-click account deletion. Full detail is in the privacy policy and security page.",
  },
  {
    q: "Do you sell my data?",
    a: "No. We don’t sell personal data. Some outbound booking links are affiliate relationships — always disclosed — and they don’t change how the matching engine ranks destinations for you.",
  },
  {
    q: "Can I invest in Veyago?",
    a: "Yes. We’re raising a €350k pre-seed on a YC-standard post-money SAFE ($3.5M–$4.5M cap). Direct checks typically start at €5,000; friends and community can participate from $100 via our Wefunder Reg CF campaign. See the investors page for the data room or the Wefunder page for the community round.",
  },
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
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
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
                    <div className="pl-14 pb-6 text-gray-1 leading-relaxed max-w-2xl">
                      {f.q === "Can I invest in Veyago?" ? (
                        <>
                          {f.a.split("See the investors page")[0]}
                          <Link
                            href="/investors"
                            className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
                          >
                            investors page
                          </Link>
                          {" for the data room or the "}
                          <Link
                            href="/invest"
                            className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
                          >
                            Wefunder page
                          </Link>
                          {" for the community round."}
                        </>
                      ) : (
                        f.a
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/help"
            className="text-sm text-gray-1 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/70"
          >
            Full help centre →
          </Link>
          <Link
            href="/waitlist"
            className="text-sm text-gray-1 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/70"
          >
            Join the waitlist →
          </Link>
        </div>
      </div>
    </section>
  );
}
