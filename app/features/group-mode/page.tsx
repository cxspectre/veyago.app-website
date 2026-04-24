import type { Metadata } from "next";
import Link from "next/link";
import { Dashboard } from "@/components/home/GroupMode";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "Group mode",
  description: "Up to 10 friends, real-time, one invite code. Group mode turns group chats into decisions.",
};

export default function GroupMode() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Feature · 03</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">Group mode.</h1>
          <p className="text-lg text-gray-1 max-w-2xl">
            Up to ten friends swiping at the same time. Six-character invite code. One winner.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Dashboard />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16">
          <Section title="How a session works">
            <p>
              A host starts a session and shares a 6-character code (VYG-XXXX) or a deep link
              (veyago://join/…). Up to ten friends join. Everyone swipes independently on the same deck.
            </p>
            <p>
              Round 1 is <strong>blind</strong> — you don’t see who’s swiped what. From Round 2 onwards,
              mutual matches appear as they happen: ‘You and 3 others both saved Tbilisi.’
            </p>
          </Section>

          <Section title="Real-time architecture">
            <p>
              Group sessions are built on Supabase Realtime WebSockets. Each swipe pushes a single 60-byte
              event; the session state is held server-side, which means nobody’s phone has to stay awake for
              the session to progress. If you drop off, you rejoin exactly where you were.
            </p>
          </Section>

          <Section title="Privacy">
            <ul>
              <li>You see aggregate matches, not individual swipes.</li>
              <li>The host sees only what you see — no admin view.</li>
              <li>Your swipe history is stored per-session, not globally linked to other people’s accounts.</li>
            </ul>
          </Section>

          <Section title="Session lifecycle">
            <p>
              Active → paused → expired (after 7 days of inactivity) → archived with its winner. Archived
              sessions are read-only; you can revisit the bracket and the itinerary any time.
            </p>
          </Section>

          <div className="border-t border-white/10 pt-10">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Read next</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/features/bracket" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                The bracket →
              </Link>
              <Link href="/features/itinerary" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                AI itinerary →
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
