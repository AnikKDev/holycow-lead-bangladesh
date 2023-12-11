import React from 'react'
import { footerExtraLinksArr } from '@/constants/footer.constant'

type Props = {}

export default function ExtraLinks({}: Props) {
	return (
		<div>
			{/* locations */}
			<h5 className='mb-6 text-lg font-bold text-white'>...</h5>
			<ul>
				{footerExtraLinksArr.map((location) => (
					<li className='mb-3' key={location.name}>
						{location.name}
					</li>
				))}
			</ul>
		</div>
	)
}
