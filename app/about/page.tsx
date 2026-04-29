import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WaitlistInline } from "@/components/CTABlocks";
import founderPhoto from "@/Images/Profile Pic CD.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, origin, founder, values, and company facts — for anyone who wants the unfiltered version in under a minute.",
};

const values = [
  {
    v: "Honest",
    d: "If we broke it, we say so. Perfect marketing is suspicious marketing.",
  },
  {
    v: "Product-first",
    d: "Features wait until a real user has asked, in some form. Ideas are cheap; shipping isn’t.",
  },
  {
    v: "Privacy by default",
    d: "Minimum data. EU-hosted. Off-by-default tracking. One-click delete.",
  },
  {
    v: "Deliberate",
    d: "Monochrome, one founder, one stack, one roadmap. The constraints are the thing.",
  },
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">About</div>
          <h1 className="display text-5xl sm:text-7xl lg:text-[6rem] leading-[0.92] max-w-4xl">
            Discovery should feel as good
            <br />
            <span className="text-gray-3">as the trip itself.</span>
          </h1>
        </div>
      </section>

      <section className="scroll-mt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,300px)_1.55fr] gap-10 md:gap-14 lg:gap-16 items-start">
          <div id="about-founder" className="scroll-mt-28">
            <FounderCard />
          </div>
          <div id="about-origin" className="prose-mono min-w-0 scroll-mt-28">
            <h2 className="!mt-0">Origin</h2>
            <p>
              Veyago started as a specific frustration: a group chat between five friends that went eleven weeks
              without deciding on a destination. Each person had twenty suggestions. Nobody could rank them.
              Everybody wanted the same thing — a decision — and nobody had a way to get there.
            </p>
            <p>
              The shape of the product — <strong>swipe to shortlist, bracket to decide</strong> — came from the
              behavioural literature on decision fatigue, tournament selection, and how groups actually close on
              options in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <blockquote className="relative max-w-4xl border-l-2 border-white pl-6 sm:pl-10">
            <span
              aria-hidden
              className="display absolute -top-10 -left-2 text-[8rem] leading-none text-white/10 select-none"
            >
              “
            </span>
            <p className="display text-2xl sm:text-4xl lg:text-5xl leading-[1.1] text-white">
              Every hire before product-market fit changes the thing you’re trying to find. A team of one is a
              decision, not a gap.
            </p>
            <footer className="mt-6 text-sm text-gray-2">
              — Cassian Drefke ·{" "}
              <Link
                href="/faq/why-solo"
                className="underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-white/50"
              >
                why solo
              </Link>
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="about-values" className="scroll-mt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.v} className="rounded-card border border-white/10 bg-surface p-6">
                <div className="display text-xl mb-3">{v.v}</div>
                <p className="text-sm text-gray-1 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-company" className="scroll-mt-28 border-t border-white/10 pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-end">
          <div className="prose-mono min-w-0">
            <h2 className="!mt-0">The company</h2>
            <p>
              <strong>Veyago Inc.</strong> is a New York business corporation, incorporated April 2026 (DOS ID
              7899587). Registered agent for service of process in Albany, NY. Sole founder and 100% shareholder:{" "}
              <strong>Cassian Drefke</strong>.
            </p>
            <p>
              The mobile app is roughly <strong>45% built</strong> as of April 2026 (React Native, Expo, Supabase).
              Public launch target: <strong>Q3 2026</strong> on iOS and Android together, with a TestFlight beta
              targeted for June 2026.
            </p>
            <p>
              A <strong>pre-seed</strong> round is open — <strong>€350,000</strong> on a YC-standard post-money SAFE
              with a <strong>$3.5M–$4.5M</strong> valuation cap. Minimum direct check: <strong>€5,000</strong>. A{" "}
              <strong>Wefunder</strong> Reg CF allocation is also open; community investors can participate from{" "}
              <strong>$100</strong> — see <Link href="/invest" className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60">Invest via Wefunder</Link>.
            </p>
            <div className="not-prose mt-10 flex flex-wrap gap-3">
              <Link
                href="/investors"
                className="rounded-btn border border-white/20 px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
              >
                Investor materials →
              </Link>
              <a
                href="mailto:press@veyago.app?subject=Press%20inquiry%20%E2%80%94%20Veyago"
                className="rounded-btn border border-white/20 px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
              >
                Email press →
              </a>
            </div>
          </div>
          <dl className="grid shrink-0 grid-cols-2 gap-6 gap-y-8 text-sm sm:min-w-[16rem]">
            <Fact label="Founded" value="2026" />
            <Fact label="HQ" value="Belgium · New York (inc.)" />
            <Fact label="Employees" value="1" />
            <Fact label="Stack" value="React Native · Supabase · Next.js" />
          </dl>
        </div>
      </section>

      <section id="about-build-log" className="scroll-mt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-card border border-white/10 bg-surface/60 p-6 sm:p-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-3">Build log</div>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-1 sm:text-lg">
              Veyago is being built in public. Weekly progress updates — what shipped, what broke, what changed —
              are posted here.
            </p>
            <Link
              href="/build-log"
              className="mt-6 inline-flex text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60"
            >
              Read the build log →
            </Link>
          </div>
        </div>
      </section>

      <section id="about-questions" className="scroll-mt-28 border-t border-white/10 pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="display text-xl text-white sm:text-2xl">Questions</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-1 sm:text-base">
            Why solo, why a New York corporation, why a SAFE, what the timeline really is — a longer FAQ belongs
            here. Until
            it ships, start with{" "}
            <Link
              href="/faq/why-solo"
              className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
            >
              why solo
            </Link>{" "}
            or the{" "}
            <Link
              href="/help"
              className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
            >
              help centre
            </Link>
            .
          </p>
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}

function FounderCard() {
  return (
    <div className="rounded-card border border-white/10 bg-surface p-5 md:sticky md:top-28">
      <div className="relative mb-6 aspect-square max-w-[280px] overflow-hidden rounded-btn border border-white/10 bg-navy mx-auto md:mx-0">
        <Image
          src={founderPhoto}
          alt="Cassian Drefke, founder"
          fill
          sizes="(max-width: 768px) 280px, 300px"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-5">
          <div className="text-[10px] uppercase tracking-widest text-white/70">Founder · CEO</div>
          <div className="display mt-1 text-lg leading-tight sm:text-xl">Cassian Drefke</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-1">
        Founder & CEO. Product strategy, full-stack engineering (React Native, Supabase, OpenAI), UI/UX, and
        investor relations — shipping the first versions end to end.
      </p>
      <ul className="mt-5 space-y-2 text-xs text-gray-1">
        <li>· Waterloo, Belgium — building US network (New York)</li>
        <li>· BSc International Management (in progress) · EN / NL / FR / DE</li>
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/5 pt-5 text-xs">
        <a
          href="mailto:hello@veyago.app"
          className="text-gray-1 underline decoration-white/20 underline-offset-4 hover:text-white"
        >
          hello@veyago.app
        </a>
        <a
          href="https://linkedin.com/in/cassiandrefke"
          className="text-gray-1 underline decoration-white/20 underline-offset-4 hover:text-white"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-widest text-gray-3">{label}</dt>
      <dd className="display text-lg mt-1">{value}</dd>
    </div>
  );
}
