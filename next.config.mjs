/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Note: It's better to fix errors than to ignore them!
    ignoreBuildErrors: true, 
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;