// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

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
		remotePatterns: [
			{
				// protocol: 'http',
				// hostname: 'ec2-15-168-142-203.ap-northeast-3.compute.amazonaws.com',
		    // port: '',
				protocol: 'http',
        hostname: '**.amazonaws.com',
			},
		],
	},
	poweredByHeader: false,
	// !update
	trailingSlash: true,
	basePath: '',
	// The starter code load resources from `public` folder with `router.basePath` in React components.
	// So, the source code is "basePath-ready".
	// You can remove `basePath` if you don't need it.
	reactStrictMode: true,
})
