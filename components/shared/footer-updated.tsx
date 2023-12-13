import React from 'react'

import ExtraLinks from './FooterComponents/extra-links'
import FooterSocialConnects from './FooterComponents/footer-social-connects'
import FooterAbout from './FooterComponents/FooterAbout'
import FooterCopyrights from './FooterComponents/FooterCopyrights'
import FooterInsta from './FooterComponents/FooterInsta'

type Props = {}

export default function FooterUpdated({}: Props) {
	return (
		<footer className='bg-primary text-secondary mobile-sm:p-3 mobile-md:p-3 _desktop-sm:p-20 _desktop-sm:pb-12 _desktop-md:p-20 _desktop-md:pb-12'>
			{/* <div className='_desktop-lg:justify-items-center grid gap-5 mobile-sm:grid-cols-2 mobile-sm:justify-items-start mobile-md:grid-cols-2 mobile-lg:grid-cols-2 _desktop-sm:grid-cols-4 _desktop-sm:justify-items-center _desktop-md:grid-cols-4 _desktop-md:justify-items-center'> */}
			<div className='grid-cols-auto-fit-minmax _desktop-lg:justify-items-center grid  gap-5 mobile-sm:justify-items-start  _desktop-sm:grid-cols-4 _desktop-sm:justify-items-center _desktop-md:grid-cols-4 _desktop-md:justify-items-center'>
				<FooterInsta />
				{/* <FooterLocations /> */}
				<FooterAbout />
				<ExtraLinks />
				{/* <FooterLogoSection /> */}
				<FooterSocialConnects />
			</div>
			{/* copyrights */}

			<FooterCopyrights />
		</footer>
	)
}
