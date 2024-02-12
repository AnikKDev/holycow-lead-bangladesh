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
		<div>
			<div
				className={cn('mx-auto flex max-w-7xl items-center gap-x-32', classes)}
			>
				<div className='flex w-1/2 flex-col pr-10'>
					<h2 className='mb-2 text-2xl font-bold text-primary'>{branchNum}</h2>
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
					<h1 className='my-2 mb-4 text-4xl font-[32px] leading-[41.6px] tracking-[3%]'>
						{branchName}
					</h1>
					<p className='mb-2 text-xl'>{branchLocation}</p>
					<a className='mb-8 text-primary' href='#'>
						{branchEmail}
					</a>
					<h3 className='mb-4 text-[32px] font-[500] tracking-[3%]'>
						Opening Hours
					</h3>
					{branchOpeningHours}
				</div>
				<div className='w-1/2'>
					<img alt='Map' className='h-auto w-full' src={branchImg.src} />
				</div>
			</div>
		</div>
	)
}
