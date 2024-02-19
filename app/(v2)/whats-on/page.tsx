import React from 'react'
import Image from 'next/image'
import bg from '@/assets/career/career-and-offer-bg.png'
import AwardBackground from '@/assets/v2/home-page/award-bg.png'
import OffersImg from '@/assets/v2/offers/offers.png'

import { cn } from '@/lib/utils'
import OffersCard from '@/components/v2/offers/offers-card'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

type Props = {}

export default function Offers({}: Props) {
	return (
		<div className='mb-16'>
			{/* banner here */}
			<div className='container'>
				<BannerContents text='Offers' image={bg.src} />
			</div>
			<div className='mx-auto w-full max-w-5xl px-4'>
				{/* page info */}
				<div className='my-16'>
					<SectionHeader title='Whats On' showSpoon={false} />
				</div>
				{/* offer cards */}
				<OffersCard backgroundImage={AwardBackground} offerImage={OffersImg} />
			</div>
		</div>
	)
}
