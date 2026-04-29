import Link from "next/link";
import VeyagoWordmark from "@/components/VeyagoWordmark";

const cols: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/features", label: "Features" },
      { href: "/destinations", label: "Destinations" },
      { href: "/premium", label: "Premium" },
      { href: "/download", label: "Download for iOS" },
      { href: "/download", label: "Download for Android" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/investors", label: "Investors" },
      { href: "/invest", label: "Invest (Wefunder)" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/build-log", label: "Build log" },
      { href: "/help", label: "Help centre" },
      { href: "/status", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
      { href: "/cookies", label: "Cookie preferences" },
      { href: "/affiliates", label: "Affiliate disclosure" },
      { href: "/security", label: "Security" },
      { href: "/gdpr", label: "GDPR" },
      { href: "/dmca", label: "DMCA" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-widest text-ink-30 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-70 hover:text-ink-100 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <VeyagoWordmark size="sm" />
            <div className="text-xs text-ink-30">© 2026 Veyago Inc. — a New York corporation</div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/company/veyago"
              className="text-xs text-ink-50 hover:text-ink-90 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/veyago"
              className="text-xs text-ink-50 hover:text-ink-90 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@veyago"
              className="text-xs text-ink-50 hover:text-ink-90 transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://x.com/veyago"
              className="text-xs text-ink-50 hover:text-ink-90 transition-colors"
            >
              X
            </a>
            <Link
              href="/status"
              className="text-xs text-ink-50 hover:text-ink-90 transition-colors inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-live" />
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
