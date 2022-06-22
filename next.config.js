/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "br.atsit.in",
      "encrypted-tbn0.gstatic.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
