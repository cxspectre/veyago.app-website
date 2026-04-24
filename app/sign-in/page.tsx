import type { Metadata } from "next";
import SignInPageClient from "@/components/auth/SignInPageClient";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Employee sign-in for Veyago. Traveler accounts are coming soon.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <div className="min-h-[100svh] bg-navy-deep">
      <SignInPageClient />
    </div>
  );
}
