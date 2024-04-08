import Link from 'next/link'
import bg from '@/assets/career/career-and-offer-bg.png'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Branches from '@/components/v2/contact-us/branches'
import PhotoGallery from '@/components/v2/home-components/photo_gallery/PhotoGallery'
import HappyHours from '@/components/v2/reservation/happy-hours'
import ReservationSuccessOrFailure from '@/components/v2/reservation/reservation-success'
import BannerContents from '@/components/v2/shared/banner-contents'
import SectionHeader from '@/components/v2/shared/SectionHeader'
import VideoPlayer from '@/components/v2/shared/VideoPlayer'

type Props = {}

export default function Reservation({}: Props) {
	return (
		<>
			{/* success or failure popup */}
			<ReservationSuccessOrFailure />
			{/* banner here */}
			<div className='container'>
				<BannerContents text='Reservation' image={bg.src} />
			</div>
			<div className='container mx-auto max-w-5xl'>
				<div className='my-10 mobile-md:my-5'>
					<SectionHeader
						subTitle='Grab-N-Taste'
						title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget. '
						subTitleSize='medium'
					/>
					<Link href={'/locations/limehouse-canary-wharf-indian-restaurant'}>
						<Button className='mx-auto my-5 block'>Book A Table</Button>
					</Link>
				</div>
				{/* separator */}
				<Separator className='container my-10 max-w-7xl' />
				{/* branches */}
				<div>
					<Branches
						branchOpeningHours={
							<>
								<ul className='font-open_sans text-sm font-[400] leading-[31.5px] tracking-[4%] text-[#727272]'>
									<li>Monday: 2:00 pm - 11:00 pm</li>
									<li>Tuesday: 2:00 pm - 11:00 pm</li>
									<li>Wednesday: 2:00 pm - 11:00 pm</li>
									<li>Thursday: 2:00 pm - 11:00 pm</li>
									<li>Friday: 2:00 pm - 11:00 pm</li>
									<li>Saturday: 2:00 pm - 11:00 pm</li>
									<li>Sunday: 2:00 pm - 11:00 pm</li>
								</ul>
							</>
						}
						branchEmail='canarywharf@holycowonline.com'
						branchLocation='Unit 2, Adriatic Building 45/51 narrow street E14 8DN'
						branchName='Holy Cow (Canary Wharf) Limited.'
						branchNum='Limehouse – Canary Wharf'
					/>
					{/* happy section */}
					<div className='mt-4'>
						<HappyHours />
					</div>
					<div className='mx-auto mt-10 max-w-7xl'>
						<VideoPlayer />
					</div>
				</div>
			</div>
			<PhotoGallery />
		</>
	)
}
