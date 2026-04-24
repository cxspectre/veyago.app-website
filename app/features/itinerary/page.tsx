import type { Metadata } from "next";
import Link from "next/link";
import { ItineraryCard } from "@/components/home/Itinerary";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "AI itinerary",
  description: "When you win the bracket, the day-by-day plan writes itself.",
};

export default function Itinerary() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Feature · 04</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">
            When you win, the plan writes itself.
          </h1>
          <p className="text-lg text-gray-1 max-w-2xl">
            A generated day-by-day itinerary tuned to your group size, budget, and vibe. Booking links
            included, always disclosed.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ItineraryCard />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16">
          <Section title="What feeds in">
            <ul>
              <li>The destination that won your bracket.</li>
              <li>Group size (you told us when you started the session).</li>
              <li>Declared vibe — beach, city, nature, food, or mixed.</li>
              <li>Budget band (€ / €€ / €€€).</li>
              <li>Season you’re travelling in.</li>
            </ul>
          </Section>

          <Section title="What’s generated">
            <ul>
              <li>One morning / afternoon / evening block per day.</li>
              <li>Top-5 restaurants ranked for your budget.</li>
              <li>Must-see spots, with travel-time estimates between them.</li>
              <li>Daily budget expectation.</li>
              <li>A one-paragraph ‘local etiquette’ note.</li>
            </ul>
          </Section>

          <Section title="Disclosure">
            <p>
              Booking links are affiliate-tagged. Veyago may earn a commission if you book through them.
              This doesn’t change the price, and it doesn’t change which options we recommend — the ranking
              is based purely on fit. Read the full <Link href="/affiliates">affiliate disclosure</Link>.
            </p>
          </Section>

          <div className="border-t border-white/10 pt-10">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Read next</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/features/bracket" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                The bracket →
              </Link>
              <Link href="/features/map" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                Explorer map →
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
