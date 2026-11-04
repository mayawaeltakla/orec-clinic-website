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
      { source: "/services", destination: "/ar/services", permanent: true },
      { source: "/services/:path*", destination: "/ar/services/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
