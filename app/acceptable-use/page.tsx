import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Acceptable use policy",
  description: "What you can and can’t do with Veyago.",
};

export default function AcceptableUse() {
  return (
    <LegalPage eyebrow="Legal" title="Acceptable use" lastUpdated="20 April 2026">
      <p>
        Keep it legal, keep it civil, keep it working for everyone. The following are not allowed on Veyago:
      </p>

      <ul>
        <li>Harassing, threatening, or doxxing other users.</li>
        <li>Uploading content that is unlawful, hateful, or infringes on others’ rights.</li>
        <li>Scraping, reverse-engineering, or decompiling the app or the API.</li>
        <li>Creating fake accounts, automating sessions, or manipulating brackets.</li>
        <li>Using Veyago to distribute malware or phish other users.</li>
        <li>Probing, scanning, or load-testing our infrastructure without written permission.</li>
      </ul>

      <h2>Enforcement</h2>
      <p>
        Violations may result in content removal, account suspension, or permanent ban. Serious violations
        may be reported to relevant authorities.
      </p>

      <h2>Reporting</h2>
      <p>
        If you see something that breaks these rules, email{" "}
        <a href="mailto:support@veyago.app">support@veyago.app</a> with a link and a one-line description.
      </p>
    </LegalPage>
  );
}
