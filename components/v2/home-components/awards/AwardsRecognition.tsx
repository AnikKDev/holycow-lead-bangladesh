import Image from 'next/image'
import awardBackground from '@/assets/v2/home-page/award-bg.png'
import awardIcon from '@/assets/v2/home-page/award-icon.png'
import awardImage from '@/assets/v2/home-page/award.png'

import SectionHeader from '../../shared/SectionHeader'

type Props = {}

const AwardsRecognition = (props: Props) => {
	return (
		<section className='container my-14 md:my-[144px]'>
			<SectionHeader title='Accolades Earned' subTitle='Awards & recognition' />
			<div className='mt-8  flex flex-col items-center gap-8 md:mt-[98px] md:flex-row'>
				<div className='flex flex-col items-center gap-2 md:items-start md:gap-4 _desktop-md:flex-row'>
					<Image src={awardIcon} alt='award icon' width={97} height={82.93} />

					<div className=''>
						<h4 className='text-center text-2xl font-medium leading-[1.3] tracking-[0.04em] text-[#905A09] md:text-left _desktop-sm:text-5xl _desktop-sm:leading-[1.3] _desktop-md:text-5xl _desktop-md:leading-[1.3]'>
							Best Indian Restaurant
						</h4>
						<p className='flex flex-col gap-1 text-sm leading-[1.7] tracking-[0.04em] text-[#414141] mobile-md:w-full md:max-w-[489px] md:text-lg md:leading-[1.7]'>
							<span>
								What makes Holy Cow Fine Indian Food so special? Style, Quality,
								Creativity, Refinement, but above all Taste!
							</span>
							<span>
								It’s because we take the finest quality, authentic, fresh
								ingredients. Our qualified, experienced chefs then creatively
								combine and balance the flavours to conjure up exquisite dishes,
								fit for a Maharajah.
							</span>
							<span>
								Everyone who knows and loves quality Indian food recognises the
								importance of well prepared, fresh ingredients. Yet here’s an
								added opportunity to experience a blend of new,
							</span>
						</p>
					</div>
				</div>
				<div className='relative flex-grow mobile-md:w-full md:min-w-fit'>
					<Image
						src={awardImage}
						width={648}
						height={480}
						className='h-full w-full'
						alt='shortlisted for best indian restaurant in the deliveroo restaurant award 2021 '
					/>
					<Image
						src={awardBackground}
						alt='background'
						className='absolute left-[-145px] top-[205px]'
					/>
				</div>
			</div>
		</section>
	)
}

export default AwardsRecognition
