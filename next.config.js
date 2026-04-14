/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    output: "export", // 🔥 this creates the build folder (out)
    trailingSlash: true, // Creates folder/index.html structure (better for standard servers)

    images: {
        unoptimized: true,
    },

    sassOptions: {
        includePaths: ['./src/styles'],
    },
};

export default nextConfig;
