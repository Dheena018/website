/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['images.unsplash.com']
    // },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'www.google.com',
    //         port: '',
    //         pathname: '/account123/**',
    //       },
    //     ],
    //   },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.unsplash.com"
            }
        ]
    }
};

export default nextConfig;
