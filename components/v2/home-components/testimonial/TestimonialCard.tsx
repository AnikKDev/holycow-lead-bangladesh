import React from 'react'
import Image from 'next/image'
import DoubleQuotation from '@/assets/v2/home-page/double-quotation.svg'
import reviewerImage from '@/assets/v2/home-page/reviewer.png'
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
		<article className='relative flex h-full flex-col justify-between rounded border border-[#E9DBBC] bg-background'>
			<div className='flex h-full gap-[18px] p-4 md:mb-[77px] md:ml-12 md:mt-[50px]'>
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
			<div className='relative bg-[#905A091A] p-4 md:py-[43px] md:pl-[60px]'>
				<div className='flex flex-col gap-2 md:gap-4'>
					<h4
						className='text-xl font-medium tracking-[0.04em] text-foreground md:text-3xl'
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
						src={image ? image : reviewerImage}
						alt='user name'
						style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
					/>
				</div>
			</div>
		</article>
	)
}

export default TestimonialCard
