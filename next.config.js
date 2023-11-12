// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});


module.exports = withBundleAnalyzer({
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	eslint: {
		dirs: ['.'],
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'd1s1i0e6ao95bj.cloudfront.net',
    //     port: '',
		// 	},
		// ],
	},
	poweredByHeader: false,
	trailingSlash: true,
	basePath: '',
	// The starter code load resources from `public` folder with `router.basePath` in React components.
	// So, the source code is "basePath-ready".
	// You can remove `basePath` if you don't need it.
	reactStrictMode: true,
})
