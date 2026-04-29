import type { Metadata } from "next";
import Link from "next/link";
import InvestorsDataRoomForm from "@/components/InvestorsDataRoomForm";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Veyago Inc. is raising €350k on a YC-standard post-money SAFE ($3.5M–$4.5M cap). App launch Q3 2026. Request the data room or invest from $100 on Wefunder.",
};

const round = [
  ["Instrument", "SAFE (YC standard, post-money)"],
  ["Target raise", "€350,000"],
  ["Valuation cap", "$3.5M–$4.5M (USD)"],
  ["Minimum check (direct)", "€5,000"],
  ["Minimum check (Wefunder Reg CF)", "$100"],
  ["Wefunder allocation", "€150,000–200,000 (of round)"],
  ["Direct allocation", "€150,000–200,000 (of round)"],
  ["Close target", "Q2 / Q3 2026"],
];

const inRoom = [
  "Pitch deck (v1, April 2026)",
  "Business plan (27 pages)",
  "App technical documentation (30 pages)",
  "Design specification (34 pages)",
  "Financial projections (3-year monthly)",
  "Cap table",
  "SAFE template (YC standard)",
  "IP assignment agreement",
  "Website documentation",
];

const fit = [
  "Backs consumer mobile apps at pre-seed / seed.",
  "Comfortable with a solo-founder round (contractor support post-close).",
  "Can co-invest alongside a US New York corporation (Veyago Inc.).",
];

export default function Investors() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Investors</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">
            Destination discovery, swipe to decide. Raising €350k SAFE.
          </h1>
          <p className="text-gray-1 text-lg max-w-2xl mb-8">
            Built by one founder. Underpinned by a 27-page business plan, 34-page product design spec, 30-page app
            technical doc, and a working React Native + Supabase build on the path to TestFlight (June 2026) and
            store launch (Q3 2026).
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#request-access"
              className="bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm"
            >
              Request data room →
            </a>
            <Link
              href="/invest"
              className="border border-white/20 text-white px-5 py-3 rounded-btn text-sm hover:bg-white/5"
            >
              Community round (from $100) →
            </Link>
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
                <li key={k} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-gray-2 shrink-0">{k}</span>
                  <span className="text-white text-right">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Traction</div>
            <p className="text-sm leading-relaxed text-gray-1">
              Pre-launch. Waitlist growth, session metrics, and operating KPIs are shared with qualified investors in
              the data room — we don&apos;t publish live counters on the public site.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-gray-2">
              <li className="flex gap-2">
                <span className="text-white/50" aria-hidden>
                  ·
                </span>
                Veyago Inc. incorporated (NY) · April 2026 · clean cap table; IP assignment chain documented.
              </li>
              <li className="flex gap-2">
                <span className="text-white/50" aria-hidden>
                  ·
                </span>
                ~200 launch destinations curated; affiliate programme relationships in progress (Skyscanner,
                Booking.com, GetYourGuide).
              </li>
              <li className="flex gap-2">
                <span className="text-white/50" aria-hidden>
                  ·
                </span>
                Public iOS + Android launch targeted Q3 2026; see the build log for weekly progress.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">The 30-second pitch</div>
          <p className="text-gray-1 text-lg leading-relaxed max-w-3xl">
            Veyago is a destination discovery app — a Tinder-style swipe combined with a four-round elimination bracket
            — so one person, a couple, or up to ten friends in real time can turn a pool of twenty destinations into one
            winning trip in under ten minutes. At the finish line: an AI-generated day-by-day itinerary with integrated
            booking deep-links. Premium is €4.99/month (€29.99/year). Affiliate relationships are disclosed. Data
            handling is GDPR-first (EU-hosted infrastructure). iOS and Android ship together in Q3 2026.
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
