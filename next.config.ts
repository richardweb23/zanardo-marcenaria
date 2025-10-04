/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // ativa exportação estática
  basePath: isProd ? '/zanardo-marcenaria' : '', // necessário para GitHub Pages
  assetPrefix: isProd ? '/zanardo-marcenaria/' : '', // corrige caminhos de assets
  images: {
    unoptimized: true, // necessário se usar next/image
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
