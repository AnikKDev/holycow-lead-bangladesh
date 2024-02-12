import React from 'react'
import Link from 'next/link'
import bg from '@/assets/v2/secondary-bg.png'

import { lunchMenu } from '@/lib/restaurantData'
import BannerContents from '@/components/v2/shared/banner-contents'
import FoodCard from '@/components/v2/shared/card/FoodCard'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import SectionHeader from '@/components/v2/shared/SectionHeader'

const Page = () => {
	return (
		<>
			<GradientWrapper>
				<div className='px-2 md:px-4 _desktop-md:px-8'>
					<BannerContents text='Lunch Menu' image={bg.src} />
				</div>
				<div className='container flex flex-col gap-24'>
					<SectionHeader
						subTitle='Grab-N-Taste'
						title='We are pleased to inform you that Holy Cow – Fine Indian Food will serve a fresh lunch menu at all our takeaway locations! Starting from the 5th of December 2022.'
						subTitleSize='small'
					/>
					<hr className='border-t border-dotted border-[#727272]' />
				</div>
			</GradientWrapper>

			<div className='container flex flex-col items-center pb-[144px] font-lora tracking-[0.03em] text-foreground'>
				<h3 className='py-8 text-center text-4xl font-medium leading-[1.3] md:py-24 md:text-[56px] md:leading-[1.3]'>
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

				<Link
					className='v2-custom-button bg-primary px-8 py-2 text-sm font-medium capitalize leading-[1.7] tracking-[0.04em] text-foreground'
					href={'/'}
				>
					Order Online
				</Link>
			</div>
		</>
	)
}

export default Page
