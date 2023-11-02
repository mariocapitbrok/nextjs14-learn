/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs14-learn.vercel.app',
        port: '',
        pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
