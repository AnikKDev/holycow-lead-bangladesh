import React from 'react'
import Link from 'next/link'
import {
	footerServices,
	menuItemsArr,
	menuItemsArrUpdated,
} from '@/constants/footer.constant'

type Props = {}

export default function FooterServices({}: Props) {
	return (
		<div className='text-center'>
			{/* about */}
			<h5 className='mb-6 text-lg font-bold text-white'>Our Services</h5>
			<ul>
				{footerServices.map((location) => (
					<li className='mb-3' key={location.text}>
						<Link href={location.navigateTo} className='hover:underline'>
							{location.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
