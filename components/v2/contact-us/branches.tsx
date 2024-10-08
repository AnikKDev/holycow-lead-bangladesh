import React from 'react'
import branchImg from '@/assets/v2/contact-us/branch_map.png'

import { cn } from '@/lib/utils'

type Props = {
	branchNum: string
	branchName: string
	branchLocation: string
	branchEmail: string
	branchOpeningHours: React.ReactNode
	classes?: string
}

export default function Branches({
	branchNum,
	classes,
	branchName,
	branchLocation,
	branchEmail,
	branchOpeningHours,
}: Props) {
	return (
		<div className='mb-16'>
			<div
				className={cn(
					'flex flex-wrap items-center justify-center gap-4 md:flex-nowrap',
					classes
				)}
			>
				<div className='flex flex-col items-center md:items-start'>
					<h2 className='mb-2 text-center text-lg font-bold text-primary-dark'>
						{branchNum}
					</h2>
					<svg
						width='40'
						height='9'
						viewBox='0 0 40 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='self-center md:self-start'
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
					<h1 className='my-2 text-center text-2xl leading-[41.6px] tracking-[3%] md:text-left'>
						{branchName}
					</h1>
					<p className='mb-2 text-xl'>{branchLocation}</p>
					<a className='mb-8 font-medium text-primary-dark' href='#'>
						{branchEmail}
					</a>
					<h3 className='mb-4 text-2xl font-[500] tracking-[3%]'>
						Opening Hours
					</h3>
					{branchOpeningHours}
				</div>
				<div className='w-full max-w-[450px] mobile-sm:max-w-full'>
					<iframe
						className='w-full'
						title='Google Map'
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.524271043807!2d-0.037518289573799685!3d51.510207406295436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035c9d47dac9%3A0xd7305bea4136e0a9!2sHoly%20Cow%20-%20Fine%20Indian%20Dining%20-%20Indian%20Restaurant%20%26%20Takeaway%20in%20Limehouse%20-%20Canary%20Wharf!5e0!3m2!1sen!2sus!4v1711744855008!5m2!1sen!2sus'
						width='600'
						height='450'
						style={{ border: '0' }}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
		</div>
	)
}
