// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
