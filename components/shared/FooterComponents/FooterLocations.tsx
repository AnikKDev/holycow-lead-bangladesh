import React from 'react'
import { locationsArr } from '@/constants/footer.constant'

type Props = {}

export default function FooterLocations({}: Props) {
	return (
		<div>
			{/* locations */}
			<h5 className='mb-6 text-lg font-bold text-white'>Our locations</h5>
			<ul>
				{locationsArr.map((location) => (
					<li className='mb-2' key={location.text}>
						{location.text}
					</li>
				))}
			</ul>
		</div>
	)
}
