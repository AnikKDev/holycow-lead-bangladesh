import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'

import { takeawayLocationsListData } from '@/components/shared/data'
import DeliveryAndDine from '@/components/v2/home-components/header/DeliveryAndDine'
import ContactForm from '@/components/v2/private-event/contact-form'
import BannerContents from '@/components/v2/shared/banner-contents'
import TakeawayLocationsList from '@/components/v2/shared/takeaway-locations/TakeawayLocationsList'

type Props = {}

const ContactUs = (props: Props) => {
	return (
		<>
			<div className='container space-y-16'>
				<BannerContents text='Contact Us' image={bg.src} />
				<DeliveryAndDine />
				<section className='my-10 space-y-8'>
					<h2 className='text-center font-lora text-3xl font-medium capitalize leading-[1.3] tracking-[0.04em] text-foreground'>
						Takeaway Locations
					</h2>
					<TakeawayLocationsList
						takeawayLocationsList={takeawayLocationsListData}
					/>
				</section>
				<ContactForm />
			</div>
		</>
	)
}
export default ContactUs
