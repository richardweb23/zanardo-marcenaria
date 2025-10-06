/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ativa exportação estática
  images: {
    unoptimized: true, // necessário se usar next/image
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
