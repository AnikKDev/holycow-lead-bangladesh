import React from 'react'
import { menuItemsArr } from '@/constants/footer.constant'

type Props = {}

export default function FooterAbout({}: Props) {
	return (
		<div>
			{/* about */}
			<h5 className='mb-6 text-lg font-bold text-white'>About</h5>
			<ul>
				{menuItemsArr.map((location) => (
					<li className='mb-2' key={location.text}>
						{location.text}
					</li>
				))}
			</ul>
		</div>
	)
}
