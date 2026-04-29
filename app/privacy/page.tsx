import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What Veyago collects, why, where it lives, how long we keep it, and how to get it out.",
};

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      effectiveDate="24 April 2026"
      lastUpdated="24 April 2026"
    >
      <div className="legal-plain">
        <strong>The short version.</strong> Your data is yours. We collect what we need to help you discover places to travel, we tell you exactly what that is and why, and we never sell it. You can see, download, correct, or delete your data at any time. If you want the detail, keep reading.
      </div>

      <h2>1. Who we are</h2>
      <p>
        Veyago is a travel destination discovery app and website. This policy explains how <strong>Veyago Inc.</strong> ("Veyago", "we", "us") handles personal data when you use our mobile apps (iOS and Android) and our website at veyago.app (together, the "Service").
      </p>
      <p>
        <strong>Data controller.</strong> Veyago Inc., a New York corporation with its operational headquarters in Belgium. Contact: <a href="mailto:hello@veyago.app">hello@veyago.app</a>.
      </p>
      <p>
        <strong>Data protection contact.</strong> Until we appoint a formal Data Protection Officer, all privacy questions are handled directly by our CEO and founder, <strong>Cassian Drefke</strong>, at <a href="mailto:hello@veyago.app">hello@veyago.app</a>.
      </p>
      <p>
        <strong>UK representative (Article 27 UK GDPR).</strong> If you are in the United Kingdom and wish to contact our UK representative, email <a href="mailto:hello@veyago.app">hello@veyago.app</a> with "UK Representative" in the subject line and we will route your request accordingly.
      </p>

      <h2>2. What we collect and why</h2>
      <div className="legal-plain">
        We only collect information we actually use. Most of it you give us directly when you sign up, swipe on destinations, or turn on optional features like the Explorer Map. A smaller amount is collected automatically so the app works and so we can fix bugs.
      </div>

      <p><strong>Account information you give us.</strong> When you create an account we collect your <strong>email address</strong>, <strong>name</strong>, <strong>display name</strong>, and, optionally, a <strong>profile photo</strong>. We use this to identify you, secure your account, and let you sign in across devices.</p>

      <p><strong>Travel preferences you give us.</strong> To match you to destinations we collect your <strong>home city or airport (IATA code)</strong>, <strong>vibe preferences</strong>, <strong>budget tier</strong>, <strong>trip-length preference</strong>, and <strong>travel style</strong>. You can edit or clear these any time in Settings.</p>

      <p><strong>Session and swipe data.</strong> As you use the Service we record your <strong>swipe events</strong> (right, left, up on destination cards), your <strong>bracket choices</strong>, your <strong>participation in group sessions</strong>, and <strong>invite codes</strong> you use. This is how the matching engine learns what you want.</p>

      <p><strong>Group session data.</strong> When you join a group session we record your <strong>session membership</strong>, <strong>round results</strong>, <strong>bracket outcomes</strong>, and the <strong>winning destination</strong>. Per-member <strong>budget inputs</strong> in group sessions are collected privately — other members never see them — and are <strong>deleted 30 days after the session ends</strong>.</p>

      <p><strong>Passport and nationality (per-session only).</strong> To filter destinations by visa requirements we ask for your <strong>passport country/nationality at the start of each session</strong>. We store this only for the duration of the session and for visa-filtering logic, and we <strong>delete it 30 days after the session ends</strong>. We do not keep it in your user profile.</p>

      <p><strong>Explorer Map and travel footprint (opt-in).</strong> If you turn on the Explorer Map we collect <strong>GPS location data</strong> and <strong>photo metadata</strong> you choose to import, and we store the <strong>countries and cities you've visited</strong>. These features are strictly <strong>opt-in</strong>, can be turned off at any time in Settings, and deleting the Explorer Map removes this data immediately.</p>

      <p><strong>Subscription and payment data.</strong> If you buy a premium subscription the payment is processed by <strong>Stripe</strong>, <strong>Apple App Store</strong>, or <strong>Google Play</strong>. <strong>Veyago never sees or stores your raw payment card data.</strong> We receive only your <strong>subscription tier</strong> (free or premium), <strong>start and end dates</strong>, and transaction identifiers needed for support and accounting.</p>

      <p><strong>Device data.</strong> Automatically, we collect <strong>device type</strong>, <strong>OS version</strong>, <strong>app version</strong>, and (if you allow notifications) your <strong>push notification token</strong>. We use this to deliver the app, push notifications you've opted into, and debug issues.</p>

      <p><strong>Analytics and crash data.</strong> We use <strong>PostHog</strong> (EU-hosted) to understand which features people use and <strong>Sentry</strong> to catch crashes. Event data includes page views, feature usage, and session starts. Crash reports include stack traces and device context.</p>

      <p><strong>Affiliate click data.</strong> When you click an outbound link to <strong>Booking.com</strong>, <strong>Skyscanner/Travelpayouts</strong>, or <strong>GetYourGuide</strong>, the URL carries a <strong>session ID and destination ID</strong> as parameters so we can attribute any resulting commission. See our Affiliate Disclosure.</p>

      <p><strong>What we do not collect.</strong> We do not collect special category data (health, religion, political opinions, biometrics, etc.). We do not track you across other apps or websites. We do not buy personal data from data brokers.</p>

      <h2>3. Legal bases (GDPR Article 6)</h2>
      <div className="legal-plain">
        European law requires us to tell you the "legal basis" for each thing we do with your data. Most of what we do is either (a) necessary to give you the Service you signed up for, or (b) based on your consent for optional features.
      </div>

      <table>
        <thead>
          <tr>
            <th>What we do</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create and manage your account; run matching and bracket logic; deliver group sessions</td>
            <td><strong>Contract performance</strong> (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Send service emails (password resets, receipts, session invites)</td>
            <td><strong>Contract performance</strong> (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Fraud prevention, abuse detection, keeping the Service secure</td>
            <td><strong>Legitimate interests</strong> (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Product analytics via PostHog; marketing emails (if you opt in); Explorer Map; push notifications</td>
            <td><strong>Consent</strong> (Art. 6(1)(a)) — withdraw any time</td>
          </tr>
          <tr>
            <td>Crash reporting via Sentry</td>
            <td><strong>Legitimate interests</strong> (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Financial records, tax, accounting</td>
            <td><strong>Legal obligation</strong> (Art. 6(1)(c))</td>
          </tr>
          <tr>
            <td>AI itinerary generation (if you use the feature)</td>
            <td><strong>Consent</strong> (Art. 6(1)(a))</td>
          </tr>
        </tbody>
      </table>

      <p>You have the right to object to any processing based on legitimate interests — see Section 7.</p>

      <h2>4. Automated decisions and AI features</h2>
      <div className="legal-plain">
        Our matching engine sorts destinations for you based on your preferences. If you use the AI itinerary feature, we send the destination name and your preferences (not your identity) to OpenAI's GPT-4o model to generate a suggested plan. None of this produces legal or similarly significant effects on you — you make the final booking decision.
      </div>

      <p>Under GDPR Article 22 you have the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects. <strong>We don't make any such decisions.</strong> Our recommendations are suggestions. You choose whether to act on them.</p>
      <p>Our AI itinerary feature is an AI system within the meaning of the EU AI Act. Under Article 50, we confirm: <strong>content generated by the itinerary feature is produced by artificial intelligence (OpenAI GPT-4o)</strong>. We display an AI indicator on generated content. Always verify time-sensitive details (opening hours, visa requirements, safety) from official sources.</p>

      <h2>5. Who we share your data with</h2>
      <div className="legal-plain">
        We don't sell your data. We share it only with the small set of vendors that help us run the Service, and only to the extent they need to do their job. Every one of them is contractually bound to protect your data.
      </div>

      <p><strong>We never sell your personal information.</strong> We don't share it with advertisers, data brokers, or third parties for their own marketing.</p>

      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>What they do</th>
            <th>Where they process</th>
            <th>Safeguard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Supabase</strong> (on AWS)</td>
            <td>Database, authentication, file storage</td>
            <td>eu-west-1 (Ireland, EEA)</td>
            <td>Intra-EEA — no transfer safeguard needed</td>
          </tr>
          <tr>
            <td><strong>OpenAI</strong></td>
            <td>AI itinerary generation (destination + anonymised preferences only)</td>
            <td>United States</td>
            <td>EU-US DPF (if certified) or SCCs + encryption</td>
          </tr>
          <tr>
            <td><strong>PostHog</strong></td>
            <td>Product analytics</td>
            <td>EU Cloud</td>
            <td>Intra-EEA</td>
          </tr>
          <tr>
            <td><strong>Sentry</strong></td>
            <td>Crash reporting</td>
            <td>United States</td>
            <td>SCCs + encryption</td>
          </tr>
          <tr>
            <td><strong>Stripe</strong></td>
            <td>Payment processing</td>
            <td>EU / United States</td>
            <td>DPF / SCCs; PCI DSS Level 1</td>
          </tr>
          <tr>
            <td><strong>Apple / Google</strong></td>
            <td>In-app purchases on iOS and Android</td>
            <td>Global</td>
            <td>Contractual safeguards under Apple / Google terms</td>
          </tr>
          <tr>
            <td><strong>Booking.com, Skyscanner / Travelpayouts, GetYourGuide</strong></td>
            <td>Affiliate partners (click referral only)</td>
            <td>EU / Global</td>
            <td>Partner-controller relationship; see Affiliate Disclosure</td>
          </tr>
          <tr>
            <td><strong>Resend</strong></td>
            <td>Transactional email delivery</td>
            <td>EU / United States</td>
            <td>SCCs</td>
          </tr>
          <tr>
            <td><strong>Mapbox</strong></td>
            <td>Map rendering (Explorer Map)</td>
            <td>United States</td>
            <td>SCCs</td>
          </tr>
          <tr>
            <td><strong>Cloudflare</strong></td>
            <td>CDN and DDoS protection</td>
            <td>Global edge</td>
            <td>SCCs; data processed at the edge</td>
          </tr>
        </tbody>
      </table>

      <p>We may also disclose personal data where legally required (valid court orders, tax filings) or necessary to enforce our Terms of Service or protect users from harm. We disclose only what is necessary and push back on overbroad requests.</p>
      <p>In the event of a merger, acquisition, or sale of assets, your data may transfer to the successor, which will be bound by this policy or give you notice and choice.</p>

      <h2>6. How long we keep your data</h2>
      <div className="legal-plain">
        We keep your data only as long as we need it. Here's the full schedule.
      </div>

      <table>
        <thead>
          <tr>
            <th>Data type</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account data (email, name, display name, profile photo)</td>
            <td>For the life of your account; deleted within 60 days of account deletion</td>
          </tr>
          <tr>
            <td>Travel preferences</td>
            <td>Same as account data</td>
          </tr>
          <tr>
            <td>Swipe events and session data</td>
            <td>2 years, then deleted or aggregated into non-identifiable statistics</td>
          </tr>
          <tr>
            <td>Group session memberships and results</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>Passport / nationality (per session)</td>
            <td><strong>30 days after session ends</strong>, then deleted</td>
          </tr>
          <tr>
            <td>Group session budget data (per session)</td>
            <td><strong>30 days after session ends</strong>, then deleted</td>
          </tr>
          <tr>
            <td>Explorer Map data (GPS, photo metadata, visited places)</td>
            <td>Until you turn off Explorer Map or delete your account; deleted within 60 days</td>
          </tr>
          <tr>
            <td>Subscription and transaction metadata</td>
            <td>7 years (Belgian and US tax/accounting obligations)</td>
          </tr>
          <tr>
            <td>Analytics event data (PostHog)</td>
            <td>24 months</td>
          </tr>
          <tr>
            <td>Crash reports (Sentry)</td>
            <td>90 days</td>
          </tr>
          <tr>
            <td>Push notification token</td>
            <td>Until device is unlinked or notifications are disabled</td>
          </tr>
          <tr>
            <td>Affiliate click logs</td>
            <td>13 months (commission reconciliation window)</td>
          </tr>
          <tr>
            <td>Support emails</td>
            <td>3 years from last contact</td>
          </tr>
        </tbody>
      </table>

      <p>If you ask us to erase your data and we have a legal duty to keep some of it (for example, invoices), we'll keep only the minimum required and delete the rest.</p>

      <h2>7. Your rights</h2>
      <div className="legal-plain">
        You have a full set of rights over your data — see, fix, export, delete, restrict, and object. We'll respond within 30 days. No fees for reasonable requests. Full details on our dedicated <a href="/gdpr">GDPR Rights page</a>.
      </div>

      <p>If you're in the EU, UK, EEA, or Switzerland, you have the following rights under GDPR and UK GDPR: <strong>access</strong>, <strong>rectification</strong>, <strong>erasure</strong>, <strong>restriction of processing</strong>, <strong>data portability</strong>, <strong>objection</strong>, <strong>not to be subject to solely automated decisions with legal or similarly significant effects</strong>, and <strong>to withdraw consent</strong> at any time.</p>
      <p><strong>How to exercise any right.</strong> Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> from the address associated with your account, or use the in-app Settings menu for self-service export and deletion. We respond within <strong>one month</strong>.</p>
      <p><strong>Data portability format.</strong> We export your data as a <strong>machine-readable JSON file</strong> containing your account data, preferences, swipe history, and group session participation.</p>
      <p><strong>Right to lodge a complaint.</strong> You can complain to a data protection authority:</p>
      <ul>
        <li><strong>Belgium</strong> (our lead authority): Gegevensbeschermingsautoriteit / Autorité de protection des données — <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a> — <a href="https://www.dataprotectionauthority.be" rel="noreferrer">dataprotectionauthority.be</a></li>
        <li><strong>United Kingdom</strong>: Information Commissioner's Office (ICO) — <a href="https://www.ico.org.uk" rel="noreferrer">ico.org.uk</a></li>
        <li><strong>Other EU/EEA</strong>: your national supervisory authority — <a href="https://edpb.europa.eu/about-edpb/about-edpb/members" rel="noreferrer">edpb.europa.eu</a></li>
      </ul>
      <p>We'd rather fix a problem before you need to complain — email us first at <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>

      <h2>8. International data transfers</h2>
      <div className="legal-plain">
        Most of your data stays in Ireland, inside the EEA. Some vendors are in the US. When that happens, we use EU-approved legal protections so your data travels with the same rights it had in Europe.
      </div>

      <p>Our primary backend (Supabase on AWS eu-west-1) and our analytics platform (PostHog EU cloud) are located in the EEA, so your data generally stays in Europe.</p>
      <p>For vendors based in the United States (currently OpenAI, Sentry, Mapbox, and some Cloudflare edge processing), we rely on one of: the <strong>EU-US Data Privacy Framework</strong> where the vendor is actively self-certified (and, for UK data, the <strong>UK-US Data Bridge</strong>); otherwise, the European Commission's <strong>Standard Contractual Clauses (2021/914)</strong> combined with supplementary measures including encryption in transit (TLS 1.2+) and at rest (AES-256), access minimisation, and pseudonymisation where feasible.</p>
      <p>You can request a copy of the relevant safeguards by emailing <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>

      <h2>9. California privacy rights (CCPA / CPRA)</h2>
      <div className="legal-plain">
        If you live in California, you have the same core rights described above plus a few California-specific ones. We don't sell your data, and we don't "share" it for cross-context behavioural advertising.
      </div>

      <p>Categories of personal information collected in the last 12 months: <strong>(A) Identifiers</strong>; <strong>(F) Internet or electronic network activity</strong>; <strong>(G) Geolocation data</strong> (approximate via IP; precise only if you opt in to Explorer Map); <strong>(K) Inferences</strong> drawn from preferences to recommend destinations.</p>
      <p><strong>We do not sell or share your personal information</strong> within the meaning of the CCPA, and we have not done so in the preceding 12 months. We honour the <strong>Global Privacy Control (GPC)</strong> signal on our website as a valid opt-out of sale/sharing.</p>
      <p><strong>Your California rights</strong>: to know, to delete, to correct, to portability, to opt out of sale/sharing, to limit use of sensitive personal information, and to non-discrimination. Exercise them at <a href="mailto:hello@veyago.app">hello@veyago.app</a>. We respond within 45 days.</p>

      <h2>10. Other US state residents</h2>
      <p>If you are a resident of Colorado, Connecticut, Virginia, Utah, Texas, Oregon, Montana, Delaware, Iowa, Tennessee, New Hampshire, New Jersey, Nebraska, Minnesota, Maryland, Indiana, Kentucky, or Rhode Island, you have substantially equivalent rights under your state's privacy law. Exercise them at <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>

      <h2>11. Children</h2>
      <p>Veyago is for users <strong>aged 16 and older</strong>. We do not knowingly collect personal data from anyone under 16. If we learn we have, we delete it promptly. If you are a parent or guardian and believe your child has given us data, email <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>

      <h2>12. Security</h2>
      <p>We encrypt data in transit (TLS 1.2+) and at rest (AES-256). We use Supabase Row Level Security on every database table. Authentication is via Supabase Auth with short-lived JWTs and refresh-token rotation. Full details at <a href="/security">veyago.app/security</a>.</p>

      <h2>13. Changes to this policy</h2>
      <p>When we make material changes we will notify you by email and through an in-app notice at least <strong>14 days</strong> before they take effect. Minor clarifications are reflected in the "Last updated" date above.</p>

      <h2>14. Contact</h2>
      <p><strong>Veyago Inc.</strong> — Belgium (operational HQ) / New York, USA (incorporated) — <a href="mailto:hello@veyago.app">hello@veyago.app</a></p>
    </LegalPage>
  );
}
