import Link from "next/link";
import WaitlistForm from "./WaitlistForm";

export function WaitlistInline() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Early access</div>
        <h2 className="display text-3xl sm:text-5xl mb-4">Get early access.</h2>
        <p className="text-gray-1 mb-8">1 email at launch. That’s it.</p>
        <div className="max-w-xl mx-auto">
          <WaitlistForm compact />
        </div>
      </div>
    </section>
  );
}

export function AppStorePair({ muted = true }: { muted?: boolean }) {
  const cls = muted ? "opacity-60 pointer-events-none" : "";
  return (
    <div className={`flex flex-wrap gap-3 ${cls}`}>
      <div className="inline-flex items-center gap-3 border border-white/20 rounded-btn px-4 py-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M16.37 12.76c.02-2.02 1.65-3 1.72-3.05-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.43.73-3.06.73-.64 0-1.61-.71-2.65-.69-1.36.02-2.63.79-3.33 2.01-1.42 2.47-.36 6.13 1.03 8.14.68.98 1.49 2.09 2.54 2.05 1.02-.04 1.41-.66 2.64-.66 1.23 0 1.58.66 2.66.64 1.1-.02 1.79-1 2.46-1.99.78-1.14 1.1-2.24 1.12-2.3-.02-.01-2.14-.82-2.21-3.3zM14.38 6.13c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.4-1.14z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] text-gray-2 leading-none">Download on the</div>
          <div className="text-sm font-medium leading-tight">App Store</div>
        </div>
      </div>
      <div className="inline-flex items-center gap-3 border border-white/20 rounded-btn px-4 py-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3.6 2.1c-.2.2-.3.5-.3.9v18c0 .4.1.7.3.9l.1.1 10.2-10.1v-.2L3.7 2.1H3.6z" />
          <path d="M17.2 15.1l-3.3-3.3v-.2l3.3-3.3.1.1 4 2.3c1.1.6 1.1 1.7 0 2.3l-4.1 2.1z" />
          <path d="M17.3 15L13.8 11.5 3.6 21.8c.4.4 1 .4 1.7.1l12-6.9z" />
          <path d="M17.3 8L5.3 1.2c-.7-.4-1.3-.3-1.7.1l10.2 10.2L17.3 8z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] text-gray-2 leading-none">Get it on</div>
          <div className="text-sm font-medium leading-tight">Google Play</div>
        </div>
      </div>
    </div>
  );
}

export function InvestorCTA() {
  return (
    <div className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <Link
          href="/investors"
          className="inline-flex items-center gap-2 text-sm text-gray-1 hover:text-white transition-colors"
        >
          Reviewing the round? Request access →
        </Link>
      </div>
    </div>
  );
}

