/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: "/:path*",
    //             destination: "http://localhost:5001/:path*",
    //         },
    //     ];
    // },
}

module.exports = nextConfig

// const path = require("path");
// const withSass = require("@zeit/next-sass");
// module.exports = withSass({
//     /* bydefault config  option Read For More Optios
// here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
// */
//     cssModules: true,
// });
// module.exports = {
//     experimental: {
//         appDir: true,
//     },
//     reactStrictMode: true,
//     /* Add Your Scss File Folder Path Here */
//     sassOptions: {
//         includePaths: [path.join(__dirname, "styles")],
//     },
//     async rewrites() {
//         return [
//             {
//                 source: "/:path*",
//                 destination: "http://localhost:5001/:path*",
//             },
//         ];
//     },
// };