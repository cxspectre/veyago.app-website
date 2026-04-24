import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Your GDPR & UK GDPR rights",
  description: "Your eight data rights under GDPR and UK GDPR, in plain English, and exactly how to use them.",
};

export default function GDPR() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Your GDPR & UK GDPR rights"
      effectiveDate="24 April 2026"
      lastUpdated="24 April 2026"
    >
      <div className="legal-plain">
        <strong>The short version.</strong> If you're in the EU, UK, EEA, or Switzerland, you have eight rights over the data we hold about you. This page explains each one in plain English and how to use it. We respond within 30 days, free of charge, and we'd rather help you directly than have you go to a regulator.
      </div>

      <h2>1. Who this page is for</h2>
      <p>
        This page summarises the rights you have under the <strong>EU General Data Protection Regulation (GDPR)</strong> and the <strong>UK GDPR</strong> (as amended by the <strong>Data (Use and Access) Act 2025</strong>). We voluntarily extend the same rights to all Veyago users worldwide, as a matter of policy.
      </p>
      <p>For the full detail of what data we collect and why, see our <a href="/privacy">Privacy Policy</a>.</p>

      <h2>2. Your eight rights, in plain English</h2>

      <h3>2.1 The right to be informed</h3>
      <div className="legal-plain">
        You have the right to know, in clear language, what data we collect, why, how long we keep it, and who we share it with.
      </div>
      <p>Read our <a href="/privacy">Privacy Policy</a> — that's what it's for. If anything is unclear, email <a href="mailto:hello@veyago.app">hello@veyago.app</a> and we'll explain it.</p>

      <h3>2.2 The right of access (Article 15)</h3>
      <div className="legal-plain">
        You have the right to a copy of the personal data we hold about you, and information about how we use it.
      </div>
      <p><strong>How to use it.</strong> Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> from the address on your account, or use the <strong>Export my data</strong> button in Settings.</p>
      <p><strong>What you get.</strong> A machine-readable JSON file containing your account data, preferences, swipe history, group session participation, subscription status, and Explorer Map data (if enabled). We'll include a short summary explaining what each field means.</p>
      <p><strong>How long it takes.</strong> Within <strong>one month</strong> of a valid request.</p>

      <h3>2.3 The right to rectification (Article 16)</h3>
      <div className="legal-plain">
        You have the right to correct inaccurate or incomplete personal data.
      </div>
      <p><strong>How to use it.</strong> Most fields are editable in Settings. For anything you can't edit yourself, email <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>

      <h3>2.4 The right to erasure — "the right to be forgotten" (Article 17)</h3>
      <div className="legal-plain">
        You have the right to have your personal data deleted.
      </div>
      <p><strong>How to use it.</strong> Tap <strong>Delete my account</strong> in Settings, or email <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>
      <p><strong>What happens.</strong> Your account becomes immediately inaccessible. Within <strong>30 days</strong> we delete your data from active systems, and within <strong>60 days</strong> from backups. Some data we're legally required to keep for longer — tax records (7 years), certain fraud prevention logs — we keep the minimum required and nothing else.</p>
      <p><strong>Limits.</strong> We can decline erasure where we have a legal obligation to keep data, where processing is necessary for establishing or defending legal claims, or where other specific GDPR exemptions apply. If we decline, we'll tell you why.</p>

      <h3>2.5 The right to restrict processing (Article 18)</h3>
      <div className="legal-plain">
        You have the right to tell us to pause using your data while we sort something out — for example, while we check whether data is accurate, or while we consider an objection.
      </div>
      <p><strong>How to use it.</strong> Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> explaining what you'd like restricted and why. During a restriction we store the data but don't otherwise process it.</p>

      <h3>2.6 The right to data portability (Article 20)</h3>
      <div className="legal-plain">
        For the data you've given us, you have the right to receive it in a structured, commonly used, machine-readable format and to ask us to send it to another service where technically feasible.
      </div>
      <p><strong>Format.</strong> We export as <strong>JSON</strong>. We can provide CSV for specific subsets (for example, your travel footprint) on request.</p>
      <p><strong>How to use it.</strong> Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> or use the <strong>Export my data</strong> button in Settings.</p>

      <h3>2.7 The right to object (Article 21)</h3>
      <div className="legal-plain">
        You have the right to object to processing based on our legitimate interests, and an absolute right to object to direct marketing.
      </div>
      <p><strong>How to use it.</strong> For marketing emails, click <strong>Unsubscribe</strong> in any email. For analytics (PostHog), open <strong>Cookie settings</strong> (website) or <strong>Privacy</strong> (app) and turn off analytics. For other legitimate-interest processing, email <a href="mailto:hello@veyago.app">hello@veyago.app</a> explaining which processing you're objecting to.</p>
      <p><strong>What happens for marketing.</strong> We stop immediately.</p>
      <p><strong>What happens for other processing.</strong> We assess your objection against our legitimate interests. If yours outweighs ours, we stop; if not, we tell you why.</p>

      <h3>2.8 Rights in relation to automated decisions and profiling (Article 22)</h3>
      <div className="legal-plain">
        You have the right not to be subject to a decision based solely on automated processing — with no human in the loop — that produces legal or similarly significant effects on you.
      </div>
      <p><strong>What this means for Veyago.</strong> We don't make that kind of decision. Our destination matching and AI itinerary features are suggestions; you decide what to do with them. If that ever changes, we'll tell you in advance and give you the right to human review, to express your view, and to contest the outcome.</p>

      <h2>3. Two more important rights</h2>
      <ul>
        <li><strong>Right to withdraw consent (Article 7(3))</strong> — where we rely on your consent (analytics, marketing, Explorer Map, AI itinerary), you can withdraw it at any time. Withdrawal doesn't affect the lawfulness of processing before you withdrew.</li>
        <li><strong>Right to lodge a complaint (Article 77)</strong> — you can complain to a data protection authority at any time. See Section 6 below.</li>
      </ul>

      <h2>4. How we handle your requests</h2>
      <div className="legal-plain">
        Email us. We respond within 30 days. It's free. We may need to verify it's really you.
      </div>
      <p><strong>Response time.</strong> Within <strong>one month</strong> of receipt. For complex or numerous requests we may extend by up to two additional months, in which case we'll tell you within the first month and explain why.</p>
      <p><strong>Cost.</strong> Free, unless your request is <strong>manifestly unfounded or excessive</strong> (for example, repetitive), in which case we may charge a reasonable administrative fee or decline. We'll explain any refusal.</p>
      <p><strong>Identity verification.</strong> To stop someone else pretending to be you, we may ask for information that matches what we have on file. We ask for the minimum we need.</p>
      <p><strong>No retaliation.</strong> Exercising any of these rights will not cause us to degrade your service, charge you more, or treat you differently.</p>

      <h2>5. If we refuse a request</h2>
      <p>We'll explain why, in writing, and tell you how to appeal internally (reply to our response) and externally (to a supervisory authority). If we rely on an exemption, we'll identify it.</p>

      <h2>6. Your right to complain to a regulator</h2>
      <p>You can complain directly to a data protection authority in your country. In the UK you must first raise the issue with us and wait up to three months before complaining to the ICO.</p>

      <p><strong>Belgium (our lead authority):</strong></p>
      <ul>
        <li>Gegevensbeschermingsautoriteit / Autorité de protection des données (GBA/APD)</li>
        <li>Rue de la Presse 35 / Drukpersstraat 35, 1000 Brussels</li>
        <li>Phone: +32 (0)2 274 48 00</li>
        <li>Email: <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a></li>
        <li>Website: <a href="https://www.dataprotectionauthority.be" rel="noreferrer">dataprotectionauthority.be</a></li>
      </ul>

      <p><strong>United Kingdom:</strong></p>
      <ul>
        <li>Information Commissioner's Office (ICO)</li>
        <li>Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</li>
        <li>Helpline: 0303 123 1113 (UK) / +44 1625 545 745 (international)</li>
        <li>Website: <a href="https://www.ico.org.uk" rel="noreferrer">ico.org.uk</a></li>
      </ul>

      <p><strong>Elsewhere in the EU/EEA:</strong> your national supervisory authority — list at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members" rel="noreferrer">edpb.europa.eu</a>.</p>
      <p>We're registered in Belgium, so the Belgian DPA is our <strong>lead supervisory authority</strong> under the GDPR one-stop-shop mechanism.</p>

      <h2>7. Contact us first</h2>
      <p>Most things we can sort out directly. Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> and a real person will reply.</p>
    </LegalPage>
  );
}
