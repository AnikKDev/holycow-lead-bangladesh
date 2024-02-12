import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Branches from '@/components/v2/contact-us/branches'
import TakeawaySection from '@/components/v2/contact-us/takeaway-section'
import DeliveryAndDine from '@/components/v2/home-components/header/DeliveryAndDine'
import PhotoGallery from '@/components/v2/home-components/photo_gallery/PhotoGallery'
import ContactForm from '@/components/v2/private-event/contact-form'
import HappyHours from '@/components/v2/reservation/happy-hours'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'
import VideoPlayer from '@/components/v2/shared/VideoPlayer'

type Props = {}

export default function Reservation({}: Props) {
	return (
		<>
			<GradientWrapper>
				{/* banner here */}
				<div>
					<BannerContents text='Reservation' image={bg.src} />
				</div>
				<div className='my-32'>
					<SectionHeader
						subTitle='Grab-N-Taste'
						title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget. '
						subTitleSize='medium'
					/>
					<Button className='mx-auto my-12 block'>Book A Table</Button>
				</div>
			</GradientWrapper>
			{/* separator */}
			<Separator className='container my-20 max-w-7xl' />
			{/* branches */}
			<div>
				<Branches
					branchOpeningHours={
						<>
							<ul className='font-open_sans font-[400] leading-[31.5px] tracking-[4%] text-[#727272]'>
								<li className='mb-1'>Monday: 5:00 pm - 11:00 pm</li>
								<li className='mb-1'>Tuesday: 5:00 pm - 11:00 pm</li>
								<li className='mb-1'>Wednesday: 5:00 pm - 11:00 pm</li>
								<li className='mb-1'>Thursday: 5:00 pm - 11:00 pm</li>
								<li className='mb-1'>Friday: 5:00 pm - 11:00 pm</li>
								<li className='mb-1'>Saturday: 5:00 pm - 11:00 pm</li>
								<li className='mb-1'>Sunday: 5:00 pm - 11:00 pm</li>
							</ul>
						</>
					}
					branchEmail='restaurant@holycowonline.com'
					branchLocation='In Putney, London'
					branchName='Holy Cow Indian Restaurant & Bar'
					branchNum='Putney'
				/>
				{/* happy section */}
				<div className='mt-10'>
					<HappyHours />
				</div>
				<div className='mx-auto mt-20 max-w-7xl'>
					<VideoPlayer />
				</div>
				<PhotoGallery />
			</div>
		</>
	)
}
