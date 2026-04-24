import type { Metadata } from "next";
import Link from "next/link";
import { BracketViz } from "@/components/home/Bracket";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "The bracket",
  description: "20 → 10 → 5 → 1. An elimination round, not a vote. One winner, every time.",
};

export default function Bracket() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Feature · 02</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">The bracket.</h1>
          <p className="text-lg text-gray-1 max-w-2xl">
            Twenty destinations enter. One leaves. A four-round elimination that beats linear voting every
            time.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BracketViz />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16">
          <Section title="How it works">
            <p>
              After everyone swipes, we take the top-20 combined shortlist and run it through a four-round
              elimination. Round 1 pairs 20 into 10. Round 2 takes 10 to 5. Round 3 cuts 5 to 3, then 3 to 2.
              Round 4 is the final.
            </p>
            <p>
              Every round is a head-to-head: Lisbon vs Porto, Kyoto vs Tokyo, Tbilisi vs Yerevan. You tap the
              one you want. You don’t rank. You don’t score. You choose.
            </p>
          </Section>

          <Section title="Why elimination beats voting">
            <p>
              Linear voting — everyone gives each option a score 1–5 — is famously broken for groups. It
              rewards blandness: the destination nobody loves but nobody hates wins. Condorcet paradoxes make
              it worse.
            </p>
            <p>
              Pairwise comparison, by contrast, converges on the option that beats the most other options
              head-to-head. It’s the Borda-count / round-robin tournament family, and it produces a clear
              winner every time with far less cognitive load on the participants.
            </p>
            <p>Translation: elimination brackets produce trips people actually want to take.</p>
          </Section>

          <Section title="Ties & super-saves">
            <p>
              If a round ties in a group session, super-saves break it: any destination someone super-saved
              counts as 1.5 votes. If it’s still tied, the host casts the deciding vote.
            </p>
          </Section>

          <div className="border-t border-white/10 pt-10">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Read next</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/features/swipe" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                The swipe →
              </Link>
              <Link href="/features/itinerary" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                AI itinerary →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-10">
      <h2 className="display text-2xl sm:text-3xl mb-5">{title}</h2>
      <div className="prose-mono">{children}</div>
    </div>
  );
}
