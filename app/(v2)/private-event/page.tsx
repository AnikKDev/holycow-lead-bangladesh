import React from 'react'

import ContactForm from '@/components/v2/private-event/contact-form'
import BannerContents from '@/components/v2/shared/banner-contents'
import PageInfo from '@/components/v2/shared/page-info'
import SectionHeader from '@/components/v2/shared/SectionHeader'

type Props = {}

export default function PrivateEvent({}: Props) {
	return (
		<section className='bg-gradient-to-b from-[#E8D3A2] via-[#F3F2EB] to-[#F3F2EB]'>
			<div className='mx-auto w-[1327px] space-y-24'>
				{/* banner here */}
				<div>
					<BannerContents text='Private event' />
				</div>
				{/* page info */}
				<SectionHeader
					subTitle='Make your event Simply Unforgettable'
					title='Our dedicated events team helps you every step of the way. Intimate dinners, festive stand-up cocktail parties, unique corporate functions, and bespoke tasting experiences featuring sushi, sake offer endless possibilities!'
					subTitleSize='small'
				/>
				{/* message to us form */}
				<ContactForm />
			</div>
		</section>
	)
}
