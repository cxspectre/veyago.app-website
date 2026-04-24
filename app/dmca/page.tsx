import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "DMCA policy",
  description: "How to submit a DMCA takedown request to Veyago.",
};

export default function DMCA() {
  return (
    <LegalPage eyebrow="Legal" title="DMCA policy" lastUpdated="20 April 2026">
      <p>
        Veyago respects intellectual property rights. If you believe your copyright has been infringed by
        material on the site or in the app, you can file a DMCA notice.
      </p>

      <h2>How to file</h2>
      <ul>
        <li>Email <a href="mailto:dmca@veyago.app">dmca@veyago.app</a>.</li>
        <li>Identify the copyrighted work and the location of the infringing material (URL).</li>
        <li>Provide your contact information.</li>
        <li>
          Include: (a) a statement of good-faith belief that the use is unauthorised; (b) a statement, under
          penalty of perjury, that the information is accurate and you are authorised to act; (c) your
          physical or electronic signature.
        </li>
      </ul>

      <h2>Counter-notice</h2>
      <p>
        If your content was removed and you believe this was in error, you may file a counter-notice to the
        same address following 17 U.S.C. §512(g).
      </p>

      <h2>Designated agent</h2>
      <p>Cassian Drefke, Veyago Inc. · <a href="mailto:dmca@veyago.app">dmca@veyago.app</a></p>
    </LegalPage>
  );
}
