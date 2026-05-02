/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
     
      {
        
        hostname: 'covers.openlibrary.org',
        
      },
      {
        hostname: 'lh3.googleusercontent.com',
       
      },
      {
        hostname: 'www.freepik.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'i.pravatar.cc',
      }
    ]
  },
};

export default nextConfig;
