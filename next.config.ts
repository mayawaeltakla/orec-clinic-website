import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  async headers() {
    // Static photos never change under the same name: cache hard in the browser and on Vercel's edge
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    const daily = [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }];
    return [
      { source: "/service-images/:path*", headers: immutable },
      { source: "/services/:file(.*\\.(?:jpg|jpeg|png|webp|avif))", headers: immutable },
      { source: "/:file(.*\\.(?:jpg|jpeg|png|webp|svg))", headers: daily },
    ];
  },
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
      { source: "/faq", destination: "/ar/faq", permanent: true },
      { source: "/services", destination: "/ar/services", permanent: true },
      // Only page routes — never static files such as /services/dental.jpg
      { source: "/services/:dept(dental|cosmetic|hair|bariatric)", destination: "/ar/services/:dept", permanent: true },
      { source: "/services/:dept(dental|cosmetic|hair|bariatric)/:service", destination: "/ar/services/:dept/:service", permanent: true },
    ];
  },
};

export default nextConfig;
