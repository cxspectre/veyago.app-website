import Image from "next/image";
import Link from "next/link";
import MagneticLink from "@/components/MagneticLink";
import { finalCtaBackdropImage } from "@/lib/marketingImagery";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <Image
        src={finalCtaBackdropImage}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-[center_38%] opacity-[0.22]"
        unoptimized
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 115%, rgba(255,168,99,0.28) 0%, rgba(255,168,99,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,17,31,0.88) 0%, rgba(9,17,31,0.55) 55%, rgba(9,17,31,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative py-24 sm:py-36">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 mb-8">
            <span className="display text-white/40 tabular-nums">§ 09</span>
            <span aria-hidden className="block w-10 h-px bg-white/20" />
            <span>Early Q3 2026</span>
          </div>
          <h2 className="display text-[2.5rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.86] tracking-[-0.035em] max-w-5xl">
            Stop scrolling.
          </h2>
          <h2 className="display italic text-[2.5rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.86] tracking-[-0.035em] max-w-5xl text-white/80">
            Start&nbsp;going.
          </h2>

          <p className="mt-10 text-gray-1 max-w-xl text-base sm:text-lg leading-relaxed">
            Get on the waitlist. One email the day we ship — TestFlight invite attached, no newsletter, no
            spam.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 items-center">
            <MagneticLink
              href="/waitlist"
              className="group bg-ink-100 text-ink-00 px-7 py-4 rounded-btn font-medium text-sm inline-flex items-center gap-2 hover:bg-ink-90 transition-colors"
            >
              Join the waitlist
              <span aria-hidden>→</span>
            </MagneticLink>
            <Link
              href="/features"
              className="text-sm text-gray-1 hover:text-white inline-flex items-center gap-2 underline underline-offset-8 decoration-white/20 hover:decoration-white/70"
            >
              See the features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
