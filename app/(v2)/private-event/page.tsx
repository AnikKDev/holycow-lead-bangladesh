import React from 'react'

import ContactForm from '@/components/v2/private-event/contact-form'
import BannerContents from '@/components/v2/shared/banner-contents'
import PageInfo from '@/components/v2/shared/page-info'

type Props = {}

export default function PrivateEvent({}: Props) {
	return (
		<section className='container'>
			{/* banner here */}
			<div className='private-event__header'>
				<BannerContents text='Private event' />
			</div>
			{/* page info */}
			<div className='container'>
				<PageInfo
					heading='Make your event Simply Unforgettable'
					infoData='Our dedicated events team helps you every step of the way. Intimate dinners, festive stand-up cocktail parties, unique corporate functions, and bespoke tasting experiences featuring sushi, sake offer endless possibilities!'
				/>
			</div>
			{/* message to us form */}
			<ContactForm />
		</section>
	)
}
