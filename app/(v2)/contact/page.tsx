import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'

import Branches from '@/components/v2/contact-us/branches'
import TakeawaySection from '@/components/v2/contact-us/takeaway-section'
import DeliveryAndDine from '@/components/v2/home-components/header/DeliveryAndDine'
import ContactForm from '@/components/v2/private-event/contact-form'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'

type Props = {}

const ContactUs = (props: Props) => {
	return (
		<>
			{/* banner here */}
			<div className='container'>
				<BannerContents text='Contact Us' image={bg.src} />
			</div>
			<div className='mx-auto max-w-5xl'>
				<DeliveryAndDine />
				{/* branches */}
				<div>
					<Branches
						branchOpeningHours={
							<>
								<ul className='font-open_sans text-sm font-[400] leading-[31.5px] tracking-[4%] text-[#727272]'>
									<li className=''>Monday: 5:00 pm - 11:00 pm</li>
									<li className=''>Tuesday: 5:00 pm - 11:00 pm</li>
									<li className=''>Wednesday: 5:00 pm - 11:00 pm</li>
									<li className=''>Thursday: 5:00 pm - 11:00 pm</li>
									<li className=''>Friday: 5:00 pm - 11:00 pm</li>
									<li className=''>Saturday: 5:00 pm - 11:00 pm</li>
									<li className=''>Sunday: 5:00 pm - 11:00 pm</li>
								</ul>
							</>
						}
						branchEmail='restaurant@holycowonline.com'
						branchLocation='In Putney, London'
						branchName='Holy Cow Indian Restaurant & Bar'
						branchNum='Branch 1'
					/>

					<Branches
						branchOpeningHours={
							<>
								<ul className='font-open_sans font-[400] leading-[31.5px] tracking-[4%] text-[#727272]'>
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
						branchNum='Branch 2'
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
