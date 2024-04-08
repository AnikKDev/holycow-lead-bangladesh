import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import bg from '@/assets/v2/secondary-bg.png'

import { lunchMenu } from '@/lib/restaurantData'
import { HomeShowLocationsModal } from '@/components/home-components/home-modal'
import BannerContents from '@/components/v2/shared/banner-contents'
import FoodCard from '@/components/v2/shared/card/FoodCard'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'
import LunchMenuPopUp from '@/components/v2/takeaway-components/LunchMenuPopUp'

export const metadata: Metadata = {
	title: 'Lunch Menu',
}
const Page = () => {
	return (
		<>
			<GradientWrapper>
				<div className='px-2 md:px-4 _desktop-md:px-8'>
					<BannerContents text='Lunch Menu' image={bg.src} />
				</div>
				<div className='!m-0 !mt-8 flex flex-col gap-12'>
					<SectionHeader
						subTitle='Grab-N-Taste'
						title='We are pleased to inform you that Holy Cow – Fine Indian Food will serve a fresh lunch menu at all our takeaway locations! Starting from the 5th of December 2022.'
						subTitleSize='small'
					/>
					<hr className='border-t border-dotted border-[#727272]' />
				</div>
			</GradientWrapper>

			<div className='container flex flex-col items-center font-lora tracking-[0.03em] text-foreground'>
				<h3 className='py-8 text-center text-4xl font-medium leading-[1.3] md:py-16 md:text-[56px] md:leading-[1.3]'>
					Lunch Menu
				</h3>
				<div className='columns-1 gap-[54px] pb-16 md:columns-2'>
					{lunchMenu.food_list_items?.map((item, index) => (
						<FoodCard
							key={index}
							id={index}
							food_name={item.food_name}
							description={item.description}
							price={item.price}
						/>
					))}
				</div>

				<LunchMenuPopUp />
			</div>
		</>
	)
}

export default Page
