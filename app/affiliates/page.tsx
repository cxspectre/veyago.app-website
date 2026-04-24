import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: "How Veyago earns affiliate commissions, which partners we work with, and how it affects (or doesn't affect) what we recommend.",
};

export default function AffiliateDisclosure() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Affiliate disclosure"
      effectiveDate="24 April 2026"
      lastUpdated="24 April 2026"
    >
      <div className="legal-plain">
        <strong>The short version.</strong> When you book a hotel, flight, or activity through some of our outbound links, the partner pays us a commission. It doesn't cost you anything extra. Our matching engine doesn't know what we earn — recommendations are based on your preferences, not on what pays best.
      </div>

      <h2>1. How Veyago makes money</h2>
      <p>
        Veyago earns revenue in two ways: <strong>Premium subscriptions</strong> (you pay us directly), and <strong>affiliate commissions</strong> (our partners pay us when you book through a link on the Service).
      </p>
      <p>We tell you this upfront because you deserve to know where the money comes from.</p>

      <h2>2. Our affiliate partners</h2>
      <p>As of the effective date of this page, our active affiliate programmes are:</p>

      <table>
        <thead>
          <tr>
            <th>Partner</th>
            <th>What they offer</th>
            <th>What we earn</th>
            <th>Typical rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Booking.com</strong></td>
            <td>Hotels and accommodation</td>
            <td>Commission on completed stays</td>
            <td>Approx. 3.75%–6% of booking value</td>
          </tr>
          <tr>
            <td><strong>Skyscanner</strong> (via Travelpayouts)</td>
            <td>Flight search and comparison</td>
            <td>Mostly cost-per-click on outbound clicks</td>
            <td>Approx. €0.30–€0.40 per qualifying click</td>
          </tr>
          <tr>
            <td><strong>GetYourGuide</strong></td>
            <td>Tours, tickets, and activities</td>
            <td>Commission on completed bookings</td>
            <td>Approx. 8% of booking value</td>
          </tr>
        </tbody>
      </table>

      <p>Commission rates change as partners update their programmes. The figures above are typical ranges, not guarantees.</p>

      <h2>3. How to spot an affiliate link</h2>
      <p>Any outbound link in Veyago that earns us a commission is marked with a small <strong>"Partner"</strong> or <strong>"Ad"</strong> label next to the button, or disclosed on the screen where the link appears. When you tap an affiliate link, the destination URL carries referral parameters (a session ID and a destination ID) so the partner can attribute the click to us — this doesn't include your name, email, or any identifying information beyond that.</p>

      <h2>4. How affiliate relationships affect (or don't affect) what we recommend</h2>
      <div className="legal-plain">
        They don't. Our matching engine is independent of our commercial relationships.
      </div>
      <p>Veyago's destination matching is based on your preferences, your swipes, and, where you've used group sessions, the combined preferences of the group. <strong>The algorithm does not know which destinations or partners pay us, and commission rates are not an input to it.</strong> Editorial decisions — which destinations we feature, which photography we use, which experiences we highlight — are made independently of commercial relationships.</p>
      <p>If we ever feature content that is sponsored or paid for, it will be clearly labelled as <strong>"Sponsored"</strong> or <strong>"Paid partnership with [Partner]"</strong>, not hidden in a generic disclosure.</p>

      <h2>5. The legal bit</h2>
      <p>We're disclosing our affiliate relationships to comply with:</p>
      <ul>
        <li>the <strong>US Federal Trade Commission's Endorsement Guides</strong> (16 C.F.R. Part 255, revised 2023), which require clear and conspicuous disclosure of material connections;</li>
        <li>the <strong>UK CAP Code</strong> enforced by the Advertising Standards Authority, and the <strong>Digital Markets, Competition and Consumers Act 2024</strong>, enforced by the Competition and Markets Authority;</li>
        <li>the <strong>EU Unfair Commercial Practices Directive</strong> (2005/29/EC) and the <strong>Digital Services Act</strong> (Regulation (EU) 2022/2065), which prohibit misleading omissions about commercial intent.</li>
      </ul>
      <p>If you think a piece of our content doesn't live up to these standards, please tell us at <a href="mailto:hello@veyago.app">hello@veyago.app</a> — we take it seriously.</p>

      <h2>6. Your cost</h2>
      <p><strong>You pay the same price</strong> whether you book through a Veyago affiliate link or directly with the partner. The partner funds the commission out of their own marketing budget. You are under no obligation to use our links.</p>

      <h2>7. Questions</h2>
      <p>Email <a href="mailto:hello@veyago.app">hello@veyago.app</a>.</p>
    </LegalPage>
  );
}
