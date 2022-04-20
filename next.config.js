/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['someshwarvista.com','someshwar-bucket.s3.ap-south-1.amazonaws.com','yamuna-bucket.s3.ap-south-1.amazonaws.com','firebasestorage.googleapis.com','yamunaashacity.com','127.0.0.1','admin.yamunaashacity.com'],
  },
}

module.exports = nextConfig
