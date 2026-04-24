import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: "Get Veyago before everyone else. One email at launch. One referral credit per friend.",
};

export default function Waitlist() {
  return (
    <div className="min-h-[100dvh] flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-xl w-full px-5 sm:px-8">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Early access</div>
        <h1 className="display text-4xl sm:text-6xl mb-4">Get Veyago before everyone else.</h1>
        <p className="text-gray-1 mb-10 max-w-lg">
          Veyago ships in early Q3 2026. The waitlist gets it first — with a TestFlight invite and a founder-signed
          launch note.
        </p>

        <WaitlistForm showReferredBy />

        <ul className="mt-12 space-y-4 text-sm text-gray-1">
          <li className="flex items-start gap-3">
            <span className="display text-gray-3 w-5">→</span>
            Early TestFlight invite for iOS.
          </li>
          <li className="flex items-start gap-3">
            <span className="display text-gray-3 w-5">→</span>
            Founder-signed launch email.
          </li>
          <li className="flex items-start gap-3">
            <span className="display text-gray-3 w-5">→</span>
            One referral credit for every friend who joins from your link.
          </li>
        </ul>

        <p className="mt-10 text-xs text-gray-3 max-w-sm">
          One email at launch. That’s it. Unsubscribe in one click. Read our{" "}
          <Link href="/privacy" className="underline hover:text-white">privacy policy</Link>.
        </p>
      </div>
    </div>
  );
}
