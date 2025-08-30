/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [] // スクリーンショット保存先のドメインを追加する
  }
};

module.exports = nextConfig;