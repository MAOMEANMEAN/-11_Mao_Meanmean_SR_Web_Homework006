/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.wired.com', // Wildcard for all subdomains of example.com
      },
      {
        protocol: 'https',
        hostname: 'files.vplak.com', // Wildcard for all subdomains of example.com
      },
      {
        protocol: 'https',
        hostname: 'freerangestock.com', // Wildcard for all subdomains of example.com
      },
    ],
  }
}

export default nextConfig;
