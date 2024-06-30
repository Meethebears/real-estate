/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.iproperty.com.my',
            port: '',
            pathname: '/thinkofliving/1620x5000-fit,format=webp/wp-content/uploads/1/2019/02/01162532/66-1.jpg',
          },
          {
            protocol: 'https',
            hostname: 'www.shutterstock.com',
            port: '',
            pathname: '/image-vector/vector-black-icon-kitchen-260nw-1460521604.jpg',
          },
        ],
      },
};

export default nextConfig;
