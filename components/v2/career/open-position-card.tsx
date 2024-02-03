import React from 'react'

import { Button } from '@/components/ui/button'

type Props = {}

export default function OpenPositionCard({}: Props) {
	return (
		<div className='mx-auto my-8 max-w-4xl space-y-8 font-lora'>
			<div className='rounded-lg border p-6'>
				<h2 className='text-3xl font-bold text-secondary'>Store Manager</h2>
				<div className='mt-4 grid grid-cols-2 gap-4 text-[20px] leading-[2] tracking-[0.04em] text-primary'>
					<div>
						<p className=''>
							<span className='font-[500]'>Vacancy:</span>{' '}
							<span className='font-[400]'>01</span>
						</p>
						<p className=''>
							<span className='font-[500]'>Job Location:</span>{' '}
							<span className='font-[400]'>Putney</span>
						</p>
						<p className='f'>Job Type: Full Time</p>
						<Button className='mt-4 bg-background text-primary'>
							View Details
						</Button>
					</div>
					<div>
						<p className=''>
							<span className='font-[500]'>Salary:</span>{' '}
							<span className='font-[400]'>Negotiable</span>
						</p>
						<p className=''>
							<span className='font-[400]'>Deadline:</span>{' '}
							<span className='font-[400]'>February 15, 2024</span>
						</p>
					</div>
				</div>
			</div>
			<div className='rounded-lg border p-6'>
				<h2 className='text-3xl font-bold text-secondary'>Curry Chef</h2>
				<div className='mt-4 grid grid-cols-2 gap-4 text-[20px] leading-[2] text-primary'>
					<div>
						<p className=''>
							<span className='font-[500]'>Vacancy:</span>{' '}
							<span className='font-[400]'>01</span>
						</p>
						<p className=''>
							<span className='font-[500]'>Job Location:</span>{' '}
							<span className='font-[400]'>Putney</span>
						</p>
						<p className='f'>Job Type: Full Time</p>
						<Button className='mt-4 bg-background text-primary'>
							View Details
						</Button>
					</div>
					<div>
						<p className=''>
							<span className='font-[500]'>Salary:</span>{' '}
							<span className='font-[400]'>Negotiable</span>
						</p>
						<p className=''>
							<span className='font-[400]'>Deadline:</span>{' '}
							<span className='font-[400]'>February 15, 2024</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
