/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yamuna-bucket.s3.ap-south-1.amazonaws.com','firebasestorage.googleapis.com','yamunaashacity.com','127.0.0.1','admin.yamunaashacity.com'],
  },
}

module.exports = nextConfig
