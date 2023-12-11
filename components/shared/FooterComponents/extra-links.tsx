import React from 'react'
import Link from 'next/link'
import { footerExtraLinksArr } from '@/constants/footer.constant'

type Props = {}

export default function ExtraLinks({}: Props) {
	return (
		<div>
			{/* locations */}
			<h5 className='mb-6 text-lg font-bold text-white'>...</h5>
			<ul>
				{footerExtraLinksArr.map((location) => (
					<Link href={location.navigateTo} className='hover:underline'>
						<li className='mb-3' key={location.name}>
							{location.name}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
