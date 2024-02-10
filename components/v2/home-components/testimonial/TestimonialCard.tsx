import React from 'react'
import Image from 'next/image'
import { Props } from 'next/script'
import DoubleQuotation from '@/assets/v2/home-page/double-quotation.svg'
import { Review } from '@/types'
import { Rating as ReactRating, ThinStar } from '@smastrom/react-rating'

const ratingStyles = {
	itemShapes: ThinStar,
	activeFillColor: '#FAAE1D',
	activeStrokeColor: '#FAAE1D',
	inactiveFillColor: '#E9E3D4',
	inactiveStrokeColor: '#FAAE1D',
	itemStrokeWidth: 1,
}

const TestimonialCard = ({ review, reviewer, rating, image }: Review) => {
	return (
		<article className='relative flex h-full flex-col justify-between rounded border border-[#E9DBBC] bg-[#f3f2eb] p-4'>
			<div className='flex h-full gap-[18px] md:mb-[77px] md:ml-12 md:mt-[50px]'>
				<div className='flex flex-1'>
					<Image
						className='h-[46px] w-[58px] rotate-[-10.35] md:h-[66px] md:w-[78px]'
						src={DoubleQuotation}
						width={78}
						height={66}
						alt='double quotation'
					/>
					<p className='pt-[9.11px] font-open_sans text-xs font-semibold italic leading-7 tracking-[0.04em] text-[#8A877E] md:pr-9 md:text-lg'>
						{`“${review}”`}
					</p>
				</div>
			</div>
			<div className='relative bg-[#905A09]/10 md:py-[43px] md:pl-[60px]'>
				<div className='flex flex-col gap-2 md:gap-4'>
					<h4
						className='text-xl font-medium tracking-[0.04em] text-primary md:text-3xl'
						style={{
							letterSpacing: 1.3,
						}}
					>
						{reviewer}
					</h4>
					<ReactRating
						style={{ maxWidth: 100 }}
						value={parseInt(rating)}
						readOnly
						itemStyles={ratingStyles}
					/>
				</div>
				<div className='absolute -top-[45%] right-[10%] h-[80px] w-[80px] rounded-full border border-[#E9DBBC] bg-white p-3 md:h-[125px] md:w-[125px]'>
					<Image
						className='rounded-full'
						width={125}
						height={125}
						src={image ? image : 'http://via.placeholder.com/125'}
						alt='user name'
						style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
					/>
				</div>
			</div>
		</article>
	)
}

export default TestimonialCard
