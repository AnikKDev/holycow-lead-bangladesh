import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'

import Branches from '@/components/v2/contact-us/branches'
import TakeawaySection from '@/components/v2/contact-us/takeaway-section'
import DeliveryAndDine from '@/components/v2/home-components/header/DeliveryAndDine'
import ContactForm from '@/components/v2/private-event/contact-form'
import BannerContents from '@/components/v2/shared/banner-contents'

type Props = {}

const ContactUs = (props: Props) => {
	return (
		<>
			{/* banner here */}
			<div className='container'>
				<BannerContents text='Contact Us' image={bg.src} />
			</div>
			<div className='mx-auto max-w-5xl px-4'>
				<DeliveryAndDine />
				{/* branches */}
				<div>
					<Branches
						branchOpeningHours={
							<>
								<ul className='w-full font-open_sans font-[400] leading-[31.5px] tracking-[4%] text-[#727272]'>
									<li className='mb-1'>Monday: 2:00 pm – 11:00 pm</li>
									<li className='mb-1'>Tuesday: 2:00 pm – 11:00 pm</li>
									<li className='mb-1'>Wednesday: 2:00 pm – 11:00 pm</li>
									<li className='mb-1'>Thursday: 2:00 pm – 11:00 pm</li>
									<li className='mb-1'>Friday: 2:00 pm – 11:00 pm</li>
									<li className='mb-1'>Saturday: 2:00 pm – 11:00 pm</li>
									<li className='mb-1'>Sunday: 2:00 pm – 11:00 pm</li>
								</ul>
							</>
						}
						branchEmail='canarywharf@holycowonline.com'
						branchLocation='In canary Wharf, London'
						branchName='Holy Cow Indian Restaurant & Bar'
						branchNum='Branch'
						classes='flex-row-reverse'
					/>
					<TakeawaySection />
					<div className='mx-auto max-w-7xl'>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
}
export default ContactUs
