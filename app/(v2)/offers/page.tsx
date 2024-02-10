import React from 'react'
import AwardBackground from '@/assets/v2/home-page/award-bg.png'
import OffersImg from '@/assets/v2/offers/offers.png'

import SharedBanner from '@/components/v2/shared/shared-banner'

type Props = {}

export default function Offers({}: Props) {
	return (
		<SharedBanner
			backgroundImage={AwardBackground}
			bannerContentsText='Offers'
			cardInfo='Monday to Thursday till 31st January 2024! Offer available
		at Putney and Canary Wharf restaurant via online booking
		only.'
			cardSubtitle='3-course meal + welcome drink, all for just $30 per person'
			cardTitle='Ring In The New Year With Culinary Delights!'
			offerImage={OffersImg}
			sectionHeaderTitle='Whats On'
			spoonText=' Latest Offers'
		/>
	)
}
