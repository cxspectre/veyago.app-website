import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/account/", "/investors/room"],
      },
    ],
    sitemap: "https://veyago.app/sitemap.xml",
    host: "https://veyago.app",
  };
}
