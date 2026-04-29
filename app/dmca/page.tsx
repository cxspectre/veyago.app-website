import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "DMCA policy",
  description: "How to submit a copyright takedown notice to Veyago, and how to file a counter-notice.",
};

export default function DMCA() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="DMCA policy"
      effectiveDate="24 April 2026"
      lastUpdated="24 April 2026"
    >
      <div className="legal-plain">
        <strong>The short version.</strong> If you believe content on Veyago infringes your copyright, you can send us a DMCA takedown notice. If your content was removed by mistake, you can file a counter-notice. We terminate the accounts of repeat infringers. Knowingly false notices or counter-notices have legal consequences.
      </div>

      <h2>1. Scope</h2>
      <p>
        Veyago v1.0 hosts very little user-uploaded content — essentially, profile photos. Destination photography displayed in the Service is licensed from stock providers or created by us. Even with this narrow footprint, we comply with the <strong>Digital Millennium Copyright Act</strong>, 17 U.S.C. § 512, and operate the following notice-and-takedown process.
      </p>
      <p>
        This policy also gives rightsholders in the EU, UK, and elsewhere a clear route to request removal of infringing content under local copyright law — including Article 17 of the EU Copyright Directive and Article 16 of the Digital Services Act.
      </p>

      <h2>2. How to send a DMCA takedown notice</h2>
      <p>To be valid under 17 U.S.C. § 512(c)(3)(A), your notice must include <strong>all</strong> of the following:</p>
      <ol>
        <li>A physical or electronic signature of the copyright owner or a person authorised to act on their behalf.</li>
        <li>Identification of the copyrighted work claimed to have been infringed (or, for multiple works, a representative list).</li>
        <li>Identification of the material you claim is infringing and its location on the Service — a direct URL or screenshot with enough detail for us to find it.</li>
        <li>Your contact information: full name, postal address, telephone number, and email address.</li>
        <li>A statement that you have a <strong>good-faith belief</strong> that the use of the material is not authorised by the copyright owner, its agent, or the law.</li>
        <li>A statement that the information in the notice is accurate and, <strong>under penalty of perjury</strong>, that you are the copyright owner or authorised to act on the owner's behalf.</li>
      </ol>

      <p>Send it to our designated DMCA agent:</p>
      <blockquote>
        <p><strong>DMCA Designated Agent</strong><br />
        Cassian Drefke, Copyright Agent, Veyago Inc.<br />
        Email: <a href="mailto:hello@veyago.app">hello@veyago.app</a> (put "DMCA Notice" in the subject line)<br />
        Postal address: Veyago Inc., Brussels, Belgium (full address available on request)</p>
        <p>Our designated agent is registered with the <strong>U.S. Copyright Office</strong> at <a href="https://dmca.copyright.gov" rel="noreferrer">dmca.copyright.gov</a>.</p>
      </blockquote>

      <p><strong>Warning — false claims.</strong> Under 17 U.S.C. § 512(f), anyone who knowingly materially misrepresents that material is infringing can be liable for damages, including costs and attorneys' fees.</p>

      <h2>3. What happens after we receive a valid notice</h2>
      <p>Once we receive a complete and valid notice, we will expeditiously:</p>
      <ol>
        <li>Remove or disable access to the material.</li>
        <li>Notify the user who uploaded the content, forward them a copy of the notice, and explain the counter-notice process.</li>
        <li>Keep a record of the notice and our action for our safe-harbour documentation.</li>
      </ol>
      <p>If the notice is incomplete, we'll tell you what's missing. We may decline to act until the notice is complete.</p>

      <h2>4. Counter-notice</h2>
      <p>If your content was removed and you believe it was a mistake or a misidentification, you can submit a counter-notice under 17 U.S.C. § 512(g)(3). It must include:</p>
      <ol>
        <li>Your physical or electronic signature.</li>
        <li>Identification of the material that was removed and the location where it appeared before removal.</li>
        <li>A statement, under penalty of perjury, that you have a good-faith belief the material was removed as a result of mistake or misidentification.</li>
        <li>Your name, address, and telephone number.</li>
        <li>A statement that you <strong>consent to the jurisdiction</strong> of the US Federal District Court for the judicial district in which your address is located (or, if outside the US, the <strong>Southern District of New York</strong>), and that you will accept service of process from the person who submitted the original notice or their agent.</li>
      </ol>
      <p>Send counter-notices to <a href="mailto:hello@veyago.app">hello@veyago.app</a> with "DMCA Counter-Notice" in the subject line.</p>
      <p><strong>What happens next.</strong> We'll forward your counter-notice to the original complainant. Unless they file a court action within <strong>10 to 14 business days</strong>, we'll restore the content.</p>

      <h2>5. Repeat infringer policy</h2>
      <p>We will <strong>terminate</strong>, in appropriate circumstances, the accounts of users who repeatedly infringe copyright. We treat a user as a repeat infringer after <strong>three</strong> unrebutted valid DMCA notices against content they uploaded, and we reserve the right to terminate accounts sooner based on the seriousness of the infringement. This policy is enforced actively, not just on paper.</p>

      <h2>6. Non-US rightsholders</h2>
      <p>If you're based in the EU, UK, or elsewhere, you're welcome to use this process for copyright concerns, and local copyright law may give you additional rights. Email <a href="mailto:hello@veyago.app">hello@veyago.app</a> with "Copyright Claim" in the subject line and include as much of the information in Section 2 as you can — we'll handle it in the same way.</p>

      <h2>7. Good faith</h2>
      <p>We expect everyone using this process — complainants and counter-notifiers — to act in good faith. Abuse of the DMCA process wastes everyone's time and may itself be unlawful.</p>

      <h2>8. Contact</h2>
      <p><strong>Veyago Inc.</strong> — DMCA Designated Agent — <a href="mailto:hello@veyago.app">hello@veyago.app</a></p>
    </LegalPage>
  );
}
