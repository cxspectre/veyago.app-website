import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description: "How Veyago handles encryption, authentication, infrastructure, and responsible disclosure.",
};

export default function Security() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Security"
      effectiveDate="24 April 2026"
      lastUpdated="24 April 2026"
    >
      <div className="legal-plain">
        <strong>The short version.</strong> We encrypt your data in transit and at rest, use least-privilege access, rely on well-audited infrastructure (Supabase on AWS, Cloudflare, Stripe), and never store your payment card details. We don't hold a SOC 2 report yet — we're a small company, we'll explain what we do instead, and we'll tell you honestly when that changes.
      </div>

      <h2>1. Our approach</h2>
      <p>Security is built in, not bolted on. We've designed Veyago around a short list of principles:</p>
      <ul>
        <li><strong>Collect less.</strong> The best way to protect data is not to have it. Passport and budget data for group sessions are deleted 30 days after a session ends. Payment card data is never stored by us at all.</li>
        <li><strong>Encrypt everything.</strong> In transit and at rest. No exceptions.</li>
        <li><strong>Limit access.</strong> Only the people who need production access have it, with hardware-key multi-factor authentication.</li>
        <li><strong>Use boring, audited infrastructure.</strong> Supabase, AWS, Cloudflare, Stripe — companies that invest far more in security than a startup our size ever could.</li>
        <li><strong>Be honest about what we haven't done yet.</strong></li>
      </ul>

      <h2>2. Encryption</h2>
      <div className="legal-plain">
        Every connection to Veyago uses modern TLS. Data sitting in our database is encrypted on disk with AES-256.
      </div>
      <p><strong>In transit.</strong> All connections between your device, our website, and our backend use <strong>TLS 1.2 or higher</strong>. HSTS is enforced on our domains via Cloudflare.</p>
      <p><strong>At rest.</strong> All data stored in Supabase (hosted on AWS) is encrypted at rest with <strong>AES-256</strong>. Backups are encrypted with the same standard.</p>

      <h2>3. Infrastructure</h2>
      <div className="legal-plain">
        We don't run our own servers. We run on platforms with stronger security teams than any startup.
      </div>
      <ul>
        <li><strong>Supabase</strong> (backend, database, authentication, file storage) hosts our data on <strong>AWS eu-west-1 (Ireland, within the EEA)</strong>. Supabase is SOC 2 Type 2 certified.</li>
        <li><strong>AWS</strong> (via Supabase) is SOC 2, ISO 27001, PCI DSS, and GDPR-aligned.</li>
        <li><strong>Cloudflare</strong> sits in front of our website as CDN and DDoS protection.</li>
        <li><strong>Stripe</strong> (PCI DSS Level 1), <strong>Apple App Store</strong>, and <strong>Google Play</strong> process all payment card data. Veyago never sees or stores raw card data.</li>
        <li>Transactional email is sent via <strong>Resend</strong>.</li>
      </ul>

      <h2>4. Authentication</h2>
      <div className="legal-plain">
        Passwords are hashed, tokens expire quickly, and you can sign in with Apple or Google if you prefer not to manage a password.
      </div>
      <ul>
        <li>Authentication is handled by <strong>Supabase Auth</strong> — email/password, <strong>Sign in with Apple</strong>, and <strong>Google OAuth</strong>.</li>
        <li>Passwords are stored as <strong>bcrypt hashes</strong>; we never see your plaintext password.</li>
        <li>Session tokens are <strong>JWTs with a 1-hour lifetime</strong>, paired with refresh tokens that rotate on use.</li>
        <li>Suspicious sign-in attempts trigger rate limiting and, in some cases, a verification step.</li>
      </ul>

      <h2>5. Application and database security</h2>
      <ul>
        <li><strong>Supabase Row Level Security (RLS)</strong> is enabled on every table. Users can only read and write their own data; enforcement happens at the database layer, not just in the app.</li>
        <li><strong>Code review</strong> is required for every change to production code.</li>
        <li><strong>Dependencies</strong> are scanned continuously for known vulnerabilities and updated on a regular cadence.</li>
        <li><strong>Crash reports</strong> (Sentry) are scrubbed of personal data and deleted after 90 days.</li>
      </ul>

      <h2>6. What we store — and what we don't</h2>
      <table>
        <thead>
          <tr>
            <th>We store</th>
            <th>We never store</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your email, name, display name, profile photo</td>
            <td>Your raw payment card number, CVV, or expiry date</td>
          </tr>
          <tr>
            <td>Your travel preferences and swipe history</td>
            <td>Your passport number (we only ask for nationality, per session, deleted 30 days after)</td>
          </tr>
          <tr>
            <td>Your subscription tier and transaction IDs</td>
            <td>Your plaintext password</td>
          </tr>
          <tr>
            <td>Your opt-in Explorer Map data</td>
            <td>Unencrypted backups or logs</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Certifications — honestly</h2>
      <div className="legal-plain">
        We don't have SOC 2 or ISO 27001 certification yet. Audits cost real money and take time. At our stage we've chosen to invest in security engineering directly. Here's what we do instead.
      </div>
      <p>We do not currently hold a <strong>SOC 2 Type 2</strong> or <strong>ISO 27001</strong> report. Formal audits typically cost between €25,000 and €100,000 and take 6–12 months.</p>
      <p><strong>What we do today:</strong></p>
      <ul>
        <li>Data encrypted in transit (TLS 1.2+) and at rest (AES-256).</li>
        <li>Infrastructure runs on Supabase (SOC 2 Type 2), AWS (multiple certifications), and Cloudflare — so large parts of our stack are audited even though our own company is not yet.</li>
        <li>Least-privilege access with hardware-key MFA for everyone with production access.</li>
        <li>Continuous dependency scanning.</li>
        <li>Row-level security on all database tables.</li>
        <li>Regular backups, tested restores, encrypted at rest.</li>
        <li>A written incident response plan and a commitment to breach notification within <strong>72 hours</strong> as required by GDPR Article 33.</li>
      </ul>
      <p><strong>On our roadmap:</strong> SOC 2 Type 1 once our team and revenue justify it. If you need a security review sooner, email <a href="mailto:hello@veyago.app">hello@veyago.app</a> and we'll send a completed CAIQ-Lite questionnaire within 5 business days.</p>

      <h2>8. Incident response and breach notification</h2>
      <p>If we experience a personal data breach, we will notify the relevant supervisory authority (Belgian Data Protection Authority as our lead) within <strong>72 hours</strong> where the breach is likely to result in a risk to users' rights and freedoms, in line with GDPR Article 33. Where the breach is likely to result in a <strong>high risk</strong>, we'll also notify affected users directly, without undue delay, in line with Article 34.</p>

      <h2>9. Responsible disclosure</h2>
      <div className="legal-plain">
        If you find a security issue, please tell us directly instead of posting it publicly. We won't threaten you, we'll fix the issue, and we'll credit you (if you want) once it's resolved.
      </div>
      <p><strong>How to report.</strong> Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> with "Security" in the subject line, including: a description of the vulnerability; steps to reproduce; the potential impact; your name or handle for credit (or tell us you'd prefer to stay anonymous).</p>
      <p><strong>What we commit to:</strong></p>
      <ul>
        <li>We'll acknowledge your report within <strong>3 business days</strong>.</li>
        <li>We'll keep you updated on our progress.</li>
        <li>We will <strong>not take legal action</strong> against researchers who follow this policy in good faith.</li>
        <li>Once fixed, we'll publicly credit you (with your permission) on our security acknowledgements page.</li>
      </ul>
      <p><strong>In scope:</strong> veyago.app and subdomains; our iOS and Android apps; our API.</p>
      <p><strong>Out of scope:</strong> denial-of-service attacks; social engineering; physical attacks; vulnerabilities in third-party services (report those to the vendor); automated scanner output without a demonstrated impact.</p>
      <p><strong>No monetary bounty yet.</strong> We don't currently offer cash rewards. We offer public credit and genuine thanks. Please give us a reasonable window (we aim for 90 days) to fix an issue before public disclosure.</p>

      <h2>10. Your role</h2>
      <p>Security is shared. Please use a <strong>strong, unique password</strong> (or Sign in with Apple / Google), don't share your account, log out on shared devices, and email us immediately at <a href="mailto:hello@veyago.app">hello@veyago.app</a> if you suspect your account has been accessed by someone else.</p>

      <h2>11. Contact</h2>
      <p>Security questions and vulnerability reports: <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>
    </LegalPage>
  );
}
