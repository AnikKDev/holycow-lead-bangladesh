import { ReduxProvider } from '@/redux/provider'

import { siteConfig } from '@/config/site'

import '@smastrom/react-rating/style.css'
import '@/styles/globals.css'

import { Lora, Open_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'
import AppTopBar from '@/components/shared/app-topbar'
import FooterUpdated from '@/components/shared/footer-updated'

const fontOpenSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open_sans',
	weight: ['300', '400', '500', '700'],
})
const fontLora = Lora({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lora',
	weight: ['400', '500', '700'],
})

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'HolyCow',
		'Holy Cow - Fine Indian Food',
		'Best Indian Restaurant in London | Holy Cow | Fine Indian Food',
	],
	authors: [
		{
			name: 'Lead Bangladesh',
			url: 'https://leadbangladesh.com/',
		},
	],
	creator: 'Lead Bangladesh',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: '@HolyCowLondonUK',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	// manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			className={cn(fontOpenSans.variable, fontLora.variable)}
			lang='en'
			suppressHydrationWarning
		>
			<head />
			<body className={cn('min-h-screen bg-foreground antialiased')}>
				<ReduxProvider>
					{/* navbar / topbar */}
					<AppTopBar />
					<main className='_desktop-lg:max-w-7xl mx-auto'>{children}</main>
					{/* <Footer /> */}
					{/* <FooterUpdated /> */}
				</ReduxProvider>
			</body>
		</html>
	)
}
