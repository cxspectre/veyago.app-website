# Veyago Website

The public website for Veyago — `veyago.app`. Next.js 15 (App Router), Tailwind, Framer Motion, Syne + Inter.

## Surfaces (v1.0 — Early Q3 2026)

- **Marketing** — `/`, `/waitlist`, `/download`
- **Product** — `/features`, `/features/{swipe,bracket,group-mode,itinerary,map}`, `/premium`
- **Build-in-public** — `/build-log`, `/build-log/{slug}`, `/roadmap`, `/changelog`
- **Investor** — `/investors`, `/investors/room` (gated), `/investors/updates` (gated), `/invest`
- **Company** — `/about`, `/press`, `/careers`, `/contact`
- **Support & legal** — `/help`, `/status`, `/privacy`, `/terms`, `/cookies`, `/dmca`, `/acceptable-use`, `/security`, `/gdpr`

See `Veyago_Website_Feature_Deck_v1.pdf` for the full spec.

## Run

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Design tokens (§1.5)

Monochrome — navy background `#0A1628`, elevated surface `#111E35`. Syne for display,
Inter for UI/body. Radii: cards 20px, buttons 14px, inputs 12px, badges 999px.
Motion: 150–220ms ease-out via Framer Motion, respects `prefers-reduced-motion`.
