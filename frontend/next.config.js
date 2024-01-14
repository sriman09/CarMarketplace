/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "car-marketplace.s3.ap-south-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
