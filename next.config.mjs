/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/_list", // Путь, который будет использоваться в запросах
        destination: "http://51.20.120.3/", // Целевой URL-адрес вашего API
      },
      // {
      //   source: '/image/:path*', // Путь для запросов к изображениям
      //   destination: 'http://51.20.120.3/image/:path*', // Целевой URL для изображений
      // },
    ];
  },
};

export default nextConfig;
