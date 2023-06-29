// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com",
      "upload.wikimedia.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com",
      },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;
