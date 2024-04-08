import React from 'react'
import Link from 'next/link'
import { menuItemsArrUpdated } from '@/constants/footer.constant'

type Props = {}

export default function FooterAbout({}: Props) {
	return (
		<div className='text-center'>
			{/* about */}
			<h5 className='mb-6 text-lg font-bold text-[#0C0B08]'>About Holy Cow</h5>
			<ul className='text-[#414141]'>
				{menuItemsArrUpdated.map((location) => (
					<li className='mb-3 text-sm' key={location.text}>
						<Link href={location.navigateTo} className='hover:underline'>
							{location.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
