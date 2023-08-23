// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// next.config.js
module.exports = {
  distDir: "build", // Custom build directory
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Frame protection
          },
        ],
      },
    ];
  },
};
