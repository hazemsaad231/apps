/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tadbeer-two.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'tadbeer.wj.edu.sa',
      },
    ],
  },
};

export default nextConfig;
