import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data room",
  description: "Gated investor data room. Access requires a valid magic link.",
  robots: { index: false, follow: false },
};

export default function DataRoom() {
  return (
    <div className="min-h-[100dvh] flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-md px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Gated</div>
        <h1 className="display text-4xl mb-4">Data room</h1>
        <p className="text-gray-1 text-sm mb-8">
          This surface is only accessible via a one-time magic link. If you have one, check your email — it
          expires 30 days from issue. Every document is watermarked with the recipient’s name and email.
        </p>
        <a
          href="/investors"
          className="inline-flex text-sm border border-white/20 rounded-btn px-4 py-2.5 hover:bg-white/5"
        >
          ← Back to investor page
        </a>
      </div>
    </div>
  );
}
