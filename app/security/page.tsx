import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description: "How Veyago handles authentication, encryption, data retention, and breach contact.",
};

export default function Security() {
  return (
    <LegalPage eyebrow="Legal" title="Security" lastUpdated="20 April 2026">
      <h2>Authentication</h2>
      <p>
        Sign-in uses Supabase Auth — email magic links, Sign in with Apple, and Sign in with Google. We do
        not store passwords on the website. Session tokens are short-lived JWTs, refresh-rotated on use.
      </p>

      <h2>Encryption</h2>
      <p>
        TLS 1.2+ in transit. At rest, data is encrypted by Supabase’s managed Postgres using AES-256.
        Storage buckets are encrypted with per-bucket keys.
      </p>

      <h2>Data retention</h2>
      <ul>
        <li>Waitlist email — retained until you unsubscribe.</li>
        <li>Account data — retained until you delete your account (7-day soft-delete then hard delete).</li>
        <li>Operational logs — retained 30 days.</li>
        <li>Error reports (Sentry) — retained 90 days, redacted of PII.</li>
      </ul>

      <h2>Vendor security</h2>
      <p>
        Subprocessors handling PII must provide a current SOC 2 Type II attestation or equivalent. A full
        list is maintained at <a href="/subprocessors">/subprocessors</a>.
      </p>

      <h2>Reporting a vulnerability</h2>
      <p>
        Please email <a href="mailto:security@veyago.app">security@veyago.app</a>. We do not currently run a
        paid bounty programme, but we will acknowledge reports within 72 hours and list meaningful
        contributions in the next build log.
      </p>

      <h2>Breach notification</h2>
      <p>
        If we discover a personal-data breach, we will notify affected users and the relevant EU DPA within
        72 hours, per GDPR Art. 33.
      </p>
    </LegalPage>
  );
}
