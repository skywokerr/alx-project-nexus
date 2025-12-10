/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;