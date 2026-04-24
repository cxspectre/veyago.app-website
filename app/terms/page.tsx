import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The legal terms that govern your use of Veyago.",
};

export default function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of service" lastUpdated="20 April 2026">
      <h2>Agreement</h2>
      <p>
        By using Veyago, you agree to these terms. They are a contract between you and Veyago Inc., a Delaware
        C-Corporation.
      </p>

      <h2>Your account</h2>
      <p>
        You must be 16 or older to use Veyago (13 in countries where the lower age applies with guardian
        consent). One account per person. Keep your credentials private. You are responsible for activity on
        your account.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Don’t upload content that is unlawful, harassing, or infringing. Don’t attempt to scrape, reverse
        engineer, or stress-test the service. The full list lives on <a href="/acceptable-use">/acceptable-use</a>.
      </p>

      <h2>Subscriptions</h2>
      <p>
        Premium is billed through Apple or Google. Refunds, cancellation, and renewal are governed by their
        terms — cancel in your device settings.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Some booking links earn Veyago a commission. This does not change the price you pay and does not
        change the ranking shown. See <a href="/affiliates">/affiliates</a> for the full disclosure.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Veyago is provided on an ‘as is’ basis. To the fullest extent permitted by law, Veyago Inc.’s total
        liability is capped at the amount you paid us in the prior 12 months.
      </p>

      <h2>Changes</h2>
      <p>
        We will change these terms as the product grows. Material changes will be emailed to your account
        address and summarised at the top of the document.
      </p>
    </LegalPage>
  );
}
