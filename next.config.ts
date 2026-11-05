import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async redirects() {
    // Legacy un-prefixed URLs → Arabic (default) locale
    return [
      { source: "/", destination: "/ar", permanent: true },
      { source: "/about", destination: "/ar/about", permanent: true },
      { source: "/why", destination: "/ar/why", permanent: true },
      { source: "/contact", destination: "/ar/contact", permanent: true },
      { source: "/team", destination: "/ar/team", permanent: true },
      { source: "/experiences", destination: "/ar/experiences", permanent: true },
      { source: "/blog", destination: "/ar/blog", permanent: true },
      { source: "/services", destination: "/ar/services", permanent: true },
      // Only page routes — never static files such as /services/dental.jpg
      { source: "/services/:dept(dental|cosmetic|hair|bariatric)", destination: "/ar/services/:dept", permanent: true },
      { source: "/services/:dept(dental|cosmetic|hair|bariatric)/:service", destination: "/ar/services/:dept/:service", permanent: true },
    ];
  },
};

export default nextConfig;
