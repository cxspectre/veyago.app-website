import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest via Wefunder",
  description: "Veyago’s Wefunder Reg CF campaign. Placeholder until live.",
};

export default function Invest() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Wefunder</div>
          <h1 className="display text-5xl sm:text-7xl mb-6">Community round — coming soon.</h1>
          <p className="text-gray-1 text-lg max-w-2xl">
            Once our Wefunder Reg CF campaign is live, this is where it will live on the web. Minimum check
            will be <span className="display text-white">$100</span>. Same SAFE terms as the direct round.
          </p>
          <div className="mt-8">
            <button
              disabled
              className="bg-white/10 text-white/40 px-5 py-3 rounded-btn text-sm cursor-not-allowed"
              aria-disabled
            >
              Invest on Wefunder → (not live yet)
            </button>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="rounded-card border border-white/10 bg-surface p-6 text-xs text-gray-3 leading-relaxed">
            <strong className="block text-gray-2 mb-2 text-sm">Regulatory disclosure placeholder</strong>
            Required Regulation Crowdfunding disclosures will be rendered inline here once the campaign is
            approved and live. Offerings will only be made through the Wefunder portal. Nothing on this page
            is an offer to sell securities.
          </div>
        </div>
      </section>
    </>
  );
}
