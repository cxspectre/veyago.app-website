/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/**" }],
  },
  async redirects() {
    return [{ source: "/press", destination: "/contact", permanent: true }];
  },
};

module.exports = nextConfig;
