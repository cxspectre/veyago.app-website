import type { MetadataRoute } from "next";

const base = "https://veyago.app";

const urls = [
  "/",
  "/waitlist",
  "/download",
  "/features",
  "/how-it-works",
  "/features/swipe",
  "/features/bracket",
  "/features/group-mode",
  "/features/itinerary",
  "/features/map",
  "/premium",
  "/investors",
  "/invest",
  "/about",
  "/build-log",
  "/faq/why-solo",
  "/careers",
  "/contact",
  "/help",
  "/status",
  "/privacy",
  "/terms",
  "/cookies",
  "/dmca",
  "/acceptable-use",
  "/security",
  "/gdpr",
  "/affiliates",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return urls.map((u) => ({
    url: `${base}${u === "/" ? "" : u}`,
    lastModified: new Date(),
  }));
}
