import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";
import { AppStorePair } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "Download Veyago",
  description: "Download Veyago for iOS and Android. Launching Q3 2026 (TestFlight beta targeted June 2026).",
};

export default function Download() {
  return (
    <div className="min-h-[100dvh] flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-3xl w-full px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Q3 2026</div>
        <h1 className="display text-5xl sm:text-7xl mb-6">Veyago is almost here.</h1>
        <p className="text-gray-1 max-w-xl mx-auto mb-10">
          The iOS and Android apps ship together in Q3 2026 (TestFlight targeted June 2026). Drop your email, and
          we’ll tell you the moment it’s live on your phone.
        </p>

        <div className="max-w-md mx-auto">
          <WaitlistForm compact />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="text-xs uppercase tracking-widest text-gray-3">Or scan at launch</div>
          <div className="flex items-center gap-6 opacity-70">
            <QRStub label="iOS" />
            <div className="w-48 h-[360px] rounded-[28px] border border-white/10 bg-surface flex items-center justify-center text-gray-3 text-xs">
              app screenshot
            </div>
            <QRStub label="Android" />
          </div>
          <div className="mt-6">
            <AppStorePair muted />
          </div>
        </div>
      </div>
    </div>
  );
}

function QRStub({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-32 h-32 rounded-card border border-white/10 bg-surface grid grid-cols-6 grid-rows-6 gap-1 p-2">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className={`${[0, 5, 6, 10, 13, 14, 18, 25, 29, 31, 35].includes(i) ? "bg-white/70" : "bg-white/20"} rounded-sm`} />
        ))}
      </div>
      <div className="text-xs text-gray-3">{label}</div>
    </div>
  );
}
