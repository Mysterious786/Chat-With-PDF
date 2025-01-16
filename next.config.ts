/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        // pathname: '/account123/**' // Uncomment if you need specific path matching
      }
    ]
  }
};

export default nextConfig;
