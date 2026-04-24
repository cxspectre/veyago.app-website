import Image from "next/image";
import { destinations } from "@/lib/destinations";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import CornerMarks from "@/components/CornerMarks";

const lisbon = destinations[0];

const days = [
  {
    day: "Day 01",
    title: "Alfama & Baixa",
    blocks: [
      { time: "Morning", title: "Miradouro da Senhora do Monte at sunrise", note: "Arrive 06:40 for the best light. Coffee at Copenhagen Coffee on the way back." },
      { time: "Afternoon", title: "Walking loop through Alfama", note: "Tram 28 only one stop, then on foot. Pastéis at Fábrica da Nata." },
      { time: "Evening", title: "Fado dinner at Sr. Fado de Alfama", note: "Book 2 weeks out. ~€32pp including the couvert." },
    ],
  },
  {
    day: "Day 02",
    title: "Sintra day trip",
    blocks: [
      { time: "Morning", title: "Pena Palace", note: "First train 07:40. Buy entry online, skip the gate queue." },
      { time: "Afternoon", title: "Quinta da Regaleira", note: "Late afternoon light is best. Initiation Well is the money shot." },
      { time: "Evening", title: "Back to Lisbon for sunset", note: "Dinner at Taberna da Rua das Flores. No reservations — queue is part of the deal." },
    ],
  },
  {
    day: "Day 03",
    title: "Cascais & coast",
    blocks: [
      { time: "Morning", title: "Praia do Guincho", note: "30-min taxi. Go before 10 — wind picks up after lunch." },
      { time: "Afternoon", title: "Cascais old town", note: "Lunch at Mar do Inferno, seafood stew for two is enough for three." },
      { time: "Evening", title: "Swim, then train home", note: "Last comfortable train back to Lisbon is 21:12." },
    ],
  },
];

const rail = [
  { label: "Flights", partner: "Skyscanner", note: "€214 return from BRU" },
  { label: "Stay", partner: "Booking.com", note: "4 nights · Alfama · €612 total" },
  { label: "Things to do", partner: "GetYourGuide", note: "5 curated picks" },
];

export default function Itinerary() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <Image
        src={lisbon.image}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.14]"
        unoptimized
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy/95 to-navy-deep" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <SectionIndex n="04" label="The plan" />
          <RevealHeadline
            className="display text-[2.25rem] sm:text-5xl lg:text-6xl leading-[0.9] tracking-[-0.03em]"
            lines={[
              { text: "When you win," },
              { text: "the plan writes itself.", className: "italic text-gray-1/90" },
            ]}
          />
          <p className="text-gray-1 mt-6 max-w-lg leading-relaxed">
            Here’s what Veyago handed a real test group for Lisbon — 4 friends, mid-budget, mid-June.
            Generated in 2.1 seconds.
          </p>
        </div>

        <ItineraryCard />
      </div>
    </section>
  );
}

export function ItineraryCard() {
  return (
    <div className="relative rounded-card border border-white/10 bg-surface/80 backdrop-blur-sm overflow-hidden">
      <CornerMarks code="VYG-04-LIS" label="Plan · 03 days" />
      <div className="grid md:grid-cols-[1.4fr_1fr] border-b border-white/5">
        <div className="p-6 sm:p-8 flex items-center gap-5">
          <div className="relative w-16 h-16 rounded-btn overflow-hidden ring-1 ring-white/15">
            <Image src={lisbon.image} alt={lisbon.name} fill sizes="80px" className="object-cover" unoptimized />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-3">Itinerary</div>
            <div className="display text-2xl sm:text-3xl leading-none mt-1">{lisbon.name}, {lisbon.country}</div>
            <div className="text-xs text-gray-2 mt-2">4 friends · Mid-budget · Mid-June · 3 days</div>
          </div>
        </div>
        <div className="p-6 sm:p-8 grid grid-cols-3 gap-4 border-t md:border-t-0 md:border-l border-white/5">
          <Stat label="Total" value="€1,038" hint="per person" />
          <Stat label="Flights" value="2.5h" hint="from BRU" />
          <Stat label="Vibe fit" value="94%" hint="group avg" />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_320px]">
        <div className="divide-y divide-white/5">
          {days.map((d) => (
            <div key={d.day} className="p-6 sm:p-8">
              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-3">{d.day}</div>
                  <div className="display text-xl mt-1">{d.title}</div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-3">3 blocks</span>
              </div>
              <ul className="space-y-4">
                {d.blocks.map((b) => (
                  <li key={b.time} className="grid grid-cols-[90px_1fr] gap-4">
                    <div className="text-[10px] uppercase tracking-widest text-gray-3 pt-1">{b.time}</div>
                    <div>
                      <div className="text-white text-sm">{b.title}</div>
                      <div className="text-xs text-gray-2 mt-1 leading-relaxed">{b.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <aside className="p-6 sm:p-8 border-t md:border-t-0 md:border-l border-white/5 bg-navy/40">
          <div className="text-[10px] uppercase tracking-widest text-gray-3 mb-4">Booking rail</div>
          <ul className="space-y-4">
            {rail.map((r) => (
              <li key={r.label} className="rounded-btn border border-white/10 p-4 hover:border-white/25 transition-colors">
                <div className="flex justify-between items-baseline">
                  <div className="display text-sm">{r.label}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-3">{r.partner}</div>
                </div>
                <div className="text-xs text-gray-1 mt-2">{r.note}</div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[10px] uppercase tracking-widest text-gray-3 leading-relaxed">
            Affiliate · disclosed · price unchanged
          </p>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-gray-3">{label}</div>
      <div className="display text-xl sm:text-2xl mt-1">{value}</div>
      <div className="text-[10px] text-gray-3 mt-0.5">{hint}</div>
    </div>
  );
}
