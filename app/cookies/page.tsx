import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "What cookies Veyago sets, why, and how to control them.",
};

export default function Cookies() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie policy"
      effectiveDate="24 April 2026"
      lastUpdated="24 April 2026"
    >
      <div className="legal-plain">
        <strong>The short version.</strong> Our website uses a handful of cookies — the ones we need to log you in and a few analytics cookies to understand which features work. We don't run advertising cookies and we don't let other companies track you across the internet through Veyago. In the EU and UK, analytics cookies are off by default until you opt in.
      </div>

      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files stored on your device by your browser when you visit a website. We also use similar technologies (local storage, session storage) that behave like cookies. Everything in this policy that refers to "cookies" covers those technologies too.
      </p>
      <p>
        This Cookie Policy applies to our website <strong>veyago.app</strong>. Our mobile apps don't use cookies; they use the device's local storage for session state and a mobile analytics SDK. See the <a href="/privacy">Privacy Policy</a> for what the apps collect.
      </p>

      <h2>2. Our approach</h2>
      <p>We keep it minimal. Veyago does not run advertising cookies, does not use social media tracking pixels (no Meta Pixel, no TikTok Pixel, no LinkedIn Insight Tag), and does not allow third parties to track you across other websites through our site.</p>
      <p>We use cookies for two things:</p>
      <ol>
        <li><strong>Essential</strong> — to keep the website working and to keep you signed in.</li>
        <li><strong>Analytics</strong> — to understand how people use Veyago so we can improve it.</li>
      </ol>

      <h2>3. The cookies we use</h2>
      <table>
        <thead>
          <tr>
            <th>Cookie / key</th>
            <th>Category</th>
            <th>Purpose</th>
            <th>Provider</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>sb-access-token</code></td>
            <td>Essential</td>
            <td>Keeps you signed in during your session</td>
            <td>Supabase (first-party)</td>
            <td>Session</td>
          </tr>
          <tr>
            <td><code>sb-refresh-token</code></td>
            <td>Essential</td>
            <td>Refreshes your sign-in so you don't have to log in every hour</td>
            <td>Supabase (first-party)</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td><code>__cf_bm</code></td>
            <td>Essential</td>
            <td>Bot detection and basic DDoS protection</td>
            <td>Cloudflare</td>
            <td>30 minutes</td>
          </tr>
          <tr>
            <td><code>cf_clearance</code></td>
            <td>Essential</td>
            <td>Records that your browser has passed a security challenge</td>
            <td>Cloudflare</td>
            <td>Up to 30 days</td>
          </tr>
          <tr>
            <td><code>veyago_consent</code></td>
            <td>Essential</td>
            <td>Remembers your cookie choices so we don't ask again</td>
            <td>Veyago (first-party)</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td><code>ph_*</code> (various)</td>
            <td>Analytics</td>
            <td>Product analytics — feature usage, performance, errors</td>
            <td>PostHog (EU Cloud)</td>
            <td>Up to 12 months</td>
          </tr>
        </tbody>
      </table>

      <p>Essential cookies are necessary for the website to function and are exempt from the consent requirement under Article 5(3) of the ePrivacy Directive. Analytics cookies are set <strong>only after you give consent</strong> (EU/UK) or if you have not opted out (elsewhere).</p>

      <h2>4. Your choices</h2>
      <div className="legal-plain">
        You control the analytics cookies. Essential cookies can't be turned off because the site won't work without them.
      </div>
      <p><strong>In the EU, UK, and EEA:</strong> when you first visit our website you see a cookie banner with two equally prominent options — <strong>Accept all</strong> and <strong>Reject all</strong>. You can change your choice at any time by clicking <strong>Cookie settings</strong> in the website footer.</p>
      <p><strong>Global Privacy Control (GPC).</strong> If your browser sends the GPC signal, we treat it as a valid opt-out of non-essential cookies and will not set analytics cookies.</p>
      <p><strong>Browser controls.</strong> You can also block or delete cookies in your browser settings. If you block essential cookies, parts of the website won't work.</p>

      <h2>5. Third-party cookies</h2>
      <p>PostHog, Supabase, and Cloudflare are our service providers. The cookies they set on our behalf are first-party cookies from our domain. None of these providers uses your data for their own advertising purposes, and none of them shares it with advertising networks.</p>
      <p>We do not set any third-party advertising cookies.</p>

      <h2>6. Changes to this policy</h2>
      <p>We'll update this page when we add or remove cookies, and update the "Last updated" date above. Material changes (for example, adding a new analytics provider) will trigger a fresh consent prompt in the EU and UK.</p>

      <h2>7. Contact</h2>
      <p>Questions: <a href="mailto:hello@veyago.app">hello@veyago.app</a>. Full details of how we use the data collected through cookies are in our <a href="/privacy">Privacy Policy</a>.</p>
    </LegalPage>
  );
}
