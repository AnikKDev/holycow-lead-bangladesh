'use client'

import React from 'react'
import Image from 'next/image'
import bg from '@/assets/career/career-and-offer-bg.png'
import AwardBackground from '@/assets/v2/home-page/award-bg.png'
import OffersImg from '@/assets/v2/offers/offers.png'
import { useGetAllOffersQuery } from '@/redux/slices/marketingSlice/marketingApiSlice'
import { fi } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import OffersCard from '@/components/v2/offers/offers-card'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

type Props = {}

export default function Offers({}: Props) {
	const {
		data: allOffers,
		isLoading: allOffersLoading,
		isError: allOffersError,
		isSuccess: allOffersSuccess,
	} = useGetAllOffersQuery(undefined)
	/* displayable components */
	let displayableContent
	if (allOffersLoading && !allOffersError && !allOffersSuccess)
		displayableContent = <h3>Getting offers...</h3>
	else if (
		!allOffersLoading &&
		allOffersSuccess &&
		!allOffersError &&
		allOffers.menu.length === 0
	)
		displayableContent = <h3>No offers available at this moment!</h3>
	else if (!allOffersLoading && allOffersError && !allOffersSuccess)
		displayableContent = (
			<h3>Error geting the offers. Please refresh the page. </h3>
		)
	else
		displayableContent = allOffers.menu.map((offer, idx) => (
			<OffersCard
				description={offer.description}
				offerType={offer.offer_type}
				subtitle={offer.subtitle}
				title={offer.title}
				thumbnail={offer.thumbnail}
				backgroundImage={AwardBackground}
				offerImage={OffersImg}
				idx={idx + 1}
			/>
		))
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
				{displayableContent}
			</div>
		</div>
	)
}
