/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    // Does NOT block the build on eslint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
