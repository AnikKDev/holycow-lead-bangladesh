import React from 'react'

import { Button } from '@/components/ui/button'

type Props = {}

export default function TakeawaySection({}: Props) {
	return (
		<div className='my-16 px-10 text-center'>
			<h2 className='text-lg font-[500] tracking-widest text-[#905A09]'>
				Takeaway
			</h2>
			<h1 className='mt-2 text-3xl font-[500] text-foreground'>
				Holy Cow Indian Takeaway In London
			</h1>
			<p className='mt-4 text-sm text-primary'>
				info@holycowonline.com{'\n      '}
			</p>
			<h3 className='mb-4 mt-10 text-2xl font-[500] text-foreground'>
				Opening Hours
			</h3>
			<div className='text-sm font-[400] leading-[31.5px] text-[#727272]'>
				<p className=''>5:30pm to 11:00pm Monday – Thursday</p>
				<p className=''>5:00pm to 11:00pm Friday – Saturday</p>
				<p className=''>5:30pm to 10:30pm Sunday</p>
			</div>
			<Button className='mt-6 bg-[#d4a373] text-white hover:bg-[#b37659]'>
				View Takeaway Location
			</Button>
		</div>
	)
}
