import FooterContact from './FooterComponents/footer-contact'
import FooterServices from './FooterComponents/footer-services'
import FooterAbout from './FooterComponents/FooterAbout'
import FooterCopyrights from './FooterComponents/FooterCopyrights'
import FooterLogoSection from './FooterComponents/FooterLogoSection'

type Props = {}

export default function Footer({}: Props) {
	return (
		<footer className='mt-12 bg-primary text-secondary-foreground '>
			<div className='_desktop-lg:justify-items-center grid gap-5 mobile-sm:grid-cols-2 mobile-sm:justify-items-start mobile-sm:p-3 mobile-md:grid-cols-2 mobile-md:p-3 mobile-lg:grid-cols-2 _desktop-sm:grid-cols-4 _desktop-sm:justify-items-center _desktop-sm:p-20 _desktop-md:grid-cols-4 _desktop-md:justify-items-center _desktop-md:p-20'>
				<FooterLogoSection />
				<FooterAbout />
				<FooterServices />
				<FooterContact />
			</div>
			{/* copyrights */}

			<FooterCopyrights />
		</footer>
	)
}
