// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },

      { protocol: "https", hostname: "**upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;
