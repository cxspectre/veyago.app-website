import type { Metadata } from "next";
import Link from "next/link";
import InvestorsDataRoomForm from "@/components/InvestorsDataRoomForm";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Veyago is raising a €350k SAFE. App launch targeted for early Q3 2026. Request access to the data room.",
};

const round = [
  ["Instrument", "SAFE (YC standard, post-money)"],
  ["Target raise", "€350,000"],
  ["Valuation cap", "€6–8M"],
  ["Minimum check", "€5,000"],
  ["Close target", "July 2026"],
];

const inRoom = [
  "Pitch deck",
  "Business plan",
  "App documentation",
  "Design specification",
  "Financial projections (3-year monthly)",
  "Cap table",
  "SAFE template (YC standard)",
  "IP assignment agreement",
];

const fit = [
  "Backs consumer mobile apps at seed / pre-seed.",
  "Comfortable with a solo-founder round (pre-team).",
  "Can co-invest with a US Delaware C-Corp.",
];

export default function Investors() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Investors</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">
            The swipe-and-bracket travel app. Raising €350k SAFE.
          </h1>
          <p className="text-gray-1 text-lg max-w-2xl mb-8">
            Built by one founder. Backed by a 3-year business plan, a 31-page spec, and a working app.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#request-access"
              className="bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm"
            >
              Request access →
            </a>
            <Link
              href="https://cal.com/veyago/investor-call"
              className="border border-white/20 text-white px-5 py-3 rounded-btn text-sm hover:bg-white/5"
            >
              Book a 30-min call
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">The round</div>
            <ul className="divide-y divide-white/5">
              {round.map(([k, v]) => (
                <li key={k} className="flex justify-between py-3 text-sm">
                  <span className="text-gray-2">{k}</span>
                  <span className="text-white text-right">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Traction</div>
            <p className="text-sm leading-relaxed text-gray-1">
              Pre-launch. Waitlist size, growth, and other operating metrics are shared with qualified investors
              in the data room — we don&apos;t publish live counters on the public site.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-gray-2">
              <li className="flex gap-2">
                <span className="text-white/50" aria-hidden>
                  ·
                </span>
                Curated destination deck and core flows in active development (see build log).
              </li>
              <li className="flex gap-2">
                <span className="text-white/50" aria-hidden>
                  ·
                </span>
                Early access list open; launch targeted early Q3 2026.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">The 30-second pitch</div>
          <p className="text-gray-1 text-lg leading-relaxed max-w-3xl">
            Group travel planning is broken. Eight people, forty-three messages, zero decisions. Veyago
            replaces that with a swipe-and-bracket flow: 20 destinations, four elimination rounds, one
            winner, one auto-generated day-by-day plan. Premium is €4.99/mo. Booking links are
            affiliate-disclosed. EU-hosted, GDPR-first, iOS and Android at launch. Early Q3 2026.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">What’s in the data room</div>
          <div className="rounded-card border border-white/10 bg-surface p-8">
            <p className="text-sm text-gray-2 mb-5">
              A list, not the contents. Access granted on request.
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-gray-1">
              {inRoom.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="text-gray-3">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Who’s a fit</div>
          <ul className="space-y-3 text-gray-1">
            {fit.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-gray-3">·</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="request-access" className="pb-24">
        <div className="mx-auto max-w-xl px-5 sm:px-8">
          <div className="rounded-card border border-white/10 bg-surface p-8">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Request access</div>
            <h2 className="display text-3xl mb-5">A magic link to the data room.</h2>
            <p className="text-sm text-gray-1 mb-6">
              Submissions are approved manually. Links expire in 30 days. Documents are watermarked.
            </p>
            <InvestorsDataRoomForm />
          </div>
        </div>
      </section>
    </>
  );
}

