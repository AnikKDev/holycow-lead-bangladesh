import Image, { StaticImageData } from 'next/image'

import { apiUrl } from '@/lib/constatns'

type Props = {
	offerImage?: StaticImageData
	backgroundImage?: StaticImageData
	title: string
	subtitle: string
	thumbnail: string
	description: string
	offerType: string
	idx: number
}

export default function OffersCard({
	backgroundImage,
	offerImage,
	description,
	offerType,
	subtitle,
	thumbnail,
	title,
	idx,
}: Props) {
	return (
		<section className='mb-12'>
			<div
				className={`flex items-center justify-center gap-[78px] mobile-sm:flex-col-reverse mobile-md:flex-col-reverse   ${
					idx % 2 === 0
						? '_desktop-sm:flex-row-revers _desktop-md:flex-row-reverse'
						: '_desktop-sm:flex-row _desktop-md:flex-row'
				}`}
			>
				<div className='flex  gap-4'>
					<div className='flex max-w-[489px] flex-col gap-4'>
						{/* spoon and the sub-title */}
						<div className='flex w-full flex-col items-center gap-4 md:items-start'>
							<svg
								width='40'
								height='9'
								viewBox='0 0 40 9'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0_198_419)'>
									<path
										d='M33.5026 9C37.0859 9 40.001 6.98129 40.001 4.49995C40.001 2.01861 37.0859 0 33.5026 0C30.1132 0 27.3231 1.80637 27.031 4.1018H22.3539V3.1552L0.000976562 3.1552V5.84446L22.354 5.84446V4.89798H27.0311C27.3232 7.19352 30.1132 9 33.5026 9ZM21.4908 5.04839L0.864269 5.04839V3.95161L21.4908 3.95161V5.04839ZM27.8672 4.49995C27.8672 2.45778 30.3953 0.796403 33.5027 0.796403C36.61 0.796403 39.1382 2.45778 39.1382 4.49995C39.1382 6.54222 36.61 8.2037 33.5027 8.2037C30.3953 8.2037 27.8672 6.54222 27.8672 4.49995Z'
										fill='#BD9632'
									/>
								</g>
								<defs>
									<clipPath id='clip0_198_419'>
										<rect
											width='40'
											height='9'
											fill='white'
											transform='translate(0.000976562)'
										/>
									</clipPath>
								</defs>
							</svg>
							<h3 className='text-center text-lg font-medium capitalize leading-snug tracking-[0.04em] text-foreground text-opacity-70 md:text-left'>
								Latest Offers
							</h3>
						</div>
						<h4
							className='text-center text-2xl font-medium tracking-[0.04em] text-primary-dark md:text-left'
							style={{ lineHeight: 1.3 }}
						>
							{title}
						</h4>
						<p
							className='text-left text-center font-medium tracking-[0.04em] text-foreground'
							style={{ lineHeight: 1.75 }}
						>
							{subtitle}
						</p>
						<div className='mt-4'>
							<p className='leading-[31.5px] text-[#727272]'>{description}</p>
						</div>
					</div>
				</div>
				<div className='relative'>
					<Image
						src={apiUrl + thumbnail}
						width={335}
						height={349}
						alt='shortlisted for best indian restaurant in the deliveroo restaurant  2021 '
					/>
					<Image
						src={backgroundImage}
						alt='background'
						className='absolute left-[-145px] top-[80px]'
					/>
				</div>
			</div>
		</section>
	)
}
