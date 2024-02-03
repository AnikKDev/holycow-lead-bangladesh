import React from 'react'
import Image from 'next/image'
import DoubleQuotation from '@/assets/v2/home-page/double-quotation.svg'

type Props = {}

const TestimonialCard = (props: Props) => {
	return (
		<article className='rounded border border-[#E9DBBC] bg-[#f3f2eb]'>
			<div className='mb-[77px] ml-12 mr-[67px] mt-[50px] flex gap-[18px]'>
				<Image
					className='h-[66px] w-[78px] rotate-[-10.35]'
					src={DoubleQuotation}
					width={78}
					height={66}
					alt='double quotation'
				/>
				<p className='pt-[9.11px] text-2xl font-semibold italic leading-7 tracking-[0.04em] text-[#8A877E]'>
					“Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit
					iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
					scelerisque scelerisque congue.”
				</p>
			</div>
			<div className='relative bg-[#905A09]/10 py-[43px] pl-[60px]'>
				<div className='flex flex-col gap-4'>
					<h4
						className='text-3xl tracking-[0.04em]'
						style={{
							letterSpacing: 1.3,
						}}
					>
						Mrs Lata
					</h4>
					******
				</div>
				<div className='absolute -top-[45px] right-[67px] h-[125px] w-[125px] rounded-full border border-[#E9DBBC] bg-white p-3'>
					<Image
						className='rounded-full'
						width={125}
						height={125}
						src='http://via.placeholder.com/125'
						alt='user name'
						style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
					/>
				</div>
			</div>
		</article>
	)
}

export default TestimonialCard
