import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest via Wefunder",
  description:
    "Veyago pre-seed on Wefunder — Regulation Crowdfunding. Invest from $100 on the same SAFE terms as the direct round (YC standard, post-money, $3.5M–$4.5M cap).",
};

export default function Invest() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Wefunder</div>
          <h1 className="display text-5xl sm:text-7xl mb-6">Community round — pre-seed.</h1>
          <p className="text-gray-1 text-lg max-w-2xl">
            Veyago Inc. is raising a <strong className="text-white font-medium">€350,000</strong> pre-seed on a{" "}
            <strong className="text-white font-medium">YC-standard post-money SAFE</strong> with a{" "}
            <strong className="text-white font-medium">$3.5M–$4.5M</strong> valuation cap. This page points to our{" "}
            <strong className="text-white font-medium">Wefunder</strong> Regulation Crowdfunding campaign so friends,
            users, and smaller checks can participate alongside accredited and direct investors.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-gray-2 max-w-xl">
            <li className="flex gap-2">
              <span className="text-white/40" aria-hidden>
                ·
              </span>
              <span>
                <strong className="text-gray-1">Minimum on Wefunder:</strong>{" "}
                <span className="display text-white">$100</span> — same instrument as the direct round, subject to
                campaign disclosures and SEC limits.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-white/40" aria-hidden>
                ·
              </span>
              <span>
                <strong className="text-gray-1">What you&apos;re backing:</strong> the first public version of Veyago
                — swipe-and-bracket destination discovery for groups, with an AI itinerary at the end — shipping iOS and
                Android in <strong className="text-white">Q3 2026</strong>.
              </span>
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wefunder.com/veyago?invite_token=oam5dy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm hover:bg-ink-90 transition-colors"
            >
              Open Wefunder campaign →
            </a>
            <a
              href="/investors"
              className="inline-flex border border-white/20 text-white px-5 py-3 rounded-btn text-sm hover:bg-white/5 transition-colors"
            >
              Accredited / direct investors →
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6">
          <div className="rounded-card border border-white/10 bg-surface p-6 text-sm text-gray-1 leading-relaxed">
            <strong className="block text-gray-2 mb-2 text-xs uppercase tracking-widest">Regulation Crowdfunding</strong>
            Securities are offered only through Wefunder&apos;s portal. Investing is risky; you can lose your entire
            investment. Read the Form C (or equivalent offering document), financials, and risk factors on Wefunder
            before you invest. Nothing on veyago.app is an offer to sell securities except as made through the
            registered portal.
          </div>
          <p className="text-xs text-gray-3 leading-relaxed">
            Questions? <a href="mailto:hello@veyago.app" className="text-gray-2 underline underline-offset-4 hover:text-white">hello@veyago.app</a>
            {" · "}
            <a href="/investors" className="text-gray-2 underline underline-offset-4 hover:text-white">
              veyago.app/investors
            </a>{" "}
            for the data room and deck.
          </p>
        </div>
      </section>
    </>
  );
}
