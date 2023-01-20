/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placekitten.com",
      },
    ],
  },
};

module.exports = nextConfig;
