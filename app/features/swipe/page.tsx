import type { Metadata } from "next";
import Link from "next/link";
import InteractiveSwipe from "@/components/home/InteractiveSwipe";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "The swipe",
  description: "Right to save, left to pass, up to super-save. A card stack of destinations tuned to you.",
};

export default function Swipe() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Feature · 01</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">The swipe.</h1>
          <p className="text-lg text-gray-1 max-w-2xl">
            A card stack of destinations. Right to save, left to pass, up to super-save. The fastest way we
            know to turn ‘everywhere’ into a shortlist.
          </p>
        </div>
      </section>

      <InteractiveSwipe />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16">
          <Section title="Mechanics">
            <p>
              Right = save. Left = pass. Up = super-save. That’s it. The detail sheet shows everything else —
              best time to go, average daily cost, group-friendliness score.
            </p>
            <p>
              You can super-save one card per free session (unlimited on Premium). Super-saves are
              double-weighted when the bracket resolves ties.
            </p>
          </Section>

          <Section title="What’s on each card">
            <ul>
              <li>Destination name and country.</li>
              <li>Hero image — one we chose, not a stock shot.</li>
              <li>One-line vibe tagline — ‘Coastal, sunlit, slow mornings.’</li>
              <li>Budget band — € / €€ / €€€.</li>
              <li>Best time to go — month range, colour-coded.</li>
            </ul>
          </Section>

          <Section title="Why swiping beats scrolling">
            <p>
              Scrolling is a browse interaction. Swiping is a decision interaction. The difference is small in
              UI terms and enormous in behavioural terms: swiping forces a yes-or-no on every card, which is
              exactly what a group planning a trip needs.
            </p>
            <p>
              Tinder didn’t invent swipe because it was novel. They invented it because it collapses decision
              fatigue into single-bit answers. We borrowed the interaction, not the context.
            </p>
            <p>
              Twenty cards, twenty seconds. That’s the target. By card six, you’re calibrated. By card twenty,
              you have a ranked shortlist without having ranked anything.
            </p>
          </Section>

          <Section title="Offline behaviour">
            <p>
              Your last 20 swipes are cached on-device. You can still discover on the plane — just sync when
              you land.
            </p>
          </Section>

          <div className="border-t border-white/10 pt-10">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Read next</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/features/bracket" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                The bracket →
              </Link>
              <Link href="/features/group-mode" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                Group mode →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-10">
      <h2 className="display text-2xl sm:text-3xl mb-5">{title}</h2>
      <div className="prose-mono">{children}</div>
    </div>
  );
}
