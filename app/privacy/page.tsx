import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What Veyago collects, why, where it lives, and how to get it out.",
};

export default function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy policy" lastUpdated="20 April 2026">
      <h2>Summary</h2>
      <p>
        Veyago collects the minimum data it needs to run a swipe-and-bracket session and generate an
        itinerary. We host on Supabase EU-west (Frankfurt). We do not sell data. We do not run cross-site
        tracking. You can export or delete everything with one tap, from the app or from <code>/account</code>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Email, when you join the waitlist, sign in, or contact us.</li>
        <li>Name and home city — optional, for flight-time defaults.</li>
        <li>Swipes, bracket picks, and session metadata.</li>
        <li>Device type, OS version, and app version — for debugging.</li>
        <li>Background location — only if you explicitly opt in for the Explorer map.</li>
      </ul>

      <h2>Where it lives</h2>
      <p>
        All PII is stored in Supabase (EU-west / Frankfurt). Product analytics use PostHog (EU-hosted,
        cookie-less, first-party). Email is sent via Resend.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li><strong>Right to access</strong> — one-click data export (JSON + PDF) from <code>/account</code>.</li>
        <li><strong>Right to erasure</strong> — one-click deletion with a 7-day soft-delete grace period.</li>
        <li><strong>Right to portability</strong> — the export is in a machine-readable format.</li>
      </ul>

      <h2>Data Protection Officer</h2>
      <p>
        Cassian Drefke acts as DPO until Veyago Inc. staffs a dedicated role. Reach us at{" "}
        <a href="mailto:privacy@veyago.app">privacy@veyago.app</a>.
      </p>
    </LegalPage>
  );
}
