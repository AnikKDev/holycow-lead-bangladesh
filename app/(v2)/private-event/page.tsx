import React from 'react'
import bg from '@/assets/private-info/private-info-bg.png'

import ContactForm from '@/components/v2/private-event/contact-form'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

type Props = {}

export default function PrivateEvent({}: Props) {
	return (
		<div className='mb-24'>
			{/* banner here */}
			<div className='container'>
				<BannerContents text='Private event' image={bg.src} />
			</div>
			{/* page info */}
			<div className='mx-auto max-w-5xl'>
				<div className='my-20'>
					<SectionHeader
						subTitle='Make your event Simply Unforgettable'
						title='Our dedicated events team helps you every step of the way. Intimate dinners, festive stand-up cocktail parties, unique corporate functions, and bespoke tasting experiences featuring sushi, sake offer endless possibilities!'
						subTitleSize='small'
					/>
				</div>
				{/* message to us form */}
				<div>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}
