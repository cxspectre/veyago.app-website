import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "What cookies we set, why, and how to control them.",
};

export default function Cookies() {
  return (
    <LegalPage eyebrow="Legal" title="Cookie policy" lastUpdated="20 April 2026">
      <p>
        We use first-party, cookie-less analytics via PostHog (EU-hosted). The only browser storage we use
        for veyago.app is a local-storage flag that remembers your cookie-banner choice so we don’t show it
        again.
      </p>

      <h2>What we set</h2>
      <ul>
        <li><code>veyago.cookie-consent</code> — your choice from the cookie banner (accept / reject / manage).</li>
        <li>Session cookies for <code>/account</code> when you’re signed in (v1.2+).</li>
      </ul>

      <h2>Managing your choice</h2>
      <p>
        You can change your preference at any time by opening the cookie banner from any footer, or by
        clearing <code>veyago.app</code> local storage.
      </p>
    </LegalPage>
  );
}
