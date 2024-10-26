/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
           {
            protocol:"https", 
            hostname:"negativespace.co"
           }
        ]
    } 
};

export default nextConfig;
