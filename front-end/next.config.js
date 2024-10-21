/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
module.exports = nextConfig;
