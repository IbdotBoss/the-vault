/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/the-vault',
  assetPrefix: '/the-vault',
  images: { unoptimized: true },
};

export default nextConfig;