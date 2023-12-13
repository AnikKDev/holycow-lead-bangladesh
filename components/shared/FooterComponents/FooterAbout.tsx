import React from 'react'
import Link from 'next/link'
import { menuItemsArr, menuItemsArrUpdated } from '@/constants/footer.constant'

type Props = {}

export default function FooterAbout({}: Props) {
	return (
		<div>
			{/* about */}
			<h5 className='mb-6 text-lg font-bold text-white'>About Holy Cow</h5>
			<ul>
				{menuItemsArrUpdated.map((location) => (
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
