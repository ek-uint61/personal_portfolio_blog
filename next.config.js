const prod = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: !prod,
  maximumFileSizeToCacheInBytes: 10485760, // 10 MB
});

const nextConfig = {
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
