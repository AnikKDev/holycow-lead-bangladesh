import React from 'react'
import Image from 'next/image'
import img1 from '@/assets/v2/home-page/holy-chef-menu-1.png'
import img2 from '@/assets/v2/home-page/holy-chef-menu-2.png'

import SectionHeader from '../../shared/SectionHeader'

type Props = {}

const HollyChef = (props: Props) => {
	return (
		<section className='container mt-[192px] flex flex-col justify-center gap-16'>
			<SectionHeader
				title='What makes Holy Cow Fine Indian Food so special?'
				subTitle='Holy Chef'
				containsAlign='left'
			/>
			<div className='flex justify-between'>
				<div className='flex max-w-[460px] flex-col gap-24'>
					<div className='flex max-w-[360px] flex-col gap-16'>
						<p className='font-open_sans text-base leading-7 tracking-[0.04em] text-[#414141]'>
							It’s because we take the finest quality, authentic, fresh
							ingredients. Our qualified, experienced chefs then creatively
							combine and balance the flavours to conjure up exquisite dishes,
							fit for a Maharajah. And all our dishes are served steaming hot
							into special stay-fresh packs, ready to collect, or be delivered
							to your door – within 45 minutes*
						</p>
						<Image
							src={img2}
							width={340}
							height={399}
							alt='restaurant-menu-2'
						/>
					</div>
					<div className='flex flex-col gap-3 tracking-[0.04em]'>
						<p
							className='font-lora text-xl font-medium capitalize  text-primary'
							style={{
								lineHeight: 1.58,
							}}
						>
							UX Copy (subtitle), Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Quis pharetra adipiscing ultrices vulputate
							posuere tristique.
						</p>
						<p className=' flex flex-col gap-1 font-open_sans text-base font-semibold capitalize leading-7 text-[#5f5f60]'>
							<span>Name</span>
							<span className='text-xs text-[#d3bd78]'>Manager</span>
						</p>
					</div>
				</div>
				<div className='relative flex w-full justify-end mobile-md:hidden md:min-h-[975px]'>
					<span className='absolute -bottom-[5.72%] -right-[17.8%] -top-[5.72%] left-[34.98%] -z-10 bg-background'></span>
					<Image
						src={img1}
						alt='restaurant'
						width={767}
						height={975}
						className='max-w-[75%]'
					/>
				</div>
			</div>
		</section>
	)
}

export default HollyChef
