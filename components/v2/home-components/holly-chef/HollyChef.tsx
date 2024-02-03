import React from 'react'
import Image from 'next/image'

import SectionHeader from '../../shared/SectionHeader'

type Props = {}

const HollyChef = (props: Props) => {
	return (
		<section className='mt-[192px] flex flex-col items-center gap-16'>
			<SectionHeader
				title='What makes Holy Cow Fine Indian Food so special?'
				subTitle='Holy Chef'
				containsAlign='left'
			/>
			<div className='flex gap-[115px]'>
				<div className='flex max-w-[453px] flex-col gap-24'>
					<div className='flex max-w-[329px] flex-col gap-16'>
						<p className='font-open_sans text-base leading-7 tracking-[0.04em] text-[#414141]'>
							It’s because we take the finest quality, authentic, fresh
							ingredients. Our qualified, experienced chefs then creatively
							combine and balance the flavours to conjure up exquisite dishes,
							fit for a Maharajah. And all our dishes are served steaming hot
							into special stay-fresh packs, ready to collect, or be delivered
							to your door – within 45 minutes*
						</p>
						<Image
							src='http://via.placeholder.com/125'
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
				<div className='relative my-[63px]'>
					<span className='absolute -top-[63px] left-[289px] -z-10 h-[1101px] w-[717px] bg-background'></span>
					<Image
						src='http://via.placeholder.com/767x975'
						alt='restaurant'
						width={767}
						height={975}
					/>
				</div>
			</div>
		</section>
	)
}

export default HollyChef
